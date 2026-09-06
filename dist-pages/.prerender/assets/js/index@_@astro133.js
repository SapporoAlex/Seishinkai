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
      name: "Iwamizawa Karate Club",
      address: "4-jo Nishi 1-chome, Iwamizawa, Iwamizawa Lifelong Learning Center",
      schedule: ["Monday 18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes in Iwamizawa City", "description": "Information on the Seishinkai karate dojo/class in Iwamizawa City. A junior-focused karate club held at the Iwamizawa Lifelong Learning Center — details on training days and venue.", "lang": "en", "path": "/en/dojo/iwamizawa/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation — Iwamizawa Branch</h1>
      </div>

      <h2 class="detail-page__heading">Iwamizawa Karate Class / Seishinkai Iwamizawa Branch</h2>

      <p class="detail-page__lead">
        The Iwamizawa Karate Class was founded in March 2005 (Heisei 17) by Shihan Ishimori, upon his retirement from Iwamizawa City Hall.<br>
        It is a karate club focused mainly on the Junior Class.<br>
        We especially welcome parent-child participants and members of our Senior Class.<br>
        While many dojos feel like an extension of school sports-club activities, we aim for karate as health and fitness training — practicing and learning together in a relaxed, club-like atmosphere.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Iwamizawa Branch / Iwamizawa Karate Club", "facts": [
    { label: "Founded", value: "March 2005 (Heisei 17)" },
    { label: "Founder", value: "Tadayuki Ishimori" }
  ], "image": {
    src: "/assets/images/dojo/img_iwamizawa_bld.jpg",
    alt: "Iwamizawa Lifelong Learning Center",
    width: 270,
    height: 190
  }, "address": "4-jo Nishi 1-chome, Iwamizawa, Iwamizawa Lifelong Learning Center", "mapHref": "https://www.google.com/maps/place/岩見沢市+生涯学習センターいわなび/@43.2028905,141.7662754,15z/data=!4m5!3m4!1s0x0:0x43bfeebd5643c2e9!8m2!3d43.2028905!4d141.7662754", "mapQuery": "43.2028905,141.7662754" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_iwamizawa_01.jpg" alt="" width="142" height="142" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_iwamizawa_02.jpg" alt="" width="142" height="142" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_iwamizawa_03.jpg" alt="" width="142" height="142" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_iwamizawa_04.jpg" alt="" width="142" height="142" loading="lazy">
        </figure>
      </div>

      <section class="partner-section">
        <h2 class="detail-page__heading">Watch the Iwamizawa Branch on YouTube</h2>

        <div class="youtube-grid">
          <a class="youtube-card" href="https://www.youtube.com/watch?v=JVp0_WWPIQs" target="_blank" rel="noopener">
            <span class="youtube-card__thumb">
              <img src="/assets/images/legacy/dojo/iwamizawa/Image1.jpg" alt="Iwamizawa Branch practice session (YouTube)" loading="lazy">
            </span>
            <span>Iwamizawa Branch practice session</span>
          </a>
        </div>
      </section>

      <p class="detail-page__back">
        <a href="/en/dojo/ebetsu/">← Back to the list of dojos & classes in Ebetsu, Iwamizawa & Ishikari</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Iwamizawa Branch", "subject": "Iwamizawa Trial Lesson Application" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/iwamizawa/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/iwamizawa/index.astro";
const $$url = "/en/dojo/iwamizawa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
