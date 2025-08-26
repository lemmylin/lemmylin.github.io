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
              "rounded-xl px-5 py-2 font-medium inline-flex items-center gap-2 border shadow-sm backdrop-blur-md backdrop-saturate-150 transition " +
              (isDark
                ? "border-white/15 bg-white/10 text-white hover:bg-white/15"
                : "border-black/10 bg-white/50 text-slate-900 hover:bg-white/70")
            }
          >
            Email me
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Resume.pdf`}
            className={
              "rounded-xl px-5 py-2 font-medium inline-flex items-center gap-2 border shadow-sm backdrop-blur-md backdrop-saturate-150 transition " +
              (isDark
                ? "border-white/15 bg-white/10 text-white hover:bg-white/15"
                : "border-black/10 bg-white/50 text-slate-900 hover:bg-white/70")
            }
          >
            Download résumé (PDF)
          </a>
        </div>
      </div>
    </Section>
  );
}
