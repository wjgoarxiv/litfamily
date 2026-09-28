# Deliverable channels

Choose the channel before rewriting. The same fact may be useful in an internal log and distracting in a reader-facing report. Keep complete provenance in internal records; put only the context that helps the intended reader in the deliverable or reply.

## Requested artifact

Write for the artifact’s audience, format, and voice. Keep every supported fact, name, number, date, quote, citation, and functional qualifier. If a summary omits detail, preserve the source’s direction and limits.

Use footnotes, endnotes, or the reference list requested by the user. A source line directly beneath a table or figure is an accepted layout convention when it is plain and attached to the visual. Keep it within one blank line of the visual. Do not turn that allowance into a paragraph-wide exemption. A source line that also contains a limitation remains visible to the detector so the caveat does not disappear.

Put a limitation next to the claim it changes and state it once. Prefer a complete sentence naming the scope, measurement, or action. Preserve an actual legal, medical, scientific, financial, or safety boundary when the user requested it or the reader needs it to use the artifact. Never upgrade a proposal or estimate into a result; never delete a negative finding to make the prose sound confident.

### Patterns from real deliverables and reader-safe rewrites

These pairs are short channel examples. Their after lines retain the source condition and its consequence.

> Bad: A 30% gain will follow completion.
> Better: The report lists a 30% gain as an expected outcome after completion; it is not a realized result.
>
> Bad: [C003] says the 30% gain is not realized.
> Better: The source reports a 30% gain as expected, not realized. Keep the claim-to-source key in the internal record.
>
> Bad: Source: annual report, table 4.
> Better: The annual report records the value in table 4.¹
>
> Bad: Source: annual report, table 4. Not a realized outcome.
> Better: The annual report lists the value as an expected outcome, not a realized one.¹
>
> Bad: **Evidence boundary:** the site deployment was not verified.
> Better: The public product pages do not establish deployment at a specific site.
>
> Bad: Evidence: no independent reproduction.
> Better: We did not independently reproduce the result.
>
> Bad: Confidence: High source-backed within the packet.
> Better: The claim is supported within the supplied packet; it was not independently checked.
>
> Bad: [미검증] [증거 기반]
> Better: 표 3의 추정치는 아직 검증하지 않았습니다. 근거는 보고서 각주 2에 있습니다.
>
> Bad: 미확인 · 미실행 · 투자 조언 아님 · 허가 판단 결과 아님
> Better: 원격 검증은 실행하지 않았습니다. 이 자료는 투자 조언이 아니며 허가 판단을 내리지 않습니다.
>
> Bad: demo synthesis and assumptions
> Better: The architecture is proposed for the demonstration; its leading indicators and baselines are assumptions.
>
> Bad: This happened in this lane, using the claim ledger.
> Better: The internal record links the result to its source. The reader-facing claim names the measured result.
>
> Bad: The image receipt confirms the single-frame figure.
> Better: Figure 6 uses one verified local frame at 2.885 µs.
>
> Bad: I've updated the file and saved it.
> Better: The report now includes the revised measurements.
>
> Bad: Let me know if you’d like another version.
> Better: End after the requested artifact, unless a decision or action remains.

A short source attribution under a table, image or figure is an exception for layout, not a new section style. The detector tests Markdown tables, Markdown images, HTML figures, figure captions, one blank line, caveat-bearing sources, and labels left in prose.

## Chat reply

Return the requested work without an audit preamble. Summarize the change only when useful. State one material risk plainly when it affects a decision. Mention a limitation only when the user needs it to understand what was delivered or what action remains.

The reply can include a direct answer or requested explanation. Remove generic service closers and narration about editing. Do not claim a check happened unless it did.

## Internal records

Plans, evidence files, ledgers, handoffs, status and doctor output, and machine-readable reports may need exact paths, commands, counts, hashes, provenance, uncertainty, and failures. Keep those records detailed and structurally intact. Do not rewrite an internal fact into a smoother but less exact statement.

An internal record can retain compact keys, status fields, lane names, and repeated uncertainty when its schema requires them. Do not pass those fields to a reader-facing deliverable unchanged. The product adapter should identify the intended channel before scanning.

## Keep useful caveats without stacking them

- One result may need one scope sentence. Keep all conditions that change its meaning.
- If several cautions describe separate risks, give each the location or list required by the artifact; do not compress away a safety condition.
- If a disclaimer is legally or clinically required, preserve it. Put it where the user or format asked for it.
- If the source says that a test did not run, say which test and scope. Do not imply it passed.
- If a source does not support a stronger claim, retain that limit. Do not fabricate a named source to replace vague attribution.
- If a verification limitation is accurate and changes the claim, state it once in the relevant sentence. Keep the scope exact.

## Internal vocabulary to reader prose

Keep internal process names inside the corresponding evidence record unless the reader needs the name to reproduce or audit a result. Replace a process label with the content it points to: the specific file, source, measurement, person, date, or action. Do not replace an unknown with a plausible detail.

The exact factual relation determines the rewrite. A compact label may become:
- an attributed observation;
- a sentence naming a proposal or assumption;
- a source note attached to a visual;
- a statement that an action was not run;
- a scoped legal or safety condition;
- or an internal record reference.

## Category-1 mapping

The 26 real lines and synthesis shapes are indexed in references/taxonomy.md. That file gives an individual rewrite for each line. This file defines how to place the rewritten fact:

| Shape | Artifact channel |
|---|---|
| Source plus forecast, demo status, or assumptions | State the source and status in one factual sentence; keep the citation beside the claim. |
| Internal keys and routing | Keep tracking details in the evidence record; cite the reader-facing source in the deliverable. |
| Label, bracket tag, confidence or evidence boundary | Replace the heading with a sentence whose subject is the claim or measurement. |
| Non-observation or unperformed work | Name what was not observed or run; keep the result’s scope. |
| Disclaimer chain | Preserve each relevant condition in concise sentences; omit only irrelevant boilerplate. |
| Source line under a visual | Keep a plain source attribution if directly attached; move the caveat into the claim sentence. |
| Demo/self-description | Say what is proposed, assumed, simulated, measured, or unverified. Do not use a self-label as evidence. |
| Standalone “limitations” sentence | Name the actual limitation or leave a real uncertainty explicit. Do not add a generic challenge to create balance. |

## Detector boundary for ports

The detector scans the text it receives. Product ports must pass only newly generated or changed model text. Existing file text, exact user quotations, source quotations, internal records, fenced code, and inline code need the host’s explicit boundaries. A standalone script cannot infer which text was changed. LitGrok supplies an actual pre-write guard for text edits; post-create Office and PDF findings are advisory because live host delivery of that note is unverified.
