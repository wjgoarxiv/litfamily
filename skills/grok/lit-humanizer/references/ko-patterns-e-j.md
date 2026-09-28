# Korean pattern catalog: E–J

Evidence labels follow the source’s own distinctions. Validated means that the source reports comparative human/model or task-matched evidence; weak means the cue is theoretical, genre-limited, or not directly measured for the exact item; hold means the source explicitly says not to use it as a rewrite basis. A validated result can support preservation. The metric-only indicators are review aids, not authorship scores.

## E. Rhythm and sentence shape

### E-1 | Low sentence-length variation
- What: Sentences cluster at nearly the same length, often with no long sentence.
- Why: Uniform length can make a page sound paced by a template.
- Detect: Metric candidate; calculate sentence-length spread only after excluding headings, lists, and short slide labels.
- Bad → better:
> Bad: The valve is open. The pressure is stable. The pump is running. The line is ready.
> Better: The valve is open and pressure is stable. The pump is running, so the line is ready.
> Bad: The form is short. The form is clear. The form is easy to submit.
> Better: The form takes two minutes to complete, and its labels are clear.
- False positives: Procedures, slides, captions, and accessibility writing may deliberately use short sentences.
- Evidence: weak; the source describes the rhythm cue but no comparable threshold for this item.

### E-2 | Same sentence ending repeated
- What: Several sentences end with the same Korean predicate form.
- Why: Repeated endings can erase differences between observation, inference, and request.
- Detect: Heuristic; inspect endings only within one register and genre.
- Bad → better:
> Bad: 담당자가 접수한다. 관리자가 검토한다. 팀장이 승인한다.
> Better: 담당자가 접수하고 관리자가 검토한다. 팀장 승인은 마지막 단계다.
> Bad: 이용자는 신청한다. 시스템은 결과를 저장한다. 운영자는 상태를 확인한다.
> Better: 이용자가 신청하면 시스템이 결과를 저장한다. 운영자는 처리 상태를 확인한다.
- False positives: Government notices, regulations, and checklist items often require consistent endings.
- Evidence: weak; the source offers an editing metric, not a validated predictor for all Korean prose.

### E-3 | Every paragraph has the same sentence count
- What: Paragraphs repeatedly contain the same number of sentences.
- Why: Identical blocks can signal automatic formatting rather than idea boundaries.
- Detect: Metric candidate; compare at least four prose paragraphs, excluding list items and headings.
- Bad → better:
> Bad: Each paragraph has three sentences, regardless of the topic.
> Better: Give the outage paragraph one sentence and the recovery paragraph the three details it needs.
> Bad: Four sections each contain exactly two sentences.
> Better: Keep two where sufficient and let the section with the test results carry its full explanation.
- False positives: A legal template, article abstract, or two-sentence slide may require symmetry.
- Evidence: weak; no source measurement is attached to this specific rule.

### E-4 | All-short sentence rhythm
- What: Nearly every sentence is short and structurally simple.
- Why: A demand for concision can become a string of disconnected statements.
- Detect: Judgment only; look for several simple clauses in sequence, not a low mean alone.
- Bad → better:
> Bad: 새 센서가 도착했다. 설치를 마쳤다. 수치가 안정됐다.
> Better: 새 센서를 설치한 뒤 수치가 안정됐다.
> Bad: 회의가 끝났다. 팀이 이동했다. 장비를 확인했다.
> Better: 회의가 끝나자 팀은 장비를 확인하러 이동했다.
- False positives: Preserve short sentences used for urgency, dialogue, and clear instructions.
- Evidence: weak; the source adds this as a qualitative rhythm observation.

### E-5 | Long comma-separated clauses
- What: A sentence strings long clauses together with commas.
- Why: Readers must hold too many dependent details before reaching the main verb.
- Detect: Metric candidate; measure words between commas and inspect sentences with long clause spans.
- Bad → better:
> Bad: The pump arrived Monday, after customs released it, while the team was still waiting for the connector, which delayed the test.
> Better: The pump arrived Monday after customs released it. The connector was still missing, so the test moved.
> Bad: The office sent the notice, which listed the dates, before the portal update, while applicants continued using the old form.
> Better: The office sent the notice with the dates before updating the portal. Applicants kept using the old form.
- False positives: Long periodic sentences may be deliberate; retain them when their logic remains easy to follow.
- Evidence: validated; the source reports a 1.97× difference in one essay corpus and warns this is the opposite of E-4.

### E-6 | Many different comma boundaries
- What: Commas appear after many different grammatical units in one text.
- Why: Indiscriminate comma placement can make clause boundaries feel arbitrary.
- Detect: Metric candidate; count comma-adjacent parts of speech only with a language-aware parser; otherwise mark judgment only.
- Bad → better:
> Bad: After review, the manager, on Tuesday, approved the form, and the vendor, later, sent it.
> Better: The manager approved the form on Tuesday after review. The vendor sent it later.
> Bad: 예산은, 4월에, 담당자가, 다시 검토했고, 부서는, 승인했다.
> Better: 담당자가 4월에 예산을 다시 검토했고 부서가 승인했다.
- False positives: The source restricts the signal to essays, news, blogs, Q&A, and reports; do not apply it to poetry or fiction.
- Evidence: validated; the reported 2.44× separation is genre-bound.

### E-7 | Register shift in addressee endings
- What: A Korean document unexpectedly switches among levels of politeness.
- Why: Endings encode the speaker-listener relationship, not just surface form.
- Detect: Judgment only; compare paragraphs with the same audience and purpose.
- Bad → better:
> Bad: 안내해 드립니다. 다음 화면에서 눌러. 제출해 주십시오.
> Better: 안내해 드립니다. 다음 화면에서 선택한 뒤 제출해 주세요.
> Bad: 이 보고서는 결과를 설명한다. 검토해 주시기 바랍니다.
> Better: 이 보고서는 결과를 설명합니다. 마지막 항목을 검토해 주시기 바랍니다.
- False positives: Quoted dialogue, customer messages, and deliberate voice changes can switch registers.
- Evidence: weak; the source labels this estimate and notes that the source study did not quantify it.

## F. Repetition and modifiers

### F-1 | Empty degree adverbs
- What: Intensifiers are added without changing the measurable claim.
- Why: They can make a report sound excited without giving a reason.
- Detect: Judgment only; remove an adverb only if the sentence means the same thing without it.
- Bad → better:
> Bad: The patch is extremely useful.
> Better: The patch removes one manual step.
> Bad: The queue was very slow.
> Better: The queue took 14 minutes to clear.
- False positives: Keep emphasis that belongs to a speaker, quotation, or personal essay.
- Evidence: weak; the source presents this as an editorial habit.

### F-2 | Two modifiers with the same meaning
- What: Adjacent adjectives or adverbs repeat one quality.
- Why: The second word adds volume but no distinction.
- Detect: Judgment only; check whether each modifier identifies a separate property.
- Bad → better:
> Bad: The room was quiet and silent.
> Better: The room was silent.
> Bad: The estimate is rough and approximate.
> Better: The estimate is approximate.
- False positives: Keep modifiers that set different dimensions, such as rough and preliminary.
- Evidence: weak; no direct corpus result is reported.

### F-3 | Function-and-role doublet
- What: A noun phrase names both a function and its role when one covers the other.
- Why: The doubled label lengthens the sentence without narrowing the meaning.
- Detect: Judgment only; compare the two nouns and retain a real distinction.
- Bad → better:
> Bad: The board’s function and role is to set the schedule.
> Better: The board sets the schedule.
> Bad: Her responsibility and duty includes closing the lab.
> Better: Her duty includes closing the lab.
- False positives: Keep the pair when policy defines separate statutory functions and roles.
- Evidence: weak; this is a concision cue, not a measured AI signal.

### F-4 | Nominalization suffix chain
- What: Abstract nouns accumulate derivational suffixes where verbs would be clearer.
- Why: A sentence can become a stack of concepts with no visible actor.
- Detect: Metric candidate; count suffix families at document level, but review each token for its part of speech.
- Bad → better:
> Bad: The implementation of the new policy improved service coordination.
> Better: Implementing the new policy helped the teams coordinate service.
> Bad: A structural modernization of the process began in May.
> Better: The team began modernizing the process in May.
- False positives: Keep established technical nouns, legal terms, and measured variables.
- Evidence: weak; the source supplies a threshold but cautions that normalization cues need genre context.

### F-5 | Repeated abstract “-적” compounds
- What: Many abstract nouns are modified by a generic “-적” adjective.
- Why: The pattern can make a paragraph sound formal while concealing concrete relations.
- Detect: Heuristic; inspect three or more distinct compounds in one document.
- Bad → better:
> Bad: We reviewed the strategic, technical, and economic implications.
> Better: We reviewed the strategy, system limits, and project cost.
> Bad: The team needs a systematic approach to operational readiness.
> Better: The team needs a checklist for opening the service.
- False positives: Preserve conventional terms when the suffix creates a useful technical distinction.
- Evidence: weak; the source gives a density rule without direct cross-genre validation.

### F-7 | Generic policy verbs and abstract objects
- What: Repeated general verbs such as expand, strengthen, or improve attach to vague abstract nouns.
- Why: The reader cannot tell what action the plan requires.
- Detect: Heuristic; pair the verb with its object and ask what someone will do.
- Bad → better:
> Bad: The city will strengthen its support for evening transit.
> Better: The city will add two evening buses.
> Bad: The team will improve its coordination structure.
> Better: The two teams will share one release calendar.
- False positives: Keep the verb when it is a formal budget or statutory category; “design” can be literal.
- Evidence: validated; the source reports large corpus differences for several abstract nouns and actions.

## G. Hedging and balance

### G-1 | Repeated inference endings
- What: Several statements end with the same “appears/seems to” form.
- Why: Repetition can make different confidence levels sound identical.
- Detect: Heuristic; vary syntax only if the source’s uncertainty remains exactly the same.
- Bad → better:
> Bad: 수요가 늘어난 것으로 보인다. 비용도 오른 것으로 보인다.
> Better: 수요는 늘어난 듯하다. 비용은 작년보다 4% 올랐다.
> Bad: The sample appears incomplete. The log appears delayed.
> Better: The sample appears incomplete, and the log arrived a day late.
- False positives: Do not change probability or negate an inference to improve rhythm.
- Evidence: weak; source revisions focus on modality preservation rather than on a validated diagnostic threshold.

### G-2 | Multiple qualifiers around one claim
- What: Several words hedge one statement.
- Why: Redundant qualifiers make it hard to tell what uncertainty remains.
- Detect: Judgment only; preserve the one qualifier supported by the source.
- Bad → better:
> Bad: The result might possibly be somewhat higher.
> Better: The result may be higher.
> Bad: 비용이 다소 낮을 가능성이 있을 수도 있다.
> Better: 비용이 낮을 수도 있다.
- False positives: Medical, legal, policy, contract, and forecast language may encode distinct confidence levels; the source says to preserve it.
- Evidence: weak; this is an editing suggestion with strict domain exclusions.

### G-3 | Safe-balance vocabulary score
- What: A document repeatedly uses both-sides and caution terms as a substitute for a decision.
- Why: Repeated balance words can avoid naming a specific condition or tradeoff.
- Detect: Lexicon metric exists, but do not use its count to justify edits.
- Bad → better:
> Bad: Both options have strengths, so a balanced approach is important.
> Better: Option A costs less; Option B meets the Saturday service requirement.
> Bad: 양쪽 의견을 모두 고려해 신중하게 접근해야 한다.
> Better: 6월 전에는 주민 의견을 듣고, 예산안은 의회가 결정한다.
- False positives: A genuine policy comparison may need balanced treatment.
- Evidence: hold; source reports only five occurrences across 120 items and no document reached its proposed threshold.

## H. Connectives and topic reference

### H-1 | Sentence-initial connective density
- What: Many sentences begin with the same transition words.
- Why: Repeated connectors can give every paragraph an announced logic.
- Detect: Metric candidate, but the source found a strong single-model effect; count by genre and never block.
- Bad → better:
> Bad: Also, the clinic closes at six. Therefore, patients must arrive early. Moreover, the desk stops taking names at five.
> Better: The clinic closes at six, and the desk stops taking names at five. Patients should arrive earlier.
> Bad: 또한 비용이 늘었다. 따라서 일정을 줄였다. 게다가 담당자도 바뀌었다.
> Better: 비용이 늘어 일정을 줄였고 담당자도 바뀌었다.
- False positives: A connector may mark a true contrast or consequence; the source found two models near the human baseline.
- Evidence: weak; a high total came mostly from one model family.

### H-2 | Alternating “but/however” synonyms
- What: Consecutive paragraphs rotate between several equivalent contrast markers.
- Why: The alternation can look like forced synonym variety.
- Detect: Judgment only; check whether each transition has a distinct discourse function.
- Bad → better:
> Bad: The trial passed. However, the memory use was high. Nevertheless, it shipped.
> Better: The trial passed, but memory use remained high; the team shipped it anyway.
> Bad: 조건은 맞다. 하지만 비용이 크다. 그러나 일정은 짧다.
> Better: 조건은 맞지만 비용이 크고 일정은 짧다.
- False positives: Keep contrast markers where the argument genuinely changes direction.
- Evidence: weak; the source gives an editorial pattern, not direct corpus validation.

### H-3 | Repeated “this/that” topic pointer
- What: Paragraphs repeatedly begin by pointing at the previous sentence.
- Why: The topic pointer may hide the actual subject and make transitions vague.
- Detect: Heuristic; check repeated forms inside one paragraph.
- Bad → better:
> Bad: This shows that the port is understaffed.
> Better: The port lacks two night-shift workers.
> Bad: 이 점에서 정책의 변화가 중요하다.
> Better: 정책 변경으로 야간 신청도 가능해졌다.
- False positives: The source says humans use this construction and only one model supplies much of the evidence.
- Evidence: weak; model-specific count differences do not support a universal detector.

### H-4 | Repeated redefinition marker
- What: A paragraph repeatedly introduces a restatement with a “that is” marker.
- Why: The marker can signal that the prior sentence did not say the same thing clearly.
- Detect: Heuristic; remove only when the following words repeat rather than clarify.
- Bad → better:
> Bad: The cap is 20, that is, no more than 20 workers may join.
> Better: No more than 20 workers may join.
> Bad: 이 구간은 정체다. 즉, 차량이 멈춘 상태다.
> Better: 이 구간에서는 차량이 멈춰 있다.
- False positives: Keep a definition or explicit restatement when the audience needs it.
- Evidence: weak; no direct comparison is reported for this entry.

## I. Noun-heavy forms

### I-1 | Repeated “it is that” ending
- What: Several paragraphs close with an explanatory noun phrase ending.
- Why: The form may place the conclusion after a generic wrapper.
- Detect: Heuristic; inspect only repeated paragraph endings, not an individual sentence.
- Bad → better:
> Bad: The queue is long, and the reason is that two workers are absent.
> Better: Two absent workers left the queue long.
> Bad: 문제는 인력이 부족하다는 것이다.
> Better: 인력이 부족하다.
- False positives: The source found this form about twice as often in human Korean. Normal use should remain.
- Evidence: validated; comparison rejects any blanket rule against the ending.

### I-2 | Repeated dependent nouns
- What: Several abstract sentence endings rely on nouns such as “point,” “fact,” or “case.”
- Why: The writer may bury the actual predicate inside a noun phrase.
- Detect: Heuristic; review repeated phrases such as “the point is that” rather than counting one noun.
- Bad → better:
> Bad: The key point is that the rate fell by 6%.
> Better: The rate fell by 6%.
> Bad: 확인해야 할 부분은 제출 시각이다.
> Better: 제출 시각을 확인해야 한다.
- False positives: Keep a dependent noun where it marks a real unit, choice, or case distinction.
- Evidence: weak; no comparative evidence is attached to this broad word family.

### I-3 | “The fact that” wrapper
- What: A proposition is packaged as “the fact that” or “the meaning that.”
- Why: The wrapper delays the assertion and can pad a conclusion.
- Detect: Heuristic; rewrite only if direct statement preserves the relation.
- Bad → better:
> Bad: The fact that the key expired means the worker must sign in again.
> Better: Because the key expired, the worker must sign in again.
> Bad: 중요한 것은 일정이 이미 늦었다는 사실이다.
> Better: 일정은 이미 늦었다.
- False positives: Retain the noun when the proposition itself is being discussed or contrasted.
- Evidence: weak; the source reports a model-skewed subvariant, not a general rule for all uses.

### I-4 | Need-and-obligation report ending
- What: A paragraph repeatedly closes with a policy recommendation or necessity claim.
- Why: Identical endings can turn observations into stronger obligations.
- Detect: Heuristic; count paragraph endings while comparing before-and-after obligation markers.
- Bad → better:
> Bad: The service should add weekend hours. The form should show the wait time.
> Better: The service should add weekend hours before July. The form should show the wait time beside each slot.
> Bad: 이용 절차를 단순화할 필요가 있다. 안내를 강화할 필요가 있다.
> Better: 이용 절차를 단순화할 필요가 있다. 안내를 강화할 필요도 있다.
- False positives: Never remove, merge, or move an obligation if that changes who must act or when.
- Evidence: validated; the source reports a 7.22× task-matched difference and requires modality markers to remain intact.

### I-5 | “Need” noun without an actor
- What: A sentence names a need but not the person or action that can address it.
- Why: The noun can obscure responsibility.
- Detect: Heuristic; add an actor only when the source identifies one.
- Bad → better:
> Bad: A response is needed before Friday.
> Better: The on-call lead must respond before Friday.
> Bad: 추가 검토가 필요하다.
> Better: 담당자가 표 4의 계산을 다시 검토해야 한다.
- False positives: Do not invent an owner or strengthen a suggestion into an obligation.
- Evidence: weak; the source’s treatment is an editorial caution against obligation inflation.

### I-6 | Repeated abstract “ability” nouns
- What: A document repeatedly describes what an entity can do using ability nouns.
- Why: Abstract capability labels can replace the action itself.
- Detect: Heuristic; inspect three or more repeated nominal forms.
- Bad → better:
> Bad: The tool has the ability to compare three files.
> Better: The tool compares three files.
> Bad: 팀의 대응 능력은 빠르게 향상됐다.
> Better: 팀은 더 빨리 대응하게 됐다.
- False positives: Keep capability names that are defined measures or formal evaluation dimensions.
- Evidence: weak; no direct comparative count is reported for this item.

### I-7 | Unnamed analyst conclusion
- What: A sentence attributes a conclusion to an anonymous analysis or evaluation.
- Why: The phrasing borrows authority while omitting who reached the judgment.
- Detect: Heuristic; inspect the previous sentence for an explicit, nearby source.
- Bad → better:
> Bad: Demand is rising, according to the analysis.
> Better: The March report says demand rose 8%.
> Bad: 비용이 낮아졌다는 평가다.
> Better: 연구팀은 비용이 낮아졌다고 평가했다.
- False positives: Korean journalism may use the form after a named source in the preceding sentence.
- Evidence: validated; the source found human 0 and model 5, all in interview or citation tasks, so genre and attribution context are essential.

## J. Visual punctuation

### J-1 | Bold on most body phrases
- What: Bold styling marks many ordinary nouns or clauses.
- Why: Repeated emphasis removes the visual hierarchy.
- Detect: Heuristic; inspect body prose separately from navigation labels.
- Bad → better:
> Bad: The team **reviewed every item** and **approved each change**.
> Better: The team reviewed every item and approved each change.
> Bad: **Deadline:** Friday. **Owner:** Mina. **Status:** Open.
> Better: The review closes Friday. Mina owns it, and the item remains open.
- False positives: Keep bold labels in forms, accessible scanning aids, and slide hierarchy.
- Evidence: weak; no Korean-specific comparison is given.

### J-2 | Quotation marks used for emphasis
- What: Ordinary concepts are placed in quotes despite not being quoted speech or disputed language.
- Why: Repeated scare quotes make the writer appear to distance themselves from their terms.
- Detect: Heuristic; count emphasis quotes, not punctuation inside a quotation.
- Bad → better:
> Bad: The “quick” review took two days.
> Better: The quick review took two days.
> Bad: The team called the result “progress” after the outage.
> Better: The team called the result progress after the outage.
- False positives: Preserve direct quotations, exact labels, and a term under linguistic analysis.
- Evidence: validated; source reports 2.4× more emphasis quotes in task-matched AI text, while noting task dependence.

### J-3 | Decorative em-dash clusters
- What: Em dashes repeatedly insert dramatic side comments or clause pivots.
- Why: The punctuation can give every sentence the same staged pause.
- Detect: Heuristic; inspect repeated decorative use, not a single dash.
- Bad → better:
> Bad: The review—one day—then build—two more days—finished Friday.
> Better: The review took one day. The build took two more, and both finished Friday.
> Bad: The team—after a short delay—sent the file—before lunch.
> Better: After a short delay, the team sent the file before lunch.
- False positives: Preserve dashes already present in the source, dialogue, and an author’s established voice.
- Evidence: weak; the source’s current guidance limits the cue to repeated decoration.

### J-4 | Parenthetical afterthought chain
- What: Many parenthetical remarks interrupt otherwise complete sentences.
- Why: The aside can make the main claim hard to follow.
- Detect: Judgment only; check whether the aside belongs in a sentence, footnote, or note.
- Bad → better:
> Bad: The trial (which began in June) (after a short delay) ended in August.
> Better: The trial began in June after a short delay and ended in August.
> Bad: The owner (Mina) (the night-shift lead) signed.
> Better: Night-shift lead Mina signed.
- False positives: Keep technical expansions, citations, and a parenthetical that carries the author’s voice.
- Evidence: weak; the source describes overuse but does not mark this ID as a confirmed signal.
