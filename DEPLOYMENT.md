# Deployment Guide

## Prerequisites

- Node.js v20.x LTS (specified in `package.json` engines)
- All environment variables configured (see below)

## Environment Variables

The following environment variables **must** be set in your hosting platform:

```env
CLINIC_EMAIL=your-clinic-sender@gmail.com
CLINIC_EMAIL_PASSWORD=your-gmail-app-password
USER_EMAIL=your-support-email@gmail.com
USER_EMAIL_PASSWORD=your-gmail-app-password
CLINIC_RECIPIENT_EMAIL=your-clinic-recipient@gmail.com
```

**Important:**
- Use Gmail App Passwords (not regular passwords)
- Get App Passwords from: https://myaccount.google.com/apppasswords
- Never commit `.env.local` or `.env` files to git

## Platform-Specific Deployment

### Vercel (Recommended)

1. **Connect Repository:**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add all 5 email variables listed above
   - Select "Production", "Preview", and "Development" environments

3. **Build Settings:**
   - Framework Preset: Next.js
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)
   - Node.js Version: 20.x (auto-detected from package.json)

4. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically use Node.js v20 based on `engines` field

### Netlify

1. **Connect Repository:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository

2. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 20 (create `.nvmrc` file with `20`)

3. **Environment Variables:**
   - Go to Site Settings → Environment Variables
   - Add all email variables

### Other Platforms

Follow your platform's documentation for:
- Setting Node.js version to 20.x
- Configuring environment variables
- Setting build command to `npm run build`

## Post-Deployment Checklist

- [ ] Environment variables configured in hosting platform
- [ ] Build completes successfully
- [ ] Contact form tested and working
- [ ] Email notifications received correctly
- [ ] Chatbot button functionality tested
- [ ] All pages load correctly
- [ ] Mobile responsiveness verified

## Troubleshooting

### Build Fails Locally
- **Issue:** Build fails with "generate is not a function" error
- **Solution:** This is expected with Node.js v22. The project is configured for Node.js v20, which deployment platforms will use automatically.

### Emails Not Sending
- Verify all environment variables are set correctly
- Check that Gmail App Passwords are used (not regular passwords)
- Verify email addresses are correct
- Check spam folders

### Tailwind CSS Styles Not Working
- Ensure `@tailwindcss/postcss` is installed
- Verify `postcss.config.mjs` is configured correctly
- Clear `.next` cache and rebuild

## Tech Stack

- **Framework:** Next.js 16.0.10
- **React:** 19.2.0
- **TypeScript:** 5.9.3
- **Styling:** Tailwind CSS v4
- **Email:** Nodemailer
- **Node.js:** 20.x (required)

## Support

For issues or questions, check:
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS v4 Docs: https://tailwindcss.com/docs
- Vercel Documentation: https://vercel.com/docs
