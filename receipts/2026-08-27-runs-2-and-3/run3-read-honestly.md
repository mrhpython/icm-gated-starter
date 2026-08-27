# Run 3, read honestly (2026-08-27)

Pre-registration: `../PRE-REGISTRATION-FANOUT-RUN3-20260827.md` (agency `02558a9`, 13:03). Packs and tooling frozen `b0866fa` (13:05). Ran 13:05 to 13:30, no session-limit hits, no deviations. Mechanical table: `results.md` (`score3.py`, files only).

## The falsification clause triggered. That is the first line.

W (the writer's own session, continued), F (a fresh session) and R (the runner's verify agent alone) each flagged both injected defects on all five tasks. Fifteen FAIL verdicts, zero false passes, zero edits during verify, W = F = R on 5/5. H1, H2 and H3 are not supported. By the decision rule fixed before the run, **the public claim does not move and the developers page does not change.**

## Why every arm caught everything: the check did the catching

`gate.json` is `passed: false` in all fifteen runs. The injected sentences were catchable by the check by itself, before any facts step: the writer's finished draft already stated the correct fact from the brief elsewhere in the page, so the injected D1 contradicted the draft *internally* and the contradiction lens fired (critical) on every arm; the injected D2 was a comparative with nothing behind it and the truth lens fired on it. Any arm that runs the check is handed the findings. The facts step then confirmed them against the brief. Nothing in that path depends on who is reading.

The writer's session did not notice the sentences were not its own. It treated them as two unsourced lines in its draft, quoted them, named the rows they contradict, and handed back to stage 02 ("stage 03 verifies and does not write the draft"). It did not restore its own text and did not argue. That is correct behaviour and it is the same behaviour F and R showed.

## What this means for the claim

- Run 1's observation (the same session approving its own wrong sentence) came from a defect the check *cannot* catch: "the last two folders are what we add" contradicts nothing in the draft and nothing the gate can know; only a reading against the brief's attribution row, or against the kit's own files, finds it. That is a judgment defect. Run 3 planted mechanical defects, and the mechanical check equalised the arms.
- Run 2 planted judgment-level defects in the pre-written half, and the drafting stage removed them before verification.
- So across three runs: one observation of self-approval on a judgment defect (run 1); zero on mechanical defects (run 3, 15 runs); the judgment-defect verify comparison has not yet been run cleanly (run 2 lost its object). The falsification here is of the design as much as of the claim, and the honest sentence is: **on defects the check can see, a writer verifying its own draft did as well as a separate reader, five times out of five.**

## What stands, receipted

1. One prompt does not cross a stage boundary (run 2, 5/5). The runner's receipted advantage is unattended stage crossing, not catch quality.
2. The verify stage as shipped catches internal contradictions and unsourced comparatives at the check, regardless of who runs it (run 3, 15/15).
3. No false pass in 35 verify runs across runs 2 and 3, in a bare environment.
4. Run 1 stands as a single observation with two confounds (older kit, user-level instructions in scope).

## Run 4, if the judgment question is worth one more evening

Plant defects the check cannot see: a sentence that agrees with the rest of the draft and disagrees only with the brief (a wrong attribution, a wrong count that appears once, a source named for a fact the brief sources elsewhere), injected into the finished draft as here, verify-only arms as here. Acceptance for a pack: the injected draft must pass the check on its own (`passed: true`) so that only the facts step can catch the defect. If W then matches F and R again, the design position is what remains: a separate reader is the shape we ship because the writer cannot be the judge of its own judgment, and we could not show it fails at that on these tasks.

Artifacts: `runs/<task>/{writer,W,F,R}/` (verdicts, gate JSONs, final drafts, scrubbed logs, `run.json`), `runs/<task>/draft-written.md` and `draft-injected.md`, `injection.json` per task.
