# AI Development Instructions

Before work, read the relevant project context:

1. Read `docs/PROJECT.md`, `docs/ARCHITECTURE.md`, `docs/DESIGN.md`, and `docs/TASKS.md`.
2. For visual or experience work, also read `docs/DESIGN_SYSTEM.md` and `docs/EXPERIENCE.md`.
3. Select and read the relevant skills in `.agents/skills/` based on the task. Use more than one when their responsibilities overlap.

## General Rules

- Use TypeScript.
- Do not modify unrelated files.
- Do not add dependencies without a clear reason.
- Preserve the existing architecture.
- Prefer small and focused components.
- Reuse existing utilities and components where possible.
- Do not implement tasks that were not requested.
- Never invent missing project facts, screenshots, links, or results. Ask for factual project data when it is required to complete the task.

## Workflow

For non-trivial tasks:

1. Understand the requested task.
2. Inspect relevant files.
3. Create a short implementation plan.
4. Identify files that need to change.
5. Implement only the requested scope.
6. Run validation.
7. Visually verify UI or 3D changes when possible, and report when browser verification remains necessary.
8. Review the diff.

## Validation

After coding, run:

- typecheck
- lint
- build

If tests exist, run relevant tests too.

For documentation-only work, validate the document structure and review the diff. Do not change application code solely to run these checks.

## Documentation

If architecture changes:
update `docs/ARCHITECTURE.md`.

If design behavior changes:
update `docs/DESIGN.md`.

If a task is completed:
update `docs/TASKS.md`.

## Important

Do not silently change architecture.

If a requested task conflicts with existing project decisions,
explain the conflict before implementing it.
