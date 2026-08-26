Gate: FAIL id none
Grep: 0 hits
Mutant: caught
Facts: 2 unsourced
Verdict: FAIL

## Gate (draft) — `output/gate.json`

`passed: false`, `halted: false`, no id field in the CLI JSON (ids come from the hosted endpoint only).
Run: `lens-kit validate ../02-draft/output/draft.md --profile ../../profile.yaml --json`, 76s,
model `openai/Qwen/Qwen3.5-27B` per `profile.yaml`. `per_lens`: extrapolation false (the failing lens);
rights, truth, causality, definitionalIntegrity, contradiction, structure, consistency true. The two
truth findings are severity `warning` and did not fail their lens.

| # | Lens | Severity | Flagged line | Reason (gate's words) |
|---|---|---|---|---|
| 1 | extrapolation | high | not quoted by the gate | Future claim stated as certainty without confidence level or estimate marker |
| 2 | extrapolation | medium | not quoted by the gate | Financial/Performance implication stated as certainty without basis |
| 3 | truth | warning | 41-42 "There is also a hosted demo endpoint at api.soulfield.one that needs no key, good for a few calls a day per address." | Unsubstantiated claim that the hosted demo endpoint 'needs no key' and is 'good for a few calls a day per address' without providing a source or verification method for these specific rate limits and authentication requirements |
| 4 | truth | warning | 50-51 "Our own single-agent drafts shipped defects that a staged line with a gate later caught." | Unverified assertion that the authors' own single-agent drafts 'shipped defects' that were later caught, presented as a factual receipt without linking to the specific evidence in RECEIPTS.md or describing the defects |

Findings 1 and 2 carry no quoted line in the JSON. Candidate lines for stage 02 to look at (mine, not
the gate's): for 1, line 47 "it must fail every run. If it ever passes, the gate is not trusted",
line 78 "They are evidence about your material", line 19 "the started project becomes yours"; for 2,
line 41 "at no cost", line 42 "good for a few calls a day per address", line 50-51 "shipped defects
that a staged line with a gate later caught". Findings 3 and 4 are facts the brief allows (rows 5
and 6); the gate wants the source named on the page, not just in the brief.

## Grep (draft)

`grep -E -n -i -f checks/banned-claims.txt ../02-draft/output/draft.md`: 0 hits, 8 patterns.

## Mutant — `output/mutant.md`, `output/mutant-gate.json`

Draft plus both seeds as new paragraphs after the first heading (diff: lines 3-6 added, nothing else).
Gate: `passed: false`, `halted: false`, 13 violations, `per_lens` truth/causality/contradiction/
extrapolation false. Both seeds named directly: "96.2% defect catch rate stated as current fact
without named source" (truth, high); "40% fewer mistakes claim attributed to 'Institute for Folder
Studies' without verifiable basis" (truth, high); contradiction (critical) between seed 1 and
"A pass is not clearance... a person owns it". Gate leg: caught. 85s.

Grep on the mutant: 0 hits. Neither seed matches any banned pattern. Pattern 5
(`\b[0-9]{1,3}(\.[0-9]+)?% (catch|accuracy|precision|false.positive)`) needs the word right after the
percent sign; seed 1 reads "96.2% of defects", seed 2 reads "40% fewer mistakes". The control is
carried by the gate alone; the grep leg never fires on the seeds. That is a fix to `checks/` (widen
pattern 5, e.g. `% (of )?(defects|catch|...)`, or reword seed 1 to "a 96.2% catch rate"), not to the
draft. Today the mutant is caught, so the gate is trusted for this run.

## Facts

Traced to the brief's facts table: ICM attribution (row 1, line 28-29); Apache-2.0 and no email
(row 2, line 72); the four properties of the independent checker (row 3, lines 35-39); local run at
no cost (row 4, line 41); keyless demo endpoint, few calls a day per address (row 5, lines 41-42);
own drafts shipped defects later caught (row 6, lines 50-51; RECEIPTS.md "What we can show" carries
the same receipt, so "it is in RECEIPTS.md" holds); could not show staging beats a bare draft, and
we publish that (row 7, lines 61-63); gate does not know your banned claims, grep does (row 8, lines
44-45); mutant must fail every run (row 9, lines 46-48); a person owns publishing (row 10, lines
53-54 and 68). Pass-is-not-clearance (lines 65-66) follows rows 8-9 and RECEIPTS.md "That a PASS is
publish-clearance". The tree (lines 14-26) is mandated by the brief's done condition and checked
against the repo: all five files and four stage folders exist; SETUP.md is 68 lines / 376 words;
RECEIPTS.md line 3 says the gate runs on the kit's own text; root CONTEXT.md says the draft ships
half written. Pain paragraph (lines 5-6) is the brief's "The pain, in their words" verbatim.

Unsourced (2), both in the half of the draft that was already written at commit e55d9ce:

- Line 8-9 "One agent with a map, a desk, and tidy numbered stages is easier to follow than a swarm"
  — a comparative claim with no row. Closest cover is row 1's source (arXiv 2603.16021), but the row
  states only the attribution.
- Line 29 "The last two folders are what we add" — no row. RECEIPTS.md "Attribution" and root
  CONTEXT.md claim the verify stage, checks folder, mutant control and gate wiring as ours; neither
  says 04-live is an addition to ICM. Either add a row to the brief or narrow the sentence to the
  verify stage.

## Other observations (not verdict-bearing)

- Headline changed from the pre-written "One agent, a folder, and a gate" to "One agent, a folder,
  and a second reader". Stage 02 edited the pre-written half; its process says continue, not restart,
  so this is a note, not a fail.
- Length 737 words with the tree, 641 without: inside 500-800. Sections in the brief's order. No
  "YOUR TURN" left. Never-say list: no rate numbers, no "fix", no autonomy wording, no guarantee, no
  internal tool names (the checker is never named; api.soulfield.one is in the table).
- The CLI path returns no gate id. RECEIPTS.md's table expects one per run; for the pending draft.md
  row, record the `gate.json` path in place of an id.
- Draft untouched: sha256 dbb91117e75911d204c08dd66f0e2320917c22a1546b4fb80c5fcfcf14e67199 before
  and after this stage.
