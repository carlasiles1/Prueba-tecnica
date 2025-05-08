//lógica para que se vean los items del menú hamburguesa

const hamburger = document.getElementById('hamburger-menu');
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
    navItems.classList.toggle('show');
});