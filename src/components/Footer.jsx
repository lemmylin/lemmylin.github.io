import React from "react";

export default function Footer({ profile }) {
  return (
    <footer className="relative mx-auto w-full max-w-6xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-sky-400/15 to-transparent mb-6" />

      <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
        <span className="font-mono-tech">
          © {new Date().getFullYear()} <span className="text-sky-400/70">{profile.name}</span>
        </span>
        <span className="font-mono-tech">
          Built with{" "}
          <span className="text-slate-500">React</span>
          {" · "}
          <span className="text-slate-500">Tailwind</span>
          {" · "}
          <span className="text-slate-500">Framer Motion</span>
        </span>
      </div>
    </footer>
  );
}
