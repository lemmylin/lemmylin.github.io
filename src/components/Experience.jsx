import React, { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./About.jsx";

const ease = [0, 0, 0.2, 1];

export default function Experience({ experience }) {
  const pref = useReducedMotion();
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="experience" className="border-b-4 border-black">
      <SectionHeader num="02" title="Experience" />

      <div>
        {experience.map((exp, i) => {
          const isOpen = openIdx === i;

          return (
            <motion.div
              key={exp.company + exp.role}
              initial={pref ? false : { opacity: 0 }}
              whileInView={pref ? {} : { opacity: 1 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.3, delay: i * 0.04, ease }}
              className="border-b-2 border-black last:border-b-0"
            >
              {/* Accordion trigger */}
              <button
                className={`w-full text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#ff3000] ${
                  isOpen ? "bg-black text-white" : "bg-white hover:bg-[#f2f2f2]"
                }`}
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`exp-panel-${i}`}
              >
                <div className="swiss-wrap py-5 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 min-w-0">
                    {/* Number */}
                    <span className="font-black text-xs text-[#ff3000] flex-shrink-0 pt-0.5 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <div className="font-black uppercase tracking-tight text-base md:text-lg leading-snug">
                        {exp.role}
                      </div>
                      <div className={`text-sm mt-0.5 font-medium ${isOpen ? "text-gray-400" : "text-gray-600"}`}>
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span className={`hidden sm:block text-xs font-medium tabular-nums ${isOpen ? "text-gray-500" : "text-gray-500"}`}>
                      {exp.period}
                    </span>
                    {/* Plus icon rotates to × on open */}
                    <span
                      className={`font-black text-2xl leading-none transition-transform duration-200 ${isOpen ? "rotate-45 text-[#ff3000]" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </div>
                </div>
              </button>

              {/* Expanded panel */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`exp-panel-${i}`}
                    initial={pref ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={pref ? {} : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease }}
                    className="overflow-hidden bg-black text-white"
                  >
                    <div className="swiss-wrap pb-8 pt-1 border-t border-gray-800">
                      <p className="sm:hidden swiss-label text-gray-500 mb-4">{exp.period}</p>
                      <ul className="space-y-3 mb-6">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                            <span className="text-[#ff3000] font-bold flex-shrink-0 mt-px">—</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      {exp.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest border border-gray-600 text-gray-400 hover:border-[#ff3000] hover:text-[#ff3000] transition-colors duration-150"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
