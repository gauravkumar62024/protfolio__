import { profileContent } from "@/data/profile";

const ResearchFocus = () => {
  const { research } = profileContent;

  return (
    <section id="research" className="section-shell">
      <div className="section-heading-wrap">
        <p className="section-kicker">Research Focus</p>
        <h2 className="section-title">Reliable NLP for Fact Verification</h2>
        <p className="section-description">{research.headline}</p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="editorial-card p-6 md:p-8">
          <h3 className="heading-font text-2xl text-[var(--text-primary)]">
            Research Interests
          </h3>
          <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
            {research.summary}
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
            {research.interests.map((interest) => (
              <li key={interest} className="flex gap-3">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-strong)]" />
                <span>{interest}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="editorial-card p-6 md:p-8">
          <h3 className="heading-font text-2xl text-[var(--text-primary)]">
            Methods and Tooling
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {research.methods.map((method) => (
              <span key={method} className="tag-pill">
                {method}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default ResearchFocus;
