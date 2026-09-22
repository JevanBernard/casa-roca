# Casa Roca Canggu— Website

Astro + Tailwind CSS marketing site for Casa Roca, a 10-room boutique guest house on Jl. Batu Bolong, Canggu, Bali.

Live domain: [casarocacanggu.com](https://casarocacanggu.com)

## Tech Stack

- **Framework:** [Astro](https://astro.build) v4 (static output)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) v3
- **Content:** Astro Content Collections (`src/content/blog`) for blog posts
- **Sitemap:** `@astrojs/sitemap`
- **Deploy:** [Vercel](https://vercel.com)
- **DNS/SSL:** Cloudflare

## Project Structure

```
casa-roca/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro        ← HTML shell, meta tags, LodgingBusiness schema
│   ├── components/
│   │   ├── Header.astro            ← Sticky nav + mobile menu
│   │   ├── Footer.astro            ← Footer with links & contact
│   │   ├── HeroSection.astro       ← Full-height hero with CTA
│   │   ├── AboutBlock.astro        ← "What is Casa Roca" homepage section
│   │   ├── EditorialStory.astro    ← Long-form story section
│   │   ├── CorePillars.astro       ← Key selling points
│   │   ├── AmenitiesGrid.astro     ← Amenities overview
│   │   ├── RoomCard.astro          ← Reusable room card
│   │   ├── RoomSection.astro       ← Individual room section
│   │   ├── RoomsShowcase.astro     ← Room types on homepage
│   │   ├── RoomComparisonTable.astro ← Room comparison table (rooms page)
│   │   ├── BentoGallery.astro      ← Gallery grid
│   │   ├── NearbyCard.astro        ← Nearby place card (location page)
│   │   ├── StayPolicies.astro      ← Check-in/out & house rules
│   │   ├── FAQSection.astro        ← FAQ with schema markup
│   │   ├── LocationFAQ.astro       ← Location-specific FAQ
│   │   └── CTABanner.astro         ← Book now CTA section
│   ├── pages/
│   │   ├── index.astro             ← Homepage
│   │   ├── about.astro             ← About page
│   │   ├── rooms.astro             ← Room types page
│   │   ├── availability.astro      ← Booking/availability page
│   │   ├── location.astro          ← Location & map page
│   │   ├── gallery.astro           ← Photo gallery page
│   │   └── blog/
│   │       ├── index.astro         ← Blog list
│   │       └── [slug].astro        ← Blog post template
│   ├── content/
│   │   ├── config.ts               ← Blog collection schema
│   │   └── blog/                   ← Blog posts (Markdown)
│   └── styles/
│       └── global.css              ← Base styles
├── public/
│   ├── images/                     ← Static images (hero, rooms, logo, etc.)
│   ├── favicon.ico
│   ├── robots.txt                  ← Crawler config (AI crawlers allowed for GEO)
│   └── llms.txt                    ← AI answer-engine context file
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Sync Astro content collection types
npm run sync
```

## Adding a Blog Post

Add a new Markdown file under `src/content/blog/` with frontmatter matching the schema in `src/content/config.ts`:

```md
---
title: "Post Title"
description: "Short SEO description"
pubDate: 2025-01-01
image: "/images/example.jpg"
imageAlt: "Alt text"
category: "Neighborhood & Dining" # see config.ts for full list of allowed categories
readTime: "4 min read"
author: "Casa Roca Team"
featured: false
---

Post content here...
```

The post will automatically appear on `/blog` and be rendered at `/blog/[slug]`.

## Deployment (Vercel)

The project is connected to Vercel, which auto-detects the Astro framework preset:

- **Build command:** `npm run build`
- **Output directory:** `dist`

Push to the connected branch on GitHub and Vercel builds & deploys automatically, with preview deployments for other branches/PRs.

> Note: [netlify.toml](netlify.toml) is still present in the repo from an earlier Netlify setup but is unused now that the site deploys on Vercel — safe to delete unless you still keep a Netlify deployment around as a fallback.

## SEO & GEO (AI answer engines)

- Schema markup in `BaseLayout.astro`: `Organization`, `WebSite`, and `LodgingBusiness` on every page, plus a page-specific `schema` prop (e.g. `Article` on blog posts, local `FAQPage` on the location page)
- FAQ schema in `FAQSection.astro` / `LocationFAQ.astro`
- Unique title/description per page, plus `og:image` / Twitter Card (`summary_large_image`) meta — defaults to `/images/hero.jpg` site-wide, overridden per blog post via its frontmatter `image`
- `robots.txt` — allows AI crawlers (GPTBot, PerplexityBot, ClaudeBot, etc.) for GEO citation, blocks `CCBot`
- `llms.txt` — structured context file for AI answer engines
- Sitemap generated at build time via `@astrojs/sitemap`, registered in `astro.config.mjs` (emits `sitemap-index.xml` and `sitemap-0.xml` into `dist/`), referenced from `robots.txt`
  - Pinned to `3.2.1` in `package.json` — later `@astrojs/sitemap` releases (3.3.0+) target Astro 5+'s `astro:routes:resolved` integration hook, which doesn't exist in this project's Astro 4, and crash the build with `Cannot read properties of undefined (reading 'reduce')`. Don't `npm update` this package past 3.2.x without upgrading Astro first.
- `site` in `astro.config.mjs` is set to `https://casarocacanggu.com`, matching the canonical/schema URLs used in `BaseLayout.astro`, `robots.txt`, and `llms.txt`

### Manual setup still needed (not code)

- Submit `https://casarocacanggu.com/sitemap-index.xml` to Google Search Console and Bing Webmaster Tools
- Verify the domain in both

### Known content gap

- Blog frontmatter (`src/content/blog/*.md`) references images under `public/images/blog/`, but only `batu-bolong-surf.jpg` actually exists there — the other 5 posts' `image:` paths, and `blog/index.astro`'s `/images/blog/default.jpg` fallback, point at files that don't exist and will render broken images (including in the `og:image`/Twitter Card preview). Needs real photos added at those paths.
