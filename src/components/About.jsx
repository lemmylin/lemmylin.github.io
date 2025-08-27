import React from "react";
import Section from "./Section.jsx";
import aboutExtras from "../data/aboutExtras.js";
import Badge from "./Badge.jsx";

export default function About({ isDark }) {
  const [expanded, setExpanded] = React.useState({ values: false, hobbies: false, fun: false });
  const toggle = (key) => setExpanded((s) => ({ ...s, [key]: !s[key] }));
  const values = aboutExtras?.values || [];
  const hobbies = aboutExtras?.hobbies || [];
  const funFacts = aboutExtras?.fun_facts || [];
  const valuesShown = expanded.values ? values : values.slice(0, 2);
  const hobbiesShown = expanded.hobbies ? hobbies : hobbies.slice(0, 4);
  const funShown = expanded.fun ? funFacts : funFacts.slice(0, 2);
  return (
    <Section id="about" title="About" dark={isDark} divider={false}>
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        {/* Main bio */}
        <div className={"prose max-w-none lg:col-span-2 " + (isDark ? "prose-invert" : "") }>
          <p>
            I work close to the hardware—NXP S32K3, bootloaders, MCAL, comms—and keep
            codebases sane even when original models/tools vanish. I like measured
            refactors, strong interfaces, and diagnostics you can trust on a Friday at 5pm.
          </p>
          {aboutExtras?.bio ? <p>{aboutExtras.bio}</p> : null}
        </div>

        {/* Quick bits: horizontal row under bio on large screens */}
        <div className="mt-6 flex flex-col gap-3 lg:col-span-3 lg:flex-row lg:flex-wrap">
          {aboutExtras?.values?.length ? (
            <div
              className={
                "group min-w-[240px] flex-1 rounded-xl p-3 ring-1 ring-inset shadow-sm transition hover:-translate-y-0.5 hover:shadow-md " +
                (isDark ? "ring-white/10 bg-white/5" : "ring-black/10 bg-white/60")
              }
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={isDark ? "text-indigo-300" : "text-indigo-700"}>
                    <path d="M12 3l9 9-9 9-9-9 9-9z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  Values
                </h3>
                <button
                  type="button"
                  onClick={() => toggle("values")}
                  aria-expanded={expanded.values}
                  className={
                    "text-xs inline-flex items-center gap-1 rounded-md px-2 py-1 transition " +
                    (isDark ? "hover:bg-white/10" : "hover:bg-black/5")
                  }
                >
                  {expanded.values ? "Show less" : `Show more`}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"
                    className={expanded.values ? "rotate-180 transition" : "transition"}>
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <ul className="mt-2 space-y-1 text-[13px] leading-snug">
                {valuesShown.map((v) => (
                  <li key={v} className="flex items-start gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={isDark ? "text-indigo-300" : "text-indigo-700"}>
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {aboutExtras?.hobbies?.length ? (
            <div
              className={
                "group min-w-[240px] flex-1 rounded-xl p-3 ring-1 ring-inset shadow-sm transition hover:-translate-y-0.5 hover:shadow-md " +
                (isDark ? "ring-white/10 bg-white/5" : "ring-black/10 bg-white/60")
              }
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={isDark ? "text-indigo-300" : "text-indigo-700"}>
                    <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  Hobbies
                </h3>
                <button
                  type="button"
                  onClick={() => toggle("hobbies")}
                  aria-expanded={expanded.hobbies}
                  className={
                    "text-xs inline-flex items-center gap-1 rounded-md px-2 py-1 transition " +
                    (isDark ? "hover:bg-white/10" : "hover:bg-black/5")
                  }
                >
                  {expanded.hobbies ? "Show less" : `Show more`}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"
                    className={expanded.hobbies ? "rotate-180 transition" : "transition"}>
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {hobbiesShown.map((h) => (
                  <Badge key={h} dark={isDark}>{h}</Badge>
                ))}
              </div>
            </div>
          ) : null}

          {aboutExtras?.fun_facts?.length ? (
            <div
              className={
                "group min-w-[240px] flex-1 rounded-xl p-3 ring-1 ring-inset shadow-sm transition hover:-translate-y-0.5 hover:shadow-md " +
                (isDark ? "ring-white/10 bg-white/5" : "ring-black/10 bg-white/60")
              }
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={isDark ? "text-indigo-300" : "text-indigo-700"}>
                    <path d="M12 3l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 21l2-7L2 10h7l3-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                  Fun facts
                </h3>
                <button
                  type="button"
                  onClick={() => toggle("fun")}
                  aria-expanded={expanded.fun}
                  className={
                    "text-xs inline-flex items-center gap-1 rounded-md px-2 py-1 transition " +
                    (isDark ? "hover:bg-white/10" : "hover:bg-black/5")
                  }
                >
                  {expanded.fun ? "Show less" : `Show more`}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"
                    className={expanded.fun ? "rotate-180 transition" : "transition"}>
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <ul className="mt-2 list-disc pl-4 text-[13px] leading-snug">
                {funShown.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
