import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIRECTORY = new URL('.', import.meta.url);
const OFFICE_EXTRACTOR = fileURLToPath(new URL('./extract_office_text.py', SCRIPT_DIRECTORY));
const OFFICE_TYPES = new Set(['.docx', '.pptx']);
const MAX_OUTPUT_BYTES = 32 * 1024 * 1024;

function run(command, args, label) {
  const result = spawnSync(command, args, {
    encoding: 'utf8', maxBuffer: MAX_OUTPUT_BYTES, timeout: 3500,
  });
  if (result.error) throw new Error(`${label}: ${result.error.message}`);
  if (result.status !== 0) throw new Error(`${label}: ${(result.stderr || `exit ${result.status}`).trim()}`);
  return result.stdout;
}

export function extractTextForFile(file) {
  const extension = extname(file).toLowerCase();
  if (OFFICE_TYPES.has(extension)) return run('python3', [OFFICE_EXTRACTOR, resolve(file)], 'Office extraction failed');
  if (extension === '.pdf') return run('pdftotext', ['-layout', resolve(file), '-'], 'PDF extraction failed');
  return readFileSync(file, 'utf8');
}
