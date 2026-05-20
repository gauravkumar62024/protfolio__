import Image from "next/image";
import { profileContent } from "@/data/profile";

const Hero = () => {
  const { hero } = profileContent;

  return (
    <section id="home" className="section-shell pt-16 md:pt-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-6">
          <p className="section-kicker"></p>
          <h1 className="heading-font text-4xl leading-tight text-[var(--text-primary)] md:text-6xl">
            {hero.name}
          </h1>
          <p className="text-lg font-semibold text-[var(--accent-strong)] md:text-xl">
            {hero.role}
          </p>
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--text-muted)]">
            {hero.institution}
          </p>
          <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            {hero.summary}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="editorial-card overflow-hidden p-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
              <Image
                src={hero.profileImage}
                alt={hero.name}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3">
        {hero.metrics.map((metric) => (
          <div key={metric.label} className="editorial-card space-y-2 p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
              {metric.label}
            </p>
            <p className="text-sm font-semibold text-[var(--text-primary)] md:text-base">
              {metric.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
