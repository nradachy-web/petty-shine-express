/* Shared layout: head, header, footer, helpers. Pages return body HTML. */

export const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* Intrinsic sizes of the rendered WebP sets (largest width and its height). */
const IMAGES = {
  "hero-sign": { widths: [480, 800, 1200, 1600, 2400], w: 2400, h: 1404 },
  "hero-sign-tall": { widths: [480, 700, 1000], w: 1000, h: 750 },
  building: { widths: [640, 1000, 1400, 2000], w: 2000, h: 1080 },
  bays: { widths: [640, 1000, 1600], w: 1600, h: 498 },
  entrance: { widths: [640, 1000, 1400], w: 1400, h: 893 },
  "pay-station": { widths: [480, 800, 1200], w: 1200, h: 2000 },
  "pay-station-close": { widths: [480, 800, 1200], w: 1200, h: 1294 },
};

export function img(ctx, name, { alt, sizes = "100vw", cls = "", priority = false, width } = {}) {
  const meta = IMAGES[name];
  if (!meta) throw new Error(`unknown image ${name}`);
  const srcset = meta.widths.map((w) => `${ctx.base}/assets/img/${name}-${w}.webp ${w}w`).join(", ");
  const fallback = width || meta.widths[Math.min(meta.widths.length - 1, 2)];
  return `<img src="${ctx.base}/assets/img/${name}-${fallback}.webp" srcset="${srcset}" sizes="${sizes}" width="${meta.w}" height="${meta.h}" alt="${esc(alt)}"${cls ? ` class="${cls}"` : ""}${
    priority ? ' fetchpriority="high" decoding="async"' : ' loading="lazy" decoding="async"'
  }>`;
}

export const icons = {
  droplet: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5s6.5 7.2 6.5 12a6.5 6.5 0 0 1-13 0c0-4.8 6.5-12 6.5-12z"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>',
  wand: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21l9.5-9.5M14 4l2 2m2-4 2 2M16 8l4-4M12 12l2 2m2.5-6.5 2 2M9 3v2M5 7H3M20 12h-2M12 20v2"/></svg>',
  vacuum: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h9a4 4 0 0 0 0-8H9V6a3 3 0 0 1 6 0v1M4 20v-4h6v4M4 20H2"/></svg>',
  card: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19M6 15h4"/></svg>',
  ruler: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4v16M20 4v16M4 12h16M8 9v3M12 8v4M16 9v3"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2z"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5 4 5.5v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10v-6l-8-3z"/><path d="M9 12l2 2 4-4"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
};

export function money(n) {
  return `$${n}`;
}

export function addressLine(site) {
  const a = site.address;
  return a.street ? `${a.street}, ${a.city}, ${a.state} ${a.zip}`.trim() : `${a.city}, ${a.stateName}`;
}

function primaryCta(ctx, cls = "btn btn-primary") {
  const { site } = ctx;
  if (site.directionsUrl) {
    return `<a class="${cls}" href="${esc(site.directionsUrl)}" target="_blank" rel="noopener">Get directions${icons.arrow}</a>`;
  }
  return `<a class="${cls}" href="tel:${site.phoneTel}" data-phone>${icons.phone}Call ${esc(site.phoneDisplay)}</a>`;
}

export function faqList(items, { open = 0 } = {}) {
  return `<div class="faq">${items
    .map(
      (f, i) => `<details class="faq-item"${i < open ? " open" : ""}>
  <summary><span>${esc(f.q)}</span><i class="faq-plus" aria-hidden="true"></i></summary>
  <div class="faq-body"><p>${esc(f.a)}</p></div>
</details>`,
    )
    .join("\n")}</div>`;
}

export function washCards(ctx, { compact = false } = {}) {
  const { site } = ctx;
  return `<div class="menu-grid${compact ? " menu-grid-compact" : ""}">${site.washes
    .map(
      (w, i) => `<article class="menu-card reveal${w.featured ? " is-featured" : ""}" style="--i:${i}">
  ${w.featured ? '<span class="pill pill-blue">Best shine</span>' : ""}
  <h3 class="menu-name">${esc(w.name)}</h3>
  <p class="menu-price"><span class="menu-dollar">$</span>${w.price}</p>
  <p class="menu-blurb">${esc(w.blurb)}</p>
  <p class="menu-foot">${icons.check}Touchless. Nothing touches your paint.</p>
</article>`,
    )
    .join("\n")}</div>`;
}

export function statStrip(ctx) {
  const f = ctx.site.facts;
  const items = [
    [f.automatics, "touchless automatic"],
    [f.bays, "self-serve bays"],
    [f.vacuums, "vacuum stations"],
    [f.clearance, "entrance clearance"],
  ];
  return `<ul class="stats" aria-label="At a glance">${items
    .map(([n, l], i) => `<li style="--i:${i}"><strong>${esc(n)}</strong><span>${esc(l)}</span></li>`)
    .join("")}</ul>`;
}

function jsonLd(page, ctx) {
  const { site, siteUrl, base } = ctx;
  const a = site.address;
  const address = { "@type": "PostalAddress", addressLocality: a.city, addressRegion: a.state, addressCountry: "US" };
  if (a.street) address.streetAddress = a.street;
  if (a.zip) address.postalCode = a.zip;
  const business = {
    "@context": "https://schema.org",
    "@type": ["AutoWash", "LocalBusiness"],
    "@id": `${siteUrl}/#business`,
    name: site.name,
    url: `${siteUrl}/`,
    telephone: site.phoneTel,
    image: `${siteUrl}/assets/img/og.jpg`,
    logo: `${siteUrl}/assets/img/logo-t-640.png`,
    slogan: site.tagline,
    description: `Touchless automatic car wash with ${site.facts.bays} self-serve bays and ${site.facts.vacuums} vacuums in ${a.city}, ${a.stateName}. Cash, cards, tap to pay.`,
    address,
    paymentAccepted: "Cash, Credit Card, Debit Card, Apple Pay, Google Pay",
    priceRange: `$${site.washes[0].price} to $${site.washes[site.washes.length - 1].price}`,
    areaServed: site.nearby.map((n) => ({ "@type": "City", name: n })),
    makesOffer: site.washes.map((w) => ({
      "@type": "Offer",
      name: `${w.name} touchless wash`,
      price: String(w.price),
      priceCurrency: "USD",
      url: `${siteUrl}/wash-menu/#${w.slug}`,
    })),
    founder: { "@type": "Person", name: site.owner },
    parentOrganization: { "@type": "Organization", name: site.parentBrand.name, url: site.parentBrand.url },
  };
  if (site.geo) business.geo = { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng };
  if (site.hours.length) {
    business.openingHours = site.hours.map((h) => h.schema).filter(Boolean);
  }
  const blocks = [business];
  if (page.path !== "/") {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: page.crumb || page.title, item: `${siteUrl}${page.path}` },
      ],
    });
  }
  if (page.faq) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((f) => ({
        "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  return blocks.map((b) => `<script type="application/ld+json">${JSON.stringify(b)}</script>`).join("\n");
}

function header(page, ctx) {
  const { site, nav, base } = ctx;
  return `<header class="site-header${page.hero ? " over-hero" : ""}" id="top">
  <div class="wrap header-row">
    <a class="brand" href="${base}/" aria-label="${esc(site.name)} home">
      <img src="${base}/assets/img/logo-t-640.png" srcset="${base}/assets/img/logo-t-360.png 360w, ${base}/assets/img/logo-t-640.png 640w, ${base}/assets/img/logo-t-1200.png 1200w" sizes="(max-width: 640px) 150px, 200px" width="640" height="232" alt="${esc(site.name)}" fetchpriority="high" decoding="async">
    </a>
    <nav class="site-nav" id="site-nav" aria-label="Primary">
      <ul>${nav.map((n) => `<li><a href="${base}${n.href}"${page.path === n.href ? ' aria-current="page"' : ""}>${esc(n.label)}</a></li>`).join("")}</ul>
      <div class="nav-cta">${primaryCta(ctx, "btn btn-primary btn-sm")}</div>
    </nav>
    <a class="header-phone" href="tel:${site.phoneTel}" data-phone aria-label="Call ${esc(site.phoneDisplay)}">${icons.phone}</a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>
</header>`;
}

function footer(ctx) {
  const { site, nav, base } = ctx;
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      <img src="${base}/assets/img/logo-t-360.png" width="360" height="130" alt="${esc(site.name)}" loading="lazy" decoding="async">
      <p class="footer-tag">${esc(site.tagline)}</p>
      <p class="footer-meta">Touchless automatic car wash, ${site.facts.bays} self-serve bays and ${site.facts.vacuums} vacuums in ${esc(site.address.city)}, ${esc(site.address.stateName)}.</p>
      <p class="footer-meta">From the owner of <a href="${esc(site.parentBrand.url)}" rel="noopener">${esc(site.parentBrand.name)}</a>.</p>
    </div>
    <div>
      <h2 class="footer-h">Explore</h2>
      <ul class="footer-links">${nav.map((n) => `<li><a href="${base}${n.href}">${esc(n.label)}</a></li>`).join("")}<li><a href="${base}/about/">About</a></li></ul>
    </div>
    <div>
      <h2 class="footer-h">Visit</h2>
      <ul class="footer-links">
        <li>${esc(addressLine(site))}</li>
        <li><a href="tel:${site.phoneTel}" data-phone>${esc(site.phoneDisplay)}</a></li>
        ${site.status === "open" && site.hours.length ? site.hours.map((h) => `<li>${esc(h.days)}: ${esc(h.time)}</li>`).join("") : `<li>Opening soon</li>`}
        ${site.directionsUrl ? `<li><a href="${esc(site.directionsUrl)}" target="_blank" rel="noopener">Get directions</a></li>` : ""}
      </ul>
    </div>
  </div>
  <div class="wrap footer-bottom">
    <p>&copy; ${year} ${esc(site.legalName)}. All rights reserved. <a href="${base}/privacy/">Privacy</a></p>
    <p><a href="${esc(site.agency.url)}" rel="noopener">Website &amp; marketing by ${esc(site.agency.name)}</a></p>
  </div>
</footer>`;
}

export function renderPage(page, ctx) {
  const { site, base, siteUrl, indexable, googleTagId } = ctx;
  const title = page.path === "/" ? page.title : `${page.title} | ${site.name}`;
  const canonical = `${siteUrl}${page.path === "/404/" ? "/404.html" : page.path}`;
  const body = page.render(ctx);
  const gtag = googleTagId
    ? `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${esc(googleTagId)}');
(function(){var l=false;function load(){if(l)return;l=true;var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=${esc(googleTagId)}';document.head.appendChild(s)}
['pointerdown','keydown','scroll','touchstart'].forEach(function(e){addEventListener(e,load,{once:true,passive:true})});setTimeout(load,4000)})();</script>`
    : "";
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${canonical}">
${indexable && !page.noindex ? "" : '<meta name="robots" content="noindex, nofollow">'}
<meta name="theme-color" content="#07080a">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${siteUrl}/assets/img/og.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${base}/assets/img/icon-192.png" type="image/png">
<link rel="apple-touch-icon" href="${base}/assets/img/apple-touch-icon.png">
<link rel="manifest" href="${base}/site.webmanifest">
<link rel="preload" href="${base}/assets/fonts/inter-tight-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${base}/assets/fonts/inter-tight-italic.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${base}/assets/css/site.css">
${jsonLd(page, ctx)}
${gtag}
</head>
<body class="${page.hero ? "has-hero" : "page-inner"}">
<a class="skip" href="#main">Skip to content</a>
${header(page, ctx)}
<main id="main">
${body}
</main>
${footer(ctx)}
<script src="${base}/assets/js/site.js" defer></script>
</body>
</html>
`;
}
