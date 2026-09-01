# 🌐 Studio Namma — Creative Studio UI Clone

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> A pixel-perfect, high-performance UI recreation and clone of the award-winning creative agency website **Studio Namma** ([studionamma.com](https://studionamma.com)). Built from the ground up using pure **Vanilla HTML5, CSS3, and JavaScript (ES6+)** without any heavy UI framework dependencies.

---

## 📌 Project Overview

This project is an advanced frontend clone designed to showcase modern web design aesthetics, bespoke micro-interactions, custom typography, and dynamic media synchronization. It demonstrates how to build rich, award-winning agency-grade web experiences using standard web technologies.

> **Disclaimer:** This project is created for **educational, learning, and portfolio demonstration purposes**. All original design concepts, trademarks, and media assets belong to **Studio Namma** and their respective clients.

---

## ✨ Features & Highlights

### 🎨 1. Dynamic Theming & Navigation
- **Sticky Pixel-Perfect Navbar:** Floating navigation header with dynamic transparency, blur, and scroll awareness.
- **Light & Dark Mode Toggle:** Instant theme switcher with smooth transitions across backgrounds, typography, and SVG client logos.
- **Fullscreen Menu Overlay:** Interactive slide-out navigation overlay with animated links, social handles, and contact quick links.
- **"Let's Talk" Contact Drawer / Modal:** Direct access to WhatsApp integration and client intake details.

### 🖱️ 2. Custom Cursor & Visual Hover Effects
- **Intelligent Cursor Follower:** Custom magnetic mouse cursor that dynamically reflects hover targets (e.g., displaying `PLAY`, `PORTFOLIO`, `SERVICES`, etc.).
- **Dynamic Visual Media Preview:** Floating video/image preview wrapper that trails cursor movements across interactive triggers.

### 🎬 3. Home Page Experience (`index.html`)
- **Kinetic Hero Typography:** Large dynamic headline rendered with split-text hover animations.
- **Embedded Showreel:** Responsive high-definition showreel integration (Vimeo player).
- **Interactive Playground Grid:** Showcase of featured agency works with synchronized video and webp hover states.
- **Interactive Services Accordion:** Dynamic services directory with live video preview triggers on hover.
- **Vector Client Logos:** Crisp, theme-adaptive SVG logos for high-profile clients (e.g., Qonto, Silvr, Alan, Matera).

### 💼 4. Work & Portfolio Page (`work.html`)
- **"Our Game" Hero:** Striking typographic hero section.
- **Dual-Pane Interactive Text List:** 
  - Left column: Hoverable list of 10+ selected brand projects (*Malibou, Zefir, HeySimon, Osol, Supercomics, Silvr, Matera, Orus Energy, etc.*).
  - Right column: Synchronized live video preview showcase that transitions seamlessly as you hover over different project items.
- **Comprehensive Project Archives:** Categorized client archive with sector tags and direct case study links.

### ⚡ 5. Performance & Architecture
- **Zero Framework Bloat:** 100% Vanilla JS with modular IIFE design patterns for clean encapsulation and scope isolation.
- **GPU Accelerated Transitions:** Butter-smooth animations powered by CSS transforms, opacity transitions, and optimized repaint cycles.
- **Self-Hosted Custom Fonts:** Embedded premium web typography for faithful visual replication.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic document structuring, OpenGraph meta tags, SEO readiness |
| **CSS3** | Custom properties (CSS variables), Flexbox, CSS Grid, `@keyframes`, `@font-face` |
| **JavaScript (ES6+)** | Component lifecycle, dynamic DOM rendering, custom cursor tracking, theme toggle |
| **Font Awesome 6** | Vector UI iconography |
| **Google Fonts & Custom Typography** | *Mixtape Extra Condensed*, *Neue Montreal*, *GT Pressura Mono*, *Anton*, *Bebas Neue* |

---

## 📂 Project Structure

```text
Studio-Namma/
├── assets/                    # Project media assets
│   ├── playground-photo1.webp # Static image previews
│   ├── playground-photo2.webp
│   ├── playground-photo3.webp
│   ├── playground-photo4.webp
│   ├── playground-video1.mp4  # Loopable short-form video previews
│   ├── playground-video2.mp4
│   ├── playground-video3.mp4
│   └── playground-video4.mp4
├── css/                       # Modular stylesheet architecture
│   ├── footer.css             # Footer component styles
│   ├── home.css               # Homepage layout, hero, playground & services styles
│   ├── navbar.css             # Navbar, dark mode tokens & overlay menu styles
│   └── work.css               # Portfolio showcase, text-list & archive styles
├── fonts/                     # Custom typography (@font-face)
│   ├── GTPressuraMono-Light.ttf
│   ├── Mixtape-NormalMedium.otf
│   ├── Mixtape-NormalRegular.otf
│   ├── Mixtape-NormalRegularItalic.otf
│   ├── Mixtape-NormalSemiBold.otf
│   ├── MixtapeExtraCondensed-ExtraBold.otf
│   └── NeueMontreal-Regular.otf
├── images/                    # UI branding assets & icons
│   ├── whatsapp.png
│   └── waOpen.png
├── js/                        # Modular JavaScript components
│   ├── footer.js              # Dynamic footer injection & newsletter interaction
│   ├── home.js                # Home hero, playground cards, services & custom cursor
│   ├── navbar.js              # Navbar rendering, theme switcher & menu drawer
│   └── work.js                # Project showcase data, video preview hover & archives
├── .gitignore                 # Ignored files (OS, IDE, and temporary captures)
├── index.html                 # Main Homepage
├── README.md                  # Project documentation
└── work.html                  # Portfolio & Showcase Page
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/thisisarpit26-prog/Studio-Namma-UI.git
```

### 2. Navigate to the project directory
```bash
cd Studio-Namma-UI
```

### 3. Open in Browser
Since this is built with pure Vanilla HTML/CSS/JS, you do not need any build steps or `npm install`.

- **Option A (VS Code Live Server - Recommended):**
  1. Open the folder in VS Code.
  2. Right-click on `index.html` and select **"Open with Live Server"**.
  
- **Option B (Any Static Server):**
  ```bash
  # Using Python 3
  python -m http.server 3000
  
  # Or using Node npx serve
  npx serve .
  ```
  Then open `http://localhost:3000` in your web browser.

---

## 🎯 Design System & Typography

- **Colors:**
  - **Light Mode:** Canvas `#E4E4E4` / `#F0F0F0`, Foreground `#111111`
  - **Dark Mode:** Canvas `#0D0D0D` / `#141414`, Foreground `#FFFFFF`
  - **Accent Color:** High-contrast vibrant highlights and crisp monochrome balances.
- **Typography:**
  - **Display / Headers:** `Mixtape Extra Condensed`, `Anton`, `Bebas Neue`
  - **Body / Subheadings:** `Neue Montreal`, `Space Mono`
  - **Mono / Meta Details:** `GT Pressura Mono`

---

## 🤝 Contributing

Contributions, issues, and feature suggestions are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

