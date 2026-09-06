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
      name: "Toyohira Park Branch",
      address: "Toyohira 8-jo 11-chome, Toyohira-ku, Toyohira Youth Activity Center",
      schedule: ["Friday 16:00"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Toyohira Park Branch, Toyohira Ward", "description": "Introducing the Seishinkai Karate dojo and class held at the Toyohira Youth Activity Center in Toyohira Ward, Sapporo. A junior-centered karate club — see training days and venue information.", "lang": "en", "path": "/en/dojo/toyohira-k/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - Toyohira Park Branch</h1>
      </div>

      <h2 class="detail-page__heading">Toyohira Park Karate Club - Seishinkai Toyohira Park Branch</h2>

      <p class="detail-page__lead">
        The Toyohira Park karate class got its start in June 2015 (Heisei 27), borrowing space at the Toyohira Youth Activity Center.<br>
        Since its founding, the class has centered on Junior Karate, with members ranging from preschoolers to junior high schoolers.<br>
        Participation by parents and children together, as well as senior class members, is also welcome.<br>
        While many dojos feel like an extension of a school sports club, this one aims to offer karate for health and fitness that members can enjoy learning in a relaxed, club-like atmosphere.<br>
        ※The Youth Activity Center will be closed for renovation work from July through the end of October 2025 (Reiwa 7); during that period, training will be held at the <a href="/en/dojo/hq/">Headquarters</a> Dojo.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Toyohira Park Branch", "facts": [
    { label: "Established", value: "June 2015" },
    { label: "Former Instructors", value: "Oikawa, Shima" },
    { label: "Current Instructors", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/dojo/img_toyohira-k_bld.jpg",
    alt: "Toyohira Youth Activity Center",
    width: 236,
    height: 176
  }, "address": "3-5 Toyohira 8-jo 11-chome, Toyohira Youth Activity Center", "mapHref": "https://www.google.com/maps/place/札幌市豊平若者活動センター/@43.0430538,141.3731148,15z/data=!4m2!3m1!1s0x0:0x8c7de2009ed78c7a", "mapQuery": "43.0430538,141.3731148" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_toyohira-k_01.jpg" alt="Training session at the Toyohira Park Branch" width="282" height="162" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_toyohira-k_02.jpg" alt="Training session at the Toyohira Park Branch" width="282" height="162" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_toyohira-k_03.jpg" alt="Training session at the Toyohira Park Branch" width="282" height="162" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_toyohira-k_04.jpg" alt="Training session at the Toyohira Park Branch" width="282" height="162" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/toyohira/">← Back to the Toyohira Ward dojo & class list</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Toyohira Park Branch", "subject": "Toyohira Park Branch Trial Lesson & Enrollment Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/toyohira-k/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/toyohira-k/index.astro";
const $$url = "/en/dojo/toyohira-k";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
