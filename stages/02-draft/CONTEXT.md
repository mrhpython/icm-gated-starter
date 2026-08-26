# Stage 02: Draft

Write the thing, from the brief and nothing else. This stage does not verify; it does not decide what
is true. It writes what the brief allows, in the order the brief sets.

## Inputs

| Source | Where | Why |
|---|---|---|
| The brief | `../01-plan/output/brief.md` | The reader, the pain, the facts, the never-say list, the done condition |
| The current draft | `output/draft.md` | Continue from where it stops; do not restart it |
| The last verdict, if any | `../03-verify/output/verdict.md` | On FAIL, the lines it names are the work; revise those, nothing else |

## Process

1. Read the brief in full. Read the draft as it stands. Find the line "YOUR TURN" if it is there.
   If `../03-verify/output/verdict.md` exists and says FAIL, read it too: each finding names a line;
   revise those lines against the brief, leave the rest, and do not argue with the gate in the text.
2. Write the remaining sections in the brief's order. Each fact you use must be in the brief's facts
   table; if a sentence needs a fact that is not there, cut the sentence, do not invent the fact.
3. Name the pain before the solution. No section leads with the kit or the gate.
4. Keep the never-say list beside you. Do not write around a banned claim with a synonym; drop the
   idea.
5. Stay inside the length. Remove the "YOUR TURN" marker and its section list when the draft is
   complete.
6. Write the file. Then stop. Do not run the gate yourself; stage 03 does that.

## Audit

| Check | Pass condition |
|---|---|
| Sections | Every section in the brief's done condition is present, in order |
| Facts | Every stated fact is in the brief's facts table |
| Pain first | The pain section precedes the first mention of the kit or the gate |
| Never-say | None of the never-say ideas appear, under any wording |
| Length | Inside the brief's range |
| Marker removed | No "YOUR TURN" left in the file |
| Verdict answered | When a FAIL verdict existed, every line it named has changed |

## Outputs

| Artifact | Where |
|---|---|
| The draft, complete | `output/draft.md` |

Feeds stage 03.
