import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';
import { $ as $$BranchTable } from './BranchTable.js';
import { $ as $$BranchInfoCard } from './BranchInfoCard.js';
import { $ as $$DojoContactSection } from './DojoContactSection.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const entries = [
    {
      marker: "#",
      name: "野幌空手クラブ",
      address: "江別市野幌屯田町23-6 杜の台記念会館",
      schedule: ["水曜18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "江別市野幌空手教室", "description": "江別市野幌の清心会空手道場・教室のご案内。杜の台記念会館を会場にしたジュニアクラス中心の空手クラブ、稽古日と会場情報をご紹介します。", "lang": "ja", "path": "/dojo/nop/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・野幌支部</h1>
      </div>

      <h2 class="detail-page__heading">江別市野幌空手教室・清心会野幌支部</h2>

      <p class="detail-page__lead">
        野幌空手教室は、平成19年10月に、江別市三番通りに杜の台記念会館でスタートしました。<br>
        ジュニアクラス中心の空手クラブです。<br>
        特に親子での参加、シニアクラスの参加者を歓迎します。<br>
        体育会系部活の延長線上のような道場が多い中、健康・体育の空手としてサークル感覚で楽しく練習して学ぶことを目指しています。
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "江別市野幌支部", "facts": [
    { label: "設立", value: "平成19年(2007)10月" },
    { label: "設立者", value: "猪又敬之" },
    { label: "歴代", value: "大久保翼、嶋和也、他、沖村小織" },
    { label: "担当者", value: "本部直轄" }
  ], "image": {
    src: "/assets/images/dojo/img_nop_bld.jpg",
    alt: "杜の台記念会館",
    width: 192,
    height: 100
  }, "address": "江別市野幌屯田町23-6　杜の台記念会館2F", "addressNote": "三番通に面しています", "mapHref": "https://www.google.com/maps/place/〒069-0803+北海道江別市野幌屯田町２３−６/@43.0969071,141.5075755,17z/data=!3m1!4b1!4m5!3m4!1s0x5f0b2dee41c4efab:0x240f6398f59169be!8m2!3d43.0969071!4d141.5097642", "mapQuery": "43.0969071,141.5075755", "viewOnMapLabel": "Google Mapsで見る" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_nop_01.jpg" alt="野幌支部の稽古風景" width="243" height="122" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_nop_02.jpg" alt="野幌支部の稽古風景" width="243" height="122" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_nop_03.jpg" alt="野幌支部の稽古風景" width="243" height="122" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_nop_04.jpg" alt="野幌支部の稽古風景" width="243" height="122" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/dojo/ebetsu/">← 江別・岩見沢・石狩の空手教室一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "野幌支部", "subject": "野幌体験申込" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/nop/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/nop/index.astro";
const $$url = "/dojo/nop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
