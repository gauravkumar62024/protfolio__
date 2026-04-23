import Awards from "@/components/awards/Awards";
import Contact from "@/components/contact/Contact";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Publications from "@/components/publications/Publications";
import ResearchFocus from "@/components/research/ResearchFocus";
import Skills from "@/components/skills/Skills";
import Talks from "@/components/talks/Talks";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-300">
      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <ResearchFocus />
        <Publications />
        <Experience />
        <Projects />
        <Gallery />
        <Talks />
        <Awards />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
