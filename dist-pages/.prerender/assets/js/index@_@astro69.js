import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';
import { $ as $$BranchTable } from './BranchTable.js';
import { $ as $$BranchInfoCard } from './BranchInfoCard.js';
import { $ as $$DojoContactSection } from './DojoContactSection.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const entries = [
    {
      marker: "□",
      name: "帯広市空手クラブ",
      address: "帯広市西2条南24丁目　鉄南地区",
      schedule: ["土曜18:45-20:00"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "帯広市空手教室", "description": "帯広市西2条南24丁目・鉄南地区コミュニティセンターを会場にした清心会空手道場・教室のご案内。キッズ・ジュニアクラス中心の空手クラブ、稽古日と会場情報をご紹介します。", "lang": "ja", "path": "/dojo/obihiro/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・帯広支部</h1>
      </div>

      <h2 class="detail-page__heading">帯広市空手教室・清心会帯広支部</h2>

      <p class="detail-page__lead">
        帯広空手教室は、平成29年4月より本格的スタートしました。<br>
        会場は、鉄南地区コミュニティセンターです。<br>
        キッズ・ジュニアクラスを中心としています。親子での参加、シニアクラスの参加も歓迎します。<br>
        体育会系部活の延長線上のような道場が多い中、健康・体育の空手としてサークル感覚で楽しく練習して学ぶことを目指しています。
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "帯広支部", "facts": [
    { label: "設立", value: "平成29年(2017)4月" },
    { label: "設立者", value: "工藤哲弘" }
  ], "image": {
    src: "/assets/images/legacy/images/Image1.jpg",
    alt: "鉄南地区コミュニティセンターでの稽古風景",
    width: 649,
    height: 196
  }, "instructors": [
    { src: "/assets/images/instructors/kudo.jpg", alt: "担当 工藤", name: "工藤" }
  ], "address": "帯広市西2条南24丁目　鉄南地区コミュニティセンター", "mapHref": "https://www.google.com/maps/d/viewer?hl=ja&ll=42.906342976232445%2C143.20808862938247&z=16&mid=1mNwLkO77ohCM0yk0rd14mWCBM33D_ais", "mapQuery": "帯広市西2条南24丁目　鉄南地区コミュニティセンター", "viewOnMapLabel": "Google Mapsで見る" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/dojo/obihiro/Image1.jpg" alt="帯広支部の稽古風景" width="352" height="159" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/legacy/dojo/obihiro/2.jpg" alt="鉄南地区コミュニティセンター" width="180" height="135" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/dojo/kitahiro/">← 帯広・恵庭・旭川の空手教室一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "帯広支部", "subject": "帯広支部 体験・入会問い合わせ", "directPhone": { number: "090-6692-6573", tel: "09066926573", note: "工藤（平日は17:00以降に）" }, "directEmail": "kudo813@seishinkan.ne.jp" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/obihiro/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/obihiro/index.astro";
const $$url = "/dojo/obihiro";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
