/**
 * Loyalty Slider - Control de arrastre estilo Figma
 */
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('sliderContainer');
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false; 

    // Evento: Presionar clic
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    // Evento: Salir del recuadro del slider
    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    // Evento: Soltar clic
    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    // Evento: Mover el mouse
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Ajusta el multiplicador para cambiar la velocidad del "vuelo"
        
        // Si el usuario mueve el mouse más de 5px, bloqueamos los clics accidentales en los enlaces
        if (Math.abs(x - startX) > 5) {
            isDragging = true;
        }
        
        e.preventDefault();
        slider.scrollLeft = scrollLeft - walk;
    });

    // Validación de enlaces <a> para que abran solo con un clic limpio y no al arrastrar
    const links = document.querySelectorAll('.loyalty-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (isDragging) {
                e.preventDefault(); 
            }
        });
    });

    // Soporte táctil completo para móviles y tablets
    slider.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });
});