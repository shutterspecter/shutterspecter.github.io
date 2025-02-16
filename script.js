/* Three.js background animation with graffiti flair */
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create a dynamic grid that hints at spray-painted textures
const geometry = new THREE.BufferGeometry();
const points = [];
const size = 100;
const hexHeight = Math.sqrt(3);
const verticalSpacing = hexHeight * 2;
const horizontalSpacing = 3;

for (let row = -size; row <= size; row++) {
  const offset = (row % 2) * (horizontalSpacing / 2);
  for (let col = -size; col <= size; col++) {
    const x = (col * horizontalSpacing) + offset;
    const z = row * (verticalSpacing / 2);
    points.push(x, 0, z);
  }
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));

const material = new THREE.PointsMaterial({
  color: 0xE91E63, // graffiti magenta
  size: 0.15,
  transparent: true,
  opacity: 0.7
});

const grid = new THREE.Points(geometry, material);
scene.add(grid);

camera.position.y = 30;
camera.position.z = 50;
camera.rotation.x = -0.6;

let time = 0;
function animate() {
  requestAnimationFrame(animate);
  
  time += 0.002;
  
  // Rotate grid for a subtle dynamic backdrop
  grid.rotation.y = time * 0.2;
  
  // Wave animation to add energy reminiscent of a spray-paint vibe
  const positions = grid.geometry.attributes.position.array;
  for (let i = 0; i < positions.length; i += 3) {
    const x = positions[i];
    const z = positions[i + 2];
    positions[i + 1] = Math.sin(time + (x * 0.1)) * Math.cos(time + (z * 0.1)) * 2;
  }
  
  grid.geometry.attributes.position.needsUpdate = true;
  
  // Adjust color pulse for a vivid, urban effect
  material.color.setHSL(Math.sin(time) * 0.1 + 0.1, 1, 0.6);
  
  renderer.render(scene, camera);
}

animate();