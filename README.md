# Portfolio - Shavar Cox

A high-performance, accessible portfolio website built with Astro and Tailwind CSS, showcasing 8+ years of frontend development experience.

[![Performance](https://img.shields.io/badge/Performance-100-brightgreen)](https://pagespeed.web.dev/)
[![Accessibility](https://img.shields.io/badge/Accessibility-100-brightgreen)](https://pagespeed.web.dev/)
[![Best Practices](https://img.shields.io/badge/Best%20Practices-100-brightgreen)](https://pagespeed.web.dev/)
[![SEO](https://img.shields.io/badge/SEO-100-brightgreen)](https://pagespeed.web.dev/)

## 🚀 Features

- **Perfect Core Web Vitals** - 100 scores across all metrics (Performance, Accessibility, Best Practices, SEO)
- **Optimized Performance** - Self-hosted fonts (97% reduction), lazy-loaded analytics, minimal JavaScript
- **Modern Stack** - Built with Astro v5, Tailwind CSS v4, and TypeScript
- **Accessibility First** - WCAG 2.1 compliant with semantic HTML and ARIA attributes
- **SEO Optimized** - Structured data (JSON-LD), geo-targeting, optimized meta tags
- **Responsive Design** - Mobile-first approach with fluid layouts
- **Dark Mode** - Automatic theme detection with smooth transitions
- **Type-Safe** - Full TypeScript support across components and data

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) v5.16.11
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4.1.18
- **Language**: [TypeScript](https://www.typescriptlang.org) v5.9.3
- **Build Tool**: [Vite](https://vitejs.dev) v7.3.1
- **Analytics**: Google Tag Manager + GA4 (interaction-based loading)
- **Deployment**: [Vercel](https://vercel.com)
- **Code Quality**: Prettier, Husky, lint-staged

## 📦 Performance Optimizations

- **Self-hosted fonts**: Local woff2 files (92 KB total) vs CDN (3.7 MB) - 97% reduction
- **SVG icons**: Inline SVGs with `currentColor` support (removed 1.7 KB font file)
- **Lazy GTM**: Loads on user interaction (scroll/click/touch) or 3s timeout
- **Optimized images**: WebP format with responsive sizes and lazy loading
- **CSS optimization**: Single bundled CSS file with PostCSS processing
- **Zero layout shift**: Fixed aspect ratios and content-visibility strategies

## 🏗️ Project Structure

```text
/
├── public/
│   ├── fonts/           # Self-hosted woff2 fonts
│   └── icons/           # SVG icon library
├── src/
│   ├── assets/images/   # Optimized images
│   ├── components/
│   │   ├── atoms/       # Button, Icon, Tool
│   │   ├── molecules/   # Experience, SectionHeader
│   │   └── organisms/   # Header, Footer, Hero
│   ├── data/            # JSON configuration files
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   ├── styles/          # Global CSS and fonts
│   └── types/           # TypeScript definitions
└── package.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/web-portfolio.git

# Navigate to directory
cd web-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes type checking)
- `npm run preview` - Preview production build locally
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 Customization

### Update Content

Edit JSON files in `/src/data/`:

- `global.json` - Site-wide settings and social links
- `experiences.json` - Work history
- `education.json` - Educational background
- `projects.json` - Portfolio projects
- `toolbox.json` - Tech stack and tools

### Modify Styles

- **Colors/Typography**: Edit `/src/styles/variables.css`
- **Component styles**: Use Tailwind utility classes
- **Global styles**: Modify `/src/styles/fonts.css`

### Add Pages

Create new `.astro` files in `/src/pages/` - file-based routing automatically generates routes.

## 🌐 Deployment

The site is configured for Vercel deployment with automatic builds on push.

```bash
# Build for production
npm run build

# Output will be in /dist
```

### Vercel Configuration

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Astro

## 📊 SEO Features

- **Keywords**: Frontend Developer Toronto, React Developer, TypeScript Developer
- **Structured Data**: Person schema with job title, location, skills
- **Geo-targeting**: Toronto coordinates for local search
- **Social Meta**: Open Graph and Twitter Card tags
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome! Feel free to open an issue or reach out.

## 📄 License

MIT License - feel free to use this as a template for your own portfolio.

## 📧 Contact

**Shavar Cox** - Senior Frontend Developer  
📍 Toronto, ON, Canada  
🔗 [LinkedIn](https://linkedin.com/in/shavarcox) | [GitHub](https://github.com/shavar)

---

Built with ❤️ using Astro and Tailwind CSS
