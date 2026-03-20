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
  { value: "0", label: "Customer Defects" },
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
    <span className="font-mono-tech text-sky-400 typewriter-cursor">
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
      className="group flex h-9 w-9 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-400/5 text-slate-400 transition-all duration-200 hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-sky-400 hover:shadow-[0_0_12px_rgba(56,189,248,0.2)]"
    >
      <Icon width={16} height={16} />
    </a>
  );
}

export default function Hero({ profile }) {
  const socialIcons = { LinkedIn: IconLinkedIn, GitHub: IconGitHub, Instagram: IconInstagram, Email: IconEmail };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-4 pt-20 pb-16 sm:px-6 lg:px-8"
    >
      <motion.div
        className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Left: text content */}
        <div className="order-2 lg:order-1">
          {/* Status badge */}
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/5 px-3 py-1 text-xs font-mono-tech text-sky-400">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            <span className="gradient-text-cyan text-glow-subtle">
              {profile.name.split(" ")[0]}
            </span>
            <br />
            <span className="text-white/90">{profile.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div variants={item} className="mt-4 h-7 text-base sm:text-lg">
            <Typewriter />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="mt-4 max-w-lg text-base leading-relaxed text-slate-400"
          >
            {profile.tagline}
          </motion.p>

          {/* Summary */}
          <motion.p
            variants={item}
            className="mt-3 max-w-lg text-sm leading-relaxed text-slate-500"
          >
            {profile.summary}
          </motion.p>

          {/* Location + social links */}
          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-400">
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
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
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

          {/* Stats row */}
          <motion.div
            variants={item}
            className="mt-10 grid grid-cols-4 gap-4 border-t border-sky-400/10 pt-8"
          >
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-mono-tech text-2xl font-bold text-sky-400 text-glow-subtle">
                  {value}
                </div>
                <div className="mt-0.5 text-xs text-slate-500 leading-tight">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: profile photo */}
        <motion.div
          className="order-1 flex justify-center lg:order-2"
          variants={item}
        >
          <div className="relative">
            {/* Outer ambient glow */}
            <div
              className="absolute inset-0 scale-125 rounded-full blur-3xl opacity-30"
              style={{ background: "radial-gradient(circle, rgba(56,189,248,0.5), rgba(129,140,248,0.3), transparent)" }}
            />

            {/* Spinning gradient ring */}
            <div
              className="relative rounded-full p-[3px]"
              style={{
                background: "conic-gradient(from 0deg, #38bdf8, #818cf8, #c084fc, #f59e0b, #38bdf8)",
                animation: "ring-spin 8s linear infinite",
                borderRadius: "50%",
                width: "fit-content",
              }}
            >
              <div className="relative overflow-hidden rounded-full bg-[#04050d] p-1">
                <img
                  src={profile.headshotUrl}
                  alt={`${profile.name}`}
                  className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                  style={{ display: "block" }}
                />
              </div>
            </div>

            {/* Floating accent dots */}
            <div
              className="absolute -right-3 top-8 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
              style={{ animation: "float 3s ease-in-out infinite" }}
            />
            <div
              className="absolute -left-4 bottom-12 h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.9)]"
              style={{ animation: "float 4s ease-in-out infinite reverse" }}
            />
            <div
              className="absolute bottom-4 right-8 h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.9)]"
              style={{ animation: "float 3.5s ease-in-out infinite 1s" }}
            />

            {/* Tech label badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-sky-400/25 bg-[#04050d]/90 px-4 py-1.5 text-xs font-mono-tech text-sky-400 shadow-lg backdrop-blur-sm">
              &gt; ./run engineer.sh
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-1.5 text-slate-600">
          <span className="text-[10px] font-mono-tech tracking-widest uppercase">Scroll</span>
          <div className="h-10 w-5 rounded-full border border-slate-700 flex items-start justify-center p-1">
            <div
              className="h-2 w-1 rounded-full bg-sky-400"
              style={{ animation: "float 1.5s ease-in-out infinite" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
