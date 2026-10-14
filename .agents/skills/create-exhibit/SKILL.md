---
name: create-exhibit
description: Create or modify reusable museum exhibits backed by structured project data.
---

# Create Exhibit

Use this skill when creating or modifying museum exhibits.

## Before Coding

Read:

- `AGENTS.md`
- `docs/PROJECT.md`
- `docs/ARCHITECTURE.md`
- `docs/DESIGN.md`
- `docs/TASKS.md`

Read `docs/DESIGN_SYSTEM.md` for visual exhibit work and `docs/EXPERIENCE.md` for interaction changes.

Also use the `threejs-scene` skill when the exhibit changes the 3D scene.

## Exhibit Rules

- Project content must come from structured data.
- Reuse `ProjectExhibit` for project panels and the existing project data model for content.
- Do not hardcode project-specific content inside reusable exhibit components.
- Keep exhibit rendering reusable.
- Keep exhibit layout separate from project data.
- Keep interaction logic separate when practical.
- Preserve existing museum geometry.
- Preserve selection, camera focus, and mobile picker behavior unless the task explicitly changes them.
