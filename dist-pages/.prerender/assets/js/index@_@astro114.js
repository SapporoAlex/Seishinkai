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
      name: "Fukuzumi Branch",
      address: "5-5 Fukuzumi 1-jo 1-chome, Fukuzumi Children's Hall",
      schedule: ["Wednesday 18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Fukuzumi Branch, Toyohira Ward", "description": "Introducing the Seishinkai Karate dojo and class in Fukuzumi, Toyohira Ward, Sapporo. A junior-centered karate club — see training days and venue information.", "lang": "en", "path": "/en/dojo/fukuzumi/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - Fukuzumi Branch</h1>
      </div>

      <h2 class="detail-page__heading">Toyohira Ward Fukuzumi Karate Club - Seishinkai Fukuzumi Branch</h2>

      <p class="detail-page__lead">
        The Fukuzumi karate class got its start in September 2010 (Heisei 22), borrowing space at the Fukuzumi Children's Hall.<br>
        Since its founding, the class has centered on Junior Karate, with members ranging from preschoolers to junior high schoolers.<br>
        Participation by parents and children together, as well as senior class members, is also welcome.<br>
        While many dojos feel like an extension of a school sports club, this one aims to offer karate for health and fitness that members can enjoy learning in a relaxed, club-like atmosphere.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinkai Fukuzumi Branch / Fukuzumi Karate Club", "facts": [
    { label: "Founded", value: "September 2010 (Heisei 22)" },
    { label: "Past instructors", value: "Koyano, Muroki, Takashima" },
    { label: "Instructor", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/dojo/img_fukuzumi_bld.jpg",
    alt: "Fukuzumi Children's Hall",
    width: 262,
    height: 174
  }, "address": "5-5 Fukuzumi 1-jo 1-chome, Toyohira-ku, Sapporo, Fukuzumi Children's Hall", "mapHref": "https://www.google.com/maps/place/福住児童会館/@43.020565,141.402402,15z/data=!4m5!3m4!1s0x0:0x749365fd7c50d1bf!8m2!3d43.020565!4d141.402402", "mapQuery": "43.020565,141.402402" })}

      <p class="detail-page__note">
        ※Temporary venue: Arcs Tsukisamu-higashi, 1-30 Tsukisamu-higashi 3-jo 8-chome
      </p>

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_fukuzumi_01.jpg" alt="Training session at the Fukuzumi Branch" width="308" height="189" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_fukuzumi_02.jpg" alt="Training session at the Fukuzumi Branch" width="308" height="189" loading="lazy">
        </figure>
      </div>


      <p class="detail-page__back">
        <a href="/en/dojo/toyohira/">← Back to the Toyohira Ward dojo & class list</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Fukuzumi Branch", "subject": "Fukuzumi Trial Lesson Application" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/fukuzumi/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/fukuzumi/index.astro";
const $$url = "/en/dojo/fukuzumi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
