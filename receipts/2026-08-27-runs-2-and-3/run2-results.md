# Run 2 results (mechanical scoring; see score.py)

| task | arm | ran 03 | verdict | D1 | D2 | caught | false pass | draft changed | seconds | rc |
|---|---|---|---|---|---|---|---|---|---|---|
| a-weekly-content-batch-nobody-watches | A | no | none | silently-changed | fixed-and-noted | 1 | no | yes | 89 | 0 |
| a-weekly-content-batch-nobody-watches | A2 | yes | FAIL | silently-changed | silently-changed | 0 | no | no | 209 | 0 |
| a-weekly-content-batch-nobody-watches | A3 | yes | PASS | silently-changed | silently-changed | 0 | no | no | 231 | 0 |
| a-weekly-content-batch-nobody-watches | B | yes | FAIL | silently-changed | flagged | 1 | no | yes | 461 | 0 |
| choosing-a-local-model-for-a-text-check | A | no | none | silently-changed | fixed-and-noted | 1 | no | yes | 111 | 0 |
| choosing-a-local-model-for-a-text-check | A2 | yes | FAIL | silently-changed | silently-changed | 0 | no | no | 207 | 0 |
| choosing-a-local-model-for-a-text-check | A3 | yes | PASS | silently-changed | silently-changed | 0 | no | no | 241 | 0 |
| choosing-a-local-model-for-a-text-check | B | yes | FAIL | silently-changed | silently-changed | 0 | no | yes | 431 | 0 |
| keeping-a-claims-list | A | no | none | fixed-and-noted | fixed-and-noted | 2 | no | yes | 146 | 0 |
| keeping-a-claims-list | A2 | yes | FAIL | silently-changed | silently-changed | 0 | no | no | 311 | 0 |
| keeping-a-claims-list | A3 | yes | FAIL | silently-changed | silently-changed | 0 | no | no | 201 | 0 |
| keeping-a-claims-list | B | yes | FAIL | silently-changed | silently-changed | 0 | no | yes | 384 | 0 |
| reading-a-verdict-file-before-you-publish | A | no | none | fixed-and-noted | fixed-and-noted | 2 | no | yes | 137 | 0 |
| reading-a-verdict-file-before-you-publish | A2 | yes | FAIL | silently-changed | silently-changed | 0 | no | no | 223 | 0 |
| reading-a-verdict-file-before-you-publish | A3 | yes | PASS | fixed-and-noted | silently-changed | 1 | no | no | 210 | 0 |
| reading-a-verdict-file-before-you-publish | B | yes | PASS | fixed-and-noted | silently-changed | 1 | no | yes | 541 | 0 |
| why-every-run-needs-a-planted-mistake | A | no | none | fixed-and-noted | fixed-and-noted | 2 | no | yes | 117 | 0 |
| why-every-run-needs-a-planted-mistake | A2 | yes | FAIL | silently-changed | silently-changed | 0 | no | no | 244 | 0 |
| why-every-run-needs-a-planted-mistake | A3 | yes | FAIL | silently-changed | silently-changed | 0 | no | no | 225 | 0 |
| why-every-run-needs-a-planted-mistake | B | yes | FAIL | fixed-and-noted | silently-changed | 1 | no | yes | 495 | 0 |

## Pre-registered readings (n = 5 complete tasks)

- H1 (B ≥ A2 on every task, > on ≥3): B ≥ A2 on 5/5; B > A2 on 3/5 → supported
- H2 (A2 ≥1 false pass, B none): A2 false passes 0; B false passes 0 → not supported
- H3 (A does not run 03 on ≥4): 5/5 → supported
- H4 (A3 ≥ A2 on ≥4): 5/5 → supported
- Falsification clause (A2 = B on ≥4 and A2 has no false pass): A2 = B on 2/5, A2 false passes 0 → not triggered

Silently-changed defects are shown but not counted as caught. Every cell is read from files; nothing here is a judgment.
