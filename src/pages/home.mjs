import { img, icons, esc, washCards, statStrip, faqList, addressLine } from "../layout.mjs";
import { site, faqs } from "../site.config.mjs";

const city = `${site.address.city}, ${site.address.state}`;

export default {
  path: "/",
  hero: true,
  title: `${site.name} | Touchless Automatic Car Wash in ${city}`,
  description: `Touchless automatic car wash in ${city} with ${site.facts.bays} self-serve bays and ${site.facts.vacuums} vacuums. No brushes, no scratches. Cash, cards and tap to pay. Washes from $${site.washes[0].price}.`,
  render(ctx) {
    const { base } = ctx;
    const heroSrc = (name, widths) => widths.map((w) => `${base}/assets/img/${name}-${w}.webp ${w}w`).join(", ");
    return `
<section class="hero">
  <div class="hero-media">
    <picture>
      <source media="(max-width: 760px)" srcset="${heroSrc("hero-sign-tall", [480, 700, 1000])}" sizes="100vw">
      <img src="${base}/assets/img/hero-sign-1600.webp" srcset="${heroSrc("hero-sign", [800, 1200, 1600, 2400])}" sizes="100vw" width="2400" height="1404" alt="Petty Shine Express roadside sign reading self service and touchless automatic, with the wash building and bays behind it" fetchpriority="high" decoding="async">
    </picture>
    <div class="hero-scrim"></div>
  </div>
  <div class="wrap hero-inner">
    <div class="hero-copy">
      <p class="eyebrow">Self service and touchless automatic</p>
      <h1>The wash that <em>never touches</em> your car.</h1>
      <p class="lede">${esc(site.name)} is a touchless automatic car wash with ${site.facts.bays} self-serve bays and ${site.facts.vacuums} vacuums in ${esc(city)}. No brushes, no cloth strips, no swirl marks. Pull in, pick a wash, drive out clean.</p>
      <div class="btn-row">
        <a class="btn btn-primary btn-lg" href="${base}/wash-menu/">See the wash menu${icons.arrow}</a>
        <a class="btn btn-ghost btn-lg" href="${base}/touchless-automatic/">Why touchless</a>
      </div>
    </div>
    ${statStrip(ctx)}
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="pillars">
      <article class="pillar reveal" style="--i:0">
        <div class="pillar-icon">${icons.droplet}</div>
        <h3>Touchless</h3>
        <p>High-pressure water and wash chemistry do the work. Nothing but the rinse ever touches your paint, so there is nothing to scratch it.</p>
      </article>
      <article class="pillar reveal" style="--i:1">
        <div class="pillar-icon">${icons.bolt}</div>
        <h3>Fast</h3>
        <p>Pay at the station, roll into the bay and sit back. No crew to wait on, no appointment, no line of cars idling behind a tunnel.</p>
      </article>
      <article class="pillar reveal" style="--i:2">
        <div class="pillar-icon">${icons.wand}</div>
        <h3>Yours to run</h3>
        <p>${site.facts.bays} self-serve bays and ${site.facts.vacuums} vacuum stations for the days you would rather grab the wand and do it your way.</p>
      </article>
    </div>
  </div>
</section>

<section class="section plane-2 hairline" id="menu">
  <div class="wrap">
    <div class="section-head center">
      <p class="eyebrow">Wash menu</p>
      <h2>Four touchless washes. One price each.</h2>
      <p class="lede">Every wash on the menu is touchless. Pick how deep you want to go.</p>
    </div>
    ${washCards(ctx, { compact: true })}
    <p class="menu-note">Prices are posted on the wash menu at the entrance. Self-serve bay and vacuum pricing is posted on site.</p>
    <p><a class="link" href="${base}/wash-menu/">Compare the washes${icons.arrow}</a></p>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div class="split-media">
      ${img(ctx, "entrance", { alt: "Entrance to the touchless automatic bay with the clearance bar and wash menu", sizes: "(max-width: 860px) 100vw, 55vw" })}
      <span class="caption">Touchless automatic, clearance ${esc(site.facts.clearance)}</span>
    </div>
    <div class="reveal">
      <p class="eyebrow">Touchless automatic</p>
      <h2>No brushes. No cloth. No scratches.</h2>
      <p class="lede">Swirl marks come from friction. Brushes and cloth strips carry grit from the car ahead of yours and drag it across your clear coat. A touchless wash has neither. Pressure and chemistry lift the dirt, the rinse carries it off, and the dryer finishes.</p>
      <ul class="checks">
        <li>${icons.check}<div><strong>Safe for ceramic coatings, PPF and wraps</strong><span>The wash detailers recommend for protected paint.</span></div></li>
        <li>${icons.check}<div><strong>Built by a detailer</strong><span>From the owner of ${esc(site.parentBrand.name)}, the ceramic coating and paint protection shop in ${esc(site.address.city)}.</span></div></li>
        <li>${icons.check}<div><strong>Sit back and stay in the car</strong><span>Pay, pull in, and let the wash run.</span></div></li>
      </ul>
      <div class="btn-row"><a class="btn btn-primary" href="${base}/touchless-automatic/">How touchless works${icons.arrow}</a></div>
    </div>
  </div>
</section>

<section class="section plane-2 hairline">
  <div class="wrap split flip">
    <div class="split-media wide">
      ${img(ctx, "bays", { alt: "Row of self-serve wash bays with blue pressure wands and pay boxes", sizes: "(max-width: 860px) 100vw, 55vw" })}
      <span class="caption">${site.facts.bays} self-serve bays</span>
    </div>
    <div class="reveal">
      <p class="eyebrow">Self-serve bays and vacuums</p>
      <h2>${site.facts.bays} bays. ${site.facts.vacuums} vacuums. Your pace.</h2>
      <p class="lede">Muddy truck, boat trailer, or a car you would rather wash yourself? Grab the wand in one of ${site.facts.bays} open-ended bays, then finish the inside at one of ${site.facts.vacuums} vacuum stations on the lot.</p>
      <ul class="checks">
        <li>${icons.check}<div><strong>Room for trailers and lifted trucks</strong><span>Anything too tall for the automatic fits a bay.</span></div></li>
        <li>${icons.check}<div><strong>Pay with quarters or a card</strong><span>Every bay takes both.</span></div></li>
        <li>${icons.check}<div><strong>Vacuums right on the lot</strong><span>Wash, park, vacuum, done.</span></div></li>
      </ul>
      <div class="btn-row"><a class="btn btn-primary" href="${base}/self-serve/">Self-serve details${icons.arrow}</a></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap split">
    <div class="split-media tall">
      ${img(ctx, "pay-station-close", { alt: "Petty Shine Express pay station with cash, coin and tap to pay readers", sizes: "(max-width: 860px) 100vw, 45vw" })}
      <span class="caption">Pay station at the automatic entrance</span>
    </div>
    <div class="reveal">
      <p class="eyebrow">Pay how you want</p>
      <h2>Cash, card, or tap your phone.</h2>
      <p class="lede">The pay station takes it all and makes change. Pick a wash on the screen and pull in.</p>
      <div class="features">
        ${site.payment.map((p) => `<div class="feature"><div class="feature-icon">${icons.card}</div><div><h3>${esc(p.label)}</h3><p>${esc(p.detail)}</p></div></div>`).join("")}
      </div>
    </div>
  </div>
</section>

<section class="section-tight">
  <div class="wrap">
    <div class="clearance reveal">
      <div class="clearance-num">${esc(site.facts.clearance)}<small>Entrance clearance</small></div>
      <div>
        <h2 style="font-size:clamp(1.5rem,3vw,2.2rem)">Before you pull into the automatic</h2>
        <ul>
          <li>${icons.check}Vehicle height under ${esc(site.facts.clearance)}</li>
          <li>${icons.check}Fold in your mirrors</li>
          <li>${icons.check}Lower or remove antennas</li>
          <li>${icons.check}Remove bike racks and loose accessories</li>
          <li>${icons.check}No trailers in the automatic. Use a self-serve bay.</li>
          <li>${icons.check}Windows up, then sit back</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section plane-2 hairline" id="location">
  <div class="wrap loc-grid">
    <div class="reveal">
      <p class="eyebrow">Find us</p>
      <h2>${esc(city)}</h2>
      <p class="lede">${site.status === "open" ? "Pull in any time we are open." : "The renovation is nearly finished. Opening date coming soon."}</p>
      <div class="loc-card" style="margin-top:24px">
        <h3>Address</h3>
        <p class="big">${esc(addressLine(site))}</p>
        ${site.directionsUrl ? `<p style="margin-top:14px"><a class="link" href="${esc(site.directionsUrl)}" target="_blank" rel="noopener">Get directions${icons.arrow}</a></p>` : ""}
      </div>
      <div class="loc-card">
        <h3>${site.status === "open" ? "Hours" : "Status"}</h3>
        ${site.status === "open" && site.hours.length ? site.hours.map((h) => `<p><strong>${esc(h.days)}</strong>: ${esc(h.time)}</p>`).join("") : `<p><span class="status"><i></i>Opening soon</span></p>`}
      </div>
      <div class="loc-card">
        <h3>Questions</h3>
        <p class="big"><a href="tel:${site.phoneTel}" data-phone>${esc(site.phoneDisplay)}</a></p>
      </div>
    </div>
    <div class="split-media reveal" style="--i:1">
      ${img(ctx, "building", { alt: "Petty Shine Express building with the blue roof, entrance and self-serve bays under a summer sky", sizes: "(max-width: 860px) 100vw, 45vw" })}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">Good to know</p>
      <h2>Questions drivers ask.</h2>
    </div>
    ${faqList(faqs.slice(0, 5), { open: 1 })}
    <p style="margin-top:24px"><a class="link" href="${base}/faq/">All questions${icons.arrow}</a></p>
  </div>
</section>

<section class="section cta-band plane-blue">
  <div class="wrap">
    <div>
      <h2>Clean. Shine. Protect.</h2>
      <p class="lede">A touchless wash from $${site.washes[0].price}, ${site.facts.bays} bays and ${site.facts.vacuums} vacuums in ${esc(city)}.</p>
    </div>
    <div class="btn-row" style="margin:0">
      <a class="btn btn-white btn-lg" href="${base}/wash-menu/">See the wash menu${icons.arrow}</a>
    </div>
  </div>
</section>`;
  },
};
