import React from "react";
import Section from "./Section.jsx";
import Badge from "./Badge.jsx";
import { styles, cn } from "../ui/classnames.js";

export default function Experience({ experience, isDark }) {
  return (
    <Section id="experience" title="Experience" dark={isDark}>
      <div className="grid gap-6">
        {experience.map((exp) => (
          <div key={exp.company + exp.role} className={cn(styles.card(isDark), "p-6")}> 
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className={styles.textMuted(isDark)}>{exp.company}</p>
              </div>
              <p className={"text-sm " + styles.textSubtle(isDark)}>{exp.period}</p>
            </div>
            <ul className={"mt-4 list-disc space-y-2 pl-5 " + styles.textBody(isDark)}>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tags?.map((t) => (
                <Badge key={t} dark={isDark}>{t}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
