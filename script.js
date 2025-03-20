/* Three.js background animation */
let scene, camera, renderer, grid;

function initThreeJS() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Add this line for better resolution
    const canvasContainer = document.getElementById('canvas-container');
    if (canvasContainer) {
        canvasContainer.appendChild(renderer.domElement);
    }

    createGrid();
    camera.position.set(0, 35, 60); // Use set method
    camera.rotation.x = -0.6;
    animate();
}

function createGrid() {
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

    const material = new THREE.PointsMaterial({
        color: 0x7F5AF0,
        size: 0.1,
        transparent: true,
        opacity: 0.5
    });
    grid = new THREE.Points(geometry, material);
    scene.add(grid);
}

function animate() {
    requestAnimationFrame(animate);

    if (!grid) return;

    grid.rotation.y += 0.001;

    const positions = grid.geometry.attributes.position.array;
    const time = Date.now() * 0.0005;

    for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] = Math.sin(time + positions[i] * 0.05) * 1.5;
    }

    grid.geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
}

function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function handleDarkMode() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
        document.body.classList.add('dark-mode');
    }
}

function handleScrollReveal() {
    const cards = document.querySelectorAll('.link-card, .about, .hero');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after reveal
            }
        });
    }, { threshold: 0.1 });
    cards.forEach(card => {
        card.classList.add('hidden');
        observer.observe(card);
    });
}

function handleTouchEffects() {
    const cards = document.querySelectorAll('.link-card'); // Corrected selector
    cards.forEach(card => {
        card.addEventListener('touchstart', () => card.classList.add('hover-effect'));
        card.addEventListener('touchend', () => {
            setTimeout(() => card.classList.remove('hover-effect'), 500);
        });
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => { // Use DOMContentLoaded
    initThreeJS();
    window.addEventListener('resize', handleResize);
    handleDarkMode();
    handleScrollReveal();
    handleTouchEffects();
});
