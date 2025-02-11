// Three.js background animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create a grid of points
const geometry = new THREE.BufferGeometry();
const points = [];
const size = 100;
const spacing = 3;

for (let x = -size; x <= size; x += spacing) {
  for (let z = -size; z <= size; z += spacing) {
    points.push(x, 0, z);
  }
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));

const material = new THREE.PointsMaterial({
  color: 0x00ffff,
  size: 0.1,
  transparent: true,
  opacity: 0.6
});

const grid = new THREE.Points(geometry, material);
scene.add(grid);

camera.position.y = 30;
camera.position.z = 50;
camera.rotation.x = -0.6;

function animate() {
  requestAnimationFrame(animate);
  
  grid.rotation.y += 0.002;
  
  const positions = grid.geometry.attributes.position.array;
  const time = Date.now() * 0.001;
  
  for (let i = 0; i < positions.length; i += 3) {
    positions[i + 1] = Math.sin(time + positions[i] * 0.1) * 2;
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