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
            className="glass-card glass-card-hover shimmer rounded-2xl overflow-hidden"
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500" />

            <div className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Mortarboard icon */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20 9v6" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold dark:text-white text-slate-900">{e.school}</h3>
                    <p className="mt-0.5 text-sm font-medium dark:text-violet-400 text-violet-600">{e.degree}</p>
                  </div>
                </div>
                <span className="flex-shrink-0 rounded-full border dark:border-violet-500/20 border-violet-300/60 dark:bg-violet-500/8 bg-violet-50 px-3 py-1 font-mono-tech text-xs dark:text-violet-300 text-violet-700">
                  {e.period}
                </span>
              </div>

              {e.notes?.length > 0 && (
                <ul className="mt-5 space-y-2 border-t dark:border-white/5 border-slate-100 pt-4">
                  {e.notes.map((n, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm dark:text-slate-400 text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400/60" />
                      {n}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
