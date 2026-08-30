import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';
import { $ as $$BranchTable } from './BranchTable.js';
import { $ as $$BranchInfoCard } from './BranchInfoCard.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const entries = [
    {
      marker: "#",
      name: "Fukuoka Karate Class (Seishinkai Fukuoka Branch)",
      address: "Sasaoka Community Hall, Fukuoka City, Fukuoka Prefecture",
      schedule: ["Please inquire for training days"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Fukuoka Branch (Activity Concluded)", "description": "Introducing the Seishinkai Fukuoka Branch, based at the Sasaoka Community Hall in Fukuoka City. Established April 2013, activity concluded March 2021.", "lang": "en", "path": "/en/dojo/fukuoka/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation - Fukuoka Branch</h1>
      </div>

      <h2 class="detail-page__heading">Fukuoka Karate Class - Seishinkai Fukuoka Branch</h2>

      <p class="detail-page__lead">
        The Fukuoka Karate Class started in April 2013 (Heisei 25), using the Sasaoka Community Hall as its venue.<br>
        We are grateful for everyone's cooperation over the years.<br>
        Activity concluded as of March 2021 (Reiwa 3).
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Seishinryu Fukuoka Branch", "facts": [
    { label: "Founded", value: "April 2013 (Heisei 25)" },
    { label: "Founder", value: "Atsushi Saegusa" }
  ], "image": {
    src: "/assets/images/legacy/dojo/fukuoka/2.jpg",
    alt: "Sasaoka Community Hall",
    width: 250,
    height: 126
  }, "address": "Sasaoka Community Hall, Fukuoka City, Fukuoka Prefecture", "mapHref": "https://www.google.com/maps/place/笹丘公民館/@33.567146,130.378501,15z/data=!4m2!3m1!1s0x0:0x4c673e139e341c71?sa=X&ved=2ahUKEwjn1J27rKfhAhWZPXAKHcLzDf8Q_BIwCnoECA8QCA", "mapQuery": "33.567146,130.378501" })}

      <div class="detail-gallery">
        <figure>
            <img src="/assets/images/legacy/dojo/fukuoka/Image1.jpg" alt="Fukuoka Branch practice session" width="334" height="191" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/legacy/dojo/fukuoka/Image5.jpg" alt="Fukuoka Branch practice session" width="169" height="137" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※During the day we may be at work and unable to answer the phone. Please use Facebook Messenger or similar.<br>
        ※This page carries information from the time activity concluded, migrated from the former site.
      </p>

      <p class="detail-page__note">
        　　　　　(Employer: <a href="http://www.saegusayakuhin-q.co.jp/" target="_blank" rel="noopener">Saegusa Yakuhin Kyushu</a>)
      </p>

      <p class="detail-page__back">
        <a href="/en/dojo/naichi/">← Back to the Shizuoka, Aichi & Chiba Dojo List</a>
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/fukuoka/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/fukuoka/index.astro";
const $$url = "/en/dojo/fukuoka";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
