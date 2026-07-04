const objectivesContainer = document.querySelector("[data-objectives]");
const nextScreenButton = document.querySelector("[data-next-screen]");

if (objectivesContainer) {
  objectivesContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".objective-card");

    if (!card) return;

    card.classList.toggle("is-selected");
    card.classList.add("is-pulsing");

    window.setTimeout(() => {
      card.classList.remove("is-pulsing");
    }, 160);
  });
}

if (nextScreenButton) {
  nextScreenButton.addEventListener("click", () => {
    window.location.href = nextScreenButton.dataset.nextScreen;
  });
}
