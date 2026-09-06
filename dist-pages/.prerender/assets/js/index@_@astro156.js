import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';
import { $ as $$BranchTable } from './BranchTable.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const entries = [
    {
      no: 1,
      marker: "□",
      name: "Sansenji Dojo",
      address: "332 Oshikakubo, Fujinomiya City, Shizuoka Prefecture, Sansenji Temple",
      schedule: ["Wednesdays"],
      link: "/en/dojo/shizuoka/"
    },
    {
      no: 2,
      marker: "□",
      name: "Fukuoka Branch",
      address: "Fukuoka City (activity concluded March 2021)",
      schedule: [],
      link: "/en/dojo/fukuoka/"
    },
    {
      no: 3,
      marker: "◇",
      name: "Chiba Muryu-juku",
      address: "3-9-4 Konakadai, Inage-ku, Chiba City",
      schedule: ["TEL/FAX 043-304-5991"],
      link: "https://muryukun.wixsite.com/muryukun/about-us"
    },
    {
      no: 4,
      marker: "□",
      name: "Toyota Doukoukai",
      address: "Aichi Prefecture",
      schedule: ["Iaido / Jojutsu / Self-defense"],
      link: "http://www.nobunao9584.shop/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Dojos in Shizuoka, Aichi & Chiba Prefectures", "description": "Directory of Seishinkai-affiliated and partner dojos in Shizuoka, Aichi, and Chiba Prefectures — Sansenji Dojo (Shizuoka), Chiba Muryu-juku, and Toyota Doukoukai (Aichi).", "lang": "en", "path": "/en/dojo/naichi/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO LIST</span>
        <h1 class="section-title">Karate Dojos in Shizuoka, Aichi & Chiba Prefectures</h1>
      </div>
      <p class="detail-page__contact">
        Inquiries: TEL 011-300-0048 (weekdays 1:00 PM–4:00 PM)
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      <p class="detail-page__note">
        □ Self-managed dojo — inquiries directly to the dojo manager<br>
        ◇ Affiliated dojo
      </p>

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/photo/DSCN1929.jpg" alt="Sansenji Dojo — 2017 training trip" width="284" height="213" loading="lazy">
          <figcaption>Sansenji Dojo — 2017 training trip</figcaption>
        </figure>
        <figure>
          <img src="/assets/images/legacy/photo/DSC_4961.jpg" alt="Sansenji Dojo — 2016 training trip" width="292" height="212" loading="lazy">
          <figcaption>Sansenji Dojo — 2016 training trip</figcaption>
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/">← Back to Dojo List</a>
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/naichi/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/naichi/index.astro";
const $$url = "/en/dojo/naichi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
