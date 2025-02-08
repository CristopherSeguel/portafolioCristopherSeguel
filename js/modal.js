// Obtener el modal
var modal = document.getElementById("modal");

// Obtener el span que cierra el modal
var closeBtn = document.getElementsByClassName("close")[0];

// Obtener los botones "Ver más"
var verMasButtons = document.getElementsByClassName("buttonVerMas");

// Declarar la variable projectCarousel fuera de las funciones
var projectCarousel;

// Agregar eventos de click a los botones "Ver más"
for (var i = 0; i < verMasButtons.length; i++) {
  verMasButtons[i].addEventListener("click", function() {
    var project = this.getAttribute("data-project");
    openModal(project);
  });
}

// Función para abrir el modal y mostrar la información del proyecto seleccionado
function openModal(project) {
  var modalTitle = document.getElementById("modal-title");
  var modalDescription = document.getElementById("modal-description");
  var modalSkills = document.getElementById("modal-skills");
  var modalHerramientas = document.getElementById("modal-herramientas");

  // Setear el título, descripción y las imágenes del proyecto seleccionado
  if (project === "gym-duoc") {
    modalTitle.textContent = "GymDuoc";
    modalDescription.innerHTML = `El proyecto de GymDuoc es un sistema de administración de complejos deportivos en expansión con múltiples sucursales. Desarrollado como proyecto de portafolio de título, tiene como objetivo mejorar la gestión de recursos humanos, reservas de actividades y planes de membresía.<br><br>El sistema permite la administración de profesores, gestión de socios, reservas de actividades y canchas, integración de métodos de pago, generación de informes, integración con API externas, establecimiento de roles y permisos de acceso, envío de correos automáticos y gestión de planes de pago. Es una solución completa para optimizar la operación y la experiencia de los usuarios en los complejos deportivos.`;
    modalHerramientas.textContent = "Herramientas Utilizadas";
    modalSkills.innerHTML = `<p class="flexi">
    <span class="habilidadespan rounded p-2"><iconify-icon icon="simple-icons:python"></iconify-icon>Python</span>
    <span class="habilidadespan rounded p-2"><iconify-icon icon="devicon-plain:django-wordmark"></iconify-icon>Django</span>
    <span class="habilidadespan rounded p-2"><iconify-icon icon="akar-icons:html-fill"></iconify-icon>
      HTML</span>
    <span class="habilidadespan rounded p-2"><iconify-icon icon="akar-icons:css-fill"></iconify-icon>
      CSS</span>
    <span class="habilidadespan rounded p-2"><iconify-icon icon="ri:bootstrap-fill"></iconify-icon>
      Bootstrap</span>
    <span class="habilidadespan rounded p-2"><iconify-icon icon="ri:javascript-fill"></iconify-icon>JavaScript</span>
    
  </p>`;

        // Agregar imágenes específicas para el proyecto GymDuoc
    var gymDuocImages = [
      "/static/img/imagesProyects/GymDuoc/PortadaGym.png",
      "/static/img/imagesProyects/GymDuoc/GymDuocWeb-2.png",
      "/static/img/imagesProyects/GymDuoc/GymDuocWeb-3.png",
      "/static/img/imagesProyects/GymDuoc/GymDuocWeb-4.png",
      "/static/img/imagesProyects/GymDuoc/GymDuocWeb-5.png",
      "/static/img/imagesProyects/GymDuoc/GymDuocWeb-6.png",

    ];
    projectCarousel = document.getElementById("project-carousel");
    projectCarousel.innerHTML = "";
    for (var i = 0; i < gymDuocImages.length; i++) {
      var image = document.createElement("img");
      image.src = gymDuocImages[i];
      image.alt = "Imagen " + (i + 1);
      var item = document.createElement("div");
      item.classList.add("item");
      item.appendChild(image);
      projectCarousel.appendChild(item);
    }
  } else if (project === "driver-capp") {
    modalTitle.textContent = "DriverCapp";
    modalDescription.innerHTML = `DriverCapp es una aplicación móvil desarrollada con Ionic, Angular, Node.js y TypeScript, disponible para Android e iOS. Está diseñada para estudiantes de institutos en Santiago de Chile y permite a los conductores registrados crear viajes entre diferentes ubicaciones, estableciendo tarifas basadas en la distancia recorrida. Los estudiantes pueden buscar y unirse a estos viajes, siempre que haya cupos disponibles.<br><br>La aplicación utiliza la API de Google Maps para calcular las rutas y muestra detalles como el recorrido, la información del conductor y los datos del vehículo. Además, se verifica la validez de la patente a través de una API externa. DriverCapp también ofrece funciones como recuperación de contraseña, registro de usuarios y utiliza el almacenamiento local (localStorage) para optimizar recursos y mejorar el rendimiento.`;
    modalHerramientas.textContent = "Herramientas Utilizadas";
    modalSkills.innerHTML = `<p class="flexi">
    <span class="habilidadespan rounded p-2"><iconify-icon icon="simple-icons:python"></iconify-icon>Python</span>
    <span class="habilidadespan rounded p-2"><iconify-icon icon="devicon-plain:django-wordmark"></iconify-icon>Django</span>
    <span class="habilidadespan rounded p-2"><iconify-icon icon="akar-icons:html-fill"></iconify-icon>
      HTML</span>
    <span class="habilidadespan rounded p-2"><iconify-icon icon="akar-icons:css-fill"></iconify-icon>
      CSS</span>
    <span class="habilidadespan rounded p-2"><iconify-icon icon="ri:bootstrap-fill"></iconify-icon>
      Bootstrap</span>
    <span class="habilidadespan rounded p-2"><iconify-icon icon="ri:javascript-fill"></iconify-icon>JavaScript</span>
    
  </p>`;
    // Agregar imágenes específicas para el proyecto DriverCapp
    var driverCappImages = [
      "/static/img/imagesProyects/DriverCapp/DriverCapp1.jpg",
      "/static/img/imagesProyects/DriverCapp/DriverCapp2.jpg",
      "/static/img/imagesProyects/DriverCapp/DriverCapp3.jpg",
      "/static/img/imagesProyects/DriverCapp/DriverCapp4.jpg",
      "/static/img/imagesProyects/DriverCapp/DriverCapp5.jpg",
      "/static/img/imagesProyects/DriverCapp/DriverCapp6.jpg",
      "/static/img/imagesProyects/DriverCapp/DriverCapp7.jpg",
      "/static/img/imagesProyects/DriverCapp/DriverCapp8.jpg",


    ];
    projectCarousel = document.getElementById("project-carousel");
    projectCarousel.innerHTML = "";
    for (var i = 0; i < driverCappImages.length; i++) {
      var image = document.createElement("img");
      image.src = driverCappImages[i];
      image.alt = "Imagen " + (i + 1);
      image.classList.add("project-image"); // Agregar la clase "project-image" a las imágenes
      var item = document.createElement("div");
      item.classList.add("item");
      item.appendChild(image);
      projectCarousel.appendChild(item);
    }
  }

  // Inicializar el carrusel de Slick Carousel
  $(projectCarousel).slick({
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><iconify-icon icon="ooui:next-rtl"></iconify-icon></button>',
    nextArrow: '<button type="button" class="slick-next"><iconify-icon icon="ooui:next-ltr"></iconify-icon></button>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  // Mostrar el modal con animación
  modal.style.display = "block";
  modal.classList.add("zoomIn");
}

// Función para cerrar el modal
function closeModal() {
  modal.style.display = "none";
  // Destruir el carrusel de Slick Carousel al cerrar el modal
  $(projectCarousel).slick("unslick");
}

// Agregar evento de click al botón de cierre del modal
closeBtn.addEventListener("click", closeModal);

// Cerrar el modal al hacer click fuera de él
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});
