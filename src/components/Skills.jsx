import React from "react";
import Section from "./Section.jsx";
import Badge from "./Badge.jsx";
import { styles, cn } from "../ui/classnames.js";

export default function Skills({ skills, isDark }) {
  return (
    <Section id="skills" title="Skills" dark={isDark}>
      <div className={styles.layout.gridCols1_2_3}>
        {Object.entries(skills).map(([cat, items]) => (
          <div key={cat} className={cn(styles.card(isDark), "p-6")}>
            <h4 className={"text-base font-semibold " + styles.accentText(isDark)}>
              {cat.replaceAll("_", " / ")}
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((it) => (
                <Badge key={it} dark={isDark}>{it}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
