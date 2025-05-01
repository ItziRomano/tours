document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones de filtro
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Seleccionar todos los elementos de tour (debes agregar la clase 'tour-item' a cada tour)
    // Ejemplo: <div class="tour-item" data-category="naturaleza">...</div>
    const tourItems = document.querySelectorAll('.tour-item');

    // Agregar event listener a cada botón de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover la clase 'active' de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar la clase 'active' al botón clickeado
            this.classList.add('active');
            
            // Obtener el filtro seleccionado (all, naturaleza, cultura, aventura)
            const filterValue = this.getAttribute('data-filter');
            
            // Filtrar los tours
            filterTours(filterValue);
        });
    });

    // Función para filtrar los tours
    function filterTours(filter) {
        tourItems.forEach(item => {
            // Mostrar todos los tours si el filtro es 'all'
            if (filter === 'all') {
                item.style.display = 'block';
                return;
            }
            
            // Obtener la categoría del tour (del atributo data-category)
            const category = item.getAttribute('data-category');
            
            // Mostrar u ocultar según coincida con el filtro
            if (category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Mostrar todos los tours al cargar la página
    filterTours('all');
});


