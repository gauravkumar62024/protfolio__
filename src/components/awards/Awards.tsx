import { profileContent } from "@/data/profile";

const Awards = () => {
  const { awards, certifications } = profileContent;

  return (
    <section id="awards" className="section-shell">
      <div className="section-heading-wrap">
        <p className="section-kicker">Recognition</p>
        <h2 className="section-title">Awards and Certifications</h2>
        <p className="section-description">
          Competitive achievements and formal training milestones.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="editorial-card p-6 md:p-8">
          <h3 className="heading-font text-2xl text-[var(--text-primary)]">Honors</h3>
          <div className="mt-5 space-y-4">
            {awards.map((item) => (
              <div key={item.id} className="rounded-lg border border-[var(--line-subtle)] p-4">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.issuer}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {item.year}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="editorial-card p-6 md:p-8">
          <h3 className="heading-font text-2xl text-[var(--text-primary)]">
            Certifications and Training
          </h3>
          <div className="mt-5 space-y-4">
            {certifications.map((item) => (
              <div key={item.id} className="rounded-lg border border-[var(--line-subtle)] p-4">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.issuer}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {item.year}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Awards;
