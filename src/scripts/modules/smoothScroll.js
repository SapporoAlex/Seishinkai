/**
 * スムーススクロール＋scroll-margin対応（固定ヘッダー考慮）
 *
 * @param {string|HTMLElement} target - スクロール先（セレクタ or DOM要素）
 * @param {HTMLElement} headerEl - 固定ヘッダーの要素
 */
export function smoothScrollTo(target, headerEl) {
  const el = typeof target === "string" ? document.querySelector(target) : target;

  if (!el) {
    console.warn("[smoothScrollTo] ターゲットが見つかりません:", target);
    return;
  }

  if (!(headerEl instanceof HTMLElement)) {
    console.warn("[smoothScrollTo] ヘッダー要素が正しくありません:", headerEl);
    return;
  }

  const offset = headerEl.offsetHeight;
  const originalScrollMargin = el.style.scrollMarginBlockStart;

  // 一時的に scroll-margin-block-start を設定
  el.style.scrollMarginBlockStart = `${offset}px`;

  // スムーススクロール
  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  window.setTimeout(() => {
    if (originalScrollMargin) {
      el.style.scrollMarginBlockStart = originalScrollMargin;
    } else {
      el.style.removeProperty('scroll-margin-block-start');
    }
  }, 500);

  el.focus({ preventScroll: true });

  if (document.activeElement !== el) {
    const hadTabIndex = el.hasAttribute("tabindex");
    const prevTabIndex = el.getAttribute("tabindex");
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
    if (!hadTabIndex) {
      el.removeAttribute("tabindex");
    } else if (prevTabIndex !== null) {
      el.setAttribute("tabindex", prevTabIndex);
    }
  }

  const hash = `#${el.id}`;
  if (hash !== window.location.hash) {
    history.pushState({}, "", hash);
  }
}

export function initSmoothScroll() {
  const header = document.querySelector('.header');
  if (!header) {
    return;
  }

  const handleAnchorClick = (event) => {
    const anchor = event.target.closest('a[href]');
    if (!anchor) {
      return;
    }

    const href = anchor.getAttribute('href');
    if (!href || !href.includes('#')) {
      return;
    }

    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) {
      return;
    }

    const hash = url.hash;
    if (!hash || hash === '#') {
      return;
    }

    const target = document.getElementById(hash.slice(1));
    if (!target) {
      return;
    }

    event.preventDefault();
    smoothScrollTo(target, header);

    const drawer = document.getElementById('js-drawer');
    const backdrop = document.getElementById('js-drawer-backdrop');
    if (drawer?.classList.contains('header__drawer--open')) {
      drawer.classList.remove('header__drawer--open');
      drawer.setAttribute('aria-hidden', 'true');
      backdrop?.classList.remove('header__drawer-backdrop--open');
    }
  };

  document.addEventListener('click', handleAnchorClick);

  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) {
      smoothScrollTo(target, header);
    }
  }
}

export function initBackToTop() {
  const button = document.getElementById('js-back-to-top');
  if (!button) {
    return;
  }

  const updateVisibility = () => {
    const shouldShow = window.scrollY > window.innerHeight;
    button.classList.toggle('back-to-top--visible', shouldShow);
  };

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();
}
