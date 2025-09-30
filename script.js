// Música desbloqueada con primer clic
document.addEventListener("click", () => {
  const music = document.getElementById("musicaFondo");
  if (music.paused) {
    music.muted = false;
    music.play();
  }
});

// === Frases (100 diferentes) ===
const frases = [
  "Eres mi sol que ilumina los días ☀️",
  "Cada pétalo amarillo me recuerda a ti 🌼",
  "Tu sonrisa es mi flor preferida 💛",
  "Cuando pienso en ti, todo florece 🌸",
  "Eres mi alegría en colores cálidos ✨",
  "Un ramo de flores amarillas para mi razón de ser 💐",
  "La vida es más bonita contigo 🌻",
  "Eres la luz que pinta mi mundo de amarillo 🌞",
  "Tu abrazo es mi refugio 🌹",
  "Cada latido mío dice tu nombre ❤️",
  "El amor florece cuando te miro 🌼",
  "Me haces brillar con tu ternura 💛",
  "Nuestro amor es eterno como las estaciones 🌿",
  "Tú eres mi canción favorita 🎶",
  "Cada día contigo es un regalo 🎁",
  "El sol se pone, pero tú siempre iluminas 🌅",
  "Tus ojos son mi horizonte 🌌",
  "Tu voz es mi calma 🌊",
  "Eres el capítulo más bonito de mi vida 📖",
  "Las flores amarillas me recuerdan a tu risa 🌼",
  "Eres la chispa que enciende mi alma ✨",
  "Tus manos son mi lugar seguro 🤲",
  "Amarte es como vivir en primavera 🌷",
  "Tú eres mi razón de soñar 🌙",
  "Tus besos son pétalos que me acarician 💋",
  "Nada brilla más que tu esencia 🌟",
  "Eres el refugio en mi tormenta ⛅",
  "Tus palabras son melodías 🎼",
  "Caminar contigo es un jardín eterno 🌻",
  "Tus abrazos son rayos de sol ☀️",
  "Me pierdo feliz en tu mirada 👀",
  "Eres el poema que nunca acaba 📝",
  "Tú eres mi fortuna más grande 💎",
  "Las estrellas se parecen a tus ojos ✨",
  "El universo sonríe cuando estás aquí 🌌",
  "Contigo, todo es primavera 🌷",
  "Eres la melodía de mi corazón 💓",
  "Cada día florece nuestro amor 🌼",
  "Tu ternura es mi hogar 🏡",
  "El sol amarillo me recuerda a ti ☀️",
  "Cada momento contigo es único 🌠",
  "Eres mi tesoro escondido 💛",
  "Tu amor es mi raíz más fuerte 🌱",
  "Nada es tan bello como tu sonrisa 🌸",
  "Eres mi destino perfecto 🚀",
  "Me haces sentir en casa 🏠",
  "Tus gestos son magia pura ✨",
  "Tu risa es mi melodía preferida 🎶",
  "Mi corazón late solo por ti ❤️",
  "Eres mi inspiración diaria 💡",
  "Eres más dulce que mil flores 🍯",
  "La vida brilla contigo 🌞",
  "Eres el sol en mi ventana 🌻",
  "Cada palabra tuya es poesía 📜",
  "Tu presencia es mi calma 🌊",
  "Eres el pétalo que faltaba 🌼",
  "Tus abrazos son mi medicina 💊",
  "El amor cabe en tu mirada 👁️",
  "Eres mi eternidad dorada 💛",
  "Me haces sentir invencible 💪",
  "Eres mi primavera sin fin 🌱",
  "Tu luz es mi faro en la noche 🌠",
  "Cada flor amarilla es un 'te quiero' 🌼",
  "Tú y yo somos destino ✨",
  "Tu amor me eleva a las estrellas 🌌",
  "Eres la chispa de mi felicidad 🔥",
  "Tú eres mi mejor regalo 🎁",
  "Eres mi paz infinita ☮️",
  "El sol brilla menos sin ti ☀️",
  "Tus besos son eternidad 💋",
  "Eres mi universo amarillo 💛",
  "Contigo florece todo 🌸",
  "Eres mi arcoíris en amarillo 🌈",
  "La vida tiene más color contigo 🎨",
  "Tus ojos son mi aurora boreal 🌌",
  "Amarte es mi mayor suerte 🍀",
  "Eres el abrazo del sol 🌞",
  "Tu ternura ilumina 💡",
  "Cada día contigo es primavera 🌷",
  "Eres mi cuento preferido 📚",
  "Tu risa pinta mis días 🎨",
  "Tú eres mi más dulce canción 🎵",
  "Tus palabras son pétalos 🌼",
  "Eres mi alegría más pura 💛",
  "El viento susurra tu nombre 🍃",
  "Eres mi flor eterna 🌻",
  "Cada mirada tuya me enamora 💘",
  "Eres el brillo de mi mundo ✨",
  "La vida es amarilla contigo 🌼",
  "Tu amor es mi fuerza 🛡️",
  "Tus gestos son mi tesoro 💎",
  "Eres el sol que nunca se apaga ☀️",
  "El universo me regaló tu amor 🌌",
  "Eres la razón de mi sonrisa 😊",
  "Tu dulzura me envuelve 🍯",
  "Eres mi más lindo destino 🚀",
  "Cada flor amarilla eres tú 🌼",
  "Eres mi todo en colores brillantes 💛",
  "Mi corazón florece contigo 🌸",
  "Tú eres la melodía de mi vida 🎶",
  "Eres mi siempre 🌼"
];

// === Fondos (100 distintos, combinaciones gradientes) ===
const fondos = Array.from({length: 100}, (_, i) => 
  `linear-gradient(to right, hsl(${i*3.6}, 80%, 70%), hsl(${(i*3.6+60)%360}, 90%, 75%))`
);

function showMessage() {
  const msgBox = document.getElementById("messageBox");

  // Frase aleatoria
  const frase = frases[Math.floor(Math.random() * frases.length)];
  msgBox.textContent = frase;

  // Fondo aleatorio
  const fondo = fondos[Math.floor(Math.random() * fondos.length)];
  document.body.style.background = fondo;

  // Efectos de corazones y flores
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) createElements("❤️", "heart", 12);
  else if (choice === 1) createElements("🌼", "flower", 12);
  else { createElements("❤️", "heart", 8); createElements("🌸", "flower", 8); }
}

function createElements(symbol, className, count) {
  for (let i = 0; i < count; i++) {
    let el = document.createElement("div");
    el.classList.add(className);
    el.innerHTML = symbol;
    el.style.left = Math.random() * window.innerWidth + "px";
    el.style.fontSize = (20 + Math.random() * 30) + "px";
    el.style.animationDuration = (3 + Math.random() * 6) + "s";
    document.body.appendChild(el);
    setTimeout(() => { el.remove(); }, 7000);
  }
}