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

## Current Greybox Scene

`Experience` contains the ambient and directional lights and a dedicated
`MuseumHall` component. `MuseumHall` contains only the floor, left wall,
right wall, and back wall. The camera sits at eye level at the open front.
