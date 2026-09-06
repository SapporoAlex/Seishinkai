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
      name: "Atsubetsu-minami Branch",
      address: "Atsubetsu-minami 7-chome 9-1, Atsubetsu-ku, Sapporo — Atsubetsu-minami District Center (since March 2021)",
      schedule: ["Thursday 18:00/19:00"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Karate Classes at the Atsubetsu-minami Branch", "description": "Introducing the Seishinkai Karate dojo and classes in Atsubetsu-minami, Atsubetsu-ku, Sapporo. Details on the Thursday class schedule and venue.", "lang": "en", "path": "/en/dojo/m-atsubetsu/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">Seishinkai Karate Federation — Atsubetsu-minami Branch</h1>
      </div>

      <h2 class="detail-page__heading">Atsubetsu-minami Karate Class / Seishinkai Atsubetsu-minami Branch</h2>

      <p class="detail-page__lead">
        The Atsubetsu-minami Karate Class began its activities at the Atsubetsu-minami District Center in March 2010 (Heisei 22).<br>
        Since its founding, it has centered on Kids Karate and Junior Karate.<br>
        Parent-and-child participation is especially welcome.<br>
        While many dojos feel like an extension of school sports-club culture, we aim for karate as health and fitness — practiced and learned with the relaxed enjoyment of a community club.<br>
        A traditional martial arts health exercise class also follows karate practice.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries, "headers": ["Dojo / Branch", "Address / Venue", "Training Days"] })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "Atsubetsu-minami Branch", "facts": [
    { label: "Founded", value: "March 2010 (Heisei 22)" },
    { label: "Past instructors", value: "Tsubasa Okubo (2010–2018), Yuko Wakabayashi (2018–2019), Takushi Muroki (2019–2021)" },
    { label: "Instructor", value: "Headquarters-run" }
  ], "image": {
    src: "/assets/images/dojo/img_m-atsubetsu_bld.jpg",
    alt: "Atsubetsu-minami District Center",
    width: 290,
    height: 206
  }, "address": "Atsubetsu-minami 7-chome 9-1, Atsubetsu-ku, Sapporo — Atsubetsu-minami District Center, Meeting Room", "mapHref": "https://www.google.com/maps/place/厚別南地区センター/@43.0224987,141.4768789,17z/data=!4m8!1m2!2m1!1z5pyt5bmM5biCIOWOmuWIpeWNl-WcsOWMuuOCu-ODs-OCv-ODvA!3m4!1s0x5f0b2b51c16b22a1:0x6bc576097912517a!8m2!3d43.0223777!4d141.4790925", "mapQuery": "43.0224987,141.4768789" })}
      
      <p class="detail-page__note">
        ※From March 2021 (Reiwa 3), the venue changed to the Atsubetsu-minami District Center (through February, activities were held at the Kaminopporo Hall).
      </p>

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_m-atsubetsu_01.jpg" alt="Practice session at the Atsubetsu-minami Branch" width="346" height="155" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_m-atsubetsu_02.jpg" alt="Practice session at the Atsubetsu-minami Branch" width="346" height="155" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_m-atsubetsu_03.jpg" alt="Practice session at the Atsubetsu-minami Branch" width="346" height="155" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_m-atsubetsu_04.jpg" alt="Practice session at the Atsubetsu-minami Branch" width="346" height="155" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/en/dojo/atsubetsu/">← Back to Karate Dojos & Classes in Atsubetsu Ward</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "lang": "en", "dojoName": "Atsubetsu-minami Branch", "subject": "Atsubetsu-minami Trial Lesson Application" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/m-atsubetsu/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/dojo/m-atsubetsu/index.astro";
const $$url = "/en/dojo/m-atsubetsu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
