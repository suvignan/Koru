# Vercel Deployment Guide for Koru Frontend

## Prerequisites
- Vercel account (https://vercel.com)
- GitHub/GitLab repository (recommended)

## Deployment Steps

### Option 1: Using Vercel Dashboard (Easiest)
1. Go to https://vercel.com
2. Click "New Project"
3. Select your repository
4. Framework: **Vite** (Vercel will auto-detect)
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click "Deploy"

### Option 2: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from the koru-frontend directory
cd koru-frontend
vercel
```

## Environment Variables
If your app uses environment variables:
1. Go to project settings in Vercel dashboard
2. Navigate to "Environment Variables"
3. Add variables like `VITE_API_URL` (prefix with `VITE_` for client-side access)
4. Redeploy

## Build & Preview Locally Before Deploying
```bash
npm run build
npm run preview
```

## Performance Optimizations (Already Applied)
✅ Terser minification with console cleanup
✅ No source maps in production
✅ Optimized output directory (dist)
✅ .vercelignore configured

## Troubleshooting
- **Build fails**: Check `npm run build` works locally first
- **404 errors on routes**: Add a `vercel.json` with spaCatchall configuration if using client-side routing
- **Missing dependencies**: Ensure all packages in `package.json` are committed to git

## Monitoring
- Check deployment logs in Vercel dashboard
- Enable "Analytics" in Vercel project settings
- Monitor functions in "Functions" tab if using API routes
