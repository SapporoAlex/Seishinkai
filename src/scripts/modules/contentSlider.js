export function initContentSliders() {
  if (typeof Swiper === "undefined") {
    console.warn("Swiper is not loaded, content sliders not initialized");
    return;
  }

  const sliders = document.querySelectorAll("[data-content-slider]");

  sliders.forEach((root) => {
    const swiperEl = root.querySelector(".swiper");
    if (!swiperEl || swiperEl.swiper) return;

    const slidesPerView = Number(root.dataset.slidesPerView) || 1;
    const spaceBetween = Number(root.dataset.spaceBetween) || 20;
    const slideCount = root.querySelectorAll(".swiper-slide").length;
    const loop = slideCount > slidesPerView;
    const autoplaySeconds = Number(root.dataset.autoplaySeconds) || 0;

    new Swiper(swiperEl, {
      loop,
      speed: 600,
      slidesPerView: 1,
      spaceBetween,
      watchOverflow: true,
      pagination: {
        el: root.querySelector(".swiper-pagination"),
        clickable: true,
      },
      navigation: {
        nextEl: root.querySelector(".swiper-button-next"),
        prevEl: root.querySelector(".swiper-button-prev"),
      },
      keyboard: {
        enabled: true,
      },
      a11y: {
        enabled: true,
      },
      autoplay: autoplaySeconds
        ? {
            delay: autoplaySeconds * 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }
        : false,
      breakpoints:
        slidesPerView > 1
          ? {
              768: {
                slidesPerView,
                spaceBetween,
              },
            }
          : undefined,
    });
  });
}
