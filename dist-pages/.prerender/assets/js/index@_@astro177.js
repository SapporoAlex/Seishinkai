import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';
import { $ as $$BranchTable } from './BranchTable.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const entries = [
    {
      no: 1,
      marker: "★",
      name: "Tobetsu Karate Club",
      address: "2792 Shirakaba-cho, Tobetsu Town (Tobetsu Town General Gymnasium)",
      schedule: ["Saturday 18:00 (since April 2024)"],
      link: "/en/dojo/tobetsu/tobetsu/"
    },
    {
      no: 2,
      marker: "★",
      name: "Naganuma Karate Club",
      address: "Chuo-Minami 2-chome, Naganuma Town (Naganuma Sports Center)",
      schedule: ["Tuesday 18:30"],
      link: "/en/dojo/naganuma/"
    },
    {
      no: 3,
      marker: "★",
      name: "Kimobetsu Karate Club",
      address: "22 Aza Kimobetsu, Kimobetsu Town, Abuta District (Kimobetsu Town Budokan)",
      schedule: ["Thursday 18:30"],
      link: "/en/dojo/kimobetsu/"
    },
    {
      no: 4,
      marker: "★",
      name: "Kyogoku Karate Club",
      address: "160 Kyogoku, Kyogoku Town, Abuta District (Kyogoku Town Community Hall)",
      schedule: ["Tuesday 18:15/19:05"],
      link: "/en/dojo/kyogoku/"
    },
    {
      no: 5,
      marker: "★",
      name: "Hamatonbetsu Karate Club",
      address: "3-15 Asahi-cho, Hamatonbetsu Town (Hamatonbetsu Elementary School)",
      schedule: ["Wednesday 18:30/Friday 18:30"],
      link: "/en/dojo/hamaton/"
    },
    {
      name: "Nanporo Town",
      address: "In planning — pending sufficient participants",
      schedule: []
    },
    {
      name: "Makkari Village",
      address: "In planning — pending sufficient participants",
      schedule: []
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes in Tobetsu, Naganuma, Kimobetsu & More", "description": "Directory of Seishinkai Karate dojos and classes in Tobetsu, Naganuma, Kimobetsu, Kyogoku, and Hamatonbetsu. Training schedules for each branch.", "lang": "en", "path": "/en/dojo/tobetsu/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO LIST</span>
        <h1 class="section-title">
          Karate Dojos & Classes in Tobetsu, Naganuma, Kimobetsu & Kyogoku
        </h1>
      </div>
      <p class="detail-page__contact">
        Inquiries: TEL 011-300-0048 (weekdays 1:00 PM–4:00 PM)
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      <ul class="detail-legend">
        <li>
          <span class="detail-legend__marker">★</span>Headquarters-run class — inquiries to the head office
        </li>
      </ul>

      <div class="detail-media">
        <img src="/assets/images/legacy/photo/Image2.jpg" alt="Seishinkai Karate training session" width="570" height="340" loading="lazy">
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/">← Back to Dojo & Class List</a>
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/tobetsu/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/tobetsu/index.astro";
const $$url = "/en/dojo/tobetsu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
