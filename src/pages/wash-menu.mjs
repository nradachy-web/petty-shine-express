import { img, icons, esc, washCards } from "../layout.mjs";
import { site } from "../site.config.mjs";

const city = `${site.address.city}, ${site.address.state}`;
const low = site.washes[0].price;
const high = site.washes[site.washes.length - 1].price;

export default {
  path: "/wash-menu/",
  crumb: "Wash Menu",
  title: `Wash Menu and Prices, $${low} to $${high} Touchless Washes`,
  description: `${site.name} wash menu: ${site.washes.length} touchless automatic washes from $${low} to $${high} in ${city}. Every wash is brush free. Cash, cards, tap to pay.`,
  render(ctx) {
    const { base } = ctx;
    return `
<section class="page-hero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="${base}/">Home</a><span>/</span><span>Wash Menu</span></nav>
    <p class="eyebrow">Wash menu</p>
    <h1>Touchless washes from $${low}.</h1>
    <p class="lede">Four ways through the automatic, every one of them brush free. Pick a wash on the pay station screen, pull in and let it run.</p>
  </div>
</section>

<section class="section-tight">
  <div class="wrap">
    <h2 class="sr-only">The four touchless washes</h2>
    ${washCards(ctx)}
    <p class="menu-note">Prices as posted on the wash menu at the entrance. Self-serve bay and vacuum pricing is posted on site.</p>
  </div>
</section>

<section class="section plane-2 hairline">
  <div class="wrap split">
    <div class="split-media">
      ${img(ctx, "entrance", { alt: "Automatic wash entrance with the wash menu board on the wall", sizes: "(max-width: 860px) 100vw, 55vw" })}
    </div>
    <div class="reveal">
      <p class="eyebrow">Every wash</p>
      <h2>What touchless means on this menu.</h2>
      <p class="lede">The difference between the washes is how much the automatic does before the rinse, not whether anything touches your car. Nothing does, on any tier.</p>
      <ul class="checks">
        <li>${icons.check}<div><strong>Brush free at every price</strong><span>The $${low} wash is as safe for your paint as the $${high} wash.</span></div></li>
        <li>${icons.check}<div><strong>More on the higher tiers</strong><span>Step up for deeper cleaning and a gloss finish that beads water.</span></div></li>
        <li>${icons.check}<div><strong>Coated, filmed and wrapped cars welcome</strong><span>Touchless is what a ceramic coating or paint protection film wants.</span></div></li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">How it works</p>
      <h2>Four steps, no waiting.</h2>
    </div>
    <ol class="steps">
      <li class="reveal" style="--i:0"><h3>Pull up to the pay station</h3><p>It is at the entrance of the automatic, on the driver's side.</p></li>
      <li class="reveal" style="--i:1"><h3>Pick a wash and pay</h3><p>${site.payment.map((p) => p.label).join(", ")}. The station makes change.</p></li>
      <li class="reveal" style="--i:2"><h3>Drive in and stop</h3><p>Follow the signal, put it in park, keep the windows up.</p></li>
      <li class="reveal" style="--i:3"><h3>Drive out clean</h3><p>The dryer finishes and the door opens. Vacuums are right on the lot.</p></li>
    </ol>
  </div>
</section>

<section class="section cta-band plane-blue">
  <div class="wrap">
    <div>
      <h2>Rather do it yourself?</h2>
      <p class="lede">${site.facts.bays} self-serve bays and ${site.facts.vacuums} vacuums are on the same lot.</p>
    </div>
    <div class="btn-row" style="margin:0"><a class="btn btn-white btn-lg" href="${base}/self-serve/">Self-serve bays${icons.arrow}</a></div>
  </div>
</section>`;
  },
};
