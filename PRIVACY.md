# Privacy and network use

The checked-in hub has no telemetry service, account system, background updater or runtime dependency on the five products. Its local verification commands read repository files and print results. CI is a separate GitHub service.

Opening external links sends a request to the linked service. A marketplace installation fetches its declared source and then uses that product's code. The third-party `skills` CLI may make its own network requests and has its own telemetry policy. Its documented `DISABLE_TELEMETRY=1` or `DO_NOT_TRACK=1` environment options disable its telemetry; these are user-selected settings, not a change made by installing this hub.

Product installers and update checks can contact package registries or other services. Read the selected product's privacy and permission documentation; this hub makes no blanket claim that a product operates without networking. Host providers also have their own data-use rules.

Keep prompts, private repositories, credentials and unredacted logs out of public reports. The skill inventory stores product paths, public destination identities and content hashes, not user session data or local absolute workspace paths.
