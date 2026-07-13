export function initAccordion() {
  const accordions = document.querySelectorAll('.accordion');
  if (!accordions.length) return;

  accordions.forEach((acc) => {
    const triggers = Array.from(acc.querySelectorAll('[data-accordion-trigger]'));

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
      btn.classList.toggle('is-active', opened);
      panel.setAttribute('aria-hidden', opened ? 'false' : 'true');

      // remove existing click listeners by cloning the button
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);

      // each trigger only toggles its own panel, so any number can be open at once
      newBtn.addEventListener('click', () => {
        const isOpen = panel.classList.contains('is-open');
        panel.classList.toggle('is-open', !isOpen);
        panel.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
        newBtn.classList.toggle('is-active', !isOpen);
        newBtn.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      });
    });
  });

  return function destroy() {
    // no-op: listeners replaced/cloned so GC will collect when nodes removed
  };
}
