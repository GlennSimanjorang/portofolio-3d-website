import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { Euler, Matrix4, PerspectiveCamera, Quaternion, Vector3 } from 'three'
import { getCompactOverviewCamera, exhibitPlacements, overviewCamera } from './sceneConfig'

type CameraControllerProps = {
  selectedProjectId: string | null
  transitionRequestId: number
  isCompactViewport: boolean
  onTransitionComplete: (requestId: number) => void
}

const transitionDuration = 1.8

export default function CameraController({
  selectedProjectId,
  transitionRequestId,
  isCompactViewport,
  onTransitionComplete,
}: CameraControllerProps) {
  const camera = useThree((state) => state.camera as PerspectiveCamera)
  const aspect = useThree((state) => state.size.width / state.size.height)
  const initialized = useRef(false)
  const transition = useRef({
    fromPosition: new Vector3(),
    fromRotation: new Quaternion(),
    toPosition: new Vector3(),
    toRotation: new Quaternion(),
    fromFov: overviewCamera.fov,
    toFov: overviewCamera.fov,
    requestId: 0,
    duration: transitionDuration,
    elapsed: transitionDuration,
  })

  useLayoutEffect(() => {
    if (initialized.current) return
    initialized.current = true
    if (!isCompactViewport) return

    const compactOverviewCamera = getCompactOverviewCamera(aspect)
    camera.position.set(...compactOverviewCamera.position)
    camera.rotation.set(...compactOverviewCamera.rotation)
    camera.fov = compactOverviewCamera.fov
    camera.updateProjectionMatrix()
  }, [camera, isCompactViewport, aspect])

  useEffect(() => {
    const view = isCompactViewport ? getCompactOverviewCamera(aspect) : overviewCamera
    const placement = isCompactViewport
      ? undefined
      : exhibitPlacements.find(({ projectId }) => projectId === selectedProjectId)
    const toPosition = placement
      ? new Vector3(...placement.cameraPosition)
      : new Vector3(...view.position)
    const toRotation = placement
      ? new Quaternion().setFromRotationMatrix(
          new Matrix4().lookAt(
            toPosition,
            new Vector3(...placement.position).add(new Vector3(...placement.targetOffset)),
            camera.up,
          ),
        )
      : new Quaternion().setFromEuler(
          new Euler(...view.rotation),
        )
    const toFov = view.fov
    const sameView =
      camera.position.distanceToSquared(toPosition) < 0.000001 &&
      camera.quaternion.angleTo(toRotation) < 0.0001 &&
      Math.abs(camera.fov - toFov) < 0.001

    transition.current.fromPosition.copy(camera.position)
    transition.current.fromRotation.copy(camera.quaternion)
    transition.current.toPosition.copy(toPosition)
    transition.current.toRotation.copy(toRotation)
    transition.current.fromFov = camera.fov
    transition.current.toFov = toFov
    transition.current.requestId = transitionRequestId
    transition.current.duration = sameView ? 0.05 : transitionDuration
    transition.current.elapsed = 0
  }, [camera, selectedProjectId, transitionRequestId, isCompactViewport, aspect])

  useFrame((_, delta) => {
    const current = transition.current
    if (current.elapsed >= current.duration) return

    current.elapsed = Math.min(current.duration, current.elapsed + delta)
    const progress = current.elapsed / current.duration
    const eased = progress * progress * (3 - 2 * progress)

    camera.position.lerpVectors(current.fromPosition, current.toPosition, eased)
    camera.quaternion.copy(current.fromRotation).slerp(current.toRotation, eased)
    if (current.fromFov !== current.toFov) {
      camera.fov = current.fromFov + (current.toFov - current.fromFov) * eased
      camera.updateProjectionMatrix()
    }
    if (current.elapsed === current.duration) onTransitionComplete(current.requestId)
  })

  return null
}
