# Stage 01: Plan

Write the brief: who reads the thing, what it must say, what it must never say, and how we will know
it is done. The brief is the only input the draft stage is allowed to work from.

## Inputs

| Source | Where | Why |
|---|---|---|
| The desk | `../../CONTEXT.md`, "What we are building right now" and "Decisions already made" | The job and the constraints |
| Raw material, if any | Whatever the person put in `output/material/` | Facts the draft may use |

## Process

1. Name the reader in one line and what they do next if the page is right.
2. Name the pain in the reader's own words before naming any solution.
3. List every fact the draft may state, each with where it came from. A fact with no source does not
   go in the brief and therefore cannot go in the draft.
4. List the claims that must never appear. Copy them into `../03-verify/checks/banned-claims.txt`
   as grep patterns.
5. Write the done condition: the sections the page must have, in order, and the length.

## Audit

| Check | Pass condition |
|---|---|
| Reader named | One line, one reader, one next action |
| Pain first | The pain paragraph precedes any mention of the kit or the gate |
| Every fact sourced | No fact in the brief without a source line |
| Banned claims copied | Every "never say" line exists in `checks/banned-claims.txt` |
| Done condition | Sections in order and a length range are written |

## Outputs

| Artifact | Where |
|---|---|
| The brief | `output/brief.md` |
| Banned claims | `../03-verify/checks/banned-claims.txt` (appended, not replaced) |

Feeds stage 02. For the started project this stage is already done: read `output/brief.md`.
