import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { num: "2+",   label: "Years Exp" },
  { num: "200+", label: "Tickets Closed" },
  { num: "0",    label: "Defects Shipped" },
  { num: "3",    label: "OEM Programs" },
];

/* Snappy easing — no spring, no bounce */
const ease = [0, 0, 0.2, 1];

export default function Hero({ profile }) {
  const socials = profile.links.filter((l) =>
    ["LinkedIn", "GitHub", "Instagram"].includes(l.label)
  );

  return (
    <section
      id="top"
      className="border-b-4 border-black swiss-grid min-h-screen flex flex-col pt-14"
    >
      <div className="swiss-wrap flex-1 py-10 md:py-14 flex flex-col justify-between">

        {/* Status label */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease }}
        >
          <span className="w-2 h-2 bg-[#ff3000] flex-shrink-0" aria-hidden="true" />
          <span className="swiss-label text-[#ff3000]">01 — Available for Work</span>
        </motion.div>

        {/* Main layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left: text block */}
          <div className="lg:col-span-8 flex flex-col">

            {/* Name — massive display type */}
            <motion.h1
              className="font-black uppercase leading-none tracking-tighter text-black"
              style={{ fontSize: "clamp(4.2rem, 14vw, 11rem)" }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease, delay: 0.05 }}
            >
              LEMMY
              <br />
              LIN
            </motion.h1>

            {/* Swiss Red rule — slides in */}
            <motion.div
              className="h-1.5 w-16 bg-[#ff3000] mt-5 mb-5 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.35, ease, delay: 0.4 }}
              aria-hidden="true"
            />

            {/* Role line */}
            <motion.p
              className="swiss-label text-black mb-4"
              style={{ fontSize: "0.72rem", letterSpacing: "0.2em" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.45 }}
            >
              {profile.title}
            </motion.p>

            {/* Tagline */}
            <motion.p
              className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mb-10"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease, delay: 0.5 }}
            >
              {profile.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-12"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease, delay: 0.55 }}
            >
              <a href="#contact" className="btn btn-primary">
                Get in Touch
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
                </svg>
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Resume.pdf`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                View Résumé&nbsp;↗
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              className="border-t-2 border-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.62 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4">
                {STATS.map(({ num, label }, i) => (
                  <div
                    key={label}
                    className={`py-6 ${i < STATS.length - 1 ? "sm:border-r-2 sm:border-black" : ""} ${i > 0 ? "sm:pl-6" : ""} ${i % 2 === 0 && i < STATS.length - 1 ? "border-r-2 border-black sm:border-r-0 pr-6 sm:pr-0" : "pl-6 sm:pl-0"}`}
                  >
                    <div className="font-black text-3xl md:text-4xl leading-none text-black">
                      {num}
                    </div>
                    <div className="swiss-label text-gray-500 mt-1.5">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: photo + meta card */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease, delay: 0.2 }}
          >
            {/* Photo — 4px black border, slight grayscale */}
            <div className="border-4 border-black">
              <img
                src={profile.headshotUrl}
                alt={profile.name}
                className="w-full aspect-[3/4] object-cover object-top block"
                style={{ filter: "grayscale(12%) contrast(1.02)" }}
              />
            </div>

            {/* Meta info box — dot-pattern muted background */}
            <div className="border-4 border-t-0 border-black p-5 bg-[#f2f2f2] swiss-dots">
              <div className="space-y-4">
                <div>
                  <div className="swiss-label text-gray-500 mb-1">Location</div>
                  <div className="text-sm font-semibold">{profile.location}</div>
                </div>
                <div>
                  <div className="swiss-label text-gray-500 mb-1">Currently at</div>
                  <div className="text-sm font-semibold">Stoneridge, Inc.</div>
                </div>
                <div className="pt-3 border-t-2 border-black flex flex-wrap gap-x-5 gap-y-2">
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
      </div>
    </section>
  );
}
