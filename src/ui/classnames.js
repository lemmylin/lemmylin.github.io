// Design system utilities
export const cn = (...parts) => parts.filter(Boolean).join(" ");

export const styles = {
  // Cards
  card: () => "glass-card glass-card-hover rounded-xl shimmer",

  // Buttons
  primaryButton: "btn-primary",
  ghostButton: "btn-ghost",

  // Badges
  badge: () => "tech-badge",

  // Nav
  navLink: (active) =>
    cn(
      "relative px-3 py-1.5 text-sm font-medium transition-colors duration-200 rounded-md",
      active
        ? "text-sky-500 dark:text-sky-400 bg-sky-500/8 dark:bg-sky-400/8"
        : "dark:text-slate-400 text-slate-600 dark:hover:text-slate-200 hover:text-slate-900 dark:hover:bg-white/5 hover:bg-black/5"
    ),

  navLinkMobile: (active) =>
    cn(
      "block w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
      active
        ? "text-sky-500 dark:text-sky-400 bg-sky-500/10 dark:bg-sky-400/10"
        : "dark:text-slate-400 text-slate-600 dark:hover:text-slate-200 hover:text-slate-900 dark:hover:bg-white/5 hover:bg-black/5"
    ),

  // Header
  headerContainer: (scrolled) =>
    cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled
        ? "backdrop-blur-xl dark:bg-[#04050d]/85 bg-white/90 border-b dark:border-sky-400/10 border-slate-200 dark:shadow-black/30 shadow-black/5 shadow-lg"
        : "backdrop-blur-sm bg-transparent"
    ),

  // Section
  sectionLabel: "section-label",

  // Text
  textMuted: "text-slate-400",
  textSubtle: "text-slate-500",
  textBody: "text-slate-300",
  accentText: "text-sky-400",

  // Back to top
  backToTop: (show) =>
    cn(
      "fixed bottom-6 right-6 z-40 h-10 w-10 rounded-full flex items-center justify-center",
      "glass-card border border-sky-400/20 text-sky-400",
      "transition-all duration-300 hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]",
      show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
    ),

  // Light mode variants
  lightCard: "bg-white/80 border border-sky-200/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all",
  lightBadge: "tech-badge",
};
