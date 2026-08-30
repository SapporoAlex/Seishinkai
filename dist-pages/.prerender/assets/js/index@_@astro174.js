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
      name: "Takuhoku Karate Club (Takuhoku Branch)",
      address: "Takuhoku Palace Kaikan, Takuhoku 3-jo 4-chome 1-6, Kita-ku, Sapporo",
      schedule: ["Thursday 18:30 (changed from Wednesday since February)"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Takuhoku Branch, Kita Ward", "description": "Introducing the Takuhoku Branch of Seishinkai Karate at Takuhoku Palace Kaikan in Kita Ward, Sapporo. A Kids & Junior karate class meeting Thursdays at 6:30 PM — see training days and venue information.", "lang": "en", "path": "/en/dojo/takuhoku/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - Takuhoku Branch</h1>
      </div>

      <h2 class="detail-page__heading">Kita Ward Takuhoku Karate Club - Seishinkai Takuhoku Branch</h2>

      <p class="detail-page__lead">
        The Takuhoku karate class has been active since October 2011 (Heisei 23).<br>
        It is a karate club centered on Kids Karate, Junior Karate, and Parent-Child Karate.<br>
        Participation by parents and children together, as well as senior class members, is especially welcome.<br>
        While many dojos feel like an extension of a school sports club, this one aims to offer karate for health and fitness that members can enjoy learning in a relaxed, club-like atmosphere.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinkai Takuhoku Branch", "facts": [
    { label: "Founded", value: "October 2011 (Heisei 23)" },
    { label: "Founder", value: "Tsubasa Nimori" }
  ], "image": {
    src: "/assets/images/legacy/dojo/takuhoku/2.jpg",
    alt: "Takuhoku Palace Kaikan",
    width: 282,
    height: 216
  }, "address": "1-6 Takuhoku 3-jo 4-chome, Kita-ku, Sapporo, Takuhoku Palace Kaikan", "mapHref": "https://www.google.com/maps/place/〒002-8063+北海道札幌市北区拓北３条４丁目１-６+拓北パレス会館/data=!4m2!3m1!1s0x5f0b257b99a36f59:0x21b6e335d1d712a5?sa=X&ved=2ahUKEwjcw-7h4LHhAhXFMN4KHVbxAM4Q8gEwAHoECAYQAQ", "mapQuery": "Takuhoku Palace Kaikan, 1-6 Takuhoku 3-jo 4-chome, Kita-ku, Sapporo" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/dojo/takuhoku/Image1.jpg" alt="Training session at the Takuhoku Branch" width="276" height="150" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※Training was originally held on Wednesdays, but changed to Thursday 18:30 in February due to scheduling at Takuhoku Kaikan.
      </p>

      <p class="detail-page__back">
        <a href="/en/dojo/kita/">← Back to the Kita Ward dojo & class list</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Takuhoku Branch", "subject": "Takuhoku Branch Trial Lesson / Enrollment Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/takuhoku/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/takuhoku/index.astro";
const $$url = "/en/dojo/takuhoku";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
