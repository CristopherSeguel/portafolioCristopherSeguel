# Portafolio — Cristopher Seguel

Sitio web personal de **Cristopher Seguel**, desarrollador de software Full Stack. El portafolio reúne habilidades técnicas, proyectos destacados, información profesional y un canal de contacto directo.

El sitio está desarrollado como una aplicación web estática, por lo que no requiere instalación de dependencias ni un proceso de compilación para ejecutarse.

## Contenido

- Presentación y enlaces profesionales.
- Habilidades principales y tecnologías complementarias.
- Proyectos destacados con galería de imágenes y detalles en una ventana modal.
- Sección «Sobre mí» y descarga de CV.
- Formulario de contacto conectado a Formspree.

## Tecnologías utilizadas

| Área | Tecnologías |
| --- | --- |
| Estructura | HTML5 |
| Estilos | CSS3, Tailwind CSS compilado y Animate.css |
| Interactividad | JavaScript, jQuery |
| Componentes visuales | Iconify, Slick Carousel y canvas animado |
| Formulario | Formspree |

Las tecnologías presentadas en el portafolio incluyen PHP, Laravel, JavaScript, MySQL, Vue.js, Angular, Ionic, TypeScript, Node.js, Python, Java, Git y GitHub.

## Proyectos exhibidos

### GymDuoc

Sistema de administración para complejos deportivos. Incluye gestión de profesores y socios, reservas de actividades y canchas, planes de membresía, pagos, informes, roles y permisos, correos automáticos e integración de APIs externas.

Tecnologías mostradas: Python, Django, HTML, CSS, Bootstrap y JavaScript.

### DriverCapp

Aplicación móvil para coordinar viajes entre estudiantes de Santiago de Chile. Permite crear, buscar y unirse a viajes, calcular rutas y tarifas con Google Maps, consultar información de vehículos mediante una API externa y administrar el acceso de usuarios.

Tecnologías mostradas: Ionic, Angular, Node.js y TypeScript.

## Ejecución local

Al ser un sitio estático, puedes abrir `index.html` directamente en el navegador. Para que los recursos con rutas absolutas y las integraciones externas se comporten como en un servidor web, se recomienda levantar un servidor local desde la raíz del proyecto:

```bash
python -m http.server 8000
```

Luego abre [http://localhost:8000](http://localhost:8000) en el navegador.

> Si no tienes Python, puedes usar cualquier servidor de archivos estáticos configurado en la raíz del repositorio.

## Estructura del proyecto

```text
.
├── index.html                 # Página principal del portafolio
├── canvas.js                  # Fondo animado de la sección inicial
├── estilos/                   # Hojas de estilo
│   ├── inicio.css
│   ├── animation.css
│   └── fonts.css
├── js/                        # Comportamientos e interacciones del sitio
│   ├── index.js               # Navegación y desplazamiento suave
│   ├── main.js                # Animaciones e interacción durante el scroll
│   ├── modal.js               # Detalle y carrusel de proyectos
│   ├── contacto.js            # Envío del formulario de contacto
│   ├── animations.js
│   └── scrolls.js
└── static/                    # Imágenes, tipografías, iconos y CV
```

## Servicios y recursos externos

El sitio carga algunas bibliotecas desde CDN: Iconify, jQuery, Animate.css y Slick Carousel. El formulario de contacto envía los mensajes mediante Formspree; por ello requiere conexión a internet para funcionar correctamente.

## Contacto

- LinkedIn: [linkedin.com/in/cristopherseguel](https://www.linkedin.com/in/cristopherseguel/)
- GitHub: [github.com/CristopherSeguel](https://github.com/CristopherSeguel)
- Correo: [ivancristopher5@gmail.com](mailto:ivancristopher5@gmail.com)

## Repositorio

Código fuente: [CristopherSeguel/portafolioCristopherSeguel](https://github.com/CristopherSeguel/portafolioCristopherSeguel)

## Licencia

Este repositorio no incluye actualmente un archivo de licencia. Si deseas reutilizar o distribuir el código, contacta primero al autor.
