# Visitor Experience

The current Phase A greybox establishes the entrance threshold, overview,
exhibit route, and featured bay. It implements project exploration, selection,
camera focus, and project detail flow; later areas remain planned.

Entrance → Museum overview → Explore exhibits → Hover feedback → Select exhibit → Camera focus → Project detail view → Close / return → Continue exploring → Experience / journey area → Contact / exit

## Desktop

The desktop experience uses the full 3D museum. Visitors enter, understand the room from an overview, discover projects through visible exhibits and hover feedback, then select one. The camera focuses on the chosen exhibit while its HTML detail view presents project information. Closing returns to the overview so exploration can continue toward the experience area and contact exit.

The spatial route starts at a broad entrance threshold and open lobby. A
central aisle passes two staggered exhibit pairs and ends at the larger
featured work. Inward-facing partitions reveal each panel from the overview.
An opening beyond the featured bay signals future continuation; it does not
yet lead to an implemented experience or contact area. This is a visual route,
not new walking, scrolling, or automatic camera navigation.

## Portrait Tablets

Portrait, square, and narrow landscape viewports at or below a 5:4 aspect ratio
use the compact navigation mode, including 768x1024. An elevated overview keeps
all five panels in frame and separates their rows, while the existing HTML picker provides readable project names
and a reliable touch/keyboard selection target. Selection opens the same
scrollable detail sheet as mobile and retains the static overview. Rotation
to a landscape viewport restores individual camera focus for the selected
project; Close or Escape returns to that viewport's overview.

## Mobile

The 3D scene remains visual context. The existing project picker provides
access to all five projects when in-scene targets are too small. The elevated
camera adjusts its distance to the screen aspect ratio. Project detail uses a
mobile-friendly, scrollable sheet with readable media and an obvious close
action. Desktop navigation is not forced onto mobile.

## Continuity

Keep the visitor oriented during focus and return transitions. Preserve a clear way back to exploration, and ensure controls remain usable by keyboard and touch. Do not claim or display project facts that have not been supplied.
