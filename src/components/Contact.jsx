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
          <a
            href="https://www.instagram.com/lemmylin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram: @lemmylin"
            className={
              "inline-flex items-center gap-2 rounded-xl px-4 py-2 font-medium transition " +
              (isDark
                ? "border border-white/15 text-white/90 hover:bg-white/5"
                : "border border-black/10 text-slate-800 hover:bg-black/5")
            }
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
            </svg>
            <span>@lemmylin</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
