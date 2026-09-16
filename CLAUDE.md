@AGENTS.md

# Portfolio site

One-page personal portfolio for David McClung. Live at davidmcclung.work.

## The two constraints that catch people out

**This is a static export.** `next.config.ts` sets `output: "export"`, so there is
no server in production. Anything that needs a request at runtime is unavailable:
no Server Actions, no route handlers reading the request, no middleware, no ISR,
no `next/image` optimizer. Metadata routes (`robots.ts`, `sitemap.ts`) are Route
Handlers and need `export const dynamic = "force-static"` or the build fails.

Watch for code that *looks* static but is not. `new Date()` in a Server Component
runs on the build machine and freezes into the HTML — that is a bug, not a
feature. The footer used to render the copyright year that way.

**Pushing to `main` deploys to production.** Cloudflare Workers Builds runs
`npm run build` and `npx wrangler deploy` on every push to `main`. There is no
staging environment and no approval step. Work on a branch, open a PR, and let
the human decide when it ships.

## Where things live

- `src/lib/content.ts` — every word of copy on the site. Components take data and
  render it; they do not contain prose. Most text changes only touch this file.
- `src/components/` — one component per page section.
- `src/app/globals.css` — design tokens and the hand-written CSS. Read this
  before adding styles; a lot of the visual language lives here, not in classes.
- `public/_headers` — security headers applied by Cloudflare at the edge.

## Design system

Colours are CSS custom properties, defined once in `:root` and overridden in a
single `prefers-color-scheme: dark` block. Derived values use `color-mix()` so the
two themes stay in step — `--muted` is a percentage of `--foreground`, not a
separately chosen hex. Tailwind utilities reach them through `@theme inline`.

**If you change a colour, check the contrast.** Text needs 4.5:1. A border that is
the only thing identifying a control needs 3:1 — that is why `--border-strong`
exists separately from `--border`, which is decorative and sits at 1.9:1.

The visual motif is drafting/blueprint: registration corner marks (`<Corners />`),
a faint grid on the body, condensed uppercase headings that end in an accent full
stop via `.section-title::after`.

## Scroll reveal

Content server-renders **visible**. An inline script in `layout.tsx` adds `.js` to
`<html>` before first paint, and only then does CSS hide `.reveal` elements until
an `IntersectionObserver` reveals them. This keeps the page readable with
JavaScript off.

Do not wrap above-the-fold content in `<Reveal>`. It has nothing to reveal and it
makes the LCP element wait for hydration.

## Images

`images.unoptimized` is on, so `next/image` emits no `srcset` and a `sizes` prop
does nothing. Ship images at roughly 2x their rendered CSS width, in WebP.

## Before you say it works

```bash
npm run lint        # eslint, must be clean including warnings
npx tsc --noEmit    # typecheck
npm run build       # must succeed; catches static-export violations
npm test            # playwright
```

`npm start` serves the built output. `next start` does not work with a static
export and will error.
