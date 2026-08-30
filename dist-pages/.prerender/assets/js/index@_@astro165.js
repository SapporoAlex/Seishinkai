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
      name: "Kiyota-ku Satozuka Karate Class (Seishinkai Satozuka Branch)",
      address: "10-chome 4-17 Satozuka Midorigaoka, Kiyota-ku, Sapporo, Satozuka Midorigaoka Neighborhood Hall",
      schedule: ["Friday 6:30 PM (winter 6:45 PM)"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Kiyota-ku Satozuka Branch", "description": "Introducing the Seishinkai karate class at the Satozuka Midorigaoka Neighborhood Hall in Kiyota-ku, Sapporo. Focused on kids and junior karate, with training days and venue information.", "lang": "en", "path": "/en/dojo/satozuka/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - Satozuka Karate Class</h1>
      </div>

      <h2 class="detail-page__heading">Kiyota-ku Satozuka Karate Class - Seishinkai Satozuka Branch</h2>

      <p class="detail-page__lead">
        The Satozuka Karate Class started on the 2nd floor of the Daiho-yu Satozuka store in February 1999 (Heisei 11).<br>
        It later moved through the Satozuka Hall and the Satozuka District Center before settling at its current venue, the Midorigaoka Neighborhood Hall.<br>
        The class is centered on the kids' and junior classes. Participation by parents and children together, and by senior members, is also welcome.<br>
        While many dojos feel like an extension of school sports clubs, we aim for members to practice and learn in a relaxed, club-like atmosphere as health-oriented, physical-education-style karate.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinkai Satozuka Branch", "facts": [
    { label: "Founded", value: "February 1999 (Heisei 11)" },
    { label: "Founder", value: "Katsumi Okubo" },
    { label: "Past instructors", value: "Inoue, Tsubasa Okubo, Tetsuhiro Kudo" },
    { label: "Instructor", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/legacy/dojo/satozuka/2.jpg",
    alt: "Satozuka Midorigaoka Neighborhood Hall",
    width: 258,
    height: 192
  }, "address": "10-chome 4-17 Satozuka Midorigaoka, Kiyota-ku, Sapporo, Satozuka Midorigaoka Neighborhood Hall", "mapHref": "https://www.google.com/maps/place/里塚緑ヶ丘町内会館/@42.9895177,141.4727112,15z/data=!4m2!3m1!1s0x0:0x56db9b692a940c94?sa=X&ved=2ahUKEwjps-jkmLHhAhUQBKYKHZFyDqEQ_BIwCnoECAsQCA", "mapQuery": "42.9895177,141.4727112" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/dojo/satozuka/Image1.jpg" alt="Satozuka Karate Class practice session" width="247" height="149" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/minami-kiyota/">← Back to the Kiyota Ward & Minami Ward Dojo & Class List</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Satozuka Karate Class", "subject": "Satozuka Trial Lesson Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/satozuka/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/satozuka/index.astro";
const $$url = "/en/dojo/satozuka";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
