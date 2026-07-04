document.querySelectorAll("[data-pressable]").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("is-pressed");

    window.setTimeout(() => {
      button.classList.remove("is-pressed");
      if (button.dataset.nextScreen) {
        window.location.href = button.dataset.nextScreen;
      }
    }, 120);
  });
});
