import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "./About.jsx";

const ease = [0, 0, 0.2, 1];

export default function Education({ education }) {
  const pref = useReducedMotion();

  return (
    <section id="education" className="border-b-4 border-black">
      <SectionHeader num="05" title="Education" />

      <div className="swiss-wrap py-12 md:py-16">
        {education.map((e) => (
          <motion.div
            key={e.school}
            initial={pref ? false : { opacity: 0, y: 14 }}
            whileInView={pref ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease }}
            className="border-4 border-black"
          >
            {/* Swiss Red top bar */}
            <div className="h-2 bg-[#ff3000]" aria-hidden="true" />

            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Left: school name + degree */}
              <div className="md:col-span-2 p-8 border-b-2 md:border-b-0 md:border-r-2 border-black">
                <h3 className="font-black uppercase tracking-tight text-2xl md:text-3xl leading-tight mb-3">
                  {e.school}
                </h3>
                <p className="text-base font-semibold text-gray-700">{e.degree}</p>
              </div>

              {/* Right: period + notes — dot texture */}
              <div className="p-8 bg-[#f2f2f2] swiss-dots flex flex-col gap-4">
                <div className="swiss-label text-[#ff3000]">{e.period}</div>
                {e.notes?.length > 0 && (
                  <ul className="space-y-2">
                    {e.notes.map((n, j) => (
                      <li key={j} className="flex gap-2.5 text-xs text-gray-700 leading-relaxed">
                        <span className="text-[#ff3000] font-bold flex-shrink-0">—</span>
                        {n}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
