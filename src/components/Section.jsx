import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Map section ids to terminal-style index labels
const SECTION_NUMBERS = {
  about: "01",
  experience: "02",
  projects: "03",
  skills: "04",
  education: "05",
  contact: "06",
};

export default function Section({ id, title, children, dark, divider = true }) {
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
      <div className="mb-12 flex items-center gap-4">
        {num && (
          <span className="font-mono-tech text-xs text-sky-400/60 select-none">
            // {num}
          </span>
        )}
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title.toUpperCase()}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-sky-400/30 via-sky-400/10 to-transparent" />
      </div>

      {children}
    </motion.section>
  );
}
