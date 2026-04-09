document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    await fetch("/", {
      method: "POST",
      body: data
    });

    window.location.href = "/danke/";
  });
});