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
      name: "菊水支部",
      address: "白石区菊水3条5丁目 アークス菊水店2F",
      schedule: ["水曜クラス17:45", "木曜クラス18:45", "土曜クラス13:00"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "白石区菊水支部の空手教室", "description": "札幌市白石区菊水、アークス菊水店2Fを会場にした清心会空手道場・教室のご案内。ジュニア空手クラスの稽古日をご紹介します。", "lang": "ja", "path": "/dojo/kikusui/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・菊水支部</h1>
      </div>

      <h2 class="detail-page__heading">菊水空手教室・清心会菊水支部</h2>

      <p class="detail-page__lead">
        菊水空手教室は、アークス菊水店2Fコミュニティスペースをお借りして平成23年3月より活動を始めました。<br>
        設立以来、ジュニア空手として開始し、園児から中学生を中心としています。<br>
        また親子での参加、シニアクラスの参加者を歓迎します。<br>
        体育会系部活の延長線上のような道場が多い中、健康・体育の空手としてサークル感覚で楽しく練習して学ぶことを目指しています。
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "清心会菊水支部", "facts": [
    { label: "設立", value: "平成23年(2011)3月" },
    { label: "担当", value: "本部直轄" }
  ], "image": {
    src: "/assets/images/dojo/img_kikusui_bld.jpg",
    alt: "アークス菊水店",
    width: 248,
    height: 138
  }, "address": "札幌市白石区菊水3条5丁目2-25 アークス菊水店", "mapHref": "https://www.google.com/maps/place/〒003-0803+北海道札幌市白石区菊水３条５丁目２−２５+アークス/@43.0529182,141.3763685,17z/data=!3m1!4b1!4m5!3m4!1s0x5f0b2bd3eb0399f1:0xf3795c85cd820460!8m2!3d43.0529182!4d141.3785572", "mapQuery": "43.0529182,141.3763685", "viewOnMapLabel": "Google Mapsで見る" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_kikusui_01.jpg" alt="菊水支部の稽古風景(水曜・木曜クラス)" width="251" height="136" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_kikusui_02.jpg" alt="菊水支部の稽古風景(土曜クラス)" width="251" height="137" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_kikusui_03.jpg" alt="菊水支部の稽古風景(水曜・木曜クラス)" width="251" height="136" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_kikusui_04.jpg" alt="菊水支部の稽古風景(土曜クラス)" width="251" height="137" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/dojo/shiroishi/">← 白石区の空手教室一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "菊水支部", "subject": "菊水体験申込" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/kikusui/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/kikusui/index.astro";
const $$url = "/dojo/kikusui";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
