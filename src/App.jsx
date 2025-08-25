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

  return (
    <div
      className={
        "min-h-screen selection:bg-indigo-500/40 " +
        (isDark ? "bg-slate-950 text-slate-100" : "bg-white text-slate-900")
      }
    >
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[32rem] w-[32rem] rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <Header isDark={isDark} mode={mode} cycleMode={cycleMode} />

      <Hero profile={profile} isDark={isDark} />

      <About isDark={isDark} />

      <Experience experience={experience} isDark={isDark} />

      <Projects projects={projects} isDark={isDark} />

      <Skills skills={skills} isDark={isDark} />

      <Education education={education} isDark={isDark} />

      <Contact profile={profile} isDark={isDark} />

      <Footer profile={profile} isDark={isDark} />
    </div>
  );
}
