# Agent Development Workflow

Every meaningful implementation task follows this workflow.

---

## Stage 1 — Understand

Read:

- `AGENTS.md`
- `PROJECT_CONTEXT.md`
- `RULES.md`
- `WORKFLOW.md`
- `SKILLS.md`
- `DESIGN_SYSTEM.md`
- `ROADMAP.md`
- `CURRENT_PHASE.md`
- active phase document
- `QA_CHECKLIST.md`
- `DECISIONS.md`

Understand:

- current objective
- existing implementation
- acceptance criteria
- out-of-scope items

Do not code yet.

---

## Stage 2 — Inspect

Inspect the repository.

Look for:

- current architecture
- existing reusable components
- design tokens
- routes
- utilities
- duplicated implementations
- existing patterns
- technical debt affecting the task

Do not immediately rewrite working code.

---

## Stage 3 — Plan

Create a short implementation plan.

The plan should explain:

- files likely to change
- components to create
- components to reuse
- data/types affected
- expected risks
- validation approach

Keep the plan focused on the current phase.

---

## Stage 4 — Implement

Implement in small logical steps.

Preferred order:

1. data/types
2. reusable UI
3. section/component
4. page integration
5. responsive behavior
6. interaction
7. polish

Avoid mixing unrelated refactors into the same task.

---

## Stage 5 — Self Review

Before running automated checks, inspect the implementation manually.

Check for:

- duplicated code
- unnecessary complexity
- inconsistent styles
- missing responsive behavior
- broken links
- placeholder content
- accidental fake claims
- TypeScript issues
- accessibility regressions

---

## Stage 6 — Validate

Follow:

`docs/agent/QA_CHECKLIST.md`

Required when available:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

Do not skip failed checks.

---

## Stage 7 — Visual Verification

Check:

- desktop
- tablet
- mobile

Verify implementation against:

`docs/agent/DESIGN_SYSTEM.md`

The visual direction should continue to feel like:

**TailAdmin / BizSpace visual language + NexStudio information architecture**

Do not turn the public website into a dashboard.

---

## Stage 8 — Documentation

Update:

`docs/roadmap/CURRENT_PHASE.md`

when task progress changes.

Record significant architecture or product decisions in:

`docs/agent/DECISIONS.md`

Do not update roadmap scope without explicit instruction.

---

## Stage 9 — Report

Return a concise report with:

### Completed

### Files Changed

### Validation

### Known Issues

### Phase Status

### Recommended Next Step

Never report checks that were not actually run.
