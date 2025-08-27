import React from "react";
import Section from "./Section.jsx";
import Badge from "./Badge.jsx";

export default function Projects({ projects, isDark }) {
  return (
    <Section id="projects" title="Projects" dark={isDark}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.name}
            className={
              "group relative overflow-hidden rounded-2xl p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ring-1 ring-inset " +
              (isDark ? "ring-white/10 bg-white/5" : "ring-black/10 bg-white/60")
            }
          >
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className={"mt-2 " + (isDark ? "text-white/80" : "text-slate-700")}>{p.description}</p>
            <ul className={"mt-3 list-disc space-y-1 pl-5 " + (isDark ? "text-white/85" : "text-slate-700")}>
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Badge key={s} dark={isDark}>{s}</Badge>
              ))}
            </div>
            {/* Optional external link chevron if a href exists */}
            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className={
                  "absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full transition " +
                  (isDark ? "text-white/60 hover:bg-white/10" : "text-slate-600 hover:bg-black/5")
                }
                aria-label={`Open ${p.name}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M10 7h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
