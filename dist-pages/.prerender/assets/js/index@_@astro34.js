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
      name: "清田区平岡空手教室(清心会平岡支部)",
      address: "札幌市清田区平岡5条1丁目1-40　クラブハウス・プラッツ",
      schedule: ["火曜16:00-17:00", "木曜19:00-20:00"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "清田区平岡支部の空手教室", "description": "札幌市清田区平岡の清心会空手道場・教室のご案内。ジュニアクラス中心の空手教室、稽古日と会場情報をご紹介します。", "lang": "ja", "path": "/dojo/hiraoka/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・平岡支部</h1>
      </div>

      <h2 class="detail-page__heading">清田区平岡空手教室・清心会平岡支部</h2>

      <p class="detail-page__lead">
        木曜クラスは、平成22年3月に平岡児童会館で開始され、火曜クラスは平成28年9月に町内会の依頼で町内会館でスタートし、その後現在のクラブハウス・プラッツに会場を移しました。<br>
        令和2年4月に2会場で行われていましたが隣接するのとコロナ騒動による児童館貸出停止を受け、同プラッツへ木曜クラスを移転し曜日別に活動しています。<br>
        いずれの曜日もジュニアクラス中心ですが、火曜は時間帯も早めにして園児、低学年が参加しやすいようにしています。<br>
        特に親子での参加、シニアクラスの参加者を歓迎します。<br>
        体育会系部活の延長線上のような道場が多い中、健康・体育の空手としてサークル感覚で楽しく練習して学ぶことを目指しています。
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "清田区平岡支部", "facts": [
    {
      label: "設立",
      value: ["平成22年(2010)3月(木曜クラス)", "平成28年(2016)9月(火曜クラス)"]
    },
    { label: "設立者", value: "大久保翼" },
    { label: "担当リーダー", value: "本部直轄" }
  ], "image": {
    src: "/assets/images/dojo/img_hiraoka_bld.jpg",
    alt: "クラブハウス・プラッツ",
    width: 250,
    height: 192
  }, "address": "札幌市清田区平岡5条1丁目1-40　クラブハウス・プラッツ", "mapHref": "https://www.google.com/maps/place/〒004-0875+北海道札幌市清田区平岡５条１丁目１−４０+クラブハウスプラッツ/@43.0087937,141.4468732,17z/data=!3m1!4b1!4m5!3m4!1s0x5f0b2b2be2f705a1:0xd912bff6f45f6a74!8m2!3d43.0087937!4d141.4490619", "mapQuery": "43.0087937,141.4468732", "viewOnMapLabel": "Google Mapsで見る" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_hiraoka_01.jpg" alt="平岡支部の稽古風景" width="247" height="149" loading="lazy">
          <figcaption>火曜クラスの稽古風景</figcaption>
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_hiraoka_02.jpg" alt="平岡支部の稽古風景" width="245" height="134" loading="lazy">
          <figcaption>木曜クラスの稽古風景</figcaption>
        </figure>
      </div>

      <p class="detail-page__note">
        ■本部直轄/交代で指導となります
      </p>

      <p class="detail-page__back">
        <a href="/dojo/minami-kiyota/">← 清田区・南区空手道場・教室の一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "平岡支部", "subject": "平岡体験申込" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/hiraoka/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/hiraoka/index.astro";
const $$url = "/dojo/hiraoka";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
