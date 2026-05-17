# casperkangas.github.io

Personal portfolio website built with React + Vite. Showcases my background, projects, and skills as a Computer Engineering student based in Turku, Finland.

## Tech Stack

- **React 19** — component-based UI
- **Vite 8** — fast dev server and build tool
- **Framer Motion** — entrance and scroll animations
- **Lucide React** — icon set
- **React Router DOM** — client-side routing
- **gh-pages** — automated deployment to GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

The production-ready output is placed in the `dist/` folder.

### Preview production build

```bash
npm run preview
```

## Deployment

The site is deployed to GitHub Pages via the `gh-pages` package. The deploy script bumps the patch version, builds, and pushes to the `gh-pages` branch automatically.

```bash
npm run deploy
```

This runs `predeploy` (version bump + build) → `deploy` (gh-pages publish) → `postdeploy` (pushes tags to `main`).

Live site: **[casperkangas.github.io](https://casperkangas.github.io)**

## Project Structure

```
src/
├── assets/          # Static assets (profile picture, etc.)
├── components/      # Reusable UI components
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   └── ParticleBackground.jsx
├── hooks/
│   └── useTheme.js  # Dark/light mode hook
├── pages/
│   └── Home.jsx
├── styles/          # Component-scoped CSS
│   ├── Hero.css
│   └── Navbar.css
├── App.jsx
├── index.css        # Global styles and CSS tokens
└── main.jsx
```

## Features

- Light / dark mode toggle with smooth transition
- Animated particle background
- Framer Motion entrance animations
- Responsive layout (mobile-first)
- CV download link
- Smooth scroll navigation

## License

MIT
