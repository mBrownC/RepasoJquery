// // jQuery
// $("#cambios").on("click", function () {
//   $("#contenedor").append("<p>Al final (dentro)</p>");
//   $("#contenedor").prepend("<p>Al inicio (dentro)</p>");
//   $("#contenedor").after("<p>Después (fuera)</p>");
//   $("#contenedor").before("<p>Antes (fuera)</p>");
// });

$("#accion").on("click", function () {
  $("#milista").empty();
});

$("#accion2").on("click", function () {
  $("#milista").css("color", "red");
  $(this).toggleClass("btn-info");
});

$("#accion3").click(function (event) {
  console.log("Tipo de evento: ", event.type);
  let elemento = event.target;
  console.log("Elemento: ", elemento);
});

$("input").on("focus blur", function (w) {
  console.log("Evento:", w.type); // Mostrará "focus" o "blur"
});

$("#accion3").on(
  "click",
  { usuario: "Miguel", rol: "Instructor" },
  function (e) {
    console.log("Usuario:", e.data.usuario); // "Miguel"
    console.log("Rol:", e.data.rol); // "Instructor"
  },
);
