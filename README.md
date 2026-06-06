# Orvnix

Marketing site for **Orvnix** — a Kolkata-based studio for software, AI/LLM, robotics and drone systems.

Built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

- `src/app` — routes (home, legal pages, `services/[slug]`), plus generated `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `opengraph-image`, `twitter-image`.
- `src/components` — UI sections (Hero, Services, Work, Workspace, Pricing, CTA, …) and helpers (Reveal, Spotlight, Counter, JsonLd).
- `src/lib/site.ts` — **single source of truth** for contact details, address, geo coordinates, socials, services and FAQs.
- `src/lib/services-content.ts` — content for the per-service pages.
- `public/images` — self-hosted imagery (Pexels, free license).

## What's already done for SEO / AEO

- **Metadata**: titles, descriptions, keywords, canonical URLs, OpenGraph + Twitter cards, theme colour.
- **Structured data (JSON-LD)**: Organization / ProfessionalService / LocalBusiness, WebSite, Service catalog, FAQPage, and per-service Service + BreadcrumbList.
- **Local (geo) SEO**: address, `GeoCoordinates`, `areaServed`, and `geo.*` meta tags.
- **Crawlability**: `sitemap.xml`, `robots.txt` (explicitly welcomes AI crawlers — GPTBot, ClaudeBot, PerplexityBot, Google-Extended, …), `llms.txt`, web manifest, brand icon.
- **Per-service pages** at `/services/<slug>` — more indexable surface targeting specific terms.
- **Performance**: static generation, `next/image`, optimised fonts.
- **Generated share image** via `next/og`.

## Go-live checklist (do these after deploying — they decide real ranking)

1. **Set your domain.** Edit `url` in `src/lib/site.ts` to your live URL so canonicals, sitemap, OG and JSON-LD point correctly.
2. **Update placeholders** in `src/lib/site.ts`: real social profile URLs (`socials`), exact geo coordinates, phone, and address details.
3. **Google Search Console** — verify the domain, submit `https://<domain>/sitemap.xml`.
4. **Bing Webmaster Tools** — verify and submit the sitemap (also feeds ChatGPT/Copilot search).
5. **Google Business Profile** — create a free listing at the Kolkata address. This is the biggest lever for local "near me" ranking.
6. **Backlinks & citations** — get listed in directories (Clutch, GoodFirms, LinkedIn, local business listings) and earn links from real sites. Off-site authority is what actually moves rankings.
7. **Real reviews** — collect genuine client reviews on Google. Do **not** add fake review/rating schema — Google penalises it.
8. **Analytics** — add GA4 or a privacy-friendly tool (Plausible) to measure and improve.

> No tool or code can *guarantee* a #1 ranking. This codebase makes the site technically excellent and fully discoverable; ranking then depends on domain authority, backlinks, reviews and competition over time.

## Deploy

Easiest path is **Vercel**: import the GitHub repo, accept the auto-detected Next.js settings, and deploy. Add your custom domain in the Vercel dashboard.
