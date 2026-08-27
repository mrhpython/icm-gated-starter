# One agent in the folder vs the runner, on this kit's own draft (2026-08-27)

One run per arm. One task. Read the limits before the table.

## Setup

Every arm started from the same folder: this kit at commit `3ebc635`, the state it was published in, with the draft half written. That half, written by a person, carried two defects on purpose left as they were: line 29, *"The last two folders are what we add"* (wrong: only `03-verify` is ours; `04-live` belongs to the method), and lines 8-9, *"easier to follow than a swarm"* (a comparison with no row in the brief's facts table). Same gate profile in every arm (`profile.yaml`, Qwen3.5-27B, `extra_body` set). Same agent in every arm: Claude Code, run headless (`claude -p`, permissions skipped). The person running it had their own global instruction file loaded, which every arm saw; a reader's agent would not have it (see limits).

## Arms

| Arm | What it was | Prompt(s) | Ran stage 03? | Caught line 29 (wrong) | Caught lines 8-9 (unsourced) | Edited the draft during verify | Final verdict |
|---|---|---|---|---|---|---|---|
| A | one agent, one prompt | "finish the draft" | no; finished stage 02 and stopped, as stage 02 tells it to | no | no | no | none written |
| A2 | the same session as A, continued | "now run stages/03-verify" | yes, three times | no; kept it, repeated it on line 53, and for one revision put the arXiv id in front of it | yes | yes, three revisions, against stage 03's "do not edit the draft" | PASS, "Facts: all sourced" |
| A3 | a fresh session on A's draft | "run stages/03-verify" | yes, once | yes | no | no; hash checked before and after | FAIL |
| B | the runner: one draft agent, then a separate verify agent | none; the script | yes, by the second agent | yes | yes | no | FAIL |

Arm B is the runner's run 1 from the day before, recorded in `../2026-08-26-draft-run1-*`. Its draft agent worked from the same half-written draft.

## What is in this folder

- `armA-one-prompt/draft-as-finished.md`: the draft as arm A left it, both defects intact.
- `armA2-same-session/verdict-run3-final.md`: the verdict A2 ended on. `draft-final.md`: the draft it ended on. `draft-edits-during-verify.diff`: what it changed between its first and third verify runs. `gate-run3.json`, `mutant-gate-run3.json`: the gate's output on its final draft and on the mutant.
- `armA3-fresh-session/verdict.md`, `gate.json`, `mutant-gate.json`.

Nothing here is edited. Paths are shortened to `<kit folder>`.

## What we take from it

- Given one prompt, one agent stops at the stage boundary. That is the method working as designed, and it means the single-agent path does not verify unless a person says so. SETUP step 4 was wrong about this and now says two prompts.
- The session that wrote the draft, asked to verify it, ended on PASS with the wrong sentence kept and doubled. Each of its three runs was honest by its own lights. That is the failure this kit exists for, on this kit's own text.
- A fresh session, same model, same folder, no runner, found the wrong sentence and left the file alone.
- The runner found both defects and did not need a second prompt.

## What we do not take from it

No number. No general claim that separate agents beat one agent. One run per arm cannot carry that. One task, the kit's own page. The same base model in every arm, so nothing here is about models. The runner's arm had a person's global instruction file in scope that mentions verify stages; so did every other arm, which if anything helped the single-agent arms. A2's three revisions were its own choice, not a protocol. The gate samples: A3's draft run returned no findings, and the same draft's mutant run flagged two unchanged sentences.

What would make it a claim: five or more tasks, pre-registered, the single-agent arms run in a bare environment, the same design with an agent that is not Claude.
