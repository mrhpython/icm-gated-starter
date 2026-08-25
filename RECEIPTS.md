# Receipts

What we can show, what we cannot, and the gate runs on this kit's own text.

## What we can show

Unreviewed AI output ships defects. We kept the receipts: across three model generations, our own
single-agent drafts shipped an arithmetic error a human reader had already missed, an invented
citation, a price that contradicted its own pricing brief, a silently truncated deliverable, and a
list of real third-party names that a secrets scanner had passed. A staged line with an independent
gate caught each of those before it shipped. The catching is tested: planted fakes get caught,
mutated inputs get caught. The long form, each instance with its date, its number and its
denominator, is the section titled "The receipts" on [api.soulfield.one](https://api.soulfield.one/).

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
the gate returned. A dated PASS is a receipt, not clearance: the text is re-gated before every
publish, because gates and models drift.

| Date | Text | Gate id | Grep hits | Mutant caught | Verdict |
|---|---|---|---|---|---|
| 2026-08-25 | README.md | 27685647 | 0 | not run (kit text, not a draft) | PASS, one warning: the gate reads the 2026 arXiv id as a future date |
| 2026-08-25 | RECEIPTS.md (pre-edit text) | dc4bf71d | 0 | not run | PASS, three warnings: author names read as personal data; two wording points, both fixed in this text after the run |
| pending | SETUP.md, draft.md (once finished) | | | | |

## Attribution

Interpretable Context Methodology: Jake Van Clief and David McDermott,
[arXiv 2603.16021](https://arxiv.org/abs/2603.16021). The map, desk, and numbered stages are their
shape. The verify stage, the checks folder, the mutant control, and the gate wiring are ours.
