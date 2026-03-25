import React from "react";
import { motion } from "framer-motion";
import { IconLinkedIn, IconGitHub, IconInstagram, IconEmail } from "../ui/icons.jsx";

const ROLES = [
  "Embedded Software Engineer",
  "Automotive ECU Developer",
  "AUTOSAR & CAN Specialist",
  "Clean Code Advocate",
];

const STATS = [
  { value: "2+", label: "Years Exp", color: "text-violet-400" },
  { value: "200+", label: "Jira Tickets", color: "text-cyan-400" },
  { value: "0", label: "Defects", color: "text-emerald-400" },
  { value: "3", label: "OEM Programs", color: "text-pink-400" },
];

function Typewriter() {
  const [roleIdx, setRoleIdx] = React.useState(0);
  const [text, setText] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const full = ROLES[roleIdx];
    let timeout;
    if (!deleting) {
      if (text.length < full.length) {
        timeout = setTimeout(() => setText(full.slice(0, text.length + 1)), 52);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2600);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 28);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <span className="font-mono-tech typewriter-cursor text-sm sm:text-base dark:text-violet-300 text-violet-600">
      {text || "\u00A0"}
    </span>
  );
}

function SocialLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="group flex h-10 w-10 items-center justify-center rounded-xl border dark:border-white/8 border-violet-200 dark:bg-white/4 bg-white/80 dark:text-slate-400 text-slate-500 transition-all duration-200 dark:hover:border-violet-500/50 hover:border-violet-400/60 dark:hover:bg-violet-500/12 hover:bg-violet-50 dark:hover:text-violet-400 hover:text-violet-600 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-violet-500/10"
    >
      <Icon width={17} height={17} />
    </a>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero({ profile }) {
  const socialIcons = {
    LinkedIn: IconLinkedIn,
    GitHub: IconGitHub,
    Instagram: IconInstagram,
    Email: IconEmail,
  };
  const firstName = profile.name.split(" ")[0];
  const lastName = profile.name.split(" ").slice(1).join(" ");

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">

      {/* Content — centered */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-7 text-center">

        {/* Photo with spinning ring */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Spinning conic ring */}
          <div
            className="photo-ring absolute -inset-[3px] rounded-full"
            aria-hidden="true"
          />
          {/* White gap ring */}
          <div
            className="absolute -inset-[3px] rounded-full dark:bg-[#070714] bg-slate-50"
            style={{ margin: "2px" }}
            aria-hidden="true"
          />
          <img
            src={profile.headshotUrl}
            alt={profile.name}
            className="relative h-28 w-28 rounded-full object-cover object-top sm:h-36 sm:w-36"
            style={{ zIndex: 1 }}
          />
          {/* Available dot */}
          <div
            className="absolute bottom-1.5 right-1.5 z-10 h-4 w-4 rounded-full border-2 dark:border-[#070714] border-slate-50 bg-emerald-400"
            style={{ boxShadow: "0 0 8px rgba(16,185,129,0.8)" }}
            title="Available for opportunities"
          />
        </motion.div>

        {/* Available badge */}
        <motion.div {...fadeUp(0.15)}>
          <span className="inline-flex items-center gap-2 rounded-full border dark:border-violet-500/25 border-violet-300/60 dark:bg-violet-500/8 bg-violet-50 px-4 py-1.5 font-mono-tech text-xs dark:text-violet-300 text-violet-700">
            <span
              className="h-1.5 w-1.5 rounded-full bg-violet-400"
              style={{ animation: "pulse-glow 2s ease-in-out infinite", color: "#8B5CF6" }}
            />
            Open to new opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.div {...fadeUp(0.25)}>
          <h1 className="text-5xl font-black tracking-tight leading-none sm:text-6xl lg:text-8xl">
            <span className="gradient-text-hero text-glow-violet">{firstName}</span>
            {" "}
            <span className="dark:text-white text-slate-900">{lastName}</span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          className="flex h-7 items-center justify-center gap-2"
          {...fadeUp(0.35)}
        >
          <span className="dark:text-slate-500 text-slate-400 font-mono-tech text-sm">&gt;</span>
          <Typewriter />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="max-w-xl text-base leading-relaxed dark:text-slate-400 text-slate-600 sm:text-lg"
          {...fadeUp(0.42)}
        >
          {profile.tagline}
        </motion.p>

        {/* Location + Social links */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          {...fadeUp(0.5)}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border dark:border-slate-700/60 border-slate-200 dark:bg-slate-800/40 bg-white/70 px-3 py-1 text-xs dark:text-slate-400 text-slate-500">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
            </svg>
            {profile.location}
          </span>
          {profile.links.filter((l) => l.label !== "Site").map((l) => (
            <SocialLink
              key={l.label}
              href={l.href}
              label={l.label}
              icon={socialIcons[l.label] || IconEmail}
            />
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          {...fadeUp(0.58)}
        >
          <a href="#contact" className="btn-primary">
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 15V3M12 15l-3-3M12 15l3-3M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            View Résumé
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="mt-2 grid grid-cols-2 gap-4 border-t dark:border-white/6 border-slate-200 pt-6 sm:grid-cols-4"
          {...fadeUp(0.66)}
        >
          {STATS.map(({ value, label, color }) => (
            <div key={label} className="flex flex-col items-center gap-0.5">
              <span className={`font-mono-tech text-3xl font-bold ${color}`}>{value}</span>
              <span className="text-xs dark:text-slate-500 text-slate-500 text-center">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="font-mono-tech text-[10px] dark:text-slate-600 text-slate-400 tracking-widest uppercase">scroll</span>
        <div className="h-8 w-px bg-gradient-to-b dark:from-violet-500/40 from-violet-400/40 to-transparent" />
      </motion.div>
    </section>
  );
}
