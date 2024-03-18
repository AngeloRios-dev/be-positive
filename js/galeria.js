document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las imagenes secundarias
    let imagenesSecundarias = document.querySelectorAll(".img-secundaria");

    // Iterar sobre cada imagen secundaria y agregar un evento de clic
    imagenesSecundarias.forEach(function(imagenSecundaria) {
        imagenSecundaria.addEventListener("click", function() {
            // Obtener la ruta de la imagen secundaria clicada
            let rutaImagenSecundaria = this.src;

            // Seleccionar la imagen primaria
            let imagenPrimaria = document.querySelector(".img-primaria");

            // Establecer la ruta de la imagen secundaria clicada como src de la imagen primaria
            imagenPrimaria.src = rutaImagenSecundaria;
        });
    });
});
