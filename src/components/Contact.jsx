import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section.jsx";
import { IconLinkedIn, IconGitHub, IconInstagram } from "../ui/icons.jsx";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lemmy-lin-1a4059217",
    icon: IconLinkedIn,
    color: "dark:hover:text-sky-400 hover:text-sky-600",
  },
  {
    label: "GitHub",
    href: "https://github.com/lemmylin",
    icon: IconGitHub,
    color: "dark:hover:text-slate-200 hover:text-slate-900",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lemmylin",
    icon: IconInstagram,
    color: "dark:hover:text-pink-400 hover:text-pink-600",
  },
];

export default function Contact({ profile }) {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="contact" title="Contact">
      <motion.div
        className="relative overflow-hidden rounded-3xl"
        initial={prefersReduced ? false : { opacity: 0, y: 24 }}
        whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background gradient card */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(109,40,217,0.15) 0%, rgba(6,182,212,0.08) 50%, rgba(236,72,153,0.10) 100%)",
          }}
        />
        <div className="absolute inset-0 dark:bg-[#0e0e1c]/70 bg-white/80 backdrop-blur-sm" />
        <div
          className="absolute inset-0 border dark:border-violet-500/20 border-violet-300/40 rounded-3xl pointer-events-none"
          style={{ boxShadow: "inset 0 0 60px rgba(139,92,246,0.04)" }}
        />

        {/* Background decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
          <div
            className="absolute -top-24 left-1/4 h-48 w-48 rounded-full blur-3xl opacity-30"
            style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
          />
          <div
            className="absolute -bottom-16 right-1/4 h-40 w-40 rounded-full blur-3xl opacity-25"
            style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }}
          />
          <div
            className="absolute top-1/2 right-8 h-32 w-32 rounded-full blur-2xl opacity-20"
            style={{ background: "radial-gradient(circle, #EC4899, transparent)" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 px-8 py-14 text-center sm:px-12 sm:py-16">
          {/* Status badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border dark:border-emerald-500/25 border-emerald-400/40 dark:bg-emerald-500/8 bg-emerald-50 px-4 py-1.5 font-mono-tech text-xs dark:text-emerald-400 text-emerald-700">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              style={{ animation: "pulse-glow 2s ease-in-out infinite", color: "#10B981" }}
            />
            Open to new opportunities
          </div>

          {/* Heading */}
          <h3 className="text-3xl font-extrabold tracking-tight dark:text-white text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
            Let&apos;s build something{" "}
            <span className="gradient-text-hero">remarkable</span>
          </h3>

          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed dark:text-slate-400 text-slate-600">
            Embedded systems, automotive software, or interesting side projects — I&apos;m always up
            for a good engineering conversation. Reach out and let&apos;s connect.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" />
                <path d="M22 8l-10 6L2 8" stroke="currentColor" strokeWidth="2" />
              </svg>
              Send an Email
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 15V3M12 15l-3-3M12 15l3-3M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download Résumé
            </a>
          </div>

          {/* Social links row */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`flex h-10 w-10 items-center justify-center rounded-xl dark:border-white/8 border-slate-200 border dark:bg-white/4 bg-white/70 dark:text-slate-500 text-slate-500 transition-all duration-200 ${color} hover:-translate-y-1 hover:shadow-lg`}
              >
                <Icon width={17} height={17} />
              </a>
            ))}
          </div>

          {/* Email hint */}
          <p className="mt-5 font-mono-tech text-xs dark:text-slate-600 text-slate-400">
            {profile.email}
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
