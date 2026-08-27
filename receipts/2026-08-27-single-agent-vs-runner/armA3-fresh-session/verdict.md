# Verdict: stages/03-verify, 2026-08-27

Gate: PASS id none
Grep: 0 hits
Mutant: caught
Facts: 1 unsourced
Verdict: FAIL

## Findings

### Gate (PASS)

- Command: `lens-kit validate ../02-draft/output/draft.md --profile ../../profile.yaml --json > output/gate.json`, exit 0, empty stderr.
- `output/gate.json`: `"passed": true`, `"halted": false`, `"halt_reason": ""`, `"violations": []`. All eight lenses true (rights, truth, causality, definitionalIntegrity, contradiction, extrapolation, structure, consistency).
- Id: the local CLI JSON carries no `id` field. The three receipts in `receipts/` got their ids from the hosted gate (`soulfield-lens validate_content`), which returns a UUID; the local run does not. Recorded as `id none`. For traceability, sha256 of `output/gate.json`: `25acd4f1df5f0ceca1a321e6bcf9217d03f4bda59e60e1e71948c59a27a8ae8b`.
- Checker per `profile.yaml`: `openai/Qwen/Qwen3.5-27B` at DeepInfra. A different model from the one that drafted.
- Draft under test: `stages/02-draft/output/draft.md`, 715 words, 78 lines, sha256 `29e910848b5d93a20d5b3fadcc95ca4fdf3dd93c8071b9d213271d54a24c4d1a`. Not edited by this stage; hash re-checked after the run (see Audit).

### Grep (0 hits)

- `grep -E -n -i -f checks/banned-claims.txt ../02-draft/output/draft.md`: 0 hits (exit 1).
- Same command on `output/mutant.md`: 0 hits. See Mutant for what that means.

### Mutant (caught)

- `output/mutant.md` is the draft with the two seed sentences inserted as separate paragraphs after the first heading. `diff` against the draft shows exactly the four added lines (2a3,6); nothing else differs.
- Gate on the mutant: `output/mutant-gate.json` (sha256 `89878304e8c8ee2c39e5250d76797a7f9fbd53c5f9d9b0ce4a63497bc765e722`), exit 1, `"passed": false`, `"halted": false`, 16 violations; truth, causality, definitionalIntegrity, contradiction and extrapolation all false. Both seeds flagged directly:
  - truth / high: "96.2% defect catch rate stated as current fact without named source"
  - truth / high: "40% fewer mistakes claim attributed to 'Institute for Folder Studies' which is unverifiable"
  - contradiction / critical: "'The gate catches 96.2% of defects, so a page that passes it is safe to publish without reading.' vs 'A PASS from the gate is not clearance... It does not mean the draft is right. A person owns publishing.'"
  - extrapolation / high: "'so a page that passes it is safe to publish without reading' claims absolute safety for future publishing events without a confidence level or range."
- Grep on the mutant: 0 hits. Neither seed matches a banned pattern. The percentage pattern requires `% ` followed by `catch|accuracy|precision|false.positive`; the seeds read "96.2% of defects" and "40% fewer mistakes". The mutant was caught by the gate alone. The stage's condition (at least one check fails) is met.
- Note for the person, not for the draft: today the grep gives the mutant control no cover. If the gate ever returns UNKNOWN, nothing catches these seeds. A pattern such as `[0-9]{1,3}(\.[0-9]+)?% (of|fewer|more|less)` would make the grep catch both. The checks are yours; this stage does not change them.

### Facts (1 unsourced)

| # | Draft claim (lines) | Brief row | Result |
|---|---|---|---|
| 1 | Map, desk and numbered stages are Jake Van Clief and David McDermott's Interpretable Context Methodology (28-29) | row 1, arXiv 2603.16021 | sourced; arXiv 2603.16021 title and authors checked 2026-08-27 |
| 2 | "The last two folders are what we add" (29); "the whole reason the last two folders exist" (53) | none | **UNSOURCED.** The facts table, root `CONTEXT.md` ("We add the verify stage"), `NOTICE` and `RECEIPTS.md` ("the verify stage, the checks folder, the mutant control, and the gate wiring are ours") all name the verify stage as the addition. Nothing sources `04-live` as ours rather than ICM's. The ICM abstract describes "sequential workflows where a human reviews output at each step", so a human handback is arguably ICM's shape, not our addition. |
| 3 | Independent checker: separate model, fixed checks, inspectable findings, UNKNOWN when a check cannot complete (35-39) | row 3, lens-kit README | sourced |
| 4 | The checker does not know your banned claims; the grep does (41-42) | row 8, `RECEIPTS.md` | sourced |
| 5 | The mutant must fail every run or the gate is not trusted that run (44-46) | row 9, `stages/03-verify/CONTEXT.md` | sourced |
| 6 | Runs locally against a local model at no cost (48) | row 4, lens-kit README | sourced |
| 7 | Hosted demo at api.soulfield.one, no key, a few calls per day per address (48-50) | row 5, api.soulfield.one `/v1/demo` | sourced |
| 8 | Our own single-agent drafts shipped defects that a staged line with a gate later caught (52-53) | row 6, api.soulfield.one "The receipts" | sourced |
| 9 | No number for how well the gate does on your data; not run on your data (57-58) | never-say list; root `CONTEXT.md` decision | sourced: a stated absence the brief itself requires |
| 10 | Could not show staging alone beats a bare draft; we say so (60-61) | row 7, `RECEIPTS.md` | sourced |
| 11 | A PASS is not clearance: fixed checks found nothing and the mutant failed; it does not mean the draft is right (63-64) | rows 3 and 9; `SETUP.md` step 5 | sourced |
| 12 | A person owns publishing; stage 04 is a handback, every time (66) | row 10, `stages/04-live/CONTEXT.md` | sourced |
| 13 | Apache-2.0; no email address; nothing to sign up for (74) | row 2, `LICENSE`, `README.md` | sourced; `LICENSE` header reads Apache License Version 2.0 |
| 14 | A findings file for every run (76-77) | row 3 (inspectable findings) | sourced |
| 15 | The folder tree and its one-line annotations (14-26) | no row; the brief's Done condition requires "what is in the folder (the tree)" | sourced by the Done condition; every entry checked against the repository listing and `README.md` "Every folder, named"; `RECEIPTS.md` line 3 says "the gate runs on this kit's own text". Judgement call, recorded so you can overrule. |
| 16 | "Read SETUP.md; it is one page" (70) | no row; `SETUP.md` is titled "Setup, one page" | sourced by the file itself; same judgement as 15 |

Fix, for stage 02, one sentence in two places: line 29 "The last two folders are what we add" becomes "The verify stage is what we add" (matches the decision record and the kit's attribution), and line 53 "the last two folders exist" becomes "the verify stage exists". Or, if `04-live` is our addition and you can cite it, stage 01 adds a row to the facts table and the draft stands.

### Other observations (not in the verdict lines)

- Gate variance between runs: the mutant run also flagged two sentences that are unchanged from the draft, the ICM attribution (truth / medium, "lacks verifiable basis") and the api.soulfield.one limits (truth / medium, "stated as fact without source"). The draft run passed both. Both have brief rows (1, 5) and the same reading appears in the 2026-08-26 SETUP.md receipt. Expect the hosted gate to warn on them; not a failure.
- Known gap carried from stage 02: "Clone the repository" (line 70) has no URL because the brief's facts table has none. `SETUP.md` gives `https://github.com/mrhpython/icm-gated-starter`. Add the URL to the brief's facts table before publish.
- `.gitignore` excludes `stages/03-verify/output/*.json`. `output/gate.json` and `output/mutant-gate.json` are on disk but are not committed. `RECEIPTS.md` expects the full response copied under `receipts/` with a date and id at publish; that is stage 04's.

### Audit

| Check | Result |
|---|---|
| Gate read, not guessed | `output/gate.json` exists; `passed: true`, `halted: false`; id none (the CLI emits none) |
| Grep recorded | draft 0 hits; mutant 0 hits |
| Mutant failed | gate on `output/mutant.md`: `passed: false`, 16 violations |
| Facts traced | 16 claims traced; 1 without a row (#2) |
| Verdict honest | FAIL: gate PASS, grep 0 hits, mutant caught, facts 1 unsourced; nothing UNKNOWN |
| Draft untouched | sha256 before `29e910848b5d93a20d5b3fadcc95ca4fdf3dd93c8071b9d213271d54a24c4d1a`; after: see below |
| Draft untouched (re-check) | after `29e910848b5d93a20d5b3fadcc95ca4fdf3dd93c8071b9d213271d54a24c4d1a`, identical |
