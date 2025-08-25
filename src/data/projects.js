const projects = [
  {
    name: "TACM App‑Layer Rewrite",
    description:
      "Re‑implemented the application layer for a transmission/axle control module to improve readability, testability, and long‑term maintenance after model sources were lost.",
    highlights: [
      "Modular state machines & HAL boundary",
      "Improved build times and traceability",
      "Safer diagnostics & logging hooks",
    ],
    stack: ["C", "CMake", "SVN", "Unit Tests"],
  },
  {
    name: "PLA DUCA Integration",
    description:
      "Integrated DUCA motor‑control algorithm into PLA, plus screening and incremental improvements; coordinated verification with partners.",
    highlights: ["Shift time / overshoot improvements", "CAN diagnostics", "Algorithm reuse", "Calibration hooks"],
    stack: ["C", "AUTOSAR MCAL", "CAN tools"],
  },
  {
    name: "SENT→CAN Utility (Internal Tool)",
    description:
      "Bridge that decodes SENT (Single Edge Nibble Transmission) signals and broadcasts over CAN for bench validation/diagnostics; supports flexible field mapping to new CAN IDs.",
    highlights: ["Bit‑level parsing", "Timing/edges", "Non‑disruptive mapping"],
    stack: ["C", "SENT", "CAN"],
  },
  {
    name: "Motion Sensor Prototype (Concept)",
    description:
      "Requirements matrix and prototype concept for tachograph motion sensor behaviors (ISO 16844‑3 alignment); later deprioritized.",
    highlights: ["Requirements matrix", "Bench tests"],
    stack: ["C", "Excel/Matrix", "Test Harness"],
  },
  {
    name: "Cross‑Platform Mobile App (Capstone)",
    description:
      "Flutter/Dart app with Firebase backend, auth, and real‑time sync; push notifications, offline caching, and responsive layouts for iOS/Android.",
    highlights: ["MVVM architecture", "Realtime sync", "Offline caching"],
    stack: ["Flutter", "Dart", "Firebase"],
  },
];

export default projects;

