# Tasks


## Phase 0 - Foundation

- [x] Create project repository
- [x] Setup Obsidian vault
- [x] Create project documentation
- [x] Create AGENTS.md
- [x] Create initial skills
- [x] Initialize React project

## Phase 1 - Basic 3D

- [x] Install React Three Fiber
- [x] Setup Canvas
- [x] Setup camera
- [x] Add lighting
- [x] Create simple room placeholder
- [x] Place exhibit placeholders
- [x] Create reusable exhibit system

## Phase 2 - Navigation

- [ ] Create scroll sections
- [ ] Implement camera transitions

## Phase 3 - Content

- [x] Add portfolio project metadata
- [x] Enrich project metadata
- [x] Add exhibit labels
- [x] Add exhibit plaque metadata
- [x] Add short descriptions to exhibit labels
- [x] Add subtle hover feedback to project exhibits
- [x] Add project selection state and clearing
- [x] Add project detail overlay
- [x] Add project media to the detail overlay
- [x] Add camera focus and overview return for selected exhibits
- [x] Add selected exhibit feedback and lock clicks during camera transitions
- [ ] About section
- [ ] Skills section
- [ ] Projects section
- [ ] Experience section
- [ ] Contact section

## Phase 4 - Optimization

- [x] Add responsive mobile fallback for museum exhibits
- [ ] Mobile optimization
- [ ] Texture optimization
- [ ] GLB optimization
- [ ] Performance testing

## Design Phase V2

### Phase A - Structural Visual Fixes

- [x] Audit hall dimensions and camera framing
- [x] Fix portrait-tablet reachability with explicit aspect-ratio fallback
- [x] Fit all five exhibits in compact overview framing
- [x] Establish entrance, overview, staggered exhibit route, featured bay, and future continuation
- [x] Derive focus views from exhibit positions and orientations
- [x] Preserve project content, selection, hover, detail flow, Escape, and mobile picker
- [x] Verify all five target sizes in headless Chromium and check projected panel bounds
- [ ] Complete manual browser/touch verification on target devices

Phase A validation covers 1440x900, 1024x768, 768x1024, 390x844, and 360x800:
all five exhibit centers are unobstructed, desktop labels fit without overlap,
and every project opens and closes with the correct camera view. Close, Escape,
hover cursors, detail bounds, selected-project rotation, and rapid resize/Escape
were exercised. Typecheck, lint, build, and diff whitespace checks pass.
The build retains the large JavaScript chunk warning. Manual browser checks on
real touch devices, including native picker behavior and browser chrome/safe
areas, remain required.

### Phase B - Typography and Exhibit Hierarchy

- [x] Audit plaque sizes, spacing, wrapping, and contrast
- [x] Introduce shared exhibit typography, spacing, and color tokens
- [x] Establish standard and data-driven featured plaque treatments
- [x] Improve title, metadata, and description readability
- [x] Keep text contrast stable across hover and selected states
- [x] Preserve Phase A geometry, camera behavior, and compact navigation
- [x] Complete visual and interaction validation at the Phase B target sizes
- [ ] Verify device font fallbacks and touch behavior in real browsers

Phase B was visually inspected in headless Chromium at 1440x900, 1024x768,
768x1024, and 390x844, with additional wrapping checks at 1100x600 and 1000x561.
Plaques fit without overlap or horizontal overflow; the featured title remains
unbroken at short heights. All five projects retain selection, focus, Close,
Escape, and compact navigation. Plaque-edge clicks, exposed mesh clicks,
Enter/Space activation, visible keyboard focus, transition locks, rotation,
and detail-panel stacking were verified without browser console errors in the
final interaction runs. Typecheck, lint, build, and diff whitespace checks pass.
The existing build chunk-size warning remains. No meshes, textures, lights,
frame callbacks, font downloads, or dependencies were added.

Real-browser verification remains required for platform font fallbacks,
native mobile pickers, touch, and text zoom. The hall, camera, selection state,
detail overlay, compact picker, project data, and dependency files were checked
against their Phase A contents and remain unchanged.

### Remaining V2 Work

- [x] Audit current visual implementation (source review)
- [x] Define final design system
- [x] Improve museum architecture
- [x] Improve exhibit visual hierarchy
- [ ] Redesign project detail panel
- [ ] Improve mobile experience
- [ ] Add real project media
- [ ] Add project links
- [x] Polish materials
- [x] Polish lighting
- [ ] Add restrained motion
- [ ] Performance optimization
- [ ] Final accessibility review

The initial source review found a greybox hall with simple box geometry and only
ambient/directional lighting.
The camera transition is fixed at 1.8 seconds and does not honor the reduced-motion
preference described in `docs/DESIGN_SYSTEM.md`. Rendered browser screenshots were
not available during this review; previous Phase B viewport checks remain documented
above, and real-device touch/font verification is still outstanding.

The final V2 scene palette and material, lighting, hierarchy, and motion rules
are defined in `docs/DESIGN_SYSTEM.md`. The base architecture and exhibit-frame
colors are applied but have not yet been checked in a rendered scene.

The architecture pass adds an entrance portal, integrated exhibit ledges, and a
shared frame around project panels. It applies the architecture and floor colors
from the design system while leaving lighting and camera behavior unchanged.
Typecheck, lint, build, and diff whitespace checks pass. The production build
still reports the existing large JavaScript chunk warning. Rendered visual
verification remains necessary to tune the final visual balance.

The material and lighting pass adds a central palette, matte architecture,
subtle floor sheen, neutral fill, and warm spotlights aimed from the shared
exhibit placements. Spotlights do not cast realtime shadows. Rendered visual
tuning and performance comparison remain outstanding because browser rendering
was unavailable during this pass.
