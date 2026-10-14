import { Html } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useMemo } from 'react'
import type { Project } from '../../data/projects'
import './ExhibitLabel.css'

type ExhibitLabelProps = Pick<Project, 'title' | 'featured' | 'year' | 'category' | 'shortDescription'> & {
  isSelected: boolean
  isHovered: boolean
  isInteractive: boolean
  onHoverChange: (hovered: boolean) => void
  onSelect: () => void
}

export default function ExhibitLabel({
  title,
  featured,
  year,
  category,
  shortDescription,
  isSelected,
  isHovered,
  isInteractive,
  onHoverChange,
  onSelect,
}: ExhibitLabelProps) {
  const canvas = useThree((state) => state.gl.domElement)
  // Keep Html's root mounted in one container while Canvas connects its events.
  const portal = useMemo(() => ({ current: canvas.parentElement! }), [canvas])

  return (
    <Html portal={portal} center zIndexRange={[0, 0]}>
      <button
        type="button"
        className="exhibit-plaque"
        data-featured={featured}
        data-state={isSelected ? 'selected' : isHovered ? 'hovered' : 'default'}
        aria-label={`${title}${featured ? ', featured project' : ''}`}
        disabled={!isInteractive}
        onPointerEnter={() => onHoverChange(true)}
        onPointerLeave={() => onHoverChange(false)}
        onClick={(event) => {
          event.stopPropagation()
          if (isInteractive) onSelect()
        }}
      >
        {featured && (
          <span className="exhibit-plaque__marker">Featured</span>
        )}
        <span className="exhibit-plaque__title">{title}</span>
        <span className="exhibit-plaque__metadata">
          <span className="exhibit-plaque__year">{year}</span>
          <span>{category}</span>
        </span>
        <span className="exhibit-plaque__description">
          {shortDescription}
        </span>
      </button>
    </Html>
  )
}
