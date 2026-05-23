export function initModal() {
  const openButtons = Array.from(document.querySelectorAll('[data-modal-trigger]'));
  const closeButtons = Array.from(document.querySelectorAll('[data-modal-close]'));

  const openModal = (id) => {
    const modal = document.querySelector(`[data-modal="${id}"]`);
    if (!modal) return;
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.dojo-modal__close')?.focus();
  };

  const closeModal = (id) => {
    const modal = document.querySelector(`[data-modal="${id}"]`);
    if (!modal) return;
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  openButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-modal-trigger');
      if (id) openModal(id);
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-modal-close');
      if (id) closeModal(id);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const activeModal = document.querySelector('.dojo-modal.is-active');
    if (!activeModal) return;
    const id = activeModal.getAttribute('data-modal');
    if (id) closeModal(id);
  });
}