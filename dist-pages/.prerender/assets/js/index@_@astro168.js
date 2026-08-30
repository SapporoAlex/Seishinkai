import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';
import { $ as $$BranchTable } from './BranchTable.js';
import { $ as $$DojoContactSection } from './DojoContactSection.js';
import { $ as $$BranchInfoCard } from './BranchInfoCard.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const entries = [
    {
      marker: "",
      name: "Shiroishi Headquarters",
      address: "Shiroishi Welfare Hall, 4-36 Chuo 1-jo 5-chome, Shiroishi-ku, Sapporo",
      schedule: ["Thursday Classes", "①17:30", "②18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Seishinkan Shiroishi Karate Dojo (Shiroishi Headquarters)", "description": "Information about Seishinkan Shiroishi Headquarters Karate Dojo in Shiroishi-ku, Sapporo. Learn about our junior karate classes, training schedule, and venue.", "lang": "en", "path": "/en/dojo/shiroishi/shiroishi/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Shiroishi Branch (formerly Shiroishi Seishinkan Dojo)</h1>
      </div>

      <h2 class="detail-page__heading">A Karate Dojo in Shiroishi Ward</h2>

      <div class="detail-page__img-text-pair--reverse">
        <div class="detail-media--med">
          <figure>
            <img src="/assets/images/dojo/img_shiroishi_2.jpg" alt="Former Hondo Seishinkan Dojo" width="253" height="144" loading="lazy">
            <figcaption>
              From August 2026, classes are held at the 2nd floor of Shiroishi Welfare Hall on Thursdays from 18:30.
            </figcaption>
          </figure>
        </div>

        <p>
          The headquarters dojo began operating as a permanent dojo in Shiroishi Ward in March 1986. Including its history as the former Sapporo Branch, it has been active in Sapporo for approximately half a century, making it one of the city's long-established karate dojos.<br>
          Until the current General Headquarters Dojo in Sakaedori, Shiroishi Ward was completed in 2012, this location served as the headquarters dojo.<br>
          From August 2026, activities moved to the 2nd floor of Shiroishi Chuo Welfare Hall.<br>
          It is one of the oldest karate dojos in Shiroishi Ward. The dojo is directly supervised by the headquarters, with qualified adult members taking turns teaching classes.<br>
          The dojo currently focuses primarily on junior classes for children from preschool age through junior high school.<br>
          The hall is located between National Route 12 and Hongo-dori.
        </p>
      </div>

      <div class="detail-page__img-text-pair">
        <div class="detail-gallery">
          <figure>
            <img src="/assets/images/dojo/img_shiroishi_6.jpg" alt="Exterior of the former Hondo Seishinkan Dojo" width="234" height="144" loading="lazy">
          </figure>

          <figure>
            <img src="/assets/images/dojo/img_shiroishi_5.jpg" alt="Exterior of the former Hondo Seishinkan Dojo" width="234" height="144" loading="lazy">
          </figure>
        </div>
      </div>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Shiroishi Headquarters", "facts": [
    { label: "Founded", value: "1975 – Sapporo Branch" },
    { label: "Established", value: "1986 – Seishinkan Okubo Dojo" },
    { label: "Founder", value: "Katsumi Okubo" },
    { label: "Past Instructors", value: "Mimura, Ishimori, Tsubasa Okubo, and others" },
    { label: "Supervision", value: "Directly supervised by Headquarters" }
  ], "image": {
    src: "/assets/images/dojo/img_shiroishi_2.jpg",
    alt: "Shiroishi Chuo Welfare Hall",
    width: 240,
    height: 168
  }, "address": "Shiroishi Chuo Welfare Hall, Chuo 1-jo 4-chome, Shiroishi-ku, Sapporo", "mapHref": "https://www.google.com/maps/search/?api=1&query=Shiroishi+Chuo+Welfare+Hall", "mapQuery": "Shiroishi Chuo Welfare Hall", "viewOnMapLabel": "View on Google Maps" })}

      <p class="detail-page__note">
        ※ Classes are held at Shiroishi Chuo Welfare Hall.
      </p>

      <h2 class="detail-page__heading">
        Active at this venue for 21 years, from 2005 to July 2026
      </h2>

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_shiroishi_3.jpg" alt="Former Hondo Seishinkan Dojo" width="253" height="144" loading="lazy">
        </figure>

        <figure>
          <img src="/assets/images/dojo/img_shiroishi_4.jpg" alt="Former Hondo Seishinkan Dojo" width="253" height="144" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/shiroishi/">← Back to Shiroishi Ward Karate Dojos</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "Shiroishi Headquarters", "subject": "Shiroishi Chuo Welfare Hall – Trial Class / Enrollment Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/shiroishi/shiroishi/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/shiroishi/shiroishi/index.astro";
const $$url = "/en/dojo/shiroishi/shiroishi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
