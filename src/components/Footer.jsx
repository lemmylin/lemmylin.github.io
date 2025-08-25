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
    </footer>
  );
}

