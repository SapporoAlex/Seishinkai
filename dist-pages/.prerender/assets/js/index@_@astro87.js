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
      name: "豊平支部",
      address: "豊平区豊平6条7丁目1-12　豊平児童会館",
      schedule: ["土曜18:20"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "豊平区豊平支部の空手教室", "description": "札幌市豊平区豊平の清心会空手道場・教室のご案内。本部直轄の教室で、稽古日と会場情報をご紹介します。", "lang": "ja", "path": "/dojo/toyohira/toyohira/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・豊平支部</h1>
      </div>

      <h2 class="detail-page__heading">豊平区豊平空手教室・清心会豊平支部</h2>

      <p class="detail-page__lead">
        豊平支部は、豊平児童会館をお借りして活動している本部直轄の教室です。<br>
        一般部会員の指導員が交代で参加し、指導にあたります。
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "清心会豊平支部", "facts": [
    { label: "設立", value: "平成23年(2011)6月" },
    { label: "歴代", value: "小谷野、髙嶋、増田" },
    { label: "担当", value: "本部直轄" },
    { label: "備考", value: "一般部会員の指導員が交代で参加します" }
  ], "image": {
    src: "/assets/images/dojo/img_toyohira_1.jpg",
    alt: "豊平児童会館",
    width: 290,
    height: 206
  }, "address": "札幌市豊平区豊平6条7丁目1-12　豊平児童会館", "mapHref": "https://www.google.com/maps/search/?api=1&query=札幌市豊平区豊平6条7丁目1-12+豊平児童会館", "mapQuery": "札幌市豊平区豊平6条7丁目1-12 豊平児童会館", "viewOnMapLabel": "Google Mapsで見る" })}

      <p class="detail-page__back">
        <a href="/dojo/toyohira/">← 豊平区空手道場・教室の一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "豊平支部", "subject": "豊平体験申込" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/toyohira/toyohira/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/toyohira/toyohira/index.astro";
const $$url = "/dojo/toyohira/toyohira";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
