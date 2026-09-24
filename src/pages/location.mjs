import { img, icons, esc, addressLine } from "../layout.mjs";
import { site } from "../site.config.mjs";

const city = `${site.address.city}, ${site.address.state}`;

export default {
  path: "/location/",
  crumb: "Location",
  title: `Location and Hours, Car Wash in ${city}`,
  description: `Find ${site.name}, the touchless automatic and self-serve car wash in ${city}. Address, hours, directions and what to know before you pull in.`,
  render(ctx) {
    const { base } = ctx;
    return `
<section class="page-hero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="${base}/">Home</a><span>/</span><span>Location</span></nav>
    <p class="eyebrow">Location and hours</p>
    <h1>${esc(city)}</h1>
    <p class="lede">${site.status === "open" ? "Pull in any time we are open. No appointment, no crew, no line." : "The renovation is nearly finished. Check back for the opening date, or call with questions."}</p>
  </div>
</section>

<section class="section-tight">
  <div class="wrap loc-grid">
    <div class="reveal">
      <h2 class="sr-only">Address, status and phone</h2>
      <div class="loc-card">
        <h3>Address</h3>
        <p class="big">${esc(addressLine(site))}</p>
        ${site.directionsUrl ? `<p style="margin-top:14px"><a class="btn btn-primary" href="${esc(site.directionsUrl)}" target="_blank" rel="noopener">Get directions${icons.arrow}</a></p>` : ""}
      </div>
      <div class="loc-card">
        <h3>${site.status === "open" ? "Hours" : "Status"}</h3>
        ${site.status === "open" && site.hours.length ? site.hours.map((h) => `<p><strong>${esc(h.days)}</strong>: ${esc(h.time)}</p>`).join("") : `<p><span class="status"><i></i>Opening soon</span></p>`}
      </div>
      <div class="loc-card">
        <h3>Phone</h3>
        <p class="big"><a href="tel:${site.phoneTel}" data-phone>${esc(site.phoneDisplay)}</a></p>
      </div>
      <div class="loc-card">
        <h3>Drivers come from</h3>
        <div class="chips">${site.nearby.map((n) => `<span>${esc(n)}</span>`).join("")}</div>
      </div>
    </div>
    <div class="split-media reveal" style="--i:1">
      ${img(ctx, "building", { alt: "Petty Shine Express building, entrance and self-serve bays", sizes: "(max-width: 860px) 100vw, 45vw" })}
    </div>
  </div>
</section>

<section class="section">
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

<section class="section cta-band plane-blue">
  <div class="wrap">
    <div>
      <h2>Touchless washes from $${site.washes[0].price}.</h2>
      <p class="lede">${site.facts.bays} self-serve bays and ${site.facts.vacuums} vacuums on the same lot.</p>
    </div>
    <div class="btn-row" style="margin:0"><a class="btn btn-white btn-lg" href="${base}/wash-menu/">See the wash menu${icons.arrow}</a></div>
  </div>
</section>`;
  },
};
