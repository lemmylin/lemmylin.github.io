import React from "react";
import Section from "./Section.jsx";

export default function Education({ education, isDark }) {
  return (
    <Section id="education" title="Education" dark={isDark}>
      <div className="grid gap-6">
        {education.map((e) => (
          <div
            key={e.school}
            className={
              "rounded-2xl p-6 shadow-sm transition hover:shadow-md ring-1 ring-inset " +
              (isDark ? "ring-white/10 bg-white/5" : "ring-black/10 bg-white/60")
            }
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{e.school}</h3>
                <p className={isDark ? "text-white/80" : "text-slate-700"}>{e.degree}</p>
              </div>
              <p className={"text-sm " + (isDark ? "text-white/60" : "text-slate-500")}>{e.period}</p>
            </div>
            {e.notes?.length ? (
              <ul className={"mt-3 list-disc space-y-1 pl-5 " + (isDark ? "text-white/85" : "text-slate-700")}>
                {e.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
