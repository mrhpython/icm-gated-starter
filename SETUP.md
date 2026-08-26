# Setup, one page

## 1. Get the folder

```bash
git clone https://github.com/mrhpython/icm-gated-starter
cd icm-gated-starter
```

## 2. Install the gate

The verify stage calls [lens-kit](https://github.com/mrhpython/lens-kit). It is not on PyPI yet;
install it from its repository.

```bash
git clone https://github.com/mrhpython/lens-kit ../lens-kit
pip install -e ../lens-kit
cp profile.example.yaml profile.yaml
```

Open `profile.yaml` and set `llm.model` to any endpoint. For free and local:
`ollama_chat/llama3` with `api_base: http://localhost:11434` and `api_key_env` removed. The kit
bundles no key and no default vendor; if the environment variable your profile names is unset it
refuses to run rather than guess. A thinking-capable model (Qwen3.x and similar) needs the
`extra_body` block in the profile uncommented, or it spends the whole token budget reasoning and the
gate times out; UNKNOWN, not a pass.

No Python today? The verify stage can use the hosted demo endpoint instead, keyless, a few calls a
day per address, up to about 5,000 characters per call (a long draft plus the mutant seeds can exceed
it; a rejected call is UNKNOWN, never a pass):

```bash
curl -s https://api.soulfield.one/v1/demo -H 'content-type: application/json' \
  -d '{"text": "<paste the draft>"}'
```

## 3. Open your agent in this folder

Any agent that reads files works. Claude Code reads `CLAUDE.md` automatically; for others, paste
`CLAUDE.md` as the first message. It will read `CONTEXT.md` and find the started project.

## 4. Say: finish the draft. Then say: run stages/03-verify

Two prompts, on purpose. Stages are stopping points: the agent works `stages/02-draft`, writes the
file, and stops, because stage 02 tells it not to run the gate on its own work. The second prompt
runs `stages/03-verify`: gate, banned-claims grep, seeded mutant. It writes
`stages/03-verify/output/verdict.md`. (Measured 2026-08-27: given only "finish the draft", one agent
finished the draft and stopped, exactly as stage 02 says; the optional runner below carries the
work across both stages with a separate agent for each, without a second prompt.)

## 5. Read the verdict

Five lines: gate result and its id, grep hits, whether the mutant was caught, whether every fact is
sourced, verdict. PASS with the mutant caught is the only state that reaches `stages/04-live`. Anything else names what failed.

## 6. Publish, or not

`stages/04-live/CONTEXT.md` is a checklist and a handback. The agent stops there. You decide.

## 7. Say: make it mine

`MAKE-IT-MINE.md` turns the started project into your own. Five questions, then the brief is yours,
the draft is empty, the stages and the checks stay.

## Optional: run it headless from Claude Code

```
Workflow({ scriptPath: "<this folder>/runner/pipeline.workflow.js",
           args: { root: "<absolute path to this folder>" } })
```

One schema-checked agent per stage, 02 then 03. It returns the verdict and stops before 04.
