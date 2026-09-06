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
      name: "Eniwa City Karate Club",
      address: "389-3 Minami-Shimamatsu, Eniwa City (Shimamatsu Gymnasium)",
      schedule: ["Friday 16:00 (since Feb. 2022)"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes in Eniwa City (Shimamatsu Karate)", "description": "Information about the Seishinkai Karate dojo/class held at Shimamatsu Gymnasium in Minami-Shimamatsu, Eniwa City. A kids- and junior-focused karate club — find training days and venue details here.", "lang": "en", "path": "/en/dojo/eniwa/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation — Eniwa Branch</h1>
      </div>

      <h2 class="detail-page__heading">Eniwa City Karate Class — Seishinkai Eniwa Branch</h2>

      <p class="detail-page__lead">
        Shimamatsu Karate / Emino Karate<br>
        The Eniwa karate class started in March 2013 (Heisei 25).<br>
        The venue is Shimamatsu Gymnasium.<br>
        The class focuses mainly on Kids and Junior classes. Parent-child participation and Senior Class members are also welcome.<br>
        While many dojos feel like an extension of school sports-club activities, we aim for karate as health and fitness training — practicing and learning together in a relaxed, club-like atmosphere.<br>
        ※A free monthly campaign is currently running for 3-year-olds attending together with a parent.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Eniwa Branch", "facts": [
    { label: "Founded", value: "March 2013 (Heisei 25)" },
    { label: "Instructor", value: "Directly overseen by Headquarters" }
  ], "image": {
    src: "/assets/images/dojo/img_eniwa_bld.jpg",
    alt: "Shimamatsu Gymnasium",
    width: 254,
    height: 160
  }, "address": "389-3 Minami-Shimamatsu, Eniwa City, Shimamatsu Gymnasium", "mapHref": "https://www.google.com/maps/place/島松体育館/@42.917452,141.5843139,15z/data=!4m2!3m1!1s0x0:0x800612839adc2133?sa=X&ved=2ahUKEwito5C8wK_hAhXaM94KHU4BD9wQ_BIwCnoECA8QCA", "mapQuery": "42.917452,141.5843139" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_eniwa_01.jpg" alt="Eniwa Branch practice session" width="261" height="111" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_eniwa_02.jpg" alt="Eniwa Branch practice session" width="254" height="160" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_eniwa_03.jpg" alt="Eniwa Branch practice session" width="261" height="111" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_eniwa_04.jpg" alt="Eniwa Branch practice session" width="254" height="160" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※In addition to Shimamatsu Gymnasium, practice sometimes takes place in the Co-op Eniwa meeting room.
      </p>

      <p class="detail-page__note">
        Monthly fee: ¥3,800<br>
        ※Free for 3-year-olds
      </p>

      <p class="detail-page__back">
        <a href="/en/dojo/kitahiro/">← Back to the list of dojos & classes in Obihiro, Eniwa & Asahikawa</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Eniwa Branch", "subject": "Eniwa Trial Lesson & Membership Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/eniwa/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/eniwa/index.astro";
const $$url = "/en/dojo/eniwa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
