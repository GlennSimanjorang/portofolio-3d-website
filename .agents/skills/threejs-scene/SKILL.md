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

Read `docs/DESIGN_SYSTEM.md` and `docs/EXPERIENCE.md` when changing the visitor-facing scene.

Inspect the current scene implementation before modifying it.

## Scene Rules

- Keep scene components small and focused.
- Keep hall geometry, exhibit placement, camera control, and project content in their existing separate layers unless the requested change requires otherwise.
- Keep HTML UI separate from 3D scene logic.
- Avoid unnecessary `useFrame`.
- Reuse or memoize geometry and materials when repeated or expensive; avoid recreating them every render.
- Prefer reusable components.
- Avoid premature post-processing.
- Avoid excessive realtime shadows.
- Preserve the compact viewport fallback and keep mobile performance in mind.
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
4. Visually inspect desktop and compact views when a browser is available.
5. Check the browser console when a browser is available.
6. Review git diff.

## Report

Report:

- scene changes
- components changed
- performance considerations
- validation performed
- known risks
