import React from "react";

export default function LiquidGlass({ className = "", children }) {
  return (
    <div className={"liquid-glass " + className}>
      <span className="lg-blob b1" aria-hidden="true" />
      <span className="lg-blob b2" aria-hidden="true" />
      <span className="lg-blob b3" aria-hidden="true" />
      <div className="lg-content">{children}</div>
    </div>
  );
}

