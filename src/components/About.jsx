import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section.jsx";
import aboutExtras from "../data/aboutExtras.js";

const CORE_STACK = ["C/C++", "AUTOSAR Classic", "NXP S32K3", "CAN/UDS", "Python", "MCAL", "Bootloaders", "React"];

const SIDE_CARDS = [
  {
    key: "values",
    title: "Values",
    accentColor: "sky",
    dotColor: "bg-sky-400",
    borderColor: "border-sky-400/15",
    bgColor: "bg-sky-400/5",
    iconColor: "text-sky-400",
    icon: (
      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    getData: () => aboutExtras?.values || [],
    renderItems: (items) => (
      <ul className="space-y-2">
        {items.map((v) => (
          <li key={v} className="flex items-start gap-2.5 text-sm dark:text-slate-400 text-slate-600">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400/70" />
            {v}
          </li>
        ))}
      </ul>
    ),
  },
  {
    key: "hobbies",
    title: "Hobbies & Interests",
    accentColor: "violet",
    dotColor: "bg-violet-400",
    borderColor: "border-violet-400/15",
    bgColor: "bg-violet-400/5",
    iconColor: "text-violet-400",
    icon: (
      <path d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    getData: () => aboutExtras?.hobbies || [],
    renderItems: (items) => (
      <div className="flex flex-wrap gap-1.5">
        {items.map((h) => (
          <span key={h} className="tech-badge">{h}</span>
        ))}
      </div>
    ),
  },
  {
    key: "fun",
    title: "Fun Facts",
    accentColor: "emerald",
    dotColor: "bg-emerald-400",
    borderColor: "border-emerald-400/15",
    bgColor: "bg-emerald-400/5",
    iconColor: "text-emerald-400",
    icon: (
      <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    getData: () => aboutExtras?.fun_facts || [],
    renderItems: (items) => (
      <ul className="space-y-2">
        {items.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm dark:text-slate-400 text-slate-600">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400/70" />
            {f}
          </li>
        ))}
      </ul>
    ),
  },
];

export default function About() {
  const prefersReduced = useReducedMotion();

  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">

        {/* Bio — wider left column */}
        <motion.div
          className="lg:col-span-3 flex flex-col gap-5"
          initial={prefersReduced ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Intro card */}
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-8 w-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="7" r="4" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-mono-tech text-xs dark:text-violet-400/70 text-violet-600/70 tracking-wide">about.md</span>
            </div>
            <div className="space-y-4">
              {(aboutExtras?.intro || []).map((p, i) => (
                <p key={i} className="text-base leading-relaxed dark:text-slate-300 text-slate-700 font-medium">{p}</p>
              ))}
              {aboutExtras?.bio && (
                <p className="text-sm leading-relaxed dark:text-slate-400 text-slate-600 border-t dark:border-white/5 border-slate-100 pt-4">{aboutExtras.bio}</p>
              )}
            </div>
          </div>

          {/* Core stack quick-look */}
          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="font-mono-tech text-xs dark:text-slate-500 text-slate-400 tracking-wide">$ skills --core</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {CORE_STACK.map((s) => (
                <span key={s} className="tech-badge">{s}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right column: values, hobbies, fun facts */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {SIDE_CARDS.map((card, i) => {
            const items = card.getData();
            if (!items.length) return null;
            return (
              <motion.div
                key={card.key}
                className="glass-card glass-card-hover shimmer rounded-2xl p-5"
                initial={prefersReduced ? false : { opacity: 0, x: 20 }}
                whileInView={prefersReduced ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${card.bgColor} border ${card.borderColor} ${card.iconColor}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      {card.icon}
                    </svg>
                  </div>
                  <h3 className={`text-xs font-semibold ${card.iconColor} font-mono-tech uppercase tracking-wider`}>
                    {card.title}
                  </h3>
                </div>
                {card.renderItems(items)}
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
