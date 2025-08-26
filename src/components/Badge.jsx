import React from "react";

export default function Badge({ children, dark }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-3 py-1 text-sm border shadow-sm backdrop-blur-md backdrop-saturate-150 " +
        (dark ? "border-white/15 bg-white/10 text-white" : "border-black/10 bg-white/40 text-slate-900")
      }
    >
      {children}
    </span>
  );
}
