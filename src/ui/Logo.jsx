import React from "react";

export default function Logo({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ll-chip-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>

      {/* Chip background */}
      <rect width="36" height="36" rx="8" fill="url(#ll-chip-grad)" />
      {/* Inner bevel */}
      <rect x="1" y="1" width="34" height="34" rx="7" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

      {/* Left L — vertical stem + horizontal foot */}
      <path
        d="M9 8 L9 26 L16 26"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right L — mirrored: vertical stem + horizontal foot toward center */}
      <path
        d="M27 8 L27 26 L20 26"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center solder joint where both feet meet */}
      <circle cx="18" cy="26" r="2" fill="white" />

      {/* Top pin dots (IC lead markers) */}
      <circle cx="9" cy="8" r="1.3" fill="white" opacity="0.65" />
      <circle cx="27" cy="8" r="1.3" fill="white" opacity="0.65" />
    </svg>
  );
}
