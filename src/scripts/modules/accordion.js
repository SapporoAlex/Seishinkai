export function initAccordion() {
  const accordions = document.querySelectorAll('.accordion');
  if (!accordions.length) return;

  accordions.forEach((acc) => {
    const triggers = Array.from(acc.querySelectorAll('[data-accordion-trigger]'));
    const panels = Array.from(acc.querySelectorAll('[data-accordion-panel]'));

    triggers.forEach((btn) => {
      const key = btn.getAttribute('data-accordion-trigger');
      const panel = acc.querySelector(`[data-accordion-panel="${key}"]`);
      if (!panel) return;

      // Ensure button is a button element and has type=button
      if (btn.tagName.toLowerCase() === 'button' && !btn.type) btn.type = 'button';

      // Ensure panels have ids for aria-controls
      if (!panel.id) panel.id = `accordion-panel-${Math.random().toString(36).slice(2,9)}`;
      btn.setAttribute('aria-controls', panel.id);

      // set initial aria state
      const opened = panel.classList.contains('is-open');
      btn.setAttribute('aria-expanded', opened ? 'true' : 'false');
      panel.setAttribute('aria-hidden', opened ? 'false' : 'true');

      const onClick = () => {
        const isOpen = panel.classList.contains('is-open');

        // close all other panels in this accordion
        panels.forEach((p) => {
          if (p === panel) return;
          p.classList.remove('is-open');
          p.setAttribute('aria-hidden', 'true');
        });

        // toggle this panel
        if (isOpen) {
          panel.classList.remove('is-open');
          panel.setAttribute('aria-hidden', 'true');
        } else {
          panel.classList.add('is-open');
          panel.setAttribute('aria-hidden', 'false');
        }

        // update trigger states
        triggers.forEach((t) => {
          const k = t.getAttribute('data-accordion-trigger');
          const p = acc.querySelector(`[data-accordion-panel="${k}"]`);
          const openedNow = p && p.classList.contains('is-open');
          t.classList.toggle('is-active', openedNow);
          t.setAttribute('aria-expanded', openedNow ? 'true' : 'false');
        });
      };

      // remove existing click listeners by cloning the button
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
      newBtn.addEventListener('click', onClick);
    });
  });

  return function destroy() {
    // no-op: listeners replaced/cloned so GC will collect when nodes removed
  };
}
