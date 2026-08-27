# One agent, a folder, and a gate

## The part that goes wrong

The draft read fine. The number in the second paragraph was invented. The citation did not exist.
The only reader before it went out was the thing that wrote it, and it was confident.

That is the failure the folder-system idea does not touch. One agent with a map, a desk, and tidy
numbered stages still ships whatever it wrote, because nothing between the draft and the world is
looking with different eyes.

## What is in the folder

```
icm-gated-starter/
├── CLAUDE.md          the map: read first, sends the agent to the desk
├── CONTEXT.md         the desk: the job, the decisions, where we left off
├── SETUP.md           one page
├── MAKE-IT-MINE.md    say the words and the started project becomes yours
├── RECEIPTS.md        what we can show, what we do not claim, the gate runs on this text
└── stages/
    ├── 01-plan/       the brief, already written
    ├── 02-draft/      half written; your first job is to finish it
    ├── 03-verify/     the gate, the banned-claims grep, the mutant that must fail
    └── 04-live/       publishing, which is yours
```

The map, the desk, and the numbered stages are Jake Van Clief and David McDermott's Interpretable
Context Methodology. The last two folders are what we add.

## Why a verify stage

The answer is not a better writer. It is a second reader that is not the writer.

Stage 03 runs an independent checker. It is a separate model from the one that drafted, so it did
not write the sentence it is judging. Its checks are fixed before the draft exists, so the draft
cannot argue with them. Its findings are a file you can open, so you see what it looked at and what
it found instead of taking a verdict on trust. When a check cannot complete, it returns UNKNOWN.
UNKNOWN is not a PASS, and UNKNOWN does not ship.

Beside the checker sits a grep. The checker does not know which claims you have ruled out for your
own project; the grep does, because the list is yours.

Beside the grep sits a mutant: a copy of the draft with defects seeded into it on purpose. The
mutant must fail every run. If it passes, the gate is not trusted that run, whatever it said about
the real draft.

The checker can run locally against a local model at no cost. There is also a hosted demo endpoint,
named in SETUP.md, that needs no key and allows a few calls per day per address, enough to try it
before you run it on your own machine.

We built this because our own single-agent drafts shipped defects that a staged line with a gate
later caught. That is the receipt, and it is the whole reason the last two folders exist.

## What we do not claim

We do not have a number for how well the gate does on your data. We have not run it on your data.
Any number we gave you would be the kind of number this page is about.

We could not show that staging alone beats a bare draft. We publish that.

A PASS from the gate is not clearance. It means the fixed checks found nothing and the mutant failed
as it should. It does not mean the draft is right.

A person owns publishing. Stage 04 is a handback to you, every time.

## Get it

Clone the repository. Read SETUP.md; it is one page. Run one week of your real work through it: the
pages, emails, or documents you would have shipped anyway, each one through the draft stage, then
the gate, then back to you.

The kit is Apache-2.0. There is no email address to give and nothing to sign up for.

If after a week the gate has caught nothing, you will have a findings file for every run that says
so, and you can decide what that is worth. If it caught something, you will have that file too.
Either way, the reader before publish was not the thing that wrote the draft.
