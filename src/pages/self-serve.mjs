import { img, icons, esc } from "../layout.mjs";
import { site } from "../site.config.mjs";

const city = `${site.address.city}, ${site.address.state}`;

export default {
  path: "/self-serve/",
  crumb: "Self-Serve & Vacuums",
  title: `Self-Serve Car Wash Bays and Vacuums in ${city}`,
  description: `${site.facts.bays} self-serve wash bays and ${site.facts.vacuums} vacuum stations at ${site.name} in ${city}. Room for trucks, trailers and boats. Quarters or card at every bay.`,
  render(ctx) {
    const { base } = ctx;
    return `
<section class="page-hero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="${base}/">Home</a><span>/</span><span>Self-Serve &amp; Vacuums</span></nav>
    <p class="eyebrow">Self-serve bays and vacuums</p>
    <h1>${site.facts.bays} bays. ${site.facts.vacuums} vacuums. Your pace.</h1>
    <p class="lede">Grab the wand and wash it your way in one of ${site.facts.bays} open-ended bays, then finish the inside at one of ${site.facts.vacuums} vacuum stations on the same lot.</p>
  </div>
</section>

<section class="section-tight">
  <div class="wrap">
    <div class="split-media wide reveal">
      ${img(ctx, "bays", { alt: "Row of self-serve bays with blue pressure wands, pay boxes and the blue roof", sizes: "100vw", width: 1600 })}
      <span class="caption">${site.facts.bays} self-serve bays under the blue roof</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">Why self-serve</p>
      <h2>For the jobs the automatic should not do.</h2>
    </div>
    <div class="features">
      <div class="feature reveal" style="--i:0"><div class="feature-icon">${icons.wand}</div><div><h3>Caked-on mud and clay</h3><p>Point the pressure where it is needed and knock off what a gentle wash will not.</p></div></div>
      <div class="feature reveal" style="--i:1"><div class="feature-icon">${icons.ruler}</div><div><h3>Over ${esc(site.facts.clearance)} tall</h3><p>Lifted trucks, vans with racks, and anything above the automatic's clearance.</p></div></div>
      <div class="feature reveal" style="--i:2"><div class="feature-icon">${icons.wand}</div><div><h3>Trailers, boats and equipment</h3><p>Open-ended bays with room to pull through.</p></div></div>
      <div class="feature reveal" style="--i:3"><div class="feature-icon">${icons.bolt}</div><div><h3>A quick rinse</h3><p>Pollen, bird droppings, or a splash of salt. In and out in minutes.</p></div></div>
    </div>
  </div>
</section>

<section class="section plane-2 hairline">
  <div class="wrap split">
    <div class="split-media tall">
      ${img(ctx, "pay-station", { alt: "Petty Shine Express pay station with the Clean. Shine. Protect. slogan", sizes: "(max-width: 860px) 100vw, 45vw" })}
    </div>
    <div class="reveal">
      <p class="eyebrow">Vacuums and payment</p>
      <h2>Finish the inside, pay how you like.</h2>
      <p class="lede">${site.facts.vacuums} vacuum stations sit right on the lot, so the interior gets done the same trip. Bays and vacuums take quarters and cards.</p>
      <ul class="checks">
        ${site.payment.map((p) => `<li>${icons.check}<div><strong>${esc(p.label)}</strong><span>${esc(p.detail)}</span></div></li>`).join("")}
      </ul>
    </div>
  </div>
</section>

<section class="section cta-band plane-blue">
  <div class="wrap">
    <div>
      <h2>Want the wash done for you?</h2>
      <p class="lede">The touchless automatic runs from $${site.washes[0].price} and never touches your paint.</p>
    </div>
    <div class="btn-row" style="margin:0"><a class="btn btn-white btn-lg" href="${base}/touchless-automatic/">Touchless automatic${icons.arrow}</a></div>
  </div>
</section>`;
  },
};
