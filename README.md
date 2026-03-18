# TechPulse

A modern tech news platform built with Next.js 16, Supabase, and Tailwind CSS. This project was built as a portfolio piece to demonstrate all of Next.js's rendering strategies in a single real-world application.

---

## Rendering Strategies

This project intentionally uses every rendering strategy available in Next.js App Router, each chosen for the right reason:

| Page                   | Strategy | Why                                                                                                                       |
| ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| `/`                    | **SSG**  | Pure marketing page, never changes, built once at deploy                                                                  |
| `/about`               | **SSG**  | Static content, no data fetching needed                                                                                   |
| `/faq`                 | **SSG**  | Static content, no data fetching needed                                                                                   |
| `/feed`                | **PPR**  | Static shell (navbar, sidebar) loads instantly, dynamic slots (personalised banner, trending feed) stream in via Suspense |
| `/articles/[slug]`     | **ISR**  | Article content changes occasionally — cached and regenerated every 60 seconds in the background                          |
| `/dashboard`           | **SSR**  | Fully personalised per user, reads session cookies on every request                                                       |
| Interactive components | **CSR**  | Like buttons, comment forms, bookmarks, search — all client-side with `"use client"`                                      |

---

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Database & Auth** — Supabase (PostgreSQL)
- **Styling** — Tailwind CSS
- **UI Components** — shadcn/ui
- **Language** — TypeScript

---

## Features

- Browse tech articles across 8+ categories
- Category filtering via URL search params (`/feed?category=AI`)
- Full-text search via URL (`/feed?search=react`)
- Sign up / sign in with email, GitHub, or Google OAuth
- Like articles (persisted per user, visible on refresh)
- Bookmark articles (saved to DB, manageable from dashboard)
- Comment on articles (requires auth)
- Personalised dashboard with reading history, bookmarks, and stats
- Reading progress tracking
- Fully responsive — mobile category strip + desktop sidebar
- Dark mode throughout

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Landing page (SSG)
│   ├── feed/
│   │   ├── page.tsx                # Feed page (PPR)
│   │   └── article/[slug]/
│   │       └── page.tsx            # Article detail (ISR)
│   ├── dashboard/
│   │   └── page.tsx                # Dashboard (SSR)
│   ├── about/page.tsx              # About (SSG)
│   ├── faq/page.tsx                # FAQ (SSG)
│   ├── (auth)/
│   │   └── login/page.tsx          # Login / signup
│   └── auth/callback/route.ts      # OAuth callback handler
├── components/
│   ├── NavBar.tsx                  # "use client" — search, mobile menu, auth dropdown
│   ├── NavWrapper.tsx              # Suspense wrapper for Navbar
│   ├── ArticleCard.tsx             # Article card with link to detail page
│   ├── ArticleGrid.tsx             # Async Server Component — fetches articles
│   ├── ArticleActions.tsx          # "use client" — share + bookmark buttons
│   ├── LikeButton.tsx              # "use client" — like toggle with optimistic UI
│   ├── CommentSection.tsx          # "use client" — comment list + form
│   ├── CategorySidebar.tsx         # "use client" — desktop category filter
│   ├── CategoryStrip.tsx           # "use client" — mobile category filter
│   ├── PersonalisedBanner.tsx      # Async Server Component — PPR slot
│   ├── TrendingFeed.tsx            # Async Server Component — PPR slot
│   ├── Bookmarks.tsx               # "use client" — bookmark list with delete
│   ├── ReadingTracker.tsx          # "use client" — tracks article reads
│   └── Skeletons.tsx               # Skeleton loaders for Suspense fallbacks
├── lib/
│   ├── queries.ts                  # Data fetching (no "use server") — Server Components only
│   ├── actions.ts                  # "use server" — mutations called from client components
│   ├── auth.ts                     # "use server" — sign in, sign up, sign out, getUser
│   ├── supabase/
│   │   ├── client.ts               # Browser Supabase client
│   │   └── server.ts               # Server Supabase client (handles cookies)
│   └── utils.ts                    # Helpers (formatDate etc)
└── types/
    └── index.ts                    # Shared TypeScript types
```

---

## Database Schema

```sql
articles        -- id, slug, title, excerpt, body, category, image, author_name,
                   author_initials, date, read_time, like_count, comment_count

comments        -- id, article_id, user_id, user_email, full_name, text, created_at

likes           -- id, article_id, user_id (unique per user+article)

bookmarks       -- id, article_id, user_id, created_at (unique per user+article)

reading_history -- id, article_id, user_id, progress, updated_at (unique per user+article)
```

---

## Key Architecture Decisions

**Why `queries.ts` and `actions.ts` are separate**

`queries.ts` has no `"use server"` directive — these functions are called directly inside Server Components during render. They use the server Supabase client which reads cookies, so they can never be imported into client components.

`actions.ts` has `"use server"` at the top — these are mutations triggered by user events (button clicks, form submits). The `"use server"` directive creates a server action reference that client components can safely import and call via POST request.

**Why PPR on `/feed`**

The feed navbar and sidebar are static and should paint instantly. The personalised banner and trending feed require slow DB queries. Wrapping them in `<Suspense>` lets the static shell reach the browser immediately while the dynamic slots stream in when ready.

**Why ISR on `/articles/[slug]`**

Article content rarely changes but does get updated occasionally. ISR gives the best of both worlds — cached static HTML for speed, background regeneration every 60 seconds for freshness. `generateStaticParams` pre-builds all article pages at deploy time so no user ever hits a cold cache.

---

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
