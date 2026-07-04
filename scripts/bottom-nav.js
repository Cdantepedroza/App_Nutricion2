const bottomNavMounts = document.querySelectorAll("[data-bottom-nav]");

const bottomNavItems = [
  {
    id: "inicio",
    label: "Inicio",
    icon: "home",
    href: "./dashboard.html",
  },
  {
    id: "plan",
    label: "Plan",
    icon: "calendar_today",
    href: "./plan-semanal.html",
  },
  {
    id: "compras",
    label: "Compras",
    icon: "shopping_cart",
    href: "./lista-compras.html",
  },
  {
    id: "progreso",
    label: "Progreso",
    icon: "bar_chart",
    href: "./progreso.html",
  },
  {
    id: "perfil",
    label: "Perfil",
    icon: "person",
    href: "./perfil.html",
  },
];

bottomNavMounts.forEach((mount) => {
  const activeItem = mount.dataset.active || "inicio";

  document.body.classList.add("has-bottom-nav");
  mount.closest(".prototype-shell")?.classList.add("has-bottom-nav");

  mount.innerHTML = `
    <nav class="app-bottom-nav" aria-label="Navegaci&oacute;n principal">
      <div class="app-bottom-nav__inner">
        ${bottomNavItems
          .map((item) => {
            const activeClass = item.id === activeItem ? " is-active" : "";
            const ariaCurrent = item.id === activeItem ? ' aria-current="page"' : "";

            return `
              <a class="app-bottom-nav__item${activeClass}" href="${item.href}"${ariaCurrent}>
                <span class="material-symbols-outlined" aria-hidden="true">${item.icon}</span>
                <span>${item.label}</span>
              </a>
            `;
          })
          .join("")}
      </div>
    </nav>
  `;
});
