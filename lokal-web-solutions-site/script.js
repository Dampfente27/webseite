document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', () => {
    if (status) {
      status.textContent = 'Ihre Anfrage wird gesendet …';
      status.style.color = '#1565d8';
    }
  });
});
