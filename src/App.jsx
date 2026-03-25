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
  const [showTop, setShowTop] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-0 focus:top-0 focus:z-[200] focus:bg-[#ff3000] focus:text-white focus:px-6 focus:py-3 focus:font-bold focus:uppercase focus:tracking-widest focus:outline-none"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="swiss-noise">
        <Hero profile={profile} />
        <About />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Education education={education} />
        <Contact profile={profile} />
      </main>

      <Footer profile={profile} />

      {/* Back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 w-10 h-10 flex items-center justify-center bg-black text-white border-2 border-black transition-all duration-150 hover:bg-[#ff3000] hover:border-[#ff3000] ${
          showTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5l-7 7m7-7l7 7M12 5v14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
      </button>
    </>
  );
}
