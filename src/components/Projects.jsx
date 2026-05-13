import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "./About.jsx";

const ease = [0, 0, 0.2, 1];

export default function Projects({ projects }) {
  const pref = useReducedMotion();

  return (
    <section id="projects" className="border-b-4 border-black">
      <SectionHeader num="03" title="Projects" />

      {/* 2-col grid — cards invert to black on hover */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={pref ? false : { opacity: 0, y: 16 }}
            whileInView={pref ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.35, delay: (i % 2) * 0.07, ease }}
            className={`group border-b-2 border-black hover:bg-black hover:text-white transition-colors duration-200 ${
              i % 2 === 0 ? "md:border-r-2 md:border-black" : ""
            }`}
          >
            <div className="p-6 md:p-8 h-full flex flex-col">
              {/* Top: number + external link */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="font-black text-[#ff3000] text-sm tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.name} (external)`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-400 hover:text-[#ff3000] transition-colors duration-150 font-bold"
                  >
                    ↗
                  </a>
                )}
              </div>

              {/* Name */}
              <h3 className="font-black uppercase tracking-tight text-lg leading-tight mb-3 transition-colors duration-200">
                {p.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed mb-4 flex-1 transition-colors duration-200">
                {p.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1 mb-5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-200">
                    <span className="text-[#ff3000] flex-shrink-0">—</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest border border-current opacity-50 group-hover:opacity-75 transition-opacity duration-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
