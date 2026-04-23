import { profileContent } from "@/data/profile";

const Talks = () => {
  const { talks, service } = profileContent;

  return (
    <section id="talks" className="section-shell">
      <div className="section-heading-wrap">
        <p className="section-kicker">Outreach</p>
        <h2 className="section-title">Talks, Workshops, and Service</h2>
        <p className="section-description">
          Academic engagement through symposium participation, workshops, and
          community contribution.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="editorial-card p-6 md:p-8">
          <h3 className="heading-font text-2xl text-[var(--text-primary)]">
            Talks and Workshops
          </h3>
          <div className="mt-5 space-y-4">
            {talks.map((item) => (
              <div key={item.id} className="rounded-lg border border-[var(--line-subtle)] p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {item.type}
                </p>
                <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
                  {item.event}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {item.location} · {item.date}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="editorial-card p-6 md:p-8">
          <h3 className="heading-font text-2xl text-[var(--text-primary)]">
            Service and Community
          </h3>
          <div className="mt-5 space-y-4">
            {service.map((item) => (
              <div key={item.id} className="rounded-lg border border-[var(--line-subtle)] p-4">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {item.organization}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">
                  {item.period}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                  {item.details}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Talks;
