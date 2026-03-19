# TechPulse

A modern tech news platform built with Next.js 16, Supabase, and Tailwind CSS. This project was built as a portfolio piece to demonstrate all of Next.js's rendering strategies in a single real-world application.

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SITE_URL

# Run development server
npm run dev

# Build for production
npm run build
```

---

## Environment Variables

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Deployment

This project is designed to deploy on **Vercel**. Push to GitHub, import the repo on Vercel, add your environment variables, and deploy.

After deploying update:

- `NEXT_PUBLIC_SITE_URL` to your production URL
- Supabase → Authentication → URL Configuration → Site URL
- GitHub OAuth App → Homepage URL and callback URL
- Google Cloud Console → Authorized redirect URIs
