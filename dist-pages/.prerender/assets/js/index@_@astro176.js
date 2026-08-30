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
      name: "Tobetsu Karate Club",
      address: "2792 Shirakaba-cho, Tobetsu Town (Tobetsu Town General Gymnasium)",
      schedule: ["Saturday 18:00 (since April 2024)"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes in Tobetsu Town", "description": "Information on the Seishinkai Karate dojo — Tobetsu Branch — in Tobetsu Town, Hokkaido. Training days and venue details.", "lang": "en", "path": "/en/dojo/tobetsu/tobetsu/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation — Tobetsu Branch</h1>
      </div>

      <h2 class="detail-page__heading">Tobetsu Karate Class / Seishinkai Tobetsu Branch</h2>

      <p class="detail-page__lead">
        The Tobetsu karate class started in October 2008 (Heisei 20).<br>
        The venue is the Tobetsu Town General Gymnasium.<br>
        The class is centered on Kids and Junior classes. Parent-child participation and Senior Class members
        are also welcome.<br>
        While many dojos feel like an extension of school sports-club activities, we aim for karate as health
        and fitness training — practicing and learning together in a relaxed, club-like atmosphere.<br>
        ※For 3-year-old preschoolers attending with a parent, the monthly fee is free.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Tobetsu Branch (Headquarters-run)", "facts": [
    { label: "Founded", value: "October 2008 (Heisei 20)" },
    { label: "In charge", value: "Headquarters-run" }
  ], "address": "2792 Shirakaba-cho, Tobetsu Town, Tobetsu Town General Gymnasium", "mapHref": "https://www.google.com/maps/place/当別町立当別町+総合体育館/@43.223059,141.5131699,15z/data=!4m2!3m1!1s0x0:0x42d9adf5ac1b5e0?sa=X&ved=2ahUKEwid7uW7ya_hAhVDFYgKHW7eAj0Q_BIwCnoECA8QCA", "mapQuery": "43.223059,141.5131699" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/images/Image1.jpg" alt="Seishinkai Karate training session" width="649" height="196" loading="lazy">
        </figure>
      </div>

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/clubu/masuda.jpg" alt="Instructor" width="161" height="161" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※<br>
        When the Tobetsu Town General Gymnasium is unavailable, practice sometimes takes place at the
        Shirakaba Community Center instead. Please check the <a href="https://karate14.dokkin.com/" target="_blank" rel="noopener">Tobetsu Branch schedule page</a> for the current training venue.
      </p>

      <p class="detail-page__note">
        ※Alternate venue: <a href="https://www.google.com/maps/place/当別町+白樺コミュニティーセンター+社会教育課/@43.223683,141.513303,15z/data=!4m6!3m5!1s0x5f0b399134bc23a5:0xaf14adee43debde3!8m2!3d43.223683!4d141.513303!16s/g/1tfpjm7x" target="_blank" rel="noopener">2792-1 Shirakaba, Tobetsu Town, Shirakaba Community Center</a>
      </p>

      <p class="detail-page__back">
        <a href="/en/dojo/tobetsu/">← Back to the Dojo List</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Tobetsu Branch", "subject": "Tobetsu Trial Lesson & Membership Inquiry" })}
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
