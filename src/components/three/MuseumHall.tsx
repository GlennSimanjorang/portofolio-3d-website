export default function MuseumHall() {
  return (
    <group>
      <mesh position={[0, -0.05, -7]}>
        <boxGeometry args={[12, 0.1, 14]} />
        <meshStandardMaterial color="#858b91" />
      </mesh>
      <mesh position={[-6.05, 2.5, -7]}>
        <boxGeometry args={[0.1, 5, 14]} />
        <meshStandardMaterial color="#b8bdc2" />
      </mesh>
      <mesh position={[6.05, 2.5, -7]}>
        <boxGeometry args={[0.1, 5, 14]} />
        <meshStandardMaterial color="#b8bdc2" />
      </mesh>
      <mesh position={[0, 2.5, -14.05]}>
        <boxGeometry args={[12.2, 5, 0.1]} />
        <meshStandardMaterial color="#b8bdc2" />
      </mesh>
    </group>
  )
}
