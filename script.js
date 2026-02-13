// Terminal typing effect
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Boot sequence animation
function bootSequence() {
    const asciiArt = document.querySelector('.ascii-art');
    const systemInfo = document.querySelector('.system-info');
    const commandSection = document.querySelector('.command-section');
    const fileList = document.querySelector('.file-list');
    
    // Hide elements initially
    if (asciiArt) asciiArt.style.opacity = '0';
    if (systemInfo) systemInfo.style.opacity = '0';
    if (commandSection) commandSection.style.opacity = '0';
    if (fileList) fileList.style.opacity = '0';
    
    // Animate in sequence
    setTimeout(() => {
        if (asciiArt) {
            asciiArt.style.transition = 'opacity 0.5s ease';
            asciiArt.style.opacity = '1';
        }
    }, 200);
    
    setTimeout(() => {
        if (systemInfo) {
            systemInfo.style.transition = 'opacity 0.5s ease';
            systemInfo.style.opacity = '1';
        }
    }, 800);
    
    setTimeout(() => {
        if (commandSection) {
            commandSection.style.transition = 'opacity 0.5s ease';
            commandSection.style.opacity = '1';
        }
    }, 1400);
    
    setTimeout(() => {
        if (fileList) {
            fileList.style.transition = 'opacity 0.5s ease';
            fileList.style.opacity = '1';
        }
    }, 2000);
}

// Add glitch effect on hover for ASCII art
function addGlitchEffect() {
    const asciiArt = document.querySelector('.ascii-art pre');
    
    if (asciiArt) {
        asciiArt.addEventListener('mouseenter', () => {
            asciiArt.style.animation = 'glitch 0.3s ease';
        });
        
        asciiArt.addEventListener('animationend', () => {
            asciiArt.style.animation = 'glow 2s ease-in-out infinite alternate';
        });
    }
}

// Add typing sound effect (visual feedback)
function addTypingFeedback() {
    const fileItems = document.querySelectorAll('.file-item');
    
    fileItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Flash effect
            item.style.background = 'rgba(255, 0, 255, 0.3)';
            setTimeout(() => {
                item.style.background = '';
            }, 100);
        });
    });
}

// Randomize cursor blink timing slightly for more authentic feel
function randomizeCursor() {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        setInterval(() => {
            const randomDelay = Math.random() * 200 + 800;
            cursor.style.animationDuration = `${randomDelay}ms`;
        }, 5000);
    }
}

// Matrix rain easter egg (optional - activate on special key combo)
function matrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '0.08';
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01アイウエオカキクケコサシスセソタチツテト▲▼◆◇';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 0, 21, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Alternate between pink and cyan
        const colors = ['#ff00ff', '#00f0ff', '#b537f2'];
        
        ctx.font = `${fontSize}px monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillStyle = colors[i % colors.length];
            ctx.shadowBlur = 10;
            ctx.shadowColor = colors[i % colors.length];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 33);
}

// Handle window resize
function handleResize() {
    // Adjust ASCII art size if needed on very small screens
    const asciiArt = document.querySelector('.ascii-art pre');
    if (asciiArt && window.innerWidth < 400) {
        asciiArt.style.fontSize = '0.2rem';
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Run boot sequence
    bootSequence();
    
    // Add effects
    addGlitchEffect();
    addTypingFeedback();
    randomizeCursor();
    
    // Add matrix rain background
    matrixRain();
    
    // Handle resize
    window.addEventListener('resize', handleResize);
    
    // Easter egg: Press Ctrl+Shift+M for enhanced matrix effect
    let keysPressed = {};
    document.addEventListener('keydown', (e) => {
        keysPressed[e.key] = true;
        
        if (keysPressed['Control'] && keysPressed['Shift'] && keysPressed['M']) {
            const canvas = document.querySelector('canvas');
            if (canvas) {
                canvas.style.opacity = canvas.style.opacity === '0.08' ? '0.2' : '0.08';
            }
        }
    });
    
    document.addEventListener('keyup', (e) => {
        delete keysPressed[e.key];
    });
});
