export function initFvSlider() {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper is not loaded, FV slider not initialized');
    return;
  }

  const fvSection = document.getElementById('fv');
  if (!fvSection) return;

  const swiperContainer = fvSection.querySelector('.swiper-container');
  if (!swiperContainer) return;



  const fvSwiper = new Swiper(swiperContainer, {
    loop: true,
    initialSlide: 0,
    autoplay: {
      delay: 100,
      disableOnInteraction: false,
    },
    speed: 5000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    allowTouchMove: false,
    pagination: false,
    navigation: false,
  });

  fvSwiper.autoplay.stop();

  setTimeout(() => {
    fvSwiper.autoplay.start();
  }, 5000);

  return fvSwiper;
}
