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
      name: "南区常盤空手教室(清心会常盤支部)",
      sub: "常盤空手クラブ",
      address: "札幌市南区常盤1条1丁目3-1　常盤団地会館",
      schedule: ["月曜16:30-17:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "南区常盤支部の空手教室", "description": "札幌市南区常盤団地会館の清心会空手教室のご案内。キッズ・ジュニア空手中心、稽古日と会場情報をご紹介します。", "lang": "ja", "path": "/dojo/tokiwa/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・常盤支部</h1>
      </div>

      <h2 class="detail-page__heading">南区常盤空手教室・清心会常盤支部</h2>

      <p class="detail-page__lead">
        常盤空手教室は平成24年9月よりスタートし、当初町内会館から現在の常盤児童会館に会場を移して活動していましたが、再び常盤団地会館にて活動しています(令和2年4月より)。<br>
        キッズ空手、ジュニア空手として園児から中学生を中心としていきたいと思います。体験者募集中です!<br>
        また親子での参加、シニアクラスの参加者を歓迎します。<br>
        体育会系部活の延長線上のような道場が多い中、健康・体育の空手としてサークル感覚で楽しく練習して学ぶことを目指しています。
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "清心会常盤支部/常盤空手クラブ", "facts": [
    { label: "設立", value: "平成24年(2012)9月" },
    { label: "設立者", value: "室木拓士(2012-2020)" },
    { label: "歴代", value: ["山根豊(2013-2014)", "及川義彦(2020-2022)"] },
    { label: "担当", value: "本部直轄" }
  ], "image": {
    src: "/assets/images/dojo/img_tokiwa_bld.jpg",
    alt: "常盤団地会館",
    width: 259,
    height: 161
  }, "mapHref": "https://www.google.com/maps/@42.9544281,141.3499737,16z?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D", "mapQuery": "42.9544281,141.3499737", "viewOnMapLabel": "Google Mapsで見る" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_tokiwa_01.jpg" alt="常盤支部の稽古風景" width="316" height="194" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_tokiwa_02.jpg" alt="常盤支部の稽古風景" width="316" height="194" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_tokiwa_03.jpg" alt="常盤支部の稽古風景" width="316" height="194" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_tokiwa_04.jpg" alt="常盤支部の稽古風景" width="316" height="194" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※コロナの影響により下記臨時会場を移動しました。南区常盤1条1丁目3-1<a href="https://www.google.com/maps/place/〒005-0851+北海道札幌市南区常盤１条１丁目３−１+常盤団地会館/@42.955108,141.344939,17z/data=!3m1!4b1!4m5!3m4!1s0x5f752b30e3655f31:0x43a4187663d955fc!8m2!3d42.9551041!4d141.3471277" target="_blank" rel="noopener">常盤団地会館</a>
      </p>

      <p class="detail-page__back">
        <a href="/dojo/minami-kiyota/">← 清田区・南区空手道場・教室の一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "常盤支部", "subject": "常盤支部 体験・入会問い合わせ" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/tokiwa/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/tokiwa/index.astro";
const $$url = "/dojo/tokiwa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
