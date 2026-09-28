# Pattern taxonomy

These are editing cues, not authorship judgments. A block is high-confidence residue in a reader-facing artifact. A warning asks for contextual review; it is not a requirement to edit. Internal logs, ledgers, status output, legal notices, quotations, and deliberate author voice have different jobs. Machine rules live in rules.json; manual patterns are editorial checks.

## 1. Deliverable labels, source footers, and limitation clutter

This original category comes from the 26 real lines in fixtures/pos-real.txt and the adjacent research synthesis. Its central distinction is audience: internal evidence may need exact caveats, while a requested report should state the relevant limit once where it affects interpretation.

### Category-1 rules

- ko-bold-deliverable-label — ko, block. Bold process labels surface internal metadata. Rewrite the claim as a sentence.
- en-bold-deliverable-label — en, block. Bold evidence labels create a detached mini-ledger.
- ko-plain-meta-label and en-plain-meta-label — ko/en, block in prose. Connect a plain source or status line to its claim. A non-bold attribution directly below a Markdown table, image, figure or figcaption may remain, separated by no more than one blank line. A source line carrying a caveat still blocks. A source line standing alone in prose still blocks.
- ko-stacked-limitation-chain and en-stacked-limitation-chain — ko/en, block for disclaimer chains. Keep each material boundary, but combine it into readable prose or place it where the reader needs it.
- Workflow-vocabulary rules — en/ko, block. Internal stage names, evidence-bundle labels, tracking keys, and screenshot labels stay in evidence records. A required public citation remains a source citation.
- en-demo-self-disclaimer — en, block. A demonstration label attached to a synthesis, assumption or recommendation is process framing. Name what is proposed and what was measured.
- ko-bracket-status-tag and en-bracket-status-tag — ko/en, block. Replace bracket keys with a sentence describing the status.
- ko-standalone-scope-disclaimer and en-standalone-scope-disclaimer — ko/en, block for stock disclaimers. Preserve a user-requested legal, medical or safety notice and place it once where it applies.
- ko-status-negation, ko-mi-status, en-epistemic-negation and en-not-performed — warnings. A negative result or unperformed action may be the finding. Write the actor, scope and verb plainly; never turn unknown into false or an estimate into a fact.
- ko-plain-meta-label-warn and en-plain-caveat-label — warnings for boundary headings. They may be useful in internal or technical packets.
- en-knowledge-cutoff, en-ai-self-disclaimer, en-hope-helps and ko-chatbot-signoff — block. Remove the model wrapper or generic sign-off, then retain the answer.
- ko-chatbot-opener and en-chatbot-opener — block stock greetings and praise at the start of a deliverable.
- en-chatbot-closer — block the fixed offers to provide another version. en-closer-offer remains a warning for the broad “anything else” question: the negative corpus contains two ordinary task questions, so this wording alone cannot block.
- en-lets-dive — block only the fixed dive-in and no-further-ado openers. A nearby invitation phrase remains outside the block rule because it appeared in a pre-2022 human manual.
- en-testament: block the fixed significance formula. en-left-in-narration: block first-person editing narration left in an artifact.
- code-ai-attribution — block generated-by trailers in commits and PRs under the family rule.

### Real-line rewrite ledger

Each row maps one of the 26 local positive lines to a usable sentence. It preserves the named source, value, scope, status, and uncertainty that make the line useful. Identifiers and process labels move to a citation or internal record when they are not reader-facing evidence.

1. **Expected outcome in a source footer.**
> Rewrite: “The Example Shipyard Sustainability Report 2024 lists 30% higher productivity and 30% shorter lead time as expected outcomes after smart-yard programme completion; neither is a realized result.”
2. **Proposed control points in a source footer.**
> Rewrite: “The control points are pilot demonstration recommendations drawn from the Example Shipyard yard digital twin and digital work-order descriptions.”
3. **Architecture summary in a source footer.**
> Rewrite: “The architecture summary draws on NVIDIA industrial digital-twin materials and describes a pilot demonstration synthesis.”
4. **Assumptions in a source footer.**
> Rewrite: “The proposed leading indicators and baselines are demonstration assumptions derived from Example Shipyard smart-yard programme expected outcomes.”
5. **Claim and source IDs in a fact line.**
> Rewrite: “Example Shipyard describes 30% higher productivity and 30% shorter lead time as expected after smart-yard programme completion, not as realized results.” Put the claim-to-source mapping in a footnote or internal record.
6. **HTML evidence-boundary label.**
> Rewrite: “This summary describes public NVIDIA product and technology pages; it does not establish deployment at a specific site.”
7. **Table caption carrying a publisher record.**
> Rewrite: “Table 2 separates evidence units by question. The supporting records are final report v3 and the publisher’s source record.” Keep an adjacent plain citation if the layout calls for one.
8. **Global data mistaken for a persistence window.**
> Rewrite: “The 100 ps global data do not establish persistence over 20–50 ps.”
9. **Absence of positive evidence mistaken for proof of absence.**
> Rewrite: “This upper bound does not positively establish the absence of transition or independent nucleation; the final direction remains undecided.”
10. **Image caption with an internal receipt term.**
> Rewrite: “Figure 6. Structure aligned to one 2.885 µs PyMOL frame. Source: the verified local frame and its image record.”
11. **Unrun-work table row.**
> Rewrite: “No remote check or new simulation ran; both require explicit approval.” Keep the full execution record in the internal ledger.
12. **Non-observation versus physical absence.**
> Rewrite: “The event was not observed; that does not show that the physical process was absent.”
13. **Stable sensitivity set and unstarted simulation.**
> Rewrite: “All nine sensitivity combinations were stable, but PMF MD has not started.”
14. **Unvalidated model statement.**
> Rewrite: “OPLS-AA has not been validated for epoxide; the report quantifies this limitation below.”
15. **Fitting parameter statement.**
> Rewrite: “We did not use a fitting parameter to match the experimental dissociation temperature.”
16. **Mixed-system measurement statement.**
> Rewrite: “This value was not measured directly in the mixed system.”
17. **Classification-versus-size distinction.**
> Rewrite: “This validates the present/absent classification, not the size estimate.”
18. **Research and investment disclaimer chain.**
> Rewrite: “연구 목적의 자료입니다. 투자 조언이 아니며, 실제 체결과 수익성은 확인하지 않았습니다. 미래 성과나 주문 체결도 보장하지 않습니다.” Preserve the legal boundary and each uncertainty.
19. **Missing forecast.**
> Rewrite: “SOXL 가격 전망은 이 자료에서 제공하지 않습니다.”
20. **Source packet plus no-refetch caveat.**
> Rewrite: “The source was a fact packet retrieved on 2026-07-13; the page was not fetched again or independently reproduced.”
21. **Confidence label plus scope.**
> Rewrite: “Confidence is high within the supplied fact packet. The claims were not independently revalidated.”
22. **Normalized metric versus traded notional.**
> Rewrite: “The value is normalized holdings change multiplied by the current close; it is not verified traded notional.”
23. **Host verification, production run and mechanism claim.**
> Rewrite: “The archive was not verified on the NVIDIA host, no production mdrun ran, and no mechanism closure is claimed.”
24. **Uncertain image-sheet measurement.**
> Rewrite: “높이는 130 mm입니다. 사진 시트에 적힌 표기이며 확정값이나 실측값은 아닙니다.”
25. **Validation checklist phrased as meta text.**
> Rewrite: “관련 검사와 실제 사용 경로를 확인하고, 근거와 가정을 구분합니다.”
26. **Selection status plus unverified depth and permit result.**
> Rewrite: “선별 결과에서 수심과 기준면은 아직 검증하지 않았습니다. 이 결과는 허가 판단이 아닙니다.”

### Additional shapes from the synthesis

- **Bracket status keys:** Replace a compact review tag with a sentence that states the condition.
> Sample tag: [미검증] / [unverified]
> Korean rewrite: 표 3의 추정치는 아직 확인하지 않았다.
> English rewrite: The estimate in table 3 remains unverified.
- **Evidence-status tags:** Replace a label with a sentence naming the source or measurement.
> Sample tag: [증거 기반]
> Rewrite: Name the source or measurement beside the claim.
- **Mid-dot caveat chains:** Separate material conditions and state each only where it affects the claim.
> Input: 미검증 · 허가 판단 아님 · 투자 조언 아님
> Rewrite: 허가 여부는 관할 기관이 판단합니다. 이 분석은 투자 조언이 아닙니다.
- **Standalone scope disclaimers:** Use a factual sentence only when the supporting facts are known. If authority or evidence is missing, name the responsible decision-maker or the specific gap.
> Sample label: 허가 판단 결과 아님
> Rewrite: The document summarizes the study; the permitting agency decides.
- **Status negatives:** A negative status may be factual rather than stylistic. Name the action and scope; never imply completion.
> Sample status: 미실행 / not performed
> Rewrite: 원격 검증은 실행하지 않았습니다.
- **Source footers carrying caveats:** Attach the source to a claim in a note, reference list or one plain caption line. A caveat on that line remains visible because it changes interpretation.
- **Demonstration labels:** Replace a self-description with the actual demonstrator scope, or say which components are proposed. Keep whether a result is simulated or assumed.
- **Workflow terms and tracking keys:** Replace internal stage and evidence labels with a reader-facing citation, or keep the exact record internally.
- **The phrase “Evidence boundary”:** State the boundary once as a normal sentence beside the affected conclusion. Keep a formal section only when the technical or review format requires it.
- **Bare “limitations” or “challenges” slots:** Name the specific open item, owner, test or date if known. Do not invent one to fill an empty slot.

### Caption exemption contract

A plain, non-bold attribution line directly following a Markdown table, image, HTML figure/caption, or figure/table caption may remain if it is attached or separated by no more than one blank line. A Korean materials attribution follows the same rule. No other prose inherits the exemption. A caveat on the line keeps it scannable. For example:
> A source note that says the figures are forecasts rather than realized outcomes carries a caveat.

Fixtures cover each attachment shape, one blank line, two blank lines, an embedded caveat, and an attribution line standing alone in prose.

## 2. Structure and contrast

- en-not-x-but-y — en, warn. Warn if the contrast opens a sentence or occurs at least twice in a document. A single natural mid-sentence contrast stays clean. Rewrite the positive claim only when the negative half corrects no real belief.
- ko-negation-contrast — ko, warn. Review repeated negative-then-positive framing; keep a contrast that carries two distinct facts.
- en-forced-triad and ko-forced-triad — en/ko, warn. Remove padded members, not a real three-part list.
- en-colon-reveal — en, warn. A dramatic takeaway label can become a direct statement.
- manual-en-cleft and manual-negative-list — editorial-only cues; no detector assertion is made.

## 3. Openers and endings

- en-throat-clearing and en-conclusion-opener — warn; remove only a redundant announcement.
- ko-chatbot-invitation — warn; a service invitation may belong in chat but not in an independent report.
- manual-fake-profound-kicker — manual review; end with a concrete finding, decision or next action if the original supports one.

## 4. Attribution

- en-weasel-attribution and ko-weasel-attribution — warn. Name an available source; never invent one to replace vague attribution.

## 5. Hedge calibration

- en-stacked-hedges and ko-stacked-hedges — warn. Keep the qualifier or qualifiers that set claim strength. Legal, medical, scientific, contractual and forecast language is not simplified to sound confident.

## 6. Vocabulary

- en-lexical-tell and ko-calque — warn. A word list prompts a meaning check; it is not a forbidden-word dictionary.
- ko-double-passive and ko-light-verb — warn. Name an actor or a direct verb only when it preserves the source.

## 7. Rhythm and formatting

- en-em-dash-cluster and ko-decorative-bold — warn. Genre, source voice, accessibility and information hierarchy determine whether to edit.
- Sentence length, paragraph length, list density, heading case and punctuation are manual-only unless an explicit machine rule exists.

## 8. Code and developer writing

- code-narrating-comment — warn. A comment should explain a constraint or reason.
- code-defensive-guard — warn. Remove a branch only after verifying the type and trust boundary.
- code-ai-attribution — block generated-model trailers in commit and PR text under the family rule.
- manual-one-use-abstraction — editorial-only. Inline a one-use wrapper only when it adds no name, boundary, test seam or future reuse.
