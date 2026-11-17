# Agent guidelines

<!-- template-only:start -->

## Template maintenance — remove when adopting this template

Before maintaining this repository as a reusable template or turning it into a project, read [docs/template-maintenance.md](docs/template-maintenance.md).
<!-- template-only:end -->

## Working approach

- Read the relevant code, its callers, and project configuration before editing. Follow existing conventions and preserve unrelated changes.
- Reuse before building: search existing components, hooks, utilities, types, platform APIs, and installed dependencies before introducing another implementation. Don't reinvent the wheel.
- Extend an existing component when the responsibility fits. Extract shared code when it represents the same concept; a little duplication is preferable to coupling unrelated behavior.
- KISS and YAGNI: choose the smallest complete solution; add abstractions, dependencies, and extension points only for a demonstrated current need.
- Apply SOLID pragmatically: keep responsibilities cohesive, interfaces focused, and prefer composition. Add boundaries to isolate real complexity.
- Fix root causes, update affected callers, and remove code made obsolete by the change. Keep unrelated refactoring separate.

## Code and UI

- Keep React rendering pure and updates immutable. Keep state near its consumers and calculate derived values during rendering.
- Handle user actions in event handlers. Use effects to synchronize with external systems, cleaning up subscriptions, listeners, and other resources when needed.
- React Compiler is configured; justify manual memoization with a measured issue or a specific integration constraint.
- Model meaningful states explicitly in TypeScript. Narrow unknown input at trust boundaries and prefer checked types over assertions or `any`; trust validated internal data.
- Reuse the shadcn/Base UI primitives in `src/components/ui`, preserving their interaction, focus, and accessibility behavior. Keep reusable visual variants in the primitives and layout adjustments at their call sites.
- Use the existing `cn` utility, semantic theme tokens, and statically detectable Tailwind classes. Follow the configured lint rules and their scoped exceptions.
- Extend global design decisions through the tokens in `src/index.css`. Follow the existing CSS-based Tailwind setup.
- Preserve semantic HTML, accessible names, labels, keyboard interaction, focus, and reduced-motion support. Implement loading, empty, error, and success states where relevant.
- Validate untrusted data when it enters application logic. Keep secrets out of client code and client-exposed environment variables. Surface actionable errors instead of silently swallowing failures.

## Guidance

- Before implementing or changing HTML, CSS, or client-side JavaScript, use the modern-web-guidance skill to find and apply relevant guidance. Adapt examples to React, Tailwind, and existing accessible components.
- If the skill is unavailable, follow the installation instructions in [README.md](README.md).
- Respect documented browser targets. When none are defined, follow the skill's compatibility defaults and fallback recommendations; do not assume an undocumented browser support policy.
- Review `pnpm web:check` findings in context: the scan covers only a subset of the guidance and can flag legitimate fallbacks.

## Definition of done

- Verify the requested behavior and affected usages. Check that the solution reuses available building blocks and introduces no avoidable competing implementation.
- For documentation-only changes, run `pnpm format:check`. For application code, run `pnpm check` and `pnpm build`; the build also checks TypeScript.
- Add or update behavior tests for meaningful new logic and bug fixes when the risk warrants it. Assert observable outcomes rather than component internals; cover relevant failure cases.
- Run one unit test file with `pnpm exec vitest run src/path/to/file.test.tsx`, or one browser test file with `pnpm test:e2e e2e/path.spec.ts`.
- For UI changes, inspect the changed flow in a browser, including relevant viewport sizes, themes, keyboard behavior, and focus. Run affected end-to-end tests with `pnpm test:e2e`.
- For structural React changes, also run the CI React Doctor check: `pnpm exec react-doctor --blocking warning --no-score`.
- Choose checks proportionate to the change. `pnpm check` does not include the build, end-to-end tests, or React Doctor. The configured browser tests cover desktop Chromium, not every supported browser or accessibility requirement.
- Investigate failed checks and warnings. Do not weaken checks merely to obtain a passing result; explain any necessary exception and its impact.
- Before finishing, review the diff for unintended changes. Report what changed, which checks actually ran, and any remaining limitation; explicitly disclose checks that could not be completed.
