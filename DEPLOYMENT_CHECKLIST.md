# Deployment Checklist

## ✅ Pre-Deployment Requirements

### 1. Code Quality
- [x] All TypeScript errors resolved
- [x] Email configuration uses environment variables (no hardcoded credentials)
- [x] `.env*` files are in `.gitignore`
- [x] Code is pushed to GitHub repository
- [x] Tailwind CSS v4 configured correctly
- [x] Next.js updated to 16.0.10 (security fixes)

### 2. Environment Variables Setup

**CRITICAL:** Set these in your hosting platform before deployment:

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
- Set variables for Production, Preview, and Development environments

### 3. Platform Configuration

#### For Vercel:
- [ ] Repository connected to Vercel
- [ ] Environment variables added in Project Settings
- [ ] Node.js version set to 20.x (auto-detected from package.json)
- [ ] Build command: `npm run build` (auto-detected)
- [ ] Framework preset: Next.js (auto-detected)

#### For Netlify:
- [ ] Repository connected to Netlify
- [ ] Build command: `npm run build`
- [ ] Publish directory: `.next`
- [ ] Node version: 20 (create `.nvmrc` file)
- [ ] Environment variables added

### 4. Build Verification

**Note:** Local build may fail with Node.js v22. This is expected. Deployment platforms will use Node.js v20 automatically.

- [ ] Build succeeds on deployment platform
- [ ] No build errors in deployment logs
- [ ] All dependencies installed correctly

## 🚀 Deployment Steps

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Deploy to Platform:**
   - Vercel: Connect repository and deploy
   - Netlify: Connect repository and deploy
   - Other: Follow platform-specific instructions

3. **Configure Environment Variables:**
   - Add all 5 email variables
   - Redeploy after adding variables

4. **Verify Deployment:**
   - Check deployment URL
   - Test all pages load correctly
   - Verify no console errors

## ✅ Post-Deployment Testing

### Functional Tests
- [ ] Homepage loads correctly
- [ ] Contact form submits successfully
- [ ] Email notifications received (check both clinic and user emails)
- [ ] Chatbot button opens ElevenLabs widget
- [ ] All navigation links work
- [ ] Mobile responsiveness verified
- [ ] Images load correctly

### Email Functionality
- [ ] Contact form sends email to clinic
- [ ] User receives confirmation email
- [ ] Email formatting is correct (HTML and text)
- [ ] Reply-to address works correctly

### Performance
- [ ] Page load times are acceptable
- [ ] Images are optimized
- [ ] No console errors
- [ ] Lighthouse score is good

## 🔒 Security Checklist

- [x] No hardcoded credentials in code
- [x] Environment variables properly configured
- [x] `.env*` files in `.gitignore`
- [ ] Gmail App Passwords used (not regular passwords)
- [ ] HTTPS enabled on deployment platform
- [ ] API routes have proper error handling

## 📝 Documentation

- [x] README.md updated with project information
- [x] DEPLOYMENT.md created with detailed instructions
- [x] .env.example file created
- [x] Environment variables documented

## 🐛 Known Issues & Notes

- **Local Build:** May fail with Node.js v22 - this is expected. Deployment platforms use Node.js v20 automatically.
- **Tailwind CSS v4:** Requires `@tailwindcss/postcss` plugin (already configured)
- **Email:** Requires Gmail App Passwords for authentication

## 📞 Support

If you encounter issues:
1. Check deployment logs for errors
2. Verify environment variables are set correctly
3. Ensure Node.js version is 20.x on deployment platform
4. Review [DEPLOYMENT.md](./DEPLOYMENT.md) for troubleshooting

## ✨ Ready for Deployment!

Once all items above are checked, your project is ready for production deployment!
