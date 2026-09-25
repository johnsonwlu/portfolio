# Johnson Lu — Portfolio

A Next.js portfolio combining engineering experience with alpine photography.

## Local development

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Where to make changes

- `app/page.tsx` lists the page sections in display order and owns the shared stillness toggle.
- `app/data/portfolio.ts` holds work experience, projects, and grouped skills.
- `app/data/observations.ts` holds the landscape markers and their field notes.
- `app/components/` contains a named component for each page section. `ProjectCard.tsx` renders a project; `ProjectArtwork.tsx` holds its decorative illustration.
- `app/components/LandscapeHero.tsx` owns the mist slider and selected photo marker.
- `app/components/ProjectsSection.tsx` owns project filtering and expansion.
- `app/hooks/useSceneParallax.ts` handles scroll movement and respects stillness and reduced-motion settings.
- `app/layout.tsx` contains page metadata and imports the stylesheets.

## Styles

The stylesheets load in this order:

1. `app/globals.css`: shared colors, typography, page layout, and common elements.
2. `app/styles/landscape.css`: panoramic hero, mist, photo controls, and closing landscape.
3. `app/portfolio-content.css`: projects, experience, skills, and education.

Responsive rules live beside the corresponding stylesheet's desktop rules. Keep each CSS declaration on its own line, and use ordinary multiline JSX rather than compressed markup.

## Formatting and verification

```sh
npm run format
npm run format:check
npm run lint
npm run build
```

Prettier keeps indentation and JSX attributes consistent. Long text strings and SVG path data may remain longer than the preferred line width to keep the content intact.

## Images and saved design

- `.design-backups/private-assets/IMG_9867.jpeg`: original photo, kept locally and excluded from Git because it contains location metadata.
- `public/alpine-expanded.webp`: generated panoramic expansion.
- `.design-backups/alpine-v1/`: saved first design and restore instructions.
- `design/README.md`: content sources and image generation notes.

The backup is intentionally excluded from formatting so it remains an exact snapshot.
