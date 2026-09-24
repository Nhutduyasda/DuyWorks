# Agent Rules

## Rule 1 — Respect Scope

Only implement requirements belonging to the current phase.

Do not implement future features because they "might be useful".

---

## Rule 2 — Inspect Before Creating

Before creating a new:

- component
- utility
- hook
- type
- package
- design token

search the repository for an existing equivalent.

Avoid duplicates.

---

## Rule 3 — No Architecture Rewrite Without Need

Do not replace the project structure or framework pattern unless the current implementation is genuinely blocking development.

Prefer incremental improvement.

---

## Rule 4 — No Fake Business Claims

Never invent:

- clients
- testimonials
- ratings
- revenue
- user counts
- percentages
- performance improvements
- company names

Use placeholders only when clearly marked.

---

## Rule 5 — Keep Components Maintainable

Avoid huge components.

Preferred architecture:

Page
→ Section
→ Reusable UI components

Large sections should have their own files.

---

## Rule 6 — Data Must Be Separated From UI

Projects belong in:

`src/data/projects.ts`

Services belong in:

`src/data/services.ts`

Do not duplicate content throughout JSX.

---

## Rule 7 — Do Not Break Existing Features

When modifying an existing component:

- understand its current behavior first
- preserve existing working behavior unless the task explicitly replaces it
- avoid unrelated refactors

---

## Rule 8 — Design Consistency

Follow:

`docs/agent/DESIGN_SYSTEM.md`

Do not introduce random:

- colors
- radius
- shadows
- typography
- spacing patterns

---

## Rule 9 — Mobile Is Mandatory

Every completed UI task must work at minimum at:

- 375px
- 430px
- 768px
- 1024px
- 1440px

---

## Rule 10 — Accessibility

Use semantic HTML.

Interactive elements must support keyboard use.

Images need meaningful alt text.

Focus states must remain visible.

---

## Rule 11 — No Broken Navigation

All navigation links must point to valid pages.

Placeholder routes should still render correctly.

---

## Rule 12 — Avoid Overengineering

Do not add:

- Redux
- complex global state
- unnecessary context providers
- backend
- database
- API

unless required by the feature.

---

## Rule 13 — Never Hide Errors

Do not disable:

- TypeScript errors
- ESLint rules
- build checks

just to make builds pass.

Fix the underlying issue.

---

## Rule 14 — Minimal Dependencies

Do not add a package when the same requirement can be met cleanly with the existing stack.

Every added dependency must have a clear purpose.

---

## Rule 15 — Server First

In Next.js App Router:

- prefer Server Components by default
- only add `"use client"` where interactivity requires it

Do not turn entire pages into Client Components without need.

---

## Rule 16 — Preserve SEO Semantics

Each public page must maintain:

- one clear H1
- logical H2/H3 hierarchy
- descriptive page metadata
- semantic landmarks

---

## Rule 17 — Verify Before Claiming Completion

A phase is not complete until the required QA checks pass.
