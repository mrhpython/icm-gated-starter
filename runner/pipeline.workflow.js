/*
 * icm-gated-starter -- optional headless runner for Claude Code
 * ----------------------------------------------------------------------------
 * Runs stage 02 (draft) then stage 03 (verify) as one schema-checked agent each,
 * reading the stage CONTEXT.md files as the contract. Stops before stage 04:
 * publishing is the person's.
 *
 * RUN IT from a Claude Code session opened in this folder:
 *   Workflow({ scriptPath: "<this folder>/runner/pipeline.workflow.js",
 *              args: { root: "<absolute path to this folder>" } })
 *
 * The runner is a thin executor. The contract is the markdown.
 */

export const meta = {
  name: 'icm-gated-starter',
  description: 'Finish the draft (stage 02), then verify it (stage 03): gate, banned-claims grep, seeded mutant. Stops before publish.',
  phases: [
    { title: 'Draft', detail: 'stage 02: finish the draft from the brief' },
    { title: 'Verify', detail: 'stage 03: gate + grep + mutant; writes verdict.md' },
  ],
}

const ARGS = (typeof args === 'string') ? (() => { try { return JSON.parse(args) } catch (e) { return {} } })() : (args || {})
const ROOT = ARGS.root
if (!ROOT) throw new Error('args.root (absolute path to the kit folder) is required')

const DRAFT_SCHEMA = {
  type: 'object', required: ['file', 'sections', 'word_count', 'marker_removed', 'changes_to_prewritten'], additionalProperties: false,
  properties: {
    file: { type: 'string' },
    sections: { type: 'array', items: { type: 'string' } },
    word_count: { type: 'integer' },
    marker_removed: { type: 'boolean' },
    changes_to_prewritten: { type: 'array', items: { type: 'string' }, description: 'every sentence of the pre-written half you changed or removed, quoted before and after, with the brief row that made you do it; empty if you changed none' },
  },
}

const VERIFY_SCHEMA = {
  type: 'object',
  required: ['gate', 'gate_id', 'grep_hits', 'mutant_caught', 'facts_unsourced', 'verdict', 'findings'],
  additionalProperties: false,
  properties: {
    gate: { type: 'string', enum: ['PASS', 'FAIL', 'UNKNOWN'] },
    gate_id: { type: 'string', description: 'the id the gate returned, or "none"' },
    grep_hits: { type: 'integer' },
    mutant_caught: { type: 'boolean' },
    facts_unsourced: { type: 'integer' },
    verdict: { type: 'string', enum: ['PASS', 'FAIL', 'BLOCKED'] },
    findings: { type: 'array', items: { type: 'string' } },
  },
}

phase('Draft')
const draft = await agent(
`You are Stage 02 (Draft) of the icm-gated-starter pipeline.
Read ${ROOT}/CLAUDE.md, then ${ROOT}/CONTEXT.md, then ${ROOT}/stages/02-draft/CONTEXT.md, and follow its Process and Audit exactly.
Write the finished draft to ${ROOT}/stages/02-draft/output/draft.md. Touch no other file. Do not run the gate.
If you change or remove any sentence in the half that was already written, say so: quote it before and after and name the brief row. A fix nobody can see is a fix nobody can check.
Return file, sections (headings in order), word_count, marker_removed, changes_to_prewritten.`,
  { label: 'draft', phase: 'Draft', schema: DRAFT_SCHEMA })
if (!draft) throw new Error('draft stage returned nothing')
log(`Draft: ${draft.sections.length} sections, ${draft.word_count} words, ${(draft.changes_to_prewritten || []).length} change(s) to the pre-written half`)

phase('Verify')
const verify = await agent(
`You are Stage 03 (Verify) of the icm-gated-starter pipeline. You did not write the draft; find what is wrong with it.
Read ${ROOT}/stages/03-verify/CONTEXT.md and run its Process and Audit exactly: gate (save the JSON), grep (record the count even when 0),
mutant (it MUST fail; if it passes, verdict is BLOCKED), facts (every fact traced to the brief), then write ${ROOT}/stages/03-verify/output/verdict.md
with the five lines. Do not edit the draft. A gate result you cannot read is UNKNOWN, never PASS.
Return gate, gate_id, grep_hits, mutant_caught, facts_unsourced, verdict, findings.`,
  { label: 'verify', phase: 'Verify', schema: VERIFY_SCHEMA })
if (!verify) throw new Error('verify stage returned nothing')
log(`Verdict: ${verify.verdict} (gate ${verify.gate} ${verify.gate_id}, grep ${verify.grep_hits}, mutant ${verify.mutant_caught ? 'caught' : 'MISSED'})`)

return { draft, verify, next: verify.verdict === 'PASS' ? 'stages/04-live is yours: read its CONTEXT.md and decide' : 'not publishable: read stages/03-verify/output/verdict.md' }
