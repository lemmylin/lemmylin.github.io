import React from "react";

export default function Footer({ profile, isDark }) {
  return (
    <footer
      className={
        "relative mx-auto w-full max-w-6xl px-4 pb-12 pt-6 text-center text-sm sm:px-6 lg:px-8 before:absolute before:inset-x-0 before:-top-px before:h-px before:bg-gradient-to-r before:from-transparent " +
        (isDark ? "text-white/60 before:via-white/10 before:to-transparent" : "text-slate-600 before:via-black/10 before:to-transparent")
      }
    >
      © {new Date().getFullYear()} {profile.name}. Built with React + Tailwind. Hosted on GitHub Pages.
      
    </footer>
  );
}
