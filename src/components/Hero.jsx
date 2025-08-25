import React from "react";
import { motion } from "framer-motion";
import Badge from "./Badge.jsx";

export default function Hero({ profile, isDark }) {
  return (
    <motion.section
      id="top"
      className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="order-2 lg:order-1">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
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
                "inline-flex items-center rounded-full px-3 py-1 text-sm " +
                (isDark
                  ? "border border-white/15 bg-white/5 hover:bg-white/10"
                  : "border border-black/10 bg-black/5 hover:bg-black/10")
              }
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-2xl shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80">
          <img src={profile.headshotUrl} alt={`${profile.name} headshot`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 ring-1 ring-white/15" />
        </div>
      </div>
    </motion.section>
  );
}

