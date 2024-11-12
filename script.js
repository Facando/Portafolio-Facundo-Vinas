let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].classList.remove('active');

    currentIndex += direction;

    // Mantener el índice dentro de los límites
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }

    items[currentIndex].classList.add('active');
}

// Inicializa el primer elemento como activo
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carousel-item')[0].classList.add('active');
});

// Selecciona el botón de hamburguesa y el contenedor del menú
const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.getElementById('menu-items');

// Agrega un evento de clic para alternar la visibilidad del menú
menuToggle.addEventListener('click', function () {
    menuItems.classList.toggle('active');
});

// Cierra el menú automáticamente cuando se hace clic en un enlace (opcional)
const menuButtons = document.querySelectorAll('#menu-items button');
menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        menuItems.classList.remove('active');
    });
});
