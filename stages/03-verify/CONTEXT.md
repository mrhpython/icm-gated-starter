# Stage 03: Verify

Three checks on the finished draft, none of them done by the writer, none of them waiting for a
person. A gate result you cannot read is UNKNOWN. UNKNOWN never passes.

## Inputs

| Source | Where | Why |
|---|---|---|
| The draft | `../02-draft/output/draft.md` | The text under test |
| The brief | `../01-plan/output/brief.md` | The facts table and the never-say list |
| Banned claims | `checks/banned-claims.txt` | One grep pattern per line; claims the person has ruled out |
| Mutant seeds | `checks/seeds.txt` | Two sentences that must make the gate fail |
| Gate profile | `../../profile.yaml` | Which model runs the checks |

## Process

1. **Gate.** Run the independent checker on the draft and keep the JSON:
   `lens-kit validate ../02-draft/output/draft.md --profile ../../profile.yaml --json > output/gate.json`
   (or POST the draft to the hosted demo endpoint named in `SETUP.md` and save the response).
   Read the top-level `passed` and `halted`. `passed` true and `halted` false is a pass. `passed`
   false is a fail: copy every finding (flagged line, check name, reason) into the verdict. A
   missing or null `passed`, an error, or a timeout is UNKNOWN: treat as not passed and say why.
2. **Grep.** `grep -E -n -i -f checks/banned-claims.txt ../02-draft/output/draft.md`. Any hit is a
   fail, with the line quoted. Record "0 hits" when clean. The gate does not know this list; only
   the grep does.
3. **Mutant.** Copy the draft to `output/mutant.md`. Insert the two sentences from `checks/seeds.txt`
   as new paragraphs after the first heading. Run steps 1 and 2 on the mutant. It MUST fail at
   least one of them. If the mutant passes both, the gate is not trustworthy today: verdict is
   BLOCKED, whatever the draft scored, and the fix is to the gate, not to the draft.
4. **Facts.** For each fact in the draft, find its row in the brief's facts table. A fact with no
   row is a fail.
5. **Verdict.** Write `output/verdict.md` with exactly these lines, then the findings:
   `Gate: <PASS|FAIL|UNKNOWN> id <id or none>` / `Grep: <n> hits` / `Mutant: <caught|MISSED>` /
   `Facts: <all sourced|n unsourced>` / `Verdict: <PASS|FAIL|BLOCKED>`.
   PASS requires: gate pass, 0 grep hits, mutant caught, all facts sourced. Anything else is FAIL,
   or BLOCKED when the mutant was missed or the gate returned UNKNOWN.
6. Do not edit the draft. Findings go back to stage 02 through the verdict file.

## Audit

| Check | Pass condition |
|---|---|
| Gate read, not guessed | `output/gate.json` exists and the verdict quotes its `passed` and id |
| Grep recorded | Patterns run against the draft and the mutant; hit count written even when 0 |
| Mutant failed | At least one check failed on `output/mutant.md` |
| Facts traced | Every fact in the draft has a row in the brief |
| Verdict honest | The five lines match the results; UNKNOWN is never written as PASS |
| Draft untouched | The draft file is byte-identical before and after this stage |

## Outputs

| Artifact | Where |
|---|---|
| Gate result | `output/gate.json` (and `output/mutant-gate.json`) |
| The mutant | `output/mutant.md` |
| The verdict | `output/verdict.md` |

Feeds stage 04 only on PASS. On FAIL, stage 02 reads the verdict and revises. On BLOCKED, the person
reads it: the gate needs attention before any draft can be trusted.
