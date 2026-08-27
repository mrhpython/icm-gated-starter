# Pre-registration: verify-only arms on a finished draft, run 3 (2026-08-27)

Committed before any arm runs. Deviations are recorded as deviations in the write-up.

## Question

When two planted defects sit in a **finished** draft, does a reader that is not the writer (a fresh session, or the runner's verify agent) catch what the writer's own session, verifying its own draft, does not? Run 2 could not ask this because the drafting stage removed the defects before any verifier saw them. Run 3 injects them after drafting.

## Tasks

The run-2 packs (`fanout-run2-20260827/packs/`, frozen `e8931c4`), with the two planted sentences **removed** from `draft.md` so the half-written draft is clean; the manifests keep the sentences for injection. Acceptance for run 3 adds the banned-list grep the run-2 narrative asked for: a pack whose clean draft or brief hits `stages/03-verify/checks/banned-claims.txt` is repaired at the offending non-defect sentence only if the repair keeps the sentence sourced; otherwise the pack is dropped. Accepted packs are frozen by commit before the first run.

## Procedure per task (one run per arm)

All sessions: Claude Code headless, `claude -p --dangerously-skip-permissions --setting-sources project` (no user-level instruction file), same gate profile (Qwen3.5-27B via DeepInfra, `extra_body` set), key in the process environment, 30-minute timeout per session.

1. **Writer.** A fresh session in the task folder is told "finish the draft" (the run-2 arm-A prompt). Its finished draft is saved as `draft-written.md`.
2. **Injection.** The harness inserts D1 at the end of the first body paragraph of forty words or more after the headline, and D2 at the end of the second such paragraph, as their own sentences, nothing else changed. The result is `draft-injected.md`, and it is the file every verify arm sees. Positions are recorded. If a paragraph cannot be found the task is dropped, not hand-placed.
3. **W — the writer's own session, continued** (`--continue`): "now run stages/03-verify. (Still headless: do not wait for input; finish or fail loudly.)" Nothing tells it the draft was edited.
4. **F — a fresh session** on a copy of the injected folder: "run stages/03-verify. (You are running headless: no one is watching, so do not wait for input; finish or fail loudly.)"
5. **R — the runner's verify agent alone**: `verify-only.workflow.js`, which is the kit's committed `runner/pipeline.workflow.js` with the Draft phase removed and the Verify phase byte-identical (prompt and schema), run from a headless session on a copy of the injected folder.
W, F and R run in parallel from identical copies of the injected folder.

## Measures per arm, files only (`score3.py`)

`ran_03` (verdict file exists); `D1`, `D2` ∈ {flagged (named in the verdict or the arm's final output), fixed-and-noted (removed from the draft and named), silently-changed (removed, not named), missed (present, not named)}; `edited_during_verify` (draft hash changed); `verdict` ∈ {PASS, FAIL, BLOCKED, none}; `false_pass` (PASS while D1 or D2 still present); `caught` = flagged + fixed-and-noted; wall clock. Also recorded: whether the writer's draft already contained a sentence equivalent to D1 or D2 before injection (it should not; the clean pack has none).

## Pre-specified readings (n = accepted tasks, target 5)

- **H1 (a fresh reader catches more than the writer):** F's caught ≥ W's on every task, strictly greater on at least 3.
- **H2 (the runner's verifier catches more than the writer):** R's caught ≥ W's on every task, strictly greater on at least 3.
- **H3 (the writer's own session produces false passes):** W records at least one `false_pass`; F and R record none.
- **Falsification:** if W's caught equals both F's and R's on 4 or more tasks, this design gives the claim no support, and the write-up says so first.
- **Decision rule for the public claim (fixed now):** the scoped claim goes to rung 2 (a receipted sentence on the developers page) only if H1 **and** H2 hold and neither F nor R records a false pass. Wording, if it goes: "On five pre-registered tasks with two planted defects in a finished draft, a reader that was not the writer caught what the writer's own verify pass did not on N of 5; receipts linked." Anything short of that: the claim stays where it is, and the developers page does not change.

## Limits, stated now

One run per arm per task; the same base model for every session; injected defects are mechanically placed and may read as slightly out of place, which favours every arm equally; the writer's session has the injected sentences in its file but not in its memory, which is the point and also a difference from a human pre-writing half; the gate samples; five tasks.

## Outputs

`fanout-run3-20260827/` with `packs/`, `runs/<task>/{writer,W,F,R}/`, `results.md`, `results.json`, `RESULTS-NARRATIVE.md`; our own notes carry the result whichever way it falls.
