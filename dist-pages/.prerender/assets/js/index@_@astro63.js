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
      name: "長沼町空手クラブ",
      address: "長沼町中央南2丁目 長沼スポーツセンター",
      schedule: ["火曜18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "長沼町の空手教室", "description": "北海道長沼町の清心会空手道場・長沼支部のご案内。稽古日と会場情報をご紹介します。", "lang": "ja", "path": "/dojo/naganuma/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・長沼支部</h1>
      </div>

      <h2 class="detail-page__heading">長沼町空手教室・清心会長沼支部</h2>

      <p class="detail-page__lead">
        長沼空手教室は、長沼町にお住まいで北広島支部に通われていた会員がメンバーを集め、平成23年8月よりスタートしました。<br>
        会場は、長沼スポーツセンターです。<br>
        キッズ・ジュニアクラスを中心としています。親子での参加、シニアクラスの参加も歓迎します。<br>
        体育会系部活の延長線上のような道場が多い中、健康・体育の空手としてサークル感覚で楽しく練習して学ぶことを目指しています。<br>
        ※園児3才は親子参加で月会費は無料です
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "長沼支部", "facts": [
    { label: "設立", value: "平成23年(2011)8月" },
    { label: "設立者", value: "古館暁子" },
    { label: "担当指導", value: "本部直轄" }
  ], "image": {
    src: "/assets/images/dojo/img_naganuma_bld.jpg",
    alt: "長沼町スポーツセンター",
    width: 200,
    height: 131
  }, "address": "長沼町中央南2丁目　長沼スポーツセンター", "mapHref": "https://www.google.com/maps/place/長沼町スポーツセンター/@43.007859,141.69233,15z/data=!4m2!3m1!1s0x0:0xc6cede9b78bc4cf5", "mapQuery": "43.007859,141.69233", "viewOnMapLabel": "Google Mapsで見る" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_naganuma_01.jpg" alt="長沼支部の稽古風景" width="237" height="124" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_naganuma_02.jpg" alt="長沼支部の稽古風景" width="237" height="124" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_naganuma_03.jpg" alt="長沼支部の稽古風景" width="237" height="124" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_naganuma_04.jpg" alt="長沼支部の稽古風景" width="237" height="124" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※本部直轄につき指導員は交代で複数名が参加します。
      </p>

      <p class="detail-page__back">
        <a href="/dojo/tobetsu/">← 一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "長沼支部", "subject": "長沼体験申込" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/naganuma/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/naganuma/index.astro";
const $$url = "/dojo/naganuma";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
