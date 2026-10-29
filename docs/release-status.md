# Release status

All seven independent products are released. On 2026-10-29, each version below was the npm `latest` of its `@litfamily` package, and each source commit below is the public `main` commit its tarball was packed from; the skill files in each published tarball match that commit byte for byte. LitMuse and LitGravity followed their 0.1.0 first releases with 0.1.1, 0.1.2, 0.1.3 and 0.1.4. All seven versions were published with npm provenance, so each tarball carries a signed attestation that links it to the source commit and workflow that built it.

| Product | Released version | npm package | Host |
|---|---|---|---|
| LitClaude | 1.0.43 | [`@litfamily/litclaude`](https://www.npmjs.com/package/@litfamily/litclaude) | Claude Code |
| LitHermes | 1.0.32 | [`@litfamily/lithermes`](https://www.npmjs.com/package/@litfamily/lithermes) | Hermes Agent |
| LitCodex | 1.0.33 | [`@litfamily/litcodex`](https://www.npmjs.com/package/@litfamily/litcodex) | Codex CLI |
| LitOpenCode | 1.0.34 | [`@litfamily/litopencode`](https://www.npmjs.com/package/@litfamily/litopencode) | OpenCode |
| LitGrok | 1.0.29 | [`@litfamily/litgrok`](https://www.npmjs.com/package/@litfamily/litgrok) | Grok Build |
| LitMuse | 0.1.4 | [`@litfamily/litmuse`](https://www.npmjs.com/package/@litfamily/litmuse) | Muse Code |
| LitGravity | 0.1.4 | [`@litfamily/litgravity`](https://www.npmjs.com/package/@litfamily/litgravity) | Antigravity CLI (agy) |

## Final public source commits

The catalog, Claude marketplace and Grok skill export pin the final public release commits below. Each one is the source of its npm package; the local gates validate files, links and hashes. Public installation acceptance requires its own fetch and host checks.

| Product | Version | State | Source commit |
|---|---|---|---|
| LitClaude | 1.0.43 | published | `4fa79fdb36d610b338dc016a5a1ba9280a6459a9` |
| LitHermes | 1.0.32 | published | `db47cc10c79df6571e3810d39d800cb4554cf0ea` |
| LitCodex | 1.0.33 | published | `c5606f21e023396a677ca0ce429fc39e15d58da7` |
| LitOpenCode | 1.0.34 | published | `eff765581dd07141b87d25a80ccd6c9e84c4bdd8` |
| LitGrok | 1.0.29 | published | `fd0c9403f55d6fa8e7ce610e2c38ca2846b41dde` |
| LitMuse | 0.1.4 | published | `05f405fbf34a5f388589e66c7669556f76f3fa3b` |
| LitGravity | 0.1.4 | published | `8618daaab5a5ed8bab7ee6c59871f1f1ad931439` |

LitMuse is an independent community project, not affiliated with Meta. LitGravity targets Antigravity CLI (`agy`) at [wjgoarxiv/litgravity](https://github.com/wjgoarxiv/litgravity).

The [skill catalog](skills.md) retains host-specific installation boundaries. Artwork illustrates the workflow; host activation and real task completion require their own checks.
