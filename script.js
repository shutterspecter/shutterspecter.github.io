// Three.js background animation - modified for subtle effect
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);
// Create a grid of points - more subtle, modern approach
const geometry = new THREE.BufferGeometry();
const points = [];
const size = 80;
const spacing = 4;
for (let x = -size; x <= size; x += spacing) {
  for (let z = -size; z <= size; z += spacing) {
    points.push(x, 0, z);
  }
}
geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
// More subtle colors that work with both light and dark mode
const material = new THREE.PointsMaterial({
  color: 0x7F5AF0,
  size: 0.1,
  transparent: true,
  opacity: 0.5
});
const grid = new THREE.Points(geometry, material);
scene.add(grid);
camera.position.y = 35;
camera.position.z = 60;
camera.rotation.x = -0.6;
function animate() {
  requestAnimationFrame(animate);
 
  // Slower rotation for subtlety
  grid.rotation.y += 0.001;
 
  const positions = grid.geometry.attributes.position.array;
  const time = Date.now() * 0.0005;
 
  for (let i = 0; i < positions.length; i += 3) {
    // Gentler waves
    positions[i + 1] = Math.sin(time + positions[i] * 0.05) * 1.5;
  }
 
  grid.geometry.attributes.position.needsUpdate = true;
  renderer.render(scene, camera);
}
animate();
// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
// Dark/Light mode toggle - functionality maintained but button removed
// Check system preference and apply appropriate theme
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
  document.body.classList.add('dark-mode');
  material.color.set(0x7F5AF0);
} else {
  material.color.set(0x7F5AF0);
}
// Add scroll reveal animation
const cards = document.querySelectorAll('.link-card, .about, .hero');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });
cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});
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