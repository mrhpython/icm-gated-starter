# ICM Gated Starter

The folder system for one AI agent, with the piece the folder system leaves out: a verify stage.

Interpretable Context Methodology (ICM) is Jake Van Clief and David McDermott's method
([arXiv 2603.16021](https://arxiv.org/abs/2603.16021)): one agent, a map file, a desk file, and
numbered stage folders it reads at the right moment. This kit is one instance of it. The stages,
the checks, and the gate wiring are ours. Free, Apache-2.0, no email address required.

## Every folder, named

```
icm-gated-starter/
├── CLAUDE.md                the map: read first, sends the agent to CONTEXT.md
├── CONTEXT.md               the desk: what we are building now, decisions made, where we left off
├── SETUP.md                 one page: install, run, finish the started project
├── MAKE-IT-MINE.md          say "make it mine" and the started project becomes yours
├── RECEIPTS.md              this kit's own gate receipts, and what we do not claim
├── profile.example.yaml     the gate's model profile: point it at any endpoint, local or hosted
├── runner/
│   └── pipeline.workflow.js optional: runs stages 02 and 03 headless as one schema-checked agent each
└── stages/
    ├── 01-plan/             the brief. Already written for the started project.
    ├── 02-draft/            the writing. Half written; your first job is to finish it.
    ├── 03-verify/           the gate. Runs the draft through an independent checker, a banned-claims
    │   └── checks/          grep, and a seeded mutant that must fail. Nothing waits for you here.
    └── 04-live/             publishing. The one place you appear, because publishing is yours.
```

## The mistake each folder prevents

| Folder | Without it |
|---|---|
| `CLAUDE.md` | The agent starts working from whatever it saw last, not from the map. |
| `CONTEXT.md` | Tomorrow's session does not know what yesterday's decided. |
| `01-plan` | The draft answers a question nobody wrote down. |
| `02-draft` | Planning and writing happen in one breath and neither is inspectable. |
| `03-verify` | The draft grades itself. A generator grading its own output is circular; a separate check set run by a separate model is not. |
| `03-verify/checks` | The gate cannot know which claims *you* have ruled out of your own copy. A plain grep can. And a gate nobody has ever seen fail is a gate nobody should trust; the seeded mutant makes it fail on purpose, every run. |
| `04-live` | Something irreversible happens without a person deciding it. |

## Why a verify stage

Unreviewed AI output ships defects. A single agent with tidy folders still writes a confident number
it made up, and still ships it, because the only reader was the writer. The fix is not more agents.
It is one independent check between the draft and the world: a fixed set of checks, run by a
different model from the one that wrote the text, returning inspectable findings (the flagged line,
the check that fired, the reason) and UNKNOWN rather than a confident yes when a check could not
complete. That stage runs without you. You are needed once, at publish.

The checker this kit wires in is [lens-kit](https://github.com/mrhpython/lens-kit), open source under
the same licence, runnable on your own machine against a local model, or against any endpoint you
choose. The receipts for what it catches, and what we do not claim for it, are in `RECEIPTS.md`.

## Start

Read `SETUP.md`. Two minutes if you already have Python.
