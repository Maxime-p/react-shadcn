# Template maintenance

This file applies to the reusable template, not to applications created from it. Read it before changing the template baseline or adopting it as a project. Shared application development rules live in [AGENTS.md](../AGENTS.md).

## Maintain the template

- Keep a minimal, working starting point for Vite, React, TypeScript, Tailwind, and shadcn/Base UI. Add a baseline dependency only when its value is shared across typical projects; keep project-specific features in the applications that need them.
- Preserve a simple install, start, check, and build workflow. Avoid requiring credentials or external services to run the starter.
- Keep examples small and working. When changing starter behavior, update the corresponding unit and browser tests rather than leaving assertions tied to obsolete demo content.
- Keep components, theme tokens, lint rules, scripts, documentation, and CI consistent. Verify API assumptions against the versions in package.json and the lockfile; keep version numbers out of these instructions.
- For baseline code or tooling changes, run the application checks and build from AGENTS.md, affected browser tests, and any CI checks affected by the change. Confirm that a fresh checkout installs with `pnpm install --frozen-lockfile` when dependencies or setup change.
- Evaluate changes both as template maintenance and as a fresh project's starting point. Check that adoption instructions still remove all template-specific guidance without losing shared quality rules.

## Turn the template into a project

Follow the checklist in [README.md](../README.md#adopt-this-template). Treat adoption as an explicit task: an ordinary feature request is not authorization to delete the template guidance.

## Maintain agent instructions

- Keep durable development instructions in AGENTS.md and template-specific instructions here. The marked `template-only` block in AGENTS.md is the removable link between them.
- Record concrete project decisions, recurring mistakes, and executable checks. Keep general engineering preferences brief and avoid duplicating details already enforced by configuration.
- Add a separate context document only for a real subsystem or procedure. Reference it with a clear condition describing when the agent must read it; a linked file is not automatically loaded by every agent.
- Use lint, tests, and CI for requirements that need automated enforcement. Instructions describe intent and workflow; they do not guarantee compliance.
- Evaluate instruction changes on representative tasks: check adherence, unnecessary work, stale commands, and contradictory rules. Improve them from observed failures rather than growing a speculative checklist.

## Reference sources

These sources inform the instruction structure; they are not additional instructions that agents must load on every task.

- [AGENTS.md format](https://agents.md/): portable repository instructions and examples.
- [OpenAI: custom instructions with AGENTS.md](https://developers.openai.com/codex/guides/agents-md/): Codex discovery, scope, and instruction hierarchy. Discovery rules are tool-specific.
- [Anthropic: best practices](https://code.claude.com/docs/en/best-practices#keep-claudemd-short): concise project context, scoped rules, procedures in skills, and enforcement through tools. CLAUDE.md loading mechanisms do not automatically apply to AGENTS.md.
- [GitHub: lessons from over 2,500 repositories](https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/): concrete commands, boundaries, examples, and iteration. These are observed patterns, including specialized agents, rather than a controlled effectiveness study.
- [Evaluating AGENTS.md](https://arxiv.org/abs/2602.11988): empirical evidence that context files do not generally improve task success in the evaluated settings and can increase cost. Use it to question unnecessary context, not to assume instructions are universally ineffective.
