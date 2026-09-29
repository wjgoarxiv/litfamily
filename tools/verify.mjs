import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, readdir, lstat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const litGrokHumanizer = {
  product: 'grok',
  id: 'lit-humanizer',
  sourceVersion: '1.0.12',
  sourceCommit: '17bf5e362b3ae2a265bb14b167e80af2a9812ada',
  sourcePath: '.grok/skills/lit-humanizer',
  destinationPath: 'skills/grok/lit-humanizer',
};

export function validateMarketplace(value, claudeCommit) {
  assert.equal(value.name, 'litfamily');
  assert.equal(value.owner.name, 'wjgoarxiv');
  assert.equal(value.plugins.length, 1, 'Only the Claude-compatible product belongs here');
  assert.match(claudeCommit, /^[a-f0-9]{40}$/, 'The catalog must supply a full curated Claude commit');
  assert.deepEqual(value.plugins[0].source, {
    source: 'git-subdir',
    url: 'https://github.com/wjgoarxiv/litclaude.git',
    path: 'plugins/litclaude',
    sha: claudeCommit,
  });
  assert.equal(value.plugins[0].name, 'litclaude');
  assert.equal(value.plugins[0].strict, true);
}

export function localTarget(base, document, reference) {
  base = path.resolve(base);
  if (/^(?:https?:|mailto:|#)/.test(reference)) return null;
  assert(!/^[a-z][a-z0-9+.-]*:/i.test(reference), `Unsupported link: ${reference}`);
  const pathname = decodeURIComponent(reference.split(/[?#]/, 1)[0]);
  assert(!path.isAbsolute(pathname), `Absolute local link: ${reference}`);
  const resolved = path.resolve(path.dirname(document), pathname);
  assert(resolved === base || resolved.startsWith(base + path.sep), `Escaping link: ${reference}`);
  return resolved;
}

export async function validateHashes(base, entries) {
  for (const entry of entries) {
    const target = localTarget(base, path.join(base, 'manifest.json'), entry.path);
    assert(target, 'Asset must be local');
    const data = await readFile(target);
    assert.equal(data.length, entry.bytes, `Size mismatch: ${entry.path}`);
    assert.equal(createHash('sha256').update(data).digest('hex'), entry.sha256, `Hash mismatch: ${entry.path}`);
  }
}

export async function validateSkillExports(base, exports) {
  base = path.resolve(base);
  assert.equal(exports.length, 1, 'The hub currently has one verified direct skill export');
  const entry = exports[0];
  for (const key of ['product', 'id', 'sourceVersion', 'sourceCommit', 'sourcePath', 'destinationPath']) {
    assert.equal(entry[key], litGrokHumanizer[key], `Unexpected LitGrok export ${key}`);
  }
  assert.equal(entry.host, 'Grok Build');
  assert.equal(entry.classification, 'host-scoped-self-contained');
  assert(entry.reason);
  assert.equal(entry.sourceUrl, `https://github.com/wjgoarxiv/litgrok/tree/${entry.sourceCommit}/${entry.sourcePath}`);

  const exportRoot = path.resolve(base, entry.destinationPath);
  assert(exportRoot.startsWith(base + path.sep), 'Export destination must stay inside the hub');
  const actual = (await walk(exportRoot)).map((file) => path.relative(exportRoot, file).split(path.sep).join('/')).sort();
  const listed = entry.files.map((file) => file.path).sort();
  assert.deepEqual(actual, listed, 'Export inventory must match the complete copied skill tree');
  assert(listed.includes('SKILL.md') && listed.includes('NOTICE'), 'Export must retain its entrypoint and notices');
  await validateHashes(base, entry.files.map((file) => ({
    ...file,
    path: path.posix.join(entry.destinationPath, file.path),
  })));
  return { exports: exports.length, files: listed.length };
}

export function validateProductProvenance(product) {
  assert.match(product.sourceCommit, /^[a-f0-9]{40}$/, 'Source must identify a full immutable commit');
  assert.equal(product.sourceHistory, 'curated-public');
  assert.equal(product.repository, `https://github.com/wjgoarxiv/lit${product.id}`);
  assert.equal(product.sourceUrl, `${product.repository}/tree/${product.sourceCommit}`);
  assert.equal(product.licensePath, `licenses/${product.id}-MIT.txt`);
  assert.match(product.licenseSha256, /^[a-f0-9]{64}$/, 'Source license must have a content hash');
  assert(Number.isSafeInteger(product.licenseBytes) && product.licenseBytes > 0);
}

async function walk(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name === '.git') continue;
    assert(!entry.isSymbolicLink(), `Symlink cannot be distributed: ${entry.name}`);
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await walk(target));
    else result.push(target);
  }
  return result;
}

export function documentReferences(text, markdown = false) {
  const references = [...text.matchAll(/(?:href|src|poster)=["']([^"']+)["']|url\(([^)]+)\)/g)].map((match) => match[1] ?? match[2]);
  if (markdown) references.push(...[...text.matchAll(/\]\(([^\s)]+)(?:\s+"[^"]*")?\)/g)].map((match) => match[1]));
  return references;
}

export async function verify(base = root) {
  const files = await walk(base);
  const json = async (name) => JSON.parse(await readFile(path.join(base, name), 'utf8'));
  const inventory = await json('docs/skill-inventory.json');
  assert.equal(inventory.schema, 'litfamily.skill-inventory/v1');
  assert.equal(inventory.products.length, 5);
  const products = new Set(inventory.products.map((product) => product.id));
  assert.deepEqual([...products].sort(), ['claude', 'codex', 'grok', 'hermes', 'opencode']);
  validateMarketplace(await json('.claude-plugin/marketplace.json'), inventory.products.find((product) => product.id === 'claude').sourceCommit);
  for (const product of inventory.products) {
    validateProductProvenance(product);
    await validateHashes(base, [{ path: product.licensePath, bytes: product.licenseBytes, sha256: product.licenseSha256 }]);
  }
  const keys = new Set();
  for (const entry of inventory.entries) {
    assert(products.has(entry.product), `Unattributed inventory entry: ${entry.path}`);
    const key = `${entry.product}:${entry.path}`;
    assert(!keys.has(key), `Duplicate inventory path: ${key}`);
    keys.add(key);
    assert.match(entry.sha256, /^[a-f0-9]{64}$/);
    assert(['native-entry', 'nested-mode', 'vendor-reference', 'test-fixture'].includes(entry.role));
    assert(entry.reason && entry.host && entry.bytes > 0);
    const product = inventory.products.find((product) => product.id === entry.product);
    assert.equal(entry.sourceUrl, `${product.repository}/blob/${product.sourceCommit}/${entry.path.split('/').map(encodeURIComponent).join('/')}`);
  }
  const exportedSource = inventory.entries.find((entry) => entry.product === 'grok' && entry.path === `${litGrokHumanizer.sourcePath}/SKILL.md`);
  assert(exportedSource && exportedSource.classification === 'host-scoped-self-contained');
  assert.equal(inventory.products.find((product) => product.id === 'grok').sourceCommit, litGrokHumanizer.sourceCommit, 'The export must come from the catalogued LitGrok commit');
  const exportStats = await validateSkillExports(base, inventory.exports);
  await assert.rejects(lstat(path.join(base, 'skills/grok/lit-korean')), { code: 'ENOENT' });
  const assets = await json('assets/brand/artifact-manifest.json');
  const fonts = await json('assets/brand/fonts/provenance.json');
  await validateHashes(path.join(base, 'assets/brand'), [...assets, ...fonts]);
  let localLinks = 0;
  for (const file of files) {
    const relative = path.relative(base, file);
    assert(!/(?:^|\/)(?:HANDOFF[^/]*\.md|\.litclaude|\.litcodex|\.litopencode|\.hermes|\.omo|evidence|plans|node_modules)(?:\/|$)/.test(relative), `Local state leak: ${relative}`);
    if (!/\.(?:md|html|mjs|json|yml|txt)$/.test(file)) continue;
    const text = await readFile(file, 'utf8');
    assert(!text.includes(['', 'Users', ''].join('/')), `Private absolute path: ${relative}`);
    assert(!/BEGIN (?:RSA |OPENSSH |EC )?PRIVATE KEY/.test(text), `Private key marker: ${relative}`);
    if (!/\.(?:md|html)$/.test(file)) continue;
    const references = documentReferences(text, file.endsWith('.md'));
    for (const reference of references) {
      const target = localTarget(base, file, reference);
      if (target) {
        assert((await lstat(target)).isFile(), `Missing regular-file link: ${relative} -> ${reference}`);
        localLinks++;
      }
    }
  }
  return { files: files.length, inventory: inventory.entries.length, nativeEntries: inventory.entries.filter((entry) => entry.role === 'native-entry').length, exports: exportStats.exports, exportFiles: exportStats.files, sourceLicenses: inventory.products.length, assets: assets.length, fonts: fonts.length, localLinks };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(JSON.stringify(await verify(), null, 2));
}
