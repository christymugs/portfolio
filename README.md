# Christy Mugomba — Portfolio

Personal portfolio site, built with React, TypeScript, Vite, and Tailwind CSS.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # type-checks then builds to dist/
npm run preview # serve the production build locally
```

## Structure

- `src/pages/` — one component per route (Home, About, Skills, Education, Experience, Projects)
- `src/data/` — content (skills, education, experience, projects) as typed data, separate from markup
- `src/components/` — shared UI (nav, footer, layout, scroll-reveal wrapper)
- `public/assets/` — images and icons, referenced via the `asset()` helper in `src/lib/asset.ts` so paths work regardless of deploy subpath

Routing uses `HashRouter` and `vite.config.ts` sets `base: './'`, so the built `dist/` folder can be deployed as static files to any host or subpath (GitHub Pages, Netlify, S3, etc.) with zero extra configuration.

The previous static HTML/CSS/JS version of this site is kept in `legacy-static/` for reference.
