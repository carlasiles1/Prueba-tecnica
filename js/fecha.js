// para que salga la fecha

document.addEventListener("DOMContentLoaded", () => {
    const fecha = document.getElementById("fecha-navbar");
    const now = new Date();
    fecha.innerText = now.toLocaleDateString();
  });
