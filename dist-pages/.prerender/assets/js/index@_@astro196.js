import { c as createComponent, $ as $$BaseLayout } from './BaseLayout.js';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { name: "Hado-mon Hokkaido", href: "http://hado.dpcnp.info/" },
    { name: "Fumonkai Karate-do Federation", href: "https://fumonkaikawasaki.wixsite.com/fumonkai-karate" },
    { name: "Keiwakai Ebetsu Hospital", href: "http://keiwakai-ebetsu.or.jp/" },
    { name: "Karate-do Seishikaikan", href: "http://karate-seishikaikan.info/" },
    { name: "Okinawa Yu-You-Juku", href: "http://okinawayouyoujuku.bex.jp/" },
    { name: "Kokusai Sanshinkan", href: "https://www.sanshinkarate.se/" },
    { name: "Navi Hokkaido", href: "https://navihokkaido.com/" },
    { name: "WRBBOF", href: "http://thewrbbof.com/index.html" },
    { name: "Budo Dojo Navi", href: "https://www.budo-dojo-navi.com/" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Recommended Links", "description": "A list of sites recommended by Seishinkai Karate.", "lang": "en", "path": "/en/recommended-links/" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<section class="detail-page">
    <div class="page-container">
      <div class="section__title-area">
        <span class="section-label">LINKS</span>
        <h1 class="section-title">Recommended Links</h1>
      </div>

      <p class="detail-page__intro">Sites recommended by Seishinkai Karate.</p>

      <section class="partner-section">
        <ul class="partner-section__list">
          ${links.map((link) => renderTemplate`<li class="partner-section__item">
              <a${addAttribute(link.href, "href")} target="_blank" rel="noopener noreferrer">
                ${link.name}
              </a>
            </li>`)}
        </ul>
      </section>

      <p class="detail-page__back">
        <a href="/en/links-partners/">← Back to Links & Partners</a>
      </p>
    </div>
  </section>
` })}`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/recommended-links/index.astro", void 0);

const $$file = "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/pages/en/recommended-links/index.astro";
const $$url = "/en/recommended-links";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
