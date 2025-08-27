import React from "react";
import { motion } from "framer-motion";
import Badge from "./Badge.jsx";

export default function Hero({ profile, isDark }) {
  const Icon = ({ label }) => {
    const common = { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };
    switch (label) {
      case "Site":
        return (
          <svg {...common}>
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" stroke="currentColor" strokeWidth="2" />
          </svg>
        );
      case "LinkedIn":
        return (
          <svg {...common}>
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
            <circle cx="8" cy="10" r="1.2" fill="currentColor" />
            <path d="M7.5 16.5V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 16.5v-3a2 2 0 0 1 2-2c1.1 0 2 .9 2 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "Instagram":
        return (
          <svg {...common}>
            <rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
          </svg>
        );
      case "Email":
        return (
          <svg {...common}>
            <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" />
            <path d="M22 8l-10 6L2 8" stroke="currentColor" strokeWidth="2" />
          </svg>
        );
      default:
        return null;
    }
  };
  return (
    <motion.section
      id="top"
      className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="order-2 lg:order-1">
        <h1
          className={
            "text-4xl font-bold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r " +
            (isDark ? "from-indigo-400 to-purple-400" : "from-indigo-600 to-purple-600")
          }
        >
          {profile.name}
        </h1>
        <p className={"mt-2 text-lg " + (isDark ? "text-indigo-300" : "text-indigo-700")}>{profile.title}</p>
        <p className={"mt-4 max-w-xl " + (isDark ? "text-white/80" : "text-slate-700")}>{profile.summary}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge dark={isDark}>{profile.location}</Badge>
            {profile.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                className={
                  "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm border shadow-sm backdrop-blur-md backdrop-saturate-150 transition " +
                  (isDark
                    ? "border-white/15 bg-white/10 text-white hover:bg-white/15"
                    : "border-black/10 bg-white/40 text-slate-900 hover:bg-white/60")
                }
              >
                <Icon label={l.label} />
                <span>{l.label}</span>
              </a>
            ))}
          </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-2xl shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80 ring-2 ring-indigo-400/30 shadow-[0_0_40px_rgba(99,102,241,0.25)]">
          <img src={profile.headshotUrl} alt={`${profile.name} headshot`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 ring-1 ring-white/15" />
        </div>
      </div>
    </motion.section>
  );
}
