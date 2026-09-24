# Petty Shine Express

Self service and touchless automatic car wash owned by Judson Petty. Static site,
zero dependencies, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

- Facts live in `src/site.config.mjs` only. Pages never type a price, count,
  phone or address inline.
- `node build.mjs` renders `src/pages/*.mjs` through `src/layout.mjs` into `dist/`.
- `node scripts/check.mjs` fails on em or en dashes, leaked placeholders, dead
  internal links and missing images.
- Photos are pre-rendered WebP sets in `assets/img` (sources: Judson's photos,
  2026-09-23). Fonts are self-hosted Inter Tight.

Preview: repo variable `BASE_PATH=/petty-shine-express`, noindex.
Production: unset `BASE_PATH`, set `SITE_URL`, `INDEXABLE=1`, `CUSTOM_DOMAIN`.
Optional: `GOOGLE_TAG_ID` (AW- tag, loaded on first interaction).
