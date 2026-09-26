# DuyWorks Agent Workflow Pack

This package is intended to be copied into the root of the website repository.

## Installation

Copy:

- `AGENTS.md`
- `docs/`

into the project root.

After installation, every AI coding agent should begin by reading:

`AGENTS.md`

## Recommended First Instruction

Use a prompt similar to:

> Read `AGENTS.md` and all mandatory documents in the required order. Inspect the repository and `docs/roadmap/CURRENT_PHASE.md`. Do not code beyond the current phase. Report your implementation plan before making changes, then execute the active phase and validate against `docs/agent/QA_CHECKLIST.md`.

## Important

`CURRENT_PHASE.md` is the source of truth for what the agent is currently allowed to implement.

`ROADMAP.md` exists to provide context, not permission to build future phases.
