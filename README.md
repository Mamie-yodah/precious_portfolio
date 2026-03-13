# Precious Kanzamba — Portfolio Website

This repository contains a clean, modern portfolio website built with **HTML, CSS, and minimal JavaScript**.

## ✅ What’s Included

- **Responsive layout** (works on desktop, tablet, and mobile)
- **Dark mode toggle** (persists your preference across visits)
- **Mobile navigation** (collapsible menu for smaller screens)
- Multiple pages:
  - `index.html` — home / landing page
  - `about.html` — about & skills
  - `projects.html` — project showcase
  - `contact.html` — contact form + quick links
  - `credentials.html` — verified certifications

## 🚀 How to Run It Locally
No build tools required — just open the files.

### Option 1: Open directly
1. Open `index.html` in your browser.

### Option 2: Run a local server (recommended for best behavior)
From the project folder:
```powershell
python -m http.server 8000
```
Then visit: `http://localhost:8000`

## 🎨 Theme & Responsiveness
- **Dark mode toggle:** Click the moon/sun button in the top navigation. Your preference is saved in `localStorage`.
- **Mobile navigation:** A hamburger menu appears on smaller screens.

## 🛠 Customize
- Update text and sections by editing the HTML pages.
- Change styling inside each page’s `<style>` block.
- Add or remove projects in `projects.html`.

## 📦 Notes
This is intentionally lightweight and does not use any frameworks. All pages are static and can be hosted on GitHub Pages, Netlify, Vercel, or any static website host.

---

If you want, I can also help you migrate all styles into a shared CSS file and consolidate the JavaScript into a single `assets/js/site.js` for easier maintenance.