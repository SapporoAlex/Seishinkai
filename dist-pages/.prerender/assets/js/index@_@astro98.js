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
      name: "Ainosato Karate Club",
      address: "Takuhoku Kaikan, Ainosato 4-jo 6-chome, Kita-ku, Sapporo",
      schedule: ["Thursday 18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Ainosato Branch, Kita Ward", "description": "Introducing the Ainosato Branch of Seishinkai Karate at Takuhoku Kaikan in Kita Ward, Sapporo. A Kids & Junior karate class meeting Thursdays at 6:30 PM — see training days and venue information.", "lang": "en", "path": "/en/dojo/ainosato/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - Ainosato Branch</h1>
      </div>

      <h2 class="detail-page__heading">Kita Ward Ainosato Karate Club - Seishinkai Ainosato Branch</h2>

      <p class="detail-page__lead">
        The Ainosato karate class has been active since March 2009 (Heisei 21).<br>
        It is a karate club centered on Kids Karate, Junior Karate, and Parent-Child Karate.<br>
        Participation by parents and children together, as well as senior class members, is especially welcome.<br>
        While many dojos feel like an extension of a school sports club, this one aims to offer karate for health and fitness that members can enjoy learning in a relaxed, club-like atmosphere.<br>
        It originally began its activities at the Ainosato Children's Hall, and is now based at Takuhoku Kaikan in Ainosato.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Ainosato Branch", "facts": [
    { label: "Founded", value: "March 2009 (Heisei 21)" },
    { label: "Founder", value: "Takushi Muroki" },
    { label: "Instructors", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/dojo/img_ainosato_bld.jpg",
    alt: "Takuhoku Kaikan",
    width: 455,
    height: 305
  }, "mapHref": "https://www.google.com/maps/place/拓北会館/@43.164024,141.403793,15z/data=!4m5!3m4!1s0x0:0x63d720b3ff077d1d!8m2!3d43.164024!4d141.403793", "mapQuery": "43.164024,141.403793" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_ainosato_01.jpg" alt="Training session at the Ainosato Branch" width="426" height="248" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_ainosato_02.jpg" alt="Takuhoku Kaikan" width="455" height="305" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/kita/">← Back to the Kita Ward dojo & class list</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Ainosato Branch", "subject": "Ainosato Branch Trial Lesson / Enrollment Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/ainosato/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/ainosato/index.astro";
const $$url = "/en/dojo/ainosato";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
