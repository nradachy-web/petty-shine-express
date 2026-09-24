import { site } from "../site.config.mjs";
import { esc } from "../layout.mjs";

export default {
  path: "/privacy/",
  crumb: "Privacy",
  title: "Privacy Policy",
  description: `How ${site.name} handles information collected on this website.`,
  noindex: true,
  render(ctx) {
    const { base } = ctx;
    return `
<section class="page-hero">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="${base}/">Home</a><span>/</span><span>Privacy</span></nav>
    <h1>Privacy policy</h1>
    <p class="lede">Last updated ${ctx.buildDate}.</p>
  </div>
</section>
<section class="section-tight">
  <div class="wrap prose">
    <p>This website belongs to ${esc(site.legalName)} ("we"). It exists to tell you about the car wash. It does not sell anything online and does not require an account.</p>
    <h2>What we collect</h2>
    <p>We do not ask you to enter personal information on this site. If you call the phone number listed, your call is handled like any other phone call and is not recorded by this website.</p>
    <h2>Analytics and advertising</h2>
    <p>We may use Google Ads and Google Analytics to understand how people find the site and whether our advertising works. These tools use cookies and similar technologies and may collect your IP address, device information and pages viewed. Google's use of that data is described in <a href="https://policies.google.com/privacy" rel="noopener">Google's privacy policy</a>. You can opt out of personalized advertising at <a href="https://adssettings.google.com" rel="noopener">Google Ads Settings</a>.</p>
    <h2>Links</h2>
    <p>Links to other websites, including maps and social networks, are governed by those sites' own policies.</p>
    <h2>Contact</h2>
    <p>Questions about this policy: call ${esc(site.phoneDisplay)}.</p>
  </div>
</section>`;
  },
};
