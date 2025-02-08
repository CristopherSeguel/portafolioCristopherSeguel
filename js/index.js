
   document.addEventListener('DOMContentLoaded', function() {
      const navbarLinks = document.querySelectorAll('nav ul li a');

      navbarLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
          event.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          smoothScroll(target);
        });
      });

      function smoothScroll(target) {
        const targetPosition = target.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800; // Duración en milisegundos
        let start = null;

        window.requestAnimationFrame(step);

        function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
          if (progress < duration) window.requestAnimationFrame(step);
        }

        // Función de easing
        function easeInOutCubic(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t * t + b;
          t -= 2;
          return (c / 2) * (t * t * t + 2) + b;
        }
      }
    });


























    
  