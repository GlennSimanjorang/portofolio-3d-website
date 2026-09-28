import { Canvas } from '@react-three/fiber'
import Experience from './components/three/Experience'

export default function App() {
  return (
    <main style={{ position: 'fixed', inset: 0 }}>
      <Canvas camera={{ position: [0, 1.7, 1], rotation: [0, 0, 0], fov: 50 }}>
        <color attach="background" args={['#101827']} />
        <Experience />
      </Canvas>
    </main>
  )
}
