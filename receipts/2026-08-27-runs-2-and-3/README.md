# Runs 2 and 3: the pre-registered version, including the one that went against us

The comparison in `../2026-08-27-single-agent-vs-runner/` was one run per arm on one
task. Its own closing line said what would make it a claim: *five or more tasks,
pre-registered, the single-agent arms run in a bare environment.* These are those runs.
Both pre-registrations were committed before the runs started, and both are here
unedited, so you can check the readings against what was promised rather than against
what we chose to report afterwards.

## What is in this folder

| File | What |
|---|---|
| `run2-pre-registration.md` | Written and committed before run 2 started |
| `run2-read-honestly.md` | Run 2 written up, deviations first |
| `run2-results.md` | The mechanical table, read from files by a scorer |
| `run3-pre-registration.md` | Written and committed before run 3 started |
| `run3-read-honestly.md` | Run 3 written up |
| `run3-results.md` | The mechanical table |

## Run 2: the run that lost its object

Five tasks, four arms, no user-level instruction file in scope. It answered one thing
cleanly, five times out of five: **given one prompt, one agent finishes the draft and
stops at the stage boundary.** Every one of them said so in its own words.

It could not answer the question it was built for. The drafting stage repaired the
planted defects before any verifier saw them — stage 02's contract says every fact must
trace to the brief, and a bare agent applied that to the half it had not written. So the
verify arms received drafts the defects had already left. The write-up reports the
pre-registered readings anyway, because they were pre-registered, and says plainly that
they are not the reading.

## Run 3: the falsification clause fired

Run 3 fixed run 2's design: plant the two defects in a *finished* draft, then compare
three verify-only arms — the writer's own session continued, a fresh session, and the
runner's verify agent alone.

**All three arms flagged both defects on all five tasks.** Fifteen FAIL verdicts, no
false pass, no arm edited the draft. The writer's own session did exactly as well as the
separate readers. By the rule fixed before the run, the claim did not move.

The reason is in the files: the check itself did the catching. An injected sentence
contradicted the rest of the draft, so the contradiction lens fired for whoever ran it.
Run 1's observation came from a different kind of defect — one that contradicts nothing
in the draft and only disagrees with the brief — which the check cannot see.

## Where these counts come from, and what is not here

Every count on this page is read from `run2-results.md` and `run3-results.md`, which
were produced by a scorer that reads files and makes no judgements — each cell is a
file's contents, not somebody's summary. Check the counts there first.

What is **not** in this folder: the per-arm raw artifacts — each arm's verdict, its
final draft, its gate JSON, its scrubbed log. Those run to hundreds of files and have
not been published. So the tables here are checkable against each other and against the
pre-registrations, and are not independently checkable against the raw runs by a reader
outside this project. That is a real limit on what these receipts prove, and it is the
reason the run-1 folder next door publishes its arms in full: it was small enough to.

## What we take from all three runs

- One prompt does not cross a stage boundary (5/5). The runner's receipted advantage is
  that it crosses the boundary without a person — not that it catches more.
- The verify stage catches internal contradictions and unsourced comparisons **regardless
  of who runs it** (15/15).
- No false pass in thirty-five verify runs, bare environment.
- Run 1 stays a single observation.

The honest sentence, which is also on the kit page: on defects the check can see, a
writer verifying its own draft did as well as a separate reader, five times out of five.
What stands is the shape, not a score.

## What would move it

A defect the check cannot see: a sentence that agrees with the rest of the draft and
disagrees only with the brief, injected into a finished draft, with pack acceptance
requiring that the injected draft passes the check on its own. That run has not been
done. If it is, its pre-registration will be committed first and its result will land
here whichever way it falls.
