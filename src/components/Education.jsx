import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section.jsx";

export default function Education({ education }) {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="education" title="Education">
      <div className="grid gap-4">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            className="glass-card glass-card-hover shimmer rounded-xl p-6"
            initial={prefersReduced ? false : { opacity: 0, y: 16 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky-400/10 border border-sky-400/20">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 9v6" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{e.school}</h3>
                  <p className="mt-0.5 text-sm text-sky-400/80">{e.degree}</p>
                </div>
              </div>
              <span className="flex-shrink-0 rounded-full border border-sky-400/15 bg-sky-400/5 px-2.5 py-0.5 font-mono-tech text-xs text-slate-400">
                {e.period}
              </span>
            </div>

            {e.notes?.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {e.notes.map((n, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400/60" />
                    {n}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
