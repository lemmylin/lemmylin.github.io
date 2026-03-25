// Design system utilities
export const cn = (...parts) => parts.filter(Boolean).join(" ");

export const styles = {
  // Cards
  card: () => "glass-card glass-card-hover rounded-2xl shimmer",

  // Buttons
  primaryButton: "btn-primary",
  ghostButton: "btn-ghost",

  // Badges
  badge: () => "tech-badge",

  // Nav
  navLink: (active) =>
    cn(
      "relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-lg",
      active
        ? "nav-active dark:text-violet-400 text-violet-600 dark:bg-violet-500/8 bg-violet-50"
        : "dark:text-slate-400 text-slate-600 dark:hover:text-slate-200 hover:text-slate-900 dark:hover:bg-white/5 hover:bg-black/4"
    ),

  navLinkMobile: (active) =>
    cn(
      "block w-full px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200",
      active
        ? "dark:text-violet-400 text-violet-600 dark:bg-violet-500/10 bg-violet-50"
        : "dark:text-slate-400 text-slate-600 dark:hover:text-slate-200 hover:text-slate-900 dark:hover:bg-white/5 hover:bg-black/4"
    ),

  // Header
  headerContainer: (scrolled) =>
    cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled
        ? "backdrop-blur-2xl dark:bg-[#070714]/88 bg-white/92 border-b dark:border-violet-500/8 border-slate-200 dark:shadow-black/40 shadow-black/5 shadow-md"
        : "bg-transparent"
    ),

  // Section
  sectionLabel: "section-label",

  // Text
  textMuted: "dark:text-slate-400 text-slate-500",
  textSubtle: "dark:text-slate-500 text-slate-400",
  textBody: "dark:text-slate-300 text-slate-700",
  accentText: "dark:text-violet-400 text-violet-600",

  // Back to top
  backToTop: (show) =>
    cn(
      "fixed bottom-6 right-6 z-40 h-10 w-10 rounded-full flex items-center justify-center",
      "glass-card border dark:border-violet-500/25 border-violet-300/60",
      "dark:text-violet-400 text-violet-600",
      "transition-all duration-300 dark:hover:border-violet-400/50 hover:border-violet-400 dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]",
      show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
    ),
};
