import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';
import { $ as $$BranchTable } from './BranchTable.js';
import { $ as $$BranchInfoCard } from './BranchInfoCard.js';
import { $ as $$DojoContactSection } from './DojoContactSection.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const entries = [
    {
      marker: "#",
      name: "Minami-ku Tokiwa Karate Class (Seishinkai Tokiwa Branch)",
      sub: "Tokiwa Karate Club",
      address: "1-jo 1-chome 3-1 Tokiwa, Minami-ku, Sapporo, Tokiwa Danchi Hall",
      schedule: ["Monday 4:30-5:30 PM"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Minami-ku Tokiwa Branch", "description": "Introducing the Seishinkai karate class at the Tokiwa Danchi Hall in Minami-ku, Sapporo. Focused on kids and junior karate, with training days and venue information.", "lang": "en", "path": "/en/dojo/tokiwa/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - Tokiwa Branch</h1>
      </div>

      <h2 class="detail-page__heading">Minami-ku Tokiwa Karate Class - Seishinkai Tokiwa Branch</h2>

      <p class="detail-page__lead">
        The Tokiwa Karate Class started in September 2012 (Heisei 24). It began at the neighborhood hall, later moved to the Tokiwa Children's Hall, and has since returned to holding activities at the Tokiwa Danchi Hall (from April 2020, Reiwa 2).<br>
        As a kids' and junior karate class, we would like to focus mainly on children from preschool age through junior high school. We are currently recruiting trial students!<br>
        Participation by parents and children together, and by senior members, is also welcome.<br>
        While many dojos feel like an extension of school sports clubs, we aim for members to practice and learn in a relaxed, club-like atmosphere as health-oriented, physical-education-style karate.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinkai Tokiwa Branch / Tokiwa Karate Club", "facts": [
    { label: "Founded", value: "September 2012 (Heisei 24)" },
    { label: "Founder", value: "Takushi Muroki (2012-2020)" },
    { label: "Past instructors", value: ["Yutaka Yamane (2013-2014)", "Yoshihiko Oikawa (2020-2022)"] },
    { label: "Instructor", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/legacy/dojo/tokiwa/img2.jpg",
    alt: "Tokiwa Danchi Hall",
    width: 259,
    height: 161
  }, "address": "2-jo 2-chome 17-23 Tokiwa, Minami-ku, Sapporo, Tokiwa Children's Hall", "mapHref": "https://www.google.com/maps/place/常盤児童会館/@42.948119,141.347944,15z/data=!4m5!3m4!1s0x0:0xd28fbfc8404d010!8m2!3d42.948119!4d141.347944", "mapQuery": "42.948119,141.347944" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/dojo/tokiwa/acs1.jpg" alt="Tokiwa Branch practice session" width="316" height="194" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※<br>
        ※Due to the impact of COVID-19, the venue was temporarily moved to the following location: 1-jo 1-chome 3-1 Tokiwa, Minami-ku <a href="https://www.google.com/maps/place/〒005-0851+北海道札幌市南区常盤１条１丁目３−１+常盤団地会館/@42.955108,141.344939,17z/data=!3m1!4b1!4m5!3m4!1s0x5f752b30e3655f31:0x43a4187663d955fc!8m2!3d42.9551041!4d141.3471277" target="_blank" rel="noopener">Tokiwa Danchi Hall</a>
      </p>

      <p class="detail-page__back">
        <a href="/en/dojo/minami-kiyota/">← Back to the Kiyota Ward & Minami Ward Dojo & Class List</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Tokiwa Branch", "subject": "Tokiwa Branch Trial Lesson / Enrollment Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/tokiwa/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/tokiwa/index.astro";
const $$url = "/en/dojo/tokiwa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
