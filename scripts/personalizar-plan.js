const routineOptions = document.querySelector("[data-routine-options]");
const timeOptions = document.querySelector("[data-time-options]");
const nextScreenButton = document.querySelector("[data-next-screen]");

if (routineOptions) {
  routineOptions.addEventListener("click", (event) => {
    const chip = event.target.closest(".routine-chip");

    if (!chip) return;

    chip.classList.toggle("is-selected");
  });
}

if (nextScreenButton) {
  nextScreenButton.addEventListener("click", () => {
    window.location.href = nextScreenButton.dataset.nextScreen;
  });
}

if (timeOptions) {
  timeOptions.addEventListener("click", (event) => {
    const card = event.target.closest(".time-card");

    if (!card) return;

    timeOptions.querySelectorAll(".time-card").forEach((timeCard) => {
      timeCard.classList.remove("is-selected");
    });

    card.classList.add("is-selected");

    if (window.navigator.vibrate) {
      window.navigator.vibrate(10);
    }
  });
}
