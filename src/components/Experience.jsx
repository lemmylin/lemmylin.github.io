import React from "react";
import Section from "./Section.jsx";
import Badge from "./Badge.jsx";

export default function Experience({ experience, isDark }) {
  return (
    <Section id="experience" title="Experience" dark={isDark}>
      <div className="grid gap-6">
        {experience.map((exp) => (
          <div
            key={exp.company + exp.role}
            className={
              "rounded-2xl p-6 shadow-sm transition hover:shadow-md ring-1 ring-inset " +
              (isDark ? "ring-white/10 bg-white/5" : "ring-black/10 bg-white/60")
            }
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className={isDark ? "text-white/70" : "text-slate-600"}>{exp.company}</p>
              </div>
              <p className={"text-sm " + (isDark ? "text-white/60" : "text-slate-500")}>{exp.period}</p>
            </div>
            <ul className={"mt-4 list-disc space-y-2 pl-5 " + (isDark ? "text-white/85" : "text-slate-700")}>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tags?.map((t) => (
                <Badge key={t} dark={isDark}>{t}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
