import { useMemo } from 'react'
import { Object3D } from 'three'
import { exhibitPlacements } from './sceneConfig'
import { scenePalette } from './scenePalette'

type ExhibitSpotlightProps = {
  position: [number, number, number]
  rotation: [number, number, number]
  featured: boolean
}

function ExhibitSpotlight({ position, rotation, featured }: ExhibitSpotlightProps) {
  const target = useMemo(() => new Object3D(), [])

  return (
    <group position={position} rotation={rotation}>
      <primitive object={target} />
      <spotLight
        target={target}
        position={[0, 2.5, 1.25]}
        color={scenePalette.warmLight}
        intensity={featured ? 5.5 : 4}
        distance={featured ? 6 : 4.8}
        angle={featured ? 0.58 : 0.5}
        penumbra={0.85}
        decay={2}
      />
    </group>
  )
}

export default function MuseumLighting() {
  return (
    <>
      <ambientLight color="#CDD8E1" intensity={0.35} />
      <directionalLight color="#E9EDF0" position={[-3, 5, 5]} intensity={0.55} />
      {exhibitPlacements.map(({ projectId, position, rotation }) => (
        <ExhibitSpotlight
          key={projectId}
          position={position}
          rotation={rotation}
          featured={projectId === 'silondo'}
        />
      ))}
    </>
  )
}
