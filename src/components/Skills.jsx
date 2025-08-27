import React from "react";
import Section from "./Section.jsx";
import Badge from "./Badge.jsx";

export default function Skills({ skills, isDark }) {
  return (
    <Section id="skills" title="Skills" dark={isDark}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([cat, items]) => (
          <div
            key={cat}
            className={
              "rounded-2xl p-6 shadow-sm transition hover:shadow-md ring-1 ring-inset " +
              (isDark ? "ring-white/10 bg-white/5" : "ring-black/10 bg-white/60")
            }
          >
            <h4 className={"text-base font-semibold " + (isDark ? "text-indigo-300" : "text-indigo-700")}>
              {cat.replaceAll("_", " / ")}
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((it) => (
                <Badge key={it} dark={isDark}>{it}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
