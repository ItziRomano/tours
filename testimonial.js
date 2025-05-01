document.addEventListener('DOMContentLoaded', function() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-btn.prev');
    const nextBtn = document.querySelector('.testimonial-btn.next');
    let currentIndex = 0;
    const intervalTime = 5000; // 5 segundos
    let slideInterval;

    // Función para mostrar el testimonio activo
    function showTestimonial(index) {
        testimonialItems.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonialItems[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }

    // Función para ir al siguiente testimonio
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonialItems.length;
        showTestimonial(currentIndex);
    }

    // Función para ir al testimonio anterior
    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
        showTestimonial(currentIndex);
    }

    // Event listeners para los botones
    nextBtn.addEventListener('click', () => {
        nextTestimonial();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        prevTestimonial();
        resetInterval();
    });

    // Event listeners para los dots
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            showTestimonial(index);
            resetInterval();
        });
    });

    // Función para reiniciar el intervalo automático
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextTestimonial, intervalTime);
    }

    // Iniciar el slider automático
    function startInterval() {
        slideInterval = setInterval(nextTestimonial, intervalTime);
    }

    // Iniciar
    startInterval();

    // Pausar el slider cuando el mouse está sobre él
    const testimonialSlider = document.querySelector('.testimonial-slider');
    testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    testimonialSlider.addEventListener('mouseleave', startInterval);
});