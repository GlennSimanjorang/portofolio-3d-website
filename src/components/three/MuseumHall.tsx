import { exhibitPlacements } from './sceneConfig'
import { scenePalette } from './scenePalette'

export default function MuseumHall() {
  return (
    <group>
      <mesh position={[0, -0.05, -8.5]}>
        <boxGeometry args={[14, 0.1, 23]} />
        <meshStandardMaterial color={scenePalette.floor} roughness={0.82} />
      </mesh>
      <mesh position={[-7.05, 2.5, -8.5]}>
        <boxGeometry args={[0.1, 5, 23]} />
        <meshStandardMaterial color={scenePalette.architecture} roughness={0.88} />
      </mesh>
      <mesh position={[7.05, 2.5, -8.5]}>
        <boxGeometry args={[0.1, 5, 23]} />
        <meshStandardMaterial color={scenePalette.architecture} roughness={0.88} />
      </mesh>
      <mesh position={[-2.5, 2.5, -20.05]}>
        <boxGeometry args={[9.2, 5, 0.1]} />
        <meshStandardMaterial color={scenePalette.architecture} roughness={0.88} />
      </mesh>
      <mesh position={[5.8, 2.5, -20.05]}>
        <boxGeometry args={[2.6, 5, 0.1]} />
        <meshStandardMaterial color={scenePalette.architecture} roughness={0.88} />
      </mesh>
      <mesh position={[3.3, 4.2, -20.05]}>
        <boxGeometry args={[2.4, 1.6, 0.1]} />
        <meshStandardMaterial color={scenePalette.architecture} roughness={0.88} />
      </mesh>

      {/* A restrained portal gives the open front a clear entrance. */}
      <mesh position={[-5.25, 2.15, 2.8]}>
        <boxGeometry args={[0.2, 4.3, 0.36]} />
        <meshStandardMaterial color={scenePalette.architectureSecondary} roughness={0.78} />
      </mesh>
      <mesh position={[5.25, 2.15, 2.8]}>
        <boxGeometry args={[0.2, 4.3, 0.36]} />
        <meshStandardMaterial color={scenePalette.architectureSecondary} roughness={0.78} />
      </mesh>
      <mesh position={[0, 4.3, 2.8]}>
        <boxGeometry args={[10.7, 0.2, 0.36]} />
        <meshStandardMaterial color={scenePalette.architectureSecondary} roughness={0.78} />
      </mesh>

      {/* A flush threshold and aisle establish the route without extra UI. */}
      <mesh position={[0, 0.01, 0]}>
        <boxGeometry args={[9, 0.02, 1.2]} />
        <meshStandardMaterial color={scenePalette.aisle} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.01, -8.5]}>
        <boxGeometry args={[2.4, 0.02, 15.8]} />
        <meshStandardMaterial color={scenePalette.aisle} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.01, -17.4]}>
        <boxGeometry args={[5.4, 0.02, 2]} />
        <meshStandardMaterial color={scenePalette.aisle} roughness={0.8} />
      </mesh>

      {exhibitPlacements.map(({ projectId, position, rotation, size }) => (
        <group key={projectId} position={position} rotation={rotation}>
          <mesh position={[0, 1.7 - position[1], -0.18]}>
            <boxGeometry args={[size[0] + 0.5, 3.4, 0.2]} />
            <meshStandardMaterial color={scenePalette.architecture} roughness={0.88} />
          </mesh>
          <mesh position={[0, 0.68 - position[1], 0.08]}>
            <boxGeometry args={[size[0] + 0.8, 0.12, 0.5]} />
            <meshStandardMaterial color={scenePalette.architectureSecondary} roughness={0.72} />
          </mesh>
        </group>
      ))}

      {/* An empty passage reserves the next area; it is not navigation yet. */}
      <mesh position={[3.3, -0.05, -21]}>
        <boxGeometry args={[2.4, 0.1, 6]} />
        <meshStandardMaterial color={scenePalette.floor} roughness={0.82} />
      </mesh>
      <mesh position={[2.05, 2.5, -22]}>
        <boxGeometry args={[0.1, 5, 4]} />
        <meshStandardMaterial color={scenePalette.architecture} roughness={0.88} />
      </mesh>
      <mesh position={[4.55, 2.5, -22]}>
        <boxGeometry args={[0.1, 5, 4]} />
        <meshStandardMaterial color={scenePalette.architecture} roughness={0.88} />
      </mesh>
    </group>
  )
}
