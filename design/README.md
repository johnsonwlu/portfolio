# Portfolio design notes

## Restore the first alpine design

The original light design is saved in `.design-backups/alpine-v1/app`.
See `.design-backups/alpine-v1/README.md` for the three restore commands.
Restoring it also restores that version's placeholder content. The real portfolio content remains separately available in `app/data/portfolio.ts`.

## Content sources

- Experience, education, Tricast, and skills: user-provided LinkedIn text, September 2026. Employment periods use explicit dates rather than copied duration estimates.
- KnowlEdge, Stock Tracker, League of Legends Database, email, and LinkedIn: the previous local portfolio’s project and contact components.
- Duplicate skill labels normalized (HTML/HTML5, React.js/React, Redux.js/Redux, Gitlab/GitLab, ArgoCD/Argo CD). Endorsements and employer associations omitted.
- Project illustrations are decorative diagrams, not actual product screenshots or forecasts.

## Expanded image

Original: `.design-backups/private-assets/IMG_9867.jpeg` (unchanged, local only, ignored by Git).
New asset: `public/alpine-expanded.webp`.
Generated with the built-in image generation tool, then encoded as WebP. The source JPEG needed conversion to PNG because its MPO encoding was unsupported.

Final prompt:

> Edit this alpine photo into a photorealistic wide 3:2 landscape expansion for a portfolio hero. Expand horizontally, retaining the original central mountain ridges, clouds, rocky trail and alpine meadow. Extend cloud sea and grassy rocky mountains naturally to either side. Natural daytime lighting, muted blue sky, soft ivory clouds, sage grasses, realistic photographic detail. Keep the recognizable original trail and mountain scene mainly in the right two thirds; left third is soft pale atmospheric clouds with low detail for dark website text. Gently brighten shadows. No text, interface, logos, people or structures.

Mist and blur can be adjusted in the hero. Stillness pauses animations and scroll movement. System reduced-motion preferences disable movement automatically.
