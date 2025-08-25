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
              "group relative overflow-hidden rounded-2xl p-6 shadow transition hover:-translate-y-1 " +
              (isDark
                ? "border border-white/10 bg-white/5 hover:bg-white/10"
                : "border border-black/10 bg-black/5 hover:bg-black/10")
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
          </div>
        ))}
      </div>
    </Section>
  );
}

