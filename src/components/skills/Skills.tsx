import { profileContent } from "@/data/profile";

const Skills = () => {
  const { skills } = profileContent;

  return (
    <section id="skills" className="section-shell">
      <div className="section-heading-wrap">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title">Technical Capability Matrix</h2>
        <p className="section-description">
          Core NLP, ML, and engineering tools used in day-to-day research and
          experimentation.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {skills.map((group) => (
          <article key={group.id} className="editorial-card p-6">
            <h3 className="heading-font text-xl text-[var(--text-primary)]">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((item) => (
                <span key={item} className="tag-pill">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
