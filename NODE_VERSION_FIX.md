# Node.js Version Fix Guide

## Problem
The project is using Node.js v22.17.1, which has compatibility issues with Tailwind CSS v3. This prevents the build from completing successfully.

## Solution: Switch to Node.js v20 LTS

### Option A: Install Node.js v20 directly (Recommended)

1. **Download Node.js v20 LTS:**
   - Go to: https://nodejs.org/
   - Download the LTS version (v20.x.x)
   - Run the installer and follow the setup wizard

2. **Verify Installation:**
   ```bash
   node --version
   # Should show v20.x.x
   ```

3. **Reinstall Dependencies:**
   ```bash
   cd c:\Users\New_Amr\Desktop\graduation-project-patient-main
   Remove-Item -Recurse -Force node_modules,package-lock.json
   npm install
   ```

4. **Test the Build:**
   ```bash
   npm run build
   ```

### Option B: Use NVM for Windows (Allows Multiple Node Versions)

1. **Install NVM for Windows:**
   - Download from: https://github.com/coreybutler/nvm-windows/releases
   - Download `nvm-setup.exe` and run it
   - Restart your terminal/PowerShell after installation

2. **Install Node.js v20:**
   ```bash
   nvm install 20
   nvm use 20
   ```

3. **Verify:**
   ```bash
   node --version
   # Should show v20.x.x
   ```

4. **Reinstall Dependencies:**
   ```bash
   cd c:\Users\New_Amr\Desktop\graduation-project-patient-main
   Remove-Item -Recurse -Force node_modules,package-lock.json
   npm install
   npm run build
   ```

## After Switching to Node.js v20

Once Node.js v20 is installed and dependencies are reinstalled:

1. **Verify Tailwind CSS is installed:**
   ```bash
   npm list tailwindcss autoprefixer
   ```

2. **Test the build:**
   ```bash
   npm run build
   ```

3. **If build succeeds, you're ready to deploy!**

## For Deployment Platforms

Most deployment platforms (Vercel, Netlify, etc.) allow you to specify the Node.js version:

- **Vercel:** Add `"engines": { "node": "20.x" }` to `package.json`
- **Netlify:** Create `.nvmrc` file with `20`
- **Other platforms:** Check their documentation for Node.js version settings

## Current Status

- ❌ Build failing due to Node.js v22 compatibility issues
- ✅ Code is ready (email config, TypeScript fixes, etc.)
- ⏳ Waiting for Node.js v20 installation
