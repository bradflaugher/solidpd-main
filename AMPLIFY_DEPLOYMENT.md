# AWS Amplify Deployment Guide

This document provides step-by-step instructions for deploying the Solid Product Design website to AWS Amplify.

## Prerequisites

- AWS Account with Amplify access
- GitHub repository access (bradflaugher/solidpd.com)
- Basic understanding of AWS Amplify console

## Deployment Steps

### 1. Connect Repository to Amplify

1. **Login to AWS Console**
   - Navigate to AWS Amplify service
   - Click "Get Started" under "Amplify Hosting"

2. **Connect Repository**
   - Select "GitHub" as the repository service
   - Authorize AWS Amplify to access your GitHub account
   - Select repository: `bradflaugher/solidpd.com`
   - Select branch: `dev` (for development) or `main` (for production)

### 2. Configure Build Settings

Amplify should auto-detect the React application. Use these build settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install -g pnpm
        - pnpm install
    build:
      commands:
        - pnpm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### 3. Environment Variables (Optional)

If you need to set environment variables:
- Go to App Settings > Environment variables
- Add any required environment variables for your application

### 4. Advanced Settings

**Build Image**: Use the default Amazon Linux 2 image

**Custom Headers** (Optional):
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

**Redirects and Rewrites** (For SPA routing):
```
/*    /index.html   200
```

### 5. Deploy

1. Click "Save and Deploy"
2. Amplify will automatically build and deploy your application
3. The build process typically takes 2-5 minutes

## Branch Deployment Strategy

### Development Branch (`dev`)
- **URL**: `https://dev.{app-id}.amplifyapp.com`
- **Purpose**: Testing and development
- **Auto-deploy**: Enabled on push to `dev` branch

### Production Branch (`main`)
- **URL**: Custom domain (solidpd.com) or `https://main.{app-id}.amplifyapp.com`
- **Purpose**: Live production site
- **Auto-deploy**: Enabled on push to `main` branch

## Custom Domain Setup

1. **Add Domain**
   - Go to App Settings > Domain management
   - Click "Add domain"
   - Enter `solidpd.com`

2. **DNS Configuration**
   - Add the provided CNAME record to your DNS provider
   - For root domain, use ALIAS or ANAME record pointing to the Amplify domain

3. **SSL Certificate**
   - Amplify automatically provisions SSL certificates
   - Certificate validation may take a few minutes

## Build Specifications

The application uses:
- **Node.js**: 18.x
- **Package Manager**: pnpm
- **Build Tool**: Vite
- **Output Directory**: `dist/`

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version compatibility
   - Verify all dependencies are listed in package.json
   - Review build logs in Amplify console

2. **Routing Issues**
   - Ensure redirects rule is configured: `/*    /index.html   200`
   - Check that React Router is properly configured

3. **Assets Not Loading**
   - Verify build artifacts are in the `dist` folder
   - Check that public assets are in the `public` directory

### Build Logs

Access build logs in the Amplify console:
1. Go to your app in Amplify console
2. Click on the build you want to inspect
3. View detailed logs for each build phase

## Performance Optimization

### Recommended Settings

1. **Compression**: Enabled by default
2. **CDN**: CloudFront distribution included
3. **Caching**: Configure appropriate cache headers

### Monitoring

- Use AWS CloudWatch for monitoring
- Set up alerts for build failures
- Monitor website performance metrics

## Security

### Best Practices

1. **HTTPS**: Enforced by default
2. **Security Headers**: Configure custom headers as shown above
3. **Access Control**: Use Amplify's access control features if needed

## Cost Optimization

- **Free Tier**: 1000 build minutes and 15GB served per month
- **Pricing**: Pay-as-you-go beyond free tier
- **Optimization**: Optimize build times and asset sizes

## Support

For issues with deployment:
1. Check AWS Amplify documentation
2. Review build logs in the console
3. Contact AWS support if needed

## Additional Resources

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [React Deployment Guide](https://docs.amplify.aws/guides/hosting/react/)
- [Custom Domain Setup](https://docs.amplify.aws/console/custom-domains/)

---

**Note**: This deployment guide assumes you have the necessary AWS permissions and GitHub repository access. The GitHub Actions workflow has been preserved but may need to be updated if you prefer to use Amplify's built-in CI/CD instead of external services like Netlify.
