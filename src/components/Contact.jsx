import React from "react";
import Section from "./Section.jsx";
import { styles, cn } from "../ui/classnames.js";

export default function Contact({ profile, isDark }) {
  return (
    <Section id="contact" title="Contact" dark={isDark}>
      <div className={cn(styles.card(isDark), "p-8")}>
        <p className={isDark ? "text-white/85" : "text-slate-700"}>
          Want to talk shop about embedded systems, automotive, or interesting side projects?
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className={styles.primaryButton}>
            Email me
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Resume.pdf`}
            className={styles.glassButton(isDark)}
          >
            Download résumé (PDF)
          </a>
        </div>
      </div>
    </Section>
  );
}
