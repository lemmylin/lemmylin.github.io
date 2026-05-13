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
│   ├── profile.png             # Headshot used in Hero section
│   └── Resume.pdf              # Downloadable résumé
├── src/
│   ├── main.jsx                # React entry point (mounts App into #root)
│   ├── index.css               # Global styles, design tokens, Tailwind base
│   ├── App.jsx                 # App shell: layout, back-to-top button
│   ├── components/
│   │   ├── Header.jsx          # Fixed nav bar, scroll border, active section, mobile menu
│   │   ├── Hero.jsx            # Full-screen split-photo hero with typewriter + stats
│   │   ├── About.jsx           # Bio, values, hobbies, fun facts
│   │   ├── Experience.jsx      # Timeline layout (date | dot | card)
│   │   ├── Projects.jsx        # Project cards grid
│   │   ├── Skills.jsx          # Skill category cards with tech tags
│   │   ├── Education.jsx       # Education cards
│   │   ├── Contact.jsx         # Contact CTA with email + résumé links
│   │   ├── Footer.jsx          # Site footer with links
│   │   └── Section.jsx         # Shared section wrapper (number label + heading + divider)
│   ├── data/
│   │   ├── profile.js          # Name, email, location, tagline, summary, links, headshot URL
│   │   ├── experience.js       # Work history: company, role, period, bullets, tags
│   │   ├── projects.js         # Project list: name, description, highlights, stack, href
│   │   ├── skills.js           # Skills grouped by category
│   │   ├── education.js        # Education: school, degree, period, notes
│   │   └── aboutExtras.js      # Bio intro, values, hobbies, fun facts
│   └── ui/
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
   App.jsx  (layout shell, back-to-top state)
       │
       ├── Header.jsx      (no props — reads NAV_LINKS internally)
       ├── Hero.jsx        ← profile
       ├── About.jsx       (reads aboutExtras directly)
       ├── Experience.jsx  ← experience[]
       ├── Projects.jsx    ← projects[]
       ├── Skills.jsx      ← skills{}
       ├── Education.jsx   ← education[]
       ├── Contact.jsx     ← profile
       └── Footer.jsx      ← profile
```

### Styling System

The site uses a **Swiss International / Modernist** design: black and white with `#ff3000` red as the sole accent.

- **Tailwind CSS v4** — imported via `@import "tailwindcss"` in `index.css`, no config file needed
- **Base**: white background (`#ffffff`), black text (`#000000`), Inter font
- **Accent**: `#ff3000` (red) used for hover states, active nav links, focus rings, and the back-to-top button

**Custom CSS classes** (defined in `index.css`):

| Class | Purpose |
|---|---|
| `.swiss-noise` | SVG noise overlay on `<main>` for subtle texture |
| `.swiss-grid` | 24px line grid — hero backgrounds, feature areas |
| `.swiss-dots` | 16px dot matrix — section headers, sidebars |
| `.swiss-diagonal` | 45° diagonal lines — section label bars |
| `.swiss-label` | 0.6rem bold uppercase with wide letter-spacing |
| `.swiss-wrap` | Max-width 1440px container with responsive horizontal padding |
| `.tag` | Small uppercase pill tag with black border; inverts on hover |
| `.btn` | Base button: uppercase, bold, 3rem height, no border-radius |
| `.btn-primary` | Black fill → red on hover |
| `.btn-secondary` | Outlined black → filled black on hover |

---

## Component Reference

### `Header.jsx`
- Fixed position, white background; bottom border appears (2px black) after `scrollY > 40`
- Tracks active section via `IntersectionObserver` on all section IDs
- Desktop: text logotype "LL" on left, nav links center, Résumé button right
- Mobile: hamburger toggles dropdown menu; closes on outside click or Escape
- No theme toggle — light mode only

### `Hero.jsx`
- Full-viewport split layout: photo panel left | content right
- Typewriter cycles through role titles
- Stats row below the tagline

### `Experience.jsx`
- Timeline layout per entry: date column | connector dot | card
- Date column hidden on mobile; date shown inline above card

### `Projects.jsx`
- 2-column grid on sm+
- Each card links out if `href` is set; otherwise no link button rendered

### `Section.jsx`
- Shared wrapper for all content sections
- Renders: numbered label + uppercase heading + divider line
- Scroll-triggered fade-in via Framer Motion `whileInView`

---

## Data Schemas

### `profile.js`
```js
{
  name: string,
  title: string,
  email: string,
  location: string,
  tagline: string,
  summary: string,
  headshotUrl: string,      // relative path (e.g. "profile.png") or full URL
  links: [{ label: string, href: string, external: boolean }]
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
  href: string | null       // null hides the external link button
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
  intro: string[],          // Lead paragraph(s)
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
Edit `src/data/profile.js` — name, title, email, location, tagline, summary, links, headshot.

### Add/edit experience
Edit `src/data/experience.js`. Period format: `"Mon YYYY — Mon YYYY"`. Use em-dash `—`.

### Add projects
Edit `src/data/projects.js`. Set `href: null` to hide the external link button.

### Add a new section
1. Create `src/components/MySection.jsx`, use `<Section id="my-section" title="My Section">`
2. Add `{ href: "#my-section", label: "My Section" }` to the `NAV` array in `Header.jsx`
3. Import and render `<MySection />` in `App.jsx`

### Change the accent color
Find and replace `#ff3000` across `src/index.css` and component files.

---

## License

All rights reserved by the author unless otherwise noted.
