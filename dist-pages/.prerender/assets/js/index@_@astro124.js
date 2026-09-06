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
      name: "Higashi-Kariki Karate Club",
      address: "Higashi-Kariki Children's Hall, Higashi-Kariki 14-jo 2-chome 1-1, Higashi-ku, Sapporo",
      schedule: ["Thursday 18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Higashi-Kariki Branch, Higashi Ward", "description": "Introducing the Higashi-Kariki Karate Club, a Seishinkai Karate dojo in Higashi-Kariki, Higashi Ward, Sapporo. Training is held on Thursdays at the Higashi-Kariki Children's Hall.", "lang": "en", "path": "/en/dojo/higashikariki/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate-do Federation — Higashi-Kariki Branch</h1>
      </div>

      <h2 class="detail-page__heading">Higashi-Kariki Karate Class / Seishinkai Higashi-Kariki Branch</h2>

      <p class="detail-page__lead">
        The Higashi-Kariki karate class got its start in February 2021 (Reiwa 3) at the Higashi-Kariki Community Hall, moving the following year to the Higashi-Kariki Children's Hall.<br>
        It's karate that people of all ages, from kids to adults, can enjoy learning.<br>
        Participation by parents and children together, and by senior class members, is especially welcome.<br>
        While many dojos feel like an extension of a school sports club, this one aims to offer karate for health and fitness that members can enjoy learning in a relaxed, club-like atmosphere.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinkai Higashi-Kariki Branch", "facts": [
    { label: "Founded", value: "February 2021 (Reiwa 3)" },
    { label: "Founder", value: "Takayuki Inomata" },
    { label: "Instructor", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/dojo/img_higashikariki_bld.jpg",
    alt: "Higashi-Kariki Children's Hall",
    width: 437,
    height: 239
  }, "address": "Higashi-Kariki Children's Hall, Higashi-Kariki 14-jo 2-chome 1-1, Higashi-ku, Sapporo", "mapHref": "https://www.google.com/maps/place/札幌市東雁来児童会館+かりたま/@43.105653,141.4308999,15z/data=!4m5!3m4!1s0x0:0xeb5bbea1f521e82b!8m2!3d43.1056214!4d141.4308765", "mapQuery": "43.105653,141.4308999" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_higashikariki_01.jpg" alt="Practice session at the Higashi-Kariki Branch" width="611" height="216" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_higashikariki_02.jpg" alt="Practice session at the Higashi-Kariki Branch" width="142" height="142" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_higashikariki_03.jpg" alt="Practice session at the Higashi-Kariki Branch" width="611" height="216" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_higashikariki_04.jpg" alt="Practice session at the Higashi-Kariki Branch" width="142" height="142" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/higashi/">← Back to the Higashi Ward Dojo & Class List</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Higashi-Kariki Branch", "subject": "Higashi-Kariki Trial Application" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/higashikariki/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/higashikariki/index.astro";
const $$url = "/en/dojo/higashikariki";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
