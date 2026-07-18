const profileMessages = [
  "No necesitas hacerlo perfecto. Solo volver a una buena decisi\u00f3n cuando puedas.",
  "Tu bienestar empieza con algo simple.",
  "Cada comida organizada cuenta.",
  "La constancia se construye con pasos peque\u00f1os.",
];

const profileMessage = document.querySelector("#profile-message p");
let profileMessageIndex = 0;

if (profileMessage) {
  window.setInterval(() => {
    profileMessageIndex = (profileMessageIndex + 1) % profileMessages.length;
    profileMessage.textContent = profileMessages[profileMessageIndex];
  }, 4500);
}

document.querySelectorAll(".ritual-item").forEach((ritual) => {
  ritual.addEventListener("click", () => {
    ritual.classList.toggle("is-on");
    const state = ritual.querySelector("strong");

    if (state) {
      state.textContent = ritual.classList.contains("is-on") ? "Activo" : "Pausado";
    }
  });
});
