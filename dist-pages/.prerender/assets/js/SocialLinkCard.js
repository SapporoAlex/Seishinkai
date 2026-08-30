import { c as createComponent } from './BaseLayout.js';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment } from './prerender.js';

const $$SocialLinkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SocialLinkCard;
  const { name, image, links } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="social-link-card fade-up-in">
  <div class="social-link-card__avatar">
    ${image ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(name, "alt")} loading="lazy">` : renderTemplate`<span class="social-link-card__avatar-fallback" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.887h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94Z"></path>
          </svg>
        </span>`}
  </div>
  <div class="social-link-card__info">
    <p class="social-link-card__name">${name}</p>
    <div class="social-link-card__links">
      ${links.map((l, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${i > 0 && renderTemplate`<span class="social-link-card__dot" aria-hidden="true">
                ・
              </span>`}<a${addAttribute(l.href, "href")} target="_blank" rel="noopener noreferrer">
              ${l.label}
            </a>
          ` })}`)}
    </div>
  </div>
</div>`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/components/SocialLinkCard.astro", void 0);

export { $$SocialLinkCard as $ };
