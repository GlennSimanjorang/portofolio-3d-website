---
name: threejs-scene
description: Implement and modify React Three Fiber scenes safely and efficiently.
---

# Three.js Scene Development

Use this skill for React Three Fiber and Three.js scene work.

## Before Coding

Read:

- `AGENTS.md`
- `docs/PROJECT.md`
- `docs/ARCHITECTURE.md`
- `docs/DESIGN.md`
- `docs/TASKS.md`

Inspect the current scene implementation before modifying it.

## Scene Rules

- Keep scene components small and focused.
- Keep HTML UI separate from 3D scene logic.
- Avoid unnecessary `useFrame`.
- Avoid recreating geometry or materials every render.
- Prefer reusable components.
- Avoid premature post-processing.
- Avoid excessive realtime shadows.
- Keep mobile performance in mind.
- Do not add complexity without a clear need.

## React Three Fiber

Prefer declarative React Three Fiber components.

Use direct Three.js APIs only when actually needed.

## Performance Awareness

Consider:

- draw calls
- geometry count
- material count
- texture size
- shadow cost
- render-loop work
- bundle size

Do not optimize blindly.

## Validation

After changes:

1. Run typecheck.
2. Run lint.
3. Run build.
4. Visually inspect the scene.
5. Check browser console.
6. Review git diff.

## Report

Report:

- scene changes
- components changed
- performance considerations
- validation performed
- known risks