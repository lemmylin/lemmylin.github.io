import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section.jsx";

export default function Contact({ profile }) {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="contact" title="Contact">
      <motion.div
        className="relative overflow-hidden rounded-2xl glass-card p-10 text-center"
        initial={prefersReduced ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background glow effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <div
            className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #fb923c, transparent)" }}
          />
          <div
            className="absolute -bottom-1/2 left-1/4 h-48 w-48 rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, #f472b6, transparent)" }}
          />
          {/* Grid lines decoration */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(251,146,60,1) 1px, transparent 1px), linear-gradient(90deg, rgba(251,146,60,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/5 px-3 py-1 font-mono-tech text-xs text-orange-400">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_6px_rgba(251,146,60,0.8)]" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
            Open to new opportunities
          </div>

          <h3 className="mt-4 text-3xl font-bold dark:text-white text-slate-900 sm:text-4xl">
            Let&apos;s build something{" "}
            <span className="gradient-text-hero">remarkable</span>
          </h3>

          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed dark:text-slate-400 text-slate-600">
            Embedded systems, automotive software, or interesting side projects — I&apos;m always
            up for a good engineering conversation. Reach out and let&apos;s connect.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="btn-primary text-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" />
                <path d="M22 8l-10 6L2 8" stroke="currentColor" strokeWidth="2" />
              </svg>
              Send an Email
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost text-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 15V3M12 15l-3-3M12 15l3-3M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download Résumé
            </a>
          </div>

          {/* Email display */}
          <p className="mt-6 font-mono-tech text-xs text-slate-600">
            {profile.email}
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
