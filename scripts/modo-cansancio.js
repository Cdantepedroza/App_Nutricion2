const fatigueOptions = document.querySelector("[data-fatigue-options]");
const quickCards = document.querySelectorAll(".quick-recipe-card");

if (fatigueOptions) {
  fatigueOptions.addEventListener("click", (event) => {
    const selectedChip = event.target.closest(".fatigue-chip");

    if (!selectedChip) return;

    fatigueOptions.querySelectorAll(".fatigue-chip").forEach((chip) => {
      chip.classList.remove("is-active", "is-pulsing");
    });

    selectedChip.classList.add("is-active", "is-pulsing");

    window.setTimeout(() => {
      selectedChip.classList.remove("is-pulsing");
    }, 150);
  });
}

quickCards.forEach((card, index) => {
  window.setTimeout(() => {
    card.classList.add("is-visible");
  }, 100 + index * 100);
});

document.querySelectorAll("[data-pressable]").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("is-pressed");

    window.setTimeout(() => {
      button.classList.remove("is-pressed");
    }, 120);
  });
});
