# Syed Musab — Personal Landing Page

A high-fidelity, fully responsive personal landing page built with **React**, **Vite**, and **Tailwind CSS v4**. Designed to showcase services, case studies, working process, and client testimonials for a freelance web development business.

---

## ✨ Features

- **Mobile-First Responsive Design** — pixel-perfect from a Vivo Y11 (360px) to a 4K monitor
- **Functional Hamburger Menu** — animated mobile drawer with smooth open/close transition
- **Fixed Navbar** — stays at the top with smooth-scroll navigation to each section
- **Services Section** — responsive 2-column card grid
- **CTA Section** — brand-styled call-to-action with responsive illustration
- **Case Studies** — 1 / 2 / 3-column responsive grid with contextual borders
- **Work Process Accordion** — animated accordion with plus/minus icon toggle
- **Testimonials Carousel** — pixel-perfect desktop slider + fluid mobile card carousel with star navigation
- **Contact Form** — EmailJS-powered contact form with loading / success / error states
- **Smooth Scroll** — logo click scrolls to top; nav links smoothly scroll to sections

---

## 🛠 Tech Stack

| Technology | Version |
|---|---|
| React | ^19 |
| Vite | ^6 |
| Tailwind CSS | ^4 |
| EmailJS (REST API) | Native fetch |
| Space Grotesk | Google Fonts |

---

## 🚀 Getting Started

> Requires **Node.js v20+** — [Download here](https://nodejs.org/en/download/)

```bash
# 1. Clone the repository
git clone https://github.com/syedmusab31/syed-musab_LandingPage.git
cd syed-musab_LandingPage

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📧 EmailJS Setup (Contact Form)

To make the contact form send real emails, replace the placeholder credentials in `src/components/ContactSection.jsx`:

```js
const serviceId  = "YOUR_SERVICE_ID";
const templateId = "YOUR_TEMPLATE_ID";
const publicKey  = "YOUR_PUBLIC_KEY";
```

Get your credentials from [emailjs.com](https://www.emailjs.com/).

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed navbar with hamburger menu
│   ├── Hero.jsx            # Hero section with fluid typography
│   ├── Services.jsx        # 2-col responsive service cards
│   ├── CtaSection.jsx      # Call-to-action banner
│   ├── CaseStudies.jsx     # 1/2/3-col case study grid
│   ├── WorkProcess.jsx     # Animated accordion process steps
│   ├── Testimonials.jsx    # Desktop slider + mobile card carousel
│   ├── ContactSection.jsx  # EmailJS contact form
│   ├── FooterBlock.jsx     # Simple footer
│   ├── Card.jsx            # Service card component
│   ├── Card1.jsx           # Testimonial card (desktop + mobile)
│   ├── ProcessCard.jsx     # Accordion process card
│   ├── Heading.jsx         # Brand-styled section heading
│   ├── Button.jsx          # Reusable button variants
│   └── Logo.jsx            # Site logo
├── pages/
│   └── Home.jsx            # Main page assembling all sections
└── global.css              # Global styles + Tailwind imports
```

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy on Vercel, Netlify, or any static host.

---

## 📄 License

Personal project — © 2026 Syed Musab. All rights reserved.