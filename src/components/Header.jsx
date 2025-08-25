import React from "react";

export default function Header({ isDark, mode, cycleMode }) {
  const ModeIcon = () => {
    if (mode === "auto")
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M3 5h18v2H3zM3 11h18v2H3zM3 17h18v2H3z" fill="currentColor" />
        </svg>
      );
    if (mode === "light")
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5 5L4 4m15 16l-1-1M5 19l-1 1m16-16l-1 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      );
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
      </svg>
    );
  };

  return (
    <header
      className={
        "sticky top-0 z-20 border-b backdrop-blur " +
        (isDark ? "border-white/10 bg-slate-950/70" : "border-black/10 bg-white/70")
      }
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="Home">
          <span
            className={
              "font-signature select-none text-2xl leading-none " +
              (isDark ? "text-indigo-300" : "text-indigo-700")
            }
          >
            Lemmy
          </span>
        </a>
        <div className="flex items-center gap-3 text-sm">
          <a className={isDark ? "hover:text-indigo-300" : "hover:text-indigo-600"} href="#about">About</a>
          <a className={isDark ? "hover:text-indigo-300" : "hover:text-indigo-600"} href="#experience">Experience</a>
          <a className={isDark ? "hover:text-indigo-300" : "hover:text-indigo-600"} href="#projects">Projects</a>
          <a className={isDark ? "hover:text-indigo-300" : "hover:text-indigo-600"} href="#skills">Skills</a>
          <a className={isDark ? "hover:text-indigo-300" : "hover:text-indigo-600"} href="#education">Education</a>
          <a
            className={
              "rounded-lg px-3 py-1 " +
              (isDark ? "border border-white/15 hover:bg-white/5" : "border border-black/10 hover:bg-black/5")
            }
            href="#contact"
          >
            Contact
          </a>
          <button
            onClick={cycleMode}
            aria-label={`Theme: ${mode}`}
            title={`Theme: ${mode}`}
            className={
              "inline-flex items-center gap-2 rounded-lg px-3 py-1 transition " +
              (isDark
                ? "border border-white/15 bg-white/5 hover:bg-white/10"
                : "border border-black/10 bg-black/5 hover:bg-black/10")
            }
          >
            <ModeIcon />
            <span className="hidden sm:inline">{mode.charAt(0).toUpperCase() + mode.slice(1)}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
