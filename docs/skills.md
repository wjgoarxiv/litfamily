# Skill distribution and compatibility

The catalog covers **all 252 tracked SKILL.md documents** in the five product release commits, including **200 native entries**, nested modes, vendor references and two test fixtures. It does not count supporting documents as additional independently installed skills. The [machine-readable inventory](skill-inventory.json) includes every source path, content hash, host, role, local Markdown reference and observed host-contract evidence; direct exports are recorded separately with their complete file closure.

Every native contract remains associated with its original harness. A common skill name does not imply interchangeable prompts, callable tools or installation paths. Catalog classification is conservative: `host-dependent` means the native contract cannot be claimed as cross-host from a file copy; it is not a claim that every entry necessarily requires a separate executable.

## Assessed source identities and licenses

Every catalog entry links to its exact file in that product's release commit, which is the product's GitHub `main` for its npm release. The product commit, source path and content hash preserve distinct host variants even when their skill IDs match.

| Product | Version | Release commit | Source license |
|---|---|---|---|
| Claude Code | 1.0.13 | [da312b46ea3353e546e47a4ad0fbbc0ba199b934](https://github.com/wjgoarxiv/litclaude/tree/da312b46ea3353e546e47a4ad0fbbc0ba199b934) | [MIT](../licenses/claude-MIT.txt) |
| Hermes Agent | 1.0.10 | [e67beb5eaf148166c758d20d5705b73e587a7b59](https://github.com/wjgoarxiv/lithermes/tree/e67beb5eaf148166c758d20d5705b73e587a7b59) | [MIT](../licenses/hermes-MIT.txt) |
| Codex CLI | 1.0.8 | [ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0](https://github.com/wjgoarxiv/litcodex/tree/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0) | [MIT](../licenses/codex-MIT.txt) |
| OpenCode | 1.0.10 | [1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8](https://github.com/wjgoarxiv/litopencode/tree/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8) | [MIT](../licenses/opencode-MIT.txt) |
| Grok Build | 1.0.9 | [b1641f34c5f417eca8983174275f08ac116ca8cb](https://github.com/wjgoarxiv/litgrok/tree/b1641f34c5f417eca8983174275f08ac116ca8cb) | [MIT](../licenses/grok-MIT.txt) |

The machine-readable product records include `sourceCommit`, `sourceUrl`, `licensePath`, `licenseSha256` and `licenseBytes`; hub verification checks the distributed license bytes and source-link consistency.

## Verified standalone export

`skills/grok/lit-humanizer/` is a complete copy of `.grok/skills/lit-humanizer/` from the LitGrok 1.0.9 release commit [`b1641f34c5f417eca8983174275f08ac116ca8cb`](https://github.com/wjgoarxiv/litgrok/tree/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-humanizer). The export includes its Grok Build entrypoint, references, examples, fixtures, assets, rules, helper scripts and `NOTICE`; the inventory pins every file hash. The skill retains Grok Build host requirements and makes no cross-host behavior claim.

With Node.js 22.20 or later, from a disposable project, use the absolute path to your clone of this hub in place of `/absolute/path/to/litfamily`:

```sh
DISABLE_TELEMETRY=1 npx --yes skills@1.5.23 add /absolute/path/to/litfamily --list
DISABLE_TELEMETRY=1 npx --yes skills@1.5.23 add /absolute/path/to/litfamily --skill lit-humanizer --agent grok --copy --yes
DISABLE_TELEMETRY=1 npx --yes skills@1.5.23 remove lit-humanizer --agent grok --yes
```

The first command lists. The second writes a project-local skill copy. The third removes that selected skill through the same CLI. Review existing skill ownership before using these commands in a real project. `--yes` accepts prompts; it is not a dry run. The commands use a local checkout of `wjgoarxiv/litfamily`; a remote `skills add` from GitHub has not been verified.

The third-party [skills CLI](https://github.com/vercel-labs/skills) copies a selected skill directory; it does not install a product's hooks, plugin manifest, Python registration, native components or host configuration. Its listing can deduplicate equal skill names. Exporting every variant under one common name without a host-specific source selection would therefore be ambiguous.

## Distribution scope and source selection

This hub provides the complete catalog, [native product installation routes](../README.md#install), and direct exports whose independent directory closure has been verified. Install the matching product for its complete host integration. The catalog also preserves nested modes, vendor references and test fixtures for source discovery; those documents are not additional standalone installations.

The only current direct export is the Grok Build `lit-humanizer` directory listed above. Equal skill IDs in different products remain separate records identified by product, source path and commit. The direct export selects the Grok source explicitly; it does not merge, rename or replace the other native variants. Candidate source directories are not shipped exports. Product installation remains the supported path for LitGrok's complete native integration.

Universal standalone adaptation is outside this distribution scope. No runtime files or state are shared between products by this hub.

Concrete examples: LitClaude skill contracts require Claude plugin discovery and command/hook context; copying a skill cannot install those surfaces. LitHermes contracts name Python plugin registration and host-owned tools. LitCodex `comment-checker` documents a product PostToolUse wrapper and an optional checker engine. LitOpenCode `start-work` relies on command routing, config hooks and the code-owned lifecycle; copying its text cannot switch agents. Grok `lit-scientific-visualization` links to `../../vendor/scientific-visualization/` outside the skill directory, which the skills CLI would not copy.

## Complete native catalog

`Native product` below means the original product distribution is the supported path. `Standalone Grok` identifies only the verified matching-host export.

Since 1.0.0, every product has added six skills: `lit-humanizer` for English and Korean prose revision (it replaces `lit-korean`), `lit-docx` for Word documents, `lit-pptx` for PowerPoint decks, `lit-diagram-drawer` for diagrams, `lit-typographic-motion` for short films and motion graphics, and `readme-studio` for project READMEs. `lit-korean` and `skill-observer` are no longer native entries.

### Claude Code — 1.0.13

38 native entries; 22 supporting skill documents.

| Skill | Distribution | Source path |
|---|---|---|
| `autoconference` | Native product | [plugins/litclaude/skills/autoconference/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/autoconference/SKILL.md) |
| `autoresearch` | Native product | [plugins/litclaude/skills/autoresearch/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/autoresearch/SKILL.md) |
| `browser-drive` | Native product | [plugins/litclaude/skills/browser-drive/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/browser-drive/SKILL.md) |
| `comment-checker` | Native product | [plugins/litclaude/skills/comment-checker/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/comment-checker/SKILL.md) |
| `debugging` | Native product | [plugins/litclaude/skills/debugging/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/debugging/SKILL.md) |
| `deep-interview` | Native product | [plugins/litclaude/skills/deep-interview/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/deep-interview/SKILL.md) |
| `frontend-ui-ux` | Native product | [plugins/litclaude/skills/frontend-ui-ux/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/frontend-ui-ux/SKILL.md) |
| `lit-burnoff-file` | Native product | [plugins/litclaude/skills/lit-burnoff-file/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-burnoff-file/SKILL.md) |
| `lit-burnoff` | Native product | [plugins/litclaude/skills/lit-burnoff/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-burnoff/SKILL.md) |
| `lit-code` | Native product | [plugins/litclaude/skills/lit-code/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-code/SKILL.md) |
| `lit-commit` | Native product | [plugins/litclaude/skills/lit-commit/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-commit/SKILL.md) |
| `lit-comprehend` | Native product | [plugins/litclaude/skills/lit-comprehend/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-comprehend/SKILL.md) |
| `lit-crucible` | Native product | [plugins/litclaude/skills/lit-crucible/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-crucible/SKILL.md) |
| `lit-diagram-drawer` | Native product | [plugins/litclaude/skills/lit-diagram-drawer/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-diagram-drawer/SKILL.md) |
| `lit-docx` | Native product | [plugins/litclaude/skills/lit-docx/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-docx/SKILL.md) |
| `lit-handoff` | Native product | [plugins/litclaude/skills/lit-handoff/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-handoff/SKILL.md) |
| `lit-humanizer` | Native product | [plugins/litclaude/skills/lit-humanizer/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-humanizer/SKILL.md) |
| `lit-init` | Native product | [plugins/litclaude/skills/lit-init/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-init/SKILL.md) |
| `lit-loop` | Native product | [plugins/litclaude/skills/lit-loop/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-loop/SKILL.md) |
| `lit-plan` | Native product | [plugins/litclaude/skills/lit-plan/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-plan/SKILL.md) |
| `lit-pptx` | Native product | [plugins/litclaude/skills/lit-pptx/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-pptx/SKILL.md) |
| `lit-recap` | Native product | [plugins/litclaude/skills/lit-recap/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-recap/SKILL.md) |
| `lit-scientific-visualization` | Native product | [plugins/litclaude/skills/lit-scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-scientific-visualization/SKILL.md) |
| `lit-team` | Native product | [plugins/litclaude/skills/lit-team/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-team/SKILL.md) |
| `lit-typographic-motion` | Native product | [plugins/litclaude/skills/lit-typographic-motion/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lit-typographic-motion/SKILL.md) |
| `litgoal` | Native product | [plugins/litclaude/skills/litgoal/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/litgoal/SKILL.md) |
| `litresearch` | Native product | [plugins/litclaude/skills/litresearch/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/litresearch/SKILL.md) |
| `litwork` | Native product | [plugins/litclaude/skills/litwork/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/litwork/SKILL.md) |
| `lsp-setup` | Native product | [plugins/litclaude/skills/lsp-setup/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lsp-setup/SKILL.md) |
| `lsp` | Native product | [plugins/litclaude/skills/lsp/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/lsp/SKILL.md) |
| `readme-studio` | Native product | [plugins/litclaude/skills/readme-studio/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/readme-studio/SKILL.md) |
| `refactor` | Native product | [plugins/litclaude/skills/refactor/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/refactor/SKILL.md) |
| `review-work` | Native product | [plugins/litclaude/skills/review-work/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/review-work/SKILL.md) |
| `rules` | Native product | [plugins/litclaude/skills/rules/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/rules/SKILL.md) |
| `start-work` | Native product | [plugins/litclaude/skills/start-work/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/start-work/SKILL.md) |
| `structural-search` | Native product | [plugins/litclaude/skills/structural-search/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/structural-search/SKILL.md) |
| `visual-qa` | Native product | [plugins/litclaude/skills/visual-qa/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/visual-qa/SKILL.md) |
| `wikify` | Native product | [plugins/litclaude/skills/wikify/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/skills/wikify/SKILL.md) |

Supporting documents, preserved as inventory rather than independent routes:

- [plugins/litclaude/vendor/autoconference/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoconference/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoconference/skills/analyze/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoconference/skills/analyze/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoconference/skills/autoconference/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoconference/skills/autoconference/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoconference/skills/debate/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoconference/skills/debate/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoconference/skills/plan/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoconference/skills/plan/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoconference/skills/resume/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoconference/skills/resume/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoconference/skills/ship/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoconference/skills/ship/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoconference/skills/survey/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoconference/skills/survey/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoresearch/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/autoresearch/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoresearch/skills/autoresearch/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/debug/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoresearch/skills/debug/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/fix/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoresearch/skills/fix/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/learn/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoresearch/skills/learn/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/plan/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoresearch/skills/plan/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/predict/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoresearch/skills/predict/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/reason/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoresearch/skills/reason/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/scenario/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoresearch/skills/scenario/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/security/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoresearch/skills/security/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/ship/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/autoresearch/skills/ship/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/handoff/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/handoff/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/llm-wikify/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/llm-wikify/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/da312b46ea3353e546e47a4ad0fbbc0ba199b934/plugins/litclaude/vendor/scientific-visualization/SKILL.md) — vendor-reference

### Hermes Agent — 1.0.10

36 native entries; 24 supporting skill documents.

| Skill | Distribution | Source path |
|---|---|---|
| `autoconference` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/SKILL.md) |
| `autoresearch` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/SKILL.md) |
| `browser-drive` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/browser-drive/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/browser-drive/SKILL.md) |
| `comment-checker` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/comment-checker/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/comment-checker/SKILL.md) |
| `debugging` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/debugging/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/debugging/SKILL.md) |
| `deep-interview` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/deep-interview/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/deep-interview/SKILL.md) |
| `frontend-ui-ux` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/frontend-ui-ux/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/frontend-ui-ux/SKILL.md) |
| `lit-burnoff-file` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-burnoff-file/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-burnoff-file/SKILL.md) |
| `lit-burnoff` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-burnoff/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-burnoff/SKILL.md) |
| `lit-code` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-code/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-code/SKILL.md) |
| `lit-commit` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-commit/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-commit/SKILL.md) |
| `lit-comprehend` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-comprehend/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-comprehend/SKILL.md) |
| `lit-crucible` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-crucible/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-crucible/SKILL.md) |
| `lit-diagram-drawer` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-diagram-drawer/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-diagram-drawer/SKILL.md) |
| `lit-docx` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-docx/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-docx/SKILL.md) |
| `lit-handoff` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-handoff/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-handoff/SKILL.md) |
| `lit-humanizer` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-humanizer/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-humanizer/SKILL.md) |
| `lit-init` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-init/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-init/SKILL.md) |
| `lit-plan` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-plan/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-plan/SKILL.md) |
| `lit-pptx` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-pptx/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-pptx/SKILL.md) |
| `lit-recap` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-recap/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-recap/SKILL.md) |
| `lit-scientific-visualization` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-scientific-visualization/SKILL.md) |
| `lit-typographic-motion` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-typographic-motion/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-typographic-motion/SKILL.md) |
| `litgoal` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/litgoal/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/litgoal/SKILL.md) |
| `litresearch` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/litresearch/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/litresearch/SKILL.md) |
| `litwork` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/litwork/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/litwork/SKILL.md) |
| `lsp-setup` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lsp-setup/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lsp-setup/SKILL.md) |
| `lsp` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lsp/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/lsp/SKILL.md) |
| `readme-studio` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/readme-studio/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/readme-studio/SKILL.md) |
| `refactor` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/refactor/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/refactor/SKILL.md) |
| `review-work` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/review-work/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/review-work/SKILL.md) |
| `rules` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/rules/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/rules/SKILL.md) |
| `start-work` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/start-work/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/start-work/SKILL.md) |
| `structural-search` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/structural-search/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/structural-search/SKILL.md) |
| `visual-qa` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/visual-qa/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/visual-qa/SKILL.md) |
| `wikify` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/SKILL.md) |

Supporting documents, preserved as inventory rather than independent routes:

- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/analyze/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/analyze/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/core/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/core/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/debate/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/debate/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/plan/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/plan/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/resume/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/resume/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/ship/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/ship/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/survey/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/survey/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/core/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/core/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/debug/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/debug/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/fix/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/fix/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/learn/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/learn/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/plan/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/plan/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/predict/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/predict/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/reason/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/reason/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/scenario/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/scenario/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/security/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/security/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/ship/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/ship/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/ingest/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/ingest/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/init/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/init/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/lint/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/lint/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/query/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/query/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/save/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/save/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/vendor/handoff/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/vendor/handoff/SKILL.md) — vendor-reference
- [packages/lithermes-installer/assets/lithermes-plugin/vendor/scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/e67beb5eaf148166c758d20d5705b73e587a7b59/packages/lithermes-installer/assets/lithermes-plugin/vendor/scientific-visualization/SKILL.md) — vendor-reference

### Codex CLI — 1.0.8

43 native entries; 3 supporting skill documents.

| Skill | Distribution | Source path |
|---|---|---|
| `autoconference` | Native product | [plugins/litcodex/skills/autoconference/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/autoconference/SKILL.md) |
| `autoresearch` | Native product | [plugins/litcodex/skills/autoresearch/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/autoresearch/SKILL.md) |
| `browser-drive` | Native product | [plugins/litcodex/skills/browser-drive/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/browser-drive/SKILL.md) |
| `coding-session-audit` | Native product | [plugins/litcodex/skills/coding-session-audit/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/coding-session-audit/SKILL.md) |
| `comment-checker` | Native product | [plugins/litcodex/skills/comment-checker/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/comment-checker/SKILL.md) |
| `debugging` | Native product | [plugins/litcodex/skills/debugging/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/debugging/SKILL.md) |
| `deep-interview` | Native product | [plugins/litcodex/skills/deep-interview/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/deep-interview/SKILL.md) |
| `frontend-ui-ux` | Native product | [plugins/litcodex/skills/frontend-ui-ux/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/frontend-ui-ux/SKILL.md) |
| `lit-burnoff-file` | Native product | [plugins/litcodex/skills/lit-burnoff-file/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-burnoff-file/SKILL.md) |
| `lit-burnoff` | Native product | [plugins/litcodex/skills/lit-burnoff/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-burnoff/SKILL.md) |
| `lit-code` | Native product | [plugins/litcodex/skills/lit-code/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-code/SKILL.md) |
| `lit-commit` | Native product | [plugins/litcodex/skills/lit-commit/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-commit/SKILL.md) |
| `lit-comprehend` | Native product | [plugins/litcodex/skills/lit-comprehend/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-comprehend/SKILL.md) |
| `lit-crucible` | Native product | [plugins/litcodex/skills/lit-crucible/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-crucible/SKILL.md) |
| `lit-diagram-drawer` | Native product | [plugins/litcodex/skills/lit-diagram-drawer/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-diagram-drawer/SKILL.md) |
| `lit-docx` | Native product | [plugins/litcodex/skills/lit-docx/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-docx/SKILL.md) |
| `lit-fetch` | Native product | [plugins/litcodex/skills/lit-fetch/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-fetch/SKILL.md) |
| `lit-handoff` | Native product | [plugins/litcodex/skills/lit-handoff/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-handoff/SKILL.md) |
| `lit-humanizer` | Native product | [plugins/litcodex/skills/lit-humanizer/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-humanizer/SKILL.md) |
| `lit-init` | Native product | [plugins/litcodex/skills/lit-init/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-init/SKILL.md) |
| `lit-loop` | Native product | [plugins/litcodex/skills/lit-loop/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-loop/SKILL.md) |
| `lit-plan` | Native product | [plugins/litcodex/skills/lit-plan/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-plan/SKILL.md) |
| `lit-pptx` | Native product | [plugins/litcodex/skills/lit-pptx/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-pptx/SKILL.md) |
| `lit-recap` | Native product | [plugins/litcodex/skills/lit-recap/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-recap/SKILL.md) |
| `lit-scientific-visualization` | Native product | [plugins/litcodex/skills/lit-scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-scientific-visualization/SKILL.md) |
| `lit-team` | Native product | [plugins/litcodex/skills/lit-team/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-team/SKILL.md) |
| `lit-typographic-motion` | Native product | [plugins/litcodex/skills/lit-typographic-motion/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lit-typographic-motion/SKILL.md) |
| `litcodex-contribute-bug-fix` | Native product | [plugins/litcodex/skills/litcodex-contribute-bug-fix/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/litcodex-contribute-bug-fix/SKILL.md) |
| `litcodex-doctor` | Native product | [plugins/litcodex/skills/litcodex-doctor/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/litcodex-doctor/SKILL.md) |
| `litcodex-report-bug` | Native product | [plugins/litcodex/skills/litcodex-report-bug/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/litcodex-report-bug/SKILL.md) |
| `litgoal` | Native product | [plugins/litcodex/skills/litgoal/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/litgoal/SKILL.md) |
| `litresearch` | Native product | [plugins/litcodex/skills/litresearch/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/litresearch/SKILL.md) |
| `litwork` | Native product | [plugins/litcodex/skills/litwork/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/litwork/SKILL.md) |
| `lsp-setup` | Native product | [plugins/litcodex/skills/lsp-setup/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lsp-setup/SKILL.md) |
| `lsp` | Native product | [plugins/litcodex/skills/lsp/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/lsp/SKILL.md) |
| `readme-studio` | Native product | [plugins/litcodex/skills/readme-studio/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/readme-studio/SKILL.md) |
| `refactor` | Native product | [plugins/litcodex/skills/refactor/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/refactor/SKILL.md) |
| `review-work` | Native product | [plugins/litcodex/skills/review-work/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/review-work/SKILL.md) |
| `rules` | Native product | [plugins/litcodex/skills/rules/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/rules/SKILL.md) |
| `start-work` | Native product | [plugins/litcodex/skills/start-work/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/start-work/SKILL.md) |
| `structural-search` | Native product | [plugins/litcodex/skills/structural-search/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/structural-search/SKILL.md) |
| `visual-qa` | Native product | [plugins/litcodex/skills/visual-qa/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/visual-qa/SKILL.md) |
| `wikify` | Native product | [plugins/litcodex/skills/wikify/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/skills/wikify/SKILL.md) |

Supporting documents, preserved as inventory rather than independent routes:

- [packages/litcodex-ai/src/install/test-fixtures/legacy-lit-korean/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/packages/litcodex-ai/src/install/test-fixtures/legacy-lit-korean/SKILL.md) — test-fixture
- [plugins/litcodex/vendor/handoff/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/vendor/handoff/SKILL.md) — vendor-reference
- [plugins/litcodex/vendor/scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/ae3ea1c8c237b771dd843e9b02eb45d9dfbd58d0/plugins/litcodex/vendor/scientific-visualization/SKILL.md) — vendor-reference

### OpenCode — 1.0.10

45 native entries; 3 supporting skill documents.

| Skill | Distribution | Source path |
|---|---|---|
| `agent-roster` | Native product | [skills/agent-roster/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/agent-roster/SKILL.md) |
| `autoconference` | Native product | [skills/autoconference/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/autoconference/SKILL.md) |
| `autoresearch` | Native product | [skills/autoresearch/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/autoresearch/SKILL.md) |
| `browser-drive` | Native product | [skills/browser-drive/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/browser-drive/SKILL.md) |
| `comment-checker` | Native product | [skills/comment-checker/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/comment-checker/SKILL.md) |
| `debugging` | Native product | [skills/debugging/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/debugging/SKILL.md) |
| `deep-interview` | Native product | [skills/deep-interview/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/deep-interview/SKILL.md) |
| `doctor-installer` | Native product | [skills/doctor-installer/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/doctor-installer/SKILL.md) |
| `durable-litgoal` | Native product | [skills/durable-litgoal/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/durable-litgoal/SKILL.md) |
| `frontend-ui-ux` | Native product | [skills/frontend-ui-ux/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/frontend-ui-ux/SKILL.md) |
| `lit-burnoff-file` | Native product | [skills/lit-burnoff-file/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-burnoff-file/SKILL.md) |
| `lit-burnoff` | Native product | [skills/lit-burnoff/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-burnoff/SKILL.md) |
| `lit-code` | Native product | [skills/lit-code/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-code/SKILL.md) |
| `lit-commit` | Native product | [skills/lit-commit/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-commit/SKILL.md) |
| `lit-comprehend` | Native product | [skills/lit-comprehend/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-comprehend/SKILL.md) |
| `lit-crucible` | Native product | [skills/lit-crucible/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-crucible/SKILL.md) |
| `lit-diagram-drawer` | Native product | [skills/lit-diagram-drawer/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-diagram-drawer/SKILL.md) |
| `lit-docx` | Native product | [skills/lit-docx/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-docx/SKILL.md) |
| `lit-fetch` | Native product | [skills/lit-fetch/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-fetch/SKILL.md) |
| `lit-handoff` | Native product | [skills/lit-handoff/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-handoff/SKILL.md) |
| `lit-humanizer` | Native product | [skills/lit-humanizer/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-humanizer/SKILL.md) |
| `lit-init` | Native product | [skills/lit-init/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-init/SKILL.md) |
| `lit-plan` | Native product | [skills/lit-plan/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-plan/SKILL.md) |
| `lit-pptx` | Native product | [skills/lit-pptx/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-pptx/SKILL.md) |
| `lit-recap` | Native product | [skills/lit-recap/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-recap/SKILL.md) |
| `lit-scientific-visualization` | Native product | [skills/lit-scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-scientific-visualization/SKILL.md) |
| `lit-typographic-motion` | Native product | [skills/lit-typographic-motion/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lit-typographic-motion/SKILL.md) |
| `litresearch` | Native product | [skills/litresearch/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/litresearch/SKILL.md) |
| `litwork` | Native product | [skills/litwork/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/litwork/SKILL.md) |
| `lsp-setup` | Native product | [skills/lsp-setup/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lsp-setup/SKILL.md) |
| `lsp` | Native product | [skills/lsp/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/lsp/SKILL.md) |
| `native-goal-verdict` | Native product | [skills/native-goal-verdict/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/native-goal-verdict/SKILL.md) |
| `readme-studio` | Native product | [skills/readme-studio/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/readme-studio/SKILL.md) |
| `refactor` | Native product | [skills/refactor/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/refactor/SKILL.md) |
| `reference-benchmark-claims` | Native product | [skills/reference-benchmark-claims/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/reference-benchmark-claims/SKILL.md) |
| `release-guardrails` | Native product | [skills/release-guardrails/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/release-guardrails/SKILL.md) |
| `review-work` | Native product | [skills/review-work/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/review-work/SKILL.md) |
| `rules` | Native product | [skills/rules/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/rules/SKILL.md) |
| `search-workflow-ideas` | Native product | [skills/search-workflow-ideas/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/search-workflow-ideas/SKILL.md) |
| `start-work` | Native product | [skills/start-work/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/start-work/SKILL.md) |
| `structural-search` | Native product | [skills/structural-search/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/structural-search/SKILL.md) |
| `tool-guards` | Native product | [skills/tool-guards/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/tool-guards/SKILL.md) |
| `visual-qa` | Native product | [skills/visual-qa/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/visual-qa/SKILL.md) |
| `wikify` | Native product | [skills/wikify/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/wikify/SKILL.md) |
| `workflow-loop` | Native product | [skills/workflow-loop/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/skills/workflow-loop/SKILL.md) |

Supporting documents, preserved as inventory rather than independent routes:

- [test/fixtures/retired-lit-korean/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/test/fixtures/retired-lit-korean/SKILL.md) — test-fixture
- [vendor/handoff/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/vendor/handoff/SKILL.md) — vendor-reference
- [vendor/scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1af1a4e6a52b3605d4625aaf4b6b5db1ca1d08f8/vendor/scientific-visualization/SKILL.md) — vendor-reference

### Grok Build — 1.0.9

38 native entries; 0 supporting skill documents.

The `lit-humanizer` row is the standalone export described above, copied from this same release commit.

| Skill | Distribution | Source path |
|---|---|---|
| `autoconference` | Native product | [.grok/skills/autoconference/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/autoconference/SKILL.md) |
| `autoresearch` | Native product | [.grok/skills/autoresearch/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/autoresearch/SKILL.md) |
| `browser-drive` | Native product | [.grok/skills/browser-drive/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/browser-drive/SKILL.md) |
| `comment-checker` | Native product | [.grok/skills/comment-checker/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/comment-checker/SKILL.md) |
| `debugging` | Native product | [.grok/skills/debugging/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/debugging/SKILL.md) |
| `deep-interview` | Native product | [.grok/skills/deep-interview/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/deep-interview/SKILL.md) |
| `frontend-ui-ux` | Native product | [.grok/skills/frontend-ui-ux/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/frontend-ui-ux/SKILL.md) |
| `lit-burnoff-file` | Native product | [.grok/skills/lit-burnoff-file/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-burnoff-file/SKILL.md) |
| `lit-burnoff` | Native product | [.grok/skills/lit-burnoff/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-burnoff/SKILL.md) |
| `lit-code` | Native product | [.grok/skills/lit-code/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-code/SKILL.md) |
| `lit-commit` | Native product | [.grok/skills/lit-commit/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-commit/SKILL.md) |
| `lit-comprehend` | Native product | [.grok/skills/lit-comprehend/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-comprehend/SKILL.md) |
| `lit-crucible` | Native product | [.grok/skills/lit-crucible/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-crucible/SKILL.md) |
| `lit-diagram-drawer` | Native product | [.grok/skills/lit-diagram-drawer/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-diagram-drawer/SKILL.md) |
| `lit-docx` | Native product | [.grok/skills/lit-docx/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-docx/SKILL.md) |
| `lit-handoff` | Native product | [.grok/skills/lit-handoff/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-handoff/SKILL.md) |
| `lit-humanizer` | Standalone Grok | [.grok/skills/lit-humanizer/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-humanizer/SKILL.md) |
| `lit-init` | Native product | [.grok/skills/lit-init/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-init/SKILL.md) |
| `lit-plan` | Native product | [.grok/skills/lit-plan/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-plan/SKILL.md) |
| `lit-pptx` | Native product | [.grok/skills/lit-pptx/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-pptx/SKILL.md) |
| `lit-recap` | Native product | [.grok/skills/lit-recap/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-recap/SKILL.md) |
| `lit-scientific-visualization` | Native product | [.grok/skills/lit-scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-scientific-visualization/SKILL.md) |
| `lit-team` | Native product | [.grok/skills/lit-team/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-team/SKILL.md) |
| `lit-typographic-motion` | Native product | [.grok/skills/lit-typographic-motion/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lit-typographic-motion/SKILL.md) |
| `litgoal` | Native product | [.grok/skills/litgoal/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/litgoal/SKILL.md) |
| `litgrok` | Native product | [.grok/skills/litgrok/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/litgrok/SKILL.md) |
| `litresearch` | Native product | [.grok/skills/litresearch/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/litresearch/SKILL.md) |
| `litwork` | Native product | [.grok/skills/litwork/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/litwork/SKILL.md) |
| `lsp-setup` | Native product | [.grok/skills/lsp-setup/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lsp-setup/SKILL.md) |
| `lsp` | Native product | [.grok/skills/lsp/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/lsp/SKILL.md) |
| `readme-studio` | Native product | [.grok/skills/readme-studio/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/readme-studio/SKILL.md) |
| `refactor` | Native product | [.grok/skills/refactor/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/refactor/SKILL.md) |
| `review-work` | Native product | [.grok/skills/review-work/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/review-work/SKILL.md) |
| `rules` | Native product | [.grok/skills/rules/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/rules/SKILL.md) |
| `start-work` | Native product | [.grok/skills/start-work/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/start-work/SKILL.md) |
| `structural-search` | Native product | [.grok/skills/structural-search/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/structural-search/SKILL.md) |
| `visual-qa` | Native product | [.grok/skills/visual-qa/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/visual-qa/SKILL.md) |
| `wikify` | Native product | [.grok/skills/wikify/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/b1641f34c5f417eca8983174275f08ac116ca8cb/.grok/skills/wikify/SKILL.md) |
