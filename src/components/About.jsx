import React from "react";
import Section from "./Section.jsx";
import aboutExtras from "../data/aboutExtras.js";
import Badge from "./Badge.jsx";
import { styles, cn } from "../ui/classnames.js";
import { IconCheck, IconChevronDown, IconDiamond, IconPlus, IconStarFancy } from "../ui/icons.jsx";

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
      <div className={styles.layout.aboutGrid}>
        <div className={cn(styles.prose(isDark), styles.layout.aboutBioCol)}>
          {(aboutExtras?.intro || []).map((p) => (
            <p key={p}>{p}</p>
          ))}
          {aboutExtras?.bio ? <p>{aboutExtras.bio}</p> : null}
        </div>

        {/* Quick bits: horizontal row under bio on large screens */}
        <div className="mt-6 flex flex-col gap-3 lg:col-span-3 lg:flex-row lg:flex-wrap">
          {aboutExtras?.values?.length ? (
            <div className={cn(styles.card(isDark), "group min-w-[240px] flex-1 p-3 transition hover:-translate-y-0.5 hover:shadow-md") }>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold inline-flex items-center gap-2">
                  <IconDiamond className={isDark ? "text-indigo-300" : "text-indigo-700"} />
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
                  <IconChevronDown className={expanded.values ? "rotate-180 transition" : "transition"} />
                </button>
              </div>
              <ul className="mt-2 space-y-1 text-[13px] leading-snug">
                {valuesShown.map((v) => (
                  <li key={v} className="flex items-start gap-2">
                    <IconCheck className={isDark ? "text-indigo-300" : "text-indigo-700"} />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {aboutExtras?.hobbies?.length ? (
            <div className={cn(styles.card(isDark), "group min-w-[240px] flex-1 p-3 transition hover:-translate-y-0.5 hover:shadow-md") }>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold inline-flex items-center gap-2">
                  <IconPlus className={isDark ? "text-indigo-300" : "text-indigo-700"} />
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
                  <IconChevronDown className={expanded.hobbies ? "rotate-180 transition" : "transition"} />
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
            <div className={cn(styles.card(isDark), "group min-w-[240px] flex-1 p-3 transition hover:-translate-y-0.5 hover:shadow-md") }>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold inline-flex items-center gap-2">
                  <IconStarFancy className={isDark ? "text-indigo-300" : "text-indigo-700"} />
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
                  <IconChevronDown className={expanded.fun ? "rotate-180 transition" : "transition"} />
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
