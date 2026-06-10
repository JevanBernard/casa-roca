# Casa Roca — Website

Astro + Tailwind CSS website for Casa Roca guest house, Canggu, Bali.

## Tech Stack

- **Framework:** [Astro](https://astro.build) v4
- **Styling:** [Tailwind CSS](https://tailwindcss.com) v3
- **Deploy:** [Netlify](https://netlify.com) (free tier)
- **DNS/SSL:** Cloudflare

## Project Structure

```
casa-roca/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro       ← HTML shell, meta tags, schema
│   ├── components/
│   │   ├── Header.astro           ← Sticky nav + mobile menu
│   │   ├── Footer.astro           ← Footer with links & contact
│   │   ├── HeroSection.astro      ← Full-height hero with CTA
│   │   ├── AboutBlock.astro       ← What is Casa Roca section
│   │   ├── WhyCasaRoca.astro      ← 3 pillars section
│   │   ├── RoomCard.astro         ← Reusable room card
│   │   ├── RoomTypesOverview.astro← Room types on homepage
│   │   ├── FAQAccordion.astro     ← FAQ with schema markup
│   │   └── CTABanner.astro        ← Book now CTA section
│   ├── pages/
│   │   └── index.astro            ← Homepage
│   └── styles/
│       └── global.css             ← Base styles
├── public/
│   ├── robots.txt                 ← AI crawler config
│   └── llms.txt                   ← AI engine context file
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
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
```

## Deployment (Netlify)

1. Push this repo to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

## Pages to Build Next

- [ ] `/rooms` — Room detail page
- [ ] `/availability` — Booking engine embed
- [ ] `/about` — About page
- [ ] `/location` — Location & map page
- [ ] `/contact` — Contact form
- [ ] `/blog` — Blog list
- [ ] `/blog/[slug]` — Blog post template

## SEO Checklist

- [x] Schema markup (LodgingBusiness) in BaseLayout
- [x] FAQ schema in FAQAccordion component
- [x] Unique title/description per page
- [x] robots.txt with AI crawlers allowed
- [x] llms.txt for AI answer engines
- [ ] Google Search Console verification
- [ ] Sitemap submitted to GSC
- [ ] Google Business Profile linked
