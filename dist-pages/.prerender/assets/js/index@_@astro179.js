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
      address: "1-12-7 Toyohira 6-jo, Toyohira Ward, Sapporo — Toyohira Children's Hall",
      schedule: ["Saturdays 18:20"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Toyohira Ward Karate Class", "description": "Information about the Seishinkai Karate Dojo and class in Toyohira, Toyohira Ward, Sapporo. This class is directly managed by Seishinkai Headquarters. Learn about the training day and venue.", "lang": "en", "path": "/dojo/toyohira/toyohira/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation — Toyohira Branch</h1>
      </div>

      <h2 class="detail-page__heading">
        Toyohira Ward Karate Class · Seishinkai Toyohira Branch
      </h2>

      <p class="detail-page__lead">
        The Toyohira Branch is a class directly managed by Seishinkai Headquarters and operates at the Toyohira Children's Hall.<br>
        Instructors who are members of the adult division take turns participating and providing instruction.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinkai Toyohira Branch", "facts": [
    { label: "Established", value: "June 2011" },
    { label: "Former Instructors", value: "Koyano, Takashima, Masuda" },
    { label: "Management", value: "Directly managed by Headquarters" },
    {
      label: "Notes",
      value: "Instructors who are members of the adult division take turns participating."
    }
  ], "image": {
    src: "/assets/images/dojo/img_toyohira_bld.jpg",
    alt: "Toyohira Children's Hall",
    width: 290,
    height: 206
  }, "address": "1-12-7 Toyohira 6-jo, Toyohira Ward, Sapporo — Toyohira Children's Hall", "mapHref": "https://www.google.com/maps/search/?api=1&query=札幌市豊平区豊平6条7丁目1-12+豊平児童会館", "mapQuery": "札幌市豊平区豊平6条7丁目1-12 豊平児童会館", "viewOnMapLabel": "View on Google Maps" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_toyohira_01.jpg" alt="Karate training at the Toyohira Branch" width="316" height="194" loading="lazy">
        </figure>

        <figure>
          <img src="/assets/images/dojo/img_toyohira_02.jpg" alt="Karate training at the Toyohira Branch" width="316" height="194" loading="lazy">
        </figure>

        <figure>
          <img src="/assets/images/dojo/img_toyohira_03.jpg" alt="Karate training at the Toyohira Branch" width="316" height="194" loading="lazy">
        </figure>

        <figure>
          <img src="/assets/images/dojo/img_toyohira_04.jpg" alt="Karate training at the Toyohira Branch" width="316" height="194" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/dojo/toyohira/">
          ← Back to the list of karate dojos and classes in Toyohira Ward
        </a>
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
