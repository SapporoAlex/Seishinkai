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
      name: "Kimobetsu Karate Club",
      address: "22 Aza Kimobetsu, Kimobetsu Town, Abuta District (Kimobetsu Town Budokan)",
      schedule: ["Thursday 18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes in Kimobetsu Town", "description": "Information on the Seishinkai Karate dojo — Kimobetsu Branch — in Kimobetsu Town, Abuta District, Hokkaido. Training days and venue details.", "lang": "en", "path": "/en/dojo/kimobetsu/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation — Kimobetsu Branch</h1>
      </div>

      <h2 class="detail-page__heading">Kimobetsu Karate Class / Seishinkai Kimobetsu Branch</h2>

      <p class="detail-page__lead">
        The Kimobetsu Karate Club began as a branch of the Shinto Jizen-ryu, a style closely connected
        to Seishin-ryu, and made a fresh start as the Seishinkai Kimobetsu Branch in December 2007 (Heisei
        19).<br>
        The venue is the Kimobetsu Town Budokan.<br>
        The class is centered on Kids and Junior classes. Parent-child participation and Senior Class members
        are also welcome.<br>
        While many dojos feel like an extension of school sports-club activities, we aim for karate as health
        and fitness training — practicing and learning together in a relaxed, club-like atmosphere.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Kimobetsu Branch", "facts": [
    { label: "Founded", value: "December 2007 (Heisei 19)" },
    { label: "Founder", value: "Katsumi Okubo" },
    { label: "In charge", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/legacy/dojo/kimobetsu/2.jpg",
    alt: "Kimobetsu Town Budokan",
    width: 286,
    height: 211
  }, "address": "22 Aza Kimobetsu, Kimobetsu Town, Abuta District, Kimobetsu Town Budokan", "mapHref": "https://www.google.com/maps/place/喜茂別武道館/@42.7988387,140.9335731,15z/data=!4m5!3m4!1s0x0:0x81f4a8b87c2dd038!8m2!3d42.7988387!4d140.9335731", "mapQuery": "42.7988387,140.9335731" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/dojo/kimobetsu/Image1.jpg" alt="Kimobetsu Branch practice session" width="396" height="214" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/legacy/images/Image1.jpg" alt="Seishinkai Karate training session" width="649" height="196" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/legacy/clubu/masuda.jpg" alt="Instructor" width="161" height="161" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※Practice hours are 18:30–19:30 (intermediate level and above until 20:00). 
      </p>

      <p class="detail-page__note">
        ※Fees: Monthly fee ¥2,500~ (Kimobetsu residents). Plus annual dues, etc.
      </p>

      <p class="detail-page__back">
        <a href="/en/dojo/tobetsu/">← Back to the Dojo List</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Kimobetsu Branch", "subject": "Kimobetsu Trial Lesson Application" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/kimobetsu/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/kimobetsu/index.astro";
const $$url = "/en/dojo/kimobetsu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
