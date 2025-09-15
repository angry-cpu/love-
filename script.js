document.addEventListener("click", () => {
  const audioRomantica = document.getElementById("musicaRomantica");
  const audioEpica = document.getElementById("musicaEpica");
  audioRomantica.muted = false;
  audioEpica.muted = false;
});
window.onload = function() {
  const heartsContainer = document.querySelector('.hearts');
  const btn = document.getElementById("btnSecreto");
  const mensaje = document.getElementById("mensajeRomantico");

  btn.addEventListener("click", () => {
    mensaje.style.display = (mensaje.style.display === "none") ? "block" : "none";
  });

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 10 + 20) + 'px';
    heart.innerText = '💖';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
  setInterval(createHeart, 400);
}

// ---- POPUP INTERACTIVO ----
function preguntar(opcion) {
  const popup = document.getElementById("popup");
  const preguntaEl = document.getElementById("popup-pregunta");
  const opcionesEl = document.getElementById("popup-opciones");
  popup.style.display = "flex";
  opcionesEl.innerHTML = "";

  let pregunta = "";
  let opciones = [];

  if (opcion === "peliculas") {
    pregunta = "¿Qué prefieres?";
    opciones = [
      { texto: "Ir al cine 🍿", mensaje: "🎬 ¡Palomitas y risas contigo!", color:"turquesa", musica:"epica" },
      { texto: "Netflix en casa 📺", mensaje: "🛋️ ¡Sofá y peli romántica!", color:"rosita", musica:"romantica" }
    ];
  } else if (opcion === "libros") {
    pregunta = "¿Qué género amas más?";
    opciones = [
      { texto: "Fantasía ✨", mensaje: "🧙 ¡Tu imaginación no tiene límites!", color:"turquesa", musica:"epica" },
      { texto: "Romance 💕", mensaje: "🌹 ¡El amor siempre gana!", color:"rosita", musica:"romantica" }
    ];
  } else if (opcion === "colores") {
    pregunta = "¿Cuál eliges?";
    opciones = [
      { texto: "Rosita 💗", mensaje: "💗 Dulce como tú.", color:"rosita", musica:"romantica" },
      { texto: "Turquesa 💎", mensaje: "💎 Tranquilo como el mar.", color:"turquesa", musica:"epica" }
    ];
  } else if (opcion === "comida") {
    pregunta = "¿Qué se te antoja?";
    opciones = [
      { texto: "Sushi 🍣", mensaje: "🍣 ¡Hora de sushi gourmet!", color:"turquesa", musica:"epica" },
      { texto: "Hamburguesa 🍔", mensaje: "🍔 ¡Con papas y salsa!", color:"rosita", musica:"romantica" }
    ];
  } else if (opcion === "anime") {
    pregunta = "¿Prefieres?";
    opciones = [
      { texto: "Romance 💕", mensaje: "💕 Amor anime, miradas mágicas.", color:"rosita", musica:"romantica" },
      { texto: "Acción ⚔️", mensaje: "⚔️ ¡Listo para batallas épicas!", color:"turquesa", musica:"epica" }
    ];
  }

  preguntaEl.textContent = pregunta;

  opciones.forEach(op => {
    const btn = document.createElement("button");
    btn.textContent = op.texto;
    btn.onclick = () => mostrarResultado(op.mensaje, op.color, op.musica);
    opcionesEl.appendChild(btn);
  });
}

function mostrarResultado(mensaje, color, musica) {
  const infoDiv = document.getElementById("info");
  const popup = document.getElementById("popup");
  const body = document.body;

  const audioRomantica = document.getElementById("musicaRomantica");
  const audioEpica = document.getElementById("musicaEpica");

  popup.style.display = "none";
  infoDiv.className = "info fade";

  // Quitar fondos
  body.classList.remove("rosita-bg", "turquesa-bg");

  // Detener música antes de cambiar
  audioRomantica.pause(); audioRomantica.currentTime = 0;
  audioEpica.pause(); audioEpica.currentTime = 0;

  setTimeout(() => {
    infoDiv.innerHTML = `<div class="resultado ${color}">${mensaje}</div>`;
    infoDiv.classList.add("mostrar");

    // Fondo dinámico
    if (color === "rosita") body.classList.add("rosita-bg");
    if (color === "turquesa") body.classList.add("turquesa-bg");

    // Música dinámica
    if (musica === "romantica") audioRomantica.play();
    if (musica === "epica") audioEpica.play();
  }, 300);
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}