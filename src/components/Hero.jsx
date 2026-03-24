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
  { value: "2+", label: "Years Exp" },
  { value: "200+", label: "Jira Tickets" },
  { value: "0", label: "Defects" },
  { value: "3", label: "OEM Programs" },
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
        timeout = setTimeout(() => setText(full.slice(0, text.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2400);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 30);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <span className="font-mono-tech typewriter-text typewriter-cursor text-base sm:text-lg">
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
      className="group flex h-9 w-9 items-center justify-center rounded-full border dark:border-violet-400/25 border-violet-300/60 dark:bg-violet-400/5 bg-white/60 dark:text-slate-400 text-slate-600 transition-all duration-200 dark:hover:border-violet-400/60 hover:border-violet-400 dark:hover:bg-violet-400/10 hover:bg-violet-50 dark:hover:text-violet-400 hover:text-violet-600"
    >
      <Icon width={16} height={16} />
    </a>
  );
}

export default function Hero({ profile }) {
  const socialIcons = { LinkedIn: IconLinkedIn, GitHub: IconGitHub, Instagram: IconInstagram, Email: IconEmail };
  const firstName = profile.name.split(" ")[0];
  const lastName = profile.name.split(" ").slice(1).join(" ");

  return (
    <section id="top" className="relative min-h-screen flex overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-[44%_56%]">

        {/* Left: Photo panel */}
        <motion.div
          className="relative h-[45vh] sm:h-[52vh] lg:h-screen order-1 overflow-hidden"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={profile.headshotUrl}
            alt={profile.name}
            className="h-full w-full object-cover object-top lg:object-[center_15%]"
          />
          {/* Right-edge gradient blend into background (desktop) */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{ background: "linear-gradient(to right, transparent 65%, rgba(11,11,19,0.85) 100%)" }}
          />
          {/* Bottom gradient (mobile) */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{ background: "linear-gradient(to bottom, transparent 55%, rgba(11,11,19,0.92) 100%)" }}
          />
          {/* Subtle violet accent strip on right edge */}
          <div
            className="absolute right-0 top-0 bottom-0 w-px hidden lg:block"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(167,139,250,0.4), transparent)" }}
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          className="order-2 flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14 lg:py-0"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          {/* Available badge */}
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border dark:border-violet-400/25 border-violet-300/60 dark:bg-violet-400/5 bg-violet-50 px-3.5 py-1.5 text-xs font-mono-tech dark:text-violet-400 text-violet-700">
            <span
              className="h-1.5 w-1.5 rounded-full bg-violet-400"
              style={{ animation: "pulse-glow 2s ease-in-out infinite", boxShadow: "0 0 6px rgba(167,139,250,0.8)" }}
            />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="text-5xl font-black tracking-tight leading-none sm:text-6xl lg:text-7xl">
            <span className="gradient-text-hero text-glow-violet">{firstName}</span>
            <br />
            <span className="dark:text-white text-slate-900">{lastName}</span>
          </h1>

          {/* Typewriter */}
          <div className="mt-4 h-7">
            <Typewriter />
          </div>

          {/* Tagline */}
          <p className="mt-4 max-w-md text-base leading-relaxed dark:text-slate-300 text-slate-700">
            {profile.tagline}
          </p>

          {/* Location + social links */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border dark:border-slate-700/80 border-violet-200 dark:bg-slate-800/40 bg-white/70 px-3 py-1 text-xs dark:text-slate-400 text-slate-600">
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
          </div>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
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
          </div>

          {/* Stats — inline, clean */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t dark:border-violet-400/10 border-violet-200/40 pt-6">
            {STATS.map(({ value, label }) => {
              const colorMap = {
                "Years Exp": "text-violet-400",
                "Jira Tickets": "text-sky-400",
                "Defects": "text-emerald-400",
                "OEM Programs": "text-pink-400",
              };
              return (
                <div key={label} className="flex items-baseline gap-1.5">
                  <span className={`font-mono-tech text-2xl font-bold ${colorMap[label] || "text-violet-400"}`}>{value}</span>
                  <span className="text-xs dark:text-slate-500 text-slate-500">{label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
