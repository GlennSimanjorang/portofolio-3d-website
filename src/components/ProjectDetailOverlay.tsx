import type { Project, ProjectImage } from '../data/projects'
import './ProjectDetailOverlay.css'

type ProjectDetailOverlayProps = {
  project: Project
  onClose: () => void
}

function DetailImage({ image, lazy = false }: { image: ProjectImage; lazy?: boolean }) {
  return (
    <figure className="project-detail-figure">
      <img
        className="project-detail-image"
        src={image.src}
        alt={image.alt}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
      />
      <figcaption>{image.alt}</figcaption>
    </figure>
  )
}

export default function ProjectDetailOverlay({ project, onClose }: ProjectDetailOverlayProps) {
  return (
    <div className="project-detail-backdrop">
      <section
        className="project-detail-panel"
        role="dialog"
        aria-labelledby="project-detail-title"
      >
        <header className="project-detail-toolbar">
          <span className="project-detail-kicker">Project details</span>
          <button className="project-detail-close" type="button" onClick={onClose} autoFocus>
            Close <span aria-hidden="true">&#215;</span>
          </button>
        </header>

        <div className="project-detail-scroll" tabIndex={0} role="region" aria-label="Project case study">
          <div className="project-detail-introduction">
            <h2 id="project-detail-title" className="project-detail-title">
              {project.title}
            </h2>
            <p className="project-detail-meta">
              <span>{project.year}</span>
              <span>{project.category}</span>
            </p>
            <p className="project-detail-description">{project.shortDescription}</p>

            <section className="project-detail-technologies" aria-labelledby="project-detail-tech-title">
              <h3 id="project-detail-tech-title" className="project-detail-section-title">Tech stack</h3>
              <ul className="project-detail-tech-stack">
                {project.techStack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </section>
          </div>

          {project.media && (
            <section className="project-detail-media" aria-labelledby="project-detail-media-title">
              <h3 id="project-detail-media-title" className="project-detail-section-title">Project media</h3>
              <DetailImage image={project.media.primary} />
              {project.media.screenshots && project.media.screenshots.length > 0 && (
                <div className="project-detail-screenshots">
                  <h4 className="project-detail-section-title">Additional screenshots</h4>
                  {project.media.screenshots.map((screenshot) => (
                    <DetailImage key={screenshot.src} image={screenshot} lazy />
                  ))}
                </div>
              )}
            </section>
          )}
        </div>
      </section>
    </div>
  )
}
