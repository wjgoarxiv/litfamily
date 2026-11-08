# Release status

All seven independent products are released. On 2026-11-09, each version below was the npm `latest` of its `@litfamily` package, and each source commit below is the public `main` commit its tarball was packed from; the skill files in each published tarball match that commit byte for byte. LitMuse and LitGravity followed their 0.1.0 first releases with 0.1.1, 0.1.2, 0.1.3 and 0.1.4. All seven versions were published with npm provenance, so each tarball carries a signed attestation that links it to the source commit and workflow that built it.

| Product | Released version | npm package | Host |
|---|---|---|---|
| LitClaude | 1.0.47 | [`@litfamily/litclaude`](https://www.npmjs.com/package/@litfamily/litclaude) | Claude Code |
| LitHermes | 1.0.37 | [`@litfamily/lithermes`](https://www.npmjs.com/package/@litfamily/lithermes) | Hermes Agent |
| LitCodex | 1.0.36 | [`@litfamily/litcodex`](https://www.npmjs.com/package/@litfamily/litcodex) | Codex CLI |
| LitOpenCode | 1.0.41 | [`@litfamily/litopencode`](https://www.npmjs.com/package/@litfamily/litopencode) | OpenCode |
| LitGrok | 1.0.33 | [`@litfamily/litgrok`](https://www.npmjs.com/package/@litfamily/litgrok) | Grok Build |
| LitMuse | 0.1.10 | [`@litfamily/litmuse`](https://www.npmjs.com/package/@litfamily/litmuse) | Muse Code |
| LitGravity | 0.1.7 | [`@litfamily/litgravity`](https://www.npmjs.com/package/@litfamily/litgravity) | Antigravity CLI (agy) |

## Final public source commits

The catalog, Claude marketplace and Grok skill export pin the final public release commits below. Each one is the source of its npm package; the local gates validate files, links and hashes. Public installation acceptance requires its own fetch and host checks.

| Product | Version | State | Source commit |
|---|---|---|---|
| LitClaude | 1.0.47 | published | `b4e9395b1880909f6988eeb8417997b0f265a0c0` |
| LitHermes | 1.0.37 | published | `7c0fd8daa841aa2e41c2475e131c29c4df2d9cf1` |
| LitCodex | 1.0.36 | published | `ad9056e72f9e4a2cba577845dd6fb85a3e0c9b78` |
| LitOpenCode | 1.0.41 | published | `9e82f7abd4341a1d0ef40d393f5d42eec786393f` |
| LitGrok | 1.0.33 | published | `07d575f11b3a9aeb99ff205f8ce1cc2bd14dd292` |
| LitMuse | 0.1.10 | published | `f629ee41f0a38a65dd436c03c546b3ca657cad50` |
| LitGravity | 0.1.7 | published | `53899d5885b11bc5b687f17c21aae0e380549874` |

LitMuse is an independent community project, not affiliated with Meta. LitGravity targets Antigravity CLI (`agy`) at [wjgoarxiv/litgravity](https://github.com/wjgoarxiv/litgravity).

The [skill catalog](skills.md) retains host-specific installation boundaries. Artwork illustrates the workflow; host activation and real task completion require their own checks.
