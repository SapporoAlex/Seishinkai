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
      name: "Tobetsu Town Karate Club",
      address: "2792 Shirakaba-cho, Tobetsu Town — Tobetsu Town General Gymnasium",
      schedule: ["Saturdays 18:00 (from April 2024)"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes in Tobetsu Town", "description": "Information about the Seishinkai Karate Dojo and Tobetsu Branch in Tobetsu Town, Hokkaido. Learn about training days and the training venue.", "lang": "en", "path": "/dojo/tobetsu/tobetsu/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation — Tobetsu Branch</h1>
      </div>

      <h2 class="detail-page__heading">
        Tobetsu Town Karate Class · Seishinkai Tobetsu Branch
      </h2>

      <p class="detail-page__lead">
        The Tobetsu Karate Class began in October 2008.<br>
        Training is held at the Tobetsu Town General Gymnasium.<br>
        The class is primarily focused on kids and junior students. Parents and children are welcome to participate together, and seniors are also welcome to join.<br>
        While many dojos operate more like an extension of traditional sports clubs, our aim is to enjoy learning and practicing karate as a recreational activity focused on health and physical fitness.<br>
        ※ Three-year-old preschool children may participate together with a parent and can attend free of monthly membership fees.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Tobetsu Branch (Directly Managed by Headquarters)", "facts": [
    { label: "Established", value: "October 2008" },
    { label: "Instructor", value: "Directly managed by Headquarters" }
  ], "image": {
    src: "/assets/images/dojo/img_tobetsu_bld.jpg",
    alt: "Tobetsu Town General Gymnasium",
    width: 282,
    height: 216
  }, "address": "2792 Shirakaba-cho, Tobetsu Town — Tobetsu Town General Gymnasium", "mapHref": "https://www.google.com/maps/place/当別町立当別町+総合体育館/@43.223059,141.5131699,15z/data=!4m2!3m1!1s0x0:0x42d9adf5ac1b5e0?sa=X&ved=2ahUKEwid7uW7ya_hAhVDFYgKHW7eAj0Q_BIwCnoECA8QCA", "mapQuery": "43.223059,141.5131699", "viewOnMapLabel": "View on Google Maps" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_tobetsu_01.jpg" alt="Seishinkai Karate training" width="649" height="196" loading="lazy">
        </figure>

        <figure>
          <img src="/assets/images/dojo/img_tobetsu_02.jpg" alt="Seishinkai Karate training" width="649" height="196" loading="lazy">
        </figure>

        <figure>
          <img src="/assets/images/dojo/img_tobetsu_03.jpg" alt="Seishinkai Karate training" width="649" height="196" loading="lazy">
        </figure>

        <figure>
          <img src="/assets/images/dojo/img_tobetsu_04.jpg" alt="Seishinkai Karate training" width="649" height="196" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※ If the Tobetsu Town General Gymnasium is unavailable, training may occasionally be held at the Shirakaba Community Center. Please check the
        <a href="https://karate14.dokkin.com/" target="_blank" rel="noopener">
          Tobetsu Branch training schedule
        </a>
        for the latest information.
      </p>

      <p class="detail-page__note">
        ※ Alternative venue:
        <a href="https://www.google.com/maps/place/当別町+白樺コミュニティーセンター+社会教育課/@43.223683,141.513303,15z/data=!4m6!3m5!1s0x5f0b399134bc23a5:0xaf14adee43debde3!8m2!3d43.223683!4d141.513303!16s/g/1tfpjm7x" target="_blank" rel="noopener">
          2792-1 Shirakaba, Tobetsu Town — Shirakaba Community Center
        </a>
      </p>

      <p class="detail-page__back">
        <a href="/dojo/tobetsu/">← Back to the list</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Tobetsu Branch", "subject": "Tobetsu Branch Trial Lesson & Membership Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/tobetsu/tobetsu/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/tobetsu/tobetsu/index.astro";
const $$url = "/en/dojo/tobetsu/tobetsu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
