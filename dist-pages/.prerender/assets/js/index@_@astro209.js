import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const NEWSLETTER_PASSWORD = "test123";
  const newsletters = [
    { title: "会報 第517号（2026年8月）", href: "/news/newsletter/会報517-2026.8.1s.pdf" },
    { title: "会報 第516号（2026年7月）", href: "/news/newsletter/会報516-2026.7.1.pdf" },
    { title: "会報 第515号（2026年6月）", href: "/news/newsletter/会報515-2026.6.1.pdf" },
    { title: "会報 第514号（2026年5月）", href: "/news/newsletter/会報514-2026.5.1.pdf" },
    { title: "会報 第513号（2026年4月）", href: "/news/newsletter/会報513-2026.4.1s.pdf" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "会報一覧", "description": "清心会空手道 会員限定のPDF会報一覧です。", "lang": "ja", "path": "/news/newsletter/", "breadcrumb": [{ path: "/news/", name: "ニュース・SNS" }] }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="news">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">NEWSLETTER</span>
        <h1 class="section-title">会報一覧</h1>
      </div>
      <p class="page-intro">
        会員限定のPDF会報です。合言葉を入力すると一覧が表示されます。
      </p>

      <div class="newsletter-gate" data-newsletter-gate${addAttribute(NEWSLETTER_PASSWORD, "data-newsletter-gate-password")}>
        <div class="newsletter-gate__prompt" data-newsletter-gate-prompt>
          <button type="button" class="newsletter-gate__open" data-newsletter-gate-open>
            会報を表示する
          </button>
          <form class="newsletter-gate__form is-hidden" data-newsletter-gate-form>
            <label class="newsletter-gate__label" for="newsletter-gate-password">合言葉を入力してください</label>
            <div class="newsletter-gate__row">
              <input type="password" id="newsletter-gate-password" class="newsletter-gate__input" data-newsletter-gate-input autocomplete="off">
              <button type="submit" class="newsletter-gate__submit">表示</button>
            </div>
            <p class="newsletter-gate__error is-hidden" data-newsletter-gate-error>
              合言葉が違います。もう一度お試しください。
            </p>
          </form>
        </div>

        <div class="newsletter-list is-hidden" data-newsletter-gate-content data-show-more data-batch-size="3">
          <ul class="newsletter-list__items">
            ${newsletters.map((n, i) => renderTemplate`<li${addAttribute(["newsletter-list__item", { "is-hidden": i >= 3 }], "class:list")} data-show-more-item>
                  <a${addAttribute(n.href, "href")} target="_blank" rel="noopener">
                    ${n.title}（PDF）
                  </a>
                </li>`)}
          </ul>
          ${newsletters.length > 3 && renderTemplate`<button type="button" class="newsletter-list__show-more" data-show-more-trigger>
                もっと見る
              </button>`}
        </div>
      </div>

      <p class="news__note">
        <a href="/news/">← ニュース・SNS一覧に戻る</a>
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/news/newsletter/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/news/newsletter/index.astro";
const $$url = "/news/newsletter";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
