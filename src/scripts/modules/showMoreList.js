// Generic progressive-reveal list: shows a batch of items, reveals the next
// batch each time the trigger is clicked, hides the trigger once everything
// is shown. Reusable anywhere — just mark up:
//   <div data-show-more data-batch-size="3">
//     <ul><li data-show-more-item class="is-hidden">...</li>...</ul>
//     <button data-show-more-trigger>...</button>
//   </div>
export function initShowMoreLists() {
  const lists = document.querySelectorAll("[data-show-more]");

  lists.forEach((list) => {
    const trigger = list.querySelector("[data-show-more-trigger]");
    if (!trigger) return;

    const batchSize = Number(list.dataset.batchSize) || 3;

    trigger.addEventListener("click", () => {
      const hiddenItems = list.querySelectorAll("[data-show-more-item].is-hidden");
      Array.from(hiddenItems)
        .slice(0, batchSize)
        .forEach((item) => item.classList.remove("is-hidden"));

      if (list.querySelectorAll("[data-show-more-item].is-hidden").length === 0) {
        trigger.style.display = "none";
      }
    });
  });
}
