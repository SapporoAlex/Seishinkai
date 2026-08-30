import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';
import { b as beltLevels, s as sections, $ as $$ProfileCard } from './belt-levels.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "師範・指導員紹介", "description": "清心会空手の師範・支部長・指導員のご紹介。各道場を指導する指導陣の一覧です。", "lang": "ja", "path": "/instructors/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="instructors">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">INSTRUCTORS</span>
        <h1 class="section-title">師範・支部長</h1>
      </div>

      ${sections.map((section) => renderTemplate`<div class="instructors__category">
            <h2 class="instructors__category-title">
              ${section.title}
              ${section.subtitle && renderTemplate`<span class="instructors__category-subtitle">
                  ${section.subtitle}
                </span>`}
            </h2>

            ${section.groups.map((group) => renderTemplate`<div class="instructors__group">
                ${group.title && renderTemplate`<h3 class="instructors__subsection-title">${group.title}</h3>`}
                ${group.note && renderTemplate`<p class="instructors__note">${group.note}</p>`}

                <div class="instructors__grid">
                  ${group.members.map((member) => renderTemplate`${renderComponent($$result2, "ProfileCard", $$ProfileCard, { "id": member.id, "image": member.image, "name": member.name, "role": member.role, "position": member.position, "date": member.date, "prefecture": member.prefecture, "profession": member.profession, "details": member.details, "tags": member.tags, "link": member.link })}`)}
                </div>
              </div>`)}
          </div>`)}

      <div class="instructors__belt-levels">
        <h2 class="instructors__category-title">
          国内在籍有段者 (※${beltLevels.lastUpdated}現在)
        </h2>

        <table class="instructors__dan-table">
          <tbody>
            <tr>
              ${beltLevels.danRanks.map((rank) => renderTemplate`<th>${rank.rank}</th>`)}
            </tr>
            <tr>
              ${beltLevels.danRanks.map((rank) => renderTemplate`<td>${rank.count}名</td>`)}
            </tr>
          </tbody>
        </table>

        <h3 class="instructors__subsection-title">準加盟・提携協力道場</h3>
        <table class="table">
          <tbody>
            <tr class="u-sp-invisible">
              <td><a href="https://aozorakai.main.jp/index.html" target="_blank">千葉県/無琉塾</a></td><td><a href="https://muryukun.wixsite.com/muryukun/about-us" target="_blank">空手道青空会</a></td>
            </tr>
            <tr class="u-sp-visible">
              <td><a href="https://aozorakai.main.jp/index.html" target="_blank">千葉県/無琉塾</a></td>
            </tr>
            <tr class="u-sp-visible">
              <td><a href="https://muryukun.wixsite.com/muryukun/about-us" target="_blank">空手道青空会</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/instructors/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/instructors/index.astro";
const $$url = "/instructors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
