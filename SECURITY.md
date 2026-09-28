# Security

The hub distributes documentation, artwork and a Claude marketplace catalog. The catalog can direct a host to fetch and execute another repository's plugin. Review source ownership, the selected commit and the target product's security policy before installing. A skills CLI installs instructions and supporting files; it does not confer authority to execute their contents.

Do not put secrets, private project files, full agent transcripts or exploitable credentials in a public issue. Use GitHub's private vulnerability reporting on the affected repository if that feature is enabled. If it is unavailable, ask the maintainer through the repository's contact surface for a private reporting channel without disclosing the exploit. No private mailbox or response-time guarantee is represented here.

Include the affected hub/product revision, the source entry or skill path, expected and observed behavior, a minimal redacted reproducer, and any containment already performed. Distinguish an incorrect catalog link from a vulnerability in a product installer or host. Do not test another user's account, repository or machine.

Suspected source substitution, path escape, symlink overwrite, unexpected install destinations, secret logging or unauthorized host changes should stop installation until reviewed. Preserve evidence without keeping live credentials. Report product runtime vulnerabilities to that product's maintainers; this hub does not replace their release and update policies.

No support window has been set for the released versions yet. A supported version policy will be stated here when one is decided.
