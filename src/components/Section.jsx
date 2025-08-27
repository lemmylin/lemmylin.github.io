import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Section({ id, title, children, dark, divider = true }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.section
      id={id}
      className={
        "mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:scroll-mt-28 lg:px-8 " +
        (divider ? (dark ? "border-t border-white/10" : "border-t border-black/5") : "")
      }
      initial={prefersReduced ? false : { opacity: 0, y: 14 }}
      whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2
        className={
          "mb-6 text-2xl font-semibold tracking-tight " +
          (dark ? "text-white/90" : "text-slate-900")
        }
      >
        {title}
      </h2>
      {children}
    </motion.section>
  );
}
