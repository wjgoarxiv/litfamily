import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { test } from 'node:test';
import { mkdtemp, writeFile, rm, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { documentReferences, localTarget, validateMarketplace, validateHashes, validateProductProvenance, verify } from '../tools/verify.mjs';

test('the distributed hub closes links, source identity and asset hashes', async () => {
  const result = await verify();
  assert.equal(result.inventory, 356);
  assert.equal(result.nativeEntries, 304);
  assert.equal(result.exports, 1);
  assert.equal(result.exportFiles, 74);
});

test('the catalog attributes all seven products to their own hosts', async () => {
  const inventory = JSON.parse(await readFile(new URL('../docs/skill-inventory.json', import.meta.url), 'utf8'));
  assert.deepEqual(inventory.products.map(product => product.id).sort(), ['claude', 'codex', 'gravity', 'grok', 'hermes', 'muse', 'opencode']);
});

test('the standalone Grok export pins the LitGrok humanizer final public release commit', async () => {
  const inventory = JSON.parse(await readFile(new URL('../docs/skill-inventory.json', import.meta.url), 'utf8'));
  const entry = inventory.exports.find((item) => item.id === 'lit-humanizer');
  assert.equal(entry.product, 'grok');
  assert.equal(entry.sourceVersion, '1.0.28');
  assert.equal(entry.sourceCommit, 'a7a36bb4a26616c92a3586e78c4848143b7b67b2');
  assert.equal(entry.sourcePath, '.grok/skills/lit-humanizer');
  assert.equal(entry.destinationPath, 'skills/grok/lit-humanizer');
  assert.equal(entry.files.length, 74);
});

test('the hub binds the 2026-10-28 public release commits', async () => {
  const release = {
  "claude": {
    "version": "1.0.42",
    "sourceCommit": "69afd8164e9dadffe74f1e28e1c9a903ac5189b6",
    "repository": "https://github.com/wjgoarxiv/litclaude",
    "name": "LitClaude"
  },
  "hermes": {
    "version": "1.0.31",
    "sourceCommit": "88de078098393ee106cde1a60d84d3eb782d7bf4",
    "repository": "https://github.com/wjgoarxiv/lithermes",
    "name": "LitHermes"
  },
  "codex": {
    "version": "1.0.32",
    "sourceCommit": "e588ccccb1bb85ab9c200f0752b2451b7f3c04e5",
    "repository": "https://github.com/wjgoarxiv/litcodex",
    "name": "LitCodex"
  },
  "opencode": {
    "version": "1.0.33",
    "sourceCommit": "accd4813a39dd768da4e9c9d5804c68e6e44d32b",
    "repository": "https://github.com/wjgoarxiv/litopencode",
    "name": "LitOpenCode"
  },
  "grok": {
    "version": "1.0.28",
    "sourceCommit": "a7a36bb4a26616c92a3586e78c4848143b7b67b2",
    "repository": "https://github.com/wjgoarxiv/litgrok",
    "name": "LitGrok"
  },
  "muse": {
    "version": "0.1.3",
    "sourceCommit": "f984c10b1e28832ba78d997268b5f7fea9d1becf",
    "repository": "https://github.com/wjgoarxiv/litmuse",
    "name": "LitMuse"
  },
  "gravity": {
    "version": "0.1.3",
    "sourceCommit": "70280586aa668151550c08789bd04425b18902e7",
    "repository": "https://github.com/wjgoarxiv/litgravity",
    "name": "LitGravity"
  }
};
  const inventory = JSON.parse(await readFile(new URL('../docs/skill-inventory.json', import.meta.url), 'utf8'));
  for (const [id, expected] of Object.entries(release)) {
    const product = inventory.products.find((entry) => entry.id === id);
    assert.equal(product.version, expected.version);
    assert.equal(product.sourceCommit, expected.sourceCommit);
    assert.equal(product.sourceHistory, 'curated-public');
    assert.equal(product.sourceUrl, `${expected.repository}/tree/${expected.sourceCommit}`);
    assert.ok(inventory.entries.filter((entry) => entry.product === id).every((entry) => entry.version === expected.version), `${id} entry versions`);
  }
  const marketplace = JSON.parse(await readFile(new URL('../.claude-plugin/marketplace.json', import.meta.url), 'utf8'));
  assert.equal(marketplace.plugins[0].source.sha, release.claude.sourceCommit);
  const status = await readFile(new URL('../docs/release-status.md', import.meta.url), 'utf8');
  for (const expected of Object.values(release)) {
    const row = status.split('\n').find((line) => line.startsWith(`| ${expected.name} | ${expected.version} | published |`));
    assert(row && row.includes(expected.sourceCommit), `Missing release row for ${expected.name}`);
  }
});

test('the catalog lists the new skills at canonical vendor paths without the retired ones', async () => {
  const inventory = JSON.parse(await readFile(new URL('../docs/skill-inventory.json', import.meta.url), 'utf8'));
  assert.ok(inventory.entries.every((entry) => !/(?:^|\/)vendor\/\d{3}_/u.test(entry.path)), 'Numbered vendor directory in the catalog');
  for (const product of ['claude', 'hermes', 'codex', 'opencode', 'grok', 'muse', 'gravity']) {
    const native = inventory.entries.filter((entry) => entry.product === product && entry.role === 'native-entry').map((entry) => entry.id);
    for (const id of ['lit-humanizer', 'lit-docx', 'lit-pptx', 'lit-diagram-drawer', 'lit-typographic-motion', 'readme-studio', 'lit-adhd', 'lit-hijack', 'lit-schematic']) {
      assert.ok(native.includes(id), `${product} lacks ${id}`);
    }
    assert.ok(!native.includes('lit-korean'), `${product} still lists lit-korean as a native entry`);
  }
  const skills = await readFile(new URL('../docs/skills.md', import.meta.url), 'utf8');
  for (const id of ['lit-adhd', 'lit-rewind', 'lit-hijack', 'lit-schematic']) assert.ok(skills.includes('`' + id + '`'), `skills.md does not name ${id}`);
  assert.match(skills, /Grok `lit-scientific-visualization` links to `\.\.\/\.\.\/vendor\/scientific-visualization\/`/u);
});

test('both hub READMEs lead with the one robot motion cover and expose seven emphasis choices', async () => {
  const expected = {
  "litclaude": "116cd4eeb43b376b4502fc8f1768ea8dcc3252cdb5198e56ee8508d55170e75c",
  "lithermes": "22cd11187b35caecb1ef125099502adc7045b40b40945452662a476f5c76cb3a",
  "litcodex": "90099f77838a47c26ebd52fdec8c25a67071345a6c3b2bcbe7324d35d7ebb086",
  "litopencode": "cd82a5abc42e6e7aff2b08184767372174ad644cad74e1681ab7784ee4a712b3",
  "litgrok": "7a1eaf59b2292f1b879ab82d53bd645e5c2cafc83189ced49a84f946d83d58c0",
  "litmuse": "93b900ec51a6f4fb822f7d6590cc1ff7901f0dde142996c38367ca0dd83893a7",
  "litgravity": "c56c37cc87343632eaca21e4ab1e874522613c15b0435faf48d3b05e5ad8dcb3"
};
  const armory = await readFile(new URL('../assets/brand/exports/litfamily-armory.webp', import.meta.url));
  assert.equal(createHash('sha256').update(armory).digest('hex'), 'eaa94fe07f86deca1bafe7a5b89b64e93c775cc9989e31ea4853d5e1281c05f2');
  for (const name of ['README.md', 'README_ko-KR.md']) {
    const text = await readFile(new URL(`../${name}`, import.meta.url), 'utf8');
    assert.match(text, /^<p align="center"><picture><source media="\(prefers-reduced-motion: reduce\)" srcset="assets\/brand\/exports\/litfamily-cover-motion-still\.webp" \/><img src="assets\/brand\/exports\/litfamily-cover-motion\.webp"/u);
    const header = text.slice(0, text.indexOf('\n# '));
    assert.equal((header.match(/<img /gu) ?? []).length, 1, `${name} shows exactly one picture above the title`);
    assert.ok(header.includes('href="assets/brand/exports/litfamily-cover-motion-still.webp"'), `${name} links the still frame`);
    assert.ok(header.includes('href="assets/brand/exports/litfamily-cover-film.mp4"'), `${name} links the film with sound`);
    assert.ok(!text.includes('litfamily-armory.webp'), `${name} no longer shows the static armory cover`);
    assert.match(text, /litfamily-machines\.png/u);
    for (const [slug, hash] of Object.entries(expected)) {
      const asset = await readFile(new URL(`../assets/brand/exports/${slug}-emphasis.webp`, import.meta.url));
      assert.equal(createHash('sha256').update(asset).digest('hex'), hash, `${slug} cover hash`);
      assert.ok(text.includes(`assets/brand/exports/${slug}-emphasis.webp`), `${name} exposes ${slug} choice`);
      assert.ok(text.includes(`https://github.com/wjgoarxiv/${slug}`), `${name} links ${slug} canonical`);
    }
  }
  const manifest = JSON.parse(await readFile(new URL('../assets/brand/artifact-manifest.json', import.meta.url), 'utf8'));
  for (const [slug, hash] of Object.entries({ litfamily: 'eaa94fe07f86deca1bafe7a5b89b64e93c775cc9989e31ea4853d5e1281c05f2', ...expected })) {
    const entry = manifest.find((item) => item.path === `exports/${slug === 'litfamily' ? 'litfamily-armory' : `${slug}-emphasis`}.webp`);
    assert.equal(entry?.sha256, hash, `${slug} manifest hash`);
  }
});

test('source provenance requires an immutable commit and a product-owned license hash', () => {
  const product = { id: 'grok', repository: 'https://github.com/wjgoarxiv/litgrok', sourceHistory: 'curated-public', sourceCommit: 'a'.repeat(40), sourceUrl: 'https://github.com/wjgoarxiv/litgrok/tree/' + 'a'.repeat(40), licensePath: 'licenses/grok-MIT.txt', licenseSha256: 'b'.repeat(64), licenseBytes: 100 };
  validateProductProvenance(product);
  validateProductProvenance({ ...product, sourceHistory: 'local-candidate', releaseStatus: 'pending' });
  assert.throws(() => validateProductProvenance({ ...product, sourceHistory: 'local-candidate' }));
  assert.throws(() => validateProductProvenance({ ...product, sourceCommit: 'main' }));
  assert.throws(() => validateProductProvenance({ ...product, sourceCommit: undefined }));
  assert.throws(() => validateProductProvenance({ ...product, licensePath: '../foreign/LICENSE' }));
  assert.throws(() => validateProductProvenance({ ...product, licenseSha256: '' }));
  assert.throws(() => validateProductProvenance({ ...product, sourceHistory: 'private' }));
  assert.throws(() => validateProductProvenance({ ...product, sourceUrl: product.repository + '/tree/main' }));
});

test('the marketplace pins the same curated Claude commit as the source catalog', () => {
  const sha = 'a'.repeat(40);
  const source = { source: 'git-subdir', url: 'https://github.com/wjgoarxiv/litclaude.git', path: 'plugins/litclaude', sha };
  const marketplace = { name: 'litfamily', owner: { name: 'wjgoarxiv' }, plugins: [{ name: 'litclaude', strict: true, source }] };
  validateMarketplace(marketplace, sha);
  assert.throws(() => validateMarketplace({ ...marketplace, plugins: [{ ...marketplace.plugins[0], source: { ...source, sha: undefined } }] }, sha));
  assert.throws(() => validateMarketplace({ ...marketplace, plugins: [{ ...marketplace.plugins[0], source: { ...source, sha: 'main' } }] }, sha));
  assert.throws(() => validateMarketplace(marketplace, 'b'.repeat(40)));
});

test('a nonexistent GitHub subdirectory schema cannot masquerade as the native source', () => {
  const marketplace = { name: 'litfamily', owner: { name: 'wjgoarxiv' }, plugins: [{ name: 'litclaude', strict: true, source: { source: 'github', repo: 'wjgoarxiv/litclaude', path: 'plugins/litclaude' } }] };
  assert.throws(() => validateMarketplace(marketplace));
});

test('relative resources cannot escape the independently copied distribution', () => {
  assert.throws(() => localTarget('/bundle', '/bundle/SKILL.md', '../vendor/helper.py'));
  assert.throws(() => localTarget('/bundle', '/bundle/SKILL.md', '%2e%2e/secret'));
  assert.throws(() => localTarget('/bundle', '/bundle/SKILL.md', '/private/file'));
  assert.equal(localTarget('/bundle', '/bundle/SKILL.md', 'references/guide.md'), '/bundle/references/guide.md');
});

test('a mutated or missing asset fails the same hash check used for distributed files', async () => {
  const directory = await mkdtemp(path.join(tmpdir(), 'litfamily-hash-'));
  try {
    await writeFile(path.join(directory, 'asset.txt'), 'changed');
    await assert.rejects(validateHashes(directory, [{ path: 'asset.txt', bytes: 7, sha256: '0'.repeat(64) }]));
    await assert.rejects(validateHashes(directory, [{ path: 'missing.txt', bytes: 0, sha256: '0'.repeat(64) }]));
  } finally {
    await rm(directory, { recursive: true });
  }
});


test('README HTML assets and motion posters are enrolled in local link validation', () => {
  assert.deepEqual(documentReferences('<p><img src="mark.svg"><a href="docs/skills.md">Docs</a></p>\n[film](film.mp4)', true), ['mark.svg', 'docs/skills.md', 'film.mp4']);
  assert.deepEqual(documentReferences("<video poster='poster.png'><source src='film.mp4'></video>"), ['poster.png', 'film.mp4']);
  for (const reference of documentReferences('<img src="../outside.svg"><a href="%2e%2e/private">escape</a>', true)) {
    assert.throws(() => localTarget('/bundle', '/bundle/README.md', reference));
  }
});

test('new member installation and native registration remain host-specific', async () => {
  for (const name of ['README.md', 'README_ko-KR.md']) {
    const text = await readFile(new URL('../' + name, import.meta.url), 'utf8');
    for (const id of ['muse', 'gravity']) {
      assert(text.includes('@litfamily/lit' + id + '@0.1.3 install'));
      assert(text.includes('https://www.npmjs.com/package/@litfamily/lit' + id));
    }
    assert(text.includes('Muse Code'));
    assert(text.includes('Antigravity CLI'));
    assert(text.includes('lit start plans/<slug>.md'));
    assert(text.includes('Meta'));
  }
  const gallery = await readFile(new URL('../assets/brand/gallery.html', import.meta.url), 'utf8');
  for (const id of ['muse', 'gravity']) {
    for (const suffix of ['-cover.svg', '-cover.webp', '-icon.svg', '-social.png']) assert(gallery.includes(id + suffix));
  }
});

test('all install routes pin the 2026-10-28 released versions', async () => {
  const expected = { claude: '1.0.42', hermes: '1.0.31', codex: '1.0.32', opencode: '1.0.33', grok: '1.0.28', muse: '0.1.3', gravity: '0.1.3' };
  const inventory = JSON.parse(await readFile(new URL('../docs/skill-inventory.json', import.meta.url), 'utf8'));
  assert.equal(inventory.state, 'released');
  for (const product of inventory.products) {
    assert.equal(product.version, expected[product.id]);
    assert.equal(product.sourceHistory, 'curated-public');
    assert.equal(product.releaseStatus, undefined);
  }
  for (const name of ['README.md', 'README_ko-KR.md', 'assets/brand/gallery.html']) {
    const text = await readFile(new URL('../' + name, import.meta.url), 'utf8');
    for (const [id, version] of Object.entries(expected)) assert(text.includes('@litfamily/lit' + id + '@' + version), name + ': ' + id);
    assert(!text.includes('@latest'));
  }
});
