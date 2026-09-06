import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender.js';
import { $ as $$BranchTable } from './BranchTable.js';
import { $ as $$DojoContactSection } from './DojoContactSection.js';
import { $ as $$BranchInfoCard } from './BranchInfoCard.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const entries = [
    {
      marker: "",
      name: "白石本部",
      address: "札幌市白石区中央1条5丁目4-36　白石福祉会館",
      schedule: ["木曜クラス", "①17:30", "②18:30"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "清心館白石空手道場 (白石本部)の空手教室", "description": "札幌市白石区本通、国道12号線沿いの清心館本通道場のご案内。キッズ・ジュニア空手教室の稽古日と会場情報をご紹介します。", "lang": "ja", "path": "/dojo/shiroishi/shiroishi/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">白石支部（旧白石清心館道場）</h1>
      </div>

      <h2 class="detail-page__heading">白石区の空手道場です</h2>

      <p class="detail-page__lead">
        本部道場は、昭和61年(1986)3月より白石区で常設道場としてスタート、旧札幌支部時代から数えると半世紀に渡り活動している札幌で老舗の空手道場です。<br>
        現在の白石区栄通りにある総本部道場が完成した平成24年(2012)まで、本部道場として活動していました。<br>
        令和8年8月(2026)より、会場を白石中央福祉会館2Fに移動して活動。<br>
        白石区内の空手道場としては最も古い道場のひとつと言えます。本部直轄で一般部有段者が交代で指導します。<br>
        現在は園児から中学生を主体とするジュニアクラス中心に活動しています。<br>
        会館は、12号線と本郷通の間に位置します。
      </p>
        
      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "白石本部", "facts": [
    { label: "創設", value: "昭和51年(1975)札幌支部" },
    { label: "設立", value: "昭和61年(1986)清心館大久保道場" },
    { label: "設立者", value: "大久保勝美" },
    { label: "歴代", value: "三村、石森、大久保翼、他" },
    { label: "担当者", value: "本部直轄" }
  ], "image": {
    src: "/assets/images/dojo/img_shiroishi_bld.jpg",
    alt: "白石中央福祉会館",
    width: 240,
    height: 168
  }, "address": "札幌市白石区中央1条4丁目", "mapHref": "https://www.google.com/maps/search/?api=1&query=Shiroishi+Chuo+Welfare+Hall", "mapQuery": "白石中央福祉会館", "viewOnMapLabel": "Google Mapsで見る" })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/dojo/img_shiroishi_01.jpg" alt="白石支部の稽古風景" width="353" height="191" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_shiroishi_02.jpg" alt="白石支部の稽古風景" width="353" height="191" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_shiroishi_03.jpg" alt="白石支部の稽古風景" width="353" height="191" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/dojo/img_shiroishi_04.jpg" alt="白石支部の稽古風景" width="353" height="191" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__note">
          ※白石中央福祉会館を利用する形となります。
      </p>

      <!-- <h2 class="detail-page__heading">2005年～2026年7月までの21年間、この会場で活動</h2> -->

      <!-- <div class="detail-gallery">
        <figure>
          <img
            src="/assets/images/dojo/img_shiroishi-former_01.jpg"
            alt="本通清心館(焼肉徳寿の隣)"
            width="253"
            height="144"
            loading="lazy"
          />
        </figure>
        <figure>
          <img
            src="/assets/images/dojo/img_shiroishi-former_02.jpg"
            alt="本通清心館(焼肉徳寿の隣)"
            width="253"
            height="144"
            loading="lazy"
          />
        </figure>
      </div> -->

      <p class="detail-page__back">
        <a href="/dojo/shiroishi/">← 白石区の空手教室一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "白石本部", "subject": "白石中央福祉会館 体験・入会問い合わせ" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/shiroishi/shiroishi/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/shiroishi/shiroishi/index.astro";
const $$url = "/dojo/shiroishi/shiroishi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
