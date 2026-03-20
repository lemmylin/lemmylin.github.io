import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section.jsx";

export default function Experience({ experience }) {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        {/* Timeline vertical line */}
        <div className="absolute left-6 top-3 bottom-0 w-px timeline-line" />

        <div className="flex flex-col gap-10">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              className="relative pl-16"
              initial={prefersReduced ? false : { opacity: 0, x: -16 }}
              whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Timeline node */}
              <div className="absolute left-3.5 top-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-sky-400 bg-[#04050d] shadow-[0_0_12px_rgba(56,189,248,0.4)]">
                <div className="h-2 w-2 rounded-full bg-sky-400" />
              </div>

              {/* Card */}
              <div className="glass-card glass-card-hover shimmer rounded-xl p-6">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-white sm:text-lg">{exp.role}</h3>
                    <p className="mt-0.5 text-sm font-medium text-sky-400">{exp.company}</p>
                  </div>
                  <span className="flex-shrink-0 rounded-full border border-sky-400/15 bg-sky-400/5 px-2.5 py-0.5 font-mono-tech text-xs text-slate-400">
                    {exp.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400/60" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                {exp.tags?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
