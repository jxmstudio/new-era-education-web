# Deploy to Vercel

Quick guide to deploy your New Era Education website to Vercel for client preview.

## Option 1: GitHub + Vercel (Recommended)

### Step 1: Push to GitHub
1. Create a new repository on GitHub (make it private if needed)
2. Push your code:
```bash
git add .
git commit -m "Ready for deployment"
git remote add origin https://github.com/yourusername/new-era-education.git
git push -u origin main
```

### Step 2: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Next.js project
5. Click "Deploy"

**Your site will be live in ~2 minutes!**

## Option 2: Direct Upload via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Deploy
```bash
# Login to Vercel
vercel login

# Deploy the project
vercel

# Follow the prompts:
# - Set up and deploy? [Y/n] Y
# - Which scope? [your-username]
# - Link to existing project? [y/N] N
# - Project name: new-era-education
# - Directory: ./
# - Want to override settings? [y/N] N
```

## After Deployment

### 1. Get Your Live URL
Vercel will provide a URL like: `https://new-era-education-xyz123.vercel.app`

### 2. Test Everything
- ✅ All pages load correctly
- ✅ Contact forms work (they'll show success but won't send emails yet)
- ✅ Mobile responsiveness
- ✅ All links and navigation

### 3. Share with Client
Send them the Vercel URL to review the website.

## Custom Domain (Optional)

If you want to add a custom domain later:
1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `preview.neweraeducation.com.au`)
4. Follow DNS setup instructions

## Environment Variables (If Needed Later)

For Google Apps Script or other integrations:
1. Go to project dashboard → "Settings" → "Environment Variables"
2. Add variables like:
   - `GOOGLE_APPS_SCRIPT_URL`
   - `NEXT_PUBLIC_SITE_URL`

## Notes

- **Free hosting** - Vercel provides generous free tier
- **Auto-updates** - Connected to GitHub, deploys on every push
- **Fast CDN** - Global edge network for fast loading
- **Perfect for Next.js** - Made by the Next.js team

Your website is now live and ready for client review! 🚀