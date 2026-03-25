import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import aboutExtras from "../data/aboutExtras.js";

const ease = [0, 0, 0.2, 1];

export default function About() {
  const pref = useReducedMotion();
  const anim = (delay = 0) =>
    pref ? {} : {
      initial:    { opacity: 0, y: 14 },
      whileInView: { opacity: 1, y: 0 },
      viewport:   { once: true, margin: "-8% 0px" },
      transition: { duration: 0.35, delay, ease },
    };

  return (
    <section id="about" className="border-b-4 border-black">

      {/* Section header */}
      <SectionHeader num="01" title="About" />

      {/* Content */}
      <div className="swiss-wrap py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Bio text */}
          <motion.div className="lg:col-span-3" {...anim(0)}>
            <p className="text-xl md:text-2xl font-semibold leading-relaxed text-black mb-6">
              {aboutExtras.intro[0]}
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              {aboutExtras.bio}
            </p>
          </motion.div>

          {/* Right: values, hobbies, facts */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div {...anim(0.08)}>
              <p className="swiss-label text-[#ff3000] mb-3">Values</p>
              <ul className="space-y-3">
                {aboutExtras.values.map((v, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className="text-[#ff3000] font-bold flex-shrink-0">—</span>
                    {v}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...anim(0.14)} className="border-t-2 border-black pt-8">
              <p className="swiss-label text-[#ff3000] mb-3">Outside Work</p>
              <div className="flex flex-wrap gap-1.5">
                {aboutExtras.hobbies.map((h, i) => (
                  <span key={i} className="tag">{h}</span>
                ))}
              </div>
            </motion.div>

            <motion.div {...anim(0.2)} className="border-t-2 border-black pt-8">
              <p className="swiss-label text-[#ff3000] mb-3">Quick Facts</p>
              <ul className="space-y-2">
                {aboutExtras.fun_facts.map((f, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className="text-[#ff3000] font-bold flex-shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Shared section header used across components */
export function SectionHeader({ num, title }) {
  return (
    <div className="border-b-2 border-black bg-[#f2f2f2] swiss-diagonal">
      <div className="swiss-wrap py-5 flex items-center gap-4">
        <span className="font-black text-[#ff3000] text-sm tabular-nums">{num}</span>
        <span className="w-4 h-px bg-black flex-shrink-0" aria-hidden="true" />
        <h2 className="font-black uppercase tracking-widest text-xs">{title}</h2>
      </div>
    </div>
  );
}
