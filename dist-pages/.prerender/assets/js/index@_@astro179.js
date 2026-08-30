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
      name: "Toyohira Branch",
      address: "6-7-1-12 Toyohira 6-jo, Toyohira Children's Hall",
      schedule: ["Saturday 18:20"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Toyohira Branch, Toyohira Ward", "description": "Introducing the Seishinkai Karate dojo and class in Toyohira, Toyohira Ward, Sapporo. A headquarters-run class — see training days and venue information.", "lang": "en", "path": "/en/dojo/toyohira/toyohira/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - Toyohira Branch</h1>
      </div>

      <h2 class="detail-page__heading">Toyohira Ward Toyohira Karate Class - Seishinkai Toyohira Branch</h2>

      <p class="detail-page__lead">
        The Toyohira Branch is a headquarters-run class held at the Toyohira Children's Hall.<br>
        Instructors from the adult general division take turns leading the class.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinkai Toyohira Branch", "facts": [
    { label: "Founded", value: "June 2011 (Heisei 23)" },
    { label: "Past instructors", value: "Koyano, Takashima, Masuda" },
    { label: "Instructor", value: "Directly overseen by Headquarters" },
    { label: "Note", value: "Instructors from the adult general division take turns leading the class" }
  ], "image": {
    src: "/assets/images/dojo/img_toyohira_1.jpg",
    alt: "Toyohira Children's Hall",
    width: 290,
    height: 206
  }, "address": "6-7-1-12 Toyohira 6-jo, Toyohira-ku, Sapporo, Toyohira Children's Hall", "mapHref": "https://www.google.com/maps/search/?api=1&query=札幌市豊平区豊平6条7丁目1-12+豊平児童会館", "mapQuery": "札幌市豊平区豊平6条7丁目1-12 豊平児童会館" })}

      <p class="detail-page__back">
        <a href="/en/dojo/toyohira/">← Back to the Toyohira Ward dojo & class list</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Toyohira Branch", "subject": "Toyohira Trial Lesson Application" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/toyohira/toyohira/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/toyohira/toyohira/index.astro";
const $$url = "/en/dojo/toyohira/toyohira";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
