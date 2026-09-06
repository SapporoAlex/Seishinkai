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
      address: "4-36 Chuo 1-jo 5-chome, Shiroishi-ku, Sapporo, Shiroishi Welfare Hall",
      schedule: ["Thursday Class", "①17:30", "②18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Seishinkan Shiroishi Karate Dojo (Shiroishi Headquarters)", "description": "Information about the Seishinkan Shiroishi Dojo in Shiroishi-ku, Sapporo. Details about the junior karate classes, practice schedule, and training venue.", "lang": "en", "path": "/dojo/shiroishi/shiroishi/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Shiroishi Branch (Former Shiroishi Seishinkan Dojo)</h1>
      </div>

      <h2 class="detail-page__heading">A Karate Dojo in Shiroishi-ku</h2>

      <p class="detail-page__lead">
        The headquarters dojo began operating as a permanent dojo in Shiroishi-ku in March 1986. Including its history as the former Sapporo Branch, it is one of Sapporo's long-established karate dojos, with a history spanning approximately half a century.<br>
        Until the current Seishinkai Headquarters Dojo on Sakae-dori in Shiroishi-ku was completed in 2012, this location served as the headquarters dojo.<br>
        From August 2026, activities moved to the second floor of Shiroishi Chuo Welfare Hall.<br>
        It can be considered one of the oldest karate dojos in Shiroishi-ku. Instructors from the headquarters, including senior practitioners, take turns leading the classes.<br>
        The dojo currently focuses primarily on junior classes for preschool and elementary-to-middle school-aged children.<br>
        The hall is located between National Route 12 and Hongo-dori.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Shiroishi Headquarters", "facts": [
    { label: "Founded", value: "1975 – Sapporo Branch" },
    { label: "Established", value: "1986 – Seishinkan Okubo Dojo" },
    { label: "Founder", value: "Katsumi Okubo" },
    { label: "Former Instructors", value: "Mimura, Ishimori, Tsubasa Okubo, and others" },
    { label: "Current Instructor", value: "Directly managed by Headquarters" }
  ], "image": {
    src: "/assets/images/dojo/img_shiroishi_bld.jpg",
    alt: "Shiroishi Chuo Welfare Hall",
    width: 240,
    height: 168
  }, "address": "4-chome Chuo 1-jo, Shiroishi-ku, Sapporo", "mapHref": "https://www.google.com/maps/search/?api=1&query=Shiroishi+Chuo+Welfare+Hall", "mapQuery": "Shiroishi Chuo Welfare Hall", "viewOnMapLabel": "View on Google Maps" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_shiroishi_01.jpg" alt="Seishinkai Shiroishi Branch practice session" width="353" height="191" loading="lazy">
        </figure>

        <figure>
          <img src="/assets/images/dojo/img_shiroishi_02.jpg" alt="Seishinkai Shiroishi Branch practice session" width="353" height="191" loading="lazy">
        </figure>

        <figure>
          <img src="/assets/images/dojo/img_shiroishi_03.jpg" alt="Seishinkai Shiroishi Branch practice session" width="353" height="191" loading="lazy">
        </figure>

        <figure>
          <img src="/assets/images/dojo/img_shiroishi_04.jpg" alt="Seishinkai Shiroishi Branch practice session" width="353" height="191" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※Classes are held at Shiroishi Chuo Welfare Hall.
      </p>

      <!--
      <h2 class="detail-page__heading">
        Active at this location for 21 years, from 2005 to July 2026
      </h2>

      <div class="detail-gallery">
        <figure>
          <img
            src="/assets/images/dojo/img_shiroishi-former_01.jpg"
            alt="Hondori Seishinkan, next to Yakiniku Tokujyu"
            width="253"
            height="144"
            loading="lazy"
          />
        </figure>

        <figure>
          <img
            src="/assets/images/dojo/img_shiroishi-former_02.jpg"
            alt="Hondori Seishinkan, next to Yakiniku Tokujyu"
            width="253"
            height="144"
            loading="lazy"
          />
        </figure>
      </div>
      -->

      <p class="detail-page__back">
        <a href="/dojo/shiroishi/">← Back to the Shiroishi-ku Karate Dojo List</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Shiroishi Headquarters", "subject": "Inquiry about trial lesson/membership at Shiroishi Chuo Welfare Hall" })}
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
