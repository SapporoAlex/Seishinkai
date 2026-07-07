export function initHamburger() {
  // ensure DOM is ready when called from main
  // find elements
  const hamburger = document.getElementById('js-hamburger');
  const drawer = document.getElementById('js-drawer');
  const closeBtn = document.getElementById('js-drawer-close');
  const backdrop = document.getElementById('js-drawer-backdrop');
  if (!hamburger || !drawer || !closeBtn || !backdrop) {
    // nothing to do
    return;
  }

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

  // remove existing click listeners by cloning the button
  const newHamburger = hamburger.cloneNode(true);
  hamburger.parentNode.replaceChild(newHamburger, hamburger);
  newHamburger.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  // return cleanup if needed
  return function destroy() {
    newHamburger.removeEventListener('click', openDrawer);
    closeBtn.removeEventListener('click', closeDrawer);
    backdrop.removeEventListener('click', closeDrawer);
  };
}
