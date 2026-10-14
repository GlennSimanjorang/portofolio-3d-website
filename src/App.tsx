import { Canvas } from '@react-three/fiber'
import { useCallback, useEffect, useRef, useState } from 'react'
import MobileProjectPicker from './components/MobileProjectPicker'
import ProjectDetailOverlay from './components/ProjectDetailOverlay'
import Experience from './components/three/Experience'
import { compactViewportQuery, overviewCamera } from './components/three/sceneConfig'
import { scenePalette } from './components/three/scenePalette'
import { projects, type Project } from './data/projects'

const canvasCamera = overviewCamera
const projectList = Object.values(projects)

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionRequestId, setTransitionRequestId] = useState(0)
  const [isCompactViewport, setIsCompactViewport] = useState(() =>
    window.matchMedia(compactViewportQuery).matches,
  )
  const selectionLocked = useRef(false)
  const transitionTarget = useRef<string | null>(null)
  const activeTransitionRequest = useRef(0)
  const museumRef = useRef<HTMLElement>(null)
  const selectionControl = useRef<HTMLElement | null>(null)
  const returnFocusTarget = useRef<HTMLElement | null>(null)
  const shouldRestoreFocus = useRef(false)

  const captureSelectionControl = (target: EventTarget | null) => {
    selectionControl.current = target instanceof Element
      ? target.closest<HTMLElement>('button, select')
      : null
  }

  const beginTransition = useCallback((projectId: string | null) => {
    selectionLocked.current = true
    transitionTarget.current = projectId
    activeTransitionRequest.current += 1
    setTransitionRequestId(activeTransitionRequest.current)
    setIsTransitioning(true)
  }, [])

  const selectProject = useCallback((project: Project) => {
    if (selectionLocked.current || selectedProject?.id === project.id) return

    returnFocusTarget.current = selectionControl.current
    shouldRestoreFocus.current = false
    beginTransition(project.id)
    setSelectedProject(project)
  }, [beginTransition, selectedProject])

  const clearSelection = useCallback(() => {
    if (!selectedProject) return

    shouldRestoreFocus.current = true
    // Keep focus in the museum while the return transition disables its controls.
    museumRef.current?.focus({ preventScroll: true })
    beginTransition(null)
    setSelectedProject(null)
  }, [beginTransition, selectedProject])

  const handleTransitionComplete = useCallback((requestId: number) => {
    if (activeTransitionRequest.current !== requestId) return

    selectionLocked.current = false
    setIsTransitioning(false)
  }, [])

  useEffect(() => {
    const media = window.matchMedia(compactViewportQuery)
    const handleChange = () => {
      beginTransition(transitionTarget.current)
      setIsCompactViewport(media.matches)
    }

    // Compact framing also changes within a breakpoint as the aspect changes.
    window.addEventListener('resize', handleChange)
    return () => window.removeEventListener('resize', handleChange)
  }, [beginTransition])

  useEffect(() => {
    if (!selectedProject) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') clearSelection()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject, clearSelection])

  useEffect(() => {
    if (selectedProject || isTransitioning || !shouldRestoreFocus.current) return

    // Drei's plaque buttons live in separate React roots; allow their disabled state to commit.
    const frame = requestAnimationFrame(() => {
      shouldRestoreFocus.current = false
      if (document.activeElement !== museumRef.current && document.activeElement !== document.body) return

      const origin = returnFocusTarget.current
      const target = origin?.isConnected && !origin.closest('[hidden]') && !origin.matches(':disabled')
        ? origin
        : document.getElementById('mobile-project-select') ?? museumRef.current
      target?.focus({ preventScroll: true })
    })
    return () => cancelAnimationFrame(frame)
  }, [selectedProject, isTransitioning])

  return (
    <main
      ref={museumRef}
      tabIndex={-1}
      aria-label="Project museum"
      style={{ position: 'fixed', inset: 0 }}
      onClickCapture={(event) => captureSelectionControl(event.target)}
      onChangeCapture={(event) => captureSelectionControl(event.target)}
    >
      <Canvas camera={canvasCamera}>
        <color attach="background" args={[scenePalette.environment]} />
        <Experience
          selectedProjectId={selectedProject?.id ?? null}
          isTransitioning={isTransitioning}
          transitionRequestId={transitionRequestId}
          isCompactViewport={isCompactViewport}
          onSelectProject={selectProject}
          onCameraTransitionComplete={handleTransitionComplete}
        />
      </Canvas>
      {isCompactViewport && (
        <div hidden={selectedProject !== null}>
          <MobileProjectPicker
            projects={projectList}
            disabled={isTransitioning}
            onSelect={selectProject}
          />
        </div>
      )}
      {selectedProject && (
        <ProjectDetailOverlay key={selectedProject.id} project={selectedProject} onClose={clearSelection} />
      )}
    </main>
  )
}
