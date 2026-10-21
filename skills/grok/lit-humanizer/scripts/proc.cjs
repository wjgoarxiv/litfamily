"use strict";

// The one place LitGrok skill scripts start child processes and look up executables, so Windows
// behaves like the other hosts. Three Windows facts it carries:
//   - Node (18.20.2, 20.12.2, 21.7.3 and every 22+) refuses to spawn a .cmd or .bat without a shell
//     (CVE-2024-27980), so `npm`, `npx` and every npm-installed CLI shim must go through here.
//   - A bare name only matches a file once PATHEXT is applied (`ffmpeg` is `ffmpeg.exe`).
//   - Child output ends its lines with \r\n.
// Every function takes an optional context ({ platform, env, execPath, exists }) so tests can pose
// as win32 without touching process globals.

const { existsSync, statSync } = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const CMD_SHIM = /\.(cmd|bat)$/iu;

function isFile(file) {
  try { return statSync(file).isFile(); } catch { return false; }
}

function context(options = {}) {
  return {
    platform: options.platform ?? process.platform,
    env: options.env ?? process.env,
    execPath: options.execPath ?? process.execPath,
    exists: options.exists ?? isFile,
  };
}

function flavour(platform) { return platform === 'win32' ? path.win32 : path.posix; }

// Windows names the variable Path; any casing counts.
function envValue(env, name) {
  const key = Object.keys(env).find((candidate) => candidate.toUpperCase() === name);
  return key === undefined ? undefined : env[key];
}

function pathExtensions(env, platform) {
  if (platform !== 'win32') return [''];
  const listed = String(envValue(env, 'PATHEXT') ?? '.COM;.EXE;.BAT;.CMD').split(';').map((item) => item.trim()).filter(Boolean);
  return listed.length ? listed : ['.COM', '.EXE', '.BAT', '.CMD'];
}

/** The first match for `name` on PATH, with PATHEXT applied on win32, or null. */
function which(name, options) {
  const { platform, env, exists } = context(options);
  const p = flavour(platform);
  const extensions = pathExtensions(env, platform);
  const hasExtension = platform === 'win32' && extensions.some((extension) => name.toLowerCase().endsWith(extension.toLowerCase()));
  const names = platform === 'win32' ? [...(hasExtension ? [name] : []), ...extensions.map((extension) => `${name}${extension}`)] : [name];
  const explicit = p.isAbsolute(name) || /[\\/]/u.test(name);
  const directories = explicit ? [''] : String(envValue(env, 'PATH') ?? '').split(platform === 'win32' ? ';' : ':').map((directory) => directory.replace(/^"|"$/gu, '')).filter(Boolean);
  for (const directory of directories) {
    for (const candidate of names) {
      const file = directory ? p.join(directory, candidate) : candidate;
      if (exists(file)) return file;
    }
  }
  return null;
}

/** First non-empty line of child output; \r\n and \n both split. */
function firstLine(text) {
  return String(text ?? '').split(/\r?\n/u).map((line) => line.trim()).find(Boolean) ?? '';
}

/** Last non-empty line of child output; \r\n and \n both split. */
function lastLine(text) {
  return String(text ?? '').split(/\r?\n/u).map((line) => line.trim()).filter(Boolean).at(-1) ?? '';
}

// cmd.exe expands %VAR% even inside double quotes and has no way to escape a double quote, so an
// argument carrying either, or a control character, is refused instead of being quoted.
function quoteForCmd(value) {
  const text = String(value);
  if (/["%\u0000-\u001f]/u.test(text)) throw new Error(`refusing to pass an argument with a quote, percent sign or control character through cmd.exe: ${JSON.stringify(text).slice(0, 80)}`);
  return /^[A-Za-z0-9_.:\\/=@+,-]+$/u.test(text) ? text : `"${text}"`;
}

/**
 * How to start `command args...` on this platform: { file, args, shell }. On win32 a name that
 * resolves to a .cmd or .bat shim (npm, npx, agent-browser) runs through the shell with every
 * piece quoted; a .exe or an unresolved name starts directly.
 */
function invocation(command, args = [], options) {
  const ctx = context(options);
  if (ctx.platform !== 'win32') return { file: command, args: [...args], shell: false };
  const resolved = which(command, ctx) ?? command;
  if (!CMD_SHIM.test(resolved)) return { file: resolved, args: [...args], shell: false };
  return { file: quoteForCmd(resolved), args: args.map(quoteForCmd), shell: true };
}

/** `npm` as a node script when the host gives one (win32 only), else the plain invocation. */
function npmInvocation(args = [], options) {
  const ctx = context(options);
  if (ctx.platform !== 'win32') return { file: 'npm', args: [...args], shell: false };
  const p = flavour(ctx.platform);
  const fromEnv = envValue(ctx.env, 'NPM_EXECPATH');
  const bundled = p.join(p.dirname(ctx.execPath), 'node_modules', 'npm', 'bin', 'npm-cli.js');
  const cli = [fromEnv, bundled].find((candidate) => candidate && /npm-cli\.js$/iu.test(candidate) && ctx.exists(candidate));
  if (cli) return { file: ctx.execPath, args: [cli, ...args], shell: false };
  return invocation('npm', args, ctx);
}

/** spawnSync of `command` through `invocation`. */
function run(command, args, spawnOptions = {}, options) {
  const plan = invocation(command, args, options);
  return spawnSync(plan.file, plan.args, { ...spawnOptions, ...(plan.shell ? { shell: true } : {}) });
}

/** spawnSync of npm through `npmInvocation`. */
function runNpm(args, spawnOptions = {}, options) {
  const plan = npmInvocation(args, options);
  return spawnSync(plan.file, plan.args, { ...spawnOptions, ...(plan.shell ? { shell: true } : {}) });
}

/** One line for a failed child: its exit code or signal, then the error or the last stderr line. */
function describeFailure(result) {
  const how = result.error ? result.error.code ?? 'spawn error' : result.signal ? `signal ${result.signal}` : `exit ${result.status}`;
  const detail = result.error?.message || lastLine(result.stderr) || lastLine(result.stdout);
  return detail ? `${how}: ${detail}` : how;
}

/** The interpreter inside a venv directory. */
function venvPython(directory, platform = process.platform) {
  return platform === 'win32' ? path.win32.join(directory, 'Scripts', 'python.exe') : path.posix.join(directory, 'bin', 'python');
}

/** { command, args } for a system Python 3: python3 on POSIX; python3, python or the py launcher on win32. */
function findPython(options) {
  const ctx = context(options);
  if (ctx.platform !== 'win32') return { command: 'python3', args: [] };
  for (const name of ['python3', 'python']) {
    const found = which(name, ctx);
    if (found) return { command: found, args: [] };
  }
  const launcher = which('py', ctx);
  return launcher ? { command: launcher, args: ['-3'] } : { command: 'python3', args: [] };
}

function pythonVersion(command, args, env) {
  const result = spawnSync(command, [...args, '-c', 'import sys; print("%d.%d.%d" % sys.version_info[:3])'], { encoding: 'utf8', env, timeout: 15000 });
  return result.status === 0 ? firstLine(result.stdout) : null;
}

/**
 * A system Python whose 3.X minor is listed in `minors`, for building a venv from pinned wheels:
 * python3.X by name in the order listed, then python3 and python, then on win32 the py launcher
 * (`py -3.X`). Every candidate is asked its version, so a python3 newer than the pins (3.15 has no
 * wheels for them yet) is passed over. Returns { command, args, version }, or { command: null,
 * tried } naming each interpreter seen and its version. `options.probe` replaces the version call.
 */
function pickPython(minors, options = {}) {
  const ctx = context(options);
  const probe = options.probe ?? ((command, args) => pythonVersion(command, args, ctx.env));
  const tried = [];
  const accept = (command, args) => {
    const version = probe(command, args);
    tried.push(`${[command, ...args].join(' ')}: ${version ?? 'did not run'}`);
    const minor = /^3\.(\d+)\./u.exec(version ?? '')?.[1];
    return minor !== undefined && minors.includes(Number(minor)) ? { command, args, version } : null;
  };
  const seen = new Set();
  for (const name of [...minors.map((minor) => `python3.${minor}`), 'python3', 'python']) {
    const found = which(name, ctx);
    if (!found || seen.has(found)) continue;
    seen.add(found);
    const picked = accept(found, []);
    if (picked) return picked;
  }
  const launcher = ctx.platform === 'win32' ? which('py', ctx) : null;
  if (launcher) {
    for (const minor of minors) {
      const picked = accept(launcher, [`-3.${minor}`]);
      if (picked) return picked;
    }
  }
  return { command: null, args: [], version: null, tried };
}

/** Runs an interpreter on a script and returns its exit code (1 when it could not start). */
function runScript(interpreter, script, args = [], options = {}) {
  const ctx = context(options);
  const spawn = options.spawn ?? spawnSync;
  const env = { ...ctx.env, PYTHONDONTWRITEBYTECODE: '1', ...(ctx.platform === 'win32' ? { PYTHONUTF8: '1', PYTHONIOENCODING: 'utf-8' } : {}) };
  const result = spawn(interpreter, [script, ...args], { stdio: 'inherit', env });
  if (result.error) process.stderr.write(`${path.basename(script)} did not start: ${describeFailure(result)}\n`);
  return result.status ?? 1;
}

module.exports = { describeFailure, findPython, firstLine, invocation, lastLine, npmInvocation, pickPython, quoteForCmd, run, runNpm, runScript, venvPython, which };
