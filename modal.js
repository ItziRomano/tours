document.addEventListener('DOMContentLoaded', function() {
    // Datos de lo que incluye cada tour (puedes mover esto a una base de datos)
    const tourIncludes = {
      "Cascada Las Brisas": [
        "Guía",
        "Casco",
        "Chaleco salvavidas"
      ],
      "Cascada La Escondida": [
        "Guía",
        "Chaleco salvavidas",
        "Casco"
      ],
      "Cascada Las Hamacas": [
        "Guía",
        "Casco",
        "Chaleco salvavidas"
      ],
      "Cascada Poza Verde": [
        "Guía",
        "Casco",
        "Chaleco salvavidas"
      ],
      "Cascada Secreta": [
        "Guía",
        "Casco",
        "Chaleco salvavidas"
      ],
      "Cascada Taxipehual": [
        "Guía",
        "Casco",
        "Chaleco salvavidas"
      ],
      "Poza Atepatahuak": [
        "Guía",
        "Casco",
        "Chaleco salvavidas"
      ],
      "Gruta Chichikazapan": [
        "Guía",
        "Casco y lámpara",
        "Chaleco salvavidas"
      ],
      "Cañón Del Duende": [
        "Guía",
        "Casco",
        "Chaleco salvavidas"
      ],
      "Yohualichan": [
        "Guía",
        "Explicación de la zona",
        "Recorrido"
      ],
      "Textiles": [
        "Guía",
        "Explicación de proceso"
      ],
      "Cultura y Naturaleza": [
        "Guía",
        "Casco",
        "Chaleco salvavidas",
        "Recorrido por cascada",
        "Explicación de taller de tejido",
        "Recorrido taller de cera",
        "Experiencia práctica de tejido y cera"
      ]
    };
  
    // Elementos del DOM
    const modal = document.getElementById('tourModal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalImage = modal.querySelector('.modal-image');
    const modalDuration = modal.querySelector('.modal-duration');
    const modalDifficulty = modal.querySelector('.modal-difficulty');
    const modalDescription = modal.querySelector('.modal-description');
    const modalIncludes = modal.querySelector('.includes-list');
    const modalPrice = modal.querySelector('.modal-price');
    const closeBtn = modal.querySelector('.close-modal');
    const reserveBtn = modal.querySelector('.btn-reserve');
  
    // Abrir modal cuando se hace clic en "Ver Detalles"
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('btn-secondary')) {
        e.preventDefault();
        const tourCard = e.target.closest('.tour-card');
        
        const tourName = tourCard.querySelector('h3').textContent;
        const tourImage = tourCard.querySelector('img').src;
        const tourImageAlt = tourCard.querySelector('img').alt;
        const duration = tourCard.querySelector('.fa-clock').parentElement.textContent.trim();
        const difficulty = tourCard.querySelector('.fa-hiking, .fa-mountain, .fa-shoe-prints').parentElement.textContent.trim();
        const description = tourCard.querySelector('p').textContent;
        const price = tourCard.querySelector('.tour-price').textContent;
  
        // Llenar el modal con los datos
        modalTitle.textContent = tourName;
        modalImage.src = tourImage;
        modalImage.alt = tourImageAlt;
        modalDuration.textContent = duration;
        modalDifficulty.textContent = difficulty;
        modalDescription.textContent = description;
        modalPrice.textContent = price;
  
        // Llenar la sección "Lo que incluye"
        modalIncludes.innerHTML = '';
        if (tourIncludes[tourName]) {
          tourIncludes[tourName].forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            modalIncludes.appendChild(li);
          });
        } else {
          modalIncludes.innerHTML = '<li>No hay información disponible</li>';
        }
  
        // Mostrar el modal
        modal.classList.add('active');
        document.body.classList.add('modal-open');
      }
    });
  
    // Cerrar modal
    function closeModal() {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
  
    // Eventos para cerrar
    closeBtn.addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
  // closeBtn.addEventListener('click', function() {
  //   modal.classList.remove('active');
  //   document.body.classList.remove('modal-open');
  // });

    // Cerrar con Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
        // modal.classList.remove('active');
        // document.body.classList.remove('modal-open'); 
      }
    });
  
    // Botón de reserva
    reserveBtn.addEventListener('click', function() {
      const tourName = modalTitle.textContent;
      alert(`Redirigiendo a reservación para: ${tourName}`);
      window.location.href = `/reservar?tour=${encodeURIComponent(tourName)}`;
    });

  });
