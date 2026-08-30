import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';
import { $ as $$BranchTable } from './BranchTable.js';
import { $ as $$BranchInfoCard } from './BranchInfoCard.js';
import { $ as $$DojoContactSection } from './DojoContactSection.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const entries = [
    {
      marker: "★",
      name: "Hamatonbetsu Karate Club",
      address: "3-15 Asahi-cho, Hamatonbetsu Town (Hamatonbetsu Elementary School)",
      schedule: ["Wednesday 18:30/Friday 18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes in Hamatonbetsu Town", "description": "Information on the Seishinkai Karate dojo — Hamatonbetsu Branch — in Hamatonbetsu Town, Esashi District, Hokkaido. Training days and venue details.", "lang": "en", "path": "/en/dojo/hamaton/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation — Hamatonbetsu Branch</h1>
      </div>

      <h2 class="detail-page__heading">Hamatonbetsu Karate Class / Seishinkai Hamatonbetsu Branch</h2>

      <p class="detail-page__lead">
        Activities began in July 2023 (Reiwa 5). The Hamatonbetsu Karate Club also operates as the
        Hamatonbetsu Branch of the Seishinkai Karate Federation.<br>
        If you're interested, please feel free to contact us.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Hamatonbetsu Branch — Do-hoku Region", "facts": [
    { label: "Founded", value: "April 2023 (Reiwa 5)" },
    { label: "Founder", value: "Inomata — contact 090-9759-3959" }
  ], "image": {
    src: "/assets/images/dojo/img_hamaton_bld.jpg",
    alt: "Hamatonbetsu Elementary School gymnasium",
    width: 340,
    height: 169
  }, "address": "3-15 Asahi-cho, Hamatonbetsu Town, Hamatonbetsu Elementary School Gymnasium", "mapHref": "https://www.google.com/maps/search/浜頓別小学校体育館/@45.1220392,142.3559264,14z/data=!3m1!4b1", "mapQuery": "45.1220392,142.3559264" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_hamaton_01.jpg" alt="Hamatonbetsu Branch practice session" width="332" height="206" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_hamaton_02.jpg" alt="Hamatonbetsu Branch practice session" width="602" height="312" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※General class: Wednesday 18:30 / Youth class: Friday 18:30. The venue is the Hamatonbetsu
        Elementary School gymnasium.
      </p>

      <p class="detail-page__back">
        <a href="/en/dojo/tobetsu/">← Back to the Dojo List</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Hamatonbetsu Branch", "subject": "Hamatonbetsu Branch Trial & Enrollment Inquiry", "directPhone": { number: "090-9759-3959", tel: "09097593959", note: "Inomata" } })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/hamaton/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/hamaton/index.astro";
const $$url = "/en/dojo/hamaton";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
