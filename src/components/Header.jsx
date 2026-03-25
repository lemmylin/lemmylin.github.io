import React, { useEffect, useRef, useState } from "react";
import { styles } from "../ui/classnames.js";
import Logo from "../ui/Logo.jsx";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

export default function Header({ isDark, mode, cycleMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const btnRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["top", "about", "experience", "projects", "skills", "education", "contact"];
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(`#${id}`); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    const onClick = (e) => {
      if (
        panelRef.current && !panelRef.current.contains(e.target) &&
        btnRef.current && !btnRef.current.contains(e.target)
      ) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const ModeIcon = () => {
    if (mode === "light")
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5 5L4 4m15 16l-1-1M5 19l-1 1m16-16l-1 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      );
    if (mode === "dark")
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
        </svg>
      );
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  };

  return (
    <header className={styles.headerContainer(scrolled)}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" aria-label="Home" className="group flex items-center gap-2.5">
          <Logo size={32} />
          <span className="text-sm font-bold dark:text-slate-200 text-slate-800 dark:group-hover:text-violet-400 group-hover:text-violet-600 transition-colors hidden sm:block">
            Lemmy <span className="dark:text-violet-400 text-violet-600">Lin</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={styles.navLink(activeSection === href)}>
              {label}
            </a>
          ))}
          <div className="ml-3 flex items-center gap-2">
            <a href="#contact" className="btn-primary py-1.5 px-4 text-sm">
              Contact
            </a>
            <button
              onClick={cycleMode}
              aria-label={`Theme: ${mode}`}
              title={`Theme: ${mode}`}
              className="h-8 w-8 flex items-center justify-center rounded-lg border dark:border-violet-500/20 border-violet-300/60 dark:bg-violet-500/6 bg-violet-50 dark:text-slate-400 text-slate-600 dark:hover:text-violet-400 hover:text-violet-600 transition-all duration-200"
            >
              <ModeIcon />
            </button>
          </div>
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={cycleMode}
            aria-label={`Theme: ${mode}`}
            className="h-8 w-8 flex items-center justify-center rounded-lg border dark:border-violet-500/20 border-violet-300/60 dark:bg-violet-500/6 bg-violet-50 dark:text-slate-400 text-slate-600"
          >
            <ModeIcon />
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            ref={btnRef}
            className="h-8 w-8 flex items-center justify-center rounded-lg border dark:border-violet-500/20 border-violet-300/60 dark:bg-violet-500/6 bg-violet-50 dark:text-slate-400 text-slate-600 dark:hover:text-violet-400 hover:text-violet-600 transition-colors"
          >
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            id="mobile-menu"
            ref={panelRef}
            className="absolute right-4 top-[calc(100%+8px)] z-50 w-56 overflow-hidden rounded-2xl border dark:border-violet-500/15 border-slate-200 dark:bg-[#0e0e1c]/96 bg-white/96 shadow-2xl dark:shadow-black/50 shadow-black/10 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col p-2 gap-0.5">
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={styles.navLinkMobile(activeSection === href)}
                >
                  {label}
                </a>
              ))}
              <div className="my-1 border-t dark:border-violet-500/10 border-slate-100" />
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center btn-primary text-sm py-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
