import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section.jsx";
import aboutExtras from "../data/aboutExtras.js";

const CARD_DATA = [
  {
    key: "values",
    title: "Values",
    icon: (
      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
    ),
    getData: () => aboutExtras?.values || [],
    renderItem: (v) => (
      <li key={v} className="flex items-start gap-2.5 text-sm text-slate-400">
        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400/70" />
        {v}
      </li>
    ),
    listClass: "space-y-2",
  },
  {
    key: "hobbies",
    title: "Hobbies",
    icon: (
      <path d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    getData: () => aboutExtras?.hobbies || [],
    renderItem: (h) => (
      <span key={h} className="tech-badge">{h}</span>
    ),
    listClass: "flex flex-wrap gap-1.5",
    isFlex: true,
  },
  {
    key: "fun",
    title: "Fun Facts",
    icon: (
      <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    getData: () => aboutExtras?.fun_facts || [],
    renderItem: (f) => (
      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-400">
        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400/70" />
        {f}
      </li>
    ),
    listClass: "space-y-2",
  },
];

export default function About() {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="about" title="About">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Bio — wider column */}
        <motion.div
          className="lg:col-span-3"
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-card rounded-xl p-6 h-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
              <span className="font-mono-tech text-xs text-sky-400/80">bio.txt</span>
            </div>
            <div className="space-y-3">
              {(aboutExtras?.intro || []).map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-slate-300">{p}</p>
              ))}
              {aboutExtras?.bio && (
                <p className="text-sm leading-relaxed text-slate-400">{aboutExtras.bio}</p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Side cards */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {CARD_DATA.map((card, i) => {
            const items = card.getData();
            if (!items.length) return null;
            return (
              <motion.div
                key={card.key}
                className="glass-card glass-card-hover shimmer rounded-xl p-5"
                initial={prefersReduced ? false : { opacity: 0, x: 16 }}
                whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Card header */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-400/10 border border-sky-400/20">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      {card.icon}
                    </svg>
                  </div>
                  <h3 className="text-xs font-semibold text-sky-400 font-mono-tech uppercase tracking-wider">
                    {card.title}
                  </h3>
                </div>

                {/* Items */}
                {card.isFlex ? (
                  <div className={card.listClass}>
                    {items.map(card.renderItem)}
                  </div>
                ) : (
                  <ul className={card.listClass}>
                    {items.map(card.renderItem)}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
