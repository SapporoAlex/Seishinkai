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
      name: "札幌中央東支部",
      address: "中央区南2条東4丁目 三上ビル3F",
      schedule: ["水曜18:30/19:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "中央区中央東支部の空手教室", "description": "札幌市中央区・三上ビル(かもめアカデミー)の清心会空手道場・中央東支部(通称かもめ支部)のご案内。稽古日と会場情報をご紹介します。", "lang": "ja", "path": "/dojo/mikami/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・中央東支部</h1>
      </div>

      <h2 class="detail-page__heading">札幌中央東空手教室・清心会中央東支部</h2>

      <p class="detail-page__lead">
        中央東空手教室、通称名「かもめ支部」は平成27年6月に設立されました。<br>
        ジュニアクラスと一般部(社会人、学生)があり、中央区に位置していることもあり大人と子供のバランスのとれた教室です。<br>
        地下鉄バスセンター駅そばと交通の便もよく、会社帰りストレス発散など健康目的で通われる方が多いです。<br>
        また女性のための護身術セミナーも不定期ですが開催しています。当支部社会人クラスは女性が６割です！<br>
        体育会系部活の延長線上のような道場が多い中、健康・体育の空手としてサークル感覚で楽しく練習して学ぶことを目指しています。<br>
        ※外国人歓迎します(英語対応OK)！現在、ドイツ人女性、イギリス人女性が在籍しています！
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "中央東支部", "facts": [
    { label: "設立", value: "平成27年(2015)6月" },
    { label: "設立者", value: "三上 淳" },
    { label: "指導", value: "本部直轄" }
  ], "image": {
    src: "/assets/images/dojo/img_chuouhigashi_bld.jpg",
    alt: "三上ビル(かもめアカデミー)"
  }, "address": "札幌市中央区南2条東4丁目1-10　三上ビル3F", "addressNote": "地下鉄バスセンター駅より徒歩4分(300m)です。駐車場はありませんので、お車の場合は近隣のパーキングをご利用ください。", "mapHref": "https://www.google.com/maps/place/〒060-0052+北海道札幌市中央区南２条東４丁目１/@43.0593031,141.3601062,17z/data=!3m1!4b1!4m5!3m4!1s0x5f0b29788cad6f89:0xb8705edfef429a09!8m2!3d43.0593031!4d141.3622949", "mapQuery": "43.0593031,141.3601062", "viewOnMapLabel": "Google Mapsで見る" })}

      <p class="detail-page__note">
        ◆稽古日/水曜日　18:30-19:30　ジュニア　／　19:30-20:30　社会人
      </p>

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_chuouhigashi_01.jpg" alt="稽古の様子" width="326" height="192" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_chuouhigashi_02.jpg" alt="稽古の様子" width="326" height="192" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_chuouhigashi_03.jpg" alt="稽古の様子" width="326" height="192" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_chuouhigashi_04.jpg" alt="稽古の様子" width="326" height="192" loading="lazy">
        </figure>
        <!-- <figure>
          <img
            src="/assets/images/dojo/img_chuouhigashi_05.jpg"
            alt="稽古の様子"
            width="326"
            height="192"
            loading="lazy"
          />
        </figure>
        <figure>
          <img
            src="/assets/images/dojo/img_chuouhigashi_06.jpg"
            alt="稽古の様子"
            width="326"
            height="192"
            loading="lazy"
          />
        </figure> -->
      </div>


      <p class="detail-page__back">
        <a href="/dojo/cyuo/">← 中央区空手道場・教室の一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "中央東支部", "subject": "中央東支部 体験・入会問い合わせ" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/mikami/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/mikami/index.astro";
const $$url = "/dojo/mikami";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
