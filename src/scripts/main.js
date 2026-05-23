import { initHamburger } from './modules/hamburger.js';
import { initFvSlider } from './modules/fvSlider.js';
import { initAccordion } from './modules/accordion.js';
import { initSmoothScroll, initBackToTop } from './modules/smoothScroll.js';
import { initModal } from './modules/modal.js';


document.addEventListener('DOMContentLoaded', () => {
  initHamburger();
  initSmoothScroll();
  initBackToTop();
  initFvSlider();
  initAccordion();
  initModal();
});