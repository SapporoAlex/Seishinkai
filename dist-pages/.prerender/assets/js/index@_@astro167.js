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
      name: "Shinoro Karate Club",
      address: "Shinoro Community Center 2F, Shinoro 3-jo 8-chome, Kita-ku, Sapporo",
      schedule: ["Saturday 13:30", "Thursday 15:50"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Shinoro Branch, Kita Ward", "description": "Introducing the Shinoro Branch of Seishinkai Karate at Shinoro Community Center in Kita Ward, Sapporo. A Kids & Junior karate class training on Saturdays and Thursdays — see training days and venue information.", "lang": "en", "path": "/en/dojo/shinoro/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - Shinoro Branch</h1>
      </div>

      <h2 class="detail-page__heading">Kita Ward Shinoro Karate Club - Seishinkai Shinoro Branch</h2>

      <p class="detail-page__lead">
        The Shinoro karate class got its start in July 2008 (Heisei 20), borrowing space at Shinoro Community Center.<br>
        It is a karate club centered on Kids Karate, Junior Karate, and Parent-Child Karate.<br>
        Participation by parents and children together, as well as senior class members, is especially welcome.<br>
        While many dojos feel like an extension of a school sports club, this one aims to offer karate for health and fitness that members can enjoy learning in a relaxed, club-like atmosphere.<br>
        Since April 2025 (Reiwa 7), a new Kids Class has been added on Thursday evenings.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Shinoro Branch", "facts": [
    { label: "Founded", value: "July 2008 (Heisei 20)" },
    { label: "Founder", value: "Takushi Muroki" },
    { label: "Instructor", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/dojo/img_shinoro_bld.jpg",
    alt: "Shinoro Community Center",
    width: 282,
    height: 245
  }, "address": "11-1 Shinoro 3-jo 8-chome, Kita-ku, Sapporo, Shinoro Community Center 2F", "mapHref": "https://www.google.com/maps/place/札幌市篠路コミュニティセンター/@43.1431773,141.367712,15z/data=!4m2!3m1!1s0x0:0x4aaefe8a200690fe?sa=X&ved=2ahUKEwjf6on517HhAhWCAYgKHV-_BqEQ_BIwCnoECAcQCA", "mapQuery": "43.1431773,141.367712" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_shinoro_01.jpg" alt="Training session at the Shinoro Branch" width="353" height="191" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_shinoro_02.jpg" alt="Training session at the Shinoro Branch" width="353" height="191" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_shinoro_03.jpg" alt="Training session at the Shinoro Branch" width="353" height="191" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_shinoro_04.jpg" alt="Training session at the Shinoro Branch" width="353" height="191" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※Thursday class 15:50–16:50, Saturday class 13:30–14:30.
      </p>

      <p class="detail-page__back">
        <a href="/en/dojo/kita/">← Back to the Kita Ward dojo & class list</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Shinoro Branch", "subject": "Shinoro Branch Trial Lesson / Enrollment Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/shinoro/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/shinoro/index.astro";
const $$url = "/en/dojo/shinoro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
