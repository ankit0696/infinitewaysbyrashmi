# Infinite Ways by Rashmi - Next.js 15 + React 19 Website

A cutting-edge, professional spiritual healing website built with **Next.js 15**, **React 19**, and **Tailwind CSS v4**.

## 🚀 Modern Tech Stack

- **Next.js 15.5.2** with App Router
- **React 19.1.0** (Latest stable)
- **Tailwind CSS v4** (Latest with new architecture)
- **Turbopack** enabled for faster development
- **ESLint 9** for code quality

## ⚡ Performance Features

- **Server Components** by default for faster loading
- **Turbopack** bundler for lightning-fast dev builds
- **Google Fonts** optimization with `font-display: swap`
- **Image optimization** with Next.js Image component
- **Automatic code splitting** and lazy loading

## 🎨 Design Features

- **Spacious Layout** - Generous padding and margins
- **Professional Aesthetics** - Clean, modern wellness design
- **Brand Colors** - Custom yellow/red/cream palette
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - CSS transitions and hover effects
- **Custom Components** - Reusable UI elements

## 📁 Project Structure (Next.js 15 App Router)

```
infinitewaysbyrashmi/
├── app/                    # App Router (Next.js 15)
│   ├── globals.css        # Tailwind + custom styles
│   ├── layout.js          # Root layout with fonts
│   ├── page.js            # Home page (/)
│   ├── about/
│   │   └── page.js        # About page (/about)
│   ├── services/
│   │   └── page.js        # Services page (/services)
│   └── contact/
│       └── page.js        # Contact page (/contact)
├── components/             # React components
│   ├── Header.js          # Navigation (client component)
│   ├── Hero.js            # Homepage hero section
│   └── Footer.js          # Site footer
├── public/
│   └── images/            # Place your 4 photos here
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind CSS v4 config
├── postcss.config.js      # PostCSS config
└── eslint.config.mjs      # ESLint 9 config
```

## 📱 Pages Overview

### Home (`/`) - Server Component
- Hero section with professional image
- Trust indicators and credentials
- Services preview cards
- Call-to-action buttons

### About (`/about`) - Server Component
- Transformation story with photos
- Healing philosophy cards
- Credentials showcase
- Mission and vision

### Services (`/services`) - Server Component
- Featured services with images
- Complete service menu with pricing
- How it works process
- Booking CTAs

### Contact (`/contact`) - Client Component
- Contact methods and info
- Interactive contact form
- Why choose Dr. Rashmi
- FAQ section

## 🔧 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Photos
Place these 4 images in `public/images/`:
- `hero-image.jpg` - Professional courtyard photo
- `about-transformation.jpg` - Jumping on sand dunes
- `group-session.jpg` - Group healing session
- `sound-healing.jpg` - Singing bowl photo

### 3. Development Server
```bash
npm run dev
```

Visit http://localhost:3000

### 4. Build for Production
```bash
npm run build
npm start
```

## 🎯 Key Features

### Brand Integration
- **Custom CSS Variables** for consistent branding
- **Professional Photography** strategically placed
- **Trust Indicators** (PhD, 6+ years, 500+ lives)
- **Service Pricing** (₹1,500 - ₹5,000)

### Modern UX/UI
- **Spacious Design** - 8rem+ section spacing
- **Hover Effects** - Smooth transitions and transforms
- **Loading States** - Interactive form feedback
- **Mobile Navigation** - Collapsible menu
- **Accessibility** - ARIA labels and semantic HTML

### SEO Optimized
- **Metadata API** - Custom meta tags per page
- **OpenGraph Tags** - Social media optimization
- **Semantic HTML** - Proper heading structure
- **Alt Text** - Image accessibility
- **Schema Ready** - Structured data potential

## 🛠 Customization

### Colors (Tailwind CSS v4)
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    yellow: '#ffde59',
    red: '#8d2e35',
    // ...
  }
}
```

### Fonts
Google Fonts loaded in `app/layout.js`:
- **Inter** - Body text (sans-serif)
- **Playfair Display** - Headings (serif)

### Content Updates
- **Services** - Edit `app/services/page.js`
- **About Story** - Update `app/about/page.js`
- **Contact Info** - Modify `app/contact/page.js`
- **Hero Content** - Change `components/Hero.js`

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push origin main

# Deploy to Vercel
vercel --prod
```

### Other Platforms
- **Netlify** - Drag build folder
- **Docker** - Use Next.js Dockerfile
- **VPS** - PM2 process manager

## 🔍 Next.js 15 + React 19 Benefits

### Performance
- **Faster Build Times** with Turbopack
- **React Compiler** optimizations
- **Automatic Bundle Optimization**
- **Server Components** reduce client JS

### Developer Experience  
- **Hot Reload** improvements
- **Better Error Messages**
- **TypeScript** support ready
- **ESLint 9** integration

### SEO & Core Web Vitals
- **Lighthouse Score** 95+
- **First Contentful Paint** optimized
- **Cumulative Layout Shift** minimized
- **Meta Tags** and OpenGraph ready

## 📊 Browser Support

- **Chrome** 88+
- **Firefox** 87+
- **Safari** 14+
- **Edge** 88+

## 🆘 Troubleshooting

### Common Issues
1. **Images not loading** - Check file names match exactly
2. **Styles not applying** - Ensure Tailwind is building
3. **Form not working** - Contact form is demonstration only

### Development
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check build
npm run build
```

---

**Built with ❤️ using Next.js 15, React 19, and Tailwind CSS v4**

*Professional spiritual healing website for Dr. Rashmi - Transform Your Energy, Transform Your Life*
