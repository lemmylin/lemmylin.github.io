import React, { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section.jsx";
import { IconExternal } from "../ui/icons.jsx";

function ProjectCard({ project, index, prefersReduced }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * -10, y: (px - 0.5) * 10 });
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
          : `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.5s ease" : "transform 0.1s ease",
      }}
      initial={prefersReduced ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="relative glass-card rounded-xl overflow-hidden group"
    >
      {/* Mouse follow glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
        style={{
          background: `radial-gradient(200px circle at ${glowPos.x}% ${glowPos.y}%, rgba(252,211,77,0.08), transparent 70%)`,
        }}
      />

      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400/10 border border-amber-400/20">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" stroke="#fcd34d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold dark:text-white text-slate-900 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200">
              {project.name}
            </h3>
          </div>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name}`}
              className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-lg text-slate-600 hover:text-sky-400 hover:bg-amber-400/10 transition-all duration-200"
            >
              <IconExternal width={14} height={14} />
            </a>
          )}
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed dark:text-slate-400 text-slate-600">{project.description}</p>

        {/* Highlights */}
        <ul className="mt-3 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-xs dark:text-slate-500 text-slate-600">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-amber-400/50" />
              {h}
            </li>
          ))}
        </ul>

        {/* Stack badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="tech-badge">{s}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ projects }) {
  const prefersReduced = useReducedMotion();
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} prefersReduced={prefersReduced} />
        ))}
      </div>
    </Section>
  );
}
