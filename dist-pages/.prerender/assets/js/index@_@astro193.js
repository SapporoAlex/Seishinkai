import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment } from './prerender.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pdfSchedules = [
    { year: "2026 (Reiwa 8)", href: "/assets/pdf/schedule-2026.pdf" },
    { year: "2025 (Reiwa 7)", href: "/assets/pdf/schedule-2025.pdf" },
    { year: "2024 (Reiwa 6)", href: "/assets/pdf/schedule-2024.pdf" }
  ];
  const yearTables = [
    {
      year: "2023",
      rows: [
        ["Dec 17", "Year-End Commemorative Ceremony", "Headquarters"],
        ["Dec 16", "Headquarters Final Training Session", "Headquarters"],
        ["Dec 10", "Winter Promotion Examination", "Momijidai Community Center"],
        ["Nov 23", "17th Women's Training Seminar", "Headquarters"],
        ["Nov 3", "32nd Mimura Cup All Japan Seishinkai Karate Demonstration Tournament", "Iwamizawa Sports Center"],
        ["Sep 23", "Autumn Promotion Examination", "Fushiko Memorial Hall"],
        ["Aug 13", "Summer Training Camp (Day Trip)", "Fushiko Memorial Hall"],
        ["Aug 6", "Black Belt Examination (1st Dan) *2nd Dan and above: Aug–Oct", "Headquarters"],
        ["Jul 16", "Shiribeshi Area Examination & Instructor Seminar", "Kyogoku"],
        ["Jul 15", "Seishinkai Independence Anniversary Ceremony", "Headquarters"],
        ["Jun 30 – Jul 8", "Sweden Overseas Exchange Visit", "Stockholm"],
        ["Jun 25", "Summer Promotion Examination", "Momijidai Community Center"],
        ["Jun 17 & 24", "Training Seminar (Kata & Basics)", "Headquarters"],
        ["May 27", "Obihiro Area Examination", "Obihiro"],
        ["Apr 29", "Challenge Kata Training Vol. 2", "Headquarters"],
        ["Apr 23", "Spring Cemetery Visit", "Fujino Seizan Cemetery"],
        ["Mar 18", "Seishinkan Foundation Anniversary Ceremony", "Headquarters"],
        ["Mar 21", "Spring Promotion Examination", "Momijidai Community Center"],
        ["Feb 11", "Black Belt Examination (1st Dan) *2nd Dan and above: Feb–Apr", "Headquarters"],
        ["Jan 14", "Headquarters First Training of the Year", "-"],
        ["Jan 8", "Inoue Dojo Completion Celebration", "Inoue Dojo"]
      ]
    },
    {
      year: "2022",
      rows: [
        ["Dec 18", "37th Year-End Commemorative Ceremony", "Headquarters"],
        ["Dec 17", "Headquarters Final Training Session", "Headquarters"],
        ["Dec 4", "Winter Headquarters Joint Examination", "Momijidai Community Center"],
        ["Nov 29", "Kyogoku Branch Examination", "Kyogoku"],
        ["Nov 23", "16th Women's Karate Training Seminar", "Headquarters"],
        ["Nov 15", "8th Memorial Cemetery Visit for Kancho Kayoko Mimura", "Fujino Seizan Cemetery"],
        ["Nov 3", "31st Mimura Cup All Japan Seishinkai Karate Demonstration Tournament", "Fushiko Memorial Hall"],
        ["Oct 3", "Iwamizawa Examination", "-"],
        ["Sep 25", "Autumn Joint Examination", "-"],
        ["Sep 1", "Kimobetsu Training Seminar & Examination", "Kimobetsu Budokan"],
        ["Aug 7", "Summer Black Belt Examination", "Headquarters"],
        ["Jul 18", "Summer Training Camp", "Fushiko Memorial Hall"],
        ["Jul 9", "Independence Anniversary Ceremony", "Headquarters"],
        ["Jul 3", "Summer Joint Examination", "Headquarters / Fushiko Memorial Hall"],
        ["Apr 30", "Challenge Kata Training 2022 Vol.1", "Headquarters"],
        ["Apr 29", "Challenge Training Seminar 2022 Vol.1", "Headquarters"],
        ["Mar 21", "Promotion Examination", "Headquarters & Fushiko Memorial Hall"],
        ["Mar 12", "Foundation Anniversary Ceremony", "Headquarters"],
        ["Feb 20", "Headquarters Black Belt Final Examination", "Headquarters"],
        ["Jan 22 – Feb 19", "Black Belt Preliminary Examination", "Headquarters"],
        ["Jan 30", "International Exchange & Self-Defense Seminar", "International Exchange Center"],
        ["Jan 12", "Headquarters First Training of the Year", "-"]
      ]
    },
    {
      year: "2021",
      rows: [
        ["Dec 19", "36th Year-End Commemorative Ceremony & Demonstration", "Headquarters"],
        ["Dec 18", "Headquarters Final Training Session", "-"],
        ["Dec 12", "Winter Headquarters Examination (3rd Kyu and Above)", "-"],
        ["Dec 4", "Instructor Workshop Vol.2", "-"],
        ["Dec 4", "Junior Training Seminar", "-"],
        ["Nov 23", "15th Women's Training Seminar", "-"],
        ["Nov 14", "7th Memorial Cemetery Visit for Kancho Kayoko Mimura", "-"],
        ["Nov 14", "Black Belt Instructor Workshop & Welcome Event", "-"],
        ["Nov 8", "International Exchange & Foreign Karate Experience Seminar", "Headquarters"],
        ["Oct 30", "Demonstration Tournament Filming Day", "Headquarters"],
        ["Oct 1 – Nov 30", "Roger Cup Seishinkai Demonstration Tournament 2021", "-"],
        ["Sep 26", "Autumn Headquarters Examination (3rd Kyu and Above)", "-"],
        ["Aug 8", "Summer Headquarters Black Belt Examination", "-"],
        ["Jul 18", "Summer Headquarters Training Camp", "Headquarters"],
        ["Jul 10", "Independence Anniversary Ceremony", "Headquarters"],
        ["Jun 27", "Headquarters Examination (3rd Kyu and Above)", "-"],
        ["Apr 25", "Spring Headquarters & Branch Examination", "-"],
        ["Apr 18", "Junior Training Seminar", "Headquarters"],
        ["Mar 14", "Black Belt Examination", "Headquarters"],
        ["Mar 13", "Foundation Anniversary Ceremony", "Headquarters"],
        ["Feb 28", "Headquarters Examination (3rd Kyu and Above)", "Headquarters"],
        ["Jan–Feb", "Winter Headquarters & Branch Examinations", "Branches"]
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Annual Events", "description": "View the annual schedule of Seishinkai Karate events, including tournaments, promotion examinations, seminars, and training camps.", "lang": "en", "path": "/en/news/archive/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="detail-page">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">EVENTS</span>
        <h1 class="section-title">Annual Seishinkai Karate Events</h1>
      </div>

      <p class="detail-page__intro">
        Major Seishinkai events held throughout the year.
      </p>

      <h2 class="detail-page__heading">Annual Schedule (PDF)</h2>

      <div class="partner-section">
        <ul class="partner-section__list">
          ${pdfSchedules.map((p) => renderTemplate`<li class="partner-section__item">
              <a${addAttribute(p.href, "href")} target="_blank" rel="noopener noreferrer">
                ${p.year} Schedule (PDF)
              </a>
            </li>`)}
        </ul>
      </div>

      ${yearTables.map((yt) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`
          <h2 class="detail-page__heading">${yt.year} Event Schedule</h2>

          <table class="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Venue</th>
              </tr>
            </thead>

            <tbody>
              ${yt.rows.map(([date, event, venue]) => renderTemplate`<tr>
                  <td>${date}</td>
                  <td>${event}</td>
                  <td>${venue || "-"}</td>
                </tr>`)}
            </tbody>
          </table>
        ` })}`)}

      <p class="detail-page__back">
        <a href="/en/news/">← Back to News & Social Media</a>
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/news/archive/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/news/archive/index.astro";
const $$url = "/en/news/archive";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
