# Rewrite playbook

Use this procedure when a user asks for a rewrite or a deliverable needs a final editorial pass. It aims for a natural, accurate result, not a low detector score at any cost.

## 1. Mark

Read the whole section before changing a sentence. Identify its intended reader, format, voice, and purpose. Mark likely drafting residue separately from valid technical terms, citations, quotations, and limits. A warning is a prompt to inspect the passage; do not mechanically rewrite it.

For substantive work, keep a temporary fact table outside the final deliverable:

- claim or instruction;
- exact number, unit, date, and proper name;
- source or quotation;
- modality and uncertainty;
- condition or scope boundary;
- where it appears in the revised draft.

The table is a working aid. Do not emit it unless the user asked for it or it belongs in an internal record.

## 2. Rewrite

State the useful point directly. Prefer the actor and verb when they are known. Keep a sentence if its structure is natural for the field or the writer. Use bullets for parallel items or actions; use prose for a line of reasoning. Vary rhythm in response to the content rather than to a formula.

Remove a phrase only if the next version preserves its function. If a sentence contributes no fact, reasoning, or voice, cut it. If it contributes meaning, rewrite it with the same meaning. Do not add anecdotes, claims, citations, sources, or authorial attitudes that were not supplied.

## 3. Preserve

Compare source and revised text claim by claim. Verify:

- numbers, ranges, dates, units, names, versions, and locations;
- the direction and magnitude of each result;
- who acted, who did not act, and who is responsible;
- uncertainty, causation, scope, and conditions;
- quotations, citation targets, and attribution;
- legal, medical, safety, and scientific language the user requested or the artifact requires.

Do not turn `not measured` into `zero`, a proposal into an outcome, a warning into a guarantee, or an estimate into an observed result. Preserve an explicit disclaimer when the user requests it or its removal would create a false impression. Keep one functional qualifier when it limits a claim.

## 4. Re-check

Run the detector on the newly written text, not on pre-existing file contents. Fix block hits. Read each warning in context and either revise it or keep it deliberately. Re-check the clean version. A zero count does not prove quality or human authorship; the fact comparison and read-aloud pass remain required.

For files, review only the diff or newly generated section when the host can provide it. Exclude exact user quotations, code, internal plans/evidence/ledgers, and handoff/status records. For DOCX/PPTX, extract text immediately after creation and rerun the checks. LitGrok uses `pdftotext` for PDFs when installed; report the extraction boundary when the executable is unavailable.

## Anti-overcorrection

- Do not remove all qualifiers, all passive voice, all bullets, all adverbs, or all formal transitions.
- Do not force contractions, first person, fragments, humor, or a casual register.
- Do not flatten precise vocabulary just because it appears on a warning list.
- Do not replace repeated field terminology with artificial synonyms.
- Do not optimize an AI-detection score or promise that a detector will classify the text as human.
- Do not erase a legal, medical, safety, or citation requirement to make prose shorter.

Finish with two questions: does the new text still make exactly the same supported claims, and would this voice fit the writer and audience? If either answer is no, restore or revise the affected sentence.
