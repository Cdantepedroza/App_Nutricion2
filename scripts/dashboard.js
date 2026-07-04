const periodTabs = document.querySelector("[data-period-tabs]");
const linkedCards = document.querySelectorAll("[data-next-screen]");

if (periodTabs) {
  periodTabs.addEventListener("click", (event) => {
    const selectedTab = event.target.closest(".period-tab");

    if (!selectedTab) return;

    periodTabs.querySelectorAll(".period-tab").forEach((tab) => {
      tab.classList.remove("is-active");
    });

    selectedTab.classList.add("is-active");

    if (selectedTab.dataset.nextScreen) {
      window.location.href = selectedTab.dataset.nextScreen;
    }
  });
}

linkedCards.forEach((card) => {
  card.addEventListener("click", () => {
    window.location.href = card.dataset.nextScreen;
  });

  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    window.location.href = card.dataset.nextScreen;
  });
});
