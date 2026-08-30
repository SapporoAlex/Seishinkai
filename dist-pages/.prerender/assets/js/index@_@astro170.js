import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';
import { $ as $$BranchTable } from './BranchTable.js';
import { $ as $$BranchInfoCard } from './BranchInfoCard.js';
import { $ as $$DojoContactSection } from './DojoContactSection.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const entries = [
    {
      marker: "#",
      name: "Sansenji Karate Dojo (Seishinkai Shizuoka Branch)",
      sub: "Hokureikai",
      address: "332 Oshikakubo, Fujinomiya City, Shizuoka Prefecture, Sansenji Temple",
      schedule: ["Wednesday - evening"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Shizuoka Branch (Sansenji Dojo)", "description": "Introducing the Seishinkai Shizuoka Branch, based at Sansenji Temple in Fujinomiya City, Shizuoka Prefecture. History, training days, and access for the Hokureikai Sansenji Karate Dojo.", "lang": "en", "path": "/en/dojo/shizuoka/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - Shizuoka Branch</h1>
      </div>

      <h2 class="detail-page__heading">Hokureikai - Sansenji Karate Dojo - Seishinkai Shizuoka Branch</h2>

      <p class="detail-page__lead">
        The Sansenji Dojo traces back to Hisanobu Inuura (Hokugo Branch Chief, now head priest of Sansenji Temple), who trained at Seishinkai Headquarters and founded the Minobusan University Karate Club in Yamanashi Prefecture in 2001 (Heisei 13).<br>
        The Sansenji Dojo itself started at Sansenji Temple in Shizuoka Prefecture in June 2005 (Heisei 17).<br>
        Members range widely from children to seniors.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Shizuoka Branch", "facts": [
    { label: "Founded", value: ["October 2001 (Heisei 13) - Yamanashi Branch", "June 2005 (Heisei 17) - Shizuoka Branch"] },
    { label: "Founder", value: "Hisanobu Inuura" }
  ], "image": {
    src: "/assets/images/legacy/dojo/shizuoka/2.jpg",
    alt: "Sansenji Dojo",
    width: 258,
    height: 175
  }, "address": "332 Oshikakubo, Fujinomiya City, Shizuoka Prefecture, Sansenji Temple", "addressNote": "The dojo is located on the temple grounds", "mapHref": "https://www.google.com/maps/place/〒419-0303+静岡県富士宮市大鹿窪３３２/@35.2507663,138.5611994,17z/data=!3m1!4b1!4m5!3m4!1s0x601bd01f37b31da9:0xc2111aeb55d23bb5!8m2!3d35.2507663!4d138.5633881", "mapQuery": "35.2507663,138.5611994" })}

      <div class="detail-gallery">
        <figure>
          <a href="https://www.facebook.com/jushin.inuura.3" target="_blank" rel="noopener">
            <img src="/assets/images/legacy/images/inu.jpg" alt="Founder Hisanobu Inuura" width="109" height="109" loading="lazy">
          </a>
          <figcaption>Founder Hisanobu Inuura</figcaption>
        </figure>
        <figure>
          <img src="/assets/images/legacy/dojo/shizuoka/Image1.jpg" alt="Sansenji Dojo practice session" width="336" height="167" loading="lazy">
        </figure>
      </div>

      <div class="detail-gallery">
        <figure>
          <a href="https://www.santakuji.com/" target="_blank" rel="noopener">
            <img src="/assets/images/legacy/dojo/shizuoka/DSC_4851.jpg" alt="Sansenji Temple" width="314" height="209" loading="lazy">
          </a>
          <figcaption>A temple with over 700 years of tradition, founded in the Kamakura period</figcaption>
        </figure>
        <figure>
          <img src="/assets/images/legacy/dojo/shizuoka/DSC_4900.jpg" alt="Dedicated dojo on the temple grounds" width="311" height="204" loading="lazy">
          <figcaption>Dedicated dojo on the temple grounds</figcaption>
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/naichi/">← Back to the Shizuoka, Aichi & Chiba Dojo List</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Shizuoka Branch", "subject": "Shizuoka Branch Trial & Enrollment Inquiry", "directPhone": {
    number: "01544-29-3500",
    tel: "01544293500",
    note: "TEL/FAX. We may be at work during the day — Wednesday evenings only."
  } })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/shizuoka/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/shizuoka/index.astro";
const $$url = "/en/dojo/shizuoka";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
