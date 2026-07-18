document.querySelectorAll(".progress-ring").forEach((circle) => {
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  const progress = Number(circle.dataset.progress || 0);
  const offset = circumference - (progress / 100) * circumference;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;

  window.setTimeout(() => {
    circle.style.strokeDashoffset = offset;
  }, 300);
});

const moodMessages = {
  normal: "Buen momento para preparar una comida base y dejar una porci\u00f3n lista para ma\u00f1ana.",
  apurada: "Hoy cuenta resolver bien: elige una opci\u00f3n r\u00e1pida, completa y f\u00e1cil de repetir.",
  cansada: "Cuidarte tambi\u00e9n puede ser descansar: prioriza algo simple, tibio y sin mucha preparaci\u00f3n.",
};

const progressMessages = {
  normal: "Hoy no buscamos perfecci\u00f3n, buscamos una buena decisi\u00f3n.",
  apurada: "Comer saludable tambi\u00e9n puede ser r\u00e1pido.",
  cansada: "Si est\u00e1s cansada, igual puedes cuidarte.",
};

const adaptiveCard = document.querySelector("#adaptive-card p");
const progressMessage = document.querySelector("#progress-message");

document.querySelectorAll(".mood-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".mood-chip").forEach((item) => item.classList.remove("is-active"));
    chip.classList.add("is-active");

    const mood = chip.dataset.mood || "normal";
    if (adaptiveCard) adaptiveCard.textContent = moodMessages[mood];
    if (progressMessage) progressMessage.textContent = progressMessages[mood];
  });
});

const dayInsight = document.querySelector("#day-insight p");

document.querySelectorAll(".day-pill").forEach((day) => {
  day.addEventListener("click", () => {
    document.querySelectorAll(".day-pill").forEach((item) => item.classList.remove("is-active"));
    day.classList.add("is-active");

    const name = day.dataset.day;
    const meals = Number(day.dataset.meals || 0);
    const energy = day.dataset.energy || "Flexible";
    const mealText = meals === 1 ? "1 comida cuidada" : `${meals} comidas cuidadas`;
    const encouragement = meals >= 3
      ? "Repite lo simple que funcion\u00f3."
      : "Ajusta sin culpa y vuelve con una decisi\u00f3n peque\u00f1a.";

    if (dayInsight) {
      dayInsight.innerHTML = `<strong>${name}:</strong> ${mealText} y energ\u00eda ${energy.toLowerCase()}. ${encouragement}`;
    }
  });
});
