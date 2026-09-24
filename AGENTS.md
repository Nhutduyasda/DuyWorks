# AGENTS.md

## Purpose

This file is the mandatory entry point for every AI coding agent working on this repository.

Before modifying code, the agent MUST read the required project documents listed below.

---

## Mandatory Reading Order

Read in this exact order:

1. `docs/agent/PROJECT_CONTEXT.md`
2. `docs/agent/RULES.md`
3. `docs/agent/WORKFLOW.md`
4. `docs/agent/SKILLS.md`
5. `docs/agent/DESIGN_SYSTEM.md`
6. `docs/roadmap/ROADMAP.md`
7. `docs/roadmap/CURRENT_PHASE.md`
8. The Markdown file of the active phase
9. `docs/agent/QA_CHECKLIST.md`
10. `docs/agent/DECISIONS.md`

Do NOT start coding before understanding these files.

---

## Core Principle

This repository is built phase by phase.

Never implement future phases unless explicitly instructed.

The current phase is defined in:

`docs/roadmap/CURRENT_PHASE.md`

That file is the source of truth for current implementation scope.

---

## Before Coding

The agent must:

- inspect the existing repository
- inspect existing components before creating new ones
- understand the current architecture
- identify reusable components
- identify existing design tokens
- check the active roadmap phase
- create a short implementation plan

Do not rewrite working architecture without a strong reason.

---

## During Coding

Follow:

- `docs/agent/RULES.md`
- `docs/agent/DESIGN_SYSTEM.md`

Avoid unnecessary dependencies.

Prefer existing project patterns over inventing new architecture.

---

## After Coding

Run the validation workflow defined in:

`docs/agent/QA_CHECKLIST.md`

At minimum, when supported by the project:

- lint
- typecheck
- production build
- responsive inspection
- broken-link check
- browser console check

Do not report a phase as complete if required checks fail.

---

## Documentation Update

After completing meaningful work:

Update:

`docs/roadmap/CURRENT_PHASE.md`

If an architectural or product decision was made, append it to:

`docs/agent/DECISIONS.md`

Do not silently change project direction.

---

## Scope Protection

Do NOT add:

- authentication
- dashboard
- CRM
- database
- admin panel
- shopping cart
- checkout
- CMS

unless the roadmap explicitly requires them.

---

## Final Report

Every completed task should report:

1. What was changed
2. Files changed
3. Important decisions
4. Validation performed
5. Remaining issues
6. Whether the current phase is complete
7. Recommended next step

Never claim tests passed unless they were actually executed.
