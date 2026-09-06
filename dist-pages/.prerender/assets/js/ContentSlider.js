import { c as createComponent } from './BaseLayout.js';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from './prerender.js';

const $$ContentSlider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ContentSlider;
  const {
    slides,
    id = `content-slider-${Math.random().toString(36).slice(2, 9)}`,
    ratio = "16 / 9",
    slidesPerView = 1,
    spaceBetween = 20,
    lang = "ja",
    autoplaySeconds,
    class: className
  } = Astro2.props;
  const prevLabel = lang === "en" ? "Previous slide" : "前のスライド";
  const nextLabel = lang === "en" ? "Next slide" : "次のスライド";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["content-slider", className], "class:list")}${addAttribute(id, "id")} data-content-slider${addAttribute(slidesPerView, "data-slides-per-view")}${addAttribute(spaceBetween, "data-space-between")}${addAttribute(autoplaySeconds, "data-autoplay-seconds")}>
  <div class="swiper">
    <div class="swiper-wrapper">
      ${slides.map((slide) => {
    const Tag = slide.href ? "a" : "div";
    const isExternal = slide.target === "_blank";
    const linkAttrs = slide.href ? {
      href: slide.href,
      target: isExternal ? "_blank" : void 0,
      rel: isExternal ? "noopener noreferrer" : void 0
    } : {};
    return renderTemplate`<div class="swiper-slide">
              ${renderComponent($$result, "Tag", Tag, { "class": "content-slider__slide", ...linkAttrs }, { "default": ($$result2) => renderTemplate`
                <div class="content-slider__media"${addAttribute(`aspect-ratio: ${ratio}`, "style")}>
                  <img${addAttribute(slide.image, "src")}${addAttribute(slide.alt, "alt")} loading="lazy">
                </div>
                ${(slide.title || slide.text) && renderTemplate`<div class="content-slider__body">
                    ${slide.title && renderTemplate`<h3 class="content-slider__title">${slide.title}</h3>`}
                    ${slide.text && renderTemplate`<p class="content-slider__text">${slide.text}</p>`}
                  </div>`}` })}
            </div>`;
  })}
    </div>

    <div class="swiper-pagination"></div>
    <button type="button" class="swiper-button-prev"${addAttribute(prevLabel, "aria-label")}></button>
    <button type="button" class="swiper-button-next"${addAttribute(nextLabel, "aria-label")}></button>
  </div>
</div>`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/components/ContentSlider.astro", void 0);

export { $$ContentSlider as $ };
