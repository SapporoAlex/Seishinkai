import { initHamburger } from './modules/hamburger.js';
import { initFvSlider } from './modules/fvSlider.js';
import { initSmoothScroll, initBackToTop } from './modules/smoothScroll.js';

document.addEventListener('DOMContentLoaded', () => {

  initHamburger();
  initSmoothScroll();
  initBackToTop();
  initFvSlider();

});