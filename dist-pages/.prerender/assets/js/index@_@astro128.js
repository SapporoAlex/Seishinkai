import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';
import { $ as $$BranchTable } from './BranchTable.js';
import { $ as $$BranchInfoCard } from './BranchInfoCard.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const entries = [
    {
      marker: "●",
      name: "SC Hiraoka Karate Club",
      address: "Hiraoka 3-jo 5-chome, Kiyota-ku, Aeon Hiraoka Store 2F (Sapporo Culture)",
      schedule: ["Saturday 9:15"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the SC Hiraoka Branch, Kiyota Ward", "description": "Introducing the Sapporo Culture early-morning kids' karate class (Seishinkai SC Hiraoka Branch) on the 2nd floor of Aeon Hiraoka Store, Kiyota Ward, Sapporo. See training days and venue information.", "lang": "en", "path": "/en/dojo/hiraoka-sc/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - SC Hiraoka Branch</h1>
      </div>

      <h2 class="detail-page__heading">SC Hiraoka Branch - Sapporo Culture Early-Morning Kids' Karate Class</h2>

      <p class="detail-page__lead">
        This is an early-morning kids' karate class held at Sapporo Culture, on the 2nd floor of Aeon Hiraoka Store.<br>
        Seishinkai sends instructors on a rotating basis.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinkai SC Hiraoka Branch", "facts": [
    { label: "Founded", value: "October 2009 (Heisei 21)" },
    { label: "Past instructors", value: "Kayoko Mimura, Hashini" },
    { label: "Instructor", value: "Headquarters-run" },
    { label: "Note", value: "Seishinkai sends instructors on a rotating basis" }
  ], "address": "Hiraoka 3-jo 5-chome, Kiyota-ku, Sapporo, Aeon Hiraoka Store 2F (Sapporo Culture)", "mapHref": "https://www.google.com/maps/search/?api=1&query=イオン平岡店", "mapQuery": "イオン平岡店 札幌市清田区平岡3条5丁目" })}

      <p class="detail-page__note">
        ※This class is run by Sapporo Culture. For trial lessons or enrollment, please contact <a href="https://www.culture.gr.jp/detail/sapporo/contact/sapporo_4537192/" target="_blank" rel="noopener">Sapporo Culture</a> directly.
      </p>

      <p class="detail-page__back">
        <a href="/en/dojo/minami-kiyota/">← Back to the Kiyota-ku / Minami-ku dojo & class list</a>
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/hiraoka-sc/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/hiraoka-sc/index.astro";
const $$url = "/en/dojo/hiraoka-sc";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
