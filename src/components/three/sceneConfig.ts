import type { projects } from '../../data/projects'

type Vec3 = [number, number, number]

type ExhibitPlacement = {
  projectId: keyof typeof projects
  position: Vec3
  rotation: Vec3
  size: Vec3
  cameraPosition: Vec3
  // Aim within the panel while leaving room for the detail overlay.
  targetOffset: Vec3
}

// Keep the detail sheet media query in sync with this navigation breakpoint.
export const compactViewportQuery = '(max-width: 767px), (max-height: 560px), (max-aspect-ratio: 5/4)'

export const overviewCamera: { position: Vec3; rotation: Vec3; fov: number } = {
  position: [0, 1.7, 5],
  rotation: [0.05, 0, 0],
  fov: 50,
}

export function getCompactOverviewCamera(aspect: number): typeof overviewCamera {
  const fov = 65
  // Fit the nearest exhibit row with side clearance, even on narrow phones.
  const distance = 6.8 / (Math.tan((fov * Math.PI) / 360) * aspect)
  const z = Math.max(8, -5.5 + distance)
  return {
    position: [0, 11, z],
    // An elevated overview separates the rows instead of flattening them.
    rotation: [-Math.atan2(11, z + 10), 0, 0],
    fov,
  }
}

function placeExhibit(
  projectId: ExhibitPlacement['projectId'],
  position: Vec3,
  yaw: number,
  featured = false,
): ExhibitPlacement {
  const distance = featured ? 7 : 5
  const offset = featured ? 1.2 : 0.9
  return {
    projectId,
    position,
    rotation: [0, yaw, 0],
    size: featured ? [4.5, 2.4, 0.12] : [2.6, 1.7, 0.12],
    cameraPosition: [
      position[0] + Math.sin(yaw) * distance,
      position[1],
      position[2] + Math.cos(yaw) * distance,
    ],
    // Local panel-right keeps the selected work left of the existing overlay.
    targetOffset: [Math.cos(yaw) * offset, 0, -Math.sin(yaw) * offset],
  }
}

export const exhibitPlacements: ExhibitPlacement[] = [
  placeExhibit('remtargo', [-5.2, 1.7, -7], 0.22),
  placeExhibit('parkie', [-3.8, 1.7, -12], 0.12),
  placeExhibit('spp-payment-system', [5.2, 1.7, -7], -0.22),
  placeExhibit('telegram-schedule-bot', [3.8, 1.7, -12], -0.12),
  placeExhibit('silondo', [0, 2, -18], 0, true),
]
