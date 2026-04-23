import { profileContent } from "@/data/profile";

const Experience = () => {
  const { experience } = profileContent;

  return (
    <section id="experience" className="section-shell">
      <div className="section-heading-wrap">
        <p className="section-kicker">Work Experience</p>
        <h2 className="section-title">Research and Thesis Work</h2>
        <p className="section-description">
          Academic research experience with supervisor context and outcome-focused
          highlights.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {experience.map((item) => (
          <article key={item.id} className="editorial-card p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="heading-font text-2xl text-[var(--text-primary)]">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[var(--accent-strong)]">
                  {item.organization}
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {item.location}
                </p>
              </div>
              <span className="tag-pill">{item.period}</span>
            </div>

            {item.supervisor ? (
              <p className="mt-4 text-sm text-[var(--text-secondary)]">
                <span className="font-semibold">Supervisor:</span> {item.supervisor}
              </p>
            ) : null}

            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
              {item.highlights.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-strong)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
