window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var informacionSection = document.getElementById('informacion');
    
    // Obtiene la posición superior de la sección de información
    var informacionTop = informacionSection.offsetTop;
    
    // Comprueba si el desplazamiento vertical ha alcanzado o superado la posición de la sección de información
    if (window.pageYOffset >= informacionTop) {
      header.style.top = '0';
    } else {
      header.style.top = '-83px'; // Oculta la barra de navegación
    }
  });






  // Desplazamiento suave a la sección de información al hacer clic en el botón "Ver mi trabajo"
  var btnVerMiTrabajo = document.querySelector('.botonAbajo');
  var informacionSection = document.getElementById('informacion');
  
  btnVerMiTrabajo.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Calcula la posición superior de la sección de información
    var informacionTop = informacionSection.offsetTop;
    
    // Realiza el desplazamiento suave utilizando la función scrollTo
    window.scrollTo({
      top: informacionTop,
      behavior: 'smooth'
    });
  });





  var informacionSection = document.getElementById('informacion');
  var animatedSVGs = document.querySelectorAll('.container .animated');

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    animatedSVGs.forEach(function(svg) {
      if (isInViewport(svg)) {
        svg.classList.add('flipInY');
      } else {
        svg.classList.remove('flipInY');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Ejecutar al cargar la página también




  // Función para verificar si el elemento está visible en la ventana
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para agregar la clase de animación a los elementos cuando son visibles
function animateOnScroll() {
  var elements = document.querySelectorAll('.column');
  elements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('fadeInUpBig');
    }
  });
}

// Evento para activar la animación cuando se hace scroll
window.addEventListener('scroll', animateOnScroll);
