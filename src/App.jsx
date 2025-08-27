import React from "react";
import { styles } from "./ui/classnames.js";
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
    try {
      localStorage.setItem("theme", mode);
    } catch {}
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

  const cycleMode = () =>
    setMode((m) => (m === "auto" ? "light" : m === "light" ? "dark" : "auto"));

  // Back-to-top visibility
  const [showTop, setShowTop] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        "min-h-screen font-sans selection:bg-indigo-500/40 antialiased " +
        (isDark ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900")
      }
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border focus:px-3 focus:py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 "
      >
        Skip to content
      </a>
      {/* Decorative background: soft radial + noise overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-[-10%] bg-radial-soft" />
        <div className="absolute inset-0 bg-noise" />
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

      {/* Back to Top button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={styles.backToTop(isDark, showTop)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5l-7 7m7-7l7 7M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
