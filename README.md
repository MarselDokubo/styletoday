# Style Today Magazine — Next.js Frontend

A production-oriented editorial frontend for **Style Today Magazine**, built in Next.js with a headless WordPress migration path already wired in.

The visual direction uses the qualities of a premium fashion trade publication — strong serif headlines, rigid editorial grids, black rules, disciplined whitespace, ranked sidebars and restrained utility navigation — while keeping a distinct **Style Today** identity through its red accent, custom wordmark and Nigerian editorial content.

## Included

- Homepage with lead story, editor's lens, most-read rail, business section, culture feature, fashion/style grid, visual journal, insight feature and newsletter block.
- Full article pages for the supplied editorial content.
- Category archive pages.
- About / editorial mission page.
- Search page.
- Responsive desktop, tablet and mobile layouts.
- Five scalable logo variants:
  - `public/logo/style-today-black.svg`
  - `public/logo/style-today-black-red.svg`
  - `public/logo/style-today-red.svg`
  - `public/logo/style-today-white.svg`
  - `public/logo/style-today-monogram.svg`
- Optimised WebP versions of all supplied photographs.
- WordPress REST API adapter with local-content fallback.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## WordPress integration

Style Today is prepared for a **headless WordPress** setup. The recommended CMS address is:

```text
https://cms.styletodaymagazine.com
```

The public magazine remains on Vercel at `styletodaymagazine.com`, while editors sign in to WordPress separately to create and publish stories.

Add the CMS URL to Vercel and to `.env.local` when developing locally:

```env
WORDPRESS_API_URL=https://cms.styletodaymagazine.com
NEXT_PUBLIC_SITE_URL=https://styletodaymagazine.com
```

The frontend reads published WordPress posts through the REST API. It supports:

- **Title** → article headline
- **Excerpt** → dek / standfirst
- **Content** → paragraphs, H2/H3 headings, pull quotes and inline images in editorial order
- **Featured image** → article hero / card image
- **Author** → byline
- **Category** → site section
- **Slug** → frontend article URL
- **Sticky post** → homepage lead story

During migration, WordPress posts are merged with the existing local archive. If the same slug exists in both places, the WordPress version wins. This means new content can be published from the CMS immediately without removing the existing archive.

Published content is refreshed by the frontend approximately once per minute. If WordPress is unavailable or the environment variable is absent, the local editorial archive remains available.

For a later phase, custom fields can be added for photographer credits, custom kickers, homepage flags, sponsored-content disclosure and richer SEO controls.

## Deployment

The project is Vercel-ready. After the frontend is approved, connect the GitHub repository to Vercel and add the WordPress environment variables in Vercel Project Settings → Environment Variables.

## Editorial note

Dates that were supplied without a year were placed in 2026 so the local prototype can sort content consistently. Confirm those dates before publishing to production.
