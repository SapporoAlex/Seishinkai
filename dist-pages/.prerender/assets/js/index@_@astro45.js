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
      name: "菊水元町支部",
      address: "白石区菊水元町7条2丁目 菊水元町南町内会館",
      schedule: ["火曜18:30(冬時間18:50-)"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "白石区菊水元町支部の空手教室", "description": "札幌市白石区菊水元町、菊水元町南町内会館を会場にした清心会空手道場・教室のご案内。ジュニア空手クラスの稽古日をご紹介します。", "lang": "ja", "path": "/dojo/kikusui2/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・菊水元町支部</h1>
      </div>

      <h2 class="detail-page__heading">菊水元町空手教室・清心会菊水元町支部</h2>

      <p class="detail-page__lead">
        菊水元町空手教室は、平成22年4月より菊水元町児童会館で活動を始めました。<br>
        令和2年4月より菊水元町南町内会館ホールに会場を移転し、火曜18:30より楽しい汗を流しています。<br>
        設立以来、ジュニア空手として開始し、園児から中学生を中心としています。<br>
        また親子での参加を歓迎します。<br>
        体育会系部活の延長線上のような道場が多い中、健康・体育の空手としてサークル感覚で楽しく練習して学ぶことを目指しています。
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}


      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "清心会菊水元町支部/菊水元町空手倶楽部", "facts": [
    { label: "設立", value: "平成22年(2010)4月" },
    { label: "歴代", value: "大久保翼、室木" },
    { label: "担当", value: "本部直轄" }
  ], "image": {
    src: "/assets/images/legacy/dojo/kikusui2/img2.jpg",
    alt: "菊水元町南町内会館",
    width: 247,
    height: 157
  }, "instructors": [
    { src: "/assets/images/instructors/yoshida.jpg", alt: "指導 吉田", name: "吉田" }
  ], "address": "札幌市白石区菊水元町7条2丁目6-5 菊水元町南町内会館", "mapHref": "https://www.google.com/maps/place/菊水元町+南町内会館/@43.071849,141.410593,15z/data=!4m5!3m4!1s0x0:0xe2232039b08716fc!8m2!3d43.071849!4d141.410593", "mapQuery": "43.071849,141.410593", "viewOnMapLabel": "Google Mapsで見る" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_kikusui2_01.jpg" alt="練習風景" width="247" height="157" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_kikusui2_02.jpg" alt="練習風景" width="247" height="157" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_kikusui2_03.jpg" alt="練習風景" width="247" height="157" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_kikusui2_04.jpg" alt="練習風景" width="247" height="157" loading="lazy">
        </figure>
      </div>
      <p class="detail-page__back">
        <a href="/dojo/shiroishi/">← 白石区の空手教室一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "菊水元町支部", "subject": "菊水元町 体験・入会問い合わせ" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/kikusui2/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/kikusui2/index.astro";
const $$url = "/dojo/kikusui2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
