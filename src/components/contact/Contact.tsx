import { ReactNode } from "react";
import { profileContent } from "@/data/profile";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const iconMap: Record<string, ReactNode> = {
  LinkedIn: <FaLinkedin aria-hidden className="text-lg" />,
  GitHub: <FaGithub aria-hidden className="text-lg" />,
};

const Contact = () => {
  const { contact } = profileContent;

  return (
    <section id="contact" className="section-shell pb-20">
      <div className="section-heading-wrap">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Let&apos;s Collaborate</h2>
        <p className="section-description">
          Open to research collaboration, NLP engineering opportunities, and
          academic discussions.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">
        <article className="editorial-card p-6 md:p-8">
          <div className="flex items-center gap-3 text-[var(--text-primary)]">
            <FaEnvelope className="text-lg text-[var(--accent-strong)]" aria-hidden />
            <h3 className="heading-font text-2xl">Email</h3>
          </div>
          <div className="mt-5 space-y-2 text-sm leading-7 text-[var(--text-secondary)]">
            <p>
              <a href={`mailto:${contact.primaryEmail}`} className="text-link">
                {contact.primaryEmail}
              </a>
            </p>
            {contact.secondaryEmail ? (
              <p>
                <a href={`mailto:${contact.secondaryEmail}`} className="text-link">
                  {contact.secondaryEmail}
                </a>
              </p>
            ) : null}
            <p className="text-[var(--text-muted)]">{contact.location}</p>
          </div>
        </article>

        <article className="editorial-card p-6 md:p-8">
          <h3 className="heading-font text-2xl text-[var(--text-primary)]">
            Professional Profiles
          </h3>
          <div className="mt-5 flex flex-col gap-3">
            {contact.links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--line-subtle)] px-4 py-3 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent-strong)] hover:text-[var(--accent-strong)]"
              >
                {iconMap[item.label] ?? null}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contact;
