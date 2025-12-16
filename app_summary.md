# Application Summary: Simka Buah (3D Landing Page)

## Overview
**Simka Buah** is a modern, fast, and user-friendly landing page designed for a local MSME (UMKM) selling fresh fruits, salads, and fruit parcels. The project focuses on delivering a "Fresh & Organic" visual experience with high-performance metrics.

## Key Features
- **3D Hero Experience**: Interactive 3D elements (powered by Spline/TresJS) to showcase products vividly.
- **Modern UI/UX**: Glassmorphism effects, smooth animations, and a clean interface.
- **Responsive Design**: Mobile-first approach ensuring perfect display across all devices.
- **Direct Conversion**: Integrated WhatsApp CTA for seamless ordering.

## Technology Stack
- **Frontend Framework**: Vue 3 (Composition API)
- **3D Engine**: Spline (via `@splinetool/runtime`) or TresJS
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Typography**: Google Fonts (Outfit / Plus Jakarta Sans)
- **Icons**: Lucide Vue

## Architecture
### Components
- **Navbar**: Sticky, glassmorphism effect.
- **Hero Section**: 3D interactive canvas overlaid with compelling copy and CTA.
- **Feature Card**: Highlights key benefits (Fresh, Fast, Hygienic).
- **Product Grid**: Showcase for Salads, Parcels, and Fruits with tailored hover effects.
- **Testimonials**: Customer social proof.
- **Footer**: Branding and contact links.

## Design Language
- **Palette**: Emerald Green (Primary), Coral/Orange (Accent), Off-white (Background).
- **Vibe**: Fresh, Organic, Modern, High-End.


## Security & Performance
- **Content Security Policy**: Strict CSP implemented in `index.html` to mitigate XSS.
- **Input Sanitization**: Client-side validation sanitization (Regex/Trimming) for user inputs.
- **Headers**: strict-origin-when-cross-origin Referrer Policy.

## Development Goals
- Achieve high performance scores (Lighthouse).
- Ensure accessible and intuitive navigation.
- Deliver a "Wow" factor through 3D visuals without compromising load times.
- Maintain a secure frontend environment.
