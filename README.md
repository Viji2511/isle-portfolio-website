# Prof. Balamurugan N. Appakalai (Dr. Bala) Portfolio Website

A premium, highly interactive academic and professional portfolio website for **Prof. Balamurugan N. Appakalai, PhD (Dr. Bala)**, Professor of Pediatrics at Nationwide Children's Hospital and The Ohio State University. The website showcases his 25+ years of research, clinical publications, academic honors, and his specialized domain: **Isletologist Views** (clinical and research-grade pancreatic islet isolation and transplantation).

---

## Table of Contents

- [About the Project](#about-the-project)
- [Visual Identity & Design System](#visual-identity--design-system)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Getting Started / How to Run](#getting-started--how-to-run)
- [License](#license)

---

## About the Project

This portfolio is custom-built to present Dr. Bala's academic achievements and scientific consulting capabilities. The design breaks away from dry academic layouts, utilizing a **microscopy/fluorescence dark theme** that matches the visual aesthetics of advanced laboratory diagnostics. 

It highlights:
- **Biographical Info**: Academic background, research history, and affiliations.
- **Isletologist Views**: 7 detailed expertise areas covering lab establishment, human islet isolation (allogeneic/autologous), xenotransplantation, primate models, functional assays, and organ allocation frameworks.
- **Publications & Honors**: Selected peer-reviewed papers (with external links to ResearchGate and OmicsOnline) and scientific awards.
- **Contact Portal**: Custom-designed inquiry form for collaborations, speaking engagements, and consulting services.

---

## Visual Identity & Design System

The visual design is inspired by deep-field dark microscopy:
- **Theme**: Dark theme with soft, floating biological islet cell clusters rendered dynamically using CSS gradients.
- **Color Palette**:
  - **Background**: Deep Dark Navy (`#050D1A` / `#060F1E`)
  - **Text**: Premium White (`#FFFFFF`) / Muted Silver (`rgba(255, 255, 255, 0.65)`)
  - **Accents**: Gold (`#C9A84C`) representing prestige and academic heritage; Teal (`#00C8C8`) representing modern clinical science and diagnostics.
- **Typography**:
  - **Headings**: *Cormorant Garamond* (Elegant, classic serif from Google Fonts)
  - **Body**: *Inter* (Sleek, highly legible modern sans-serif)
  - **Data/Mono**: *JetBrains Mono* (Developer/technical monospaced font)

---

## Tech Stack

- **Structure**: Semantic HTML5
- **Style**: Custom Vanilla CSS (Modular, CSS variables, standard flex/grid layouts, keyframe animations, transition dynamics)
- **Logic**: Vanilla JavaScript (ES6+, DOM API, Intersection Observer API)
- **Icons**: Clean, inline custom SVGs
- **Fonts**: Google Fonts integrations

---

## Project Structure

```
bala-website/
├── css/
│   └── style.css          # Main stylesheet containing custom tokens, reset, typography, and section styles
├── js/
│   └── main.js            # Interactive behaviors (sticky headers, scroll observers, contact validations)
├── assets/                # Folder for scientific diagrams, images, and other local assets
├── index.html             # The unified single-page responsive portfolio homepage
└── README.md              # Project documentation
```

---

## Key Features

1. **Microscopic Glow Backgrounds**: Dynamic floating cells animated via custom CSS keyframes.
2. **Interactive Layouts**: Card grid hover transformations (3D lift, border highlights, glow vectors).
3. **Scroll-Driven Slide Animations**: Clean slide-up displays driven by an asynchronous JS `IntersectionObserver` that only runs when components scroll into the viewport.
4. **Fluid Responsiveness**: Flexboxes and grid divisions that automatically adapt layout structures on tablet and mobile viewports.
5. **No Frameworks**: Extremely lightweight page loads with raw, optimized code.

---

## Getting Started / How to Run

Since the project is built using native web standards, it does not require an installation or build phase.

### Running Locally
To launch the site locally, you can use any of the following methods:

#### Method 1: Double-Click File
Simply locate and double-click the `index.html` file in your operating system's file browser to open it directly in any modern web browser.

#### Method 2: Live Server (Recommended)
If you are developing in Visual Studio Code, install the **Live Server** extension:
1. Open the `bala-website` directory in VS Code.
2. Click **Go Live** in the bottom status bar (or right-click `index.html` and select **Open with Live Server**).
3. The server will launch the site at `http://127.0.0.1:5500/`.

#### Method 3: Simple Python Server
If you have Python installed, you can spin up a quick server in your terminal:
```bash
# Navigate to the folder
cd bala-website

# Start the server
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## License

This website is designed for the presentation of academic, research, and professional clinical achievements. All rights reserved &copy; 2025.
