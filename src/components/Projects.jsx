import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section.jsx";
import { IconExternal } from "../ui/icons.jsx";

const ACCENT_COLORS = [
  { glow: "rgba(139,92,246,0.10)", border: "rgba(139,92,246,0.35)", icon: "#8B5CF6", iconBg: "bg-violet-500/10", iconBorder: "border-violet-500/20" },
  { glow: "rgba(6,182,212,0.10)", border: "rgba(6,182,212,0.35)", icon: "#06B6D4", iconBg: "bg-cyan-500/10", iconBorder: "border-cyan-500/20" },
  { glow: "rgba(16,185,129,0.10)", border: "rgba(16,185,129,0.35)", icon: "#10B981", iconBg: "bg-emerald-500/10", iconBorder: "border-emerald-500/20" },
  { glow: "rgba(249,115,22,0.10)", border: "rgba(249,115,22,0.35)", icon: "#F97316", iconBg: "bg-orange-500/10", iconBorder: "border-orange-500/20" },
  { glow: "rgba(236,72,153,0.10)", border: "rgba(236,72,153,0.35)", icon: "#EC4899", iconBg: "bg-pink-500/10", iconBorder: "border-pink-500/20" },
  { glow: "rgba(99,102,241,0.10)", border: "rgba(99,102,241,0.35)", icon: "#6366F1", iconBg: "bg-indigo-500/10", iconBorder: "border-indigo-500/20" },
];

function ProjectIcon({ color, iconBg, iconBorder }) {
  return (
    <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl ${iconBg} border ${iconBorder}`}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ProjectCard({ project, index, prefersReduced, featured }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];

  const handleMouseMove = (e) => {
    if (prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * -8, y: (px - 0.5) * 8 });
    setGlowPos({ x: px * 100, y: py * 100 });
  };
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlowPos({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: prefersReduced
          ? undefined
          : `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.5s ease" : "transform 0.1s ease",
      }}
      initial={prefersReduced ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="relative glass-card rounded-2xl overflow-hidden group h-full"
    >
      {/* Mouse-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(250px circle at ${glowPos.x}% ${glowPos.y}%, ${accent.glow}, transparent 70%)`,
        }}
      />
      {/* Top accent line on hover */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${accent.icon}, transparent)` }}
      />
      {/* Hover border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${accent.border}` }}
      />

      <div className={`relative p-6 flex flex-col gap-4 ${featured ? "sm:flex-row" : ""}`}>
        {/* Header */}
        <div className={`flex items-start justify-between gap-3 ${featured ? "sm:flex-col sm:w-48 sm:flex-shrink-0 sm:justify-start" : ""}`}>
          <div className="flex items-center gap-3">
            <ProjectIcon color={accent.icon} iconBg={accent.iconBg} iconBorder={accent.iconBorder} />
            {featured && (
              <span className="font-mono-tech text-[10px] dark:text-violet-400/60 text-violet-600/60 uppercase tracking-widest">Featured</span>
            )}
          </div>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name}`}
              className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-lg dark:text-slate-500 text-slate-400 hover:text-violet-400 dark:hover:bg-violet-500/10 hover:bg-violet-50 transition-all"
            >
              <IconExternal width={13} height={13} />
            </a>
          )}
        </div>

        {/* Body */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold dark:text-white text-slate-900 leading-snug group-hover:text-violet-400 dark:group-hover:text-violet-300 transition-colors duration-200 sm:text-base">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed dark:text-slate-400 text-slate-600">{project.description}</p>
          <ul className="mt-3 space-y-1">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-xs dark:text-slate-500 text-slate-500">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full" style={{ background: accent.icon, opacity: 0.6 }} />
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="tech-badge">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ projects }) {
  const prefersReduced = useReducedMotion();
  const [featured, ...rest] = projects;

  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-4">
        {/* Featured project — full width */}
        {featured && (
          <ProjectCard key={featured.name} project={featured} index={0} prefersReduced={prefersReduced} featured />
        )}
        {/* Rest — 2-col grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rest.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i + 1} prefersReduced={prefersReduced} featured={false} />
          ))}
        </div>
      </div>
    </Section>
  );
}
