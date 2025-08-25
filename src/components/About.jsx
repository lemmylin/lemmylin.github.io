import React from "react";
import Section from "./Section.jsx";

export default function About({ isDark }) {
  return (
    <Section id="about" title="About" dark={isDark}>
      <div className={"prose max-w-none " + (isDark ? "prose-invert" : "") }>
        <p>
          I work close to the hardware—NXP S32K3, bootloaders, MCAL, comms—and keep
          codebases sane even when original models/tools vanish. I like measured
          refactors, strong interfaces, and diagnostics you can trust on a Friday at 5pm.
        </p>
      </div>
    </Section>
  );
}

