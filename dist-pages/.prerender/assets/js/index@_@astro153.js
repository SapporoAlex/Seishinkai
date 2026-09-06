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
      name: "Shin-Sapporo Branch",
      address: "Atsubetsu Ward Citizens' Center Meeting Room, Chuo 1-jo 5-chome, Atsubetsu-ku",
      schedule: ["Monday 19:00 (from July 2025)"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Shin-Sapporo Branch", "description": "An introduction to the Shin-Sapporo Branch of Seishinkai Karate-do, located in Atsubetsu-ku, Sapporo. Details on the Monday class schedule and venue.", "lang": "en", "path": "/en/dojo/n-sapporo/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate-do Federation – Shin-Sapporo Branch</h1>
      </div>

      <h2 class="detail-page__heading">Atsubetsu-ku Shin-Sapporo Karate Class – Seishinkai Shin-Sapporo Branch</h2>

      <p class="detail-page__lead">
        The Shin-Sapporo Karate Class has been active since April 1997 at the Atsubetsu
        Ward Citizens' Center, making it one of Seishinkai's longest-running branches.
        Since its founding it has offered kids' karate and junior karate, with a wide
        range of participants from preschoolers to adults (including parents). We
        especially welcome participation from parents and children together. While many
        dojos feel like an extension of a school sports club, we aim to make training
        feel more like a relaxed circle activity — enjoying karate as a way to build
        health and fitness while still learning its true spirit.
      </p>

      <div class="detail-page__highlight-box">
        <p class="detail-page__highlight-text">★★</p>
        <p class="detail-page__highlight-text">
          Seishinkai Karate: cultivating a spirit that never gives up and never breaks
        </p>
        <p class="detail-page__highlight-text">★★</p>
      </div>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Shin-Sapporo Branch", "facts": [
    { label: "Founded", value: "April 1997" },
    { label: "Founder", value: "Tsubasa Okubo" },
    { label: "Past Instructors", value: "Okubo, Abe, and others" },
    { label: "Head Instructor", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/dojo/img_n-sapporo_bld.jpg",
    alt: "Atsubetsu Ward Citizens' Center",
    width: 290,
    height: 206
  }, "address": "Atsubetsu Ward Citizens' Center Meeting Room, Chuo 1-jo 5-chome, Atsubetsu-ku", "mapHref": "https://www.google.com/maps/place/札幌市+厚別区民センター/@43.036652,141.474159,15z/data=!4m2!3m1!1s0x0:0x2eeb48db85d54c24?sa=X&ved=2ahUKEwi-kKuTlaXhAhUOUN4KHZo-B5UQ_BIwCnoECA8QCA", "mapQuery": "43.036652,141.474159", "viewOnMapLabel": "View on Google Maps" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_n-sapporo_01.jpg" alt="Practice session at the Shin-Sapporo Branch" width="346" height="155" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_n-sapporo_02.jpg" alt="Practice session at the Shin-Sapporo Branch" width="346" height="155" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_n-sapporo_03.jpg" alt="Practice session at the Shin-Sapporo Branch" width="346" height="155" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_n-sapporo_04.jpg" alt="Practice session at the Shin-Sapporo Branch" width="346" height="155" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        *Preschool-age children must attend with a parent.
      </p>

      <p class="detail-page__note">
        *Occasionally, black-belt members of the general adult class may join.
      </p>

      <p class="detail-page__note">
        *As of July 2025, the practice day was changed to Mondays, 19:00–20:30.
      </p>

      <p class="detail-page__back">
        <a href="/en/dojo/atsubetsu/">← Back to the list of Atsubetsu-ku dojos and classes</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Shin-Sapporo Branch", "subject": "Shin-Sapporo Trial Class / Enrollment Inquiry" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/n-sapporo/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/n-sapporo/index.astro";
const $$url = "/en/dojo/n-sapporo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
