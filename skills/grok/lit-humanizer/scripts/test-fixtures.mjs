#!/usr/bin/env node
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { exitCode, parseRules, scanText } from './core.mjs';
import { extractTextForFile } from './extract.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
let negativeRoot = resolve(root, 'fixtures/negative');
for (let index = 0; index < args.length; index += 1) {
  if (args[index] !== '--negative-root' || !args[index + 1]) throw new Error('Usage: node scripts/test-fixtures.mjs [--negative-root DIR]');
  negativeRoot = resolve(args[++index]);
}
const rules = parseRules(readFileSync(resolve(root, 'rules.json'), 'utf8'));
const cases = JSON.parse(readFileSync(resolve(root, 'fixtures/rule-cases.json'), 'utf8'));
const positiveCounts = new Map(rules.map((rule) => [rule.id, 0]));
const negativeCounts = new Map(rules.map((rule) => [rule.id, 0]));

for (const rule of rules) {
  const positiveId = `${rule.id}:positive`;
  const negativeId = `${rule.id}:negative`;
  assert(rule.fixture_ids.includes(positiveId), `${rule.id} is missing its positive fixture id`);
  assert(rule.fixture_ids.includes(negativeId), `${rule.id} is missing its negative fixture id`);
  const positive = cases.positive[rule.id];
  const negative = cases.negative[rule.id];
  assert.equal(typeof positive, 'string', `missing positive fixture for ${rule.id}`);
  assert.equal(typeof negative, 'string', `missing negative fixture for ${rule.id}`);
  assert(scanText(positive, [rule], `${rule.id}-positive.txt`).length > 0, `${rule.id} missed its positive fixture`);
  assert.equal(scanText(negative, [rule], `${rule.id}-negative.txt`).length, 0, `${rule.id} hit its negative fixture`);
  positiveCounts.set(rule.id, 1);
  negativeCounts.set(rule.id, 1);
}

const pyCheck = spawnSync('python3', ['-c', 'import json,re,sys; rules=json.load(sys.stdin); flags={"i":re.I,"m":re.M,"s":re.S}; [re.compile(r["pattern"], sum((flags[f] for f in r["flags"]), 0)) for r in rules]'], {
  input: JSON.stringify(rules.map(({ id, pattern, flags }) => ({ id, pattern, flags }))), encoding: 'utf8',
});
assert.equal(pyCheck.status, 0, `Python re compilation failed: ${pyCheck.stderr}`);

const contextRules = [rules.find((rule) => rule.id === 'en-plain-meta-label')];
assert.equal(scanText('Source: report\n', contextRules, 'quoted.md').length, 1);
assert.equal(scanText('> Source: quoted user wording\n', contextRules, 'quoted.md').length, 0);
assert.equal(scanText('```text\nSource: fenced sample\n```\n', contextRules, 'fenced.md').length, 0);
assert.equal(scanText('Source: inline `example`\n', contextRules, 'inline.md').length, 1);
assert.equal(scanText('Figure 3. Results\nSource: city dataset\n', contextRules, 'caption.md').length, 0);
assert.equal(scanText('Figure 3. Results\n```text\ncaption sample\n```\nSource: unrelated note\n', contextRules, 'after-fence.md').length, 1,
  'caption attribution exemption must not cross a fenced-code boundary');

const metaRules = rules.filter((rule) => ['ko-plain-meta-label', 'en-plain-meta-label'].includes(rule.id));
for (const fixture of cases.contextCases.plainSourceAttached) {
  const findings = scanText(fixture.text, metaRules, `caption-${fixture.name}.md`);
  if (fixture.clean) assert.equal(findings.length, 0, `${fixture.name} plain attribution should be exempt`);
  else assert(findings.length > 0, `${fixture.name} should block as prose or caveat-bearing metadata`);
}

const contrastRule = rules.find((rule) => rule.id === 'en-not-x-but-y');
for (const fixture of cases.contextCases.contrastThreshold) {
  const findings = scanText(fixture.text, [contrastRule], `contrast-${fixture.name}.md`);
  if (fixture.warn) assert.equal(findings.length, 1, `${fixture.name} should warn`);
  else assert.equal(findings.length, 0, `${fixture.name} should remain clean`);
}

for (const fixture of cases.contextCases.tierRegressions) {
  const rule = rules.find((item) => item.id === fixture.rule);
  assert(rule, `${fixture.name} references missing rule ${fixture.rule}`);
  const findings = scanText(fixture.text, [rule], `tier-${fixture.name}.txt`);
  if (fixture.expect === 'clean') assert.equal(findings.length, 0, `${fixture.name} should remain clean`);
  else assert(findings.some((hit) => hit.severity === fixture.expect),
    `${fixture.name} should produce a ${fixture.expect} hit for ${fixture.rule}`);
}

const sentenceRule = rules.find((rule) => rule.id === 'en-forced-triad');
const wrapped = scanText('The proposal is robust,\nintuitive, and scalable.', [sentenceRule], 'wrapped-sentence.md');
assert.equal(wrapped.length, 1, 'sentence scope must join a soft-wrapped sentence');
assert.equal(wrapped[0].line, 1, 'wrapped sentence finding must retain its source line');
assert.equal(scanText('The proposal is robust.\nThis review is intuitive, and the tool is scalable.', [sentenceRule], 'separate-sentences.md').length, 0,
  'sentence scope must not join separate sentences');

const mixedEnglish = rules.find((rule) => rule.id === 'en-hope-helps');
assert.equal(scanText('I hope this helps — 한국어 설명도 있습니다.', [mixedEnglish], 'mixed-language.md').length, 1,
  'English rules must remain active on mixed-language text');

const attributionRule = rules.find((rule) => rule.id === 'code-ai-attribution');
for (const trailer of [
  'Generated by an AI assistant',
  'Generated with ChatGPT',
  'Co-Authored-By: AI assistant <noreply@example.com>',
  'Authored-By: AI model'
]) {
  assert.equal(scanText(trailer, [attributionRule], 'commit-message.txt').length, 1,
    'AI attribution trailer should block: ' + trailer);
}
assert.equal(scanText('Generated with our build script', [attributionRule], 'commit-message.txt').length, 0,
  'ordinary build provenance should remain allowed');

const lineScopeRule = { ...contextRules[0], pattern: 'Alpha\\s+beta', regex: /Alpha\s+beta/i };
assert.equal(scanText('Alpha\nbeta', [lineScopeRule], 'line-scope.md').length, 0, 'line scope must stay on one physical line');
const documentScopeRule = { ...lineScopeRule, scope: 'document' };
const documentMatch = scanText('Alpha\nbeta', [documentScopeRule], 'document-scope.md');
assert.equal(documentMatch.length, 1, 'document scope must cross line breaks');
assert.equal(documentMatch[0].line, 1, 'document finding must retain its source line');

const negativeFiles = existsSync(negativeRoot) ? readdirSync(negativeRoot).filter((name) => name.endsWith('.txt')).sort() : [];
if (negativeFiles.length > 0) assert(negativeFiles.length >= 7, 'expected the five original corpora and two Korean public-sector samples');
const negativeByFile = new Map();
const negativeByRule = new Map(rules.map((rule) => [rule.id, { block: 0, warn: 0 }]));
for (const name of negativeFiles) {
  const file = resolve(negativeRoot, name);
  const content = readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  const lineCount = content.endsWith('\n') ? lines.length - 1 : lines.length;
  const hits = scanText(content, rules, `fixtures/negative/${name}`);
  const blocks = hits.filter((hit) => hit.severity === 'block');
  negativeByFile.set(name, { lines: lineCount, block: blocks.length, warn: hits.length - blocks.length });
  assert.equal(blocks.length, 0, `block hit in human corpus ${name}: ${JSON.stringify(blocks[0])}`);
  for (const hit of hits) negativeByRule.get(hit.rule)[hit.severity] += 1;
}

const realLines = readFileSync(resolve(root, 'fixtures/pos-real.txt'), 'utf8').split(/\r?\n/).filter(Boolean);
assert.equal(realLines.length, 26, 'all 26 real positive lines must remain represented');
const recallByRule = new Map(rules.map((rule) => [rule.id, 0]));
let recalled = 0;
let blockRecalled = 0;
let warnRecalled = 0;
for (const line of realLines) {
  const hits = scanText(line, rules, 'fixtures/pos-real.txt');
  if (hits.length > 0) recalled += 1;
  if (hits.some((hit) => hit.severity === 'block')) blockRecalled += 1;
  if (hits.some((hit) => hit.severity === 'warn')) warnRecalled += 1;
  for (const hit of hits) recallByRule.set(hit.rule, recallByRule.get(hit.rule) + 1);
}
assert(recalled >= 19, `canonical recall fell below 19/26: ${recalled}/26`);

for (const [name, expected] of [['minimal.docx', 'I hope this helps.'], ['minimal.pptx', 'Source: report table 4.']]) {
  const file = resolve(root, 'fixtures/office', name);
  const extracted = extractTextForFile(file);
  assert(extracted.includes(expected), `${name} did not yield expected text`);
  assert.equal(exitCode(scanText(extracted, rules, `deliverables/${name}`)), 2, `${name} should exercise detector blocking through Office extraction`);
}

const byTierAndLang = new Map();
for (const rule of rules) {
  const key = `${rule.severity}/${rule.lang}`;
  byTierAndLang.set(key, (byTierAndLang.get(key) ?? 0) + 1);
}
const totalNegative = [...negativeByFile.values()].reduce((sum, value) => sum + value.lines, 0);
const totalWarn = [...negativeByFile.values()].reduce((sum, value) => sum + value.warn, 0);
process.stdout.write(`Rules: ${rules.length}; by severity/language: ${[...byTierAndLang].map(([key, count]) => `${key}=${count}`).join(', ')}\n`);
process.stdout.write(`Rule fixtures: ${positiveCounts.size} positive and ${negativeCounts.size} clean negative cases passed.\n`);
process.stdout.write(`Tier regression cases: ${cases.contextCases.tierRegressions.length} passed.\n`);
process.stdout.write(`pos-real recall: block ${blockRecalled}/26, warn ${warnRecalled}/26, combined ${recalled}/26; per-rule: ${[...recallByRule].filter(([, count]) => count).map(([id, count]) => `${id}=${count}`).join(', ')}\n`);
process.stdout.write(negativeFiles.length
  ? `Human corpus: ${negativeFiles.length} files, ${totalNegative} lines, 0 block hits, ${totalWarn} warning hits.\n`
  : 'Human corpus: not bundled; pass --negative-root DIR to scan local negative corpora.\n');
process.stdout.write(`Negative warning hits by rule: ${[...negativeByRule].filter(([, count]) => count.warn).map(([id, count]) => `${id}=${count.warn}`).join(', ')}\n`);
for (const [name, counts] of negativeByFile) process.stdout.write(`  ${name}: ${counts.lines} lines, ${counts.block} block, ${counts.warn} warn\n`);
process.stdout.write('Office extraction and detector delegation: DOCX and PPTX passed.\n');
