// ===== MENU MOBILE =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== SMOOTH SCROLL PARA ENLACES =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== SCROLL REVEAL ANIMATION =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.project-card, .about-grid, .contact-content').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ===== FORM CONTACTO =====
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Simular envío
  const btn = contactForm.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
  btn.disabled = true;
  
  setTimeout(() => {
    alert('¡Mensaje enviado correctamente! 🚀');
    contactForm.reset();
    btn.innerHTML = originalText;
    btn.disabled = false;
  }, 2000);
});

// ===== ACTIVE NAV LINK ON SCROLL =====
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});