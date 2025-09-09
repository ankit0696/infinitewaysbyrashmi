# Infinite Ways by Dr. Rashmi

A professional portfolio website for Dr. Rashmi Bohra, Energy Transformational Coach and Transpersonal Counsellor.

## About

This website showcases Dr. Rashmi's unique journey from PhD in Computer Science to Energy Healer, featuring her healing modalities based on quantum physics principles.

## Features

- **Mobile-First Design**: Fully responsive, optimized for all devices
- **Modern Tech Stack**: Next.js 15.5.2, React 19, TailwindCSS 4
- **JavaScript**: Built with JavaScript (no TypeScript)
- **Performance Optimized**: Built with Turbopack for fast development
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant design

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                 # App Router pages (JavaScript)
│   ├── about/
│   │   └── page.js
│   ├── services/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── layout.js
│   ├── page.js
│   └── globals.css
└── components/          # Reusable components (JavaScript)
    ├── Navigation.js
    ├── Hero.js
    ├── AboutPreview.js
    ├── ServicesPreview.js
    ├── Testimonials.js
    ├── CTA.js
    ├── ContactForm.js
    └── Footer.js
```

## Customization

### Brand Colors
Update brand colors in `tailwind.config.js`:
- Primary: #ffde59 (Yellow)
- Secondary: #ff66c4 (Pink) 
- Accent: #8d2e35 (Red)
- Warm tones: Cream, Peach, Desert, Coral

### Content
Update content directly in the page and component files to match Dr. Rashmi's latest information.

### Social Media
Update social media links in:
- `src/components/Footer.js`
- `src/app/contact/page.js`

## Technologies Used

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: JavaScript
- **Styling**: TailwindCSS 4
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter, Poppins (Google Fonts)

## License

This project is created for Dr. Rashmi Bohra's professional use.

## Contact

For support or questions about this website:
- Website: infinitewaysbyrashmi.com
- Instagram: @infinitewaysbyrashmi
- Facebook: /infinitwaysbyrashmi
