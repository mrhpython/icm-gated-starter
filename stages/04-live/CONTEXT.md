# Stage 04: Live

The one place a person appears. Publishing is irreversible, so the agent prepares and stops; the
person decides.

## Handback

| Before step | Authority at stake | The person confirms |
|---|---|---|
| 3 | Irreversible action: publishing | That this draft, with this verdict, goes live where the brief says |

## Inputs

| Source | Where | Why |
|---|---|---|
| The verdict | `../03-verify/output/verdict.md` | Only PASS reaches this stage |
| The draft | `../02-draft/output/draft.md` | The text that was verified, byte for byte |
| The desk | `../../CONTEXT.md` | Where it is published and who presses the button |

## Process

1. Read the verdict. If its last line is not `Verdict: PASS`, stop and say so. Do not continue.
2. Prepare the publish: copy the draft to `output/<name>-<date>.md`, and write `output/PUBLISH.md`
   with the destination from the desk, the verdict's five lines, and the gate id. Nothing is
   published yet.
3. **Hand back.** Say: "Ready to publish. Verdict PASS, gate id <id>, mutant caught. Destination:
   <where>. Say publish to proceed." Then wait. Do nothing until the person answers.
4. On "publish": do the publish action the desk names, and nothing else.
5. Write "Where we left off" in `../../CONTEXT.md`: what was published, where, when, gate id.

## Audit

| Check | Pass condition |
|---|---|
| Verdict gate | Stage entered only on `Verdict: PASS` |
| Byte-identical | The published text equals the verified draft |
| Handback honoured | No publish action before the person's word |
| Desk updated | "Where we left off" names the publish and the gate id |

## Outputs

| Artifact | Where |
|---|---|
| Publish record | `output/PUBLISH.md` |
| The published copy | `output/<name>-<date>.md` |

Ends the run.
