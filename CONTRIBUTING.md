# Contributing

LitFamily is a discovery and distribution hub for five independent products. Changes to a harness implementation belong in that product repository. A working change in one product does not establish compatibility in another.

For a hub change, explain the reader-visible problem, keep the diff limited to the relevant documentation, manifest, catalog or artwork, and run:

```sh
node --test test/hub.test.mjs
node tools/verify.mjs
```

Maintain English and Korean entry pages together. Keep the product's exact CLI and native plugin IDs when updating npm names. Label proposed public commands until their destinations have been verified. Check relative links from the final repository layout, including after copying a skill outside this checkout.

The skill catalog must account for every tracked native entry, nested mode and vendor skill document in the reviewed product snapshots. Complete host integration is provided through each product's native installation route. Exporting an independent skill requires a complete directory and reference closure, license retention, accurate host requirements, and a real isolated list/install/remove probe. Preserve product, source path and commit when equal skill IDs occur in multiple products; select a canonical source explicitly for each direct export. Keep unexported candidates in the catalog. Never install host-dependent prompts into another agent and call the result portable.

Keep artwork hashes and original notices. Update assets in a new reviewed revision; do not silently replace frozen artwork or invent a missing source-file provenance. Font licenses are listed in the [brand guide](assets/brand/README.md).

Use a temporary project, home and cache for installer checks. Preserve unrelated configuration and modified user files. Record failures and cleanup; do not weaken tests or convert an unrun check into a passing claim. Do not include credentials, private handoffs, local ledgers, caches, tarballs or test output in a contribution.

Push, publication, tags, version changes, repository visibility changes and package deprecation require the maintainer's explicit release authorization. The hub CI only validates local files; it has no publishing job. Keep these controls separate from routine content review.
