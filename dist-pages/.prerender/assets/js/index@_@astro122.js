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
      name: "Sapporo Higashi Karate Club",
      address: "Sakae District Center, Kita 36-jo Higashi 8-chome 1-25, Higashi-ku, Sapporo",
      schedule: ["Tuesday 18:30-19:30 (session 1)", "19:30-20:30 (session 2)"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Sapporo Higashi Branch, Higashi Ward", "description": "Introducing the Sapporo Higashi Karate Club, a Seishinkai Karate dojo in Higashi Ward, Sapporo. Training is held on Tuesdays at the Sakae District Center.", "lang": "en", "path": "/en/dojo/higashi/higashi/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate-do Federation — Sapporo Higashi Branch</h1>
      </div>

      <h2 class="detail-page__heading">Sapporo Higashi Karate Class, Seishinkai Sapporo Higashi Branch</h2>

      <p class="detail-page__lead">
        The Sapporo Higashi Karate Class began in May 2009 (Heisei 21) at the meeting room of the Sakae District Center, Higashi Ward.<br>
        It is a karate club centered on Kids Karate, the Junior Class, and Parent-Child Karate.<br>
        We especially welcome participation from parents and children together, and from the Senior Class.<br>
        While many dojos feel like an extension of school sports clubs, we aim to make karate an enjoyable, club-like experience centered on health and fitness.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinkai Sapporo Higashi Branch", "facts": [
    { label: "Founded", value: "May 2009 (Heisei 21)" },
    { label: "Founder", value: "Kayoko Mimura" },
    { label: "Past instructors", value: "Hashini, Daniela, Okimura, Takashima" },
    { label: "Instructor", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/dojo/img_higashi_bld.jpg",
    alt: "Sakae District Center",
    width: 652,
    height: 302
  }, "address": "Sakae District Center, Kita 36-jo Higashi 8-chome 1-25, Higashi-ku, Sapporo", "mapHref": "https://www.google.com/maps/place/栄地区センター/@43.106046,141.358107,15z/data=!4m2!3m1!1s0x0:0x1e9105febde56acb?sa=X&ved=2ahUKEwiu4-KXt7HhAhUDD6YKHRvZCmwQ_BIwC3oECAoQCA", "mapQuery": "43.106046,141.358107" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_higashi_01.jpg" alt="Practice session at the Sapporo Higashi Branch" width="295" height="205" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_higashi_02.jpg" alt="Practice session at the Sapporo Higashi Branch" width="295" height="205" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※The Higashi Branch has many members, so Kids and Junior classes train in two sessions.
      </p>

      <p class="detail-page__back">
        <a href="/en/dojo/higashi/">← Back to the Higashi Ward Dojo & Class List</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Sapporo Higashi Branch", "subject": "Sapporo Higashi Trial Application" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/higashi/higashi/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/higashi/higashi/index.astro";
const $$url = "/en/dojo/higashi/higashi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
