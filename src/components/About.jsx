import React from "react";
import Section from "./Section.jsx";
import aboutExtras from "../data/aboutExtras.js";

export default function About({ isDark }) {
  return (
    <Section id="about" title="About" dark={isDark} divider={false}>
      <div className={"prose max-w-none " + (isDark ? "prose-invert" : "") }>
        <p>
          I work close to the hardware—NXP S32K3, bootloaders, MCAL, comms—and keep
          codebases sane even when original models/tools vanish. I like measured
          refactors, strong interfaces, and diagnostics you can trust on a Friday at 5pm.
        </p>
        {aboutExtras?.bio ? <p>{aboutExtras.bio}</p> : null}
        {aboutExtras?.values?.length ? (
          <>
            <h3>Values</h3>
            <ul>
              {aboutExtras.values.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </>
        ) : null}
        {aboutExtras?.hobbies?.length ? (
          <>
            <h3>Hobbies</h3>
            <ul>
              {aboutExtras.hobbies.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </>
        ) : null}
        {aboutExtras?.fun_facts?.length ? (
          <>
            <h3>Fun facts</h3>
            <ul>
              {aboutExtras.fun_facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </Section>
  );
}
