import React from "react";

const base = { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };

export const IconGlobe = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const IconLinkedIn = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
    <circle cx="8" cy="10" r="1.2" fill="currentColor" />
    <path d="M7.5 16.5V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 16.5v-3a2 2 0 0 1 2-2c1.1 0 2 .9 2 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IconInstagram = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
);

export const IconEmail = (props) => (
  <svg {...base} {...props}>
    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" />
    <path d="M22 8l-10 6L2 8" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const IconGitHub = (props) => (
  <svg {...base} {...props}>
    <path
      d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 .9-2.8-.1-.2-.4-1.3.1-2.7 0 0 .8-.3 2.8 1.1.8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c2-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.5.1 2.7.6.8.9 1.8.9 2.8 0 3.9-2.3 4.7-4.5 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5 4-1.3 6.9-5.1 6.9-9.6C22 6.6 17.5 2 12 2z"
      fill="currentColor"
    />
  </svg>
);

export const IconCheck = (props) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconChevronDown = (props) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IconExternal = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 7h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IconDiamond = (props) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M12 3l9 9-9 9-9-9 9-9z" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const IconPlus = (props) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const IconStarFancy = (props) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M12 3l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 21l2-7L2 10h7l3-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

export const IconLLMonogram = ({ isDark, size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="drop-shadow-sm">
    <defs>
      <linearGradient id="llgrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={isDark ? "#818CF8" : "#4F46E5"} />
        <stop offset="100%" stopColor={isDark ? "#C084FC" : "#7C3AED"} />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#llgrad)" />
    <path d="M10 10v12h5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 10v12h5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

