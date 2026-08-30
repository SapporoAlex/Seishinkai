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
      name: "Sakaemachi Karate Club",
      address: "Sanai Jidosha Building, 3F Meeting Room, Kita 42 Higashi 19-chome, Higashi-ku",
      schedule: ["Sunday 9:30–10:30", "Extended class 10:30–11:00"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Higashi-ku Sakaemachi Branch", "description": "An introduction to the Sakaemachi Karate Club, a Seishinkai Karate-do dojo located at Kita 42-jo in Higashi-ku, Sapporo. Sunday practice sessions are held in the meeting room of the Sanai Jidosha Building.", "lang": "en", "path": "/en/dojo/sakaemachi/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate-do Federation – Sakaemachi Branch</h1>
      </div>

      <h2 class="detail-page__heading">Higashi-ku Sakaemachi Karate Class – Seishinkai Sakaemachi Branch</h2>

      <p class="detail-page__lead">
        The Sakaemachi Karate Class started in September 2003, using a meeting room kindly
        lent by Sanai Jidosha Kogyo. It is a karate club centered on kids' karate, junior
        karate, and parent-and-child karate. We especially welcome participation from
        parents and children together, as well as senior members. While many dojos feel
        like an extension of a school sports club, we aim to make training feel more like
        a relaxed circle activity — enjoying karate as a way to build health and fitness
        while still learning its true spirit.
      </p>

      <div class="detail-page__highlight-box">
        <p class="detail-page__highlight-text">
          Seishinkai Karate: cultivating a spirit that never gives up and never breaks
        </p>
      </div>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Higashi-ku Sakaemachi Branch", "facts": [
    { label: "Founded", value: "September 2003" },
    { label: "Founders", value: "Kayoko Mimura, Kazuaki Namikawa" },
    { label: "Past Instructors", value: "Hashini" },
    { label: "Contact", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/legacy/dojo/sakaemachi/Image1.jpg",
    alt: "Practice session at the Sakaemachi Branch",
    width: 240,
    height: 168
  }, "address": "Sanai Jidosha, Kita 42 Higashi 19-chome 1-1, Higashi-ku, Sapporo", "mapHref": "http://yahoo.jp/JbqUqo", "mapQuery": "Sanai Jidosha, Kita 42 Higashi 19-chome 1-1, Higashi-ku, Sapporo", "viewOnMapLabel": "View on Google Maps" })}

      <p class="detail-page__note">
        *Part 1 (beginners / elementary school students): 9:30–10:30. Extended class
        (intermediate level and above): Part 1 + 10:30–11:00.
      </p>

      <p class="detail-page__note">
        *Preschool-age children must attend with a parent.
      </p>

      <p class="detail-page__note">
        This venue is provided courtesy of Sanai Jidosha. Please ask an instructor
        where to park, and please do not enter any areas other than the training
        room.<br>
        
      </p>

      <div class="detail-media">
        <a href="https://www.san-ai-jikou.co.jp/" target="_blank" rel="noopener">
          <img src="/assets/images/legacy/dojo/sakaemachi/2.jpg" alt="Sanai Jidosha Building" width="521" height="225" loading="lazy">
        </a>
      </div>

      <div class="">
        <figure>
          <img src="/assets/images/dojo/img_sanaijidosha.png" alt="Sanai Jidosha logo" width="322" height="115" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/higashi/">← Back to the list of Higashi-ku dojos and classes</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Sakaemachi Branch", "subject": "Sakaemachi Trial Class Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/sakaemachi/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/sakaemachi/index.astro";
const $$url = "/en/dojo/sakaemachi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
