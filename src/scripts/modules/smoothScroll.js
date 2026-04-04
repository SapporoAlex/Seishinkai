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
