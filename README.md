# Cocosmos Portfolio Website

A modern, immersive portfolio for a creative artist, featuring cosmic themes, smooth animations, and responsive design.

## Getting Started

1. Clone or download this repository
2. Open a terminal in the project directory
3. Start a local server (choose one of the following methods):
   - **Python 3:** `python3 -m http.server 8000`
   - **Node.js:** `npx http-server` OR `npx live-server` OR `npx serve`
   - **PHP:** `php -S localhost:8000`
   - **VSCode Live Server Extension:** Right-click `index.html` and select "Open with Live Server"
4. Visit `http://localhost:8000` (or the port shown in your terminal) in your browser if using a local server.

5. Alternatively, but not recommended, you can *open `index.html` directly in your browser* (double-click or open with your browser).
Note: You'll have issues, it will not work as intented ! Some JavaScript features (such as fetch requests or module imports) may not work due to browser security restrictions when using the `file://` protocol.

## Tech Stack

- HTML5
- CSS3 (custom properties, transitions, Stylelint)
- Alpine.js (for reactivity)
- Vanilla JavaScript

## Features

- **Dark theme** with CSS variables for easy theming
- **Responsive layout** for all devices
- **Hero section** with animated video background
- **Cosmic navigation menu** with interactive planets
- **Gallery** with grayscale-to-color image transitions
- **Schedule, News, and Contact sections**
- **Interactive UI** powered by Alpine.js and custom JS
- **CSS refactored** for maintainability (variables, selector order, linting)

## Project Sections

- **Hero:** Full-screen video background with parallax and animated heading.
- **Cocosmos Description:** Brief overview of the Cocosmos concept and theme.
- **My Work Gallery:** Displays featured artwork with animated grayscale-to-color transitions.
- **Schedule:** Timeline of events with dates and descriptions.
- **News:** Highlights recent updates and stories with images.
- **Contact:** Simple form for inquiries and messages.
- **Footer:** Quick links and showcase imagery, styled to match the cosmic theme.

## Development & Quality

- **CSS Variables:** All colors, spacing, fonts, and transitions use custom properties defined in `:root` for easy updates.
- **Linting:** Stylelint with standard config enforces clean, consistent CSS (`npx stylelint styles.css`).
- **Modular Structure:** Each section (hero, gallery, schedule, news, contact, footer) is organized for clarity and maintainability.

## Contributing

Pull requests are welcome. Please keep code clean and follow the CSS variable system.

## License

MIT
- Decorative elements with white bars and dots
- Timeline of events with times and descriptions
- Structured layout for easy reading

### 5. News Section

- Two-column grid showcasing news articles
- Each article features an image and title
- Clean, minimal design that focuses on the content

### 6. Contact Section

- "GET IN TOUCH" heading
- Interactive contact form for sending messages
- Image showcase in the footer
- Footer with navigation links, image thumbnails, and copyright information

## Technical Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Smart Navigation**: Header disappears when scrolling down and reappears when scrolling up
- **Interactive Cosmic Menu**: Planetary navigation system with orbiting elements
- **Smooth Scrolling**: Enhanced navigation between sections
- **Interactive Elements**: Form inputs, buttons, and hover effects
- **Animations**: Grayscale transitions, parallax effects, orbital animations, and scroll-based animations
- **Alpine.js Integration**: For reactive UI components and menu state management

## Project Structure

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - JavaScript functionality and scroll effects
- `images/` - Directory containing all website images and video
  - `images/planets/` - SVG files for the cosmic menu planets
  - `images/footer-showcase/` - Images for the footer showcase
  - `images/logo.svg` - Vector logo for the cosmic menu
  - `images/logo.png` - PNG logo for the navigation bar

## Recent Enhancements

- **Cosmic Navigation Menu**: Interactive menu with orbiting planets representing different sections
- **Footer Redesign**: Added image thumbnails with centered text overlays
- **Visual Improvements**: Enhanced image presentations with hover effects
- **Interactive Elements**: Added close button for the menu and improved navigation

## Future Enhancements

- Backend integration for the contact form
- Dynamic content loading for the news section
- Enhanced gallery with lightbox functionality
- Additional animation effects
- SEO optimization
- More cosmic-themed interactive elements

---

This project was developed as a creative portfolio website that showcases artistic work while providing information about services, schedule, and contact details.
