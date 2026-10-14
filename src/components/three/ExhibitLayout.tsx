import { projects, type Project } from '../../data/projects'
import ProjectExhibit from './ProjectExhibit'
import { exhibitPlacements } from './sceneConfig'

type ExhibitLayoutProps = {
  selectedProjectId: string | null
  isTransitioning: boolean
  showLabels: boolean
  onSelectProject: (project: Project) => void
}

export default function ExhibitLayout({
  selectedProjectId,
  isTransitioning,
  showLabels,
  onSelectProject,
}: ExhibitLayoutProps) {
  return (
    <group>
      {exhibitPlacements.map(({ projectId, position, rotation, size }) => (
        <ProjectExhibit
          key={projectId}
          project={projects[projectId]}
          position={position}
          rotation={rotation}
          size={size}
          isSelected={selectedProjectId === projectId}
          isTransitioning={isTransitioning}
          showLabel={showLabels}
          onSelect={onSelectProject}
        />
      ))}
    </group>
  )
}
