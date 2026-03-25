import React from "react";

export default function Footer({ profile }) {
  return (
    <footer className="relative mx-auto w-full max-w-6xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent mb-6" />

      <div className="flex flex-wrap items-center justify-between gap-4 text-xs dark:text-slate-600 text-slate-400">
        <span className="font-mono-tech">
          © {new Date().getFullYear()}{" "}
          <span className="dark:text-violet-400/70 text-violet-500/70">{profile.name}</span>
        </span>
        <span className="font-mono-tech">
          Built with{" "}
          <span className="dark:text-slate-500 text-slate-500">React</span>
          {" · "}
          <span className="dark:text-slate-500 text-slate-500">Tailwind</span>
          {" · "}
          <span className="dark:text-slate-500 text-slate-500">Framer Motion</span>
        </span>
      </div>
    </footer>
  );
}
