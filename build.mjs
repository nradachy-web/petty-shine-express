/**
 * Zero-dependency static build.
 *   node build.mjs            -> dist/
 * Env: BASE_PATH (e.g. /petty-shine-express), SITE_URL, INDEXABLE=1,
 *      GOOGLE_TAG_ID, WEB3FORMS_KEY.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { site, nav, faqs } from "./src/site.config.mjs";
import { renderPage } from "./src/layout.mjs";

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, "dist");
const base = (process.env.BASE_PATH || "").replace(/\/$/, "");
const siteUrl = (process.env.SITE_URL || site.defaultUrl).replace(/\/$/, "");
const indexable = process.env.INDEXABLE === "1";

const ctx = {
  site, nav, faqs, base, siteUrl, indexable,
  googleTagId: process.env.GOOGLE_TAG_ID || "",
  web3formsKey: process.env.WEB3FORMS_KEY || "",
  buildDate: new Date().toISOString().slice(0, 10),
};

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.cpSync(path.join(root, "assets"), path.join(dist, "assets"), { recursive: true });

const pagesDir = path.join(root, "src", "pages");
const pages = [];
for (const file of fs.readdirSync(pagesDir).sort()) {
  if (!file.endsWith(".mjs")) continue;
  const mod = await import(pathToFileURL(path.join(pagesDir, file)).href);
  pages.push(mod.default);
}

const written = [];
for (const page of pages) {
  const html = renderPage(page, ctx);
  const outPath = page.path === "/404/"
    ? path.join(dist, "404.html")
    : path.join(dist, page.path, "index.html");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  if (page.path !== "/404/" && !page.noindex) written.push(page);
}

const today = ctx.buildDate;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${written
  .map((p) => `  <url><loc>${siteUrl}${p.path}</loc><lastmod>${today}</lastmod><priority>${p.path === "/" ? "1.0" : "0.8"}</priority></url>`)
  .join("\n")}\n</urlset>\n`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
fs.writeFileSync(
  path.join(dist, "robots.txt"),
  indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
    : `User-agent: *\nDisallow: /\n`,
);
fs.writeFileSync(path.join(dist, ".nojekyll"), "");
fs.writeFileSync(
  path.join(dist, "site.webmanifest"),
  JSON.stringify({
    name: site.name, short_name: "Petty Shine", start_url: `${base}/`, display: "standalone",
    background_color: "#07080a", theme_color: "#0086cb",
    icons: [
      { src: `${base}/assets/img/icon-192.png`, sizes: "192x192", type: "image/png" },
      { src: `${base}/assets/img/icon-512.png`, sizes: "512x512", type: "image/png" },
    ],
  }, null, 2),
);

console.log(`built ${pages.length} pages -> dist (base "${base || "/"}", ${indexable ? "indexable" : "noindex"}, ${siteUrl})`);
