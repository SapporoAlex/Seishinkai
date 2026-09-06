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
      name: "南区藤野空手教室(清心会藤野支部)",
      sub: "藤野空手倶楽部",
      address: "札幌市南区藤野2条7丁目2-1　藤野地区センター",
      schedule: ["土曜10:00-11:00"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "南区藤野支部の空手教室", "description": "札幌市南区藤野地区センターの清心会空手教室のご案内。キッズ・ジュニア空手中心、稽古日と会場情報をご紹介します。", "lang": "ja", "path": "/dojo/fujino/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・藤野支部</h1>
      </div>
      <h2 class="detail-page__heading">南区藤野空手教室・清心会藤野支部</h2>
      <p class="detail-page__lead">
        藤野空手教室は、藤野地区センターをお借りして平成23年3月より活動しています。<br>
        キッズ空手、ジュニア空手として園児から中学生を中心としていきたいと思います。<span class="u-color-red u-bold">体験者募集中です!</span><br>
        また親子での参加、シニアクラスの参加者を歓迎します。<br>
        体育会系部活の延長線上のような道場が多い中、健康・体育の空手としてサークル感覚で楽しく練習して学ぶことを目指しています。
      </p>

      <div class="detail-page__highlight-box">
        <p class="detail-page__highlight-text">負けない心、くじけない心をつくる 清心会空手</p>
      </div>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      
      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "南区藤野支部/藤野空手倶楽部", "facts": [
    { label: "設立", value: "平成23年(2011)3月" },
    { label: "設立者", value: "小谷野雄介" },
    { label: "歴代", value: "ハシニ、高嶋、兵頭" },
    { label: "担当", value: "本部直轄" }
  ], "image": {
    src: "/assets/images/dojo/img_fujino_bld.jpg",
    alt: "藤野地区センター",
    width: 243,
    height: 192
  }, "address": "札幌市南区藤野2条7丁目2-1　藤野地区センター", "mapHref": "https://www.google.com/maps/place/〒061-2282+北海道札幌市南区藤野２条７丁目２−１+札幌市藤野地区センター/data=!4m2!3m1!1s0x5f0ad4a1fe1a011b:0xa26126fd6c360ffa?sa=X&ved=2ahUKEwi_mrjHjrHhAhXHG6YKHZu7AM0Q8gEwAHoECAoQAQ", "mapQuery": "札幌市南区藤野2条7丁目2-1　藤野地区センター", "viewOnMapLabel": "Google Mapsで見る" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_fujino_01.jpg" alt="藤野支部の稽古風景" width="319" height="205" loading="lazy">
        </figure>

        <figure>
          <img src="/assets/images/dojo/img_fujino_02.jpg" alt="藤野支部の稽古風景" width="319" height="205" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_fujino_03.jpg" alt="藤野支部の稽古風景" width="319" height="205" loading="lazy">
        </figure>

        <figure>
          <img src="/assets/images/dojo/img_fujino_04.jpg" alt="藤野支部の稽古風景" width="319" height="205" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
        ※不定期で一般部員有段者が参加します
      </p>

      <p class="detail-page__back">
        <a href="/dojo/minami-kiyota/">← 清田区・南区空手道場・教室の一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "藤野支部", "subject": "藤野 体験・入会問い合わせ" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/fujino/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/fujino/index.astro";
const $$url = "/dojo/fujino";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
