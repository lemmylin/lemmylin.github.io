import React from "react";

export default function Badge({ children, dark }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-3 py-1 text-sm ring-1 ring-inset transition shadow-sm backdrop-blur-md backdrop-saturate-150 hover:-translate-y-0.5 hover:shadow " +
        (dark ? "ring-white/15 bg-white/10 text-white" : "ring-black/10 bg-white/40 text-slate-900")
      }
    >
      {children}
    </span>
  );
}
