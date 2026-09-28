# English pattern catalog

Use this index to select the smallest reference shard that fits the draft. The shards merge overlapping pattern families from humanizer, HumanInk, no-ai-slop, stop-slop, and Wikipedia’s “Signs of AI writing” field guide. They are rewritten as editing guidance, not copied prompts.

- Content, wording, claims: references/en-patterns-content.md
- Structure, formatting, markup, source use, chat residue, passive voice, and quote style: references/en-patterns-structure.md
- Editing rubric and checklist adapted from no-ai-slop eval and stop-slop: references/en-patterns-checklist.md
- Code and developer prose: references/code-patterns.md
- Detector rules: ../rules.json

## HumanInk severity crosswalk

Weights below preserve all 35 numeric severities from the pinned HumanInk catalog. A severity is a source-side editorial weight, not a calibrated authorship probability. When families merge, the shard names each contributing HumanInk ID and weight. Do not add these weights into a “probability” score.

| ID | Weight | ID | Weight | ID | Weight | ID | Weight | ID | Weight |
|---|---:|---|---:|---|---:|---|---:|---|---:|
| 1 | 9 | 8 | 7 | 15 | 6 | 22 | 6 | 29 | 6 |
| 2 | 7 | 9 | 6 | 16 | 4 | 23 | 7 | 30 | 7 |
| 3 | 8 | 10 | 5 | 17 | 5 | 24 | 8 | 31 | 6 |
| 4 | 8 | 11 | 6 | 18 | 3 | 25 | 8 | 32 | 5 |
| 5 | 7 | 12 | 5 | 19 | 10 | 26 | 6 | 33 | 8 |
| 6 | 6 | 13 | 5 | 20 | 8 | 27 | 5 | 34 | 5 |
| 7 | 9 | 14 | 4 | 21 | 9 | 28 | 7 | 35 | 5 |

## Overlap map

| Combined family | Contributing source patterns |
|---|---|
| Significance, praise, promotional language, empty importance adjectives | HumanInk 1, 4, 32; humanizer 13, 16; no-ai-slop puffery; Wikipedia content categories on significance and promotion |
| Borrowed authority and notability padding | HumanInk 2, 5; humanizer 17; Wikipedia coverage and vague attribution |
| Shallow analysis attached to a fact | HumanInk 3; humanizer 15; stop-slop emphasis on unsupported interpretation |
| Stock vocabulary, filler, and throat clearing | HumanInk 7, 22, 30; humanizer 4, 12; no-ai-slop word checklist; stop-slop phrase list |
| Generic contrast, false range, or dead metaphor | HumanInk 9, 12, 26; humanizer 1, 3; stop-slop structures |
| Repeated triads, transitions, and synonyms | HumanInk 10, 11, 27; humanizer 6, 7; stop-slop rhythm rules |
| Weak source, cutoff, and speculative-gap language | HumanInk 20; humanizer 23; Wikipedia communication categories |
| Generic conclusion or mirrored opening | HumanInk 6, 24, 28; humanizer 2, 13; no-ai-slop ending checks |
| Decoration and list templates | HumanInk 14, 15, 16, 17, 18, 34, 35; humanizer 19–21; Wikipedia style categories |
| Chat residue and sycophancy | HumanInk 19, 21, 33; humanizer 4, 22; no-ai-slop conversational residue check |
| Paragraph and document rhythm | HumanInk 29, 31; humanizer 2, 6, 7; stop-slop rhythm rubric |
| Announced points, emphasis, and broad modifiers | HumanInk 22, 30; no-ai-slop phrase checks; stop-slop filler and absolute-word checks |
| Hidden actors and narrator distance | stop-slop passive, false-agency, and narrator structures; humanizer voice guidance; Wikipedia source attribution |

## Wikipedia field-guide scope

The linked field guide also discusses encyclopedic markup, citation integrity, edit summaries, and comment patterns. This port includes the parts that transfer to reports and developer writing: source verification, leftover interface markup, edit narration, formatting residue, and abrupt style shifts. Wikipedia-only rules about categories, templates, policy adherence, or article deletion are not applied as general prose rules.

The field guide itself cautions that its indicators are context-dependent observations, not rules or proof of authorship. Read its “Ineffective indicators” and “Signs of human writing” material as false-positive safeguards. Older text, an em dash, a single word choice, or a clean detector result cannot establish who wrote a passage.

The source page is [Wikipedia, “Signs of AI writing”](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), an advice page maintained by WikiProject AI Cleanup. The topic headings are paraphrased in the catalog; examples are newly written. The upstream page was accessed 2026-09-25 and noted itself as needing updates on some current-model details.

## Evidence labels

- validated: an exact communication artifact or a source-reported comparison supports a narrow action, such as removing a pasted greeting or checking an invalid citation.
- weak: the source supplies an editorial observation, severity weight, or heuristic, but not broad evidence that the form identifies generated text.
- hold: preserve the form by default or require more context before editing; it is a style choice, convention, or known weak indicator.

The evidence label is for editorial confidence, not authorship. All lexical lists are search aids. Every entry explains the clue, reason, detection hint, two bad-to-better pairs, and false-positive conditions.
