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
      name: "Ishikari Hanakawa Karate Club (Hanakawa Branch)",
      address: "Hanakawa-Kita Community Center, Ishikari (formerly: Hanakawa-Minami Community Center)",
      schedule: ["Tuesday 16:30–17:30 (from April 2024 / Reiwa 6)"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Hanakawa Branch, Ishikari City", "description": "Information on the Seishinkai karate dojo/classes at Hanakawa-Minami and Hanakawa-Kita, Ishikari City. A junior-focused karate club — details on training days and venue.", "lang": "en", "path": "/en/dojo/hana-m/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation — Hanakawa Branch</h1>
      </div>

      <h2 class="detail-page__heading">Ishikari Hanakawa Karate Club / Seishinkai Hanakawa Branch</h2>

      <p class="detail-page__lead">
        The Hanakawa-Minami Karate Class was founded in June 2014 (Heisei 26), using the Hanakawa-Minami Community Center as its venue.<br>
        ※Since July 2021 (Reiwa 3), as the Hanakawa-Minami Community Center has been unavailable due to serving as a vaccination site, the venue has been changed to the Hanakawa-Kita Community Center.<br>
        It is a karate club focused mainly on the Junior Class.<br>
        We especially welcome parent-child participants and members of our Senior Class.<br>
        While many dojos feel like an extension of school sports-club activities, we aim for karate as health and fitness training — practicing and learning together in a relaxed, club-like atmosphere.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Hanakawa Branch", "facts": [
    { label: "Founded", value: "June 2014 (Heisei 26)" },
    { label: "Instructor", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/legacy/dojo/hana-m/2.jpg",
    alt: "Hanakawa-Minami Community Center",
    width: 251,
    height: 198
  }, "address": "6-5 Hanakawa-Minami, Ishikari, Hanakawa-Minami Community Center", "mapHref": "https://www.google.com/maps/place/〒061-3206+北海道石狩市花川南６条５丁目２７−２/@43.1406157,141.291549,17z/data=!3m1!4b1!4m5!3m4!1s0x5f0b267a656101db:0xeda52c8f8822b8eb!8m2!3d43.1406157!4d141.2937377", "mapQuery": "43.1406157,141.291549" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/dojo/hana-m/Image1.jpg" alt="Hanakawa Branch practice session" width="271" height="152" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/ebetsu/">← Back to the list of dojos & classes in Ebetsu, Iwamizawa & Ishikari</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Hanakawa Branch", "subject": "Hanakawa-Minami Trial Lesson Application" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/hana-m/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/hana-m/index.astro";
const $$url = "/en/dojo/hana-m";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
