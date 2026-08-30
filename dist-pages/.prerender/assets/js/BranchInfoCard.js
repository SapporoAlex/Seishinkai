import { c as createComponent } from './BaseLayout.js';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment } from './prerender.js';

const $$BranchInfoCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BranchInfoCard;
  const {
    name,
    facts,
    image,
    instructors,
    address,
    addressNote,
    mapHref,
    mapQuery,
    mapTitle = name,
    viewOnMapLabel = "Google Maps"
  } = Astro2.props;
  const mapEmbedSrc = mapQuery ? `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=17&output=embed` : void 0;
  return renderTemplate`${maybeRenderHead()}<div class="branch-card fade-up-in">
  <div class="branch-card__top">
    ${image && renderTemplate`<div class="branch-card__media">
          <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")}${addAttribute(image.width ?? 480, "width")}${addAttribute(image.height ?? 360, "height")} loading="lazy">
        </div>`}

    <div class="branch-card__body">
      <h2 class="branch-card__name">${name}</h2>

      <dl class="branch-card__facts">
        ${facts.map((fact) => renderTemplate`<div class="branch-card__fact">
              <dt>${fact.label}</dt>
              <dd>
                ${Array.isArray(fact.value) ? fact.value.map((line) => renderTemplate`<span class="branch-card__fact-line">${line}</span>`) : fact.value}
              </dd>
            </div>`)}
      </dl>

      ${address && renderTemplate`<p class="branch-card__address">
            ${mapHref ? renderTemplate`<a${addAttribute(mapHref, "href")} target="_blank" rel="noopener">
                ${address}
              </a>` : address}
            ${addressNote && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
                <br>
                <span class="branch-card__address-note">${addressNote}</span>
              ` })}`}
          </p>`}
    </div>
  </div>

  ${instructors && instructors.length > 0 && renderTemplate`<div class="branch-card__instructors">
        ${instructors.map((instructor) => renderTemplate`<figure class="branch-card__instructor">
            <img${addAttribute(instructor.src, "src")}${addAttribute(instructor.alt, "alt")} loading="lazy">
            <figcaption>${instructor.name}</figcaption>
          </figure>`)}
      </div>`}

  ${mapEmbedSrc && renderTemplate`<div class="branch-card__map">
        <iframe${addAttribute(mapEmbedSrc, "src")}${addAttribute(mapTitle, "title")} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        ${mapHref && renderTemplate`<a class="branch-card__map-link"${addAttribute(mapHref, "href")} target="_blank" rel="noopener">
            ${viewOnMapLabel} →
          </a>`}
      </div>`}
</div>`;
}, "C:/Users/McKinley Alex/Documents/GitHub/Seishinkai/src/components/BranchInfoCard.astro", void 0);

export { $$BranchInfoCard as $ };
