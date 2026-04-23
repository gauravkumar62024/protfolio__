"use client";

import { useTheme } from "../../context/ThemeContext";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggleButton: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-lg border border-[var(--line-subtle)] bg-[var(--surface)]" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="group rounded-lg border border-[var(--line-subtle)] bg-[var(--surface)] p-2 text-[var(--text-primary)] transition-colors hover:border-[var(--accent-strong)] hover:text-[var(--accent-strong)]"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <SunIcon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <MoonIcon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
