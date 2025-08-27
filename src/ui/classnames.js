// Small utilities to keep JSX clean and consistent
export const cn = (...parts) => parts.filter(Boolean).join(" ");

export const styles = {
  card: (dark) =>
    cn(
      "rounded-2xl ring-1 ring-inset shadow-sm transition hover:shadow-md",
      dark ? "ring-white/10 bg-white/5" : "ring-black/10 bg-white/60"
    ),
  glassButton: (dark) =>
    cn(
      "inline-flex items-center gap-2 rounded-lg px-3 py-1 border shadow-sm backdrop-blur-md backdrop-saturate-150 transition",
      dark
        ? "border-white/15 bg-white/10 text-white hover:bg-white/15"
        : "border-black/10 bg-white/40 text-slate-900 hover:bg-white/60"
    ),
  primaryButton:
    "rounded-xl px-5 py-2 font-medium inline-flex items-center gap-2 text-white shadow-lg transition bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500",
  navLink: (dark) => cn("rounded-md px-2 py-1 font-medium", dark ? "hover:bg-white/5" : "hover:bg-black/5"),
  sectionTitle: (dark) => cn("mb-6 text-2xl font-semibold tracking-tight", dark ? "text-white/90" : "text-slate-900"),
  prose: (dark) => cn("prose max-w-none", dark ? "prose-invert" : ""),
  badge: (dark) =>
    cn(
      "inline-flex items-center rounded-full px-3 py-1 text-sm ring-1 ring-inset transition shadow-sm backdrop-blur-md backdrop-saturate-150 hover:-translate-y-0.5 hover:shadow",
      dark ? "ring-white/15 bg-white/10 text-white" : "ring-black/10 bg-white/40 text-slate-900"
    ),
  headerContainer: (dark) =>
    cn(
      "sticky top-0 z-20 border-b backdrop-blur after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-gradient-to-r after:from-transparent",
      dark ? "border-white/10 bg-slate-950/70 after:via-white/20 after:to-transparent" : "border-black/10 bg-white/70 after:via-black/10 after:to-transparent"
    ),
  backToTop: (dark, show) =>
    cn(
      "fixed bottom-4 right-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-lg backdrop-blur-md backdrop-saturate-150 transition md:bottom-6 md:right-6",
      dark ? "border-white/15 bg-white/10 text-white hover:bg-white/15" : "border-black/10 bg-white/50 text-slate-900 hover:bg-white/70",
      show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
    ),
  textMuted: (dark) => (dark ? "text-white/70" : "text-slate-600"),
  textSubtle: (dark) => (dark ? "text-white/60" : "text-slate-500"),
  textBody: (dark) => (dark ? "text-white/80" : "text-slate-700"),
  accentText: (dark) => (dark ? "text-indigo-300" : "text-indigo-700"),
  hoverRow: (dark) => (dark ? "hover:bg-white/5" : "hover:bg-black/5"),
};
