// Esperar a que el documento esté listo
$(document).ready(function () {
  // ========================================
  // PUNTO 3: MANIPULACIÓN DEL DOM
  // ========================================

  // Variable para contar los elementos nuevos
  let contador = 4;

  // Cambiar el color de texto de los elementos de la lista
  $("#miLista li").css("color", "#1900ff");

  // Agregar dinámicamente un cuarto elemento
  $("#agregarElemento").on("click", function () {
    // Crear un nuevo elemento <li> usando jQuery
    let nuevoElemento = $("<li></li>")
      .addClass("list-group-item")
      .text("Elemento " + contador)
      .css("color", "#ff0202");

    // Agregar el nuevo elemento al final de la lista
    $("#miLista").append(nuevoElemento);

    // Aumentar el contador para el siguiente elemento
    contador++;
  });

  // ========================================
  // PUNTO 4: EVENTOS EN JQUERY
  // ========================================

  // Variable para controlar el estado de la lista
  let listaVisible = true;

  // Evento click para ocultar/mostrar lista
  $("#toggleLista").on("click", function () {
    if (listaVisible) {
      // Ocultar la lista
      $("#miLista").hide();
      // Cambiar el texto del botón
      $(this).text("Mostrar lista");
      listaVisible = false;
    } else {
      // Mostrar la lista
      $("#miLista").show();
      // Cambiar el texto del botón
      $(this).text("Ocultar lista");
      listaVisible = true;
    }
  });

  // ========================================
  // PUNTO 5: USO DE PLUGINS
  // ========================================

  // Bootstrap Carousel ya está funcionando con data-bs-ride="carousel"
  // Pero podemos controlarlo también con jQuery:

  // Pausar el carousel cuando el mouse entra
  $("#carouselExample").on("mouseenter", function () {
    $(this).carousel("pause");
  });

  // Reanudar el carousel cuando el mouse sale
  $("#carouselExample").on("mouseleave", function () {
    $(this).carousel("cycle");
  });

  // Bonus: Mostrar en consola qué slide está activo
  $("#carouselExample").on("slid.bs.carousel", function (e) {
    console.log("Slide activo:", e.to + 1);
  });
});
