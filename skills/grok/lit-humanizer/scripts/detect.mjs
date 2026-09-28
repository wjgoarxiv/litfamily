#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { exitCode, parseRules, scanText } from './core.mjs';
import { extractTextForFile } from './extract.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const usage = 'Usage: node scripts/detect.mjs [--json] [--rules FILE] [FILE ...] (use - or omit FILE to read stdin)';

function contentFor(file) {
  return file === '-' ? readFileSync(0, 'utf8') : extractTextForFile(file);
}

function main() {
  const args = process.argv.slice(2);
  const json = args.includes('--json');
  if (args.includes('--help')) {
    process.stdout.write(`${usage}\n`);
    return 0;
  }
  let rulesPath = resolve(here, '../rules.json');
  const files = [];
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--json') continue;
    if (arg === '--rules') {
      index += 1;
      if (!args[index]) throw new Error('--rules requires a path');
      rulesPath = resolve(args[index]);
      continue;
    }
    if (arg.startsWith('--')) throw new Error(`unknown option: ${arg}`);
    files.push(arg);
  }
  if (files.length === 0) files.push('-');
  const rules = parseRules(readFileSync(rulesPath, 'utf8'));
  const findings = [];
  const errors = [];
  const scanned = [];
  for (const file of files) {
    try {
      findings.push(...scanText(contentFor(file), rules, file));
      scanned.push(file);
    } catch (error) {
      errors.push({ file, message: error instanceof Error ? error.message : String(error) });
    }
  }
  const block = findings.filter((item) => item.severity === 'block').length;
  const warn = findings.filter((item) => item.severity === 'warn').length;
  if (json) process.stdout.write(`${JSON.stringify({ scanned, summary: { block, warn }, findings, errors }, null, 2)}\n`);
  else {
    for (const item of findings) process.stdout.write(`${item.file}:${item.line}: ${item.severity} ${item.rule}: ${item.excerpt}\n`);
    for (const item of errors) process.stderr.write(`${item.file}: error: ${item.message}\n`);
    process.stdout.write(`Scanned ${scanned.length} file(s): ${block} block, ${warn} warning hit(s).\n`);
  }
  return errors.length ? 2 : exitCode(findings);
}

try {
  process.exitCode = main();
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  process.stderr.write(`${usage}\n${message}\n`);
  process.exitCode = 2;
}
