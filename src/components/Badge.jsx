import React from "react";

export default function Badge({ children, dark }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-3 py-1 text-sm shadow-sm backdrop-blur " +
        (dark ? "border border-white/15 bg-white/5" : "border border-black/10 bg-black/5")
      }
    >
      {children}
    </span>
  );
}

