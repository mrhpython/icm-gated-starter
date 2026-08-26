Gate: PASS id none
Grep: 0 hits
Mutant: caught
Facts: all sourced
Verdict: PASS

## Gate (draft) — `output/gate.json`

`passed: true`, `halted: false`, `violations: []`, `consciousness_flags: []`. No id field in the CLI
JSON (ids come from the hosted endpoint only). Run 2026-08-26:
`lens-kit validate ../02-draft/output/draft.md --profile ../../profile.yaml --json`, exit 0, 74s,
model `openai/Qwen/Qwen3.5-27B` per `profile.yaml`. `per_lens`: rights, truth, causality,
definitionalIntegrity, contradiction, extrapolation, structure, consistency all true. Auto-fix was
enabled (the CONTEXT command does not pass `--no-fix`) but runs only on critical auto-fixable
violations, of which there were none, so the pass is on the draft as written.

Draft sha256 `c01db41614f70b3ac6928ca6b6316b2de62475141fe9b5ee416f16baae3958f3` before and after
both gate runs. This is a different draft from run 1 (sha `dbb91117…`); run 1's two extrapolation
findings, two truth warnings and two unsourced facts do not recur.

## Grep (draft)

`grep -E -n -i -f checks/banned-claims.txt ../02-draft/output/draft.md`: 0 hits, 8 patterns.
Broader sweep (any `%`, "fix", "guarantee", "autonom", "no human", "catch rate", "accuracy",
"precision", "false positive"): one hit, line 36 "Its checks are fixed" — the word, not the banned
idea. Internal names (the checker's name, model names, our tool names): none in the draft.

## Mutant — `output/mutant.md`, `output/mutant-gate.json`

Draft plus both seeds as new paragraphs after the first heading (diff: lines 3-6 added, nothing
else). Both legs fired:

- Gate: `passed: false`, `halted: false`, 11 violations, `per_lens` truth/causality/contradiction/
  extrapolation false. Both seeds named directly: "96.2% defect catch rate stated as current fact
  without named source" (truth, high); "40% fewer mistakes claim attributed to 'Institute for
  Folder Studies' without verifiable source" (truth, high); contradiction (critical) between seed 1
  and "A pass is not clearance… Stage 04 is a handback, every time, and a person owns it". 109s.
- Grep: 2 hits, mutant lines 3 and 5, both seeds. The widened pattern 5
  (`% (of )?(defects|…|fewer)`) now matches "96.2% of defects" and "40% fewer"; run 1 had 0 grep
  hits on the same seeds. The control is now carried by both legs, not the gate alone.

## Facts

| Draft line | Fact | Brief row / source |
|---|---|---|
| 5-6 | The pain paragraph | Brief, "The pain, in their words", near-verbatim |
| 8-10 | Folder-system idea does not touch the writer-grades-self failure | Argument on rows 6-7 (could not show staging beats a bare draft; the catch came from the gate); Reader premise in the brief; README "the piece the folder system leaves out". Weakest trace on the page: it is framing, not a table fact |
| 14-26 | The tree and its annotations | Done condition ("the tree"); every entry checked against the repo: five root files and four stage folders exist; SETUP.md titled "Setup, one page", 68 lines; RECEIPTS.md line 3 reads "What we can show, what we cannot, and the gate runs on this kit's own text"; root CONTEXT.md line 6 says the draft ships half written; `01-plan/output/brief.md` exists |
| 28-29 | ICM is Jake Van Clief and David McDermott's; "Interpretable Context Methodology" | Row 1 (arXiv 2603.16021); expansion matches README line 5 and RECEIPTS.md line 46 |
| 29 | The verify stage is what we add | Row 1's attribution boundary + RECEIPTS.md "Attribution" ("The verify stage, the checks folder, the mutant control, and the gate wiring are ours") + desk decision 2 ("We add the verify stage"). Narrowed from run 1's "last two folders", as that verdict asked. No dedicated row; recommend the brief gain one so the trace is one hop |
| 35-39 | Independent checker: separate model, fixed checks, inspectable findings, UNKNOWN when a check cannot complete | Row 3 |
| 41 | Runs locally against a local model at no cost | Row 4 |
| 41-42 | `/v1/demo` on api.soulfield.one, no key, a few calls a day per address | Row 5 |
| 42-43 | SETUP.md shows the local profile and the demo call with its limit | Folder content, checked: SETUP.md §2 has both |
| 45-46 | Gate does not know your banned claims; the grep does, from a list you write | Row 8; MAKE-IT-MINE.md step 4 |
| 46-49 | Mutant must fail every run; if it passes, the gate is not trusted that day | Row 9 |
| 51-52 | Own single-agent drafts shipped defects a staged line with a gate caught | Row 6 |
| 52-53 | Receipt under "What we can show" in RECEIPTS.md, which names the defects, and "The receipts" on api.soulfield.one | Row 6 source; RECEIPTS.md lines 5-12 name five defects and point to the same section. Answers run 1's truth warning (source not named on the page) |
| 55-56 | Person's seat is the last stage, publishing | Row 10 |
| 60-61 | No number for your material; not run on it | Never-say compliance; RECEIPTS.md "A catch rate for your data" |
| 63-65 | Could not show staging beats a bare draft; narrower result; both published | Row 7 (+ row 6) |
| 67-68 | A pass is not clearance; means checks ran and reported nothing, mutant failed | Rows 8-9; RECEIPTS.md "That a PASS is publish-clearance" |
| 70 | Nothing publishes; Stage 04 is a handback; a person owns it | Row 10 |
| 74 | Public repository, Apache-2.0, no email address | Row 2 (LICENSE; README line 8); desk decision 3 |
| 76-78 | Clone; SETUP.md is one page; finish 02, run 03, stop at 04; one week of real work | SETUP.md §1, §4-6; row 10; brief Reader ("run one week of real work through it") |
| 80-81 | Keep your results; nothing on this page came from your material | Negative claim; consistent with row 7 and the never-say list |

Unsourced: 0.

## Other observations (not verdict-bearing)

- 773 words with the tree, 676 without: inside 500-800. Sections in the brief's order: headline,
  pain, tree, why a verify stage, what we do not claim, get it. Plain text, no images, no persona.
  No "YOUR TURN" marker.
- Run 1's findings all answered: the source is named on the page (lines 52-53); "last two folders"
  is now "the verify stage"; the "easier to follow than a swarm" comparison is gone; the
  extrapolation lens now passes.
- The CLI path returns no gate id. RECEIPTS.md's table expects one per run; record the
  `output/gate.json` path in its place, as the run-1 row does.
- Draft untouched: sha256 identical before and after this stage.
