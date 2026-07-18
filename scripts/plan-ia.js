const aiSummaries = {
  rapido: "Priorizando recetas r\u00e1pidas, compras simples y alternativas para d\u00edas cansados.",
  economico: "Reutilizando ingredientes base para comprar menos y evitar desperdicios esta semana.",
  variedad: "Aumentando sabores y texturas sin complicar los tiempos de preparaci\u00f3n.",
  cocina: "Reduciendo preparaciones largas y sumando opciones listas o de armado r\u00e1pido.",
};

const aiSummary = document.querySelector("#ai-summary");

document.querySelectorAll(".adjustment-chips button").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".adjustment-chips button").forEach((item) => {
      item.classList.remove("is-active");
    });

    chip.classList.add("is-active");

    if (aiSummary) {
      aiSummary.textContent = aiSummaries[chip.dataset.aiMode] || aiSummaries.rapido;
    }
  });
});
