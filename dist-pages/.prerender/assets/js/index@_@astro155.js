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
      name: "Naganuma Karate Club",
      address: "Chuo-Minami 2-chome, Naganuma Town (Naganuma Sports Center)",
      schedule: ["Tuesday 18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes in Naganuma Town", "description": "Information on the Seishinkai Karate dojo — Naganuma Branch — in Naganuma Town, Hokkaido. Training days and venue details.", "lang": "en", "path": "/en/dojo/naganuma/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation — Naganuma Branch</h1>
      </div>

      <h2 class="detail-page__heading">Naganuma Karate Class / Seishinkai Naganuma Branch</h2>

      <p class="detail-page__lead">
        The Naganuma Karate Class was started in August 2011 (Heisei 23) by a member living in Naganuma
        Town who had been commuting to the Kita-Hiroshima Branch, and who gathered fellow members to form
        the class.<br>
        The venue is the Naganuma Sports Center.<br>
        The class is centered on Kids and Junior classes. Parent-child participation and Senior Class members
        are also welcome.<br>
        While many dojos feel like an extension of school sports-club activities, we aim for karate as health
        and fitness training — practicing and learning together in a relaxed, club-like atmosphere.<br>
        ※For 3-year-old preschoolers attending with a parent, the monthly fee is free.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Naganuma Branch", "facts": [
    { label: "Founded", value: "August 2011 (Heisei 23)" },
    { label: "Founder", value: "Akiko Furudate" },
    { label: "Instructors in charge", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/legacy/dojo/naganuma/2.jpg",
    alt: "Naganuma Sports Center",
    width: 200,
    height: 131
  }, "address": "Chuo-Minami 2-chome, Naganuma Town, Naganuma Sports Center", "mapHref": "https://www.google.com/maps/place/長沼町スポーツセンター/@43.007859,141.69233,15z/data=!4m2!3m1!1s0x0:0xc6cede9b78bc4cf5", "mapQuery": "43.007859,141.69233" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/dojo/naganuma/Image1.jpg" alt="Naganuma Branch practice session" width="237" height="124" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/legacy/images/Image1.jpg" alt="Seishinkai Karate training session" width="649" height="196" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※As this is a headquarters-run class, multiple instructors rotate in on a shared basis.
      </p>

      <p class="detail-page__back">
        <a href="/en/dojo/tobetsu/">← Back to the Dojo List</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Naganuma Branch", "subject": "Naganuma Trial Lesson Application" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/naganuma/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/naganuma/index.astro";
const $$url = "/en/dojo/naganuma";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
