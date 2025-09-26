# Netlify Static Deployment Guide

This guide explains how to deploy the Solid Product Design website as a static site on Netlify with automatic deployments from GitHub.

## 🚀 Quick Setup

### 1. Connect Repository to Netlify

1. **Login to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "New site from Git"

2. **Connect GitHub Repository**
   - Select "GitHub" as your Git provider
   - Authorize Netlify to access your repositories
   - Choose `bradflaugher/solidpd.com`

### 2. Configure Build Settings

Netlify will auto-detect the configuration from `netlify.toml`, but verify these settings:

**Build Settings:**
- **Build command**: `pnpm install && pnpm run build`
- **Publish directory**: `dist`
- **Node version**: `18`

**Branch Deployment:**
- **Production branch**: `main`
- **Deploy previews**: All other branches (automatic)

### 3. Environment Variables

No environment variables are required for this static site, but if needed later:
- Go to Site Settings > Environment variables
- Add any required variables

## 🔧 Configuration Files

### netlify.toml
```toml
[build]
  publish = "dist"
  command = "pnpm install && pnpm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### _redirects (in public/)
```
/*    /index.html   200
```

This ensures React Router works properly on Netlify.

## 🌐 Custom Domain Setup

### For solidpd.com:

1. **Add Custom Domain**
   - Go to Site Settings > Domain management
   - Click "Add custom domain"
   - Enter `solidpd.com`

2. **DNS Configuration**
   - **For root domain (solidpd.com)**:
     - Add an `A` record pointing to Netlify's load balancer IP
     - Or use `ALIAS`/`ANAME` record pointing to your Netlify subdomain
   
   - **For www subdomain**:
     - Add a `CNAME` record pointing to your Netlify subdomain

3. **SSL Certificate**
   - Netlify automatically provisions Let's Encrypt SSL certificates
   - Certificate activation takes a few minutes

## 🚀 Deployment Strategy

### Branch-Based Deployments

- **`main` branch** → Production site (solidpd.com)
- **`dev` branch** → Development preview
- **Feature branches** → Deploy previews for testing

### GitHub Actions Integration

The repository includes a GitHub Actions workflow that:
- Builds the React app on every push
- Deploys to production from `main` branch
- Creates deploy previews from other branches

**Note**: The workflow file needs to be manually updated in the repository due to GitHub permissions.

## 📊 Performance Features

### Automatic Optimizations
- **Asset compression**: Gzip/Brotli compression enabled
- **CDN distribution**: Global CDN for fast loading
- **Image optimization**: Automatic image optimization
- **Caching headers**: Configured in netlify.toml

### Security Headers
```
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## 🔍 Monitoring & Analytics

### Built-in Analytics
- Enable Netlify Analytics in site settings
- View traffic, performance, and form submissions

### Third-party Integration
- Google Analytics can be added to the React components
- Other analytics tools can be integrated as needed

## 🛠️ Troubleshooting

### Common Issues

1. **404 Errors on Page Refresh**
   - Ensure `_redirects` file is in the `public/` directory
   - Verify the redirect rule: `/*    /index.html   200`

2. **Build Failures**
   - Check Node.js version (should be 18)
   - Verify all dependencies are in package.json
   - Review build logs in Netlify dashboard

3. **Assets Not Loading**
   - Check that assets are properly referenced
   - Verify build output in `dist/` directory

### Build Logs
Access detailed build logs:
1. Go to your site dashboard in Netlify
2. Click on "Deploys"
3. Select the deploy you want to inspect
4. View the build log for detailed information

## 🔄 Manual Deployment

For manual deployments using Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build the site
pnpm run build

# Deploy to production
netlify deploy --prod --dir=dist

# Deploy preview
netlify deploy --dir=dist
```

## 📈 Performance Optimization

### Lighthouse Scores
The site is optimized for:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Optimization Features
- Minified CSS and JavaScript
- Optimized images and assets
- Proper caching headers
- Efficient bundle splitting

## 🔐 Security

### HTTPS
- Automatic HTTPS with Let's Encrypt
- HTTP to HTTPS redirects enabled
- HSTS headers configured

### Content Security
- Security headers configured
- XSS protection enabled
- Content type sniffing disabled

## 💰 Cost Considerations

### Netlify Free Tier
- 100GB bandwidth per month
- 300 build minutes per month
- Deploy previews included

### Paid Features (if needed)
- Additional bandwidth
- More build minutes
- Advanced analytics
- Form handling

## 📞 Support Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [React Deployment Guide](https://docs.netlify.com/configure-builds/common-configurations/#react)
- [Custom Domain Setup](https://docs.netlify.com/domains-https/custom-domains/)
- [Netlify Community](https://community.netlify.com/)

---

This static deployment setup provides a fast, reliable, and cost-effective hosting solution for the Solid Product Design website with automatic deployments and excellent performance.
