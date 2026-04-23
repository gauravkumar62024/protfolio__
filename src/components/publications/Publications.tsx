import { profileContent } from "@/data/profile";
import { PublicationStatus } from "@/types/profile";

const statusLabel: Record<PublicationStatus, string> = {
  accepted: "Accepted",
  under_review: "Under Review",
  submitted: "Submitted",
};

const statusClass: Record<PublicationStatus, string> = {
  accepted: "status-badge status-accepted",
  under_review: "status-badge status-under-review",
  submitted: "status-badge status-submitted",
};

const Publications = () => {
  const { publications } = profileContent;

  return (
    <section id="publications" className="section-shell">
      <div className="section-heading-wrap">
        <p className="section-kicker">Publications</p>
        <h2 className="section-title">Selected Papers</h2>
        <p className="section-description">
          Detailed publication entries with venue, year, status, and direct action
          links.
        </p>
      </div>

      <div className="mt-8 space-y-5">
        {publications.map((publication) => (
          <article key={publication.id} className="editorial-card p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                {publication.venue} · {publication.year}
              </p>
              <span className={statusClass[publication.status]}>
                {statusLabel[publication.status]}
              </span>
            </div>

            <h3 className="mt-4 heading-font text-2xl leading-tight text-[var(--text-primary)]">
              {publication.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-[var(--text-secondary)]">
              {publication.authors}
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
              {publication.abstract}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {publication.links.paper ? (
                <a
                  href={publication.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Paper
                </a>
              ) : (
                <span className="btn-disabled" aria-disabled>
                  Paper Coming soon
                </span>
              )}

              {publication.links.code ? (
                <a
                  href={publication.links.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Code
                </a>
              ) : null}

              {publication.links.slides ? (
                <a
                  href={publication.links.slides}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Slides
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Publications;
