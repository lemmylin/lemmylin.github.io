import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const SECTION_NUMBERS = {
  about: "01",
  experience: "02",
  projects: "03",
  skills: "04",
  education: "05",
  contact: "06",
};

export default function Section({ id, title, children }) {
  const prefersReduced = useReducedMotion();
  const num = SECTION_NUMBERS[id];

  return (
    <motion.section
      id={id}
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8"
      initial={prefersReduced ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Section header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          {num && (
            <span className="font-mono-tech text-xs dark:text-violet-500/60 text-violet-600/60 select-none tracking-widest">
              {num}
            </span>
          )}
          <div className="flex-1 h-px dark:bg-white/5 bg-slate-200" />
        </div>
        <div className="flex items-end gap-4">
          <h2 className="text-3xl font-extrabold tracking-tight dark:text-white text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <div className="mb-1.5 h-1.5 w-1.5 rounded-full bg-violet-500 flex-shrink-0" style={{ boxShadow: "0 0 8px rgba(139,92,246,0.8)" }} />
        </div>
      </div>

      {children}
    </motion.section>
  );
}
