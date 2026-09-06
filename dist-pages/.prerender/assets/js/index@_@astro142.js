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
      name: "Kitago Branch",
      address: "Kitago 3-jo 7-chome, Shiroishi-ku, Sapporo, Kita-Shiroishi District Center",
      schedule: ["Tuesday class 18:30", "Friday class 15:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Kitago Branch, Shiroishi Ward", "description": "Information on the Seishinkai karate dojo/class at Kitago, Shiroishi Ward, Sapporo, held at the Kita-Shiroishi District Center. Training days for the Junior Karate class.", "lang": "en", "path": "/en/dojo/kitashiroishi/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation — Kitago Branch</h1>
      </div>

      <h2 class="detail-page__heading">Kita-Shiroishi Karate Class, Shiroishi Ward / Seishinkai Kita-Shiroishi / Kitago Branch</h2>

      <p class="detail-page__lead">
        The Kita-Shiroishi Karate Class started in June 1998 (Heisei 10) as the Kitago Branch, at the Kitago Community Hall.<br>
        It later moved its venue to the current Kita-Shiroishi District Center, where it continues its activities today.<br>
        Since its founding, it has run as a Junior Karate class, focused mainly on preschoolers through junior high school students.<br>
        We also welcome parent-child participants and members of our Senior Class.<br>
        While many dojos feel like an extension of school sports-club activities, we aim for karate as health and fitness training — practicing and learning together in a relaxed, club-like atmosphere.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinkai Kitago Branch", "facts": [
    { label: "Founded", value: "June 1998 (Heisei 10)" },
    { label: "Founder", value: "Katsumi Okubo" },
    { label: "Past instructors", value: "Toshinobu Inuura, Namikawa, Arisa Sato" },
    { label: "Instructors", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/dojo/img_kitashiroishi_bld.jpg",
    alt: "Kita-Shiroishi District Center",
    width: 247,
    height: 130
  }, "address": "9-20 Kitago 3-jo 7-chome, Shiroishi-ku, Sapporo, Kita-Shiroishi District Center", "mapHref": "https://www.google.com/maps/place/北白石地区センター/@43.053449,141.424351,15z/data=!4m5!3m4!1s0x0:0x51a3c6bc9843f2f!8m2!3d43.053449!4d141.424351", "mapQuery": "43.053449,141.424351" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_kitashiroishi_01.jpg" alt="Kita-Shiroishi Branch practice session" width="276" height="101" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_kitashiroishi_02.jpg" alt="Kita-Shiroishi Branch practice session" width="276" height="101" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_kitashiroishi_03.jpg" alt="Kita-Shiroishi Branch practice session" width="276" height="101" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_kitashiroishi_04.jpg" alt="Kita-Shiroishi Branch practice session" width="276" height="101" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/shiroishi/">← Back to the list of dojos & classes in Shiroishi Ward</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Kitago Branch", "subject": "Kitago Trial Lesson & Enrollment Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/kitashiroishi/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/kitashiroishi/index.astro";
const $$url = "/en/dojo/kitashiroishi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
