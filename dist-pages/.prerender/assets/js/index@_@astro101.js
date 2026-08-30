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
      name: "Asahikawa Karate Club for Foreign Residents",
      address: "Asahikawa City (venue being arranged)",
      schedule: ["TBD (currently recruiting members)"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes for Foreign Residents in Asahikawa City", "description": "A Seishinkai Karate club exclusively for foreign residents living in Asahikawa. Currently recruiting members — classes will begin once preparations are complete.", "lang": "en", "path": "/en/dojo/asahikawa/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation — Asahikawa Karate Club for Foreign Residents</h1>
      </div>

      <h2 class="detail-page__heading">Asahikawa Karate Class for Foreign Residents — Seishinkai Asahikawa Branch</h2>

      <p class="detail-page__lead">
        In preparation<br>
        We are preparing a karate club exclusively for foreign residents living in Asahikawa.<br>
        If you are interested, please let us know.<br>
        It will start as soon as enough members have gathered.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Asahikawa Karate Club for Foreign Residents", "facts": [
    { label: "Founder", value: "Shogo Inoue" },
    { label: "Facebook", value: "Shogo Inoue" }
  ] })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/membership/foreign-trainees/foreign-trainees_01.jpeg" alt="Asahikawa Karate Club for Foreign Residents" width="353" height="276" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/membership/foreign-trainees/foreign-trainees_03.jpg" alt="Asahikawa Karate Club for Foreign Residents" width="353" height="276" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/kitahiro/">← Back to the list of dojos & classes in Obihiro, Eniwa & Asahikawa</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Asahikawa Karate Club for Foreign Residents", "subject": "Asahikawa Karate Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/asahikawa/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/asahikawa/index.astro";
const $$url = "/en/dojo/asahikawa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
