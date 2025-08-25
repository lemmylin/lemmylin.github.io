import React from "react";

export default function Footer({ profile, isDark }) {
  return (
    <footer
      className={
        "mx-auto w-full max-w-6xl px-4 pb-12 pt-6 text-center text-sm sm:px-6 lg:px-8 " +
        (isDark ? "text-white/60" : "text-slate-600")
      }
    >
      © {new Date().getFullYear()} {profile.name}. Built with React + Tailwind. Hosted on GitHub Pages.
      <div className="mt-3 flex items-center justify-center gap-3">
        <a
          href="https://www.instagram.com/lemmylin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram: @lemmylin"
          className={
            "inline-flex items-center gap-2 rounded-lg px-3 py-1 transition " +
            (isDark
              ? "border border-white/15 text-white/80 hover:bg-white/5"
              : "border border-black/10 text-slate-700 hover:bg-black/5")
          }
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
          </svg>
          <span>@lemmylin</span>
        </a>
      </div>
    </footer>
  );
}
