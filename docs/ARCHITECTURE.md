# Architecture

## Rendering

HTML UI
+
React Three Fiber Canvas

## Museum Scene

Canvas
├── Museum
│   ├── Entrance
│   ├── Lobby
│   ├── ProjectHall
│   │   ├── Exhibit01
│   │   ├── Exhibit02
│   │   └── Exhibit03
│   ├── SkillsGallery
│   ├── ExperienceGallery
│   └── ExitHall
│
├── CameraController
├── Lighting
├── Environment
└── InteractionSystem

## Exhibit System

Project exhibits should use reusable components.

Example:

ProjectExhibit
├── ExhibitModel
├── ExhibitScreen
├── ExhibitLabel
└── InteractionTrigger

Project data should not be hardcoded inside 3D components.

Use structured project data instead.

## Current Museum Scene

`Experience` renders a dedicated `MuseumLighting` component beside the
`MuseumHall`. `MuseumLighting` owns neutral fill and exhibit spotlights, with
targets derived from the shared exhibit placements. `MuseumHall` owns the shell, entrance threshold,
central aisle, exhibit partitions, featured bay, and empty continuation passage.
The open front is framed by a shallow portal, and each exhibit partition uses
the shared placement data for its backing and low display ledge.
The camera sits at eye level at the open front on landscape viewports.
`Experience` also renders `ExhibitLayout` beside `MuseumHall`. The shared
`sceneConfig` defines five exhibit placements, sizes, rotations, and camera focus
views. Focus positions and target offsets are derived in each panel's local
orientation. `MuseumHall` uses the same placements for the backing partitions,
keeping geometry and click targets aligned without embedding project content.
`ExhibitLayout` maps structured project data from `src/data/projects.ts` to
those placements and passes each project record, position, rotation, and size to the
reusable `ProjectExhibit`.
`ProjectExhibit` keeps each slate panel and its narrow frame separate from the
hall geometry and mounts a reusable `ExhibitLabel`. The label displays project
data through a camera-facing HTML overlay anchored to each panel.
Labels use an explicit, stable Canvas DOM container so connecting scene events
does not recreate their HTML roots and leave the first project label empty.
`App` owns the selected `Project | null` state. A selection callback passes
through `Experience` and `ExhibitLayout` to each `ProjectExhibit`, which returns
its project record on click. When selected, `App` renders the HTML
`ProjectDetailOverlay` as a sibling of the Canvas. Its desktop backdrop lets pointer
events reach the scene while its editorial side panel remains interactive. The close
button and Escape clear the selection. `Experience` passes the selected project
ID to a separate `CameraController`, which eases the camera toward the matching
focus view and back to the overview when selection is cleared. `App` also owns
`isTransitioning` and an immediate selection guard. `CameraController` reports
completion so `App` can re-enable exhibit clicks. `ExhibitLayout` derives each
exhibit's selected state from the selected project ID.
`App` detects compact viewports using the shared `compactViewportQuery` and
renders a data-driven HTML project picker outside the Canvas. Widths up to
767px, heights up to 560px, and aspect ratios at or below 5:4 use this mode.
The detail sheet CSS mirrors that query. Compact view keeps the 3D hall with an
elevated static overview whose distance fits the viewport aspect ratio,
omits the small in-scene labels, and uses the same project detail overlay.
`App` guards selection during resize transitions, including aspect changes
within the compact breakpoint. `CameraController` reads the Canvas aspect,
handles viewport changes, and reports a transition
request ID so a stale completion cannot unlock newer camera movement.

Project records can optionally include media with one primary image and an
array of additional screenshots. `ProjectDetailOverlay` reads this data and
renders images only in the HTML detail panel. Projects without media retain
the text-only panel; the 3D exhibits do not use project media.

## Phase C Detail UI

`ProjectDetailOverlay` remains a non-modal HTML dialog, with a persistent
toolbar and a separate, keyboard-focusable article scroller. Its local
`DetailImage` component renders the unchanged `ProjectImage` records as
full-width figures with captions sourced from the supplied alternative text.
Primary media loads eagerly; additional screenshots load lazily. The optional
media schema and scene components are unchanged.

`App` captures the initiating button/select through DOM click/change capture
before selection disables it. It stores this element separately from camera
state. Each project keys the detail overlay, resetting scroll and focusing
Close on open or project replacement. The compact picker stays mounted in a
hidden wrapper during selection so its original element can receive focus
again. Hidden controls are removed from keyboard navigation and the
accessibility tree.

Closing temporarily focuses the museum landmark. After the existing camera
return completes and controls are enabled, an animation frame allows the
separate Drei HTML roots to commit before restoring focus to the connected,
visible initiating control. If resizing removed that control, focus falls back
to the compact picker or the museum landmark. A mesh selection has the same
fallback because it has no initiating HTML control. Restoration is skipped if
the visitor has already moved focus elsewhere. No focus trap, modal assertion,
camera changes, or new selection locks are introduced.
