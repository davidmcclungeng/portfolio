# David McClung – Portfolio

Live at **[davidmcclung.work](https://davidmcclung.work)**

Personal portfolio for David McClung, an MSc AI in Business student at Queen's University Belfast looking for graduate software developer and AI / automation roles. The site covers the projects I have worked on (Bat Analytics Pro at Tetra Tech, Ledger, and the Premier Sound Solutions website), my experience and education, and links to my CV.

## Stack

- [Next.js](https://nextjs.org) (App Router) with React and TypeScript, built as a fully static export
- [Tailwind CSS](https://tailwindcss.com) v4 with CSS variables for the light and dark themes
- Barlow and Barlow Condensed via `next/font`
- Hosted on [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) static assets, deployed by Workers Builds on every push to `main`

## Project structure

```
src/
  app/            layout, page, global styles, icons and link-preview image
  components/     page sections (Hero, Plate, Skills, Work, Background, Contact, Nav)
  lib/content.ts  all site copy: profile, build record, skills, projects, experience, education
public/           CV (PDF) and project screenshots
wrangler.jsonc    Cloudflare Worker config and custom domains
```

Most text changes only need `src/lib/content.ts`.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static export to out/
```

## Deploy

Pushing to `main` triggers Cloudflare Workers Builds, which runs `npm run build` and `npx wrangler deploy`. The `routes` in `wrangler.jsonc` attach `davidmcclung.work` and `www.davidmcclung.work` as custom domains.

## Notes

Project screenshots contain no real client, survey or financial data: they are cropped to non-sensitive views or taken from demo data with figures blurred.
