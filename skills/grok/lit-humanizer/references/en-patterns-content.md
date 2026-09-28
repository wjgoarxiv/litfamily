# English patterns: content and wording

These patterns combine overlapping observations from the five read-only sources. They are review cues for a local edit, not proof that a person used a model.

## EN-C01 | Significance inflation
- Overlap: HumanInk #1 (weight 9); humanizer 13; Wikipedia content section on significance and legacy.
- What / why: A modest event receives a sweeping historical or social claim without supporting evidence. The extra claim can outgrow the fact.
- Detect: Search for importance verbs and broad consequence claims, then ask which source supports each clause.
- Bad → better:
> Bad: The office opened in 1989, marking a pivotal moment in regional statistics.
> Better: The office opened in 1989.
> Bad: The new form represents a historic shift for the department.
> Better: The department replaced its paper form with an online form.
- False positives: Keep importance when the source attributes it or a concrete measure supports it.
- Evidence: weak as authorship evidence; strong as an editing check when the claim adds unsupported interpretation.

## EN-C02 | Coverage and notability padding
- Overlap: HumanInk #2 (7); Wikipedia coverage and notability category.
- What / why: Several outlets or followers are listed as a substitute for what a source actually said.
- Detect: Look for an outlet list without a claim, date, or context.
- Bad → better:
> Bad: Her work appeared in North Star, City Journal, and four national outlets.
> Better: In a 2024 North Star interview, she argued for later school start times.
> Bad: The group has 80,000 followers and broad online recognition.
> Better: The group had 80,000 followers in its December 2024 profile.
- False positives: A source list belongs in a bibliography; do not infer what coverage proves.
- Evidence: weak; the source category is context-sensitive and does not make ordinary press coverage suspicious.

## EN-C03 | Superficial analysis rider
- Overlap: HumanInk #3 (8); humanizer 15; Wikipedia superficial-analysis category.
- What / why: A trailing participle claims that a fact is said to represent a larger meaning without evidence.
- Detect: Inspect “-ing” clauses attached after a complete factual sentence.
- Bad → better:
> Bad: The gate opened at 6 p.m., highlighting the site’s commitment to access.
> Better: The gate opened at 6 p.m.
> Bad: The colors are blue and gold, symbolizing the region’s history.
> Better: The design uses blue and gold to refer to the region’s history.
- False positives: Keep the interpretation if a named source makes it and the wording represents that source accurately.
- Evidence: weak; a recognizable style cue, not proof of unsupported intent.

## EN-C04 | Promotional wording
- Overlap: HumanInk #4 (8); humanizer 16; Wikipedia promotional-language category; no-ai-slop puffery checks.
- What / why: A neutral description takes on brochure language: vivid praise, prestige, or excitement.
- Detect: Search for clusters of praise words, then replace them with the thing’s location, feature, or action.
- Bad → better:
> Bad: Ridgefield is a breathtaking town nestled in a vibrant valley.
> Better: Ridgefield is a town in the valley.
> Bad: The groundbreaking service offers an exceptional booking experience.
> Better: The service lets customers book a time online.
- False positives: Keep quoted advertising language or an attributed review; marketing copy may require an approved brand voice.
- Evidence: weak as an authorship clue; useful as a check for unsupported interpretation.

## EN-C05 | Vague authority
- Overlap: HumanInk #5 (7); humanizer 17; Wikipedia vague-attribution category.
- What / why: A claim borrows authority from unnamed experts or reports.
- Detect: Search for plural authorities with no source or named speaker.
- Bad → better:
> Bad: Experts expect the river level to rise.
> Better: The forecast expects the river level to rise; cite the agency and date if supplied.
> Bad: Some analysts say hiring will slow.
> Better: The draft provides no named analyst for this claim; label it as an estimate or remove it.
- False positives: A named source may be in the nearby sentence; do not invent a publication.
- Evidence: weak; a source-quality concern, not a reliable authorship cue.

## EN-C06 | Stock challenges and outlook paragraph
- Overlap: HumanInk #6 (6), #24 (8), #28 (7); humanizer 13; Wikipedia challenge/future and recognition headings.
- What / why: A generic obstacle paragraph and upbeat ending fill the expected outline without adding a specific problem or plan.
- Detect: Check whether each challenge and future claim has a concrete example, owner, date, or source.
- Bad → better:
> Bad: The district faces common urban challenges but remains poised for growth.
> Better: The draft names traffic and water supply as open issues; remove the generic growth sentence.
> Bad: The future looks bright as the company continues its journey.
> Better: The company plans to open two locations next year.
- False positives: Keep an actual risk section, attributed forecast, or documented award.
- Evidence: weak; useful editorial test, not a universal pattern.

## EN-C07 | Broad AI-associated vocabulary
- Overlap: HumanInk #7 (9); humanizer 12; no-ai-slop vocabulary list; Wikipedia language section.
- What / why: Dense clusters of high-register verbs and abstract nouns can make a passage sound generic.
- Detect: Lexical search followed by a meaning check; one occurrence is not enough.
- Bad → better:
> Bad: The plan leverages a robust framework to streamline the landscape.
> Better: The plan uses one shared checklist to shorten review.
> Bad: The report delves into the intricate interplay of four programs.
> Better: The report compares how the four programs divide referrals.
- False positives: Keep technical uses and a writer’s own preferred vocabulary.
- Evidence: weak; source lists differ by genre, time, and model.

## EN-C08 | Avoidance of simple copulas
- Overlap: HumanInk #8 (7); humanizer 18; Wikipedia basic-copulative category.
- What / why: Short verbs such as “is” and “has” are replaced with longer phrases.
- Detect: Heuristic; test whether the subject simply is, has, or does something.
- Bad → better:
> Bad: Gallery 825 serves as the local exhibition space.
> Better: Gallery 825 is the local exhibition space.
> Bad: The folder features three sample files.
> Better: The folder has three sample files.
- False positives: A longer verb is right when it names a distinct action.
- Evidence: weak; avoid turning a word preference into a ban.

## EN-C09 | Vague relation word
- Overlap: HumanInk #5 (7); Wikipedia connection/association category; humanizer 14.
- What / why: The text says two items are connected but does not explain the relation.
- Detect: Find a broad association phrase and check if the source names the actual relationship.
- Bad → better:
> Bad: Lee is associated with the Harbor Ensemble.
> Better: Lee founded and conducts the Harbor Ensemble, if those facts appear in the source.
> Bad: The meeting was connected to the anniversary.
> Better: The meeting was part of the anniversary program.
- False positives: Preserve a deliberately broad relation when the source gives no more precise one.
- Evidence: weak; clarify only from supplied facts.

## EN-C10 | Throat-clearing and filler
- Overlap: HumanInk #22 (6), #30 (7); humanizer 4, 12; no-ai-slop list; stop-slop phrases.
- What / why: An announcement delays the point or lengthens a simple relation.
- Detect: Search for prefaces that can be deleted without losing content.
- Bad → better:
> Bad: It is worth noting that the sample has 42 rows.
> Better: The sample has 42 rows.
> Bad: Due to the fact that rain continued, the event was delayed.
> Better: The event was delayed because rain continued.
- False positives: Keep conversational language that contributes to a writer’s recognizable voice.
- Evidence: validated only for the exact pasted service or filler residue; weak for general word lists.

## EN-C11 | Empty conclusion
- Overlap: HumanInk #24 (8), #28 (7); humanizer 2, 13; no-ai-slop ending review.
- What / why: The close praises progress or restates the opening instead of leaving a new fact, choice, or action.
- Detect: Compare the last paragraph with the lead and the body’s final concrete point.
- Bad → better:
> Bad: The project made strong progress, and exciting times lie ahead.
> Better: The project will open its second location in October.
> Bad: As shown above, the clinic serves more patients now.
> Better: The clinic added 14 appointments a day.
- False positives: Keep a conclusion required by the format when it adds an actual decision or implication.
- Evidence: weak; comparison helps editing, not authorship attribution.

## EN-C12 | False range or synonym cycling
- Overlap: HumanInk #11 (6), #12 (5); humanizer 7; no-ai-slop repetition check.
- What / why: Near-synonyms rotate to avoid repetition, or unrelated endpoints are presented as a scale.
- Detect: Track repeated referents and ask whether the endpoints belong to one measurable continuum.
- Bad → better:
> Bad: The protagonist meets obstacles, challenges, and barriers before the hero returns.
> Better: The protagonist faces several obstacles and then returns.
> Bad: The course ranges from the first star to the farthest galaxy.
> Better: The course covers stars and distant galaxies.
- False positives: Keep different technical terms when they refer to different entities.
- Evidence: weak; ordinary variation is not itself an issue.

## EN-C13 | Rubber-stamp adjectives
- Overlap: HumanInk #32 (5); no-ai-slop importance check.
- What / why: General adjectives such as remarkable or substantial claim magnitude without a comparison.
- Detect: Ask “how much, relative to what, or according to whom?”
- Bad → better:
> Bad: The company made substantial progress.
> Better: The company shipped three of its four planned features.
> Bad: The review found a remarkable improvement.
> Better: The error rate fell from 7% to 4%.
- False positives: Keep an attributed evaluation or a defined threshold.
- Evidence: weak; the source itself says context determines whether a modifier carries information.

## EN-C14 | Stacked hedging
- Overlap: HumanInk #23 (7); no-ai-slop qualifier check; humanizer 9.
- What / why: Several qualifiers signal one uncertain claim and make its scope hard to read.
- Detect: Identify every qualifier and retain those with a distinct evidential role.
- Bad → better:
> Bad: It could possibly maybe affect the next release.
> Better: It may affect the next release.
> Bad: The estimate might potentially be somewhat higher.
> Better: The estimate may be higher.
- False positives: Medical, legal, policy, scientific, financial, and forecast qualifiers can each alter meaning. Do not remove them mechanically.
- Evidence: weak; an editing heuristic, with important meaning-preservation exceptions.

## EN-C15 | Source-gap speculation
- Overlap: HumanInk #20 (8); humanizer 23; Wikipedia knowledge-cutoff and source-gap category.
- What / why: A passage notes missing source detail, then guesses a date, motive, or biography.
- Detect: Separate what the source states from what the writer inferred; look for model-knowledge references.
- Bad → better:
> Bad: The filing does not give a launch date; the company likely began in the late 1990s.
> Better: The filing does not give a launch date.
> Bad: I cannot access current records, but the office probably moved in 2018.
> Better: The supplied records do not establish when the office moved.
- False positives: A precise statement of missing evidence can be important. Keep it without speculation.
- Evidence: validated for pasted model-limit wrappers; weak for careful source-gap statements.

## EN-C16 | Dead metaphor
- Overlap: HumanInk #26 (6); humanizer 3; stop-slop quotable and metaphor checks.
- What / why: A familiar metaphor substitutes for the mechanism or result.
- Detect: Search for a standard image and ask what physically or procedurally happened.
- Bad → better:
> Bad: The new plan is a bridge to a brighter future.
> Better: The new plan links the west clinic to the transit station.
> Bad: The upgrade is a double-edged sword for the staff.
> Better: The upgrade removes duplicate entry but requires a second sign-in.
- False positives: Keep an original metaphor that belongs to the author’s voice.
- Evidence: weak; metaphor frequency depends strongly on genre.

## EN-C17 | False analytical depth
- Overlap: HumanInk #3 (8); stop-slop interpretation check; no-ai-slop generic portability check.
- What / why: A sentence claims “commitment,” “impact,” or “resonance” without an observable connection.
- Detect: Ask what evidence supports the interpretation and whether the sentence adds a testable fact.
- Bad → better:
> Bad: The schedule reflects the team’s deep commitment to quality.
> Better: The team added a second review before release.
> Bad: This choice shows the company’s dedication to customers.
> Better: The company added weekend support.
- False positives: A quoted opinion or measured satisfaction result can support an interpretation.
- Evidence: weak; resolve the claim against its source instead of guessing the author’s motive.

## EN-C18 | Exhaustive feature inventory
- Overlap: HumanInk #31 (6); no-ai-slop proportionality; stop-slop detail check.
- What / why: A list continues beyond the few items relevant to the reader, sometimes cycling through near-synonyms.
- Detect: Look for five or more list items and ask which ones affect the decision.
- Bad → better:
> Bad: The tool supports speed, flexibility, extensibility, reliability, stability, and robustness.
> Better: The tool starts quickly and recovers after a failed request.
> Bad: The form records every optional preference, contact detail, and background note.
> Better: The form records the contact details needed to schedule the visit.
- False positives: Keep complete inventories required for compliance or implementation.
- Evidence: weak; completeness can be the assignment.

## EN-C19 | Announced point and emphasis filler
- Overlap: stop-slop throat-clearing and emphasis phrases; no-ai-slop filler review; HumanInk #22 (6) and #30 (7).
- What / why: An announcement or emphatic phrase delays a claim that can stand on its own.
- Detect: Read the words after the preface. If they contain the full point, remove the runway.
- Bad → better:
> Bad: It is worth noting that the deadline is 14 June.
> Better: The deadline is 14 June.
> Bad: The thing that matters most is that three clinics opted out.
> Better: Three clinics opted out.
- False positives: Keep an opening that adds an actual transition, disclosed reaction, or authorial voice the task calls for.
- Evidence: weak; phrase lists are genre and context dependent.

## EN-C20 | Sweeping intensifiers and absolutes
- Overlap: stop-slop adverb and lazy-extreme checks; no-ai-slop precision review; humanizer word-choice guidance.
- What / why: An intensifier or universal claim enlarges a statement beyond the evidence it carries.
- Detect: Check whether the modifier changes the measurable claim. Replace a broad universal with the observed group or remove the modifier.
- Bad → better:
> Bad: Every team always gets the same result.
> Better: The three teams in the pilot got the same result.
> Bad: The update completely solves every import problem.
> Better: The update fixes the malformed UTF-8 import reported in issue 82.
- False positives: Preserve quantities, scope words, and adverbs when they change the claim accurately.
- Evidence: weak; individual adverbs and absolutes are ordinary language.
