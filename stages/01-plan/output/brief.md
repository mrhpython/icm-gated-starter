# Brief: the kit's landing page

## Reader

Someone who ships AI-written pages, emails, or documents every week, has met the "folder system for
one agent" idea, and has already shipped something confidently wrong. If the page is right, they
clone the repository and run one week of real work through it.

## The pain, in their words

Confidently wrong. The draft read fine, the number was invented, the citation did not exist, and the
only reader before it went out was the thing that wrote it.

## Facts the draft may state

| Fact | Source |
|---|---|
| ICM is Jake Van Clief and David McDermott's method | arXiv 2603.16021 |
| The kit is Apache-2.0 and needs no email address | `LICENSE`; `README.md` |
| The verify stage runs an independent checker (a separate model, fixed checks, inspectable findings, UNKNOWN when a check cannot complete) | lens-kit README, "Usage" and validator boundary rules |
| The checker can run locally against a local model at no cost | lens-kit README, "Usage" step 2 |
| A keyless hosted demo endpoint exists, a few calls per day per address | api.soulfield.one, `/v1/demo` |
| Our own single-agent drafts shipped defects that a staged line with a gate later caught | api.soulfield.one, "The receipts" |
| We could not show that staging alone beats a bare draft; we publish that | `RECEIPTS.md`, "What we do not claim" |
| The gate does not know your own banned claims; the grep does | `RECEIPTS.md`, "What we do not claim" |
| The seeded mutant must fail every run or the gate is not trusted | `stages/03-verify/CONTEXT.md` |
| A person owns publishing | `stages/04-live/CONTEXT.md` |
| The map, the desk, and the numbered stages are ICM's; the verify stage, its checks, the mutant control, and the gate wiring are ours | `RECEIPTS.md`, "Attribution" |

## Never say

- Any catch rate, accuracy, or false-positive number.
- That folders, staging, or ICM "fix" agents.
- That anything is fully autonomous, set-and-forget, or needs no human at all.
- That the checker guarantees anything.
- Any internal tool, path, or system name that is not in the facts table.

## Done condition

Sections, in order: headline; the pain; what is in the folder (the tree); why a verify stage;
what we do not claim; get it. 500 to 800 words. Plain text, no images, no persona.
