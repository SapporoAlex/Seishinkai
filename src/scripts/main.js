import { initHamburger } from "./modules/hamburger.js";
import { initFvSlider } from "./modules/fvSlider.js";
import { initAccordion } from "./modules/accordion.js";
import { initSmoothScroll, initBackToTop } from "./modules/smoothScroll.js";
import { initModal } from "./modules/modal.js";
import { initContentSliders } from "./modules/contentSlider.js";
import { initShowMoreLists } from "./modules/showMoreList.js";
import { initImageLightbox } from "./modules/imageLightbox.js";

document.addEventListener("DOMContentLoaded", () => {
  initHamburger();
  initSmoothScroll();
  initBackToTop();
  initFvSlider();
  initAccordion();
  initModal();
  initContentSliders();
  initShowMoreLists();
  initImageLightbox();

  const animatedElements = document.querySelectorAll(
    ".fade-in, .fade-up-in, .fade-left-in, .fade-right-in, " +
      ".detail-gallery figure, .detail-img-pair figure, .detail-media img, .detail-media--big figure, .youtube-card, .photo-grid figure, " +
      ".about__timeline-figure a",
  );

  if ("IntersectionObserver" in window && animatedElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.2,
      },
    );

    animatedElements.forEach((element) => observer.observe(element));
  } else {
    animatedElements.forEach((element) => element.classList.add("is-visible"));
  }
});
