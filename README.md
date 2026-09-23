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

When the WordPress CMS is ready, add the WordPress base URL to `.env.local`:

```env
WORDPRESS_API_URL=https://cms.yoursite.com
NEXT_PUBLIC_SITE_URL=https://www.yoursite.com
```

The frontend already calls:

```text
/wp-json/wp/v2/posts?_embed=1&per_page=100
```

If WordPress is unavailable or the environment variable is absent, the website automatically falls back to `data/articles.ts`.

### Recommended WordPress content model

Use regular WordPress Posts initially:

- **Title** → article headline
- **Excerpt** → dek / standfirst
- **Content** → article body
- **Featured image** → hero image
- **Author** → byline
- **Category** → Fashion / Business / Culture / Runway / Style / News
- **Slug** → frontend article URL

For a second phase, add custom fields (via ACF or native custom fields) for:
- kicker
- photographer
- credits
- pull quote
- alternate / inline image
- homepage feature status
- sponsored-content disclosure
- SEO title / description

## Deployment

The project is Vercel-ready. After the frontend is approved, connect the GitHub repository to Vercel and add the WordPress environment variables in Vercel Project Settings → Environment Variables.

## Editorial note

Dates that were supplied without a year were placed in 2026 so the local prototype can sort content consistently. Confirm those dates before publishing to production.
