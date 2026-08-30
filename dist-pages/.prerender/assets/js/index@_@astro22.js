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
      name: "福住支部",
      address: "福住1条1丁目5-5 福住児童会館",
      schedule: ["水曜18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "豊平区福住支部の空手教室", "description": "札幌市豊平区福住の清心会空手道場・教室のご案内。ジュニアクラス中心の空手クラブ、稽古日と会場情報をご紹介します。", "lang": "ja", "path": "/dojo/fukuzumi/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・福住支部</h1>
      </div>

      <h2 class="detail-page__heading">豊平区福住空手教室・清心会福住支部</h2>

      <p class="detail-page__lead">
        福住空手教室は、福住児童会館をお借りして平成22年9月より活動を始めました。<br>
        設立以来、ジュニア空手として開始し、園児から中学生を中心としています。<br>
        また親子での参加、シニアクラスの参加者を歓迎します。<br>
        体育会系部活の延長線上のような道場が多い中、健康・体育の空手としてサークル感覚で楽しく練習して学ぶことを目指しています。
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "清心会福住支部/福住空手倶楽部", "facts": [
    { label: "設立", value: "平成22年(2010)9月" },
    { label: "歴代", value: "小谷野、室木、髙嶋" },
    { label: "担当", value: "本部直轄" }
  ], "image": {
    src: "/assets/images/dojo/img_fukuzumi_bld.jpg",
    alt: "福住児童会館",
    width: 262,
    height: 174
  }, "address": "札幌市豊平区福住1条1丁目5-5　福住児童会館", "mapHref": "https://www.google.com/maps/place/福住児童会館/@43.020565,141.402402,15z/data=!4m5!3m4!1s0x0:0x749365fd7c50d1bf!8m2!3d43.020565!4d141.402402", "mapQuery": "43.020565,141.402402", "viewOnMapLabel": "Google Mapsで見る" })}

      <p class="detail-page__note">
        ※臨時会場　アークス月寒東　月寒東3条8丁目1-30
      </p>

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_fukuzumi_01.jpg" alt="福住支部の稽古風景" width="308" height="189" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_fukuzumi_02.jpg" alt="福住支部の稽古風景" width="308" height="189" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/dojo/toyohira/">← 豊平区空手道場・教室の一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "福住支部", "subject": "福住体験申込" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/fukuzumi/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/fukuzumi/index.astro";
const $$url = "/dojo/fukuzumi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
