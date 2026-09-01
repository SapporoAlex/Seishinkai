// Soft client-side password gate: click a button, type the passphrase,
// the list appears. This is NOT real access control — the passphrase and
// the linked PDFs are both fully visible to anyone who inspects the page
// or already has a direct file URL. It only hides the list from casual
// browsing. Markup contract:
//   <div data-newsletter-gate data-newsletter-gate-password="test123">
//     <div data-newsletter-gate-prompt>
//       <button data-newsletter-gate-open>...</button>
//       <form data-newsletter-gate-form class="is-hidden">
//         <input data-newsletter-gate-input type="password" />
//         <p data-newsletter-gate-error class="is-hidden">...</p>
//       </form>
//     </div>
//     <div data-newsletter-gate-content class="is-hidden">...</div>
//   </div>
const STORAGE_KEY = "newsletter-gate-unlocked";

export function initNewsletterGate() {
  const gates = document.querySelectorAll("[data-newsletter-gate]");

  gates.forEach((gate) => {
    const password = gate.dataset.newsletterGatePassword;
    const prompt = gate.querySelector("[data-newsletter-gate-prompt]");
    const openButton = gate.querySelector("[data-newsletter-gate-open]");
    const form = gate.querySelector("[data-newsletter-gate-form]");
    const input = gate.querySelector("[data-newsletter-gate-input]");
    const error = gate.querySelector("[data-newsletter-gate-error]");
    const content = gate.querySelector("[data-newsletter-gate-content]");
    if (!prompt || !content) return;

    const unlock = () => {
      content.classList.remove("is-hidden");
      prompt.classList.add("is-hidden");
    };

    let alreadyUnlocked = false;
    try {
      alreadyUnlocked = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch (e) {
      // sessionStorage unavailable (private mode etc.) — just re-prompt.
    }

    if (alreadyUnlocked) {
      unlock();
      return;
    }

    if (openButton && form) {
      openButton.addEventListener("click", () => {
        openButton.classList.add("is-hidden");
        form.classList.remove("is-hidden");
        input?.focus();
      });
    }

    form?.addEventListener("submit", (event) => {
      event.preventDefault();

      if (input && input.value === password) {
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch (e) {
          // ignore — unlock still works for this page view
        }
        unlock();
      } else {
        error?.classList.remove("is-hidden");
        if (input) {
          input.value = "";
          input.focus();
        }
      }
    });
  });
}
