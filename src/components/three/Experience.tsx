import type { Project } from '../../data/projects'
import CameraController from './CameraController'
import ExhibitLayout from './ExhibitLayout'
import MuseumHall from './MuseumHall'
import MuseumLighting from './MuseumLighting'

type ExperienceProps = {
  selectedProjectId: string | null
  isTransitioning: boolean
  transitionRequestId: number
  isCompactViewport: boolean
  onSelectProject: (project: Project) => void
  onCameraTransitionComplete: (requestId: number) => void
}

export default function Experience({
  selectedProjectId,
  isTransitioning,
  transitionRequestId,
  isCompactViewport,
  onSelectProject,
  onCameraTransitionComplete,
}: ExperienceProps) {
  return (
    <>
      <MuseumLighting />
      <MuseumHall />
      <ExhibitLayout
        selectedProjectId={selectedProjectId}
        isTransitioning={isTransitioning}
        showLabels={!isCompactViewport}
        onSelectProject={onSelectProject}
      />
      <CameraController
        selectedProjectId={selectedProjectId}
        transitionRequestId={transitionRequestId}
        isCompactViewport={isCompactViewport}
        onTransitionComplete={onCameraTransitionComplete}
      />
    </>
  )
}
