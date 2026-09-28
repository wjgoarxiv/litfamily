# Support

Start with the product matching your harness in the [README](README.md). The hub handles broken family links, marketplace catalog entries, skill compatibility records and brand files. Installer, hook, tool, permission and update behavior belongs to the corresponding product repository.

When reporting a problem, provide the harness and product version, operating system, exact redacted command, expected result and observed result. State whether the source was a local checkout, packed archive, npm registry or marketplace. Include relevant `doctor` output only after removing private paths, account identifiers and secrets.

For installation problems, retain the existing configuration and owned-file receipts. Do not delete global state or bypass ownership checks to make a retry work. For missing optional tools, distinguish an unavailable tool from a failed product. A local fixture cannot establish authenticated host behavior.

Use a repository issue for non-sensitive reproducible bugs once the repository is accessible. Follow [Security](SECURITY.md) for sensitive reports. Responses are best-effort; no dedicated support service is promised.
