import React from "react";
import { motion } from "framer-motion";
import Badge from "./Badge.jsx";
import { IconGlobe, IconLinkedIn, IconInstagram, IconEmail, IconGitHub } from "../ui/icons.jsx";

export default function Hero({ profile, isDark }) {
  const iconFor = (label) => {
    switch (label) {
      case "Site":
        return IconGlobe;
      case "LinkedIn":
        return IconLinkedIn;
      case "Instagram":
        return IconInstagram;
      case "Email":
        return IconEmail;
      case "GitHub":
        return IconGitHub;
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
        {profile.tagline ? (
          <p className={"mt-1 text-base " + styles.textBody(isDark)}>
            {profile.tagline}
          </p>
        ) : null}
        <p className={"mt-4 max-w-xl " + styles.textBody(isDark)}>{profile.summary}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge dark={isDark}>{profile.location}</Badge>
            {profile.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                className={styles.glassButton(isDark) + " rounded-full text-sm px-3 py-1"}
              >
                {(() => {
                  const I = iconFor(l.label);
                  return I ? <I /> : null;
                })()}
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
