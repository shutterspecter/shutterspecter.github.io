// Scroll reveal animation - simplified
const cards = document.querySelectorAll('.link-card, .about, .hero');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add a class
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.classList.add('hidden'); // Add a class
  observer.observe(card);
});

// Dark/Light mode toggle - functionality maintained but button removed
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
  document.body.classList.add('dark-mode');
}

// Add hover effects for mobile
cards.forEach(card => {
  card.addEventListener('touchstart', function() {
    this.classList.add('hover-effect');
  });
 
  card.addEventListener('touchend', function() {
    setTimeout(() => {
      this.classList.remove('hover-effect');
    }, 500);
  });
});
