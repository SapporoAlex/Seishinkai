// Hamburger menu functionality for Astro header

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('js-hamburger');
  const drawer = document.getElementById('js-drawer');
  const closeBtn = document.getElementById('js-drawer-close');
  const backdrop = document.getElementById('js-drawer-backdrop');
  if (!hamburger || !drawer || !closeBtn || !backdrop) return;

  function openDrawer() {
    drawer.classList.add('header__drawer--open');
    drawer.setAttribute('aria-hidden', 'false');
    backdrop.classList.add('header__drawer-backdrop--open');
  }
  function closeDrawer() {
    drawer.classList.remove('header__drawer--open');
    drawer.setAttribute('aria-hidden', 'true');
    backdrop.classList.remove('header__drawer-backdrop--open');
  }
  hamburger.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
});
