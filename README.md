# React shadcn template

<!-- template-only:start -->

## Adopt this template

This repository has two instruction layers: [AGENTS.md](AGENTS.md) contains development rules to keep in your project; [template maintenance](docs/template-maintenance.md) contains rules for maintaining the reusable starter.

When explicitly turning the starter into an application:

1. Replace the package name, README introduction, demo content, and matching test assertions with the project's identity and behavior. Update the lockfile through pnpm if package metadata changes require it.
2. Adapt AGENTS.md to real project decisions, including browser support, architecture, and verification requirements. Retain useful quality checks and the Modern Web Guidance setup instructions below.
3. Remove the entire `template-only` block from AGENTS.md, including its comment markers.
4. Delete `docs/template-maintenance.md` and replace this entire `template-only` README block with project setup and usage instructions. Remove the comment markers as well.
5. Search for remaining template references and broken documentation links. Keep legitimate uses of the word "template" when they belong to the application.
6. Verify installation with `pnpm install --frozen-lockfile`, run `pnpm check` and `pnpm build`, and run the browser tests for the resulting application.

The two files are complementary, not alternate copies of AGENTS.md: shared development rules have one source of truth.
<!-- template-only:end -->

## Modern Web Guidance

Install the [Modern Web Guidance skill](https://github.com/GoogleChrome/modern-web-guidance) in each developer's agent environment:

```sh
npx modern-web-guidance@latest install
```

The skill guides agents during web development. Separately, `pnpm web:check` scans `src` for selected legacy patterns using the project's pinned CLI version. It runs locally as part of `pnpm check` and blocks CI when it finds a pattern or cannot complete.

The scan covers only a subset of the guidance and can flag legitimate code, including compatibility fallbacks. Review each finding and its guidance in the context of React, Tailwind, existing components, accessibility, and browser support before changing code. A finding still blocks CI until the code or the check is deliberately adjusted.
