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
      name: "Minami-Ainosato Karate Club",
      address: "Takuhoku Ainosato District Center, Ainosato 1-jo 6-chome, Kita-ku, Sapporo",
      schedule: ["Sunday 10:00 (10:30 in winter)"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Minami-Ainosato Branch, Kita Ward", "description": "Introducing the Minami-Ainosato Branch of Seishinkai Karate at Takuhoku Ainosato District Center in Kita Ward, Sapporo. A Headquarters-run class meeting Sundays at 10:00 AM — see training days and venue information.", "lang": "en", "path": "/en/dojo/m-ainosato/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - Minami-Ainosato Branch</h1>
      </div>

      <h2 class="detail-page__heading">Kita Ward Minami-Ainosato Karate Club - Seishinkai Minami-Ainosato Branch</h2>

      <p class="detail-page__lead">
        The Minami-Ainosato karate class began its activities in May 2010 (Heisei 22) at Takuhoku Ainosato District Center.<br>
        It is a karate club centered on Kids Karate, Junior Karate, and Parent-Child Karate.<br>
        Participation by parents and children together, as well as senior class members, is especially welcome.<br>
        While many dojos feel like an extension of a school sports club, this one aims to offer karate for health and fitness that members can enjoy learning in a relaxed, club-like atmosphere.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Minami-Ainosato Branch", "facts": [
    { label: "Founded", value: "May 2010 (Heisei 22)" },
    { label: "", value: "Headquarters-run class" }
  ], "image": {
    src: "/assets/images/legacy/dojo/m-ainosato/2.jpg",
    alt: "Takuhoku Ainosato District Center",
    width: 345,
    height: 226
  }, "address": "1-1 Ainosato 1-jo 6-chome, Kita-ku, Sapporo, Takuhoku Ainosato District Center", "mapHref": "https://www.google.com/maps/place/拓北・あいの里地区センター/@43.155447,141.399294,15z/data=!4m2!3m1!1s0x0:0x78b61eb45497db44?sa=X&ved=2ahUKEwigkNm_3LHhAhXDdHAKHTGtA3YQ_BIwDHoECAsQCA", "mapQuery": "43.155447,141.399294" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/dojo/m-ainosato/Image1.jpg" alt="Training session at the Minami-Ainosato Branch" width="432" height="205" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/legacy/dojo/m-ainosato/2.jpg" alt="Takuhoku Ainosato District Center" width="345" height="226" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/legacy/dojo/m-ainosato/img2.jpg" alt="Co-op Sapporo Ainosato Store" width="262" height="163" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※<br>
        ※As this is a Headquarters-run class, general members (black belts and brown belts) take turns leading practice.
      </p>

      <p class="detail-page__note">
        ※When the district center is unavailable: <a href="https://www.google.com/maps/place/コープさっぽろ+あいの里店/@43.1576295,141.3986342,15z/data=!4m2!3m1!1s0x0:0xc9b4786745542e81?sa=X&ved=2ahUKEwjUwuXRvMHxAhVkNKYKHT-dA5oQ_BIwEnoECD8QBQ" target="_blank" rel="noopener">Co-op Sapporo Ainosato Store, 2F Circle Room</a>
      </p>

      <p class="detail-page__back">
        <a href="/en/dojo/kita/">← Back to the Kita Ward dojo & class list</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Minami-Ainosato Branch", "subject": "Minami-Ainosato Trial Lesson Application" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/m-ainosato/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/m-ainosato/index.astro";
const $$url = "/en/dojo/m-ainosato";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
