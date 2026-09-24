import { img, icons, esc } from "../layout.mjs";
import { site } from "../site.config.mjs";

const city = `${site.address.city}, ${site.address.state}`;

export default {
  path: "/about/",
  crumb: "About",
  title: `About ${site.name}`,
  description: `${site.name} is the touchless automatic and self-serve car wash in ${city} from ${site.owner}, owner of ${site.parentBrand.name}. Clean. Shine. Protect.`,
  render(ctx) {
    const { base } = ctx;
    return `
<section class="page-hero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="${base}/">Home</a><span>/</span><span>About</span></nav>
    <p class="eyebrow">About</p>
    <h1>Built by a detailer.</h1>
    <p class="lede">${esc(site.name)} comes from ${esc(site.owner)}, the owner of <a href="${esc(site.parentBrand.url)}" rel="noopener" style="color:var(--blue-2);font-weight:600;text-decoration:underline;text-underline-offset:3px">${esc(site.parentBrand.name)}</a>, the paint correction, ceramic coating and paint protection film shop in ${esc(site.address.city)}.</p>
  </div>
</section>

<section class="section-tight">
  <div class="wrap split">
    <div class="split-media">
      ${img(ctx, "building", { alt: "Petty Shine Express after the renovation, with the new blue roof and signage", sizes: "(max-width: 860px) 100vw, 55vw" })}
      <span class="caption">${esc(site.tagline)}</span>
    </div>
    <div class="reveal prose">
      <h2 style="margin-top:0">Why a coating shop built a car wash.</h2>
      <p>When you spend your days correcting paint and coating it, you learn exactly what puts the scratches back: brush washes. So when it came time to build a car wash, there was only one kind worth building. Touchless. High-pressure water and the right chemistry, and nothing that touches the paint.</p>
      <p>The lot is set up for the way people actually wash. A touchless automatic for the days you want it done for you. ${site.facts.bays} self-serve bays for mud, trailers and tall trucks. ${site.facts.vacuums} vacuums so the inside gets finished on the same trip. Cash, cards and tap to pay everywhere.</p>
      <p>The standard is the same one on the sign: clean, shine, protect.</p>
      <div class="btn-row"><a class="btn btn-primary" href="${base}/touchless-automatic/">Why touchless${icons.arrow}</a><a class="btn btn-ghost" href="${base}/location/">Location</a></div>
    </div>
  </div>
</section>`;
  },
};
