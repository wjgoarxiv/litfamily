# Native marketplaces

This page records the pinned marketplace sources. The pinned commits are the released GitHub `main` commits, but the GitHub repositories are private for now. Local manifest validation does not prove that another user can download a plugin.

## Claude Code

The hub's [marketplace manifest](../.claude-plugin/marketplace.json) contains one plugin: `litclaude`. Only LitClaude targets Claude Code. The other four products are not entries in this marketplace.

The source is the `plugins/litclaude` subdirectory of `https://github.com/wjgoarxiv/litclaude.git`. Claude's documented source type for a repository subdirectory is `git-subdir`, with `url` and `path`. A `github` source points at a repository root and has no documented `path` field. This distinction matters because LitClaude's real plugin manifest is `plugins/litclaude/.claude-plugin/plugin.json`.

The hub lives at the private `wjgoarxiv/litfamily` for now. The commands below assume the proposed `litfamily` GitHub organization, which does not exist yet. After the hub and source repository are publicly available there and independently verified, the intended commands are:

```text
/plugin marketplace add litfamily/litfamily
/plugin install litclaude@litfamily
```

These are future publication instructions, not proof of current availability. The plugin ID stays `litclaude`; the marketplace ID is `litfamily`; neither is the npm package name. The product-owned marketplace retains `litclaude-ai` with source `./plugins/litclaude`; this hub uses the separate `litfamily` registration. Choose one activation route and avoid enabling the same plugin through both registrations. Follow the product migration guide before replacing one registration with another. A marketplace install supplies the plugin; it does not imply that the npm installer's optional HUD, status-line or host configuration setup ran.

For local schema checking, run `claude plugin validate .` from the hub root. Installing from this manifest fetches the GitHub source and is a separate operation; validation is not installation. The `git-subdir` source uses the full `sha` of the LitClaude 1.0.12 release commit recorded in the [source catalog](skills.md#assessed-source-identities-and-licenses). Hub verification requires those pins to match. The private development history is not included in that source.

Public release acceptance still requires a real fetch, isolated install, activation checks and removal from the pinned remote source after the necessary remote actions are authorized. An isolated local-transport check, if recorded, proves only the local lifecycle and cannot satisfy public availability.

Schema authority: [Claude Code marketplace documentation](https://code.claude.com/docs/en/plugin-marketplaces).

## Codex CLI

The native marketplace remains in the independent LitCodex repository at `.agents/plugins/marketplace.json`. Its marketplace name is `litcodex`; its plugin name is `litcodex`; its source is `./plugins/litcodex`. The current native policy uses installation `AVAILABLE` and authentication `ON_INSTALL`.

Use the [LitCodex repository](https://github.com/wjgoarxiv/litcodex/tree/bc5b281178eb2d65d4dadca27a076f561f88c56c) and its own installer and `/plugins` guidance. This hub does not duplicate that manifest with a relative path pointing outside itself, declare a Claude-compatible Codex plugin, or claim official directory acceptance. The plugin icon and brand color remain product-owned.

## Other harnesses

LitHermes uses its Hermes installer and Python plugin registration. LitOpenCode uses its OpenCode plugin and config path. LitGrok uses documented Grok Build skills/rules and its installer. Choose the matching product from the [family README](../README.md); no product requires this hub or another product at runtime.
