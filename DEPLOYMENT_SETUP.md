# Deployment Setup Guide - Fixing Gmail Contact Form

## Problem
The contact form works on localhost but fails on the live server with the error:
> "Sorry, there was an error sending your message. Please try again."

## Root Cause
**Environment variables are not configured in production.** The `.env` file is excluded from git (as it should be for security), but you must manually configure these variables in your hosting platform.

## Solution: Configure Environment Variables in Netlify

### Step 1: Access Netlify Environment Variables

1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your deployed site
3. Navigate to **Site Configuration** → **Environment Variables** (or **Site settings** → **Build & deploy** → **Environment**)

### Step 2: Add the Required Environment Variables

Add the following two environment variables:

| Variable Name | Value |
|--------------|-------|
| `GMAIL_USER` | `info.legacyforge@gmail.com` |
| `GMAIL_APP_PASSWORD` | `drvchwtfwthchple` |

**Important Notes:**
- Make sure the variable names match exactly (case-sensitive)
- The values should not include quotes
- These are the same values from your local `.env` file

### Step 3: Deploy Settings

Ensure these settings are configured for the appropriate context:
- **Production** - Select this to apply to your main branch
- **Deploy previews** (optional) - If you want it to work in preview deployments
- **Branch deploys** (optional) - If you have specific branch deployments

### Step 4: Redeploy Your Site

After adding the environment variables:

1. **Trigger a new deployment**:
   - Option A: Go to **Deploys** tab → Click **Trigger deploy** → Select **Deploy site**
   - Option B: Push a new commit to your GitHub repository

2. **Wait for deployment to complete** (usually 1-2 minutes)

3. **Test the contact form** on your live site

### Step 5: Verify It's Working

1. Visit your live website's contact page
2. Fill out and submit the contact form
3. You should receive:
   - Success message: "Thank you! Your message has been sent successfully."
   - An email at `info.legacyforge@gmail.com` with the form submission

### Troubleshooting

If it still doesn't work after configuring environment variables:

#### Check Netlify Function Logs:
1. Go to **Functions** tab in Netlify dashboard
2. Click on your `api` function
3. View the logs to see error details
4. Look for the environment check logs that will show if variables are configured

#### Common Issues:

1. **Typo in variable names**: Must be exactly `GMAIL_USER` and `GMAIL_APP_PASSWORD`

2. **Gmail App Password expired/invalid**: 
   - Generate a new app password at: https://myaccount.google.com/apppasswords
   - Update the `GMAIL_APP_PASSWORD` in Netlify

3. **Gmail security settings**:
   - Ensure 2-factor authentication is enabled on the Gmail account
   - Ensure "Less secure app access" is NOT turned on (use app passwords instead)
   - Check if Gmail has blocked sign-in attempts

4. **Didn't redeploy**: Environment variable changes require a new deployment to take effect

#### Check Browser Console:
Open browser DevTools (F12) → Console tab to see any error messages when submitting the form

#### Test Locally First:
Ensure it works locally before deploying:
```bash
npm run dev
```
Then test the form on `http://localhost:5000`

## Alternative Hosting Platforms

If you're using a different platform, here's how to set environment variables:

### Vercel:
1. Project Settings → Environment Variables
2. Add `GMAIL_USER` and `GMAIL_APP_PASSWORD`
3. Redeploy

### Heroku:
1. Settings → Config Vars
2. Add the variables
3. App will automatically restart

### Railway:
1. Project → Variables tab
2. Add the variables
3. Redeploy

## Security Best Practices

✅ **DO:**
- Keep `.env` in `.gitignore` (already configured)
- Use environment variables for sensitive data
- Use Gmail App Passwords (not your actual Gmail password)
- Rotate app passwords periodically

❌ **DON'T:**
- Commit `.env` file to git
- Share your app password publicly
- Use your actual Gmail password in the code

## Gmail App Password Setup (If Needed)

If you need to generate a new Gmail app password:

1. Go to your Google Account: https://myaccount.google.com
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Go to **App passwords** 
5. Select **Mail** and **Other (Custom name)**
6. Name it "Netlify Contact Form" or similar
7. Click **Generate**
8. Copy the 16-character password (no spaces)
9. Use this in your `GMAIL_APP_PASSWORD` environment variable

## Testing After Setup

After completing the setup and redeployment:

1. Visit your live website
2. Go to the Contact page
3. Submit a test message with:
   - Your name
   - A test email address
   - A simple test message
4. You should see the success message
5. Check `info.legacyforge@gmail.com` for the email

If you see the success message and receive the email, everything is working correctly! 🎉

## Need Help?

If you're still experiencing issues after following this guide:
1. Check Netlify function logs for specific error messages
2. Verify environment variables are saved in Netlify
3. Ensure you've redeployed after adding the variables
4. Try generating a new Gmail app password
