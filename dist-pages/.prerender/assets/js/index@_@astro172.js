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
      name: "Taihei Karate Club (Taihei Branch)",
      address: "Shinoro Community Center 2F, Shinoro 3-jo 8-chome, Kita-ku, Sapporo",
      schedule: ["Saturday 13:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Taihei Branch, Kita Ward", "description": "Introducing the Taihei Branch of Seishinkai Karate in Kita Ward, Sapporo. Originally founded at Taihei Children's Hall, the class now trains at Shinoro Community Center on Saturdays — a club centered on Kids & Junior karate.", "lang": "en", "path": "/en/dojo/taihei/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - Taihei Branch</h1>
      </div>

      <h2 class="detail-page__heading">Kita Ward Taihei Karate Club - Seishinkai Taihei Branch</h2>

      <p class="detail-page__lead">
        The Taihei karate class began its activities in April 2010 (Heisei 22) at Taihei Children's Hall.<br>
        Due in part to the effects of COVID-19, the class is now held at Shinoro Community Center.<br>
        It is a karate club centered on Kids Karate, Junior Karate, and Parent-Child Karate.<br>
        Participation by parents and children together, as well as senior class members, is especially welcome.<br>
        While many dojos feel like an extension of a school sports club, this one aims to offer karate for health and fitness that members can enjoy learning in a relaxed, club-like atmosphere.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinkai Taihei Branch", "facts": [
    { label: "Founded", value: "April 2010 (Heisei 22)" },
    { label: "Founder", value: "Takushi Muroki" }
  ], "image": {
    src: "/assets/images/legacy/dojo/shinoro/2.jpg",
    alt: "Shinoro Community Center",
    width: 282,
    height: 245
  }, "address": "11-1 Shinoro 3-jo 8-chome, Kita-ku, Sapporo, Shinoro Community Center 2F", "mapHref": "https://www.google.com/maps/place/札幌市篠路コミュニティセンター/@43.1431773,141.367712,15z/data=!4m2!3m1!1s0x0:0x4aaefe8a200690fe?sa=X&ved=2ahUKEwjf6on517HhAhWCAYgKHV-_BqEQ_BIwCnoECAcQCA", "mapQuery": "43.1431773,141.367712" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/dojo/taihei/Image1.jpg" alt="Training session at the Taihei Branch" width="423" height="242" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/legacy/photo/Image2.jpg" alt="Seishinkai Karate training session" width="570" height="340" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※Original venue: <a href="https://www.google.com/maps/place/札幌市役所+子ども未来局子ども育成部太平児童会館/@43.132231,141.359608,15z/data=!4m2!3m1!1s0x0:0xad788ca95c088659?sa=X&ved=2ahUKEwifkp6E3rHhAhUSPnAKHbKXAtIQ_BIwCnoECAoQCA" target="_blank" rel="noopener">2-1 Taihei 8-jo 7-chome, Kita-ku, Sapporo, Taihei Children's Hall</a>
      </p>

      <p class="detail-page__back">
        <a href="/en/dojo/kita/">← Back to the Kita Ward dojo & class list</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Taihei Branch", "subject": "Taihei Branch Trial Lesson / Enrollment Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/taihei/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/taihei/index.astro";
const $$url = "/en/dojo/taihei";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
