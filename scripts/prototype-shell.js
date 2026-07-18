if (!document.querySelector(".prototype-shell")) {
  const pageClasses = Array.from(document.body.classList);
  const shell = document.createElement("div");
  const scrollArea = document.createElement("div");
  shell.className = "prototype-shell";
  scrollArea.className = "prototype-scroll";

  pageClasses.forEach((className) => {
    shell.classList.add(className);
    document.body.classList.remove(className);
  });

  const children = Array.from(document.body.children);
  const firstScript = children.find((child) => child.tagName === "SCRIPT");
  const contentChildren = firstScript
    ? children.slice(0, children.indexOf(firstScript))
    : children;

  const fixedSelectors = [
    "[data-bottom-nav]",
    ".bottom-action",
    ".ai-bottom-action",
    ".shopping-summary",
    ".recommendation-header",
  ];

  shell.appendChild(scrollArea);

  contentChildren.forEach((child) => {
    const shouldFloat = fixedSelectors.some((selector) => child.matches(selector));
    if (shouldFloat) {
      shell.appendChild(child);
      return;
    }

    scrollArea.appendChild(child);
  });

  document.body.insertBefore(shell, firstScript || null);
  document.body.classList.add("prototype-shell-enabled");
}

const showPrototypeToast = (message) => {
  if (!message) return;

  let toast = document.querySelector(".prototype-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "prototype-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.querySelector(".prototype-shell")?.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(showPrototypeToast.hideTimer);
  showPrototypeToast.hideTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1800);
};

document.addEventListener("click", (event) => {
  const toastTrigger = event.target.closest("[data-toast]");
  if (toastTrigger) {
    showPrototypeToast(toastTrigger.dataset.toast);
  }

  const nextTrigger = event.target.closest("[data-next-screen]");
  if (!nextTrigger || nextTrigger.dataset.nextHandled === "true" || nextTrigger.hasAttribute("data-pressable")) {
    return;
  }

  window.location.href = nextTrigger.dataset.nextScreen;
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const nextTrigger = event.target.closest("[data-next-screen]");
  if (!nextTrigger || nextTrigger.tagName === "BUTTON" || nextTrigger.tagName === "A") return;

  event.preventDefault();
  window.location.href = nextTrigger.dataset.nextScreen;
});
