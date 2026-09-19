## Project Structure

- `app/assets/icons/` — Reusable SVG icons implemented as React components.
- `app/components/public-replies/` — UI components for the Public Replies feature. Each component has its own CSS file.
- `app/routes/` — React Router route components.
- `app/root.tsx` — Root application layout and global document configuration.
- `app/routes.ts` — React Router route configuration.
- `app/app.css` — Global application styles.
- `app/home.css` — Page-level styles for the Public Replies screen.
- `workers/app.ts` — Cloudflare Worker entry point.
- `public/` — Static public assets.
- `wrangler.jsonc` — Cloudflare Worker configuration.