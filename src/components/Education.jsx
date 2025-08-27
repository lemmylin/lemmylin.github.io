import React from "react";
import Section from "./Section.jsx";
import { styles, cn } from "../ui/classnames.js";

export default function Education({ education, isDark }) {
  return (
    <Section id="education" title="Education" dark={isDark}>
      <div className={styles.layout.gridGap}>
        {education.map((e) => (
          <div key={e.school} className={cn(styles.card(isDark), "p-6")}>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{e.school}</h3>
                <p className={styles.textBody(isDark)}>{e.degree}</p>
              </div>
              <p className={"text-sm " + styles.textSubtle(isDark)}>{e.period}</p>
            </div>
            {e.notes?.length ? (
              <ul className={"mt-3 list-disc space-y-1 pl-5 " + styles.textBody(isDark)}>
                {e.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  );
}
