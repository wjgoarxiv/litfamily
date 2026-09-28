# Code and developer-writing patterns

Treat comments, docstrings, commit messages, pull requests, READMEs, and changelogs as prose. Treat executable structure as code review, not style cleanup. A shorter implementation is not automatically better.

## Safety boundary

Keep validation at untrusted input boundaries, checks that prevent corruption, error handling that preserves data, permission checks, accessibility behavior, cleanup on failure, and checks for real platform variation. Remove a branch only when the upstream type or contract guarantees the value. A detector warning is not static-analysis proof.

## CODE-01 | Comments that narrate the next line

- What / why: A comment repeats the operation without explaining why it exists.
- Detect: Compare the comment with the next statement. If the code fully answers it, remove the comment.
- False positives: Keep rationale, invariants, protocol notes, compatibility reasons, and surprising constraints.
- Evidence: weak as an authorship clue; useful as a maintenance check.

JavaScript / TypeScript:

~~~js
// Bad
// Increment the attempt counter.
attempt += 1;

// Better
attempt += 1;
~~~

~~~ts
// Bad
// Return the user name.
return user.name;

// Better
// Preserve the API's null result for deleted users.
return user.name ?? null;
~~~

Python:

~~~python
# Bad
# Add one to the retry count.
retries += 1

# Better
retries += 1
~~~

~~~python
# Bad
def load(path):
    """Load a file."""
    return path.read_text()

# Better
def load(path):
    """Read UTF-8 config text; callers validate its schema."""
    return path.read_text(encoding="utf-8")
~~~

Shell:

~~~sh
# Bad
# Create the output directory.
mkdir -p "$out_dir"

# Better
mkdir -p "$out_dir"
~~~

~~~sh
# Bad
# Run the migration.
./migrate.sh

# Better
# Keep the release lock until the migration exits.
./migrate.sh
~~~

## CODE-02 | Comments or docstrings that describe edit history

- What / why: A permanent comment explains what an earlier version did instead of the current behavior.
- Detect: Search for references to the edit itself or a previous implementation.
- False positives: Migration notes and changelogs are about change by design.
- Evidence: weak; location and purpose determine whether history belongs there.

~~~js
// Bad
// Replaced the old loop that scanned every record.
return recordsById.get(id);

// Better
// Map lookup stays constant-time as the record set grows.
return recordsById.get(id);
~~~

~~~python
# Bad
# This used to call the network twice before we changed it.
return cached_response

# Better
# Reuse the cached response so retries do not issue a second request.
return cached_response
~~~

## CODE-03 | Defensive checks that duplicate a proven contract

- What / why: A local branch repeats a type or invariant already guaranteed at that call site.
- Detect: Trace the value from input to this line. Check runtime boundaries, deserialization, plugin calls, and public APIs separately.
- False positives: Never remove input checks just because a type annotation exists if data can arrive from JSON, a user, disk, environment variables, a network, or another runtime.
- Evidence: weak; requires repository knowledge.

~~~ts
// Before: simplify only when the internal module contract guarantees a number.
function label(count: number): string {
  if (typeof count !== "number") throw new TypeError("count must be numeric");
  return String(count);
}

// After: valid only for an internal typed call site, not parsed or external input.
function label(count: number): string {
  return String(count);
}
~~~

~~~python
# Before: redundant only if an internal caller already validated this value.
def format_count(count: int) -> str:
    if not isinstance(count, int):
        raise TypeError("count must be an integer")
    return str(count)

# After: valid only inside that established boundary.
def format_count(count: int) -> str:
    return str(count)
~~~

Shell inputs usually cross a trust boundary. Keep validation:

~~~sh
# Preserve this guard for an environment-supplied path.
case "$target_dir" in
  ""|"/"|"$HOME") printf '%s\n' "unsafe target" >&2; exit 2 ;;
esac
rm -rf -- "$target_dir"
~~~

A shell guard is not redundant merely because the caller usually supplies a safe value. Remove only a check proven unreachable by an explicit internal invariant.

## CODE-04 | One-use pass-through wrappers

- What / why: A one-call helper adds a name but no behavior, contract, test seam, or reuse.
- Detect: Search for other call sites and inspect whether the helper expresses an important domain concept.
- False positives: Keep wrappers that enforce policy, isolate an external dependency, or give a stable test seam.
- Evidence: weak; repository architecture decides.

JavaScript / TypeScript:

~~~js
// Before
function getUser(id) {
  return database.getUser(id);
}
const user = getUser(id);

// After, when no policy or reuse exists
const user = database.getUser(id);
~~~

~~~ts
// Keep this wrapper: it enforces authorization before returning a profile.
async function getProfile(actor, id) {
  await requireAccess(actor, id);
  return profiles.get(id);
}
~~~

Python:

~~~python
# Before
def read_config(path):
    return Path(path).read_text()

config = read_config(path)

# After, when no contract or reuse exists
config = Path(path).read_text()
~~~

~~~python
# Keep this wrapper: it pins encoding and maps a missing file to a domain error.
def read_policy(path):
    try:
        return Path(path).read_text(encoding="utf-8")
    except FileNotFoundError as exc:
        raise PolicyMissing(path) from exc
~~~

Shell:

~~~sh
# Before
run_tests() {
  npm test
}
run_tests

# After, for one direct call with no options or contract
npm test
~~~

~~~sh
# Keep a helper that verifies the receipt before reporting success.
verify_receipt() {
  node scripts/verify-receipt.mjs "$1"
}
~~~

## CODE-05 | Speculative configuration

- What / why: A new option is added without a user, supported consumer, or defined behavior.
- Detect: Require a concrete call site, default, validation rule, and documentation for each option.
- False positives: Keep settings that already exist in the host contract or that the task explicitly requests.
- Evidence: weak; this is a scope-control review.

~~~ts
// Bad: imaginary option with no consumer
const config = { retryMode: "smart", fallbackRegion: "auto" };

// Better: expose only the supported retry value
const config = { retries: 2 };
~~~

~~~python
# Bad: accepted but never changes behavior
def connect(endpoint, experimental_pooling=False):
    return Client(endpoint)

# Better: remove the unused setting or implement its contract
def connect(endpoint):
    return Client(endpoint)
~~~

~~~sh
# Bad: undocumented environment knob with no reader
export LIT_AUTO_REPAIR_MODE=smart

# Better: remove it until a supported caller defines its meaning
node scripts/check.mjs
~~~

## CODE-06 | Over-broad exception handling

- What / why: A catch-all hides errors the code does not know how to recover from.
- Detect: List expected exceptions and the recovery action for each. Keep cleanup in finally blocks.
- False positives: A process boundary may need a broad handler that logs and exits; preserve it when it prevents partial state or gives a clear failure.
- Evidence: weak; behavior and data-safety determine the review.

~~~js
// Bad
try {
  await writeReceipt();
} catch {
  return "ok";
}

// Better: report write failure instead of inventing success
await writeReceipt();
return "ok";
~~~

~~~js
// Keep cleanup even when errors propagate.
try {
  await acquireLock();
  await updateIndex();
} finally {
  await releaseLock();
}
~~~

~~~python
# Bad
try:
    parse_manifest(path)
except Exception:
    return {}

# Better: recover only from the expected missing optional file
try:
    parse_manifest(path)
except FileNotFoundError:
    return {}
~~~

~~~sh
# Bad: masks the original command failure
command || true

# Better: propagate failure with context
command || { printf '%s\n' "migration failed" >&2; exit 1; }
~~~

## CODE-07 | Log spam and duplicate state reporting

- What / why: Adjacent logs repeat one success or expose details that do not help diagnose a failure.
- Detect: For each log, ask what action the operator can take from it and whether it contains secrets.
- False positives: Keep long-job progress, failure context, structured audit events, and privacy-safe status needed for support.
- Evidence: weak; operational context decides.

~~~js
// Bad
console.log("starting");
console.log("started");
console.log("complete");

// Better
console.log("Index rebuild complete");
~~~

~~~python
# Bad: prints the same safe status on every loop iteration
for _ in range(100):
    print("waiting")

# Better: report progress at a useful interval
for step in range(100):
    if step % 10 == 0:
        print(f"checked {step} items")
~~~

~~~sh
# Bad: dump an entire environment to debug one missing variable
env

# Better: report presence without exposing values
test -n "$API_ENDPOINT" || printf '%s\n' "API_ENDPOINT is unset" >&2
~~~

Never log credential values, private user data, or full configuration to reduce debugging effort.

## CODE-08 | Commit subjects and trailers

- What / why: A commit title should say what changed; generated-by trailers do not describe behavior and are forbidden by the family rule.
- Detect: Read the subject without the diff and confirm it names a concrete change.
- False positives: Keep conventional prefixes required by the repository; do not add model attribution.
- Evidence: block for generated attribution under the user's explicit writing policy; ordinary subject style is repository-specific.

~~~text
Bad: Update things and improve stability
Better: fix: preserve empty optional model fields
~~~

~~~text
Bad: Changes
Better: docs: explain the offline install path
~~~

~~~text
Bad trailer: Generated by an AI assistant
Better: No generated-by trailer; describe the change in the subject
~~~

## CODE-09 | Pull request descriptions that narrate effort

- What / why: A PR should explain behavior, reason, scope, and checks, not praise the author or repeat that work was done.
- Detect: Remove process claims and retain reproducible behavior plus actual evidence.
- False positives: Keep an explicit risk, migration step, or test limit.
- Evidence: weak for style; generated attribution remains prohibited.

~~~text
Bad: This exciting change thoughtfully improves the whole system.
Better: The installer now preserves an existing model route when updating the plugin.
~~~

~~~text
Bad: I carefully updated the files and checked everything.
Better: Changed the config parser and install probe. Tests: npm test. Manual probe: upgrading from schema 45 preserved the route.
~~~

Do not claim a check that did not run. If it failed, report the failure and its scope.

## CODE-10 | README instructions that hide prerequisites or limits

- What / why: Promotional lead-in delays the command or omits a real constraint.
- Detect: Check that a reader can identify prerequisites, command, expected result, and recovery path.
- False positives: Keep necessary security warnings and compatibility notes.
- Evidence: weak; a usability check, not a detector.

~~~md
Bad: This powerful tool makes setup seamless and easy for everyone.
Better: Install Node 20 or later, then run npm install.
~~~

~~~md
Bad: Start the server and use the package.
Better: Set LIT_ENDPOINT, run npm start, then open the local URL printed by the command. The server stores its cache in .litfamily/cache.
~~~

## CODE-11 | Changelog inflation or missing version facts

- What / why: A changelog announces significance instead of naming behavior, or leaves version and compatibility boundaries unclear.
- Detect: Verify release number, changed behavior, migration impact, and links against the actual release.
- False positives: Preserve the project's established format and user-facing rationale.
- Evidence: weak; facts and release convention matter.

~~~md
Bad: A groundbreaking update that transforms the experience.
Better: 1.4.0 — Keep the existing endpoint when applying an in-place update.
~~~

~~~md
Bad: Several fixes and improvements.
Better: 1.4.1 — Fix export when a filename contains a space.
~~~

## CODE-12 | Preserve API contracts when simplifying

- What / why: A rewrite can remove a guard or error path callers rely on even when the result looks shorter.
- Detect: Trace inputs, outputs, exceptions, file writes, and host compatibility before editing.
- False positives: Defer a style cleanup if the contract is unclear.
- Evidence: safety invariant rather than a writing-pattern score.

~~~ts
// Bad: a type assertion accepts untrusted JSON without checking its shape.
const data = JSON.parse(rawText) as Manifest;
~~~

~~~ts
// Better: validate the parsed value at the trust boundary.
const data = validateManifest(JSON.parse(rawText));
~~~

~~~python
# Bad: malformed data is treated like a missing optional file.
try:
    return parse_config(path)
except (FileNotFoundError, ValueError):
    return default_config
~~~

~~~python
# Better: default only when absent; let a corrupt file raise its parse error.
try:
    return parse_config(path)
except FileNotFoundError:
    return default_config
~~~

~~~sh
# Better: keep path validation before a destructive operation.
validate_target "$target_dir"
rm -rf -- "$target_dir"
~~~

## Quick review list

- Comments state why, what invariant, or which compatibility rule; they do not narrate the next obvious line.
- Docstrings describe public behavior, accepted inputs, errors, and side effects.
- Commit subjects identify one change. No generated-by trailers.
- PRs state behavior, scope, actual checks, and unresolved risks.
- READMEs put prerequisites and working commands before generic claims.
- Changelogs name the version and user-visible change.
- Code simplification preserves trust boundaries, data safety, errors, and platform checks.
- For JS/TS, Python, and shell, check that static types and runtime input guarantees agree before removing a guard.
