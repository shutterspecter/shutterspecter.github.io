# ShutterSpecter Digital Presence

![ShutterSpecter](https://placehold.co/1200x600)

A modern, responsive portfolio website with animated Three.js background and bento-grid layout for showcasing creative work and social links.

## ✨ Features

- **Interactive 3D Background** - Subtle Three.js animation with responsive design
- **Bento Grid Layout** - Modern card-based organization for content and links
- **Adaptive Color Scheme** - Automatically adapts to system light/dark mode preferences
- **Responsive Design** - Fully responsive from desktop to mobile
- **Scroll Reveal Animations** - Elements animate into view as you scroll
- **Touch-Friendly Interactions** - Enhanced hover effects for mobile users

## 🚀 Live Demo

[View Live Demo](https://your-demo-link-here.com)

## 📷 Screenshots

<div align="center">
  <img src="https://placehold.co/600x400" alt="Desktop view" width="600px" />
  <p><em>Desktop view - Light mode</em></p>

  <img src="https://placehold.co/600x400" alt="Mobile view" width="300px" />
  <p><em>Mobile view - Dark mode</em></p>
</div>

## 🛠️ Technologies Used

- **HTML5** - Modern semantic structure
- **CSS3** - Custom properties, flexbox, and grid
- **JavaScript** - Animation and interaction effects
- **Three.js** - 3D background animation
- **Google Fonts** - Space Grotesk, DM Serif Display, and Inter
- **Intersection Observer API** - For scroll animations

## 📂 Project Structure

```
portfolio-website/
├── index.html        # Main HTML structure
├── styles.css        # CSS styling with light/dark theme
├── script.js         # JavaScript for animations and interactions
└── README.md         # Project documentation
```

## 🚦 Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   ```

2. Open `index.html` in your browser or use a local development server:
   ```
   # Using Python
   python -m http.server
   
   # Or any other local server of your choice
   ```

3. To make changes:
   - Edit `index.html` to update content and links
   - Modify `styles.css` to change appearance
   - Adjust `script.js` to alter animations

## 🎨 Customization

### Changing Links

Update the link cards in `index.html`:

```html
<a href="your-link-here" class="link-card" target="_blank" rel="noopener">
  <div class="link-icon">🎁</div>
  <span class="link-title">Your Title Here</span>
  <span class="link-desc">Your description here</span>
  <span class="link-arrow">→</span>
</a>
```

### Customizing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
  --primary: #2D3250;
  --secondary: #424769;
  --accent: #F19A3E;
  /* Add/modify other colors as needed */
}
```

### Adjusting the 3D Background

Modify the Three.js parameters in `script.js`:

```javascript
// Increase/decrease for more/fewer points
const size = 80;
const spacing = 4;

// Change the animation speed
grid.rotation.y += 0.001;

// Adjust wave intensity
positions[i + 1] = Math.sin(time + positions[i] * 0.05) * 1.5;
```

## 📱 Responsive Behavior

The site uses a responsive grid system that adapts to different screen sizes:

- **Desktop (1024px+)**: Full bento grid layout
- **Tablet (768px - 1024px)**: Adjusted grid proportions
- **Mobile (below 768px)**: Simplified single-column layout

## 🌗 Dark/Light Mode

The site automatically detects and applies the user's system preference for dark or light mode using the `prefers-color-scheme` media query.

## 🤝 Contributing

Feel free to fork this repository and adapt it for your own use. Pull requests for enhancements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

ShutterSpecter - [Instagram](https://www.instagram.com/shutterspecter/)

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/yourusername">ShutterSpecter</a></p>
</div>