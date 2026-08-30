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
      name: "Akashia Karate Club (Akashia Branch)",
      address: "Akashia Youth Activity Center, Kita 22-jo Higashi 1-chome 1-20, Higashi-ku, Sapporo",
      schedule: ["Thursday 16:00-17:00"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Akashia Branch, Higashi Ward", "description": "Introducing the Akashia Branch, a Seishinkai Karate dojo in Kita 22-jo, Higashi Ward, Sapporo. Training is held on Thursdays at the Akashia Youth Activity Center.", "lang": "en", "path": "/en/dojo/akashia/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate-do Federation — Akashia Branch</h1>
      </div>

      <h2 class="detail-page__heading">Akashia Karate Class, Seishinkai Akashia Branch, Higashi Ward</h2>

      <p class="detail-page__lead">
        The Sapporo Higashi Akashia Karate Class started in June 2018 (Heisei 30) at the Akashia Youth Activity Center.<br>
        It sits near Ishikari Kaido, the boundary between Higashi Ward and Kita Ward, making it easy to reach for residents of both areas.<br>
        It centers on Kids and Junior classes, and also welcomes participation from parents and children together, and from the Senior Class.<br>
        While many dojos feel like an extension of school sports clubs, we aim to make karate an enjoyable, club-like experience centered on health and fitness.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Higashi Ward — Akashia Branch", "facts": [
    { label: "Founded", value: "June 2018 (Heisei 30)" },
    { label: "Founder", value: "Taku Muroki" },
    {
      label: "Person in Charge",
      value: "Headquarters-run"
    }
  ], "image": {
    src: "/assets/images/legacy/dojo/akashia/2.jpg",
    alt: "Akashia Youth Activity Center",
    width: 224,
    height: 168
  }, "mapHref": "http://yahoo.jp/-j3unj", "mapQuery": "Akashia Youth Activity Center, Kita 22-jo Higashi 1-chome 1-20, Higashi-ku, Sapporo" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/dojo/akashia/Image1.jpg" alt="Practice session at the Akashia Branch" width="327" height="207" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        <img src="/assets/images/legacy/images/Image1_akashia_wide.jpg" alt="Akashia Youth Activity Center" width="649" height="196" loading="lazy">
      </p>

      <p class="detail-page__back">
        <a href="/en/dojo/higashi/">← Back to the Higashi Ward Dojo & Class List</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Akashia Branch", "subject": "Akashia Trial Application" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/akashia/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/akashia/index.astro";
const $$url = "/en/dojo/akashia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
