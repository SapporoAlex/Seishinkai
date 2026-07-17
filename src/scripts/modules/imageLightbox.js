// Lightbox for plain (non-linked) gallery images only. Images already
// wrapped in an <a> (video links, profile links, dojo-page links) keep
// their normal navigation behavior and are skipped here entirely.
export function initImageLightbox() {
  const gallerySelector = [
    ".detail-gallery img",
    ".photo-grid img",
    ".about__image-case-set img",
  ].join(", ");

  const candidates = Array.from(document.querySelectorAll(gallerySelector)).filter(
    (img) => !img.closest("a"),
  );

  if (!candidates.length) return;

  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.innerHTML = `
    <div class="image-lightbox__overlay" data-lightbox-close></div>
    <button type="button" class="image-lightbox__close" data-lightbox-close aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <div class="image-lightbox__content">
      <img class="image-lightbox__image" src="" alt="" />
      <p class="image-lightbox__caption" hidden></p>
    </div>
  `;
  document.body.appendChild(lightbox);

  const imgEl = lightbox.querySelector(".image-lightbox__image");
  const captionEl = lightbox.querySelector(".image-lightbox__caption");
  let lastFocused = null;

  const open = (src, alt, captionText) => {
    imgEl.src = src;
    imgEl.alt = alt || "";

    if (captionText) {
      captionEl.textContent = captionText;
      captionEl.hidden = false;
    } else {
      captionEl.textContent = "";
      captionEl.hidden = true;
    }

    lastFocused = document.activeElement;
    lightbox.classList.add("is-active");
    document.body.style.overflow = "hidden";
    lightbox.querySelector(".image-lightbox__close").focus();
  };

  const close = () => {
    lightbox.classList.remove("is-active");
    document.body.style.overflow = "";
    imgEl.src = "";
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  };

  candidates.forEach((img) => {
    img.classList.add("is-lightbox-trigger");
    img.setAttribute("role", "button");
    img.setAttribute("tabindex", "0");

    const trigger = () => {
      const figure = img.closest("figure, .about__image-case-set");
      const captionNode = figure?.querySelector("figcaption, small");
      open(img.currentSrc || img.src, img.alt, captionNode?.textContent?.trim());
    };

    img.addEventListener("click", trigger);
    img.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        trigger();
      }
    });
  });

  lightbox.querySelectorAll("[data-lightbox-close]").forEach((el) => {
    el.addEventListener("click", close);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-active")) close();
  });
}
