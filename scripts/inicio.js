const startButton = document.querySelector("[data-start-button]");
const floatingElement = document.querySelector(".floating-animation");

window.addEventListener("pointermove", (event) => {
  if (!floatingElement) return;

  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;

  floatingElement.style.translate = `${x * 20}px ${y * 20}px`;
});

if (startButton) {
  startButton.addEventListener("click", () => {
    const icon = startButton.querySelector(".button-icon");

    startButton.classList.add("is-loading");

    if (icon) {
      icon.textContent = "progress_activity";
    }

    window.setTimeout(() => {
      window.location.href = "./personalizar-plan.html";
    }, 800);
  });
}
