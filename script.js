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

