// Variables globales
let currentSlide = 0;
let slides;
let totalSlides;

// Inicialización cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  initPresentation();
});

// Función de inicialización
function initPresentation() {
  slides = document.querySelectorAll(".slide");
  totalSlides = slides.length;

  // Mostrar primera slide
  showSlide(0);

  // Configurar navegación con teclado
  setupKeyboardNavigation();

  // Actualizar controles
  updateNavigation();
  updateProgress();
}

// Mostrar slide específica
function showSlide(n) {
  // Ocultar slide actual
  if (slides[currentSlide]) {
    slides[currentSlide].classList.remove("active");
  }

  // Calcular nueva slide (con wrap-around)
  currentSlide = (n + totalSlides) % totalSlides;

  // Mostrar nueva slide
  if (slides[currentSlide]) {
    slides[currentSlide].classList.add("active");
  }

  // Actualizar UI
  updateNavigation();
  updateProgress();

  // Scroll al top del contenido
  const content = slides[currentSlide].querySelector(".content");
  if (content) {
    content.scrollTop = 0;
  }
}

// Cambiar slide (dirección: -1 o +1)
function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Actualizar estado de botones de navegación
function updateNavigation() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (prevBtn) {
    prevBtn.disabled = currentSlide === 0;
  }

  if (nextBtn) {
    nextBtn.disabled = currentSlide === totalSlides - 1;
  }
}

// Actualizar barra de progreso
function updateProgress() {
  const progressBar = document.getElementById("progressBar");
  if (progressBar) {
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    progressBar.style.width = progress + "%";
  }
}

// Configurar navegación con teclado
function setupKeyboardNavigation() {
  document.addEventListener("keydown", function (e) {
    switch (e.key) {
      case "ArrowLeft":
        if (currentSlide > 0) {
          changeSlide(-1);
        }
        break;
      case "ArrowRight":
        if (currentSlide < totalSlides - 1) {
          changeSlide(1);
        }
        break;
      case "Home":
        showSlide(0);
        break;
      case "End":
        showSlide(totalSlides - 1);
        break;
      case "PageUp":
        if (currentSlide > 0) {
          changeSlide(-1);
        }
        break;
      case "PageDown":
        if (currentSlide < totalSlides - 1) {
          changeSlide(1);
        }
        break;
    }
  });
}

// Ir a slide específica
function goToSlide(slideNumber) {
  if (slideNumber >= 0 && slideNumber < totalSlides) {
    showSlide(slideNumber);
  }
}

// Obtener número de slide actual
function getCurrentSlide() {
  return currentSlide + 1;
}

// Obtener total de slides
function getTotalSlides() {
  return totalSlides;
}

// ========================================
// FUNCIONES PARA QUIZZES Y EJERCICIOS
// ========================================

// Función para mostrar respuestas del cuestionario
function mostrarRespuesta(elemento, esCorrecta, idRespuesta) {
  // Mostrar todos los indicadores en la pregunta actual
  const parent = elemento.closest(".content");
  const indicadores = parent.querySelectorAll(".indicador-oculto");
  indicadores.forEach((ind) => {
    ind.classList.remove("indicador-oculto");
    ind.classList.add("indicador-visible");
  });

  // Mostrar las respuestas ocultas
  const respuestas = parent.querySelectorAll(".respuesta-oculta");
  respuestas.forEach((resp) => {
    resp.classList.remove("respuesta-oculta");
    resp.classList.add("respuesta-visible");
  });

  // Mostrar la respuesta específica
  const respuesta = document.getElementById(idRespuesta);
  if (respuesta) {
    respuesta.classList.remove("respuesta-oculta");
    respuesta.classList.add("respuesta-visible");
  }

  // Aplicar estilo a la tarjeta clickeada
  if (esCorrecta) {
    elemento.classList.add("correcta");
  } else {
    elemento.classList.add("incorrecta");
  }

  // Deshabilitar todas las tarjetas
  const cards = parent.querySelectorAll(".quiz-card");
  cards.forEach((card) => {
    card.style.pointerEvents = "none";
  });
}

// Función para ejercicios interactivos de Bootstrap Grid
function mostrarColumnas(numColumnas, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  for (let i = 1; i <= numColumnas; i++) {
    const col = document.createElement("div");
    col.className = `col-${12 / numColumnas}`;
    col.style.background =
      i % 2 === 0 ? "var(--bootstrap-purple)" : "var(--color-secondary)";
    col.style.color = "white";
    col.style.padding = "20px";
    col.style.textAlign = "center";
    col.style.borderRadius = "4px";
    col.style.margin = "5px 0";
    col.textContent = `Col ${i}`;
    container.appendChild(col);
  }
}

// Función para demostrar breakpoints
function toggleBreakpoint(breakpoint, demoId) {
  const demo = document.getElementById(demoId);
  if (!demo) return;

  const widths = {
    xs: "320px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  };

  if (widths[breakpoint]) {
    demo.style.maxWidth = widths[breakpoint];
    demo.style.transition = "max-width 0.5s ease";
  }
}

// Exportar funciones para uso global
window.changeSlide = changeSlide;
window.goToSlide = goToSlide;
window.getCurrentSlide = getCurrentSlide;
window.getTotalSlides = getTotalSlides;
window.mostrarRespuesta = mostrarRespuesta;
window.mostrarColumnas = mostrarColumnas;
window.toggleBreakpoint = toggleBreakpoint;
