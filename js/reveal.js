// ── Scroll reveal
let skillsAnimated = false;

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add('visible');

    // Animate skill bars once when the skills section enters view
    if (!skillsAnimated && entry.target.closest('#habilidades')) {
      skillsAnimated = true;
      document.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
