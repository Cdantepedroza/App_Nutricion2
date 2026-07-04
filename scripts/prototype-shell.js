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
