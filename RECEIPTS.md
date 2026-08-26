# Receipts

What we can show, what we cannot, and the gate runs on this kit's own text.

## What we can show

Unreviewed AI output ships defects. We kept the receipts: across three model generations, our own
single-agent drafts shipped an arithmetic error a human reader had already missed, an invented
citation, a price that contradicted its own pricing brief, a silently truncated deliverable, and a
list of real third-party names that a secrets scanner had passed. A staged line with an independent
gate caught each of those before it shipped. The catching is tested: planted fakes get caught,
mutated inputs get caught. The long form is the section titled "The receipts" on [api.soulfield.one](https://api.soulfield.one/).

## What we do not claim

- **That the folder tree makes an agent reliable.** We tested a bare single-shot draft against a
  staged one on the same task and could not show a difference; the bare arm passed the gate and the staged arm failed it,
  on one task class, with confounds both ways. We publish that because a result we hide is a claim
  we cannot make. The staged line earns its keep at the verify stage, not at the folder tree.
- **A catch rate for your data.** The denominator that matters there is yours. The pair we publish is
  measured on our own holdout and carries its date; we have no measurement of it on anyone else's
  data, so we do not quote one.
- **That a PASS is publish-clearance.** The gate does not know which claims you have ruled out of your
  own copy; the banned-claims grep in `stages/03-verify/checks` exists because of a draft that scored
  a clean pass while carrying a claim we had ruled out. Both checks, every run.
- **That the gate is autonomous.** It is a stage you run. A person owns publishing.

## This kit's own gate runs

The kit's public text (this file, `README.md`, `SETUP.md`, the finished draft) goes through
`stages/03-verify` before it is published, and the results are recorded here, dated, with the ids
the gate returned and the full responses committed under `receipts/`. A dated PASS is a receipt, not clearance: the text is re-gated before every
publish, because gates and models drift. A FAIL is a receipt too, and the ones below are kept as they
fell; what the verify stage found in our own text is the point of the stage.

| Date | Text | Gate id | Grep hits | Mutant caught | Verdict |
|---|---|---|---|---|---|
| 2026-08-25 | README.md | 27685647 (`receipts/2026-08-25-readme.json`) | 0 | not run (kit text, not a draft) | PASS, one warning: the gate reads the 2026 arXiv id as a future date |
| 2026-08-25 | RECEIPTS.md, pre-edit text | dc4bf71d (`receipts/2026-08-25-receipts.json`) | 0 | not run | PASS, three warnings: author names read as personal data; two wording points, both fixed in this text after the run |
| 2026-08-26 | SETUP.md | 3cb43b54 (`receipts/2026-08-26-setup.json`) | 0 | not run | PASS, two warnings: the demo limits and Claude Code's map-file behaviour read as unverified; both are documented facts |
| 2026-08-26 | draft.md, finished by the runner (run 1; `receipts/2026-08-26-draft-run1.md`) | none: CLI run, `receipts/2026-08-26-draft-run1-gate.json` | 0 | caught (13 findings, both seeds named; `receipts/2026-08-26-draft-run1-mutant-gate.json`) | FAIL: extrapolation lens failed on two unquoted lines; two truth warnings asking for the source to be named on the page; two facts unsourced, both in the half we pre-wrote, one of them wrong ("the last two folders are what we add"; only the verify stage is). Verdict: `receipts/2026-08-26-draft-run1-verdict.md` |
| 2026-08-26 | draft.md, revised from the run-1 verdict (run 2; `receipts/2026-08-26-draft-run2.md`) | none: CLI run, `receipts/2026-08-26-draft-run2-gate.json` | 0 | caught by both legs (11 gate findings, both seeds named; grep 2 hits after pattern 5 was widened; `receipts/2026-08-26-draft-run2-mutant-gate.json`) | PASS: gate passed with no findings, all facts traced. Verdict: `receipts/2026-08-26-draft-run2-verdict.md`. The shipped draft was then reset to half written, so the started project is still yours to finish |
| 2026-08-26 | the kit page at api.soulfield.one/kit (`receipts/2026-08-26-kit-page.txt`) | none: CLI run, `receipts/2026-08-26-kit-page.json` | 0 | not run (page text, not a draft) | FAIL by the gate, 4 findings, each adjudicated: the 2026 arXiv id read as a future date (the document exists at the URL); the footer contact email read as personal data (it is the business contact on every page); two extrapolation findings naming numerical claims in sentences that contain no number. Two earlier runs on this text found a real defect, fixed before this run: the bare-vs-staged result stated without its source or its qualifier |

## Attribution

Interpretable Context Methodology: Jake Van Clief and David McDermott,
[arXiv 2603.16021](https://arxiv.org/abs/2603.16021). The map, desk, and numbered stages are their
shape. The verify stage, the checks folder, the mutant control, and the gate wiring are ours.
