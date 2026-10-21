const VALID_LANGS = new Set(['ko', 'en', 'code', 'any']);
const VALID_SEVERITIES = new Set(['block', 'warn']);
const VALID_SCOPES = new Set(['line', 'sentence', 'document']);

export function parseRules(raw) {
  const data = JSON.parse(raw);
  if (data.schema_version !== 1 || !Array.isArray(data.rules)) {
    throw new Error('rules.json must use schema_version 1 and contain a rules array');
  }
  const ids = new Set();
  return data.rules.map((rule) => {
    if (typeof rule.id !== 'string' || ids.has(rule.id)) throw new Error(`missing or duplicate rule id: ${rule.id}`);
    ids.add(rule.id);
    if (!VALID_LANGS.has(rule.lang) || !VALID_SEVERITIES.has(rule.severity) || !VALID_SCOPES.has(rule.scope)) {
      throw new Error(`invalid lang, severity, or scope for ${rule.id}`);
    }
    if (typeof rule.pattern !== 'string' || typeof rule.flags !== 'string' || !Array.isArray(rule.context) || !Array.isArray(rule.fixture_ids)) {
      throw new Error(`incomplete rule definition: ${rule.id}`);
    }
    if (rule.threshold !== undefined) {
      const { block_ko: blockKo, block_total: blockTotal, warn_total: warnTotal } = rule.threshold ?? {};
      if (![blockKo, blockTotal, warnTotal].every((value) => Number.isInteger(value) && value >= 2) ||
        warnTotal >= blockTotal || typeof rule.ko_pattern !== 'string' || rule.severity !== 'block') {
        throw new Error(`a counted rule needs block_ko, block_total and warn_total of 2 or more, a ko_pattern and block severity: ${rule.id}`);
      }
      const counter = (pattern) => new RegExp(pattern, `${rule.flags.replace('g', '')}g`);
      return { ...rule, regex: new RegExp(rule.pattern, rule.flags), counter: counter(rule.pattern), koCounter: counter(rule.ko_pattern) };
    }
    return { ...rule, regex: new RegExp(rule.pattern, rule.flags) };
  });
}
