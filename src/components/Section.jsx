import React from "react";

export default function Section({ id, title, children, dark }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 lg:scroll-mt-28 lg:px-8">
      <h2
        className={
          "mb-6 text-2xl font-semibold tracking-tight " +
          (dark ? "text-white/90" : "text-slate-900")
        }
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
