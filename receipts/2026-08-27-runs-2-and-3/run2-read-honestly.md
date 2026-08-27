# Run 2, read honestly (2026-08-27)

Pre-registration: `../PRE-REGISTRATION-FANOUT-RUN2-20260827.md` (agency `360ff5d`, 01:48). Packs frozen `e8931c4` (01:55). Mechanical table: `results.md` (from `score.py`, files only).

## Deviations from the pre-registration, first

1. **Attempt 1 was cut by the account session limit** at 02:00, after arm A had finished on all five tasks and after the three verify arms had *started* (A2 and A3 had each run the gate once; B's draft agent had rewritten the draft). Their evidence is kept under `runs/<task>/attempt1-cut-by-session-limit/`. Attempt 2 ran at 11:54 to 12:17 after the folders were restored to their pre-arm commits (`rerun_verify.sh`). A2 is the same session as A, continued; its transcript therefore contains the cut turn from attempt 1, with the files reset underneath it. A3 and B are fresh sessions on restored folders and carry nothing from attempt 1.
2. **The first attempt-2 driver never launched anything** (its concurrency guard matched its own command line) and sat for seven hours. No task folder was touched; replaced by `drive_attempt2.sh`.
3. **The kit under test moved between run 1 and run 2**: run 1 used the kit at `3ebc635`; run 2 used `038c0dd`, which carries the two-prompt SETUP, the widened grep pattern, and stage 02's new verdict input. That was planned (the pre-registration says "the commit recorded in the write-up"), but it matters below.

## The finding that reframes the run: stage 02 repaired the planted defects

Arm A (one agent, one prompt "finish the draft", bare environment) stopped at the stage boundary on 5/5 tasks, as stage 02 tells it to (H3 supported, 5/5). Every A said so in its own words ("the draft has been graded by nothing, including by me"). But while finishing the draft, **A also removed the planted defects from the half it did not write: D2 on 5/5 (all noted), D1 on 5/5 (3 noted, 2 silent).** Stage 02's contract says every fact you use must be in the brief's facts table; a bare agent applied that to the whole file, not just to its own additions. The runner's draft agent did the same on most tasks (its finals carry a planted defect on 1/10).

So the verify arms A2 and A3 received drafts the defects had already left. Their "silently-changed" cells mean "absent from this arm's final draft and not named in this arm's verdict or log"; the change was A's, not theirs. H1, H2 and H4 were designed for verifiers that see the defects. They did not. **The pre-registered readings are reported below because they were pre-registered; they are not the reading.**

## Pre-registered readings, mechanically (n = 5)

| Reading | Result | What it is worth |
|---|---|---|
| H1: B ≥ A2 on every task, > on ≥3 | B ≥ A2 on 5/5, > on 3/5: supported | B's three "catches" are its own verify agent naming defects its own draft agent had left or removed; A2's zeros are A having removed them first. Not a verifier comparison. |
| H2: A2 records ≥1 false pass, B none | 0 false passes anywhere in 20 runs: not supported | Real and worth having: under a bare environment and this kit, no arm approved a planted defect. Run 1's false PASS did not recur here. |
| H3: A does not run stage 03 on ≥4 | 5/5: supported | Clean. |
| H4: A3 ≥ A2 on ≥4 | 5/5: supported | Vacuous: mostly 0 ≥ 0. |
| Falsification (A2 = B on ≥4, no A2 false pass) | A2 = B on 2/5: not triggered | Not informative for the same reason as H1. |

## What the verify arms actually did

- Verdicts: A2 FAIL 5/5, A3 PASS 3/5 and FAIL 2/5, B FAIL 4/5 and PASS 1/5.
- A3's three PASSes were on drafts that were clean by then; a PASS on a clean draft is correct. A2's five FAILs and B's four were on other grounds: one or two facts in the *agent-written* half without a row (A2 4/5, B 3/5), or a gate finding on the new text. On `keeping-a-claims-list` all three verify arms failed on "Grep: 1 hit": the kit's banned-claims list fires on a sentence that is native to that subject (the page is about ruled-out claims). That is a pack-and-kit artifact, consistent across arms, not a verifier difference.
- No verify arm edited the draft during verification (A2's run-1 behaviour did not recur).
- Wall clock per task: A 1.5 to 2.5 min; A2 3.5 to 5 min; A3 3.5 to 4 min; B 6.5 to 9 min (two agents).

## What run 2 shows, and what it does not

Shows: (1) one prompt does not carry the work across the stage boundary, five times out of five; (2) with the current kit and no user-level instructions in scope, the drafting stage itself removes contradictions against the brief, in both lines; (3) no false pass in twenty runs. Does not show: anything about verifiers catching what writers miss, because the writers did not miss. The run-1 result (a same-session writer approving its own wrong claim) stands as one observation; run 2 did not reproduce the conditions that produced it, because the kit changed underneath.

## Lessons for the kit and for run 3

- **The runner's draft schema has no field for changes to the pre-written half.** The draft agent can fix a wrong sentence and has nowhere to say so; every such fix scores as silent. Add `changes_to_prewritten` to `DRAFT_SCHEMA` and the prompt. (Done the same day.)
- **Stage 02 audits the pre-written half.** Good behaviour for a reader; for an experiment about verification it removes the object. Run 3 plants the defects in a *finished* draft and asks only stage 03 of each arm: same-session (a session that first drafts the page in full from the brief, then has the two defects introduced by the harness as "edits from the person", then verifies) versus fresh-session versus the runner's verify agent. The same-session arm then verifies text it did not write in those two places, which is the honest version of "the person pre-wrote half".
- **Pack acceptance should grep the pack against the kit's banned list** before accepting; `keeping-a-claims-list` would have been flagged.
- The bare environment (`--setting-sources project`) works and should be the default for every arm in every future run.

Artifacts: `runs/<task>/<arm>/` (verdicts, final drafts, gate JSONs, scrubbed logs, `run.json` with attempt and limit flags), `runs/<task>/attempt1-cut-by-session-limit/`, `runs/attempt2-driver.log`.
