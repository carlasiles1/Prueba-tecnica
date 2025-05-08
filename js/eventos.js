// para filtrar por ciudad
document.addEventListener("DOMContentLoaded", function () {
    const selectCiudad = document.getElementById("ciudad");
    const fichas = document.querySelectorAll(".fichas");

    selectCiudad.addEventListener("change", function () {
        const ciudadSeleccionada = this.value.toLowerCase();

        fichas.forEach(ficha => {
    
            const ciudad = ficha.querySelectorAll("h3")[1].textContent.toLowerCase();

            if (ciudadSeleccionada === "todas" || ciudad === ciudadSeleccionada) {
                ficha.style.display = "block";
            } else {
                ficha.style.display = "none";
            }
        });
    });
});