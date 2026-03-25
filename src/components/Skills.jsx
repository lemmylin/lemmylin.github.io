import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section.jsx";

const CATEGORY_CONFIG = {
  Languages: {
    icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
    color: "violet",
    iconBg: "bg-violet-500/10",
    iconBorder: "border-violet-500/20",
    iconColor: "#8B5CF6",
    titleColor: "dark:text-violet-400 text-violet-600",
    label: "Languages",
  },
  Embedded: {
    icon: <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2zM9 9h6v6H9V9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
    color: "cyan",
    iconBg: "bg-cyan-500/10",
    iconBorder: "border-cyan-500/20",
    iconColor: "#06B6D4",
    titleColor: "dark:text-cyan-400 text-cyan-600",
    label: "Embedded Systems",
  },
  Buses_Tools: {
    icon: <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
    color: "emerald",
    iconBg: "bg-emerald-500/10",
    iconBorder: "border-emerald-500/20",
    iconColor: "#10B981",
    titleColor: "dark:text-emerald-400 text-emerald-600",
    label: "Buses & Protocols",
  },
  Tools: {
    icon: <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
    color: "orange",
    iconBg: "bg-orange-500/10",
    iconBorder: "border-orange-500/20",
    iconColor: "#F97316",
    titleColor: "dark:text-orange-400 text-orange-600",
    label: "Dev Tools",
  },
  Web_Creative: {
    icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
    color: "pink",
    iconBg: "bg-pink-500/10",
    iconBorder: "border-pink-500/20",
    iconColor: "#EC4899",
    titleColor: "dark:text-pink-400 text-pink-600",
    label: "Web & Creative",
  },
  Platforms: {
    icon: <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
    color: "indigo",
    iconBg: "bg-indigo-500/10",
    iconBorder: "border-indigo-500/20",
    iconColor: "#6366F1",
    titleColor: "dark:text-indigo-400 text-indigo-600",
    label: "Platforms",
  },
  Workflow: {
    icon: <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
    color: "rose",
    iconBg: "bg-rose-500/10",
    iconBorder: "border-rose-500/20",
    iconColor: "#F43F5E",
    titleColor: "dark:text-rose-400 text-rose-600",
    label: "Workflow",
  },
};

export default function Skills({ skills }) {
  const prefersReduced = useReducedMotion();
  const entries = Object.entries(skills);

  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map(([cat, items], i) => {
          const cfg = CATEGORY_CONFIG[cat] || CATEGORY_CONFIG.Tools;
          return (
            <motion.div
              key={cat}
              className="glass-card glass-card-hover shimmer rounded-2xl p-5 flex flex-col gap-4"
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl ${cfg.iconBg} border ${cfg.iconBorder}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ color: cfg.iconColor }}>
                    {cfg.icon}
                  </svg>
                </div>
                <h4 className={`text-sm font-semibold ${cfg.titleColor} font-mono-tech`}>
                  {cfg.label}
                </h4>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span key={item} className="tech-badge">{item}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
