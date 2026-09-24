import { icons } from "../layout.mjs";
import { site } from "../site.config.mjs";

export default {
  path: "/404/",
  crumb: "Not found",
  title: "Page not found",
  description: "That page is not here.",
  noindex: true,
  render(ctx) {
    const { base } = ctx;
    return `
<section class="page-hero">
  <div class="wrap">
    <p class="eyebrow">404</p>
    <h1>That page drove off.</h1>
    <p class="lede">Try the wash menu, or head back to the front.</p>
    <div class="btn-row"><a class="btn btn-primary" href="${base}/">Home${icons.arrow}</a><a class="btn btn-ghost" href="${base}/wash-menu/">Wash menu</a></div>
  </div>
</section>`;
  },
};
