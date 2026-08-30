import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';
import { $ as $$BranchTable } from './BranchTable.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const entries = [
    {
      no: 1,
      marker: "★",
      name: "札幌中央東支部",
      address: "中央区南2条東4丁目 三上ビル3F",
      schedule: ["水曜18:30/19:30"],
      link: "/dojo/mikami/"
    },
    {
      no: 2,
      marker: "★",
      name: "伏見支部",
      address: "中央区南14条西18丁目　伏見会館",
      schedule: ["土曜13:00"],
      link: "/dojo/fushimi/"
    },
    {
      no: 3,
      marker: "★",
      name: "札幌中央支部",
      address: "中央区南2条西15丁目二条はるにれ児童会館(二条小内)",
      schedule: ["火曜18:30"],
      link: "/dojo/cyuomainichi/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "中央区の空手教室", "description": "札幌市中央区の清心会空手道場・教室一覧。札幌中央東・伏見・札幌中央の各支部の稽古日をご案内します。", "lang": "ja", "path": "/dojo/cyuo/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO LIST</span>
        <h1 class="section-title">中央区空手道場・教室の一覧</h1>
      </div>
      <p class="detail-page__contact">
        お問い合わせは　TEL.011-300-0048(平日13:00-16:00)
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      <ul class="detail-legend">
        <li>
          <span class="detail-legend__marker">★</span>本部直轄教室=お問い合わせは本部事務局へ
        </li>
        <li>
          <span class="detail-legend__marker">●</span>講師派遣教室=お問い合わせは主催文化教室・スポーツクラブへ
        </li>
        <li>
          <span class="detail-legend__marker">□</span>自主管理道場=事務局又は直接、管理担当者へ
        </li>
      </ul>

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_chuouhigashi_04.jpg" alt="稽古の様子" width="326" height="192" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_chuoumainichi_01.jpg" , alt="中央支部の稽古風景" width="299" height="154" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/dojo/">← 空手道場・教室の一覧へ戻る</a>
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/cyuo/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/cyuo/index.astro";
const $$url = "/dojo/cyuo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
