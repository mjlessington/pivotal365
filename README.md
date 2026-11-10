# Pivotal365

Marketing site for Pivotal365 and the Quiet Power Lifestyle Planner by Carlton Chapman.

Built with Next.js (App Router) and TypeScript, deployed on Vercel. Animation uses `motion`, smooth scrolling uses `lenis`.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

## Where things live

- `lib/content.ts` holds the copy and data: stages, philosophy, offerings, pricing, Amazon link, structured data.
- `app/page.tsx` lays out the sections. `app/globals.css` holds the design tokens and styles.
- `components/` has the interactive pieces: hero dial, pivot path, 3D book, join form, nav, starfield.
- `public/` holds the images.

## Email sign-ups

The Join form posts to `/api/subscribe`. That route forwards `{ email, firstName, source }` as JSON to the URL in the `SUBSCRIBE_WEBHOOK_URL` environment variable. You can point it at a Zapier/Make webhook, a Formspree endpoint, or a small adapter for your email platform. Until the variable is set, the form tells visitors that sign-ups open soon and stores nothing.

## Deploy

Import the repo in Vercel (framework preset: Next.js). There is nothing else to configure apart from `SUBSCRIBE_WEBHOOK_URL`.
