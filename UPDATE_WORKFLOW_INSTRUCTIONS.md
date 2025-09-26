# Manual GitHub Actions Workflow Update

Due to GitHub security permissions, the workflow file needs to be updated manually. Here's how:

## 🔧 Simple Steps

1. **Go to your repository**: https://github.com/bradflaugher/solidpd-main

2. **Navigate to the workflow file**: 
   - Click on `.github/workflows/deploy.yml`

3. **Edit the file**:
   - Click the pencil icon (✏️) to edit
   - Replace ALL content with the content from `GITHUB_ACTIONS_WORKFLOW.yml` (see below)

4. **Commit the changes**:
   - Scroll down to "Commit changes"
   - Add commit message: "Update GitHub Actions workflow for React builds"
   - Click "Commit changes"

## 📄 New Workflow Content

Copy this entire content to replace the current `.github/workflows/deploy.yml`:

```yaml
name: Deploy React Site to Netlify

on:
  push:
    branches:
      - main
      - dev
      - '**'  # Deploy from any branch for preview
  pull_request:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install pnpm
        run: npm install -g pnpm

      - name: Cache pnpm dependencies
        uses: actions/cache@v3
        with:
          path: ~/.pnpm-store
          key: ${{ runner.os }}-pnpm-${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            ${{ runner.os }}-pnpm-

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Lint code
        run: pnpm run lint
        continue-on-error: true

      - name: Build React application
        run: pnpm run build
        env:
          NODE_ENV: production

      - name: Verify build output
        run: |
          echo "Build completed successfully!"
          echo "Contents of dist directory:"
          ls -la dist/
          echo "Size of build:"
          du -sh dist/

      - name: Install Netlify CLI
        run: npm install -g netlify-cli

      - name: Deploy to Netlify
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        run: |
          if [ "${{ github.ref }}" = "refs/heads/main" ]; then
            echo "🚀 Deploying to PRODUCTION..."
            netlify deploy --dir=dist --prod --message "Production deployment from main branch - ${{ github.sha }}"
          else
            echo "🔧 Deploying PREVIEW for branch: ${{ github.ref_name }}"
            netlify deploy --dir=dist --message "Preview deployment from ${{ github.ref_name }} - ${{ github.sha }}"
          fi

      - name: Comment deployment URL on PR
        if: github.event_name == 'pull_request'
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: '🚀 Preview deployment is ready! Check the Netlify deploy logs for the preview URL.'
            })
```

## ✅ What This Update Provides

- **pnpm support** with dependency caching for faster builds
- **Build verification** and detailed output logging
- **Preview deployments** for all branches and pull requests
- **Automatic PR comments** with deployment status
- **Optimized for React + Vite** build process
- **Production deployment** only from main branch

That's it! Once you update this file, your GitHub Actions will be fully optimized for React development.
