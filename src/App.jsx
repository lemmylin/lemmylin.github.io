import React from "react";
import profile from "./data/profile.js";
import experience from "./data/experience.js";
import projects from "./data/projects.js";
import skills from "./data/skills.js";
import education from "./data/education.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [dark, setDark] = React.useState(() => {
    try {
      const s = localStorage.getItem("theme");
      if (s === "light") return false;
      if (s === "dark") return true;
      return window.matchMedia?.("(prefers-color-scheme: dark)").matches !== false;
    } catch {
      return true;
    }
  });

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  const [showTop, setShowTop] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[var(--c-bg)] focus:px-4 focus:py-2 focus:border focus:border-[var(--c-border-2)] focus:text-[var(--c-text)] focus:outline-none"
      >
        Skip to content
      </a>

      <div
        className="min-h-screen"
        style={{ background: "var(--c-bg)", color: "var(--c-text)" }}
      >
        <Header dark={dark} onToggle={() => setDark((d) => !d)} />

        <main id="main">
          <Hero profile={profile} />
          <About />
          <Experience experience={experience} />
          <Projects projects={projects} />
          <Skills skills={skills} />
          <Education education={education} />
          <Contact profile={profile} />
        </main>

        <Footer profile={profile} />
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`back-to-top transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5l-7 7m7-7l7 7M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}

export default function App() {
  // Theme: auto | light | dark
  const [mode, setMode] = React.useState(() =>
    localStorage.getItem("theme") || "auto"
  );
  const [systemDark, setSystemDark] = React.useState(() =>
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : true
  );
  React.useEffect(() => {
    try { localStorage.setItem("theme", mode); } catch {}
  }, [mode]);
  React.useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => setSystemDark(e.matches);
    mq.addEventListener?.("change", onChange) || mq.addListener?.(onChange);
    return () => {
      mq.removeEventListener?.("change", onChange) || mq.removeListener?.(onChange);
    };
  }, []);
  const isDark = mode === "dark" || (mode === "auto" && systemDark);
  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDark);
    root.style.colorScheme = isDark ? "dark" : "light";
  }, [isDark]);

  const cycleMode = () => setMode(isDark ? "light" : "dark");

  // Back-to-top visibility
  const [showTop, setShowTop] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        "min-h-screen antialiased selection:bg-violet-500/20 " +
        (isDark ? "bg-[#070714] text-slate-100" : "bg-slate-50 text-slate-900")
      }
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border focus:border-violet-400/60 focus:px-3 focus:py-2 focus:outline-none"
      >
        Skip to content
      </a>

      {/* Background: dot grid + animated gradient orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid" />
        <div
          className="orb-violet absolute -top-1/3 -left-1/4 h-[80vh] w-[80vh] rounded-full opacity-60"
          style={{ animation: "orb-drift 20s ease-in-out infinite" }}
        />
        <div
          className="orb-cyan absolute -bottom-1/3 -right-1/4 h-[65vh] w-[65vh] rounded-full opacity-50"
          style={{ animation: "orb-drift 26s ease-in-out infinite reverse" }}
        />
        <div
          className="orb-violet absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40vh] w-[40vh] rounded-full opacity-20"
          style={{ animation: "orb-drift 15s ease-in-out infinite 5s" }}
        />
      </div>

      <Header isDark={isDark} mode={mode} cycleMode={cycleMode} />

      <main id="main">
        <Hero profile={profile} isDark={isDark} />
        <About isDark={isDark} />
        <Experience experience={experience} isDark={isDark} />
        <Projects projects={projects} isDark={isDark} />
        <Skills skills={skills} isDark={isDark} />
        <Education education={education} isDark={isDark} />
        <Contact profile={profile} isDark={isDark} />
      </main>

      <Footer profile={profile} isDark={isDark} />

      {/* Back to Top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={styles.backToTop(showTop)}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5l-7 7m7-7l7 7M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
