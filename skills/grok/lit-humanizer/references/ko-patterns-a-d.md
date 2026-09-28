# Korean pattern catalog: A–D

This shard expands the 85 source IDs into editing guidance. An ID is a review cue, not an authorship finding. Evidence labels describe the source taxonomy: validated means it reports comparative corpus or model evidence for the cue; weak means the entry is a linguistic or editorial hypothesis without direct comparative support for that exact cue; hold means the source explicitly says not to use it as a rewrite basis. Several validated findings show that a form is more common in human writing, so validation can support preservation rather than removal. Never rewrite a sentence merely to satisfy a count.

## A. Translation-shaped syntax

### A-1 | Topic-framing phrase
- What: A noun is repeatedly wrapped in a formal “about this topic” phrase.
- Why: The wrapper postpones the verb and can mirror an English preposition.
- Detect: Heuristic only; consider it only when the same construction clusters three times in one paragraph.
- Bad → better:
> Bad: We need to discuss the new rule in relation to its rollout.
> Better: We need to discuss how the new rule changes the rollout.
> Bad: This chapter is about the district budget.
> Better: This chapter covers the district budget.
- False positives: The source measured the equivalent as more common in human Korean than model text. Keep ordinary uses.
- Evidence: validated; measured direction argues for restraint, with density as the only editing trigger.

### A-2 | Means-and-pathway phrase
- What: Many actions are expressed as “through” a method instead of naming the action.
- Why: Repeating one connector makes distinct processes sound interchangeable.
- Detect: Heuristic only; review three or more uses in a paragraph, not an isolated occurrence.
- Bad → better:
> Bad: The team gained insight through analysis of the logs.
> Better: The team analyzed the logs and found the timeout.
> Bad: Applicants can submit the form through the portal.
> Better: Applicants can submit the form in the portal.
- False positives: Korean corpus evidence in the source shows this construction is common in original Korean. Do not treat one use as a tell.
- Evidence: validated; prior corpus comparison rejects the simple “translationese” claim.

### A-3 | Situation-padding phrase
- What: A sentence begins with a formal phrase meaning “in this matter.”
- Why: It inserts a noun wrapper where a direct topic or location works.
- Detect: Regex or heuristic; look for the fixed phrase at a sentence boundary.
- Bad → better:
> Bad: In the matter of access, the deadline is Friday.
> Better: The access deadline is Friday.
> Bad: In the question of staffing, two posts remain open.
> Better: Two staffing posts remain open.
- False positives: Legal or academic prose may need to delimit a formal domain.
- Evidence: weak; the source offers a conventional editorial diagnosis, not comparative counts.

### A-4 | Reason-label clause
- What: A clause ends by labeling its preceding claim as a “point” or “aspect.”
- Why: The label can restate the relation instead of adding evidence.
- Detect: Heuristic; look for repeated noun-plus-reason endings and test whether a causal connector is clearer.
- Bad → better:
> Bad: The queue is shorter, in the sense that fewer requests wait.
> Better: Fewer requests wait, so the queue is shorter.
> Bad: The route is useful in that it avoids the bridge.
> Better: The route avoids the bridge.
- False positives: Preserve it where a formal distinction really matters.
- Evidence: weak; the source reports no observed cases in two comparison sets, which is not evidence of a strong tell.

### A-5 | Related-to wrapper
- What: A sentence names a topic through a long relation phrase.
- Why: The phrase hides the actual action or relation.
- Detect: Regex or heuristic; flag clusters, not a single technical relation.
- Bad → better:
> Bad: We raised two issues related to account recovery.
> Better: We raised two account-recovery issues.
> Bad: The notice concerns matters related to scheduling.
> Better: The notice covers scheduling.
- False positives: “Related to” is useful when the relation is genuinely broad or not yet classified.
- Evidence: weak; no direct comparative measurement is given for this entry.

### A-6 | Basis-wrapper repetition
- What: A decision is repeatedly said to rest on a named basis.
- Why: The wrapper can conceal whether the writer used, compared, or merely received that basis.
- Detect: Heuristic; inspect repetition and replace only where the action is known.
- Bad → better:
> Bad: We chose the date on the basis of the booking records.
> Better: The booking records set the date.
> Bad: The score was determined based on the submitted totals.
> Better: We calculated the score from the submitted totals.
- False positives: Keep the phrase when it distinguishes evidence from a rule or assumption.
- Evidence: weak; a general style recommendation, with no direct tier study for this form.

### A-7 | Possession verb for a quality
- What: A quality is framed as something an entity “has.”
- Why: The sentence can turn a simple property into a padded noun phrase.
- Detect: Heuristic; inspect whether the quality can be stated as a predicate.
- Bad → better:
> Bad: The motor has high efficiency.
> Better: The motor is efficient.
> Bad: The page has good readability.
> Better: The page is easy to read.
- False positives: Keep literal possession, inventory, or an object held by a person.
- Evidence: weak; the source extends the cue to light-verb constructions but gives no comparative count for this pattern alone.

### A-8 | Double passive
- What: Two passive or causative layers stack around one action.
- Why: The extra layer hides the actor and lengthens the predicate.
- Detect: Regex or heuristic for doubled passive endings; inspect the actual actor before switching to active voice.
- Bad → better:
> Bad: The request was being processed through the queue.
> Better: The queue processed the request.
> Bad: The label came to be assigned by the import job.
> Better: The import job assigned the label.
- False positives: Keep a passive when the actor is unknown, irrelevant, or intentionally withheld.
- Evidence: weak; the source links it to translation studies but presents no per-item corpus result.

### A-9 | Agent-by phrase plus passive
- What: A sentence names an agent in a preposition-like phrase while keeping a passive predicate.
- Why: The agent appears late, even though it could lead the sentence.
- Detect: Heuristic; require both an explicit actor phrase and a passive action.
- Bad → better:
> Bad: The image was generated by the render service.
> Better: The render service generated the image.
> Bad: The file was deleted by the cleanup task.
> Better: The cleanup task deleted the file.
- False positives: Passive voice remains appropriate when the affected object is the topic.
- Evidence: weak; a translation-shaped syntax cue without direct comparative measurement here.

### A-10 | Repeated ability modality
- What: Several adjacent claims use the same “can” form for possible outcomes.
- Why: Repetition can make a paragraph sound mechanically parallel.
- Detect: Heuristic only; look for four or more repetitions and preserve modality.
- Bad → better:
> Bad: The patch can reduce retries. It can lower load. It can shorten the queue.
> Better: The patch may reduce retries; load and queue time may fall too.
> Bad: The filter can hide drafts. It can group them. It can export them.
> Better: The filter hides drafts and groups them; export remains available.
- False positives: In medical, legal, policy, and forecast text, possibility strength is part of the claim. The source now says not to vary this form there.
- Evidence: weak; even the source’s suggested rhythm edit is restricted because modality changes meaning.

### A-11 | Purpose-clause repetition
- What: Each action is introduced by a long “for the purpose of” clause.
- Why: The purpose wrapper delays the action and can overstate intent.
- Detect: Heuristic; repeated use may warrant a shorter purpose clause.
- Bad → better:
> Bad: The team met for the purpose of comparing bids.
> Better: The team met to compare bids.
> Bad: She opened a second window in order to check the total.
> Better: She opened a second window to check the total.
- False positives: The source measured this family as more common in human prose; retain ordinary uses.
- Evidence: validated; source data argues against treating it as a standalone AI marker.

### A-12 | Event made passive
- What: A natural event or agreement is described as something “made” or “achieved.”
- Why: The nominal event plus generic verb can hide who agreed or what changed.
- Detect: Heuristic; ask who acted and whether an event verb exists.
- Bad → better:
> Bad: An agreement was reached on Tuesday.
> Better: The two teams agreed on Tuesday.
> Bad: A review was conducted before release.
> Better: The team reviewed the build before release.
- False positives: Keep conventional institutional wording when the actor is unknown or deliberately general.
- Evidence: weak; the source gives editorial examples but no direct counts.

### A-13 | Unmarked noun chain
- What: Several nouns are placed next to each other without showing their grammatical relation.
- Why: The reader must infer which noun modifies or acts on another.
- Detect: Heuristic; inspect compact headline-like strings in body prose.
- Bad → better:
> Bad: Regional water demand forecast update begins today.
> Better: The agency updates its forecast of regional water demand today.
> Bad: Battery storage safety review summary is ready.
> Better: The safety review of battery storage is ready.
- False positives: Keep established compounds, table headings, and search labels.
- Evidence: weak; no comparative evidence is listed for this individual cue.

### A-14 | Clause joined by a stock conjunction
- What: A full new clause is repeatedly attached with the same additive connector.
- Why: It can flatten actions into a sequence without showing their relation.
- Detect: Heuristic; check whether clauses are sequential, causal, or independent.
- Bad → better:
> Bad: He signed the form, and then he sent it.
> Better: He signed the form and sent it.
> Bad: The gate opened. And the bus left.
> Better: The gate opened, so the bus left.
- False positives: Keep the conjunction when it marks an actual addition or a deliberate spoken rhythm.
- Evidence: weak; this is a prose-editing cue, not a measured classifier.

### A-15 | Abstract subject with a generic verb
- What: An event, idea, or tool is made to “show,” “offer,” or “bring” a broad result.
- Why: It can avoid naming the person or process that supports the claim.
- Detect: Heuristic; check for an abstract subject plus a generic perception or provision verb.
- Bad → better:
> Bad: The launch shows the value of the new queue.
> Better: The launch cut the queue from 18 minutes to 6.
> Bad: The policy offers better outcomes for families.
> Better: The policy raises the monthly child allowance.
- False positives: Keep a figurative subject when it is precise and familiar in the genre.
- Evidence: weak; the source connects the pattern to translation theory but does not provide a clean standalone comparison.

### A-16 | Unanchored pronoun
- What: A pronoun is used where Korean would normally omit it or repeat a noun.
- Why: Translation can preserve English pronouns and leave an unclear referent.
- Detect: Judgment only; identify the antecedent in the preceding two sentences and keep the pronoun if more than one candidate remains.
- Bad → better:
> Bad: The report names two buyers. They approved it.
> Better: The report names two buyers. The board approved the plan.
> Bad: The router stores the token. It expires in an hour.
> Better: The router stores the token, which expires in an hour.
- False positives: Never delete a pronoun by percentage target; restore a noun only when the referent is known.
- Evidence: weak; the source calls its own window and noun-phrase approximation preliminary.

### A-17 | Plural marker on inanimate abstract nouns
- What: An abstract or inanimate noun receives a plural marker mechanically.
- Why: Korean often leaves plurality unmarked when number is not contrastive.
- Detect: Judgment only; this source ID is on hold and is not a rewrite instruction.
- Bad → better:
> Bad: The report compares three informations from the survey.
> Better: The report compares three pieces of survey information.
> Bad: Several data were removed before analysis.
> Better: Several records were removed before analysis.
- False positives: Do not alter quoted text, technical usage, or legitimate counted sets.
- Evidence: hold; the source found no positives in two small review rounds and awaits machine-translation samples.

### A-18 | Deep left-branch modifier
- What: Several clauses accumulate before the noun they describe.
- Why: Readers wait too long to learn the subject of the modifier.
- Detect: Heuristic; look for three or more nested pre-nominal clauses, not a single modifier.
- Bad → better:
> Bad: The file that the service that handles image uploads created failed.
> Better: The upload service created the file, and that file failed.
> Bad: The team that the director that joined in June formed left.
> Better: The director joined in June and formed the team. The team later left.
- False positives: Long modifiers can be essential in legal or technical definitions; split only if the referent stays clear.
- Evidence: weak; the source cites translation scholarship but gives no direct model-versus-human measurement.

### A-19 | Stacked case particles
- What: Multiple Korean case particles are joined into one heavy noun modifier.
- Why: A phrase can be clearer as a clause or a simpler relation.
- Detect: Regex or heuristic for the source’s listed compound endings; simple possessive marking is outside scope.
- Bad → better:
> Bad: The review of the proposal from the committee starts Monday.
> Better: The committee starts reviewing the proposal Monday.
> Bad: The route toward the station was closed.
> Better: The road to the station was closed.
- False positives: Preserve conventional terminology and a simple possessive; do not flatten exact spatial relations.
- Evidence: weak; the source explicitly excludes broad single-particle forms because evidence is unsettled.

### A-20 | Passive-progressive clustering
- What: A paragraph repeats passive progressive predicates to describe every trend.
- Why: Repetition produces a report-like metronome and can hide a changing state.
- Detect: Heuristic; consider three or more instances in a paragraph.
- Bad → better:
> Bad: Costs are rising. Delays are increasing. Complaints are growing.
> Better: Costs rose, delays lengthened, and complaints increased.
> Bad: The queue is being expanded while limits are being tightened.
> Better: The operator is expanding the queue and tightening its limits.
- False positives: Retain the form for a continuing process or when the source leaves the actor unknown.
- Evidence: validated; the source reports human usage too and requires a dense cluster before editing.

### A-21 | “Beyond a simple X” escalation
- What: A sentence first dismisses a smaller frame and then elevates the subject.
- Why: The contrast can add importance without a concrete relation.
- Detect: Regex or heuristic for a simple-thing-overcome construction.
- Bad → better:
> Bad: The update goes beyond a dashboard to transform planning.
> Better: The update adds a dashboard that shows weekly demand.
> Bad: The club is more than a hobby; it shapes the city.
> Better: The club meets twice a week and runs the city tournament.
- False positives: A real comparison can be meaningful when both sides are specified.
- Evidence: validated; the source reports no matching human examples in its tested set, but do not generalize beyond that set.

### A-22 | Confidence label added to a claim
- What: A sentence says a conclusion is “clear” or “obvious” instead of stating it.
- Why: The confidence label can substitute for evidence.
- Detect: Heuristic; distinguish the evaluative predicate from an adverb that preserves the author’s intended confidence.
- Bad → better:
> Bad: It is clear that the valve leaks at 4 bar.
> Better: The valve leaks at 4 bar.
> Bad: The result is obvious from the first run.
> Better: The first run shows the result.
- False positives: If the author intends emphatic certainty, retain it in a natural form without deleting the proposition.
- Evidence: weak; the source warns against changing the strength of a conclusion.

### A-23 | Groundwork metaphor
- What: A measure is said to pave a way, lay a foundation, or open a horizon without naming what it enables.
- Why: A construction metaphor can replace a concrete mechanism with future promise.
- Detect: Regex or heuristic for the fixed metaphor family.
- Bad → better:
> Bad: The new registry lays the groundwork for safer reviews.
> Better: The registry records who approved each review.
> Bad: The pilot opens a new horizon for local transit.
> Better: The pilot adds an evening bus between the station and the hospital.
- False positives: Keep literal foundations, routes, doors, and physical access.
- Evidence: validated; source saw no direct AI or translation examples and no removals in its sampled editing pass, so treat it as a narrow check.

### A-24 | “No longer” negation frame
- What: A change is described through a repeated “no longer X” construction.
- Why: It may state the new condition indirectly or create a binary reveal.
- Detect: Heuristic; check for two document-level uses or a climactic redefinition.
- Bad → better:
> Bad: The file is no longer stored on the laptop.
> Better: The file now lives on the shared drive.
> Bad: The group is no longer a volunteer team.
> Better: The group became a paid service in May.
- False positives: Preserve the negative proposition when a positive rewrite would invent what replaced it.
- Evidence: validated; the source measured low rates in human material and also observed the phrase being introduced by editors.

## B. English terms inside Korean

### B-1 | Repeated parenthetical English
- What: Every technical term is followed by its English label or acronym.
- Why: Repeated parentheticals interrupt Korean sentence flow.
- Detect: Heuristic; count repeated expansions after the first definition.
- Bad → better:
> Bad: The model (model) reads the token (token) and returns a score.
> Better: The model reads the token and returns a score.
> Bad: The dashboard shows the API (application programming interface) on every page.
> Better: Define API once, then use API consistently.
- False positives: Retain the first needed expansion and terms for a specialist audience.
- Evidence: weak; no direct comparison is reported for this formatting habit.

### B-2 | Decorative English buzzword
- What: English adjectives are inserted for prestige rather than technical precision.
- Why: They can make a simple action sound like product marketing.
- Detect: Judgment only; ask whether the term names a recognized interface or standard.
- Bad → better:
> Bad: The service gives a seamless onboarding experience.
> Better: The service lets new members finish setup without losing their place.
> Bad: We leverage a robust framework for handoffs.
> Better: We use the framework to hand off requests safely.
- False positives: Keep API names, protocol terms, and vocabulary the reader expects.
- Evidence: weak; the source gives editorial examples rather than language-pair counts.

### B-3 | Long English quotation with duplicate translation
- What: A full English statement is reproduced beside a Korean paraphrase.
- Why: The quotation can double the reading load without adding tone or legal precision.
- Detect: Heuristic; review only when both versions carry the same point.
- Bad → better:
> Bad: “The road was closed at noon.” 도로는 정오에 폐쇄됐다.
> Better: 도로는 정오에 폐쇄됐다. 원문 표현이 중요하면 각주에 둔다.
> Bad: “No further action is required.” 추가 조치는 필요하지 않다.
> Better: 추가 조치는 필요하지 않다.
- False positives: Preserve exact quotations, contract language, and wording under linguistic analysis.
- Evidence: weak; no direct comparative evidence is attached to the source entry.

### B-4 | “Known as” naming wrapper
- What: A name is introduced with an unnecessary phrase meaning “known as.”
- Why: It can make a simple name sound like a translation.
- Detect: Regex or heuristic around naming clauses.
- Bad → better:
> Bad: The method known as sparse caching cuts storage.
> Better: Sparse caching cuts storage.
> Bad: The group called the North Dock Team meets Friday.
> Better: The North Dock Team meets Friday.
- False positives: Keep it when a nickname, disputed label, or alternative name needs attribution.
- Evidence: weak; the source rates the cue as mild and gives no comparison.

## C. Layout and paragraph rhythm

### C-1 | Mechanical numbered trio
- What: A three-part sequence is built even when the ideas do not need it.
- Why: Equal labels and cadence can flatten differences in importance.
- Detect: Judgment only; test each item for a distinct role.
- Bad → better:
> Bad: We checked speed, quality, and scalability.
> Better: We measured startup time and checked output quality; scaling remains untested.
> Bad: The workshop covers plan, build, and review in three identical blocks.
> Better: The workshop starts with a plan, spends most time building, then closes with a review.
- False positives: Keep a true three-part classification and vary item length only when content supports it.
- Evidence: weak; the source cautions that enumeration is ordinary Korean rhetoric.

### C-2 | Bullets where prose would connect the ideas
- What: A flowing explanation is split into a long block of full-sentence bullets.
- Why: Each bullet loses the link between cause, result, and exception.
- Detect: Heuristic; compare the list with a paragraph; do not impose a percentage target.
- Bad → better:
> Bad: - The room closed. - Staff moved the session. - Attendees got an email.
> Better: Staff moved the session after the room closed and emailed attendees.
> Bad: - The patch adds a cache. - It cuts database calls. - It expires after an hour.
> Better: The patch caches results for an hour, cutting database calls.
- False positives: Preserve checklists, scan-friendly slides, and truly independent items.
- Evidence: weak; genre matters more than raw bullet count.

### C-3 | Repeated generic section headings
- What: Sections use a uniform outline such as introduction, body, and conclusion.
- Why: Headings may describe document mechanics instead of the section’s subject.
- Detect: Judgment only; inspect the actual section content.
- Bad → better:
> Bad: Introduction / Main Points / Conclusion.
> Better: Why the gate failed / The missing header / How to reproduce it.
> Bad: Background / Analysis / Next steps for every incident report.
> Better: Name the incident, observed effect, and owner in each heading.
- False positives: Keep required academic sections and templates that readers navigate by.
- Evidence: weak; the source calls out an editorial pattern, not a measured predictor.

### C-4 | Paragraph preview sentence
- What: A paragraph starts with a summary that the next sentence repeats.
- Why: The preview delays the supporting fact.
- Detect: Heuristic; compare the first two sentences for duplicate information.
- Bad → better:
> Bad: The cache is faster. It reduced the endpoint time from 900 ms to 240 ms.
> Better: The cache cut endpoint time from 900 ms to 240 ms.
> Bad: Two teams objected. The API and design teams both rejected the date.
> Better: The API and design teams both rejected the date.
- False positives: A short thesis sentence is useful when the supporting paragraph is long.
- Evidence: weak; no standalone validation is described.

### C-5 | Emoji used as report structure
- What: Decorative icons replace meaningful labels or headings.
- Why: The symbols add noise and may render differently across export formats.
- Detect: Regex can find emoji; judgment decides whether the medium expects them.
- Bad → better:
> Bad: 🚀 Launch: The service opens in Q3.
> Better: The service opens in Q3.
> Bad: ✅ Result: All 14 checks passed.
> Better: All 14 checks passed.
- False positives: Keep icons in social copy, chat, or a slide system where they carry consistent meaning.
- Evidence: weak; category severity comes from editorial taxonomy rather than a broad corpus result.

### C-6 | One-line summary box under a heading
- What: A heading is followed by a short boxed or bold summary, then the same detail.
- Why: The summary can repeat the first sentence and create a second opening.
- Detect: Heuristic; compare the callout to the section’s first paragraph.
- Bad → better:
> Bad: **Performance:** Faster pages. The first page now loads in 400 ms.
> Better: The first page now loads in 400 ms.
> Bad: Key point: three workers remain. Three workers are still assigned.
> Better: Three workers remain assigned.
- False positives: Keep the summary when a dashboard or executive brief requires a scan-first takeaway.
- Evidence: weak; the source gives examples but no measured tier.

### C-7 | Fixed transition sequence
- What: Paragraphs repeatedly follow the same “first, contrast, therefore” sequence.
- Why: The sequence can force a conclusion that the evidence did not establish.
- Detect: Heuristic; look for the same three transition roles across neighboring paragraphs.
- Bad → better:
> Bad: First, demand rose. By contrast, supply fell. Therefore, prices changed.
> Better: Demand rose while supply fell; prices then increased by 8 percent.
> Bad: First came the pilot. In contrast, the rollout was larger. Finally, costs increased.
> Better: The pilot covered two clinics. The rollout reached twelve and cost $40,000 more.
- False positives: Keep transitions that accurately mark chronology or contrast.
- Evidence: weak; the source presents it as a recurrent editorial template.

### C-8 | Repeated rhetorical binary
- What: Several sections pose a symmetrical “A or B?” question.
- Why: Repeating the question shape can turn analysis into a sequence of staged pivots.
- Detect: Judgment only; count the repeated structure at document level.
- Bad → better:
> Bad: Is the problem capacity or demand? Is the risk speed or accuracy?
> Better: Demand exceeds capacity, and slower review raises the accuracy risk.
> Bad: Is this a staffing issue or a training issue?
> Better: New staff need two weeks of training before they can cover the evening shift.
- False positives: A single real decision question may be the clearest framing.
- Evidence: hold-like caution; the source promoted it from repeated examples but provides no stable cross-model measurement. Keep it a manual review cue.

### C-9 | Parenthesized numbered sequence
- What: A list uses inline forms like (1), (2), (3) where ordinary prose would flow.
- Why: The syntax can make a simple paragraph feel like a legal checklist.
- Detect: Heuristic; verify whether order or cross-reference matters.
- Bad → better:
> Bad: We test (1) login, (2) export, and (3) deletion.
> Better: We test login, export, then deletion.
> Bad: The review covered (1) cost and (2) staffing.
> Better: The review covered cost and staffing.
- False positives: Keep numbered controls where readers must cite a specific step.
- Evidence: weak; the source notes the form as a discovered pattern without a broad comparison.

### C-10 | Colon subtitle headings
- What: Many headings use a repeated “topic: dramatic restatement” shape.
- Why: The title can announce a transition instead of naming the section.
- Detect: Heuristic; examine repeated heading patterns, not a useful single colon.
- Bad → better:
> Bad: Results: What the team learned.
> Better: Results from the second test.
> Bad: Migration: From old settings to the new flow.
> Better: The new settings flow.
- False positives: Colons are appropriate in references, subtitles, and technical specifications.
- Evidence: weak; the source associates it with limited model samples.

### C-11 | Comma after a connective ending
- What: Korean connective endings are followed by commas in a repeated English-like cadence.
- Why: Commas can segment clauses where Korean syntax normally carries them forward.
- Detect: Regex or morphology-aware heuristic; validate that the ending is grammatical, not a word substring.
- Bad → better:
> Bad: She opened the window and, checked the latch.
> Better: She opened the window and checked the latch.
> Bad: The sensor warmed up, then, returned a value.
> Better: The sensor warmed up, then returned a value.
- False positives: Keep a comma when it marks a real interruption or prevents ambiguity.
- Evidence: validated; the source reports a 4.84× separation in one external study, not a universal threshold.

### C-12 | Document-wide comma density
- What: Many sentences contain multiple commas, including long clause chains.
- Why: Several subordinate ideas may be competing for one sentence.
- Detect: Metric candidate; measure comma-bearing sentence share and inspect the longest spans.
- Bad → better:
> Bad: The team opened the gate, checked the seal, and logged the pressure, before the pump started.
> Better: The team checked the seal and logged the pressure. Then the pump started.
> Bad: The sensor, which arrived Monday, after a delayed customs review, passed calibration.
> Better: The sensor arrived Monday after customs delayed it. It passed calibration.
- False positives: Numeric lists and formal prose naturally use commas; edit only when the clause load harms reading.
- Evidence: validated; source cites a 2.32× separation but leaves genre-specific limits.

## D. Recurrent phrases and endings

### D-1 | Stock conclusion pivots
- What: Several paragraphs close with the same small group of summary transitions.
- Why: The transition may supply formality instead of a new inference.
- Detect: Lexicon metric can count conclusion cues; source recommends a document threshold of three total.
- Bad → better:
> Bad: In conclusion, the trial ended Friday.
> Better: The trial ended Friday.
> Bad: Therefore, the next review is in March.
> Better: The next review is in March.
- False positives: A conclusion marker can distinguish a real inference from the preceding evidence.
- Evidence: weak; the lexicon originates in comparative research but should not be used alone as a block rule.

### D-2 | Significance inflation
- What: Ordinary facts are described as pivotal, historic, or deeply consequential without support.
- Why: Evaluative language can inflate a detail while obscuring the detail itself.
- Detect: Lexical review plus evidence check; do not block one adjective in context.
- Bad → better:
> Bad: The update marks a pivotal moment for the service.
> Better: The update adds scheduled exports, its first new feature this year.
> Bad: The office plays a vital role in the process.
> Better: The office approves the permit before construction.
- False positives: Preserve importance claims supported by an explicit criterion or attributed assessment.
- Evidence: weak; the source groups this under a family of stock formulas without Korean corpus counts.

### D-3 | List-announcing introduction
- What: A sentence announces a list before restating the same items.
- Why: The introduction adds a layer of ceremony.
- Detect: Heuristic; check for a short preview followed by a full list.
- Bad → better:
> Bad: Three changes matter: the API, cache, and retry policy.
> Better: The patch changes the API, cache, and retry policy.
> Bad: Two factors affected timing: snow and road work.
> Better: Snow and road work delayed the delivery.
- False positives: Keep a list lead when it helps scan a long or complex set of items.
- Evidence: weak; no direct comparison is provided for this entry.

### D-4 | Model-hype adjectives
- What: Strong praise words cluster around a product or plan without measurable support.
- Why: Repeated intensity sounds like promotion, not description.
- Detect: Lexical heuristic and density review; match the source’s genre and claim.
- Bad → better:
> Bad: The system delivers a revolutionary, unprecedented leap in safety.
> Better: The system reduced false alarms from 12 to 7 per shift.
> Bad: The pilot brought a remarkable and groundbreaking improvement.
> Better: The pilot cut setup time by 18 minutes.
- False positives: Keep an attributed quotation or a precise award description.
- Evidence: validated; the source reports repeated model-specific clusters, while warning that model and genre affect them.

### D-5 | Abstract noun as a human actor
- What: An abstraction is said to decide, collide, or lead as if it were a person.
- Why: The metaphor can hide the people or events that caused the result.
- Detect: Judgment only; identify the implied actor before rewriting.
- Bad → better:
> Bad: The disagreement decided the final schedule.
> Better: The managers changed the schedule after they disagreed.
> Bad: A clash of priorities delayed the permit.
> Better: The planning office delayed the permit because the teams disputed the boundary.
- False positives: A conventional metaphor may be vivid and accurate in an essay.
- Evidence: weak; source classification is illustrative rather than directly measured.

### D-6 | Formulaic “now is the time” ending
- What: A recommendation ends with a generic call to act at the right moment.
- Why: The ending asserts urgency without naming an owner or date.
- Detect: Heuristic; check for a concrete action hidden beneath a ceremonial close.
- Bad → better:
> Bad: Now is the time to modernize the intake process.
> Better: The intake team will test the new form in April.
> Bad: This is the moment to invest in training.
> Better: Schedule two training sessions before the June rollout.
- False positives: Keep a time call when an actual deadline or decision follows.
- Evidence: weak; no measured comparison is listed.

### D-7 | “From X to Y” transformation arc
- What: A small change is framed as a journey from one state to another.
- Why: The arc can suggest a larger transformation than the facts support.
- Detect: Heuristic; require a stated before-and-after relation and check whether the range is real.
- Bad → better:
> Bad: The redesign takes support from reactive to proactive.
> Better: The redesign adds an alert before a ticket exceeds 24 hours.
> Bad: The program moves from access to empowerment.
> Better: The program lets 40 residents book a weekly clinic visit.
- False positives: Preserve real migrations and measured changes in state.
- Evidence: weak; source notes a narrow model sample.

### D-8 | Cleft emphasis frame
- What: A sentence delays its subject by saying “what matters is X.”
- Why: The frame can manufacture emphasis when a direct clause would suffice.
- Detect: Regex or heuristic for a cleft opener; check whether it adds contrast.
- Bad → better:
> Bad: What the second test found was a 12 percent loss.
> Better: The second test found a 12 percent loss.
> Bad: The important thing is that the queue is full.
> Better: The queue is full.
- False positives: Keep the cleft when it contrasts with a specific alternative already under discussion.
- Evidence: validated; the source reports task-matched corpus evidence, while cautioning against changing the claim.

### D-9 | Causal “ultimately leads to” close
- What: A paragraph concludes with a broad causal chain and no intermediate evidence.
- Why: A summary verb can imply causation that the preceding facts do not prove.
- Detect: Heuristic; trace each link to an already stated observation.
- Bad → better:
> Bad: Delays ultimately lead to a stronger team.
> Better: Delays extended the handoff by two days.
> Bad: The change ultimately resulted in better coordination.
> Better: The change moved approval into one shared queue.
- False positives: Keep a causal conclusion when the source establishes its mechanism.
- Evidence: validated; source findings caution that the formula can also be injected during editing.

### D-10 | Reverse explanation ending
- What: A sentence ends by calling a prior event “the reason why.”
- Why: The ending can turn a sequence into a causal claim without support.
- Detect: Heuristic; confirm the causal link before making the sentence direct.
- Bad → better:
> Bad: The restart is why the outage ended.
> Better: The outage ended after the restart.
> Bad: A late signature is why the order missed Monday.
> Better: The order missed Monday because the signature arrived late.
- False positives: Keep a causal claim only when the source supports it; preserve correlation otherwise.
- Evidence: validated; source reports task-matched mined examples and warns against adding the formula during rewrite.

### D-11 | Vague future horizon at the end
- What: A conclusion gestures toward the long term without naming a date or event.
- Why: A temporal phrase can make a generic prediction sound like a plan.
- Detect: Heuristic; inspect the last paragraph for an unsupported future promise.
- Bad → better:
> Bad: The change will matter over the long term.
> Better: The next review is scheduled for September.
> Bad: Going forward, the team will keep improving access.
> Better: The team will add weekend access in October.
- False positives: Keep a forecast horizon when a cited model or plan specifies it.
- Evidence: validated; the source describes corpus-mined examples, with no basis to invent a replacement date.

### D-12 | Empty challenges slot
- What: A balanced conclusion says challenges remain without naming one.
- Why: It performs fairness without informing the reader.
- Detect: Heuristic; require a named unresolved issue before retaining the slot.
- Bad → better:
> Bad: Some challenges remain for the next phase.
> Better: The next phase still lacks a backup approver.
> Bad: Risks remain, but the team is optimistic.
> Better: The vendor has not confirmed delivery of the two test devices.
- False positives: A real risk section can be required; name actual risks rather than deleting them.
- Evidence: validated; source reports convergence across independent mining; do not add a risk that was absent from the draft.

### D-13 | Reflective adverb as a manufactured insight
- What: A general reflection is introduced with a slow or profound-sounding adverb.
- Why: The modifier may announce emotion that the facts do not support.
- Detect: Judgment only; use only for reflective essays, not reports or testimony.
- Bad → better:
> Bad: Slowly, the project taught us the value of patience.
> Better: The team missed two dates before it added a weekly review.
> Bad: At last, we learned that maps need labels.
> Better: We added labels after readers confused the two routes.
- False positives: Preserve an author’s real memory, uncertainty, or cadence.
- Evidence: validated but genre-limited; source says the signal comes from essay mining and should not generalize to reports.

### D-14 | Generic generated metaphor
- What: Broad images of horizons, journeys, bridges, or foundations replace concrete outcomes.
- Why: The metaphor can make unrelated projects sound the same.
- Detect: Judgment only; identify the literal event before editing.
- Bad → better:
> Bad: The dashboard is a bridge to a brighter future.
> Better: The dashboard shows each clinic its open referrals.
> Bad: The course opens a new horizon for learners.
> Better: The course lets learners practice three interview questions.
- False positives: Keep a specific, author-owned metaphor or quoted language.
- Evidence: validated; the source reports repeated user-observed cases, while prescribing no universal ban.
