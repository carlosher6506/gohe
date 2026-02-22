// Animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    }
    });
}, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Efecto navbar al hacer scroll
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('mobile-close-btn'); // si agregaste el botón X

    menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden'; // bloquea scroll de fondo
    });

    if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
    }

    // Cerrar al clickear enlaces
    document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
    });

    // Smooth scroll para todos los enlaces con #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Formulario (solo alerta por ahora)
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Pronto te contactaremos.');
        form.reset();
      });
    }

function sendToWhatsApp(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Tu número de WhatsApp (cámbialo por el tuyo real, formato internacional)
  const phoneNumber = "+529321298207"; // Ejemplo: +52 961 774 2891 → sin espacios ni +

  // Crear el mensaje formateado
    const whatsappMessage = 
        `*Nuevo mensaje desde Gohe-Dev*\n\n` +
        `*Nombre:* ${name}\n` +
        `*Correo:* ${email}\n` +
        `*Asunto:* ${subject}\n\n` +
        `*Mensaje:*\n${message}`;

  // Codificar para URL (maneja saltos de línea, espacios, etc.)
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Enlace de WhatsApp (usa wa.me para mejor compatibilidad)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Abrir WhatsApp en nueva pestaña
  window.open(whatsappUrl, '_blank');

  // Opcional: mostrar confirmación al usuario
  alert('¡Mensaje preparado! Se abrirá WhatsApp para enviarlo.');

  // Limpiar el formulario
  document.getElementById('contact-form').reset();

  return false; // Evita el envío tradicional del form
}