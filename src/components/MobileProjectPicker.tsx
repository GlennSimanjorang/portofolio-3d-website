import type { Project } from '../data/projects'
import './MobileProjectPicker.css'

type MobileProjectPickerProps = {
  projects: Project[]
  disabled: boolean
  onSelect: (project: Project) => void
}

export default function MobileProjectPicker({
  projects,
  disabled,
  onSelect,
}: MobileProjectPickerProps) {
  return (
    <div className="mobile-project-picker">
      <label htmlFor="mobile-project-select">Explore projects</label>
      <select
        id="mobile-project-select"
        value=""
        disabled={disabled}
        onChange={(event) => {
          const project = projects.find(({ id }) => id === event.target.value)
          if (project) onSelect(project)
        }}
      >
        <option value="" disabled>
          Select an exhibit
        </option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.title}
          </option>
        ))}
      </select>
    </div>
  )
}
