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
      name: "旭川外国人限定空手クラブ",
      address: "旭川市内(会場準備中)",
      schedule: ["未定(メンバー募集中)"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "旭川市外国人空手教室", "description": "旭川在住の外国人限定の清心会空手クラブ。メンバー募集中、準備が整い次第開始予定です。Karate club for foreigners living in Asahikawa.", "lang": "ja", "path": "/dojo/asahikawa/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="dojo-list">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">DOJO</span>
        <h1 class="section-title">清心会空手道連盟・旭川外国人限定空手クラブ</h1>
      </div>

      <h2 class="detail-page__heading">旭川外国人限定空手教室・清心会旭川支部</h2>

      <p class="detail-page__lead">
        準備中<br>
        旭川在住の外国人限定の空手クラブを準備中です。<br>
        We are preparing a karate club for foreigners living in Asahikawa. If
        you are interested, please let me know.<br>
        メンバーが集まり次第、開始します。<br>
        It will start as soon as the members get together.
      </p>

      ${renderComponent($$result2, "BranchTable", $$BranchTable, { "entries": entries })}

      ${renderComponent($$result2, "BranchInfoCard", $$BranchInfoCard, { "name": "旭川外国人限定空手クラブ", "facts": [
    { label: "設立者", value: "Inoue Shogo" },
    { label: "facebook", value: "Inoue Shogo" }
  ] })}

      <div class="detail-gallery">
        <figure>
          <img src="/assets/images/membership/foreign-trainees/foreign-trainees_01.jpeg" alt="旭川外国人限定空手クラブ" width="353" height="276" loading="lazy">
        </figure>
        <figure>
          <img src="/assets/images/membership/foreign-trainees/foreign-trainees_03.jpg" alt="旭川外国人限定空手クラブ" width="353" height="276" loading="lazy">
        </figure>
      </div>

      <p class="detail-page__back">
        <a href="/dojo/kitahiro/">← 帯広・恵庭・旭川の空手教室一覧へ戻る</a>
      </p>

      ${renderComponent($$result2, "DojoContactSection", $$DojoContactSection, { "dojoName": "旭川外国人限定空手クラブ", "subject": "Asahikawa karate" })}
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/asahikawa/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/dojo/asahikawa/index.astro";
const $$url = "/dojo/asahikawa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
