# Lemmy Lin — Portfolio

Personal portfolio site for Lemmy Lin, Embedded Software Engineer.

Live site: **https://lemmylin.github.io/**

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animations | Framer Motion |
| Deployment | GitHub Pages via GitHub Actions |
| Language | JavaScript (JSX) |

---

## Project Structure

```
lemmylin.github.io/
├── public/
│   └── Resume.pdf              # Downloadable résumé
├── src/
│   ├── main.jsx                # React entry point (mounts App into #root)
│   ├── index.css               # Global styles, design tokens, Tailwind base
│   ├── App.jsx                 # App shell: theme state, layout, back-to-top
│   ├── components/
│   │   ├── Header.jsx          # Fixed nav bar, scroll detection, active section, mobile menu
│   │   ├── Hero.jsx            # Full-screen split-photo hero with typewriter + stats
│   │   ├── About.jsx           # Bio, values, hobbies, fun facts cards
│   │   ├── Experience.jsx      # 3-column timeline (date | dot | card)
│   │   ├── Projects.jsx        # Project cards with mouse-follow tilt glow
│   │   ├── Skills.jsx          # Skill category cards with tech badges
│   │   ├── Education.jsx       # Education cards
│   │   ├── Contact.jsx         # Contact CTA with email + résumé links
│   │   ├── Footer.jsx          # Site footer with links
│   │   └── Section.jsx         # Shared section wrapper (number label + heading + divider)
│   ├── data/
│   │   ├── profile.js          # Name, email, location, tagline, links, headshot URL
│   │   ├── experience.js       # Work history: company, role, period, bullets, tags
│   │   ├── projects.js         # Project list: name, description, highlights, stack, href
│   │   ├── skills.js           # Skills grouped by category
│   │   ├── education.js        # Education: school, degree, period, notes
│   │   └── aboutExtras.js      # Bio intro, values, hobbies, fun facts
│   └── ui/
│       ├── Logo.jsx            # Custom SVG logo (circuit-trace LL mark on amber→teal chip)
│       ├── classnames.js       # Shared CSS class builder utilities (cn, styles)
│       └── icons.jsx           # Inline SVG icon components
├── index.html                  # Vite HTML entry, sets <title>
├── vite.config.js              # Vite config: React plugin, base path for GitHub Pages
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml          # GitHub Actions: build on push to main → gh-pages branch
```

---

## Component Architecture

### Data Flow

```
src/data/*.js  (static JS modules)
       │
       ▼
   App.jsx  (theme state: mode / isDark)
       │
       ├── Header.jsx      ← isDark, mode, cycleMode
       ├── Hero.jsx        ← profile
       ├── About.jsx       (reads aboutExtras directly)
       ├── Experience.jsx  ← experience[]
       ├── Projects.jsx    ← projects[]
       ├── Skills.jsx      ← skills{}
       ├── Education.jsx   ← education[]
       ├── Contact.jsx     ← profile
       └── Footer.jsx      ← profile
```

### Theme System

- State: `mode` ∈ `{ "light" | "dark" }` stored in `localStorage`
- Effective dark: `isDark = mode === "dark" || (mode === "auto" && systemDark)`
- Class toggle: `document.documentElement.classList.toggle("dark", isDark)`
- Tailwind v4 dark variant enabled in `index.css`:
  ```css
  @variant dark (&:where(.dark, .dark *));
  ```
- Toggle: `cycleMode` immediately flips between light/dark based on current state

### Styling System

- **Tailwind CSS v4** — imported via `@import "tailwindcss"` in `index.css`, no config file needed
- **Design tokens** (CSS custom properties in `:root`):
  - `--amber: 252 211 77` (amber-300)
  - `--teal: 94 234 212` (teal-300)
  - `--rose: 253 164 175` (rose-300)
  - `--bg-base: 13 9 0` (warm near-black `#0d0900`)
  - `--bg-card: 22 15 2` (warm dark card `#160f02`)
- **Custom CSS classes** (in `index.css`):
  - `.glass-card` — dark semi-transparent card with amber border
  - `.glass-card-hover` — hover lift + glow transition
  - `.shimmer` — subtle shimmer sweep on hover
  - `.btn-primary` — amber→orange gradient CTA button
  - `.btn-ghost` — amber-tinted outlined button
  - `.tech-badge` — pill badge for tech stack tags
  - `.gradient-text-cyan` — amber→teal→rose gradient text fill
  - `.typewriter-cursor` — blinking cursor via `::after`
  - `.timeline-line` — amber gradient vertical line
  - `.bg-dot-grid` — dot grid + ambient glow background
  - `.orb-cyan` / `.orb-indigo` — large ambient glow blobs
- **Light mode overrides**: `:root:not(.dark)` selectors boost text contrast and adjust component backgrounds

### Shared Utilities (`src/ui/classnames.js`)

```js
cn(...parts)              // Filters falsy parts and joins with spaces
styles.card()             // glass-card class string
styles.primaryButton      // btn-primary class string
styles.badge()            // tech-badge class string
styles.navLink(active)    // Nav link with active amber highlight
styles.navLinkMobile(active)
styles.headerContainer(scrolled)  // Transparent until scroll, then glass blur
styles.backToTop(show)    // Fixed bottom-right button with show/hide transition
```

---

## Component Reference

### `Header.jsx`
- Fixed position, transparent until `scrollY > 40`, then applies glass blur
- Tracks active section via `IntersectionObserver` on all section IDs
- Mobile: hamburger opens dropdown menu, closes on outside click / Escape
- Theme toggle button cycles light ↔ dark
- Logo: `<Logo size={32} />` + "Lemmy Lin" wordmark

### `Hero.jsx`
- Full-viewport split layout: photo panel left (44% desktop) | content right (56%)
- Photo: `h-[45vh]` mobile → `h-[52vh]` sm → full height desktop
- Gradient overlays: right-edge blend (desktop), bottom fade (mobile)
- Typewriter cycles through 4 role titles
- Stats row: Years Exp, Jira Tickets, Defects, OEM Programs

### `Experience.jsx`
- 3-column layout per entry: `[date col] [dot+line] [card]`
- Date column hidden on mobile; date shown inline above card
- Dates parsed by splitting on em-dash `—`
- Connecting line uses inline gradient style (not `timeline-line` class)

### `Projects.jsx`
- 2-column grid on sm+
- Each card: mouse-follow radial glow + 3D tilt on hover (respects `prefers-reduced-motion`)
- External link opens in new tab

### `Section.jsx`
- Shared wrapper for all content sections
- Renders: `// XX` number label + uppercase heading + amber gradient divider line
- Scroll-triggered fade-in animation via Framer Motion `whileInView`

### `Logo.jsx`
- Pure SVG, 36×36 viewBox, scalable via `size` prop
- Design: two L-shapes (circuit traces) on amber→teal gradient chip background (rx=8)
- Center solder joint dot where feet meet; top pin dots on each vertical

---

## Data Schemas

### `profile.js`
```js
{
  name: string,
  email: string,
  location: string,
  tagline: string,
  summary: string,
  headshotUrl: string,      // can be relative path or full URL
  links: [{ label: string, href: string }]  // LinkedIn, GitHub, Instagram, Email, Site
}
```

### `experience.js`
```js
[{
  company: string,
  role: string,
  period: string,           // "Mon YYYY — Mon YYYY" or "Mon YYYY — Present"
  bullets: string[],
  tags: string[]
}]
```

### `projects.js`
```js
[{
  name: string,
  description: string,
  highlights: string[],
  stack: string[],
  href: string | null
}]
```

### `skills.js`
```js
{
  CategoryName: string[]    // e.g. { Languages: ["C", "C++", ...] }
}
```

### `education.js`
```js
[{
  school: string,
  degree: string,
  period: string,
  notes: string[]
}]
```

### `aboutExtras.js`
```js
{
  intro: string[],          // Lead paragraph(s) for bio card
  bio: string,              // Secondary bio paragraph
  values: string[],
  hobbies: string[],
  fun_facts: string[]
}
```

---

## Build & Deploy

### Local Development
```bash
npm install
npm run dev       # Vite dev server at http://localhost:5173
```

### Production Build
```bash
npm run build     # Outputs to dist/
npm run preview   # Preview the built site locally
```

### Deployment
- Pushing to `main` triggers `.github/workflows/deploy.yml`
- Workflow: `npm ci && npm run build` → deploys `dist/` to `gh-pages` branch
- GitHub Pages serves from `gh-pages` at `https://lemmylin.github.io/`
- `vite.config.js` sets `base: "/"` for the root domain repo

---

## Customization Guide

### Update personal info
Edit `src/data/profile.js` — name, email, location, tagline, links, headshot.

### Add/edit experience
Edit `src/data/experience.js`. Period format: `"Mon YYYY — Mon YYYY"`. Use em-dash `—`.

### Add projects
Edit `src/data/projects.js`. Set `href: null` to hide the external link button.

### Change accent color
The amber palette is defined in `src/index.css` under design tokens and throughout component class names. The primary accent is `#fcd34d` (amber-300) with `#f59e0b` (amber-500) for buttons.

### Add a new section
1. Create `src/components/MySection.jsx`, import and use `<Section id="my-section" title="My Section">`
2. Add `{ href: "#my-section", label: "My Section" }` to `NAV_LINKS` in `Header.jsx`
3. Import and render `<MySection />` in `App.jsx`
4. Add `"my-section"` to the `ids` array in `Header.jsx`'s active section tracker

---

## License

All rights reserved by the author unless otherwise noted.
