"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggleButton from "../themes/ThemeToggleButton";

const PROFILE_NAME = "Gaurav Kumar";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
  { href: "#talks", label: "Outreach" },
  { href: "#awards", label: "Awards" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 14);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.25, 0.4, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className={`rounded-2xl border transition-all duration-300 ${
        isScrolled
          ? "border-[var(--line-strong)] bg-[var(--surface-strong)] shadow-[0_10px_32px_rgba(8,22,48,0.18)] backdrop-blur-xl"
          : "border-[var(--line-subtle)] bg-[var(--surface)] backdrop-blur-md"
      }`}
    >
      <div className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href="#home"
          className="heading-font text-lg font-semibold tracking-wide text-[var(--text-primary)]"
        >
          {PROFILE_NAME}
        </a>

        <div className="hidden lg:flex items-center gap-3">
          <div className="no-scrollbar flex max-w-[58vw] items-center gap-1 overflow-x-auto pr-1">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors ${
                    isActive
                      ? "bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--accent-strong)]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <ThemeToggleButton />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggleButton />
          <button
            onClick={() => setIsOpen((value) => !value)}
            className="rounded-lg border border-[var(--line-subtle)] bg-[var(--surface)] p-2 text-[var(--text-primary)]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-[var(--line-subtle)] px-4 pb-4 pt-2 lg:hidden">
          <div className="grid grid-cols-2 gap-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)] transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--accent-strong)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
