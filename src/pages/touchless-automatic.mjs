import { img, icons, esc } from "../layout.mjs";
import { site } from "../site.config.mjs";

const city = `${site.address.city}, ${site.address.state}`;

export default {
  path: "/touchless-automatic/",
  crumb: "Touchless Automatic",
  title: `Touchless Automatic Car Wash in ${city}, No Brushes, No Scratches`,
  description: `How the touchless automatic at ${site.name} cleans without brushes or cloth, why it will not scratch your car, and why it is the right wash for ceramic coated, PPF and wrapped vehicles in ${city}.`,
  render(ctx) {
    const { base } = ctx;
    return `
<section class="page-hero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="${base}/">Home</a><span>/</span><span>Touchless Automatic</span></nav>
    <p class="eyebrow">Touchless automatic</p>
    <h1>Clean without contact.</h1>
    <p class="lede">A touchless automatic washes your car with high-pressure water and wash chemistry. No spinning brushes, no cloth strips, no friction on your paint. That is why it will not scratch your car.</p>
    <div class="btn-row"><a class="btn btn-primary" href="${base}/wash-menu/">See the wash menu${icons.arrow}</a></div>
  </div>
</section>

<section class="section-tight">
  <div class="wrap split">
    <div class="split-media">
      ${img(ctx, "entrance", { alt: "Entrance of the touchless automatic bay at Petty Shine Express", sizes: "(max-width: 860px) 100vw, 55vw" })}
      <span class="caption">Clearance ${esc(site.facts.clearance)}</span>
    </div>
    <div class="reveal">
      <p class="eyebrow">Why it will not scratch</p>
      <h2>Scratches need friction. There is none.</h2>
      <p class="lede">Swirl marks, the fine spider-web scratches you see in sunlight, come from something dragging grit across your clear coat. In a brush wash that something is the brush, still carrying sand from the car before yours. In a touchless wash, the only thing that touches the paint is water.</p>
      <ul class="checks">
        <li>${icons.check}<div><strong>Pre-soak loosens the dirt</strong><span>Wash chemistry breaks the bond between grime and paint.</span></div></li>
        <li>${icons.check}<div><strong>High-pressure water lifts it off</strong><span>Sensors map your vehicle so the arch follows its shape.</span></div></li>
        <li>${icons.check}<div><strong>Rinse and dry finish the job</strong><span>Clean water carries the dirt away, then the dryer clears the water.</span></div></li>
      </ul>
    </div>
  </div>
</section>

<section class="section plane-2 hairline">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">Who it is for</p>
      <h2>The wash a detailer would pick.</h2>
      <p class="lede">${esc(site.name)} comes from the owner of ${esc(site.parentBrand.name)}, a paint correction, ceramic coating and paint protection film shop. Touchless is the wash that keeps that work looking new.</p>
    </div>
    <div class="features">
      <div class="feature reveal" style="--i:0"><div class="feature-icon">${icons.shield}</div><div><h3>Ceramic coated cars</h3><p>A coating sheds dirt on its own. Pressure and chemistry are all it needs, and brushes are the one thing that dulls it.</p></div></div>
      <div class="feature reveal" style="--i:1"><div class="feature-icon">${icons.shield}</div><div><h3>Paint protection film and wraps</h3><p>Film edges and vinyl seams do not like being scrubbed. Touchless leaves them alone.</p></div></div>
      <div class="feature reveal" style="--i:2"><div class="feature-icon">${icons.shield}</div><div><h3>Dark and new paint</h3><p>Black, dark blue and fresh factory paint show swirl marks first. Keep them off from day one.</p></div></div>
      <div class="feature reveal" style="--i:3"><div class="feature-icon">${icons.shield}</div><div><h3>Anyone in a hurry</h3><p>Sit in the car, let it run, drive out. No appointment and no crew.</p></div></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">Step by step</p>
      <h2>How a wash runs.</h2>
    </div>
    <ol class="steps">
      <li class="reveal" style="--i:0"><h3>Pay at the station</h3><p>Cash, quarters, chip or tap cards, Apple Pay or Google Pay. Pick your wash on the screen.</p></li>
      <li class="reveal" style="--i:1"><h3>Pull in and park</h3><p>Follow the signal to the stop point. Windows up, mirrors folded.</p></li>
      <li class="reveal" style="--i:2"><h3>The arch does the work</h3><p>Pre-soak, high-pressure wash, rinse, and the extras your wash includes.</p></li>
      <li class="reveal" style="--i:3"><h3>Dry and drive out</h3><p>The dryer clears the water. Pull forward to a vacuum if you want to finish the inside.</p></li>
    </ol>
  </div>
</section>

<section class="section-tight">
  <div class="wrap">
    <div class="clearance reveal">
      <div class="clearance-num">${esc(site.facts.clearance)}<small>Entrance clearance</small></div>
      <div>
        <h2 style="font-size:clamp(1.5rem,3vw,2.2rem)">Before you enter</h2>
        <ul>
          <li>${icons.check}Vehicle height under ${esc(site.facts.clearance)}</li>
          <li>${icons.check}Fold in your mirrors</li>
          <li>${icons.check}Lower or remove antennas</li>
          <li>${icons.check}Remove bike racks and loose accessories</li>
          <li>${icons.check}No trailers in the automatic</li>
          <li>${icons.check}Windows up, then sit back</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section plane-2 hairline">
  <div class="wrap split flip">
    <div class="split-media wide">
      ${img(ctx, "bays", { alt: "Self-serve bays at Petty Shine Express", sizes: "(max-width: 860px) 100vw, 55vw" })}
    </div>
    <div class="reveal">
      <p class="eyebrow">When a bay is the better call</p>
      <h2>Heavy mud, trailers and tall trucks.</h2>
      <p class="lede">Touchless is gentle by design. If a truck is caked in red clay, or the vehicle is over ${esc(site.facts.clearance)}, or you are towing, one of the ${site.facts.bays} self-serve bays gives you the wand and the room.</p>
      <div class="btn-row"><a class="btn btn-primary" href="${base}/self-serve/">Self-serve bays and vacuums${icons.arrow}</a></div>
    </div>
  </div>
</section>

<section class="section cta-band plane-blue">
  <div class="wrap">
    <div>
      <h2>Touchless washes from $${site.washes[0].price}.</h2>
      <p class="lede">Four tiers, all brush free, in ${esc(city)}.</p>
    </div>
    <div class="btn-row" style="margin:0"><a class="btn btn-white btn-lg" href="${base}/wash-menu/">See the wash menu${icons.arrow}</a></div>
  </div>
</section>`;
  },
};
