// Esperar a que el DOM cargue por completo
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portafolio cargado exitosamente en Visual Studio Code.");

    // Efecto dinámico de sombra en el header al hacer scroll
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});