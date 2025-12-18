# Deployment Checklist

## ✅ Completed
- [x] Security: Moved email credentials to environment variables
- [x] Installed @types/nodemailer for TypeScript support
- [x] Updated email API route to use environment variables

## ⚠️ Required Before Deployment

### 1. Environment Variables Setup
**CRITICAL**: You must set up environment variables before deployment.

Create a `.env.local` file (for local development) and configure environment variables in your hosting platform:

```env
CLINIC_EMAIL=your-clinic-sender@gmail.com
CLINIC_EMAIL_PASSWORD=your-gmail-app-password
USER_EMAIL=your-user-email@gmail.com
USER_EMAIL_PASSWORD=your-gmail-app-password
CLINIC_RECIPIENT_EMAIL=your-clinic-recipient@gmail.com
```

**Important Notes:**
- Use Gmail App Passwords (not regular passwords)
- Get App Passwords from: https://myaccount.google.com/apppasswords
- Never commit `.env.local` or `.env` files to git (already in .gitignore)

### 2. Platform-Specific Environment Variables

#### For Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add all the variables listed above
4. Redeploy your application

#### For Other Platforms:
- Follow your hosting platform's documentation for setting environment variables
- Ensure variables are available at build time and runtime

### 3. Build Verification
Before deploying, test the build locally:
```bash
npm run build
```

If build fails, fix issues before deploying.

### 4. Test Email Functionality
- Test the contact form after deployment
- Verify emails are sent correctly
- Check spam folders if emails don't arrive

### 5. Chatbot Integration
- Verify the "Book Appointment" button opens the chatbot
- Test the ElevenLabs ConvAI widget functionality
- Ensure the chatbot agent ID is correct: `agent_8201k95mrvfef4xtvfvpg2bmses8`

## 📋 Pre-Deployment Checklist

- [ ] Environment variables configured in hosting platform
- [ ] `.env.local` file created for local development (not committed)
- [ ] Build completes successfully (`npm run build`)
- [ ] All TypeScript errors resolved
- [ ] Contact form tested locally
- [ ] Chatbot button functionality tested
- [ ] All sensitive data removed from source code
- [ ] Git repository is clean (no credentials in history)

## 🚀 Deployment Steps

1. **Set Environment Variables** in your hosting platform
2. **Push to Git** (ensure no .env files are committed)
3. **Deploy** to your chosen platform
4. **Test** all functionality after deployment
5. **Monitor** for any errors in production

## 🔒 Security Reminders

- ✅ Email passwords are now in environment variables (not hardcoded)
- ✅ `.env*` files are in `.gitignore`
- ⚠️ Review git history to ensure old credentials are not exposed
- ⚠️ If credentials were previously committed, rotate them immediately

## 📝 Notes

- The project uses Next.js 16.0.0
- React 19.2.0
- TypeScript 5
- Tailwind CSS 4
- ElevenLabs ConvAI widget for chatbot

## 🐛 Known Issues

- TypeScript linting errors for `process.env` are IDE-related and won't affect the build
- Build may need PostCSS/Tailwind configuration adjustments depending on hosting platform

