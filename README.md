# Lemmy Lin — Portfolio

A fast, responsive personal portfolio built with React, Vite, and Tailwind. Deployed on GitHub Pages.

Live site: https://lemmylin.github.io/

## Features

- Responsive header with mobile menu (hamburger toggle)
- “Back to Top” floating button with smooth scroll
- Theme modes: auto, light, dark (persists in localStorage)
- Sections: About, Experience, Projects, Skills, Education, Contact
- Subtle glassy background and clean typography

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Framer Motion (animations)

## Getting Started

Prerequisites
- Node.js 18+ and npm 9+

Install
```bash
npm install
```

Development
```bash
npm run dev
```

Build
```bash
npm run build
```

Preview production build
```bash
npm run preview
```

## Project Structure

- `index.html` — Vite HTML entry
- `src/main.jsx` — React bootstrap
- `src/App.jsx` — App shell and theme handling
- `src/components/Header.jsx` — Header + mobile menu
- `src/components/*` — Section components (Hero, About, Experience, Projects, Skills, Education, Contact, Footer)
- `src/index.css` — Global styles (Tailwind)

## Accessibility

- Mobile nav uses proper `aria-*` attributes and labeling
- Back-to-top button includes `aria-label` and keyboard focus support
- Color scheme respects system preferences when in “auto” mode

## Deployment

This repository is named `lemmylin.github.io`, so pushing to `main` publishes automatically via GitHub Pages. The site is built as a static bundle with Vite.

If using a different repository name, you can still deploy by serving the `dist/` output with any static host (Netlify, Vercel, GitHub Pages with a `gh-pages` branch, etc.).

## Customization

- Update profile data and content under `src/data/*`
- Adjust colors/spacing using Tailwind utility classes in components
- Tweak animations with Framer Motion as needed

## License

No license specified. All rights reserved by the author unless otherwise noted.

