# Skill distribution and compatibility

The catalog covers **all 338 tracked SKILL.md documents** in seven immutable product snapshots, including **286 native entries**, nested modes, vendor references and two test fixtures. It does not count supporting documents as additional independently installed skills. The [machine-readable inventory](skill-inventory.json) includes every source path, content hash, host, role, local Markdown reference and observed host-contract evidence; direct exports are recorded separately with their complete file closure.

Every native contract remains associated with its original harness. A common skill name does not imply interchangeable prompts, callable tools or installation paths. Catalog classification is conservative: `host-dependent` means the native contract cannot be claimed as cross-host from a file copy; it is not a claim that every entry necessarily requires a separate executable.

## Assessed source identities and licenses

Every catalog entry links to its exact file in an immutable product snapshot. All seven sources are the 2026-10-26 release commits published to npm, listed in the [release status](release-status.md). The product commit, source path and content hash preserve distinct host variants even when their skill IDs match.

| Product | Released version | Public release commit | Source license |
|---|---|---|---|
| Claude Code | 1.0.40 | [fb7237fe26482250d2eecd06ef992ba83a2b778b](https://github.com/wjgoarxiv/litclaude/tree/fb7237fe26482250d2eecd06ef992ba83a2b778b) | [MIT](../licenses/claude-MIT.txt) |
| Hermes Agent | 1.0.29 | [3c05d629dbd27fd278d745c3f61083e7351ad5f6](https://github.com/wjgoarxiv/lithermes/tree/3c05d629dbd27fd278d745c3f61083e7351ad5f6) | [MIT](../licenses/hermes-MIT.txt) |
| Codex CLI | 1.0.30 | [f7107e147185af19cb020de6a1051aa9fbfdd8c4](https://github.com/wjgoarxiv/litcodex/tree/f7107e147185af19cb020de6a1051aa9fbfdd8c4) | [MIT](../licenses/codex-MIT.txt) |
| OpenCode | 1.0.31 | [1dd58f44bba8dd4f613188b553a50a17e838400b](https://github.com/wjgoarxiv/litopencode/tree/1dd58f44bba8dd4f613188b553a50a17e838400b) | [MIT](../licenses/opencode-MIT.txt) |
| Grok Build | 1.0.26 | [e827a6aa9f0348506e78ac9f1dc78f9c871ea455](https://github.com/wjgoarxiv/litgrok/tree/e827a6aa9f0348506e78ac9f1dc78f9c871ea455) | [MIT](../licenses/grok-MIT.txt) |
| Muse Code | 0.1.1 | [f0ccd0ae8eaf54d727698b116d6ad9b572a89e11](https://github.com/wjgoarxiv/litmuse/tree/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11) | [MIT](../licenses/muse-MIT.txt) |
| Antigravity CLI (agy) | 0.1.1 | [de753f838d1952955480b9ac7ccf33f8e21811b0](https://github.com/wjgoarxiv/litgravity/tree/de753f838d1952955480b9ac7ccf33f8e21811b0) | [MIT](../licenses/gravity-MIT.txt) |

The machine-readable product records include `sourceCommit`, `sourceUrl`, `licensePath`, `licenseSha256` and `licenseBytes`; hub verification checks the distributed license bytes and source-link consistency.

## Verified standalone export

`skills/grok/lit-humanizer/` exports `.grok/skills/lit-humanizer/` from the LitGrok 1.0.26 public release commit [`e827a6aa9f0348506e78ac9f1dc78f9c871ea455`](https://github.com/wjgoarxiv/litgrok/tree/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-humanizer). The export includes its Grok Build entrypoint, references, examples, fixtures, assets, rules, helper scripts and `NOTICE`. Its Windows/Python process helper is vendored from the adjacent native document skill in that same snapshot, and two imports point to the local copy. The inventory records original source hashes, the helper dependency, the two import adaptations, the fixture’s equivalent Unicode category ranges and Python flag mapping, the rules-parser module extraction, and every distributed file hash. The skill retains Grok Build host requirements and makes no cross-host behavior claim.

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

LitMuse skill contracts use Muse plugin discovery and capability approvals; LitGravity contracts use agy plugin discovery, PreInvocation routing and host-owned tools. Their engines are installed separately through their own runtime commands. Neither is a standalone cross-host export.

## Complete native catalog

`Native product` below means the original product distribution is the supported path. `Standalone Grok` identifies only the verified matching-host export.

The established products added six skills after 1.0.0; Muse and Gravity include them from 0.1.0: `lit-humanizer` for English and Korean prose revision (it replaces `lit-korean`), `lit-docx` for Word documents in one of six looks, `lit-pptx` for PowerPoint decks in one of eight looks, `lit-diagram-drawer` for diagrams, `lit-typographic-motion` for short films and motion graphics, and `readme-studio` for project READMEs. `lit-korean` and `skill-observer` are no longer native entries.

LitClaude 1.0.38 adds three skills that only it carries so far: `lit-adhd`, which also answers to `lit-rewind`, reads your recent sessions and gives a brief of where each one stands with one next step; `lit-hijack` ports a technique from someone's posts, repositories or papers into one of your own skills and proves the change; `lit-schematic` draws checked P&IDs, apparatus figures and cutaways as SVG, PDF and PNG.

### Claude Code — 1.0.40

42 native entries; 22 supporting skill documents.

| Skill | Distribution | Source path |
|---|---|---|
| `autoconference` | Native product | [plugins/litclaude/skills/autoconference/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/autoconference/SKILL.md) |
| `autoresearch` | Native product | [plugins/litclaude/skills/autoresearch/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/autoresearch/SKILL.md) |
| `browser-drive` | Native product | [plugins/litclaude/skills/browser-drive/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/browser-drive/SKILL.md) |
| `comment-checker` | Native product | [plugins/litclaude/skills/comment-checker/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/comment-checker/SKILL.md) |
| `debugging` | Native product | [plugins/litclaude/skills/debugging/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/debugging/SKILL.md) |
| `deep-interview` | Native product | [plugins/litclaude/skills/deep-interview/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/deep-interview/SKILL.md) |
| `frontend-ui-ux` | Native product | [plugins/litclaude/skills/frontend-ui-ux/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/frontend-ui-ux/SKILL.md) |
| `lit-adhd` | Native product | [plugins/litclaude/skills/lit-adhd/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-adhd/SKILL.md) |
| `lit-brainstorm` | Native product | [plugins/litclaude/skills/lit-brainstorm/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-brainstorm/SKILL.md) |
| `lit-burnoff-file` | Native product | [plugins/litclaude/skills/lit-burnoff-file/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-burnoff-file/SKILL.md) |
| `lit-burnoff` | Native product | [plugins/litclaude/skills/lit-burnoff/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-burnoff/SKILL.md) |
| `lit-code` | Native product | [plugins/litclaude/skills/lit-code/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-code/SKILL.md) |
| `lit-commit` | Native product | [plugins/litclaude/skills/lit-commit/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-commit/SKILL.md) |
| `lit-comprehend` | Native product | [plugins/litclaude/skills/lit-comprehend/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-comprehend/SKILL.md) |
| `lit-crucible` | Native product | [plugins/litclaude/skills/lit-crucible/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-crucible/SKILL.md) |
| `lit-diagram-drawer` | Native product | [plugins/litclaude/skills/lit-diagram-drawer/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-diagram-drawer/SKILL.md) |
| `lit-docx` | Native product | [plugins/litclaude/skills/lit-docx/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-docx/SKILL.md) |
| `lit-handoff` | Native product | [plugins/litclaude/skills/lit-handoff/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-handoff/SKILL.md) |
| `lit-hijack` | Native product | [plugins/litclaude/skills/lit-hijack/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-hijack/SKILL.md) |
| `lit-humanizer` | Native product | [plugins/litclaude/skills/lit-humanizer/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-humanizer/SKILL.md) |
| `lit-init` | Native product | [plugins/litclaude/skills/lit-init/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-init/SKILL.md) |
| `lit-loop` | Native product | [plugins/litclaude/skills/lit-loop/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-loop/SKILL.md) |
| `lit-plan` | Native product | [plugins/litclaude/skills/lit-plan/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-plan/SKILL.md) |
| `lit-pptx` | Native product | [plugins/litclaude/skills/lit-pptx/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-pptx/SKILL.md) |
| `lit-recap` | Native product | [plugins/litclaude/skills/lit-recap/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-recap/SKILL.md) |
| `lit-schematic` | Native product | [plugins/litclaude/skills/lit-schematic/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-schematic/SKILL.md) |
| `lit-scientific-visualization` | Native product | [plugins/litclaude/skills/lit-scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-scientific-visualization/SKILL.md) |
| `lit-team` | Native product | [plugins/litclaude/skills/lit-team/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-team/SKILL.md) |
| `lit-typographic-motion` | Native product | [plugins/litclaude/skills/lit-typographic-motion/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lit-typographic-motion/SKILL.md) |
| `litgoal` | Native product | [plugins/litclaude/skills/litgoal/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/litgoal/SKILL.md) |
| `litresearch` | Native product | [plugins/litclaude/skills/litresearch/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/litresearch/SKILL.md) |
| `litwork` | Native product | [plugins/litclaude/skills/litwork/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/litwork/SKILL.md) |
| `lsp-setup` | Native product | [plugins/litclaude/skills/lsp-setup/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lsp-setup/SKILL.md) |
| `lsp` | Native product | [plugins/litclaude/skills/lsp/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/lsp/SKILL.md) |
| `readme-studio` | Native product | [plugins/litclaude/skills/readme-studio/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/readme-studio/SKILL.md) |
| `refactor` | Native product | [plugins/litclaude/skills/refactor/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/refactor/SKILL.md) |
| `review-work` | Native product | [plugins/litclaude/skills/review-work/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/review-work/SKILL.md) |
| `rules` | Native product | [plugins/litclaude/skills/rules/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/rules/SKILL.md) |
| `start-work` | Native product | [plugins/litclaude/skills/start-work/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/start-work/SKILL.md) |
| `structural-search` | Native product | [plugins/litclaude/skills/structural-search/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/structural-search/SKILL.md) |
| `visual-qa` | Native product | [plugins/litclaude/skills/visual-qa/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/visual-qa/SKILL.md) |
| `wikify` | Native product | [plugins/litclaude/skills/wikify/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/skills/wikify/SKILL.md) |

Supporting documents, preserved as inventory rather than independent routes:

- [plugins/litclaude/vendor/autoconference/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoconference/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoconference/skills/analyze/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoconference/skills/analyze/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoconference/skills/autoconference/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoconference/skills/autoconference/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoconference/skills/debate/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoconference/skills/debate/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoconference/skills/plan/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoconference/skills/plan/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoconference/skills/resume/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoconference/skills/resume/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoconference/skills/ship/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoconference/skills/ship/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoconference/skills/survey/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoconference/skills/survey/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoresearch/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/autoresearch/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoresearch/skills/autoresearch/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/debug/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoresearch/skills/debug/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/fix/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoresearch/skills/fix/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/learn/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoresearch/skills/learn/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/plan/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoresearch/skills/plan/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/predict/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoresearch/skills/predict/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/reason/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoresearch/skills/reason/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/scenario/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoresearch/skills/scenario/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/security/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoresearch/skills/security/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/autoresearch/skills/ship/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/autoresearch/skills/ship/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/handoff/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/handoff/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/llm-wikify/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/llm-wikify/SKILL.md) — vendor-reference
- [plugins/litclaude/vendor/scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litclaude/blob/fb7237fe26482250d2eecd06ef992ba83a2b778b/plugins/litclaude/vendor/scientific-visualization/SKILL.md) — vendor-reference

### Hermes Agent — 1.0.29

37 native entries; 24 supporting skill documents.

| Skill | Distribution | Source path |
|---|---|---|
| `autoconference` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/SKILL.md) |
| `autoresearch` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/SKILL.md) |
| `browser-drive` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/browser-drive/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/browser-drive/SKILL.md) |
| `comment-checker` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/comment-checker/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/comment-checker/SKILL.md) |
| `debugging` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/debugging/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/debugging/SKILL.md) |
| `deep-interview` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/deep-interview/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/deep-interview/SKILL.md) |
| `frontend-ui-ux` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/frontend-ui-ux/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/frontend-ui-ux/SKILL.md) |
| `lit-brainstorm` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-brainstorm/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-brainstorm/SKILL.md) |
| `lit-burnoff-file` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-burnoff-file/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-burnoff-file/SKILL.md) |
| `lit-burnoff` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-burnoff/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-burnoff/SKILL.md) |
| `lit-code` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-code/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-code/SKILL.md) |
| `lit-commit` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-commit/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-commit/SKILL.md) |
| `lit-comprehend` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-comprehend/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-comprehend/SKILL.md) |
| `lit-crucible` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-crucible/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-crucible/SKILL.md) |
| `lit-diagram-drawer` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-diagram-drawer/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-diagram-drawer/SKILL.md) |
| `lit-docx` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-docx/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-docx/SKILL.md) |
| `lit-handoff` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-handoff/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-handoff/SKILL.md) |
| `lit-humanizer` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-humanizer/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-humanizer/SKILL.md) |
| `lit-init` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-init/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-init/SKILL.md) |
| `lit-plan` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-plan/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-plan/SKILL.md) |
| `lit-pptx` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-pptx/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-pptx/SKILL.md) |
| `lit-recap` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-recap/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-recap/SKILL.md) |
| `lit-scientific-visualization` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-scientific-visualization/SKILL.md) |
| `lit-typographic-motion` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lit-typographic-motion/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lit-typographic-motion/SKILL.md) |
| `litgoal` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/litgoal/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/litgoal/SKILL.md) |
| `litresearch` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/litresearch/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/litresearch/SKILL.md) |
| `litwork` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/litwork/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/litwork/SKILL.md) |
| `lsp-setup` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lsp-setup/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lsp-setup/SKILL.md) |
| `lsp` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/lsp/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/lsp/SKILL.md) |
| `readme-studio` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/readme-studio/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/readme-studio/SKILL.md) |
| `refactor` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/refactor/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/refactor/SKILL.md) |
| `review-work` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/review-work/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/review-work/SKILL.md) |
| `rules` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/rules/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/rules/SKILL.md) |
| `start-work` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/start-work/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/start-work/SKILL.md) |
| `structural-search` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/structural-search/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/structural-search/SKILL.md) |
| `visual-qa` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/visual-qa/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/visual-qa/SKILL.md) |
| `wikify` | Native product | [packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/SKILL.md) |

Supporting documents, preserved as inventory rather than independent routes:

- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/analyze/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/analyze/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/core/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/core/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/debate/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/debate/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/plan/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/plan/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/resume/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/resume/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/ship/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/ship/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/survey/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoconference/modes/survey/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/core/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/core/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/debug/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/debug/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/fix/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/fix/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/learn/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/learn/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/plan/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/plan/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/predict/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/predict/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/reason/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/reason/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/scenario/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/scenario/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/security/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/security/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/ship/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/autoresearch/modes/ship/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/ingest/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/ingest/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/init/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/init/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/lint/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/lint/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/query/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/query/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/save/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/skills/wikify/modes/save/SKILL.md) — nested-mode
- [packages/lithermes-installer/assets/lithermes-plugin/vendor/handoff/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/vendor/handoff/SKILL.md) — vendor-reference
- [packages/lithermes-installer/assets/lithermes-plugin/vendor/scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/lithermes/blob/3c05d629dbd27fd278d745c3f61083e7351ad5f6/packages/lithermes-installer/assets/lithermes-plugin/vendor/scientific-visualization/SKILL.md) — vendor-reference

### Codex CLI — 1.0.30

44 native entries; 3 supporting skill documents.

| Skill | Distribution | Source path |
|---|---|---|
| `autoconference` | Native product | [plugins/litcodex/skills/autoconference/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/autoconference/SKILL.md) |
| `autoresearch` | Native product | [plugins/litcodex/skills/autoresearch/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/autoresearch/SKILL.md) |
| `browser-drive` | Native product | [plugins/litcodex/skills/browser-drive/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/browser-drive/SKILL.md) |
| `coding-session-audit` | Native product | [plugins/litcodex/skills/coding-session-audit/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/coding-session-audit/SKILL.md) |
| `comment-checker` | Native product | [plugins/litcodex/skills/comment-checker/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/comment-checker/SKILL.md) |
| `debugging` | Native product | [plugins/litcodex/skills/debugging/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/debugging/SKILL.md) |
| `deep-interview` | Native product | [plugins/litcodex/skills/deep-interview/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/deep-interview/SKILL.md) |
| `frontend-ui-ux` | Native product | [plugins/litcodex/skills/frontend-ui-ux/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/frontend-ui-ux/SKILL.md) |
| `lit-brainstorm` | Native product | [plugins/litcodex/skills/lit-brainstorm/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-brainstorm/SKILL.md) |
| `lit-burnoff-file` | Native product | [plugins/litcodex/skills/lit-burnoff-file/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-burnoff-file/SKILL.md) |
| `lit-burnoff` | Native product | [plugins/litcodex/skills/lit-burnoff/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-burnoff/SKILL.md) |
| `lit-code` | Native product | [plugins/litcodex/skills/lit-code/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-code/SKILL.md) |
| `lit-commit` | Native product | [plugins/litcodex/skills/lit-commit/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-commit/SKILL.md) |
| `lit-comprehend` | Native product | [plugins/litcodex/skills/lit-comprehend/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-comprehend/SKILL.md) |
| `lit-crucible` | Native product | [plugins/litcodex/skills/lit-crucible/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-crucible/SKILL.md) |
| `lit-diagram-drawer` | Native product | [plugins/litcodex/skills/lit-diagram-drawer/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-diagram-drawer/SKILL.md) |
| `lit-docx` | Native product | [plugins/litcodex/skills/lit-docx/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-docx/SKILL.md) |
| `lit-fetch` | Native product | [plugins/litcodex/skills/lit-fetch/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-fetch/SKILL.md) |
| `lit-handoff` | Native product | [plugins/litcodex/skills/lit-handoff/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-handoff/SKILL.md) |
| `lit-humanizer` | Native product | [plugins/litcodex/skills/lit-humanizer/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-humanizer/SKILL.md) |
| `lit-init` | Native product | [plugins/litcodex/skills/lit-init/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-init/SKILL.md) |
| `lit-loop` | Native product | [plugins/litcodex/skills/lit-loop/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-loop/SKILL.md) |
| `lit-plan` | Native product | [plugins/litcodex/skills/lit-plan/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-plan/SKILL.md) |
| `lit-pptx` | Native product | [plugins/litcodex/skills/lit-pptx/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-pptx/SKILL.md) |
| `lit-recap` | Native product | [plugins/litcodex/skills/lit-recap/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-recap/SKILL.md) |
| `lit-scientific-visualization` | Native product | [plugins/litcodex/skills/lit-scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-scientific-visualization/SKILL.md) |
| `lit-team` | Native product | [plugins/litcodex/skills/lit-team/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-team/SKILL.md) |
| `lit-typographic-motion` | Native product | [plugins/litcodex/skills/lit-typographic-motion/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lit-typographic-motion/SKILL.md) |
| `litcodex-contribute-bug-fix` | Native product | [plugins/litcodex/skills/litcodex-contribute-bug-fix/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/litcodex-contribute-bug-fix/SKILL.md) |
| `litcodex-doctor` | Native product | [plugins/litcodex/skills/litcodex-doctor/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/litcodex-doctor/SKILL.md) |
| `litcodex-report-bug` | Native product | [plugins/litcodex/skills/litcodex-report-bug/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/litcodex-report-bug/SKILL.md) |
| `litgoal` | Native product | [plugins/litcodex/skills/litgoal/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/litgoal/SKILL.md) |
| `litresearch` | Native product | [plugins/litcodex/skills/litresearch/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/litresearch/SKILL.md) |
| `litwork` | Native product | [plugins/litcodex/skills/litwork/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/litwork/SKILL.md) |
| `lsp-setup` | Native product | [plugins/litcodex/skills/lsp-setup/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lsp-setup/SKILL.md) |
| `lsp` | Native product | [plugins/litcodex/skills/lsp/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/lsp/SKILL.md) |
| `readme-studio` | Native product | [plugins/litcodex/skills/readme-studio/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/readme-studio/SKILL.md) |
| `refactor` | Native product | [plugins/litcodex/skills/refactor/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/refactor/SKILL.md) |
| `review-work` | Native product | [plugins/litcodex/skills/review-work/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/review-work/SKILL.md) |
| `rules` | Native product | [plugins/litcodex/skills/rules/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/rules/SKILL.md) |
| `start-work` | Native product | [plugins/litcodex/skills/start-work/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/start-work/SKILL.md) |
| `structural-search` | Native product | [plugins/litcodex/skills/structural-search/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/structural-search/SKILL.md) |
| `visual-qa` | Native product | [plugins/litcodex/skills/visual-qa/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/visual-qa/SKILL.md) |
| `wikify` | Native product | [plugins/litcodex/skills/wikify/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/skills/wikify/SKILL.md) |

Supporting documents, preserved as inventory rather than independent routes:

- [packages/litcodex-ai/src/install/test-fixtures/legacy-lit-korean/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/packages/litcodex-ai/src/install/test-fixtures/legacy-lit-korean/SKILL.md) — test-fixture
- [plugins/litcodex/vendor/handoff/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/vendor/handoff/SKILL.md) — vendor-reference
- [plugins/litcodex/vendor/scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litcodex/blob/f7107e147185af19cb020de6a1051aa9fbfdd8c4/plugins/litcodex/vendor/scientific-visualization/SKILL.md) — vendor-reference

### OpenCode — 1.0.31

46 native entries; 3 supporting skill documents.

| Skill | Distribution | Source path |
|---|---|---|
| `agent-roster` | Native product | [skills/agent-roster/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/agent-roster/SKILL.md) |
| `autoconference` | Native product | [skills/autoconference/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/autoconference/SKILL.md) |
| `autoresearch` | Native product | [skills/autoresearch/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/autoresearch/SKILL.md) |
| `browser-drive` | Native product | [skills/browser-drive/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/browser-drive/SKILL.md) |
| `comment-checker` | Native product | [skills/comment-checker/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/comment-checker/SKILL.md) |
| `debugging` | Native product | [skills/debugging/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/debugging/SKILL.md) |
| `deep-interview` | Native product | [skills/deep-interview/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/deep-interview/SKILL.md) |
| `doctor-installer` | Native product | [skills/doctor-installer/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/doctor-installer/SKILL.md) |
| `frontend-ui-ux` | Native product | [skills/frontend-ui-ux/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/frontend-ui-ux/SKILL.md) |
| `lit-brainstorm` | Native product | [skills/lit-brainstorm/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-brainstorm/SKILL.md) |
| `lit-burnoff-file` | Native product | [skills/lit-burnoff-file/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-burnoff-file/SKILL.md) |
| `lit-burnoff` | Native product | [skills/lit-burnoff/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-burnoff/SKILL.md) |
| `lit-code` | Native product | [skills/lit-code/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-code/SKILL.md) |
| `lit-commit` | Native product | [skills/lit-commit/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-commit/SKILL.md) |
| `lit-comprehend` | Native product | [skills/lit-comprehend/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-comprehend/SKILL.md) |
| `lit-crucible` | Native product | [skills/lit-crucible/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-crucible/SKILL.md) |
| `lit-diagram-drawer` | Native product | [skills/lit-diagram-drawer/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-diagram-drawer/SKILL.md) |
| `lit-docx` | Native product | [skills/lit-docx/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-docx/SKILL.md) |
| `lit-fetch` | Native product | [skills/lit-fetch/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-fetch/SKILL.md) |
| `lit-handoff` | Native product | [skills/lit-handoff/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-handoff/SKILL.md) |
| `lit-humanizer` | Native product | [skills/lit-humanizer/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-humanizer/SKILL.md) |
| `lit-init` | Native product | [skills/lit-init/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-init/SKILL.md) |
| `lit-plan` | Native product | [skills/lit-plan/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-plan/SKILL.md) |
| `lit-pptx` | Native product | [skills/lit-pptx/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-pptx/SKILL.md) |
| `lit-recap` | Native product | [skills/lit-recap/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-recap/SKILL.md) |
| `lit-scientific-visualization` | Native product | [skills/lit-scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-scientific-visualization/SKILL.md) |
| `lit-typographic-motion` | Native product | [skills/lit-typographic-motion/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lit-typographic-motion/SKILL.md) |
| `litgoal` | Native product | [skills/litgoal/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/litgoal/SKILL.md) |
| `litresearch` | Native product | [skills/litresearch/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/litresearch/SKILL.md) |
| `litwork` | Native product | [skills/litwork/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/litwork/SKILL.md) |
| `lsp-setup` | Native product | [skills/lsp-setup/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lsp-setup/SKILL.md) |
| `lsp` | Native product | [skills/lsp/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/lsp/SKILL.md) |
| `native-goal-verdict` | Native product | [skills/native-goal-verdict/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/native-goal-verdict/SKILL.md) |
| `readme-studio` | Native product | [skills/readme-studio/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/readme-studio/SKILL.md) |
| `refactor` | Native product | [skills/refactor/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/refactor/SKILL.md) |
| `reference-benchmark-claims` | Native product | [skills/reference-benchmark-claims/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/reference-benchmark-claims/SKILL.md) |
| `release-guardrails` | Native product | [skills/release-guardrails/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/release-guardrails/SKILL.md) |
| `review-work` | Native product | [skills/review-work/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/review-work/SKILL.md) |
| `rules` | Native product | [skills/rules/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/rules/SKILL.md) |
| `search-workflow-ideas` | Native product | [skills/search-workflow-ideas/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/search-workflow-ideas/SKILL.md) |
| `start-work` | Native product | [skills/start-work/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/start-work/SKILL.md) |
| `structural-search` | Native product | [skills/structural-search/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/structural-search/SKILL.md) |
| `tool-guards` | Native product | [skills/tool-guards/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/tool-guards/SKILL.md) |
| `visual-qa` | Native product | [skills/visual-qa/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/visual-qa/SKILL.md) |
| `wikify` | Native product | [skills/wikify/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/wikify/SKILL.md) |
| `workflow-loop` | Native product | [skills/workflow-loop/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/skills/workflow-loop/SKILL.md) |

Supporting documents, preserved as inventory rather than independent routes:

- [test/fixtures/retired-lit-korean/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/test/fixtures/retired-lit-korean/SKILL.md) — test-fixture
- [vendor/handoff/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/vendor/handoff/SKILL.md) — vendor-reference
- [vendor/scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litopencode/blob/1dd58f44bba8dd4f613188b553a50a17e838400b/vendor/scientific-visualization/SKILL.md) — vendor-reference

### Grok Build — 1.0.26

39 native entries; 0 supporting skill documents.

The `lit-humanizer` row is the standalone export described above, copied from this same public release commit.

| Skill | Distribution | Source path |
|---|---|---|
| `autoconference` | Native product | [.grok/skills/autoconference/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/autoconference/SKILL.md) |
| `autoresearch` | Native product | [.grok/skills/autoresearch/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/autoresearch/SKILL.md) |
| `browser-drive` | Native product | [.grok/skills/browser-drive/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/browser-drive/SKILL.md) |
| `comment-checker` | Native product | [.grok/skills/comment-checker/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/comment-checker/SKILL.md) |
| `debugging` | Native product | [.grok/skills/debugging/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/debugging/SKILL.md) |
| `deep-interview` | Native product | [.grok/skills/deep-interview/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/deep-interview/SKILL.md) |
| `frontend-ui-ux` | Native product | [.grok/skills/frontend-ui-ux/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/frontend-ui-ux/SKILL.md) |
| `lit-brainstorm` | Native product | [.grok/skills/lit-brainstorm/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-brainstorm/SKILL.md) |
| `lit-burnoff-file` | Native product | [.grok/skills/lit-burnoff-file/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-burnoff-file/SKILL.md) |
| `lit-burnoff` | Native product | [.grok/skills/lit-burnoff/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-burnoff/SKILL.md) |
| `lit-code` | Native product | [.grok/skills/lit-code/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-code/SKILL.md) |
| `lit-commit` | Native product | [.grok/skills/lit-commit/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-commit/SKILL.md) |
| `lit-comprehend` | Native product | [.grok/skills/lit-comprehend/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-comprehend/SKILL.md) |
| `lit-crucible` | Native product | [.grok/skills/lit-crucible/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-crucible/SKILL.md) |
| `lit-diagram-drawer` | Native product | [.grok/skills/lit-diagram-drawer/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-diagram-drawer/SKILL.md) |
| `lit-docx` | Native product | [.grok/skills/lit-docx/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-docx/SKILL.md) |
| `lit-handoff` | Native product | [.grok/skills/lit-handoff/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-handoff/SKILL.md) |
| `lit-humanizer` | Standalone Grok | [.grok/skills/lit-humanizer/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-humanizer/SKILL.md) |
| `lit-init` | Native product | [.grok/skills/lit-init/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-init/SKILL.md) |
| `lit-plan` | Native product | [.grok/skills/lit-plan/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-plan/SKILL.md) |
| `lit-pptx` | Native product | [.grok/skills/lit-pptx/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-pptx/SKILL.md) |
| `lit-recap` | Native product | [.grok/skills/lit-recap/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-recap/SKILL.md) |
| `lit-scientific-visualization` | Native product | [.grok/skills/lit-scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-scientific-visualization/SKILL.md) |
| `lit-team` | Native product | [.grok/skills/lit-team/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-team/SKILL.md) |
| `lit-typographic-motion` | Native product | [.grok/skills/lit-typographic-motion/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lit-typographic-motion/SKILL.md) |
| `litgoal` | Native product | [.grok/skills/litgoal/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/litgoal/SKILL.md) |
| `litgrok` | Native product | [.grok/skills/litgrok/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/litgrok/SKILL.md) |
| `litresearch` | Native product | [.grok/skills/litresearch/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/litresearch/SKILL.md) |
| `litwork` | Native product | [.grok/skills/litwork/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/litwork/SKILL.md) |
| `lsp-setup` | Native product | [.grok/skills/lsp-setup/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lsp-setup/SKILL.md) |
| `lsp` | Native product | [.grok/skills/lsp/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/lsp/SKILL.md) |
| `readme-studio` | Native product | [.grok/skills/readme-studio/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/readme-studio/SKILL.md) |
| `refactor` | Native product | [.grok/skills/refactor/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/refactor/SKILL.md) |
| `review-work` | Native product | [.grok/skills/review-work/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/review-work/SKILL.md) |
| `rules` | Native product | [.grok/skills/rules/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/rules/SKILL.md) |
| `start-work` | Native product | [.grok/skills/start-work/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/start-work/SKILL.md) |
| `structural-search` | Native product | [.grok/skills/structural-search/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/structural-search/SKILL.md) |
| `visual-qa` | Native product | [.grok/skills/visual-qa/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/visual-qa/SKILL.md) |
| `wikify` | Native product | [.grok/skills/wikify/SKILL.md](https://github.com/wjgoarxiv/litgrok/blob/e827a6aa9f0348506e78ac9f1dc78f9c871ea455/.grok/skills/wikify/SKILL.md) |

### Muse Code — 0.1.1

39 native entries; 0 supporting skill documents.

| Skill | Distribution | Source path |
|---|---|---|
| `autoconference` | Native product | [plugin/skills/autoconference/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/autoconference/SKILL.md) |
| `autoresearch` | Native product | [plugin/skills/autoresearch/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/autoresearch/SKILL.md) |
| `browser-drive` | Native product | [plugin/skills/browser-drive/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/browser-drive/SKILL.md) |
| `comment-checker` | Native product | [plugin/skills/comment-checker/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/comment-checker/SKILL.md) |
| `debugging` | Native product | [plugin/skills/debugging/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/debugging/SKILL.md) |
| `deep-interview` | Native product | [plugin/skills/deep-interview/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/deep-interview/SKILL.md) |
| `frontend-ui-ux` | Native product | [plugin/skills/frontend-ui-ux/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/frontend-ui-ux/SKILL.md) |
| `lit-brainstorm` | Native product | [plugin/skills/lit-brainstorm/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-brainstorm/SKILL.md) |
| `lit-burnoff-file` | Native product | [plugin/skills/lit-burnoff-file/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-burnoff-file/SKILL.md) |
| `lit-burnoff` | Native product | [plugin/skills/lit-burnoff/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-burnoff/SKILL.md) |
| `lit-code` | Native product | [plugin/skills/lit-code/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-code/SKILL.md) |
| `lit-commit` | Native product | [plugin/skills/lit-commit/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-commit/SKILL.md) |
| `lit-comprehend` | Native product | [plugin/skills/lit-comprehend/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-comprehend/SKILL.md) |
| `lit-crucible` | Native product | [plugin/skills/lit-crucible/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-crucible/SKILL.md) |
| `lit-diagram-drawer` | Native product | [plugin/skills/lit-diagram-drawer/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-diagram-drawer/SKILL.md) |
| `lit-docx` | Native product | [plugin/skills/lit-docx/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-docx/SKILL.md) |
| `lit-handoff` | Native product | [plugin/skills/lit-handoff/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-handoff/SKILL.md) |
| `lit-humanizer` | Native product | [plugin/skills/lit-humanizer/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-humanizer/SKILL.md) |
| `lit-init` | Native product | [plugin/skills/lit-init/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-init/SKILL.md) |
| `lit-loop` | Native product | [plugin/skills/lit-loop/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-loop/SKILL.md) |
| `lit-plan` | Native product | [plugin/skills/lit-plan/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-plan/SKILL.md) |
| `lit-pptx` | Native product | [plugin/skills/lit-pptx/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-pptx/SKILL.md) |
| `lit-recap` | Native product | [plugin/skills/lit-recap/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-recap/SKILL.md) |
| `lit-scientific-visualization` | Native product | [plugin/skills/lit-scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-scientific-visualization/SKILL.md) |
| `lit-team` | Native product | [plugin/skills/lit-team/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-team/SKILL.md) |
| `lit-typographic-motion` | Native product | [plugin/skills/lit-typographic-motion/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lit-typographic-motion/SKILL.md) |
| `litgoal` | Native product | [plugin/skills/litgoal/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/litgoal/SKILL.md) |
| `litresearch` | Native product | [plugin/skills/litresearch/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/litresearch/SKILL.md) |
| `litwork` | Native product | [plugin/skills/litwork/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/litwork/SKILL.md) |
| `lsp-setup` | Native product | [plugin/skills/lsp-setup/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lsp-setup/SKILL.md) |
| `lsp` | Native product | [plugin/skills/lsp/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/lsp/SKILL.md) |
| `readme-studio` | Native product | [plugin/skills/readme-studio/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/readme-studio/SKILL.md) |
| `refactor` | Native product | [plugin/skills/refactor/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/refactor/SKILL.md) |
| `review-work` | Native product | [plugin/skills/review-work/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/review-work/SKILL.md) |
| `rules` | Native product | [plugin/skills/rules/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/rules/SKILL.md) |
| `start-work` | Native product | [plugin/skills/start-work/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/start-work/SKILL.md) |
| `structural-search` | Native product | [plugin/skills/structural-search/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/structural-search/SKILL.md) |
| `visual-qa` | Native product | [plugin/skills/visual-qa/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/visual-qa/SKILL.md) |
| `wikify` | Native product | [plugin/skills/wikify/SKILL.md](https://github.com/wjgoarxiv/litmuse/blob/f0ccd0ae8eaf54d727698b116d6ad9b572a89e11/plugin/skills/wikify/SKILL.md) |

### Antigravity CLI (agy) — 0.1.1

39 native entries; 0 supporting skill documents.

| Skill | Distribution | Source path |
|---|---|---|
| `autoconference` | Native product | [plugin/skills/autoconference/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/autoconference/SKILL.md) |
| `autoresearch` | Native product | [plugin/skills/autoresearch/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/autoresearch/SKILL.md) |
| `browser-drive` | Native product | [plugin/skills/browser-drive/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/browser-drive/SKILL.md) |
| `comment-checker` | Native product | [plugin/skills/comment-checker/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/comment-checker/SKILL.md) |
| `debugging` | Native product | [plugin/skills/debugging/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/debugging/SKILL.md) |
| `deep-interview` | Native product | [plugin/skills/deep-interview/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/deep-interview/SKILL.md) |
| `frontend-ui-ux` | Native product | [plugin/skills/frontend-ui-ux/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/frontend-ui-ux/SKILL.md) |
| `lit-brainstorm` | Native product | [plugin/skills/lit-brainstorm/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-brainstorm/SKILL.md) |
| `lit-burnoff-file` | Native product | [plugin/skills/lit-burnoff-file/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-burnoff-file/SKILL.md) |
| `lit-burnoff` | Native product | [plugin/skills/lit-burnoff/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-burnoff/SKILL.md) |
| `lit-code` | Native product | [plugin/skills/lit-code/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-code/SKILL.md) |
| `lit-commit` | Native product | [plugin/skills/lit-commit/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-commit/SKILL.md) |
| `lit-comprehend` | Native product | [plugin/skills/lit-comprehend/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-comprehend/SKILL.md) |
| `lit-crucible` | Native product | [plugin/skills/lit-crucible/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-crucible/SKILL.md) |
| `lit-diagram-drawer` | Native product | [plugin/skills/lit-diagram-drawer/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-diagram-drawer/SKILL.md) |
| `lit-docx` | Native product | [plugin/skills/lit-docx/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-docx/SKILL.md) |
| `lit-handoff` | Native product | [plugin/skills/lit-handoff/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-handoff/SKILL.md) |
| `lit-humanizer` | Native product | [plugin/skills/lit-humanizer/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-humanizer/SKILL.md) |
| `lit-init` | Native product | [plugin/skills/lit-init/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-init/SKILL.md) |
| `lit-loop` | Native product | [plugin/skills/lit-loop/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-loop/SKILL.md) |
| `lit-plan` | Native product | [plugin/skills/lit-plan/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-plan/SKILL.md) |
| `lit-pptx` | Native product | [plugin/skills/lit-pptx/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-pptx/SKILL.md) |
| `lit-recap` | Native product | [plugin/skills/lit-recap/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-recap/SKILL.md) |
| `lit-scientific-visualization` | Native product | [plugin/skills/lit-scientific-visualization/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-scientific-visualization/SKILL.md) |
| `lit-team` | Native product | [plugin/skills/lit-team/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-team/SKILL.md) |
| `lit-typographic-motion` | Native product | [plugin/skills/lit-typographic-motion/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lit-typographic-motion/SKILL.md) |
| `litgoal` | Native product | [plugin/skills/litgoal/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/litgoal/SKILL.md) |
| `litresearch` | Native product | [plugin/skills/litresearch/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/litresearch/SKILL.md) |
| `litwork` | Native product | [plugin/skills/litwork/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/litwork/SKILL.md) |
| `lsp-setup` | Native product | [plugin/skills/lsp-setup/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lsp-setup/SKILL.md) |
| `lsp` | Native product | [plugin/skills/lsp/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/lsp/SKILL.md) |
| `readme-studio` | Native product | [plugin/skills/readme-studio/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/readme-studio/SKILL.md) |
| `refactor` | Native product | [plugin/skills/refactor/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/refactor/SKILL.md) |
| `review-work` | Native product | [plugin/skills/review-work/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/review-work/SKILL.md) |
| `rules` | Native product | [plugin/skills/rules/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/rules/SKILL.md) |
| `start-work` | Native product | [plugin/skills/start-work/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/start-work/SKILL.md) |
| `structural-search` | Native product | [plugin/skills/structural-search/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/structural-search/SKILL.md) |
| `visual-qa` | Native product | [plugin/skills/visual-qa/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/visual-qa/SKILL.md) |
| `wikify` | Native product | [plugin/skills/wikify/SKILL.md](https://github.com/wjgoarxiv/litgravity/blob/de753f838d1952955480b9ac7ccf33f8e21811b0/plugin/skills/wikify/SKILL.md) |
