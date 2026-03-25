import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section.jsx";

const COMPANY_COLORS = {
  "Stoneridge, Inc.": { dot: "#8B5CF6", badge: "bg-violet-500/10 border-violet-500/20 text-violet-400" },
  "Targets' Tip": { dot: "#06B6D4", badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400" },
  "Fidelity Investments": { dot: "#10B981", badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" },
  "MSU Student Life & Engagement": { dot: "#F97316", badge: "bg-orange-500/10 border-orange-500/20 text-orange-400" },
  "Michigan State University — Retail Services": { dot: "#F97316", badge: "bg-orange-500/10 border-orange-500/20 text-orange-400" },
};

function ExpCard({ exp, index, prefersReduced }) {
  const [expanded, setExpanded] = useState(index === 0);
  const colors = COMPANY_COLORS[exp.company] || { dot: "#8B5CF6", badge: "bg-violet-500/10 border-violet-500/20 text-violet-400" };
  const parts = exp.period.split(/\s*[—–]\s*/);
  const periodStart = parts[0] || exp.period;
  const periodEnd = parts[1] || "Present";

  return (
    <motion.div
      className="flex items-stretch gap-0"
      initial={prefersReduced ? false : { opacity: 0, x: -20 }}
      whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Date column — desktop */}
      <div className="hidden md:flex w-36 shrink-0 flex-col items-end justify-start pt-5 pr-5">
        <span className="font-mono-tech text-xs font-semibold dark:text-violet-400 text-violet-600">{periodStart}</span>
        <span className="font-mono-tech text-[10px] dark:text-slate-500 text-slate-400 mt-0.5">{periodEnd}</span>
      </div>

      {/* Timeline column */}
      <div className="flex flex-col items-center shrink-0 w-5">
        <div
          className="mt-5 h-4 w-4 rounded-full border-2 z-10 flex-shrink-0"
          style={{
            borderColor: colors.dot,
            background: `${colors.dot}20`,
            boxShadow: `0 0 12px ${colors.dot}50`,
          }}
        />
        <div className="flex-1 w-px mt-1 timeline-line opacity-60" />
      </div>

      {/* Card */}
      <div className="flex-1 min-w-0 pl-5 pb-6">
        {/* Date — mobile */}
        <div className="md:hidden mb-2">
          <span className="font-mono-tech text-xs font-semibold dark:text-violet-400 text-violet-600">{exp.period}</span>
        </div>

        <div
          className="glass-card shimmer rounded-2xl overflow-hidden cursor-pointer"
          onClick={() => setExpanded((v) => !v)}
          role="button"
          tabIndex={0}
          aria-expanded={expanded}
          onKeyDown={(e) => e.key === "Enter" && setExpanded((v) => !v)}
        >
          {/* Card header */}
          <div className="p-5 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-bold dark:text-white text-slate-900 sm:text-lg leading-snug">
                  {exp.role}
                </h3>
              </div>
              <div className="mt-1 flex items-center gap-2 flex-wrap">
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors.badge}`}>
                  {exp.company}
                </span>
              </div>
            </div>
            {/* Expand/collapse chevron */}
            <div
              className={`flex-shrink-0 h-7 w-7 rounded-lg dark:bg-white/5 bg-slate-100 flex items-center justify-center transition-transform duration-300 dark:text-slate-400 text-slate-500 mt-0.5 ${expanded ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Expandable content */}
          {expanded && (
            <div className="px-5 pb-5 border-t dark:border-white/5 border-slate-100">
              <ul className="mt-4 space-y-2.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm dark:text-slate-400 text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400/60" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              {exp.tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience({ experience }) {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-0">
        {experience.map((exp, i) => (
          <ExpCard key={exp.company + exp.role} exp={exp} index={i} prefersReduced={prefersReduced} />
        ))}
      </div>
    </Section>
  );
}
