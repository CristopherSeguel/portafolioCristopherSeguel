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
  const dialogDemo = document.querySelector('[data-dialog-demo]');

  const gallery = (basePath, evidenceCount, architectureAlt, evidenceAlt) => [
    { src: `${basePath}/architecture.png`, alt: architectureAlt },
    ...Array.from({ length: evidenceCount }, (_, index) => ({
      src: `${basePath}/evidence-${String(index + 1).padStart(2, '0')}.png`,
      alt: `${evidenceAlt} ${index + 1}`
    }))
  ];

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
    },
    'aws-web-task-manager': {
      type: 'AWS Cloud Portfolio · 2026 — Actualidad',
      title: 'AWS Cloud Web Application',
      description: 'Aplicación web full-stack desplegada sobre una arquitectura VPC con subredes públicas y privadas, Application Load Balancer, EC2, RDS PostgreSQL, S3, CloudFront y Route 53. Incluye Auto Scaling con target tracking por CPU, monitoreo CloudWatch y controles IAM y Security Groups entre capas.',
      tags: ['AWS', 'VPC', 'EC2', 'ALB', 'Auto Scaling', 'RDS PostgreSQL', 'S3', 'CloudFront', 'Route 53', 'CloudWatch', 'Node.js'],
      images: gallery('static/img/projects/aws/web-task-manager', 10, 'Diagrama de arquitectura de la aplicación web en AWS', 'Evidencia del proyecto AWS Cloud Web Application'),
      demo: 'https://d3rr61996xexjl.cloudfront.net/'
    },
    'aws-serverless-link-shortener': {
      type: 'AWS Cloud Portfolio · 2026 — Actualidad',
      title: 'AWS Serverless Link Shortener',
      description: 'Acortador de URL serverless construido con API Gateway HTTP API, AWS Lambda, DynamoDB On-Demand, Cognito y CloudWatch. Permite redirecciones públicas y protege la creación y eliminación de enlaces mediante autorización Cognito JWT, escrituras condicionales, TTL y permisos IAM de mínimo privilegio.',
      tags: ['AWS', 'API Gateway', 'Lambda', 'DynamoDB', 'Cognito', 'JWT', 'CloudWatch', 'Node.js'],
      images: gallery('static/img/projects/aws/serverless-link-shortener', 4, 'Diagrama de arquitectura del acortador de enlaces serverless', 'Evidencia del proyecto AWS Serverless Link Shortener')
    },
    'aws-infrastructure-as-code': {
      type: 'AWS Cloud Portfolio · 2026 — Actualidad',
      title: 'AWS Infrastructure as Code — CloudFormation & Terraform',
      description: 'Reconstrucción de la arquitectura AWS Cloud Portfolio como Infrastructure as Code, manteniendo su arquitectura funcional y límites de seguridad. Incluye stacks y módulos reutilizables, validación plan-only, aislamiento de entornos, controles de costo y procedimientos de despliegue y teardown.',
      tags: ['AWS CloudFormation', 'Terraform', 'VPC', 'IAM', 'RDS PostgreSQL', 'ALB', 'Auto Scaling', 'S3', 'CloudFront', 'CloudWatch'],
      images: gallery('static/img/projects/aws/infrastructure-as-code', 8, 'Diagrama de infraestructura como código con CloudFormation y Terraform', 'Evidencia del proyecto AWS Infrastructure as Code')
    },
    'aws-devops-cicd': {
      type: 'AWS Cloud Portfolio · 2026 — Actualidad',
      title: 'AWS DevOps CI/CD — GitHub Actions, ECR & ECS/Fargate',
      description: 'Pipeline CI/CD reproducible para workloads contenerizados. Automatiza pruebas y builds Docker, publica imágenes privadas con tags inmutables basados en commit y usa autenticación GitHub OIDC con roles IAM de mínimo privilegio. El entorno temporal incorpora ECS/Fargate, ALB, logs, dashboards y alarmas en CloudWatch.',
      tags: ['GitHub Actions', 'Docker', 'AWS ECR', 'ECS', 'Fargate', 'CloudWatch', 'ALB', 'IAM', 'OIDC', 'CI/CD'],
      images: gallery('static/img/projects/aws/devops-cicd', 9, 'Diagrama del pipeline CI/CD con GitHub Actions, ECR y ECS Fargate', 'Evidencia del proyecto AWS DevOps CI CD')
    },
    'aws-cloudwatch-observability': {
      type: 'AWS Cloud Portfolio · 2026 — Actualidad',
      title: 'AWS CloudWatch Observability & Incident Response',
      description: 'Solución centralizada de observabilidad para monitorear salud de aplicación, métricas de infraestructura y señales operativas. Incluye dashboards CloudWatch, consultas reutilizables en Logs Insights, alarmas de salud y error, runbooks y una validación mediante incidente controlado.',
      tags: ['AWS', 'CloudWatch', 'CloudWatch Logs', 'Logs Insights', 'IAM', 'EC2', 'Application Load Balancer', 'Auto Scaling', 'RDS PostgreSQL'],
      images: gallery('static/img/projects/aws/cloudwatch-observability', 6, 'Diagrama de observabilidad e incident response con Amazon CloudWatch', 'Evidencia del proyecto AWS CloudWatch Observability')
    }
  };

  const createCarousel = (images) => {
    if (images.length === 1) {
      const image = document.createElement('img');
      image.src = images[0].src;
      image.alt = images[0].alt;
      dialogMedia.append(image);
      return;
    }

    let currentIndex = 0;
    const carousel = document.createElement('div');
    const frame = document.createElement('div');
    const image = document.createElement('img');
    const controls = document.createElement('div');
    const previous = document.createElement('button');
    const next = document.createElement('button');
    const status = document.createElement('span');

    carousel.className = 'carousel';
    frame.className = 'carousel-frame';
    image.className = 'carousel-image';
    controls.className = 'carousel-controls';
    previous.className = 'carousel-button';
    previous.type = 'button';
    previous.setAttribute('aria-label', 'Imagen anterior');
    previous.innerHTML = '<iconify-icon icon="mdi:chevron-left" aria-hidden="true"></iconify-icon>';
    next.className = 'carousel-button';
    next.type = 'button';
    next.setAttribute('aria-label', 'Imagen siguiente');
    next.innerHTML = '<iconify-icon icon="mdi:chevron-right" aria-hidden="true"></iconify-icon>';
    status.className = 'carousel-status';
    status.setAttribute('aria-live', 'polite');

    const updateImage = () => {
      const current = images[currentIndex];
      image.src = current.src;
      image.alt = current.alt;
      status.textContent = `${currentIndex + 1} de ${images.length}`;
    };

    previous.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    });
    next.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    });

    updateImage();
    frame.append(image);
    controls.append(previous, status, next);
    carousel.append(frame, controls);
    dialogMedia.append(carousel);
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
      const images = project.images || (project.image ? [{ src: project.image, alt: project.imageAlt }] : []);
      dialogMedia.classList.toggle('empty', images.length === 0 && Boolean(project.icon));

      if (images.length) {
        createCarousel(images);
      } else {
        const icon = document.createElement('iconify-icon');
        icon.setAttribute('icon', project.icon);
        icon.setAttribute('aria-hidden', 'true');
        dialogMedia.append(icon);
      }

      dialogRepository.hidden = !project.repository;
      if (project.repository) {
        dialogRepository.href = project.repository;
      } else {
        dialogRepository.removeAttribute('href');
      }
      dialogDemo.hidden = !project.demo;
      if (project.demo) {
        dialogDemo.href = project.demo;
      } else {
        dialogDemo.removeAttribute('href');
      }
      dialog.showModal();
    });
  });

  document.querySelector('[data-dialog-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
