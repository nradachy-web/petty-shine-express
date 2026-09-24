/* Post-build audit: forbidden strings, dead internal links, missing images. */
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const base = (process.env.BASE_PATH || "").replace(/\/$/, "");
const forbidden = [
  ["—", "em dash"],
  ["–", "en dash"],
  ["Richard Petty", "racing claim stays off the site until Judson words it"],
  ["Petty's Garage", "never name the neighbor"],
  ["allowed to", "rejected framing"],
  ["TODO", "placeholder leaked"],
  ["CONFIRM", "placeholder leaked"],
];
let problems = 0;
const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".html")) files.push(p);
  }
})(dist);

for (const f of files) {
  const html = fs.readFileSync(f, "utf8");
  const rel = path.relative(dist, f);
  for (const [needle, why] of forbidden) {
    if (html.includes(needle)) {
      console.error(`FORBIDDEN in ${rel}: ${JSON.stringify(needle)} (${why})`);
      problems++;
    }
  }
  const attrs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  for (const url of attrs) {
    if (/^(https?:|mailto:|tel:|#|data:)/.test(url)) continue;
    let p = url.split("#")[0].split("?")[0];
    if (base && p.startsWith(base)) p = p.slice(base.length);
    if (!p.startsWith("/")) continue;
    const target = p.endsWith("/") ? path.join(dist, p, "index.html") : path.join(dist, p);
    if (!fs.existsSync(target)) {
      console.error(`DEAD LINK in ${rel}: ${url}`);
      problems++;
    }
  }
  const srcsets = [...html.matchAll(/srcset="([^"]+)"/g)].flatMap((m) => m[1].split(",").map((s) => s.trim().split(/\s+/)[0]));
  for (let u of srcsets) {
    if (base && u.startsWith(base)) u = u.slice(base.length);
    if (!fs.existsSync(path.join(dist, u))) {
      console.error(`MISSING IMAGE in ${rel}: ${u}`);
      problems++;
    }
  }
}
if (problems) {
  console.error(`${problems} problem(s)`);
  process.exit(1);
}
console.log(`check ok: ${files.length} pages clean`);
