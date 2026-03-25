import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeader } from "./About.jsx";

const ease = [0, 0, 0.2, 1];

export default function Contact({ profile }) {
  const pref = useReducedMotion();
  const socials = profile.links.filter((l) =>
    ["LinkedIn", "GitHub", "Instagram"].includes(l.label)
  );

  const anim = (delay = 0) =>
    pref ? {} : {
      initial:    { opacity: 0, y: 14 },
      whileInView: { opacity: 1, y: 0 },
      viewport:   { once: true },
      transition: { duration: 0.35, delay, ease },
    };

  return (
    <section id="contact" className="border-b-4 border-black">
      <SectionHeader num="06" title="Contact" />

      {/* Split layout: headline left, CTAs right */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2">

        {/* Left: big typographic headline */}
        <motion.div
          {...anim(0)}
          className="px-6 sm:px-10 lg:px-16 py-12 md:py-16 lg:border-r-4 lg:border-black flex flex-col justify-between gap-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 bg-[#ff3000]" aria-hidden="true" />
              <span className="swiss-label text-[#ff3000]">Open to new opportunities</span>
            </div>

            <h2
              className="font-black uppercase leading-none tracking-tighter text-black"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              LET&apos;S
              <br />
              BUILD
              <br />
              SOMETHING
              <br />
              GREAT.
            </h2>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed max-w-md">
            Embedded systems, automotive software, or interesting side projects —
            I&apos;m always up for a good engineering conversation.
          </p>
        </motion.div>

        {/* Right: CTAs + contact info */}
        <motion.div
          {...anim(0.1)}
          className="px-6 sm:px-10 lg:px-16 py-12 md:py-16 flex flex-col justify-between gap-10"
        >
          {/* Action buttons */}
          <div className="flex flex-col gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-primary w-full">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" />
                <path d="M22 8l-10 6L2 8" stroke="currentColor" strokeWidth="2" />
              </svg>
              Send Email&nbsp;→
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary w-full"
            >
              Download Résumé&nbsp;↗
            </a>
          </div>

          {/* Contact details */}
          <div className="border-t-2 border-black pt-8 grid grid-cols-2 gap-6">
            <div>
              <div className="swiss-label text-gray-500 mb-2">Email</div>
              <a
                href={`mailto:${profile.email}`}
                className="text-sm font-semibold text-black hover:text-[#ff3000] transition-colors duration-150 break-all"
              >
                {profile.email}
              </a>
            </div>
            <div>
              <div className="swiss-label text-gray-500 mb-2">Socials</div>
              <div className="flex flex-col gap-1.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="swiss-label text-black hover:text-[#ff3000] transition-colors duration-150"
                  >
                    {s.label}&nbsp;↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
