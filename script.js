// Develop the latent-print signature graphic once it's in view
document.addEventListener('DOMContentLoaded', () => {
  const svg = document.getElementById('printSvg');
  if (!svg) return;

  const develop = () => svg.classList.add('developed');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          develop();
          io.disconnect();
        }
      });
    }, { threshold: 0.3 });
    io.observe(svg);
  } else {
    develop();
  }
});
