import { useCursor } from '@react-three/drei'
import { useState } from 'react'
import type { Project } from '../../data/projects'
import ExhibitLabel from './ExhibitLabel'
import { scenePalette } from './scenePalette'

type ProjectExhibitProps = {
  project: Project
  position: [number, number, number]
  rotation: [number, number, number]
  size: [number, number, number]
  isSelected: boolean
  isTransitioning: boolean
  showLabel: boolean
  onSelect: (project: Project) => void
}

export default function ProjectExhibit({
  project,
  position,
  rotation,
  size,
  isSelected,
  isTransitioning,
  showLabel,
  onSelect,
}: ProjectExhibitProps) {
  const [hovered, setHovered] = useState(false)
  const isInteractive = !isSelected && !isTransitioning
  useCursor(hovered && isInteractive)

  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0, -0.08]}>
        <boxGeometry args={[size[0] + 0.12, size[1] + 0.12, size[2] + 0.04]} />
        <meshStandardMaterial color={scenePalette.exhibitFrame} roughness={0.78} />
      </mesh>
      <mesh
        name={project.id}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={(event) => {
          event.stopPropagation()
          if (isInteractive) onSelect(project)
        }}
      >
        <boxGeometry args={size} />
        <meshStandardMaterial
          color={isSelected
            ? scenePalette.exhibitSelected
            : hovered
              ? scenePalette.exhibitHovered
              : scenePalette.exhibit}
          roughness={0.56}
        />
        {showLabel && (
          <ExhibitLabel
            title={project.title}
            featured={project.featured}
            year={project.year}
            category={project.category}
            shortDescription={project.shortDescription}
            isSelected={isSelected}
            isHovered={hovered && isInteractive}
            isInteractive={isInteractive}
            onHoverChange={setHovered}
            onSelect={() => onSelect(project)}
          />
        )}
      </mesh>
    </group>
  )
}
