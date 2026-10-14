# Design System

This defines the visual target for Design Phase V2, alongside the implemented
Phase B exhibit typography and Phase C project detail presentation. The hall
still uses greybox geometry. The base palette and first lighting pass are
applied, but the rendered result has not yet been visually validated.

## Visual Direction

A premium digital museum with an editorial, cinematic tone. Architecture gives
the visitor a calm sense of place; project work carries the strongest visual
focus. Keep interface elements minimal and legible. Avoid excessive cyberpunk
styling, game-like HUD elements, and generic dashboard cards.

## Colors

Use these scene colors as the shared starting palette. HTML text contrast remains
governed by the separately documented plaque and detail-panel tokens.

| Role | Color | Use |
| --- | --- | --- |
| Canvas background | `#101827` | Deep navy beyond the hall and through openings |
| Main architecture | `#C9C4B9` | Warm mineral-plaster walls and large structural surfaces |
| Architectural secondary | `#979A96` | Recesses, reveals, and quieter structural details |
| Floor | `#30383D` | Dark stone with restrained, broad highlights |
| Standard exhibit | `#52616B` | Desaturated slate backing for project work |
| Interactive accent | `#126579` | Small cyan-blue affordances and visible keyboard focus |
| Warm exhibit light | `#F2D8B5` | Focused warm light on selected works and key exhibits |

Keep large surfaces low contrast with one another so the room does not compete
with project content. Use the cyan accent sparingly; it is not a general-purpose
glow color. Keep the warm light localized to exhibit areas rather than tinting
the whole hall. These hex values define material/light color targets; check the
rendered result under the actual scene lights before tuning their intensity.

## Typography Hierarchy

- Large editorial display type introduces areas and important projects.
- Clear section and exhibit titles establish the next level.
- Body text stays comfortable to read in overlays and on compact screens.
- Metadata and labels are quieter but remain legible against their backgrounds.

Use consistent type roles rather than project-specific typography treatments.

### Phase B Exhibit Roles

`src/components/three/ExhibitLabel.css` defines reusable `--exhibit-*` tokens
scoped to every plaque. They do not restyle the project detail overlay or
mobile picker. No font downloads or new dependencies are required.

| Role | Typeface | Size | Weight / line height |
| --- | --- | --- | --- |
| Project title | Georgia, Times New Roman, serif | 18-22px; about 20px at 1024x768 | 400 / 1.15 |
| Featured title | Same serif family | 26-32px; about 28px at 1024x768 | 400 / 1.15 |
| Featured marker | Trebuchet MS, Verdana, sans-serif | 13px | 600 / 1.45 |
| Year and category | Same sans-serif family | 13px | 400 / 1.45 |
| Short description | Same sans-serif family | 14px | 400 / 1.45 |

Titles carry the strongest hierarchy through size and the contrasting serif
face. Year and category occupy separate lines; descriptions have their own
paragraph spacing. Titles use balanced word wrapping, descriptions use pretty
wrapping where supported, and text is never truncated. Font fallbacks use the
same roles and should be checked on the intended devices.

### Phase B Plaque Tokens

- Surface: `#eee9df`, an opaque HTML background independent of scene lighting.
- Primary ink: `#242b31`, with 11.85:1 contrast against the surface.
- Secondary ink: `#454d47`, with 7.22:1 contrast against the surface.
- Standard rule: `#92998f`; the rule is decorative, not a text color.
- Spacing: 6px, 12px, and 18px; standard padding is 12px, featured padding 18px.
- Width: standard `min(192px, 21.5vh)`, featured `min(220px, 24.5vh)`.

The unchanged camera uses a fixed vertical field of view, so projected anchor
spacing follows viewport height. The width limits preserve gaps between labels
at 1440x900 and 1024x768. At heights up to 700px, spacing becomes 4px/10px/10px
and the featured title becomes 22px to avoid cramped word breaks. Metadata and
descriptions retain their readable 13px/14px sizes.
Phase B measured 6.98:1 primary and 5.01:1 supporting contrast under its 28%
desktop detail backdrop; Phase C reduces that dark veil to 12%. Plaques render beneath
the detail panel so they cannot cover its contents or controls.

## Spacing

Use a consistent spacing rhythm across labels, overlay sections, and controls. Give major content room to breathe while keeping related title, metadata, and description close enough to scan. Scale panel padding for compact viewports.

## Museum Materials and Lighting

Use the main architecture color on broad, matte plaster or concrete surfaces.
Architectural secondary color is for shallow recesses and trim, not repeated
decorative linework. The floor may have a soft satin response, but should not
read as a mirror. Keep surface texture subtle and large-scale; avoid noisy
procedural detail that competes with the exhibit labels or supplied project
media.

Use a soft, neutral fill to preserve room readability and warm focused lights
to give the featured and standard exhibits a clear gallery hierarchy. Keep
shadows soft and selective. Use no heavy bloom, chromatic effects, or full-screen
post-processing. Project images and screenshots retain their supplied colors
and proportions.

### Scene Hierarchy

1. The featured project is the strongest focal point through its existing larger
   bay and plaque treatment.
2. Standard exhibits share one consistent size, backing, and label system.
3. Architecture frames the route and provides negative space without adding
   decorative elements that look interactive.
4. The detail panel remains the clearest reading surface and keeps its existing
   warm-paper palette, editorial type, and persistent Close action.

Do not make a project more prominent through color alone. Keep hover, selected,
and keyboard-focus states distinct and legible, while preserving the shared
exhibit styling across project records.

## Exhibit Styling

Frame each exhibit like a curated work. Keep titles and metadata readable, with consistent placement across projects. Let the featured exhibit gain emphasis through scale or framing without overwhelming the room.

Phase B uses one left-aligned plaque system. Standard plaques have a restrained
2px top rule. `project.featured` adds the explicit Featured marker, larger
title, wider text area, greater padding, and a 4px double top rule. This gives
SILONDO priority without a project-specific component or color-only emphasis.

## Overlay Styling

The detail overlay should read as an editorial project page within the museum. Use strong title hierarchy, comfortable text width, responsive media, and a clear close action. Avoid a stack of generic dashboard cards.

### Phase C Detail Tokens and Layout

`ProjectDetailOverlay.css` scopes `--detail-*` tokens to the HTML detail UI.
It shares the plaque's type families and warm-paper palette without changing
Phase B styles or any scene material.

| Role | Value |
| --- | --- |
| Paper / primary ink / supporting ink | `#eee9df` / `#242b31` / `#454d47` |
| Decorative rules | `#b9beb3` |
| Visible keyboard focus | 3px inset outline, `#126579` |
| Display title | Georgia / Times New Roman; regular; 36-56px desktop, 32-48px compact; 1.08 line height |
| Body | Trebuchet MS / Verdana; 17px desktop, 16px compact; 1.7 line height |
| Metadata and tech list | Same sans-serif family; 14px; 1.6 line height |
| Section labels / media captions | 12px uppercase labels / 13px sentence-case captions |
| Text gutters | 20-40px desktop, 20px compact |
| Media gutters | 16px; full-width images with natural aspect ratios |

Pixel equivalents above describe the default 16px root size; rem-based text
and spacing scale with the visitor's text settings. Primary/supporting text
retain the plaque palette's 11.85:1 / 7.22:1 contrast on opaque paper.

Desktop uses a full-height right panel at 38% width (360px minimum, capped at
100%), leaving the scene visible beside it with a 12% dark veil. Compact mode
uses the shared width/height/aspect-ratio breakpoint and a bottom sheet capped
at 90dvh with safe-area clearance. A 45% veil separates the compact sheet from
its static museum context. Short sheets fit their content.

The hierarchy is title, year/category, description, tech stack, primary media,
then additional screenshots. Technology names are plain list items without
badge boxes. Media figures have generous width and vertical separation;
captions reuse supplied alternative text, including placeholder labeling.
Optional media never creates empty sections.

The toolbar is separate from the article scroller, so Close remains visible
without depending on sticky positioning. Close has a minimum 44px target;
the toolbar can wrap under text enlargement. Both Close and the article's
keyboard scrolling region have visible focus. Opening focuses Close; closing
restores the initiating control after the camera return. No focus trap, font
downloads, shadows, blur, animation, or external media library is added.

## Hover State

Use a subtle change in light, material, or pointer feedback to show that an exhibit is interactive. Keep the title and content readable before and during hover.

Phase B retains mesh hover feedback and adds a 1px inset plaque outline. The
plaque's surface and text colors stay fixed in default, hover, and selected
states. Plaques are native buttons so the visible text area activates the same
guarded selection callback as the exhibit mesh; keyboard focus has a 3px inset
outline. Selection and camera-transition locks apply to both surfaces.

## Selected State

Make the selected exhibit distinguishable from hover and maintain a clear relationship with the open detail view. Selection feedback must remain legible during camera movement.

The selected plaque uses a 2px inset outline in addition to the existing
selected mesh tone. The outline does not change plaque dimensions, typography,
or contrast. Selected styling takes precedence over hover.

## Mobile Presentation

Keep the 3D scene as context. Use a readable editorial project list or picker when the scene is too small for direct exhibit navigation. Show details in a scrollable, mobile-friendly sheet with reachable controls and images that stay within its width.

## Motion Principles

Use restrained camera movement to explain the relationship between an overview
and a selected work. Avoid decorative looping motion or effects that distract
from reading or obscure controls. Respect `prefers-reduced-motion`: shorten or
skip camera interpolation while still completing the selection and return state
changes. The current fixed camera transition does not yet implement this rule.
