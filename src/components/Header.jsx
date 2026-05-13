import React, { useState, useEffect, useRef } from "react";

const NAV = [
  { href: "#about",      label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects" },
  { href: "#skills",     label: "Skills" },
  { href: "#contact",    label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState("");
  const [menuOpen, setMenuOpen]   = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["top", ...NAV.map((n) => n.href.slice(1))];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive("#" + e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    const onClick = (e) => { if (!menuRef.current?.contains(e.target)) setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-[border-color] duration-200 ${
        scrolled ? "border-b-2 border-black" : "border-b-2 border-transparent"
      }`}
    >
      <div className="swiss-wrap flex items-center justify-between h-14" ref={menuRef}>
        {/* Logotype */}
        <a
          href="#top"
          aria-label="Lemmy Lin — Home"
          className="text-sm font-black uppercase tracking-widest hover:text-[#ff3000] transition-colors duration-150"
        >
          LL
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`swiss-label transition-colors duration-150 ${
                active === href ? "text-[#ff3000]" : "text-black hover:text-[#ff3000]"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href={`${import.meta.env.BASE_URL}Resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex btn btn-secondary h-9 px-4"
          >
            Résumé&nbsp;↗
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="md:hidden w-10 h-10 flex items-center justify-center border-2 border-black hover:bg-black hover:text-white transition-colors duration-150"
          >
            {menuOpen ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-nav" className="md:hidden bg-white border-t-2 border-black">
          <div className="swiss-wrap py-3 flex flex-col">
            {NAV.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 border-b border-black swiss-label transition-colors duration-150 ${
                  active === href ? "text-[#ff3000]" : "text-black hover:text-[#ff3000]"
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="pt-3 swiss-label text-black hover:text-[#ff3000] transition-colors duration-150"
            >
              Résumé&nbsp;↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
