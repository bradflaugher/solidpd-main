# Solid Product Design Website

A professional website for Solid Product Design built with React, Vite, and Tailwind CSS, optimized for static hosting on Netlify.

## 🚀 Live Site

- **Production**: [solidpd.com](https://solidpd.com) (from `main` branch)
- **Development**: Auto-deployed preview from any non-main branch

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: Netlify (via GitHub Actions)
- **Build Output**: Static files in `dist/` directory

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Header navigation
│   ├── Footer.jsx          # Footer component
│   └── ui/                 # shadcn/ui components
├── pages/
│   ├── Home.jsx            # Homepage
│   ├── Work.jsx            # Portfolio page
│   ├── About.jsx           # About us page
│   ├── Services.jsx        # Services page
│   └── Contact.jsx         # Contact page
├── App.jsx                 # Main app component
├── App.css                 # Global styles
└── main.jsx               # Entry point

dist/                       # Static build output
├── index.html             # Main HTML file
├── assets/                # CSS and JS bundles
├── _redirects            # Netlify routing config
└── *.png, *.ico          # Favicon and assets
```

## 🎨 Features

- **Responsive Design** - Works on all devices
- **Modern UI Components** - Built with shadcn/ui
- **Smooth Animations** - Hover effects and transitions
- **SEO Optimized** - Meta tags, sitemap, robots.txt
- **Performance Optimized** - Built with Vite for fast loading
- **Static Site** - Fully static output for CDN hosting

## 🏃‍♂️ Development

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/bradflaugher/solidpd.com.git
   cd solidpd.com
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```

4. **Build for production**
   ```bash
   pnpm run build
   ```

5. **Preview production build**
   ```bash
   pnpm run preview
   ```

## 📦 Available Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build static files for production
- `pnpm run preview` - Preview production build locally
- `pnpm run lint` - Run ESLint

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

The site is automatically deployed via GitHub Actions:

- **`main` branch** → Production deployment to solidpd.com
- **Any other branch** → Development preview deployment

### Manual Deployment

If you need to deploy manually to Netlify:

```bash
# Build the project
pnpm run build

# Deploy to Netlify (requires Netlify CLI)
netlify deploy --dir=dist --prod
```

### Netlify Configuration

The site includes:
- `netlify.toml` - Build and deployment configuration
- `public/_redirects` - SPA routing configuration
- Security headers and caching rules

## 🎯 Pages

- **Homepage** (`/`) - Hero section, company overview, statistics, expertise
- **Work** (`/work`) - Portfolio showcase with case studies
- **About** (`/about`) - Company story, team, expertise
- **Services** (`/services`) - Service offerings and packages
- **Contact** (`/contact`) - Contact form and information

## 🎨 Design System

The website uses a consistent design system with:

- **Colors**: Gray scale with blue accents
- **Typography**: Clean, professional fonts
- **Spacing**: Consistent padding and margins
- **Components**: Reusable UI components
- **Animations**: Subtle hover effects and transitions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Static Site Features

- **SPA Routing**: Client-side routing with fallback to index.html
- **Asset Optimization**: Minified CSS and JS bundles
- **CDN Ready**: Optimized for CDN distribution
- **SEO Friendly**: Proper meta tags and structured data
- **Performance**: Lighthouse score optimized

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Solid Product Design.

## 📞 Support

For questions or support, please contact:
- Email: info@solidpd.com
- Website: [solidpd.com](https://solidpd.com)

---

Built with ❤️ by the Solid Product Design team
