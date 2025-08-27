import React from "react";
import Section from "./Section.jsx";
import aboutExtras from "../data/aboutExtras.js";
import Badge from "./Badge.jsx";

export default function About({ isDark }) {
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
        <div className="mt-8 flex flex-col gap-4 lg:col-span-3 lg:mt-6 lg:flex-row lg:flex-wrap">
          {aboutExtras?.values?.length ? (
            <div
              className={
                "min-w-[240px] flex-1 rounded-xl p-4 ring-1 ring-inset shadow-sm " +
                (isDark ? "ring-white/10 bg-white/5" : "ring-black/10 bg-white/60")
              }
            >
              <h3 className="text-sm font-semibold">Values</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {aboutExtras.values.map((v) => (
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
                "min-w-[240px] flex-1 rounded-xl p-4 ring-1 ring-inset shadow-sm " +
                (isDark ? "ring-white/10 bg-white/5" : "ring-black/10 bg-white/60")
              }
            >
              <h3 className="text-sm font-semibold">Hobbies</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {aboutExtras.hobbies.map((h) => (
                  <Badge key={h} dark={isDark}>{h}</Badge>
                ))}
              </div>
            </div>
          ) : null}

          {aboutExtras?.fun_facts?.length ? (
            <div
              className={
                "min-w-[240px] flex-1 rounded-xl p-4 ring-1 ring-inset shadow-sm " +
                (isDark ? "ring-white/10 bg-white/5" : "ring-black/10 bg-white/60")
              }
            >
              <h3 className="text-sm font-semibold">Fun facts</h3>
              <ul className="mt-2 list-disc pl-4 text-sm">
                {aboutExtras.fun_facts.map((f) => (
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
