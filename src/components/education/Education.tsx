import { profileContent } from "@/data/profile";

const Education = () => {
  const { education } = profileContent;

  return (
    <section id="education" className="section-shell">
      <div className="section-heading-wrap">
        <p className="section-kicker">Education</p>
        <h2 className="section-title">Academic Training</h2>
      </div>

      <div className="mt-8 space-y-5">
        {education.map((item) => (
          <article key={item.id} className="editorial-card p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="heading-font text-2xl text-[var(--text-primary)]">
                  {item.degree} · {item.field}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[var(--accent-strong)]">
                  {item.institution}
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {item.location}
                </p>
              </div>
              <div className="text-right">
                <span className="tag-pill">{item.period}</span>
                {item.score ? (
                  <p className="mt-2 text-sm font-medium text-[var(--text-secondary)]">
                    {item.score}
                  </p>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
