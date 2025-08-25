import React from "react";
import Section from "./Section.jsx";

export default function Contact({ profile, isDark }) {
  return (
    <Section id="contact" title="Contact" dark={isDark}>
      <div
        className={
          "rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 p-8 shadow " +
          (isDark ? "border border-white/10" : "border border-black/10")
        }
      >
        <p className={isDark ? "text-white/85" : "text-slate-700"}>
          Want to talk shop about embedded systems, automotive, or interesting side projects?
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className={
              "rounded-xl px-5 py-2 font-medium text-white shadow " +
              (isDark ? "bg-indigo-500/90 hover:bg-indigo-500" : "bg-indigo-600 hover:bg-indigo-700")
            }
          >
            Email me
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Resume.pdf`}
            className={
              "rounded-xl px-5 py-2 font-medium " +
              (isDark
                ? "border border-white/15 text-white/90 hover:bg-white/5"
                : "border border-black/10 text-slate-800 hover:bg-black/5")
            }
          >
            Download résumé (PDF)
          </a>
        </div>
      </div>
    </Section>
  );
}
