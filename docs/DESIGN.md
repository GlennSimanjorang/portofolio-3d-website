# Design

## Visual Direction

Modern digital museum.

Characteristics:

- Dark architectural environment
- Gallery-style lighting
- Clean museum walls
- Minimal futuristic accents
- Blue/cyan digital lighting
- Warm spotlight for exhibits
- Large open spaces
- Minimal floating UI

## Museum Atmosphere

The museum should feel:

- premium
- quiet
- cinematic
- modern
- immersive
- professional

Avoid:

- excessive cyberpunk visuals
- game-like HUD
- overly complex controls
- visual clutter

## Greybox Camera

On landscape desktop and tablet, the exhibition hall starts from 1.7 meters
at its open front, with a slight upward angle to keep the floor, side walls,
and back wall in frame. Selecting an exhibit eases the camera toward a comfortable view of that
panel; closing the detail view eases it back to the original overview.

## Greybox Exhibits

Four neutral panels face the overview from two staggered pairs of slightly
inward-facing partitions at eye level. A larger neutral panel sits in a
dedicated bay on the central axis at the rear. Each panel carries a reusable
editorial plaque with a serif project title, separate secondary year/category
lines, and a readable short description. The featured panel adds an explicit
Featured marker, larger title, stronger top rule, and extra breathing room.
Hovering over any exhibit subtly brightens its panel and shows a pointer
cursor. Moving away restores the original panel color and cursor.
The selected panel uses a distinct, slightly brighter neutral tone that takes
priority over hover. Exhibit clicks pause during camera movement and resume
when the camera reaches its view. The detail backdrop allows visitors to
select another visible exhibit after the movement finishes.

## Exhibits

Each project is represented as a museum exhibit.

An exhibit may contain:

- project title
- project year
- project category
- 3D visual or screen
- short description
- tech stack
- interaction prompt

Clicking an exhibit opens one editorial HTML detail panel at the right of the museum.
The panel shows the project's title, year, category, short description, and
tech stack on an opaque warm-paper surface. The light backdrop and existing offset camera
view keep the selected exhibit visible beside it. Its persistent close button or Escape
returns to the unobstructed museum overview.
When media is available, the panel shows a primary image and any additional
screenshots after the tech stack. Images fit nearly the full panel width
without changing their aspect ratio. Projects without media keep the same
text-only detail view.

The future selection experience may include:

- visitor can inspect the project

## Compact Viewports

At widths up to 767px, heights up to 560px, or aspect ratios at or below 5:4
(width / height <= 1.25), the 3D hall stays visible from an elevated static
overview. Camera distance adapts to the actual aspect ratio, fitting all five
panels with side clearance. Elevation separates the rows in screen space.
The aspect threshold also protects narrow landscape windows near square.
This includes 768x1024 portrait tablets; rotating to 1024x768 restores the
interactive landscape overview and selected-project camera focus.
A project picker offers access to all five exhibits
without relying on tiny side panels. In-scene labels are hidden; project text
remains available in the picker and detail view. The detail panel becomes a
scrollable sheet that fits the viewport and keeps its Close and Escape actions.

## Design Phase V2 - Phase A Structure

The original 12 x 14 hall placed panels at x = +/-5.94 with a 50-degree camera
at z = 1. At 768x1024, the nearest side panels fell outside the horizontal
frame, while the existing width/height breakpoints omitted the picker.

The hall is now 14 x 23 units, from z = 3 to z = -20. An entrance threshold
opens onto a clear lobby and central aisle. The landscape overview stays at
50 degrees, at [0, 1.7, 5]. The first pair sits at x = +/-5.2, z = -7;
the second steps inward to x = +/-3.8, z = -12. The featured panel at
[0, 2, -18] terminates the exhibit route. A rear opening to its right and an
empty passage reserve future continuation without adding new content or
working navigation. The aisle and threshold are flat greybox geometry.

Panel rotations, sizes, and focus views share one placement definition.
Focus cameras sit in front of the corresponding panel, with a local-right
target offset that keeps the work beside the existing detail card. Selection,
hover, transition locks, Close, Escape, and the compact picker retain their
existing roles. Resizing preserves selection and returns to the appropriate
view for the new aspect ratio.

Only structural composition and responsive framing change in Phase A.
Materials, lights, typography, project content, and detail presentation retain
their existing greybox treatment. No shadows, post-processing, or dependencies
are introduced.

## Design Phase V2 - Phase B Exhibit Hierarchy

The former 112px centered labels used 13px titles and 10px supporting text.
Phase B replaces their inline styles with shared plaque tokens in
`ExhibitLabel.css`. Left-aligned serif titles use roughly 20-22px at the target
landscape sizes; metadata uses 13px and descriptions 14px with 1.45 line height.
The featured title uses roughly 28-32px, plus a Featured marker and double rule.
The same data-driven component renders every project without title-specific
layout rules or changes to project content.

Opaque warm-neutral plaque backgrounds keep text readable independently of
the hall's greybox lighting. Title/marker contrast is 11.85:1 and supporting
text contrast is 7.22:1. Hover and selection add inset outlines while keeping
text and background colors stable. The visible plaque surface is a native
button that forwards to the existing selection callback; it respects selected
and transitioning states and supports keyboard activation with visible focus.
The mesh remains interactive through its existing handlers. Plaques stay below
the detail overlay in the HTML stacking order so larger labels cannot obscure
its content or controls.

Plaque widths follow the projected spacing of the unchanged Phase A camera,
with separate standard/featured caps. Short windows reduce spacing and the
featured title size while keeping supporting text readable. Portrait tablet
and mobile still use Phase A's compact overview and project picker, with
in-scene plaques omitted. Museum geometry, camera focus, project details,
lighting, and materials remain unchanged. No later V2 phase is implemented.

## Design Phase V2 - Phase C Project Detail Experience

Desktop details occupy 38% of the viewport with a 360px minimum, capped at
the available width. The full-height right panel leaves the museum visible
through a restrained 12% dark veil; uncovered exhibits remain interactive.
The existing selected-exhibit camera offset is preserved. A large regular-weight
serif title leads year/category metadata, a short description, an unboxed tech
list, the primary image, and optional additional screenshots. Fine rules and
spacing establish sections instead of dashboard cards or glass effects.

Media uses a vertical sequence with 16px side gutters at the default text size,
natural aspect ratios, and captions drawn from existing image alternative text.
This also makes supplied placeholder descriptions visible. There is no carousel,
new project content, or link UI. Projects without media omit the entire media
section and retain the same information hierarchy.

The Close toolbar sits outside the scrolling article, keeping a minimum 44px
target available at every scroll position. Close receives focus on opening;
Tab reaches the article for native keyboard scrolling and can leave the
non-modal panel. There is no focus trap. Escape continues to clear selection.
Closing returns focus to the initiating plaque or picker once the camera has
returned and that control is enabled, unless the visitor has moved focus
elsewhere. A removed trigger or mesh selection falls back to the current
picker or museum landmark. Switching projects resets article scroll and focus.

The unchanged compact breakpoint retains a bottom sheet, capped at 90dvh with
additional top safe-area clearance. Text-only sheets fit their content; longer
articles scroll below the persistent toolbar. Safe-area padding protects the
sides and bottom. Wrapping text, rem-based sizes, flexible toolbar rows, and
uncropped responsive images accommodate narrow viewports and text enlargement.
The museum remains visible above the sheet where content permits.

Phase C changed only HTML detail presentation and its focus lifecycle. At that
stage, museum geometry, Phase B plaques, project records, camera transitions,
materials, lighting, and dependencies were preserved; later phases are recorded
below.

## Design Phase V2 - Phase D Architectural Framing

The open entrance receives a shallow stone-toned portal that marks the threshold
without closing the hall or narrowing the central route. Each exhibit partition
uses the shared project placement for a low display ledge beneath the work. The
slate project panel sits within a narrow, shared architectural reveal; the larger
featured panel keeps its emphasis through its existing bay and plaque scale.

The scene uses the target colors documented in `docs/DESIGN_SYSTEM.md`. Main
walls stay warm and matte, the floor stays dark, and architectural reveals use a
quieter secondary tone. This phase changes the hall framing and applies the base
palette; camera placement, exhibit positions, project content, selection, and
compact navigation remain unchanged.

## Design Phase V2 - Phase E Material and Gallery Lighting

The hall uses matte warm architecture and a dark floor with a restrained satin
response. Project panels use desaturated slate with a narrow stone-toned reveal.
Neutral ambient and directional fill preserve room readability; soft warm spots
fall on each exhibit, with the featured work receiving a broader, stronger pool.
No realtime shadows or full-screen post-processing are enabled in this pass.

The project and exhibit layout remain shared and data-driven. Lighting targets
follow the same panel placements and rotations, so moving an exhibit keeps its
spot aligned. Hover and selection colors remain separate from the lighting
hierarchy. The values still need visual tuning in a rendered browser scene.
