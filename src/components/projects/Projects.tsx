import Image from "next/image";
import { profileContent } from "@/data/profile";

const Projects = () => {
  const { projects } = profileContent;

  return (
    <section id="projects" className="section-shell">
      <div className="section-heading-wrap">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Selected Research Projects</h2>
        <p className="section-description">
          Applied systems and prototypes aligned with NLP research objectives.
        </p>
      </div>

      <div className="mt-8 grid gap-6">
        {projects.map((project) => (
          <article key={project.id} className="editorial-card overflow-hidden p-0">
            <div className="grid gap-0 md:grid-cols-[1fr_1.15fr]">
              <div className="relative min-h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 p-6 md:p-8">
                <h3 className="heading-font text-2xl text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.links.repo ? (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      Repository
                    </a>
                  ) : null}
                  {project.links.demo ? (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
