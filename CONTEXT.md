# The desk

## What we are building right now

A one-page plain-text landing page for this kit. The brief is written (`stages/01-plan/output/brief.md`).
The draft is half written (`stages/02-draft/output/draft.md`). The next job is to finish the draft,
then run it through the gate.

## Decisions already made

- Plain page, no images, no persona. The argument is the folder tree and the receipts.
- Attribution stays: ICM is Jake Van Clief and David McDermott's. We add the verify stage.
- No email gate. The kit is a public repository; the page links to it.
- No number about how well the gate performs on the reader's data. We do not know it and say so.
- The page is published only after it passes the same gate it describes.

## Where the material is

| What | Where |
|---|---|
| The brief | `stages/01-plan/output/brief.md` |
| The draft | `stages/02-draft/output/draft.md` |
| Gate results | `stages/03-verify/output/` |
| Banned claims for this project | `stages/03-verify/checks/banned-claims.txt` |
| Seeded defects for the mutant | `stages/03-verify/checks/seeds.txt` |
| Publish checklist | `stages/04-live/CONTEXT.md` |

## The four rules

1. One stage, one job. A stage that writes does not verify. A stage that verifies does not write.
2. Plain text is the interface. Every output is a file a person can open and edit before the next stage.
3. Quality is a stage, not a person. Nothing in stages 01 to 03 waits for a human.
4. Publishing is the person's. Stage 04 is a handback, every time.

## Where we left off

2026-08-25: brief written, draft half written, gate wired, mutant seeds written.
2026-08-26: the runner took the draft through 02 and 03 twice. Run 1: FAIL (gate failed one lens, two
facts in the pre-written half had no source, one was wrong). Run 2, revised from that verdict: PASS.
Both runs are under `receipts/`. The draft was then reset to half written so the started project is
still yours. Next: finish the draft (`stages/02-draft/CONTEXT.md`), then run `stages/03-verify`.
