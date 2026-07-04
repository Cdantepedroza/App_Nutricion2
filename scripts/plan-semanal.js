const weekDays = document.querySelector("[data-week-days]");

if (weekDays) {
  weekDays.addEventListener("click", (event) => {
    const selectedDay = event.target.closest(".day-card");

    if (!selectedDay) return;

    weekDays.querySelectorAll(".day-card").forEach((day) => {
      day.classList.remove("is-selected");
    });

    selectedDay.classList.add("is-selected");
  });
}

document.querySelectorAll("[data-pressable]").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("is-pressed");

    window.setTimeout(() => {
      button.classList.remove("is-pressed");
    }, 120);
  });
});

document.querySelectorAll("[data-next-screen]").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = button.dataset.nextScreen;
  });
});
