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
      name: "Tsukisamu Branch",
      address: "3-21 Tsukisamu-nishi 1-jo 6-chome, Tsukisamu Children's Hall",
      schedule: ["Saturday 18:25"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Tsukisamu Branch, Toyohira Ward", "description": "Introducing the Seishinkai Karate dojo and class in Tsukisamu, Toyohira Ward, Sapporo — one of Seishinkai's most established branch classes. See training days and venue information.", "lang": "en", "path": "/en/dojo/tsukisam-n/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - Tsukisamu Branch</h1>
      </div>

      <h2 class="detail-page__heading">Toyohira Ward Tsukisamu Karate Club - Seishinkai Tsukisamu Branch</h2>

      <p class="detail-page__lead">
        The Tsukisamu-Nishi karate class has been active since March 2010 (Heisei 22), borrowing space at the Tsukisamu Children's Hall; however, the original Tsukisamu branch class it grew out of began in 1993 at the Tsukisamu Goku Kaikan (5th Ward Hall), making it one of Seishinkai's oldest branch classes.<br>
        Since its founding, the class has centered on Junior Karate, with members ranging from preschoolers to junior high schoolers.<br>
        Participation by parents and children together, as well as senior class members, is also welcome.<br>
        While many dojos feel like an extension of a school sports club, this one aims to offer karate for health and fitness that members can enjoy learning in a relaxed, club-like atmosphere.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Tsukisamu Branch", "facts": [
    { label: "Founded", value: "1993" },
    { label: "Established", value: "March 2010" },
    { label: "Founder", value: "Katsumi Okubo" },
    { label: "Former Instructors", value: "Aoki, Tsubasa Okubo, Takigami, Yamane, Masuda" },
    { label: "Current Instructors", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/dojo/img_tsukisam-n_bld.jpg",
    alt: "Tsukisamu Children's Hall",
    width: 226,
    height: 162
  }, "address": "3-21 Tsukisamu-nishi 1-jo 6-chome, Toyohira-ku, Sapporo, Tsukisamu Children's Hall", "mapHref": "https://www.google.com/maps/place/月寒児童会館/@43.031183,141.3936968,15z/data=!4m2!3m1!1s0x0:0xc25e49e9c2bfeaaf", "mapQuery": "43.031183,141.3936968" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_tsukisam-n_01.jpg" alt="Training session at the Tsukisamu Branch" width="315" height="141" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_tsukisam-n_02.jpg" alt="Training session at the Tsukisamu Branch" width="315" height="141" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_tsukisam-n_03.jpg" alt="Training session at the Tsukisamu Branch" width="315" height="141" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_tsukisam-n_04.jpg" alt="Training session at the Tsukisamu Branch" width="315" height="141" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/toyohira/">← Back to the Toyohira Ward dojo & class list</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Tsukisamu Branch", "subject": "Tsukisamu Trial Lesson & Enrollment Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/tsukisam-n/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/tsukisam-n/index.astro";
const $$url = "/en/dojo/tsukisam-n";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
