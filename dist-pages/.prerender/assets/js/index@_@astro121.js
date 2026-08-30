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
      name: "Heiwadori Branch",
      address: "Heiwadori 3-chome-kita, Shiroishi-ku, Sapporo, Super Arcs Shiroishi Store 2F",
      schedule: ["Thursday 16:00"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Heiwadori Branch, Shiroishi Ward", "description": "Information on the Seishinkai karate dojo/class at Heiwadori, Shiroishi Ward, Sapporo. A Junior Karate class held on the 2nd floor of the Super Arcs Shiroishi Store.", "lang": "en", "path": "/en/dojo/heiwa/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation — Heiwadori Branch</h1>
      </div>

      <h2 class="detail-page__heading">Heiwadori Karate Class, Shiroishi Ward / Seishinkai Heiwadori Branch</h2>

      <p class="detail-page__lead">
        The Heiwadori Karate Class began activities in March 2010 (Heisei 22), using the 2nd-floor community space at the Big House Heiwadori store.<br>
        Since its founding, it has run as a Junior Karate class, focused mainly on preschoolers through junior high school students.<br>
        Because it's inside the Big House store, parents can go shopping while their children practice, which is very convenient.<br>
        We also welcome parent-child participants and members of our Senior Class.<br>
        While many dojos feel like an extension of school sports-club activities, we aim for karate as health and fitness training — practicing and learning together in a relaxed, club-like atmosphere.<br>
        ※Since June 2023 (Reiwa 5), the Big House Shiroishi store has been renamed the "Super Arcs Shiroishi Store."
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinkai Heiwadori Branch / Heiwadori Karate Club", "facts": [
    { label: "Founded", value: "March 2010 (Heisei 22)" },
    { label: "Founder", value: "Kayoko Mimura" },
    { label: "Past instructors", value: "Hashini, Daniela, Yuka Takigami, Takashima" },
    { label: "Instructor", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/dojo/img_heiwa_bld.jpg",
    alt: "Super Arcs Shiroishi Store",
    width: 306,
    height: 183
  }, "address": "3-1-1 Heiwadori 3-chome-kita, Shiroishi-ku, Sapporo, Super Arcs Shiroishi Store 2F", "mapHref": "https://www.google.com/maps/place/ビッグハウス+白石店/@43.0514733,141.4108608,17z/data=!4m12!1m6!3m5!1s0x0:0x1e4ad42edd7757dc!2z44Ot44O844K944OzIOacreW5jOW5s-WSjOmAmu-8k-S4geebruW6lw!8m2!3d43.054403!4d141.412858!3m4!1s0x5f0b2beabe8e7a11:0xfbbe7e25dacb240d!8m2!3d43.0523841!4d141.4118193", "mapQuery": "43.0514733,141.4108608" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_heiwa_01.jpg" alt="Heiwadori Branch practice session" width="335" height="203" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_heiwa_02.jpg" alt="Heiwadori Branch practice session" width="335" height="203" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/shiroishi/">← Back to the list of dojos & classes in Shiroishi Ward</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Heiwadori Branch", "subject": "Heiwadori Trial Lesson Application" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/heiwa/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/heiwa/index.astro";
const $$url = "/en/dojo/heiwa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
