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
      name: "Sapporo Chuo Higashi Branch",
      address: "4 Chome Minami 2-jo Higashi, Chuo-ku, Mikami Building 3F",
      schedule: ["Wednesday 18:30/19:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Chuo-ku Chuo Higashi Branch Karate School", "description": "Information about the Seishinkai Karate Dojo Chuo Higashi Branch (commonly known as Kamome Branch), located at Mikami Building (Kamome Academy) in Chuo-ku, Sapporo. Learn about training days and location information.", "lang": "en", "path": "/dojo/mikami/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - Chuo Higashi Branch</h1>
      </div>

      <h2 class="detail-page__heading">
        Sapporo Chuo Higashi Karate School - Seishinkai Chuo Higashi Branch
      </h2>

      <p class="detail-page__lead">
        The Chuo Higashi Karate School, commonly known as the "Kamome Branch," was established in June 2015.<br>
        We offer junior and adult classes (working adults and students). Because of our location in Chuo-ku, our school has a good balance of both adults and children.<br>
        Located near Bus Center Mae Subway Station, the school is easily accessible, and many people attend for health purposes, such as relieving stress after work.<br>
        We also occasionally hold self-defense seminars for women. Women make up approximately 60% of our adult class!<br>
        While many dojos are run like extensions of competitive sports clubs, we aim to provide a fun, relaxed environment where students can learn karate as a form of health and physical exercise.<br>
        ※ Foreign students are welcome (English support available)! We currently have German and British women enrolled.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Chuo Higashi Branch", "facts": [
    { label: "Established", value: "June 2015" },
    { label: "Founder", value: "Jun Mikami" },
    { label: "Instruction", value: "Directly supervised by the Main Dojo" }
  ], "image": {
    src: "/assets/images/dojo/img_chuouhigashi_bld.jpg",
    alt: "Mikami Building (Kamome Academy)"
  }, "address": "1-10 Minami 2-jo Higashi 4-chome, Chuo-ku, Sapporo, Mikami Building 3F", "addressNote": "4-minute walk (300m) from Bus Center Mae Subway Station. There is no parking available, so please use a nearby parking lot if arriving by car.", "mapHref": "https://www.google.com/maps/place/〒060-0052+北海道札幌市中央区南２条東４丁目１/@43.0593031,141.3601062,17z/data=!3m1!4b1!4m5!3m4!1s0x5f0b29788cad6f89:0xb8705edfef429a09!8m2!3d43.0593031!4d141.3622949", "mapQuery": "43.0593031,141.3601062", "viewOnMapLabel": "View on Google Maps" })}

      <p class="detail-page__note">
        ◆ Training Schedule / Wednesday: 18:30-19:30 Junior Class / 19:30-20:30 Adult Class
      </p>

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_chuouhigashi_01.jpg" alt="Training session" width="326" height="192" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_chuouhigashi_02.jpg" alt="Training session" width="326" height="192" loading="lazy">
        </figure>

        <figure>
          <img src="/assets/images/dojo/img_chuouhigashi_03.jpg" alt="Training session" width="326" height="192" loading="lazy">
        </figure>

        <figure>
          <img src="/assets/images/dojo/img_chuouhigashi_04.jpg" alt="Training session" width="326" height="192" loading="lazy">
        </figure>

        <!-- <figure>
          <img
            src="/assets/images/dojo/img_chuouhigashi_05.jpg"
            alt="Training session"
            width="326"
            height="192"
            loading="lazy"
          />
        </figure>
        <figure>
          <img
            src="/assets/images/dojo/img_chuouhigashi_06.jpg"
            alt="Training session"
            width="326"
            height="192"
            loading="lazy"
          />
        </figure> -->
      </div>

      <p class="detail-page__back">
        <a href="/dojo/cyuo/">← Back to the Chuo-ku Karate Dojo & School List</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Chuo Higashi Branch", "subject": "Chuo Higashi Branch Trial Lesson & Membership Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/mikami/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/mikami/index.astro";
const $$url = "/en/dojo/mikami";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
