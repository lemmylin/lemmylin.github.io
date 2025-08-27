import React from "react";
import Section from "./Section.jsx";
import personality from "../data/personality.js";

export default function Personality({ isDark }) {
  const card =
    "rounded-2xl p-6 ring-1 ring-inset shadow-sm " +
    (isDark ? "ring-white/10 bg-white/5" : "ring-black/10 bg-white/60");

  return (
    <Section id="personality" title="Personality" dark={isDark}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Cats */}
        <div className={card}>
          <h3 className="text-base font-semibold">Cats</h3>
          <ul className={"mt-3 space-y-2 " + (isDark ? "text-white/85" : "text-slate-700")}>
            {personality.cats.map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-purple-400/70" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Travel */}
        <div className={card}>
          <h3 className="text-base font-semibold">Travel</h3>
          <ul className={"mt-3 list-disc space-y-2 pl-5 " + (isDark ? "text-white/85" : "text-slate-700")}>
            {personality.travel.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

