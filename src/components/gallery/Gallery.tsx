import Image from "next/image";
import { profileContent } from "@/data/profile";

const Gallery = () => {
  const { gallery } = profileContent;

  return (
    <section id="gallery" className="section-shell">
      <div className="section-heading-wrap">
        <p className="section-kicker">Gallery</p>
        <h2 className="section-title">Research Artifacts</h2>
        <p className="section-description">
          Figures and screenshots from ongoing NLP and fact-checking work.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {gallery.map((item) => (
          <article key={item.id} className="editorial-card overflow-hidden p-0">
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-2 p-5">
              <h3 className="heading-font text-xl text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                {item.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
