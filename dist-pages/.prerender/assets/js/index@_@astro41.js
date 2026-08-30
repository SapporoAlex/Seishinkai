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
      name: "岩見沢空手クラブ",
      address: "岩見沢市4条西1丁目 岩見沢生涯学習センター",
      schedule: ["月曜18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "岩見沢市空手教室", "description": "岩見沢市の清心会空手道場・教室のご案内。岩見沢生涯学習センターを会場にしたジュニアクラス中心の空手クラブ、稽古日と会場情報をご紹介します。", "lang": "ja", "path": "/dojo/iwamizawa/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・岩見沢支部</h1>
      </div>

      <h2 class="detail-page__heading">岩見沢空手教室・清心会岩見沢支部</h2>

      <p class="detail-page__lead">
        岩見沢空手教室は、平成17年3月に、岩見沢市役所を定年退職した石森師範より設立されました。<br>
        ジュニアクラス中心の空手クラブです。<br>
        特に親子での参加、シニアクラスの参加者を歓迎します。<br>
        体育会系部活の延長線上のような道場が多い中、健康・体育の空手としてサークル感覚で楽しく練習して学ぶことを目指しています。
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "岩見沢支部/岩見沢空手倶楽部", "facts": [
    { label: "設立", value: "平成17年(2005)3月" },
    { label: "設立者", value: "石森忠之" }
  ], "image": {
    src: "/assets/images/legacy/dojo/iwamizawa/2.jpg",
    alt: "岩見沢生涯学習センター",
    width: 270,
    height: 190
  }, "address": "岩見沢市4条西1丁目 岩見沢生涯学習センター", "mapHref": "https://www.google.com/maps/place/岩見沢市+生涯学習センターいわなび/@43.2028905,141.7662754,15z/data=!4m5!3m4!1s0x0:0x43bfeebd5643c2e9!8m2!3d43.2028905!4d141.7662754", "mapQuery": "43.2028905,141.7662754", "viewOnMapLabel": "Google Mapsで見る" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/images/ishimori.jpg" alt="設立者 石森忠之" width="142" height="142" loading="lazy">
        </figure>
      </div>

      <section class="partner-section">
        <h2 class="detail-page__heading">YouTubeで見る岩見沢支部</h2>

        <div class="youtube-grid">
          <a class="youtube-card" href="https://www.youtube.com/watch?v=JVp0_WWPIQs" target="_blank" rel="noopener">
            <span class="youtube-card__thumb">
              <img src="/assets/images/legacy/dojo/iwamizawa/Image1.jpg" alt="岩見沢支部の稽古風景(YouTube)" loading="lazy">
            </span>
            <span>岩見沢支部の稽古風景</span>
          </a>
        </div>
      </section>

      <p class="detail-page__back">
        <a href="/dojo/ebetsu/">← 江別・岩見沢・石狩の空手教室一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "岩見沢支部", "subject": "岩見沢体験申込" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/iwamizawa/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/iwamizawa/index.astro";
const $$url = "/dojo/iwamizawa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
