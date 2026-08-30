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
      name: "Satsunae Karate Club",
      address: "Satsunae-Moere Community Center, Higashi-Naebo 7-jo 2-chome 2-30, Higashi-ku, Sapporo",
      schedule: ["Wednesday 18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Satsunae Branch, Higashi Ward", "description": "Introducing the Satsunae Karate Club, a Seishinkai Karate dojo in Higashi-Naebo, Higashi Ward, Sapporo. Training is held on Wednesdays at the Satsunae-Moere Community Center.", "lang": "en", "path": "/en/dojo/h-naebo/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate-do Federation — Satsunae Branch</h1>
      </div>

      <h2 class="detail-page__heading">Satsunae Karate Class, Seishinkai Satsunae Branch, Higashi Ward</h2>

      <p class="detail-page__lead">
        The Satsunae Karate Class has been active since July 2010 (Heisei 22), using the Satsunae-Moere Community Center as its venue.<br>
        As a Kids Karate and Junior Karate class, we focus on students from preschool through junior high school age. We are currently recruiting trial participants!<br>
        We also welcome participation from parents and children together, and from the Senior Class.<br>
        While many dojos feel like an extension of school sports clubs, we aim to make karate an enjoyable, club-like experience centered on health and fitness.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      <!-- SATSUNAE FOLDER -->
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinkai Satsunae Branch", "facts": [
    { label: "Founded", value: "July 2010 (Heisei 22)" },
    { label: "Founder", value: "Takayuki Inomata" },
    { label: "Instructor", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/dojo/img_satsunae_bld.jpg",
    alt: "Satsunae-Moere Community Center",
    width: 176,
    height: 118
  }, "address": "Satsunae-Moere Community Center, Higashi-Naebo 7-jo 2-chome 2-30, Higashi-ku, Sapporo", "mapHref": "https://www.google.com/maps/place/札幌市東区札苗まちづくりセンター/@43.093113,141.4112141,15z/data=!4m2!3m1!1s0x0:0xa7db2c47df5aaf59?sa=X&ved=2ahUKEwjBv9Kwp7HhAhUwEqYKHS_gANUQ_BIwCnoECAoQCA", "mapQuery": "43.093113,141.4112141" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_satsunae_01.jpg" alt="Practice session at the Satsunae Branch" width="315" height="141" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_satsunae_02.jpg" alt="Practice session at the Satsunae Branch" width="315" height="141" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/higashi/">← Back to the Higashi Ward Dojo & Class List</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Satsunae Branch", "subject": "Satsunae Trial Application" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/h-naebo/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/h-naebo/index.astro";
const $$url = "/en/dojo/h-naebo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
