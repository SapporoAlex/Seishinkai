import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';
import { $ as $$BranchTable } from './BranchTable.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const entries = [
    {
      no: 1,
      marker: "★",
      name: "厚別支部/金曜クラス",
      address: "厚別区厚別西4条4丁目　厚別西地区センター2F",
      schedule: ["金曜18:00/19:10"],
      link: "/dojo/atsubetsu/atsubetsu/"
    },
    {
      no: 2,
      marker: "★",
      name: "厚別支部/日曜クラス",
      address: "厚別区厚別西4条4丁目　厚別西地区センター2F",
      schedule: ["日曜 9:30/10:40"],
      link: "/dojo/atsubetsu/atsubetsu/"
    },
    {
      no: 3,
      marker: "★",
      name: "新札幌支部",
      address: "厚別区中央1条5丁目　厚別区民センター会議室",
      schedule: ["月曜19:00(R7.7より)"],
      link: "/dojo/n-sapporo/"
    },
    {
      no: 4,
      marker: "★",
      name: "厚別南支部",
      address: "厚別区厚別南7丁目9-1　厚別南地区センター(R3.3より)",
      schedule: ["木曜18:00/19:00"],
      link: "/dojo/m-atsubetsu/"
    },
    {
      no: 5,
      marker: "★",
      name: "もみじ台支部",
      address: "厚別区もみじ台北7丁目　もみじ台管理センター",
      schedule: ["土曜10:00"],
      link: "/dojo/momi/"
    },
    {
      no: 6,
      marker: "●",
      name: "デュオジュニア空手教室",
      address: "厚別区厚別中央2条5丁目 デュオⅡ5F　デュオカルチャーセンター",
      schedule: ["水曜16:45"],
      link: "https://www.arc-city.com/bunka/contents/course/item/p0129.html"
    },
    {
      no: 7,
      marker: "●",
      name: "デュオ女性護身空手教室",
      address: "厚別区厚別中央2条5丁目 デュオⅡ5F　デュオカルチャーセンター",
      schedule: ["水曜19:30"],
      link: "https://www.arc-city.com/bunka/contents/course/item/p0099.html"
    },
    {
      marker: "★",
      name: "青葉南支部(計画中)",
      address: "厚別区青葉町6丁目3-10 青葉南集会所(5名集まれば開始予定)",
      schedule: [],
      link: "/dojo/aoba/"
    },
    {
      no: 8,
      marker: "□",
      name: "清心会井上道場",
      address: "厚別区厚別西4条4丁目13-23",
      schedule: ["土曜/火曜 19:00"],
      link: "/dojo/inoue/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "厚別区の空手教室", "description": "札幌市厚別区の清心会空手道場・教室一覧。厚別西・新札幌・厚別南・もみじ台など各支部の稽古日をご案内します。", "lang": "ja", "path": "/dojo/atsubetsu/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO LIST</span>
        <h1 class="section-title">厚別区空手道場・教室の一覧</h1>
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
          <img src="/assets/images/dojo/img_atsubetsu_03.jpg" alt="厚別支部" width="301" height="166" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_atsubetsu_04.jpg" alt="厚別支部" width="288" height="160" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/dojo/">← 空手道場・教室の一覧へ戻る</a>
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/atsubetsu/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/atsubetsu/index.astro";
const $$url = "/dojo/atsubetsu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
