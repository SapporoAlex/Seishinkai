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
      name: "Ebetsu Karate Club",
      address: "3-jo 5-chome 11-1, Ebetsu, Ebetsu Central Community Center",
      schedule: ["Friday 18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes in Ebetsu City — Ebetsu Karate Club", "description": "Information about the Seishinkai Ebetsu Karate Club in Ebetsu City. View the class schedule and venue at the Ebetsu Central Community Center.", "lang": "en", "path": "/en/dojo/ebetsu/ebetsu/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation Ebetsu Branch</h1>
      </div>

      <h2 class="detail-page__heading">Ebetsu Karate Class — Seishinkai Ebetsu Karate Club</h2>

      <p class="detail-page__lead">
        The Ebetsu Karate Class began in February 2006 as Seishinkai's first karate
        class in Ebetsu, starting at the Kami-Ebetsu Community Hall.<br>
        From February 2021 the class split between the meeting room at Co-op Ebetsu 1F
        (winter, as the community hall was old and cold) and a summer venue, and since
        June 2022 it has trained at the Ebetsu Central Community Center near JR Ebetsu
        Station.<br>
        This is primarily a junior karate class.<br>
        Families and senior participants are especially welcome.<br>
        While many dojos focus on a highly competitive sports-club atmosphere, our goal
        is to provide enjoyable karate training that promotes health, fitness, and
        lifelong learning in a friendly club environment.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Ebetsu Branch Information", "facts": [
    { label: "Established", value: "February 2006" },
    { label: "Instructor", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/dojo/img_ebetsu_bld.jpg",
    alt: "Ebetsu Central Community Center",
    width: 208,
    height: 201
  }, "address": "3-jo 5-chome 11-1, Ebetsu — Ebetsu Central Community Center", "addressNote": "Near JR Ebetsu Station.", "mapHref": "https://www.google.com/maps/place/〒067-0013+北海道江別市３条５丁目１１−１/@43.1121242,141.5546939,17z/data=!3m1!4b1!4m5!3m4!1s0x5f0b32393aa80e4b:0x2c02dec343b7a562!8m2!3d43.1121242!4d141.5568826", "mapQuery": "43.1121242,141.5546939" })}

      <div class="detail-gallery">
        <figure>
            <img src="/assets/images/dojo/img_ebetsu_01.jpg" alt="Ebetsu seishinkai training" width="234" height="144" loading="lazy">
        </figure>
        <figure>
            <img src="/assets/images/dojo/img_ebetsu_02.jpg" alt="Ebetsu seishinkai training" width="234" height="144" loading="lazy">
        </figure>
        <figure>
            <img src="/assets/images/dojo/img_ebetsu_03.jpg" alt="Ebetsu seishinkai training" width="234" height="144" loading="lazy">
        </figure>
        <figure>
            <img src="/assets/images/dojo/img_ebetsu_04.jpg" alt="Ebetsu seishinkai training" width="234" height="144" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/ebetsu/">← Back to Ebetsu, Iwamizawa & Ishikari Dojos</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Ebetsu Branch", "subject": "Ebetsu Trial Lesson Enquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/ebetsu/ebetsu/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/ebetsu/ebetsu/index.astro";
const $$url = "/en/dojo/ebetsu/ebetsu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
