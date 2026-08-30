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
      name: "豊平公園支部",
      address: "豊平区豊平8条11丁目 豊平若者活動センター",
      schedule: ["金曜16:00"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "豊平区豊平公園支部の空手教室", "description": "札幌市豊平区の豊平若者活動センターを会場とする清心会空手道場・教室のご案内。ジュニアクラス中心の空手クラブ、稽古日と会場情報をご紹介します。", "lang": "ja", "path": "/dojo/toyohira-k/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・豊平公園支部</h1>
      </div>

      <h2 class="detail-page__heading">豊平公園空手教室・清心会豊平公園支部</h2>

      <p class="detail-page__lead">
        豊平公園空手教室は、豊平若者活動センターをお借りして平成27年6月より活動を始めました。<br>
        設立以来、ジュニア空手として開始し、園児から中学生を中心としています。<br>
        また親子での参加、シニアクラスの参加者を歓迎します。<br>
        体育会系部活の延長線上のような道場が多い中、健康・体育の空手としてサークル感覚で楽しく練習して学ぶことを目指しています。<br>
        ※令和7年7月〜10月末まで若者活動センターが改装工事で休館となるため、その期間は<a href="/dojo/hq/">本部</a>道場で稽古を実施します。
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "豊平公園支部", "facts": [
    { label: "設立", value: "平成27年(2015)6月" },
    { label: "歴代", value: "及川、島" },
    { label: "担当", value: "本部直轄" }
  ], "image": {
    src: "/assets/images/legacy/dojo/toyohira-k/imgC.jpg",
    alt: "豊平若者活動センター",
    width: 236,
    height: 176
  }, "address": "豊平8条11丁目3-5　豊平若者活動センター", "mapHref": "https://www.google.com/maps/place/札幌市豊平若者活動センター/@43.0430538,141.3731148,15z/data=!4m2!3m1!1s0x0:0x8c7de2009ed78c7a", "mapQuery": "43.0430538,141.3731148", "viewOnMapLabel": "Google Mapsで見る" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/legacy/dojo/toyohira-k/img8.jpg" alt="豊平公園支部の稽古風景" width="282" height="162" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/dojo/toyohira/">← 豊平区空手道場・教室の一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "豊平公園支部", "subject": "豊平公園支部 体験・入会問い合わせ" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/toyohira-k/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/toyohira-k/index.astro";
const $$url = "/dojo/toyohira-k";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
