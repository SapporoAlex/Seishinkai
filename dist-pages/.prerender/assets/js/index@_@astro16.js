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
      name: "江別空手クラブ",
      address: "江別市3条5丁目11-1 江別中央公民館",
      schedule: ["金曜18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "江別市空手教室・江別空手クラブ", "description": "江別市の清心会空手道場・江別空手クラブのご案内。江別中央公民館を会場にしたジュニアクラス中心の空手クラブ、稽古日と会場情報をご紹介します。", "lang": "ja", "path": "/dojo/ebetsu/ebetsu/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・江別支部</h1>
      </div>

      <h2 class="detail-page__heading">江別市空手教室・清心会江別空手倶楽部</h2>

      <p class="detail-page__lead">
        江別空手教室は、平成18年2月に、清心会で最初の江別での空手教室として上江別自治会館でスタートしました。<br>
        令和3年2月よりコープえべつ1Fの会議室(冬期間、自治会館が古く寒い為)と夏期間の2会場に分けて活動していましたが、令和4年6月よりJR江別駅そばの江別中央公民館に会場を移して活動しています。<br>
        ジュニアクラス中心の空手クラブです。<br>
        特に親子での参加、シニアクラスの参加者を歓迎します。<br>
        体育会系部活の延長線上のような道場が多い中、健康・体育の空手としてサークル感覚で楽しく練習して学ぶことを目指しています。
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "江別支部", "facts": [
    { label: "設立", value: "平成18年(2006)2月" },
    { label: "担当者", value: "本部直轄" }
  ], "image": {
    src: "/assets/images/dojo/img_ebetsu_bld.jpg",
    alt: "江別中央公民館",
    width: 208,
    height: 201
  }, "address": "江別市3条5丁目11-1　江別中央公民館", "addressNote": "JR江別駅そばです。", "mapHref": "https://www.google.com/maps/place/〒067-0013+北海道江別市３条５丁目１１−１/@43.1121242,141.5546939,17z/data=!3m1!4b1!4m5!3m4!1s0x5f0b32393aa80e4b:0x2c02dec343b7a562!8m2!3d43.1121242!4d141.5568826", "mapQuery": "43.1121242,141.5546939", "viewOnMapLabel": "Google Mapsで見る" })}

        <div class="detail-gallery">
          <figure>
              <img src="/assets/images/dojo/img_ebetsu_01.jpg" alt="江別清心会研修" width="234" height="144" loading="lazy">
          </figure>
          <figure>
              <img src="/assets/images/dojo/img_ebetsu_02.jpg" alt="江別清心会研修" width="234" height="144" loading="lazy">
          </figure>
          <figure>
              <img src="/assets/images/dojo/img_ebetsu_03.jpg" alt="江別清心会研修" width="234" height="144" loading="lazy">
          </figure>
          <figure>
              <img src="/assets/images/dojo/img_ebetsu_04.jpg" alt="江別清心会研修" width="234" height="144" loading="lazy">
          </figure>
        </div>

      <p class="detail-page__back">
        <a href="/dojo/ebetsu/">← 江別・岩見沢・石狩の空手教室一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "江別支部", "subject": "江別体験申込" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/ebetsu/ebetsu/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/ebetsu/ebetsu/index.astro";
const $$url = "/dojo/ebetsu/ebetsu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
