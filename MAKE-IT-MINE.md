# Make it mine

When the person says "make it mine", do this, in order, and nothing else.

1. Ask these five questions, one message, plain list. Wait for the answers.
   1. What is the one page, email, or document you ship most often?
   2. Who reads it, and what do they do next if it is right?
   3. What is the worst thing it could get wrong? (a number, a promise, a name, a date)
   4. Which claims have you decided you will never make in your copy? (one per line)
   5. Where does it get published, and who presses the button?
2. Rewrite `stages/01-plan/output/brief.md` from the answers, in the same headings it has now.
3. Empty `stages/02-draft/output/draft.md` down to its heading and one line: "Draft from the brief."
4. Replace the lines in `stages/03-verify/checks/banned-claims.txt` with the answers to question 4,
   one grep pattern per line, appended below the eight starter patterns, which stay.
5. Rewrite `stages/03-verify/checks/seeds.txt` so the two seeded defects are the two worst things
   from question 3, phrased as sentences the draft might plausibly contain.
6. Delete everything in `stages/03-verify/output/` and `stages/04-live/output/`.
7. Rewrite `CONTEXT.md`: "What we are building right now", "Decisions already made", and "Where we
   left off" from the answers. Leave "The four rules" and "Where the material is" as they are.
8. Do not touch `CLAUDE.md`, the stage `CONTEXT.md` files, `README.md`, `SETUP.md`, or `RECEIPTS.md`.
9. Say: "It is yours. Next: finish the draft."
