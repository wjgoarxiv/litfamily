# Korean prose metrics

The optional Node script turns a few source-tested patterns into repeatable counts. It is a review aid for a human editor. Counts do not measure authorship, writing quality, or whether a change is needed.

## Signals and thresholds

| Signal | Reported metric | Advisory threshold | Use |
|---|---|---|---|
| Conclusion-pivot clustering | Count of four conclusion or consequence pivots | 4 or more in one document | The source taxonomy treats counts above three as a reason to inspect a conclusion sequence. This is a frequency trigger, not a block rule. |
| Korean cleft clustering | Count of common “what matters/what is needed” sentence shapes | 2 or more in at least 40 whitespace-delimited units | The source reports a corpus difference for cleft-like forms. The 40-unit floor is a local guard against flagging a tiny excerpt; the threshold has not been calibrated as a classifier. |
| Paragraph-initial connectives | Number of listed connectives at sentence starts in each paragraph | 3 or more in one paragraph | The source discusses three repeated openers as an inspection point and reports model-dependent results. Preserve connectors that clarify logic. |
| Connective-ending commas | Count and share of listed Korean connective endings followed by a comma | At least 3 comma hits and a share of 0.5 or more | This is a surface approximation. A comma may mark a real clause boundary; read the sentence before editing. |

The JSON also reports sentence count, comma-bearing sentence share, sentence-length mean and variation, ending variety, and a balance-phrase count. These remain descriptive; this port sets no warning thresholds for them. Number-grouping commas are excluded from the prose comma count.

The pivot set is 결론적으로, 따라서, 이를 통해, 그러므로. The paragraph-opening set is 또한, 따라서, 즉, 나아가, 아울러, 게다가, 더욱이, 그러므로, 반면, 그러나, 하지만. The connective-ending approximation counts 고, 며, 지만, 면서, 아서, 어서 when a comma follows. The cleft counter checks common 필요/중요/핵심/문제/관건/답 constructions.

## Method limits

The script removes Markdown headings, tables, blockquotes, inline code, and fenced code before counting. Sentence boundaries and whitespace-delimited Korean units are approximations; the script uses no morphological parser. Slides, legal text, notices, dialogue, procedures, and quotations can naturally cluster these forms. A zero result does not mean the prose is natural, and a warning does not call for a rewrite by itself.

Do not combine metric values into a score or use them to rank writers or drafts. Compare a signal with the document's genre, source, audience, and purpose; preserve facts, scope, register, and purposeful repetition.

## Run and fixtures

From the canonical skill directory:

~~~sh
node scripts/ko-metrics.mjs --json path/to/draft.md
node scripts/test-ko-metrics.mjs
~~~

The eight cases in fixtures/ko-metrics-golden.json include a positive and a clean comparison for each threshold family. They exercise counts and minimum-length gates, not authorship labels. Extend them with paired examples before changing a threshold.
