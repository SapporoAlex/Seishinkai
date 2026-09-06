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
      name: "Nopporo Karate Club",
      address: "23-6 Nopporo-tondencho, Ebetsu, Morinodai Memorial Hall",
      schedule: ["Wednesday 18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes in Nopporo, Ebetsu City", "description": "Information on the Seishinkai karate dojo/class in Nopporo, Ebetsu City. A junior-focused karate club held at the Morinodai Memorial Hall — details on training days and venue.", "lang": "en", "path": "/en/dojo/nop/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation — Nopporo Branch</h1>
      </div>

      <h2 class="detail-page__heading">Nopporo Karate Class, Ebetsu City / Seishinkai Nopporo Branch</h2>

      <p class="detail-page__lead">
        The Nopporo Karate Class started in October 2007 (Heisei 19) at the Morinodai Memorial Hall, along Sanban-dori in Ebetsu.<br>
        It is a karate club focused mainly on the Junior Class.<br>
        We especially welcome parent-child participants and members of our Senior Class.<br>
        While many dojos feel like an extension of school sports-club activities, we aim for karate as health and fitness training — practicing and learning together in a relaxed, club-like atmosphere.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Nopporo Branch, Ebetsu City", "facts": [
    { label: "Founded", value: "October 2007 (Heisei 19)" },
    { label: "Founder", value: "Takayuki Inomata" },
    { label: "Past instructors", value: "Tsubasa Okubo, Kazuya Shima, and others, Saori Okimura" },
    { label: "Instructor", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/dojo/img_nop_bld.jpg",
    alt: "Morinodai Memorial Hall",
    width: 192,
    height: 100
  }, "address": "23-6 Nopporo-tondencho, Ebetsu, Morinodai Memorial Hall 2F", "addressNote": "Located along Sanban-dori.", "mapHref": "https://www.google.com/maps/place/〒069-0803+北海道江別市野幌屯田町２３−６/@43.0969071,141.5075755,17z/data=!3m1!4b1!4m5!3m4!1s0x5f0b2dee41c4efab:0x240f6398f59169be!8m2!3d43.0969071!4d141.5097642", "mapQuery": "43.0969071,141.5075755" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_nop_01.jpg" alt="Nopporo Branch practice session" width="243" height="122" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_nop_02.jpg" alt="Nopporo Branch practice session" width="243" height="122" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_nop_03.jpg" alt="Nopporo Branch practice session" width="243" height="122" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_nop_04.jpg" alt="Nopporo Branch practice session" width="243" height="122" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/ebetsu/">← Back to the list of dojos & classes in Ebetsu, Iwamizawa & Ishikari</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Nopporo Branch", "subject": "Nopporo Trial Lesson Application" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/nop/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/nop/index.astro";
const $$url = "/en/dojo/nop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
