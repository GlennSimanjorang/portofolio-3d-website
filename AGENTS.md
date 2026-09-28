# AI Development Instructions

Before doing any coding task:

1. Read `docs/PROJECT.md`.
2. Read `docs/ARCHITECTURE.md`.
3. Read `docs/DESIGN.md`.
4. Read `docs/TASKS.md`.
5. Read any relevant skill in `.agents/skills/`.

## General Rules

- Use TypeScript.
- Do not modify unrelated files.
- Do not add dependencies without a clear reason.
- Preserve the existing architecture.
- Prefer small and focused components.
- Reuse existing utilities and components where possible.
- Do not implement tasks that were not requested.

## Workflow

For non-trivial tasks:

1. Understand the requested task.
2. Inspect relevant files.
3. Create a short implementation plan.
4. Identify files that need to change.
5. Implement only the requested scope.
6. Run validation.
7. Review the diff.

## Validation

After coding, run:

- typecheck
- lint
- build

If tests exist, run relevant tests too.

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