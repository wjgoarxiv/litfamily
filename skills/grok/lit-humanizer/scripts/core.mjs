import path from 'node:path';

export { parseRules } from './rules.mjs';

function isInternalPath(file) {
  const segments = path.normalize(file).split(/[\\/]+/);
  const plansAt = segments.indexOf('plans');
  if (plansAt >= 0 && segments[plansAt + 1] === 'lit-humanizer-canonical') return false;
  return segments.some((segment) => segment === 'plans' || segment === 'evidence' ||
    segment.startsWith('.lit') || segment.startsWith('.hermes') || segment === '.grok' ||
    /^HANDOFF/i.test(segment) || segment === 'ledgers');
}

function isCaption(line) {
  return /^\s*(?:>\s*)?(?:!\[)?(?:표\s*\d+|그림\s*\d+|table\s+\d+|figure\s+\d+)\b/i.test(line);
}

function isPlainSourceLine(line) {
  return /^\s*(?:Source|Sources|출처|자료|※\s*자료)\s*[:：]/i.test(line) &&
    !/^\s*(?:\*\*|__|<b\b)/i.test(line);
}

function hasEmbeddedCaveat(line) {
  const body = line.replace(/^\s*(?:Source|Sources|출처|자료|※\s*자료)\s*[:：]\s*/i, '');
  const segments = body.split(/[,;:—–]/).map((segment) => segment.trim().replace(/[.!?。]+$/, ''));
  const tail = segments.at(-1) ?? '';
  const caveatPhrase = /\b(?:not\s+(?:realized\s+results?|verified|independently verified|performed|a permit decision|final|actual)|demo(?:nstration)?\s+(?:synthesis|assumptions|recommendations?)|(?:preliminary|provisional|tentative|draft|estimated?)\s+(?:results?|data|findings?|outcomes?|values?)|results?\s+may\s+(?:change|be revised)|subject\s+to\s+change)\b|미실현|실현되지|미검증|검증되지|미확인|(?:잠정|예비|추정|예상)(?:치)?(?:\s*(?:결과|자료|수치|값))?|변동\s*가능|변경\s*가능|확정되지|미확정/i;
  const standaloneStatus = /^(?:assumptions?|recommendations?|unverified|preliminary|provisional|tentative|draft|estimated?|estimate|forecast|projection|projected|planned|simulated|modeled|가정|권고|제안|잠정(?:치)?|예비|추정(?:치)?|예상)$/i;
  const appendedWithoutDelimiter = /(?:^|\s)(?:not\s+(?:realized\s+results?|verified|independently verified|performed|a permit decision|final|actual)|demo(?:nstration)?\s+(?:synthesis|assumptions|recommendations?)|(?:preliminary|provisional|tentative|draft|estimated?)\s+(?:results?|data|findings?|outcomes?|values?)|results?\s+may\s+(?:change|be revised)|subject\s+to\s+change|unverified|미실현|실현되지|미검증|검증되지|미확인|잠정(?:치)?|예비(?:자료|결과|수치)?|추정(?:치|자료|결과)?|예상(?:치|자료|결과)?|변동\s*가능|변경\s*가능|확정되지|미확정)\s*[.!?。)]*$/i;
  return caveatPhrase.test(tail) || standaloneStatus.test(tail) || appendedWithoutDelimiter.test(body);
}

function inlineCodeAsSpaces(line) {
  return line.replace(/(`+)[^`]*?\1/g, (match) => ' '.repeat(match.length));
}

function matchesLanguage(rule, text) {
  if (rule.lang === 'ko') return /[가-힣]/.test(text);
  if (rule.lang === 'en') return /[a-z]/i.test(text);
  return true;
}

function sourceRows(text) {
  let fence = null;
  let captionPending = 0;
  let figureActive = false;
  return text.split(/\r?\n/).map((line, index) => {
    const marker = line.match(/^ {0,3}(`{3,}|~{3,})/);
    if (fence) {
      if (marker && marker[1][0] === fence.char && marker[1].length >= fence.length) fence = null;
      captionPending = 0;
      figureActive = false;
      return { line, number: index + 1, candidate: '', skipped: true, caption: false, captionAttribution: false };
    }
    if (marker) {
      captionPending = 0;
      fence = { char: marker[1][0], length: marker[1].length };
      figureActive = false;
      return { line, number: index + 1, candidate: '', skipped: true, caption: false, captionAttribution: false };
    }
    if (/^\s{0,3}>\s?/.test(line)) {
      captionPending = 0;
      figureActive = false;
      // A quote that opens with a bold label (> **주의:** ...) is the author's own callout rather than
      // quoted user text. Only rules whose context names blockquote_callout read it, marker blanked.
      const callout = /^\s{0,3}>\s?(?:\*\*|__)[^*_\n]{1,24}(?:\*\*|__)/.test(line)
        ? inlineCodeAsSpaces(line.replace(/^\s{0,3}>\s?/, (prefix) => ' '.repeat(prefix.length)))
        : '';
      return { line, number: index + 1, candidate: '', callout, skipped: true, caption: false, captionAttribution: false };
    }
    const candidate = inlineCodeAsSpaces(line);
    const caption = isCaption(line);
    const plainSource = isPlainSourceLine(line);
    const sourceAnchor = /^\s*\|/.test(line) || /^\s*!\[[^\]]*\]\s*\(/.test(line) ||
      /^\s*<img\b/i.test(line) || caption;
    const opensFigure = /<figure\b/i.test(line);
    const closesFigure = /<\/figure\s*>/i.test(line);
    if (opensFigure) figureActive = true;
    const captionAttribution = !hasEmbeddedCaveat(line) && plainSource &&
      (captionPending > 0 || figureActive);
    if (sourceAnchor || closesFigure) captionPending = 2;
    else if (plainSource) captionPending = 0;
    else if (line.trim() && captionPending > 0) captionPending = 0;
    else if (captionPending > 0 && !line.trim()) captionPending -= 1;
    if (closesFigure) figureActive = false;
    return { line, number: index + 1, candidate, caption, captionAttribution, skipped: false };
  });
}

function joinRows(rows, separator) {
  let text = '';
  const lineStarts = [];
  rows.forEach((row, index) => {
    if (index > 0) text += separator;
    lineStarts.push({ offset: text.length, line: row.number });
    text += row.candidate;
  });
  return { text, lineStarts };
}

function lineAtOffset(span, offset) {
  if (span.line !== undefined) return span.line;
  let low = 0;
  let high = span.lineStarts.length - 1;
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (span.lineStarts[mid].offset <= offset) low = mid + 1;
    else high = mid - 1;
  }
  return span.lineStarts[Math.max(0, high)]?.line ?? 1;
}

function sliceSpan(span, start, end) {
  const lineStarts = span.lineStarts
    .filter((entry) => entry.offset >= start && entry.offset < end)
    .map((entry) => ({ offset: entry.offset - start, line: entry.line }));
  if (!lineStarts.length) lineStarts.push({ offset: 0, line: lineAtOffset(span, start) });
  else if (lineStarts[0].offset > 0) lineStarts.unshift({ offset: 0, line: lineAtOffset(span, start) });
  return { text: span.text.slice(start, end), lineStarts };
}

function splitSentences(span) {
  const segments = [];
  const boundary = /[.!?。！？]+(?:["'”’»)\]]*)\s+/gu;
  let start = 0;
  for (const match of span.text.matchAll(boundary)) {
    const end = match.index + match[0].length - match[0].match(/\s+$/u)[0].length;
    if (end > start) segments.push(sliceSpan(span, start, end));
    start = match.index + match[0].length;
  }
  if (start < span.text.length) segments.push(sliceSpan(span, start, span.text.length));
  return segments;
}

function ruleSegments(rows, rule, cache) {
  const readCallouts = rule.context.includes('blockquote_callout');
  const cacheKey = `${rule.scope}/${rule.context.includes('table_figure_caption')}/${readCallouts}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);
  const skipCaptions = rule.context.includes('table_figure_caption');
  const segments = [];
  let group = [];
  const flush = () => {
    if (!group.length) return;
    const joined = joinRows(group, rule.scope === 'sentence' ? ' ' : '\n');
    segments.push(...(rule.scope === 'sentence' ? splitSentences(joined) : [joined]));
    group = [];
  };

  for (const row of rows) {
    const captionExempt = skipCaptions && (row.caption || row.captionAttribution);
    if (readCallouts && row.callout) {
      flush();
      segments.push({ text: row.callout, line: row.number });
      continue;
    }
    if (row.skipped || captionExempt || (rule.scope === 'sentence' && !row.candidate.trim())) {
      flush();
      continue;
    }
    if (rule.scope === 'line') {
      segments.push({ text: row.candidate, line: row.number });
    } else {
      group.push(row);
    }
  }
  flush();
  cache.set(cacheKey, segments);
  return segments;
}

// A counted rule (one with a tiered threshold) reads each paragraph or list block on its own, split on blank
// lines, and a Markdown table one column at a time. Cells of 12 characters or fewer are status values.
function countedSegments(rows) {
  const blocks = [];
  let group = [];
  for (const row of [...rows, { skipped: true }]) {
    if (!row.skipped && row.candidate.trim()) group.push(row);
    else if (group.length) { blocks.push(group); group = []; }
  }
  const segments = [];
  for (const block of blocks) {
    if (!block.every((row) => /^\s*\|/.test(row.candidate))) {
      segments.push(joinRows(block, '\n'));
      continue;
    }
    const table = block.filter((row) => !/^[\s|:-]+$/.test(row.candidate))
      .map((row) => row.candidate.trim().replace(/^\|+|\|+$/g, '').split('|').map((cell) => cell.trim()));
    const width = table.reduce((most, cells) => Math.max(most, cells.length), 0);
    for (let column = 0; column < width; column += 1) {
      const text = table.map((cells) => cells[column] ?? '').filter((cell) => [...cell].length > 12).join(' ');
      if (text) segments.push({ text, line: block[0].number });
    }
  }
  return segments;
}

export function scanText(text, rules, file = '<stdin>') {
  if (isInternalPath(file)) return [];
  const findings = [];
  const rows = sourceRows(text);
  const segmentCache = new Map();
  for (const rule of rules) {
    if (rule.threshold !== undefined) {
      if (!segmentCache.has('counted')) segmentCache.set('counted', countedSegments(rows));
      // Block at block_ko Korean matches or block_total in any language; warn at exactly warn_total.
      const { block_ko: blockKo, block_total: blockTotal, warn_total: warnTotal } = rule.threshold;
      for (const segment of segmentCache.get('counted')) {
        const matches = [...segment.text.matchAll(rule.counter)];
        const ko = [...segment.text.matchAll(rule.koCounter)].length;
        const severity = ko >= blockKo || matches.length >= blockTotal ? 'block' : matches.length >= warnTotal ? 'warn' : null;
        if (!severity) continue;
        findings.push({
          file,
          rule: rule.id,
          severity,
          line: lineAtOffset(segment, matches[0].index),
          excerpt: segment.text.trim().replace(/\s+/g, ' ').slice(0, 180),
        });
      }
      continue;
    }
    for (const segment of ruleSegments(rows, rule, segmentCache)) {
      if (!matchesLanguage(rule, segment.text)) continue;
      rule.regex.lastIndex = 0;
      const match = rule.regex.exec(segment.text);
      if (!match) continue;
      findings.push({
        file,
        rule: rule.id,
        severity: rule.severity,
        line: lineAtOffset(segment, match.index),
        endLine: lineAtOffset(segment, match.index + Math.max(0, match[0].length - 1)),
        excerpt: segment.text.trim().replace(/\s+/g, ' ').slice(0, 180),
      });
    }
  }
  return findings;
}

export function exitCode(findings) {
  if (findings.some((finding) => finding.severity === 'block')) return 2;
  if (findings.some((finding) => finding.severity === 'warn')) return 1;
  return 0;
}
