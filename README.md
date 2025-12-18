# Clinify - Patient Management System

A modern patient management web application built with Next.js, React, and Tailwind CSS v4.

## Features

- 🏥 **Patient Portal** - Easy-to-use interface for patients
- 📧 **Contact Form** - Email notifications for clinic and users
- 💬 **AI Chatbot** - Integrated ElevenLabs ConvAI for appointment booking
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Modern UI** - Built with Tailwind CSS v4 and shadcn/ui components

## Tech Stack

- **Framework:** Next.js 16.0.10
- **React:** 19.2.0
- **TypeScript:** 5.9.3
- **Styling:** Tailwind CSS v4
- **Email:** Nodemailer
- **Animations:** Framer Motion
- **Node.js:** 20.x (required)

## Getting Started

### Prerequisites

- Node.js v20.x LTS
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Newton1356/Graduation.git
cd graduation-project-patient-main
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (see Environment Variables section below)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── api/
│   │   └── send-email/     # Email API route
│   ├── _components/         # React components
│   ├── clinify/            # Main clinic page
│   └── globals.css         # Global styles with Tailwind v4
├── components/
│   └── ui/                 # shadcn/ui components
├── lib/                    # Utility functions
└── public/                 # Static assets
```

## Environment Variables

**Required for email functionality:**

Create a `.env.local` file in the root directory:

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
- Never commit `.env.local` to git (already in .gitignore)

## Environment Variables

Before running or deploying, create a `.env.local` file with the following variables:

```env
CLINIC_EMAIL=your-clinic-sender@gmail.com
CLINIC_EMAIL_PASSWORD=your-gmail-app-password
USER_EMAIL=your-user-email@gmail.com
USER_EMAIL_PASSWORD=your-gmail-app-password
CLINIC_RECIPIENT_EMAIL=your-clinic-recipient@gmail.com
```

**Important:** Use Gmail App Passwords (not regular passwords). Get them from: https://myaccount.google.com/apppasswords

## Deployment

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Newton1356/Graduation)

1. **Connect Repository:**
   - Click the button above or go to [Vercel](https://vercel.com)
   - Import your GitHub repository

2. **Configure Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add all 5 email variables (see Environment Variables section)
   - Select all environments (Production, Preview, Development)

3. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically detect Next.js and use Node.js v20

### Other Platforms

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for:
- Netlify
- Other hosting platforms

## Build Notes

**Local Build:** If you're using Node.js v22 locally, the build may fail. This is expected. The project is configured for Node.js v20, which deployment platforms will use automatically.

**Production Build:** Deployment platforms (Vercel, Netlify, etc.) will automatically use Node.js v20 based on the `engines` field in `package.json`.

## Documentation

- [Deployment Guide](./DEPLOYMENT.md) - Complete deployment instructions
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)

## License

This project is part of a graduation project. 

