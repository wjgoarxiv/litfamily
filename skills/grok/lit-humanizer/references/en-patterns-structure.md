# English patterns: structure, formatting, and source use

These entries combine formatting and communication observations from HumanInk, humanizer, stop-slop, no-ai-slop, and Wikipedia’s field guide. A pattern is a reason to inspect a passage, not a reason to normalize every document.

## EN-S01 | Negative-then-positive contrast
- Overlap: HumanInk #9 (weight 6); humanizer 1; stop-slop binary contrast; Wikipedia negative parallelism.
- What / why: A sentence creates an opponent or weak view, then announces the writer’s positive claim.
- Detect: Look for paired negatives and positives; the current detector warns only for a sentence-opening contrast or two occurrences in a document.
- Bad → better:
> Bad: The issue is not the server, but the cache key.
> Better: The cache key causes the issue.
> Bad: This is not merely a form change; it is a new review process.
> Better: The form change also adds a review step.
- False positives: Keep the contrast when it corrects a claim the reader actually holds or when both halves add facts.
- Evidence: weak; structure alone is not authorship evidence.

## EN-S02 | Forced three-part list
- Overlap: HumanInk #10 (5); humanizer 6; stop-slop rhythm check; Wikipedia rule-of-three category.
- What / why: Related ideas are forced into a triad for a feeling of completeness.
- Detect: Check whether all three members are distinct and needed.
- Bad → better:
> Bad: The meeting covered speed, quality, and excellence.
> Better: The meeting covered speed and output quality.
> Bad: The town needs innovation, inspiration, and investment.
> Better: The town needs investment for the two planned repairs.
- False positives: Keep three true alternatives, stages, or measurable dimensions.
- Evidence: weak; lists of three are ordinary writing.

## EN-S03 | Repeated sentence opening
- Overlap: humanizer 7; stop-slop rhythm check.
- What / why: Several neighboring sentences begin with the same subject or phrase without a rhetorical reason.
- Detect: Compare sentence starts across a paragraph.
- Bad → better:
> Bad: The clerk checked the form. The clerk called the applicant. The clerk closed the case.
> Better: The clerk checked the form, called the applicant, then closed the case.
> Bad: It stores the key. It renews the key. It removes the key.
> Better: It stores and renews the key, then removes it.
- False positives: Keep an intentional refrain or legal sequence that relies on repeated wording.
- Evidence: weak; repetition can be a deliberate voice choice.

## EN-S04 | Staged question or false alternative
- Overlap: humanizer 4–5; stop-slop rhetorical setup; HumanInk #21 (weight 9) for praise framing.
- What / why: A question, confession, or rejected option announces an insight without adding support.
- Detect: Ask whether the following sentence answers an objection that appears nowhere else.
- Bad → better:
> Bad: Have you ever wondered why the printer stops? The paper sensor is dirty.
> Better: A dirty paper sensor stops the printer.
> Bad: You might think the team needs another server, but the query is unindexed.
> Better: The query lacks an index.
- False positives: Keep a real interview question or a concern that the draft explicitly answers.
- Evidence: weak; the exact setup can be effective in essays and conversation.

## EN-S05 | Dramatic fragments and negative listing
- Overlap: stop-slop structures; humanizer 2 and 5.
- What / why: Short fragments build drama before stating one ordinary point.
- Detect: Look for a row of fragments that can be stated as a complete claim.
- Bad → better:
> Bad: No handoff. No owner. No plan. Just a missed deadline.
> Better: Nobody owned the handoff, so the deadline passed without a plan.
> Bad: The button moved. Then the icon. Then the label.
> Better: The redesign moved the button, icon, and label.
- False positives: Preserve fragments in dialogue, poetry, or a voice that uses them intentionally.
- Evidence: weak; cadence and genre matter.

## EN-S06 | Colon reveal or announced takeaway
- Overlap: humanizer 4; HumanInk #15 (6) for label lists; no-ai-slop colon check.
- What / why: A short headline announces a routine fact as a reveal.
- Detect: Inspect a colon whose text after it is one plain sentence.
- Bad → better:
> Bad: Key takeaway: the review took two days.
> Better: The review took two days.
> Bad: The surprise: both files were already present.
> Better: Both files were already present.
- False positives: Keep colons for lists, quotes, definitions, and real section labels.
- Evidence: weak; a local editing cue.

## EN-S07 | Transition-word chain
- Overlap: HumanInk #27 (5); stop-slop transition guidance; Wikipedia signposting.
- What / why: Repeated connectors announce every paragraph’s relation, even when the relation is obvious or absent.
- Detect: Count repeated transitions in one section and check the logic each one expresses.
- Bad → better:
> Bad: Meanwhile, the clinic closed. On the other hand, the bus ran. That said, the road remained open.
> Better: The clinic closed, but the bus kept running while the road stayed open.
> Bad: Also, the launch moved. Moreover, the build took longer.
> Better: The launch moved because the build took longer.
- False positives: Keep a transition that clarifies a genuine contrast or consequence.
- Evidence: weak; the source’s own threshold is a frequency check, not a block rule.

## EN-S08 | Repeated one-line closer
- Overlap: HumanInk #28 (7); humanizer 2 and 13; no-ai-slop ending review.
- What / why: A final one-sentence paragraph repeats the point or adds a generic slogan.
- Detect: Compare it with the immediately preceding paragraph and the opening.
- Bad → better:
> Bad: The cache cut repeat work. That is the real win.
> Better: The cache cut repeat work.
> Bad: The team shipped the fix Friday. The future is bright.
> Better: The team shipped the fix Friday.
- False positives: Keep a one-line ending that adds an action, date, or distinct conclusion.
- Evidence: weak; a paragraph’s last line can carry deliberate emphasis.

## EN-S09 | Uniform paragraph lengths
- Overlap: HumanInk #29 (6); stop-slop rhythm checks.
- What / why: Several paragraphs have the same sentence count and length despite changing subject.
- Detect: A rough metric can flag four or more similarly sized prose paragraphs; review the content before editing.
- Bad → better:
> Bad: Four report sections each use three sentences of similar length.
> Better: Let the one-sentence result stand alone and keep the methods section at its needed length.
> Bad: Every chapter paragraph ends with a short summary line.
> Better: Keep summary lines only where they help navigation.
- False positives: Templates and manuals may need regular paragraph shapes.
- Evidence: weak; uniformity is not proof and can aid scanning.

## EN-S10 | Bold-label vertical list
- Overlap: HumanInk #15 (6); humanizer 19; Wikipedia inline-header lists.
- What / why: Each bullet repeats a bold category label and then explains it.
- Detect: Scan for several consecutive bullets with the same label-and-colon structure.
- Bad → better:
> Bad: - Speed: The query is faster. - Safety: The gate is safer.
> Better: The query is faster, and the gate rejects unsigned input.
> Bad: - Owner: Mira reviews. - Date: Friday is due.
> Better: Mira will finish the review by Friday.
- False positives: Keep labels in dashboards, forms, slides, and reference lists.
- Evidence: weak; formatting depends on the reader’s scanning task.

## EN-S11 | Bullets replacing connected prose
- Overlap: HumanInk #34 (5); humanizer 19; Wikipedia list-format observations.
- What / why: A paragraph becomes a long list even though the items form one sentence or cause chain.
- Detect: Ask whether items are independent and whether the list materially improves scanning.
- Bad → better:
> Bad: - The server restarted. - The queue cleared. - The alert stopped.
> Better: The server restarted, which cleared the queue and stopped the alert.
> Bad: - Rain began. - The field closed. - The match moved indoors.
> Better: Rain forced the match indoors after the field closed.
- False positives: Keep checklists, requirements, decisions, and true enumerations.
- Evidence: weak; many professional genres rely on lists.

## EN-S12 | Numbered steps for a simple sequence
- Overlap: HumanInk #35 (5); humanizer layout categories.
- What / why: A short procedure receives numbered packaging that implies complex stages.
- Detect: Ask if sequence, prerequisites, or cross-reference require numbers.
- Bad → better:
> Bad: 1. Open the lid. 2. Pour the water. 3. Close the lid.
> Better: Open the lid, pour the water, then close it.
> Bad: Step 1: Save the file. Step 2: Open the folder.
> Better: Save the file and open the folder.
- False positives: Keep numbered steps when order is consequential or users need to cite a step.
- Evidence: weak; procedure shape is task-dependent.

## EN-S13 | Heading repeats title or body
- Overlap: humanizer 20 and 24; Wikipedia heading and title categories.
- What / why: A page title is repeated as an H1, or a heading is followed by a sentence that restates it.
- Detect: Compare title, first heading, and first sentence for duplicate content.
- Bad → better:
> Bad: # Performance / Performance matters.
> Better: # Performance / The page opens in 400 ms on the test device.
> Bad: ## Results / The results were positive.
> Better: ## Results / The error rate fell from 7% to 4%.
- False positives: Some site templates require an H1 that matches the page title.
- Evidence: weak; format and platform conventions decide.

## EN-S14 | Title Case or heading-level decoration
- Overlap: HumanInk #16 (4); Wikipedia title case, skipped levels, many top-level headings, and thematic breaks.
- What / why: Headings capitalize every word, jump levels, or use repeated rules as decoration.
- Detect: Follow the document or platform style guide; inspect hierarchy before changing case.
- Bad → better:
> Bad: ## Results From The Winter Trial
> Better: ## Results from the winter trial
> Bad: # Main / #### Detail / --------
> Better: # Main / ## Detail
- False positives: Keep proper names, publication styles, and headings required by an editor.
- Evidence: hold as an authorship clue; it is ordinary style and platform variation.

## EN-S15 | Bold used as decoration
- Overlap: HumanInk #14 (4); humanizer 19; Wikipedia boldface category.
- What / why: Many phrases are bolded, so emphasis loses contrast.
- Detect: Review bold density in body text, not navigation labels.
- Bad → better:
> Bad: The **new** form **replaces** the **old** form **on Friday**.
> Better: The new form replaces the old form on Friday.
> Bad: The plan uses **three** separate **review** stages.
> Better: The plan uses three separate review stages.
- False positives: Keep emphasis that helps navigation or accessibility.
- Evidence: hold as authorship evidence; the source severity is low and formatting varies by product.

## EN-S16 | Emoji as professional formatting
- Overlap: HumanInk #17 (5); Wikipedia emoji formatting.
- What / why: Decorative symbols replace a clear heading or sentence.
- Detect: Contextual review; do not remove icons that encode status consistently.
- Bad → better:
> Bad: 🚀 Launch: The service opens in Q3.
> Better: The service opens in Q3.
> Bad: ✅ Result: All 14 checks passed.
> Better: All 14 checks passed.
- False positives: Social posts, informal chat, and accessible status legends may use emoji deliberately.
- Evidence: hold as a general signal; conventions differ.

## EN-S17 | Em dash as a default connector
- Overlap: HumanInk #13 (5); humanizer 8; Wikipedia em-dash category; stop-slop punctuation rule.
- What / why: Dashes repeatedly bridge clauses without specifying their relationship.
- Detect: Count clusters and compare with the writer’s sample and publication style.
- Bad → better:
> Bad: The build—after review—shipped—the same day—on Friday.
> Better: The build shipped Friday after review.
> Bad: The test—once restarted—passed—the second time.
> Better: After a restart, the test passed on its second run.
- False positives: A single dash can be natural; some writers use them as a signature.
- Evidence: hold as a single-instance indicator; only a repeated cluster merits review.

## EN-S18 | Hyphenated compound overuse
- Overlap: humanizer 10; no-ai-slop hyphen check.
- What / why: Compounds are hyphenated in positions where the house style uses open forms.
- Detect: Compare attributive and predicative uses against the publication style guide.
- Bad → better:
> Bad: The report is high-quality and data-driven.
> Better: The report is high quality and driven by the data.
> Bad: The interface is user-friendly after launch.
> Better: The interface is easy to use after launch.
- False positives: Hyphens are often correct before a noun and in established terms.
- Evidence: hold as authorship evidence; orthography varies.

## EN-S19 | Parentheses and tables used as a holding bin
- Overlap: Wikipedia unusual-table notes; humanizer format rules; stop-slop trust-the-reader principle.
- What / why: Parentheses or dense tables collect details that the sentence or a note could state more clearly.
- Detect: Ask whether each aside changes the main claim and whether a table has real comparison columns.
- Bad → better:
> Bad: The router (after restart) (following an alert) accepted the key.
> Better: After the alert, the router accepted the key when it restarted.
> Bad: A two-column table repeats each paragraph in shorter form.
> Better: Keep the paragraph and use a table only for the actual comparison.
- False positives: Preserve technical notes, citations, cross-reference tables, and parenthetical author voice.
- Evidence: weak; layout purpose determines clarity.

## EN-S20 | Broken or unexplained markup
- Overlap: Wikipedia markup and template categories; humanizer 25; detector-research synthesis.
- What / why: Leftover editor markup, malformed references, or tool tokens appear in prose.
- Detect: Validate links, brackets, code spans, citation tokens, and rendering in the target host.
- Bad → better:
> Bad: The result{{ref?}} appears in [section 3.
> Better: The result appears in section 3, with a valid citation.
> Bad: The source marker is followed by an unexplained internal cite token.
> Better: Replace it with the actual reference or remove it if no source exists.
- False positives: Code examples and quoted markup are data, not prose defects.
- Evidence: validated for a broken artifact that fails to render; it does not identify who wrote it.

## EN-S21 | Citation integrity problems
- Overlap: Wikipedia citation categories: broken links, invalid identifiers, unrelated references, incomplete book details, unused references, tracking parameters.
- What / why: A citation may fail to support the claim even when its syntax looks plausible.
- Detect: Resolve each link or identifier; check the cited page and the claim it supports.
- Bad → better:
> Bad: A report cites a dead URL with no archived copy.
> Better: Replace the link with a working primary source, or state that support is unavailable.
> Bad: A DOI opens a paper about a different method.
> Better: Cite the paper that contains the stated method.
- False positives: A broken link can have a human cause. Repair evidence instead of labeling authorship.
- Evidence: validated as a reference-quality check, not a prose-origin signal.

## EN-S22 | Placeholder text and pseudo-citations
- Overlap: Wikipedia phrasal templates, placeholder text and reference-markup issues; HumanInk #20.
- What / why: Draft notes or source-shaped placeholders remain where a real citation should be.
- Detect: Search for empty names, template markers, or citations that do not resolve to an item.
- Bad → better:
> Bad: The population rose, according to [source needed].
> Better: Add the source that measured the population or remove the unsupported claim.
> Bad: The report cites an unnamed “recent survey.”
> Better: Name the survey and its date if supplied; otherwise call the statement unverified.
- False positives: A visible TODO is appropriate in a draft handed to an editor.
- Evidence: weak for authorship, strong as a completion check.

## EN-S23 | Process-heavy edit narration
- Overlap: Wikipedia edit-summary categories; humanizer 25; local workflow-jargon cues.
- What / why: The artifact narrates that it preserved, retained, or carefully complied instead of stating the revised content.
- Detect: Ask whether the sentence describes the subject or the editing process.
- Bad → better:
> Bad: I preserved all relevant citations and fixed the formatting.
> Better: The report cites the survey in note 4 and uses one heading style.
> Bad: The change was made in order to retain the original behavior.
> Better: The change keeps the original behavior.
- False positives: Change logs, review notes, and audit records need process narration.
- Evidence: weak in internal records; strong as leftover text in a standalone deliverable.

## EN-S24 | Abrupt style shift
- Overlap: Wikipedia pronounced-style-shift category; humanizer voice-preservation section.
- What / why: One section differs sharply in tone, sentence structure, or vocabulary from its neighbors.
- Detect: Compare adjacent sections and the author’s supplied samples; do not use a detector score.
- Bad → better:
> Bad: A plain report switches to a promotional paragraph midway through.
> Better: Keep the stated facts and return to the report’s established register.
> Bad: A first-person essay suddenly uses a formal generic biography voice.
> Better: Preserve the author’s original point of view throughout.
- False positives: A quoted passage, change in audience, or authored section boundary may explain the shift.
- Evidence: weak; verify provenance and keep distinct voices intact.

## EN-S25 | Internal citation or editor marker in published prose
- Overlap: Wikipedia tool-specific citation residue and comment indicators; source-synthesis workflow keys.
- What / why: A model or editing interface marker appears as if it were a reader-facing citation.
- Detect: Review rendered output and link target, not just the text source.
- Bad → better:
> Bad: The sentence ends with an unexplained internal search-result token.
> Better: Replace the token with a checked citation or remove it.
> Bad: A comment includes a tool command as its only source.
> Better: Link to the document or explain the source in ordinary prose.
- False positives: An article explaining markup may quote these markers as examples.
- Evidence: validated as publication cleanup; never infer authorship from the marker alone.

## EN-S26 | Chat residue and reflexive agreement
- Overlap: HumanInk #19 (weight 10), #21 (9), #33 (8); humanizer chatbot residue; no-ai-slop conversation residue.
- What / why: A pasted greeting, praise, agreement, or invitation speaks to a chat user instead of advancing the document.
- Detect: Check opening and final lines for service phrases, then remove them only when they are not part of a quoted exchange.
- Bad → better:
> Bad: Great question! The permit portal closes at 4 p.m.
> Better: The permit portal closes at 4 p.m.
> Bad: The new form has four sections. Let me know if you'd like me to explain them.
> Better: The new form has four sections: contact, dates, eligibility, and signature.
- False positives: Keep actual interview dialogue, user-facing service copy, or a requested conversational reply.
- Evidence: validated for identifying pasted response residue; the phrase does not establish the origin of surrounding prose.

## EN-S27 | Context-free modern-world opener
- Overlap: HumanInk #25 (weight 8), #7 (9); Wikipedia generalization and significance categories.
- What / why: A broad claim about the modern era delays the topic without giving a date, location, or change.
- Detect: Search opening clauses for claims about today's world, changing conditions, or a new era; retain only a sourced time frame.
- Bad → better:
> Bad: In today's world, clinics need reliable appointment systems.
> Better: Clinics need reliable appointment systems.
> Bad: As we navigate an increasingly connected era, residents file forms online.
> Better: Residents file the forms online.
- False positives: Keep a dated historical comparison or a specifically sourced change over time.
- Evidence: weak; the phrase family is a searchable editorial clue, not a universal marker.

## EN-S28 | Passive voice
- Overlap: stop-slop passive-voice structure; Wikipedia communication and source-attribution checks.
- What / why: A passive can hide an actor who matters to the reader.
- Detect: Ask whether the source names the actor and whether naming them improves the sentence. Do not infer an actor.
- Bad → better:
> Bad: The request was approved on Tuesday.
> Better: The review board approved the request on Tuesday, if the source identifies it as the board's decision.
> Bad: The notice was sent by the clinic on Monday.
> Better: The clinic sent the notice on Monday.
- False positives: Keep passive voice when the actor is unknown, irrelevant, protected, or intentionally omitted.
- Evidence: weak; grammar is not an authorship signal. Attribution accuracy is the reason to review.

## EN-S29 | Quote-style normalization
- Overlap: HumanInk #18 (weight 3); document-specific typography conventions.
- What / why: Straight and curly quotation marks are mixed without a house-style reason.
- Detect: Compare the document with its style guide; do not scan quote glyphs as a universal defect.
- Bad → better:
> Bad: The notice calls the event “optional” and later says it is "required."
> Better: The notice calls the event "optional" and later says it is "required." (when the guide specifies straight quotes)
> Bad: The guide defines 'active status' as the current subscription state, then uses “active status” for the same term.
> Better: The guide uses “active status” consistently for the subscription state. (when the guide specifies curly quotes)
- False positives: Preserve exact source quotations when changing punctuation would violate a citation, transcript, legal, or archival requirement.
- Evidence: hold; typography follows the publication's style guide and carries no authorship weight.

## EN-S30 | False agency in objects and abstractions
- Overlap: stop-slop false-agency structure; Wikipedia communication observations; humanizer active-voice guidance.
- What / why: A document, dataset, rule, or abstract noun appears to decide or act when a person or system performed the action.
- Detect: Find the verb's real actor in the supplied material. If the actor is unavailable, keep the original scope without inventing one.
- Bad → better:
> Bad: The dataset tells us that families prefer June.
> Better: In the survey, 18 of 25 families chose June.
> Bad: The complaint became a repair plan.
> Better: The facilities team used the complaint to write a repair plan.
- False positives: Conventional subjects such as “the report states” or “the system rejects” are clear when they name a real source or function.
- Evidence: weak; check agency for clarity and attribution, not as a detector of authorship.

## EN-S31 | Distant narrator and rhetorical setup
- Overlap: stop-slop narrator-distance and sentence-starter checks; humanizer guidance on direct openings.
- What / why: A sentence tells readers that an explanation is coming instead of stating it.
- Detect: Remove the introductory question or announcement temporarily. Keep it only if it changes the reader's understanding.
- Bad → better:
> Bad: This is why the callback takes five seconds.
> Better: The callback takes five seconds because the client reuses its token.
> Bad: Nobody designed the paper form to be clear.
> Better: The paper form puts the signature field below the fold.
- False positives: Keep a genuine question, scene-setting voice, or attributed personal observation.
- Evidence: weak; a direct start is often clearer, while narrative voice remains a valid choice.
