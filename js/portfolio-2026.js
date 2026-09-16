(() => {
  const header = document.querySelector('[data-header]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navLinks = document.querySelector('[data-nav-links]');
  const dialog = document.querySelector('[data-dialog]');
  const dialogMedia = document.querySelector('[data-dialog-media]');
  const dialogType = document.querySelector('[data-dialog-type]');
  const dialogTitle = document.querySelector('[data-dialog-title]');
  const dialogDescription = document.querySelector('[data-dialog-description]');
  const dialogTags = document.querySelector('[data-dialog-tags]');
  const dialogRepository = document.querySelector('[data-dialog-repository]');

  const projects = {
    independent: {
      type: 'Desarrollo independiente · 2025 — 2026',
      title: 'Aplicaciones Android en producción',
      description: 'Diseñé, desarrollé y publiqué 8 aplicaciones Android de forma independiente. El trabajo incluyó la gestión del ciclo de vida de releases y la construcción de servicios backend serverless y autoescalables.',
      tags: ['Android', 'Google Play', 'AWS', 'Serverless', 'Releases'],
      icon: 'mdi:cellphone-link'
    },
    'gym-duoc': {
      type: 'Proyecto de título',
      title: 'GymDuoc',
      description: 'Sistema de administración para complejos deportivos con gestión de profesores y socios, reservas de actividades y canchas, planes de membresía, pagos, informes, roles y permisos, correos automáticos e integración con APIs externas.',
      tags: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      image: 'static/img/imagesProyects/GymDuoc/GymDuocWeb-2.png',
      imageAlt: 'Interfaz web del proyecto GymDuoc',
      repository: 'https://github.com/pablosonn/GymDuoc'
    },
    'driver-capp': {
      type: 'Aplicación móvil',
      title: 'DriverCapp',
      description: 'Aplicación para estudiantes que permite crear, buscar y unirse a viajes. Integra cálculo de rutas y tarifas con Google Maps, información de conductor y vehículo, registro de usuarios y recuperación de contraseña.',
      tags: ['Ionic', 'Angular', 'Node.js', 'TypeScript', 'Google Maps API'],
      image: 'static/img/imagesProyects/DriverCapp/DriverCapp1.jpg',
      imageAlt: 'Pantalla móvil del proyecto DriverCapp'
    }
  };

  const closeNavigation = () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir navegación');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navLinks.classList.toggle('is-open', !isOpen);
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Abrir navegación' : 'Cerrar navegación');
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target.matches('a')) closeNavigation();
  });

  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  }, { passive: true });

  document.querySelectorAll('[data-project]').forEach((button) => {
    button.addEventListener('click', () => {
      const project = projects[button.dataset.project];
      if (!project) return;

      dialogType.textContent = project.type;
      dialogTitle.textContent = project.title;
      dialogDescription.textContent = project.description;
      dialogTags.replaceChildren(...project.tags.map((tag) => {
        const item = document.createElement('li');
        item.textContent = tag;
        return item;
      }));
      dialogMedia.replaceChildren();
      dialogMedia.classList.toggle('empty', Boolean(project.icon));

      if (project.image) {
        const image = document.createElement('img');
        image.src = project.image;
        image.alt = project.imageAlt;
        dialogMedia.append(image);
      } else {
        const icon = document.createElement('iconify-icon');
        icon.setAttribute('icon', project.icon);
        icon.setAttribute('aria-hidden', 'true');
        dialogMedia.append(icon);
      }

      dialogRepository.hidden = !project.repository;
      if (project.repository) dialogRepository.href = project.repository;
      dialog.showModal();
    });
  });

  document.querySelector('[data-dialog-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
