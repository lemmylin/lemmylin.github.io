import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "./About.jsx";

const ease = [0, 0, 0.2, 1];

const LABELS = {
  Languages:    "Languages",
  Embedded:     "Embedded",
  Buses_Tools:  "Buses & Protocols",
  Tools:        "Dev Tools",
  Web_Creative: "Web & Creative",
  Platforms:    "Platforms",
  Workflow:     "Workflow",
};

export default function Skills({ skills }) {
  const pref = useReducedMotion();

  return (
    <section id="skills" className="border-b-4 border-black">
      <SectionHeader num="04" title="Skills" />

      {/* Table-style rows */}
      <div>
        {Object.entries(skills).map(([cat, items], i) => (
          <motion.div
            key={cat}
            initial={pref ? false : { opacity: 0 }}
            whileInView={pref ? {} : { opacity: 1 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.3, delay: i * 0.04, ease }}
            className="border-b border-black last:border-b-0 hover:bg-[#f2f2f2] transition-colors duration-150"
          >
            <div className="swiss-wrap py-5 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 sm:gap-8 items-start">
              <span className="swiss-label text-[#ff3000] sm:pt-1">
                {LABELS[cat] || cat.replaceAll("_", " ")}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
