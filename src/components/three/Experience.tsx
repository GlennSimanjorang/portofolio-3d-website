import MuseumHall from './MuseumHall'

export default function Experience() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[3, 4, 5]} intensity={1} />
      <MuseumHall />
    </>
  )
}
