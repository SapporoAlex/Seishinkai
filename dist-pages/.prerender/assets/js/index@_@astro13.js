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
      name: "伏見支部",
      address: "中央区南14条西18丁目　伏見会館",
      schedule: ["土曜13:00-14:00"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "中央区伏見空手教室(平和通支部)", "description": "札幌市中央区・伏見会館の清心会空手道場・伏見支部(平和通支部)のご案内。ジュニア空手と親子空手中心の教室、稽古日と会場情報をご紹介します。", "lang": "ja", "path": "/dojo/cyuo-m/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・伏見支部</h1>
      </div>

      <h2 class="detail-page__heading">中央区伏見空手教室・清心会伏見支部</h2>

      <p class="detail-page__lead">
        伏見空手教室は、支援企業の協力で支援会社の会議室スペースをお借りして平成24年4月にスタートしました。<br>
        セキュリティの関係もあり翌年、現在地の伏見会館に会場を移転して活動しています。<br>
        設立以来、ジュニア空手と親子空手としてを中心としています。<br>
        特に親子での参加、シニアクラスの参加者を歓迎します。<br>
        体育会系部活の延長線上のような道場が多い中、健康・体育の空手としてサークル感覚で楽しく練習して学ぶことを目指しています。
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "平和通支部", "facts": [
    { label: "設立", value: "平成24年(2012)4月" },
    { label: "担当者", value: "本部直轄" }
  ], "image": {
    src: "/assets/images/legacy/dojo/cyuo-m/2.jpg",
    alt: "伏見会館",
    width: 293,
    height: 200
  }, "address": "札幌市中央区南14条西18丁目6-10　伏見会館", "mapHref": "https://www.google.com/maps/place/伏見会館/@43.0410241,141.3303314,17z/data=!4m5!3m4!1s0x0:0x98b47c6f2cd17d85!8m2!3d43.0402439!4d141.3289367", "mapQuery": "43.0410241,141.3303314", "viewOnMapLabel": "Google Mapsで見る" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/dojo/cyuo-m/Image1.jpg" alt="伏見支部の稽古風景" width="292" height="182" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/dojo/cyuo/">← 中央区空手道場・教室の一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "伏見支部", "subject": "伏見体験申込" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/cyuo-m/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/cyuo-m/index.astro";
const $$url = "/dojo/cyuo-m";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
