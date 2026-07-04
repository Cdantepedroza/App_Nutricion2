const categoryTriggers = document.querySelectorAll("[data-category-trigger]");
const shoppingFilters = document.querySelector("[data-shopping-filters]");

categoryTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const content = document.getElementById(trigger.getAttribute("aria-controls"));
    const isOpen = trigger.getAttribute("aria-expanded") === "true";

    trigger.setAttribute("aria-expanded", String(!isOpen));
    content?.classList.toggle("is-open", !isOpen);

    if (window.navigator.vibrate) {
      window.navigator.vibrate(5);
    }
  });
});

document.querySelectorAll(".shopping-item input").forEach((checkbox) => {
  const item = checkbox.closest(".shopping-item");
  item?.classList.toggle("is-checked", checkbox.checked);

  checkbox.addEventListener("change", () => {
    item?.classList.toggle("is-checked", checkbox.checked);
  });
});

if (shoppingFilters) {
  shoppingFilters.addEventListener("click", (event) => {
    const filter = event.target.closest(".shopping-filter");

    if (!filter) return;

    shoppingFilters.querySelectorAll(".shopping-filter").forEach((button) => {
      button.classList.remove("is-active");
    });

    filter.classList.add("is-active");
  });
}
