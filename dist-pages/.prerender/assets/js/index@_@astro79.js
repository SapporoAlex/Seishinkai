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
      name: "澄川支部",
      address: "豊平区平岸1条22丁目 ビックハウスエクストラ店2F",
      schedule: ["金曜18:30(R3.4より)"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "澄川支部の空手教室", "description": "札幌市豊平区平岸のビックハウスエクストラ店2Fを会場とする清心会空手道場・教室のご案内。本部直轄教室、稽古日と会場情報をご紹介します。", "lang": "ja", "path": "/dojo/sumikawa-n/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・澄川支部</h1>
      </div>

      <h2 class="detail-page__heading">澄川空手教室・清心会澄川支部</h2>

      <p class="detail-page__lead">
        澄川空手教室は、平成22年9月に、ビックハウスエクストラ店2Fのコミュニティースペースを会場にして設立されました。<br>
        ジュニアクラス中心の空手クラブです。<br>
        特に親子での参加、シニアクラスの参加者を歓迎します。<br>
        体育会系部活の延長線上のような道場が多い中、健康・体育の空手としてサークル感覚で楽しく練習して学ぶことを目指しています。<br>
        大型店舗の中にありますので、お子様が練習している時にお買い物ができますので、とても便利です。
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "清心会澄川西支部", "facts": [
    { label: "設立", value: "平成22年(2010)9月" },
    { label: "歴代", value: "大久保翼、髙嶋" },
    { label: "担当", value: "本部直轄" }
  ], "image": {
    src: "/assets/images/dojo/img_sumikawa-n_bld.jpg",
    alt: "ビックハウスエクストラ店",
    width: 243,
    height: 174
  }, "address": "札幌市豊平区平岸1条22丁目2-15　ビックハウスエクストラ店2F", "mapHref": "https://www.google.com/maps/place/%E3%83%93%E3%83%83%E3%82%AF%E3%83%8F%E3%82%A6%E3%82%B9+%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%88%E3%83%A9%E5%BA%97/@43.0147543,141.3584402,17z", "mapQuery": "43.0147543,141.3584402", "viewOnMapLabel": "Google Mapsで見る" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_sumikawa-n_01.jpg" alt="澄川支部の稽古風景" width="286" height="170" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_sumikawa-n_02.jpg" alt="澄川支部の稽古風景" width="286" height="170" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_sumikawa-n_03.jpg" alt="澄川支部の稽古風景" width="286" height="170" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_sumikawa-n_04.jpg" alt="澄川支部の稽古風景" width="286" height="170" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        本部直轄教室のため、稽古日は金曜18:30-19:25(基本・相対/少年部・一般部)、19:30-20:00(型、他/一般及び3級以上)です。
      </p>

      <p class="detail-page__back">
        <a href="/dojo/toyohira/">← 豊平区空手道場・教室の一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "澄川西支部", "subject": "澄川体験申込" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/sumikawa-n/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/sumikawa-n/index.astro";
const $$url = "/dojo/sumikawa-n";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
