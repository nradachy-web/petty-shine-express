import { icons, esc, faqList } from "../layout.mjs";
import { site, faqs } from "../site.config.mjs";

const city = `${site.address.city}, ${site.address.state}`;

export default {
  path: "/faq/",
  crumb: "FAQ",
  title: "Touchless Car Wash Questions, Answered",
  description: `Will a touchless wash scratch my car? Is it safe for ceramic coatings? What does it cost and how do I pay? Answers from ${site.name} in ${city}.`,
  faq: faqs,
  render(ctx) {
    const { base } = ctx;
    return `
<section class="page-hero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="${base}/">Home</a><span>/</span><span>FAQ</span></nav>
    <p class="eyebrow">Questions</p>
    <h1>Straight answers.</h1>
    <p class="lede">Everything drivers ask before their first touchless wash. Anything else, call ${esc(site.phoneDisplay)}.</p>
  </div>
</section>
<section class="section-tight">
  <div class="wrap" style="max-width:860px">
    ${faqList(faqs, { open: 1 })}
  </div>
</section>
<section class="section cta-band plane-blue">
  <div class="wrap">
    <div>
      <h2>Ready when you are.</h2>
      <p class="lede">Touchless washes from $${site.washes[0].price} in ${esc(city)}.</p>
    </div>
    <div class="btn-row" style="margin:0"><a class="btn btn-white btn-lg" href="${base}/wash-menu/">See the wash menu${icons.arrow}</a></div>
  </div>
</section>`;
  },
};
