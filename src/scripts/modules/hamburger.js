export function initHamburger() {
  // ensure DOM is ready when called from main
  // find elements
  const hamburger = document.getElementById("js-hamburger");
  const drawer = document.getElementById("js-drawer");
  const closeBtn = document.getElementById("js-drawer-close");
  const backdrop = document.getElementById("js-drawer-backdrop");
  if (!hamburger || !drawer || !closeBtn || !backdrop) {
    // nothing to do
    return;
  }

  function setBodyScrollLocked(locked) {
    const html = document.documentElement;
    const body = document.body;

    if (locked) {
      const scrollY = window.scrollY;
      body.dataset.scrollY = String(scrollY);
      body.classList.add("is-menu-open");
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      return;
    }

    body.classList.remove("is-menu-open");
    html.style.overflow = "";
    body.style.overflow = "";
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";

    const scrollY = Number(body.dataset.scrollY || "0");
    if (scrollY) {
      window.scrollTo(0, scrollY);
    }
    delete body.dataset.scrollY;
  }

  function openDrawer() {
    drawer.classList.add("header__drawer--open");
    drawer.setAttribute("aria-hidden", "false");
    backdrop.classList.add("header__drawer-backdrop--open");
    setBodyScrollLocked(true);
  }

  function closeDrawer() {
    drawer.classList.remove("header__drawer--open");
    drawer.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("header__drawer-backdrop--open");
    setBodyScrollLocked(false);
  }

  // remove existing click listeners by cloning the button
  const newHamburger = hamburger.cloneNode(true);
  hamburger.parentNode.replaceChild(newHamburger, hamburger);
  newHamburger.addEventListener("click", openDrawer);
  closeBtn.addEventListener("click", closeDrawer);
  backdrop.addEventListener("click", closeDrawer);

  // return cleanup if needed
  return function destroy() {
    newHamburger.removeEventListener("click", openDrawer);
    closeBtn.removeEventListener("click", closeDrawer);
    backdrop.removeEventListener("click", closeDrawer);
  };
}
