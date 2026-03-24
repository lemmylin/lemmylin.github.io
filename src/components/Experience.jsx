import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section.jsx";

export default function Experience({ experience }) {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-6">
        {experience.map((exp, i) => {
          const isLast = i === experience.length - 1;
          const parts = exp.period.split(/\s*[—–]\s*/);
          const periodStart = parts[0] || exp.period;
          const periodEnd = parts[1] || "Present";

          return (
            <motion.div
              key={exp.company + exp.role}
              className="flex items-stretch gap-0"
              initial={prefersReduced ? false : { opacity: 0, x: -16 }}
              whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Date column — desktop only */}
              <div className="hidden md:flex w-36 shrink-0 flex-col items-end justify-start pt-4 pr-5">
                <span className="font-mono-tech text-xs font-semibold dark:text-amber-400 text-amber-600">{periodStart}</span>
                <span className="font-mono-tech text-[10px] dark:text-slate-500 text-slate-400 mt-0.5">{periodEnd}</span>
              </div>

              {/* Timeline dot + connecting line */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="mt-4 h-4 w-4 rounded-full border-2 border-amber-400 dark:bg-[#0d0900] bg-amber-50 z-10"
                  style={{ boxShadow: "0 0 10px rgba(252,211,77,0.35)" }}
                />
                {!isLast && (
                  <div
                    className="flex-1 w-px mt-1"
                    style={{ background: "linear-gradient(to bottom, rgba(252,211,77,0.35), rgba(252,211,77,0.08))" }}
                  />
                )}
              </div>

              {/* Content card */}
              <div className="flex-1 min-w-0 pl-5 pb-6">
                {/* Date — mobile only */}
                <div className="md:hidden mb-2">
                  <span className="font-mono-tech text-xs font-semibold dark:text-amber-400 text-amber-600">{exp.period}</span>
                </div>

                <div className="glass-card glass-card-hover shimmer rounded-xl p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold dark:text-white text-slate-900 sm:text-lg">{exp.role}</h3>
                      <p className="mt-0.5 text-sm font-medium text-amber-400">{exp.company}</p>
                    </div>
                  </div>

                  <ul className="mt-3 space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm dark:text-slate-400 text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400/60" />
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
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
