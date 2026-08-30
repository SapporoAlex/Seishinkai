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
      name: "Kikusui Branch",
      address: "Kikusui 3-jo 5-chome, Shiroishi-ku, Sapporo, Arcs Kikusui Store 2F",
      schedule: ["Wednesday class 17:45", "Thursday class 18:45", "Saturday class 13:00"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Kikusui Branch, Shiroishi Ward", "description": "Information on the Seishinkai karate dojo/class at Kikusui, Shiroishi Ward, Sapporo, held on the 2nd floor of the Arcs Kikusui Store. Training days for the Junior Karate class.", "lang": "en", "path": "/en/dojo/kikusui/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation — Kikusui Branch</h1>
      </div>

      <h2 class="detail-page__heading">Kikusui Karate Class, Shiroishi Ward / Seishinkai Kikusui Branch</h2>

      <p class="detail-page__lead">
        The Kikusui Karate Class began activities in March 2011 (Heisei 23), using the 2nd-floor community space at the Arcs Kikusui Store.<br>
        Since its founding, it has run as a Junior Karate class, focused mainly on preschoolers through junior high school students.<br>
        We also welcome parent-child participants and members of our Senior Class.<br>
        While many dojos feel like an extension of school sports-club activities, we aim for karate as health and fitness training — practicing and learning together in a relaxed, club-like atmosphere.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinkai Kikusui Branch", "facts": [
    { label: "Founded", value: "March 2011 (Heisei 23)" },
    { label: "Instructors", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/legacy/dojo/kikusui/acs1.jpg",
    alt: "Arcs Kikusui Store",
    width: 248,
    height: 138
  }, "address": "2-25 Kikusui 3-jo 5-chome, Shiroishi-ku, Sapporo, Arcs Kikusui Store", "mapHref": "https://www.google.com/maps/place/〒003-0803+北海道札幌市白石区菊水３条５丁目２−２５+アークス/@43.0529182,141.3763685,17z/data=!3m1!4b1!4m5!3m4!1s0x5f0b2bd3eb0399f1:0xf3795c85cd820460!8m2!3d43.0529182!4d141.3785572", "mapQuery": "43.0529182,141.3763685" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/dojo/kikusui/Image3.jpg" alt="Kikusui Branch practice session (Wednesday & Thursday classes)" width="251" height="136" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/legacy/dojo/kikusui/Image2.jpg" alt="Kikusui Branch practice session (Saturday class)" width="251" height="137" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/shiroishi/">← Back to the list of dojos & classes in Shiroishi Ward</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Kikusui Branch", "subject": "Kikusui Trial Lesson Application" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/kikusui/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/kikusui/index.astro";
const $$url = "/en/dojo/kikusui";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
