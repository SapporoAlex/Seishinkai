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
      name: "ARCS Kita Karate Club",
      address: "ARCS Kita 24-jo Store 2F, 1-1 Kita 24-jo Nishi 9-chome, Kita-ku, Sapporo",
      schedule: ["Thursday class 16:00-17:00", "Saturday class 15:30-17:00"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the ARCS Kita Branch, Kita Ward", "description": "Introducing the ARCS Kita Branch of Seishinkai Karate at ARCS Kita 24-jo Store in Kita Ward, Sapporo. A Kids & Junior karate class training on Thursdays and Saturdays.", "lang": "en", "path": "/en/dojo/kita/kita/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - Sapporo Kita / ARCS Kita Branch</h1>
      </div>

      <h2 class="detail-page__heading">ARCS Kita Karate Club - Seishinkai ARCS Kita Branch (Sapporo Kita)</h2>

      <p class="detail-page__lead">
        The ARCS Kita karate class got its start in April 2010 (Heisei 22), borrowing community space at the ARCS Kita 24-jo Store.<br>
        It is a karate club centered on Kids Karate, Junior Karate, and Parent-Child Karate.<br>
        A Saturday class was added in May 2013 (Heisei 25).<br>
        Participation by parents and children together, as well as senior class members, is especially welcome.<br>
        Being located inside the ARCS store makes it a convenient spot — families can shop while children train.<br>
        While many dojos feel like an extension of a school sports club, this one aims to offer karate for health and fitness that members can enjoy learning in a relaxed, club-like atmosphere.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinkai Sapporo Kita / ARCS Kita Branch", "facts": [
    { label: "Founded", value: "April 2010 (Heisei 22)" },
    { label: "Founder", value: "Kayoko Mimura" },
    { label: "Past instructors", value: "Hashini, Daniela, Shima, Okimura" },
    { label: "Instructors", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/legacy/dojo/kita/2.jpg",
    alt: "ARCS Kita 24-jo Store 2F",
    width: 286,
    height: 178
  }, "address": "1-1 Kita 24-jo Nishi 9-chome, Kita-ku, Sapporo, ARCS Kita 24-jo Store 2F", "mapHref": "https://www.google.com/maps/search/?api=1&query=札幌市北区北24条西9丁目1-1+アークス北24条店", "mapQuery": "札幌市北区北24条西9丁目1-1 アークス北24条店" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/dojo/kita/Image1.jpg" alt="Thursday class training session" width="374" height="203" loading="lazy">
          <figcaption>Thursday class</figcaption>
        </figure>
        <figure>
          <img src="/assets/images/legacy/dojo/kita/Image2.jpg" alt="Saturday class training session" width="341" height="174" loading="lazy">
          <figcaption>Saturday class</figcaption>
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/kita/">← Back to the Kita Ward dojo & class list</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Sapporo Kita / ARCS Kita Branch", "subject": "Kita Branch Trial Lesson / Enrollment Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/kita/kita/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/kita/kita/index.astro";
const $$url = "/en/dojo/kita/kita";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
