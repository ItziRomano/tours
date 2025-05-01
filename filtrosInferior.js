document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('[data-tab-content]');

    // Agregar event listener a cada botón
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase 'active' de todos los botones
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase 'active' al botón clickeado
            this.classList.add('active');
            
            // Obtener el valor del tab a mostrar
            const tabToShow = this.getAttribute('data-tab');
            
            // Mostrar/ocultar contenidos
            showTabContent(tabToShow);
        });
    });

    // Función para mostrar el contenido del tab seleccionado
    function showTabContent(tabName) {
        tabContents.forEach(content => {
            if (content.getAttribute('data-tab-content') === tabName) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    }

    // Mostrar el contenido inicial (historia)
    showTabContent('historia');
});