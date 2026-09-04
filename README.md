# SRL Recovery – Next.js Website

A fully responsive Next.js 14 website for SRL Recovery, Glasgow's 24/7 breakdown and recovery service.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules** (scoped styling, zero runtime overhead)
- **next/image** (automatic WebP/AVIF conversion, lazy loading)
- **next/font** (zero layout shift font loading)
- Optimised for **Vercel** deployment

## Getting Started Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel (Recommended)

### Option 1 – Vercel CLI (fastest)
```bash
npm i -g vercel
vercel
```

### Option 2 – GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js, click **Deploy**
5. Done! Your site is live.

### Option 3 – Drag & Drop
1. Run `npm run build`
2. Drag the project folder into [vercel.com/new](https://vercel.com/new)

## Project Structure

```
srl-recovery/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Main page assembly
│   └── globals.css       # Design system, CSS variables
├── components/
│   ├── Header.tsx/css    # Sticky nav with mobile menu
│   ├── Hero.tsx/css      # Full-screen hero section
│   ├── Ticker.tsx/css    # Scrolling announcement bar
│   ├── About.tsx/css     # About section with stats
│   ├── Services.tsx/css  # Service cards grid
│   ├── Work.tsx/css      # Photo gallery grid
│   ├── Testimonials.tsx  # Customer reviews
│   ├── Coverage.tsx/css  # Areas covered
│   └── Footer.tsx/css    # Footer with contact info
├── public/
│   ├── images/           # Logo + work photos
│   └── favicon.png
├── vercel.json           # Vercel config + cache headers
└── next.config.js        # Image optimisation config
```

## Updating Content

- **Phone number**: Search for `447776356556`, appears in Header, Hero, Services, Footer
- **Email**: `enquiries@srlrecovery.com` in Footer
- **Work photos**: Replace files in `public/images/`. Keep the same filenames
- **Testimonials**: Edit the array in `components/Testimonials.tsx`
- **Coverage areas**: Edit the array in `components/Coverage.tsx`

## Automation

- **Google photo sync**: `/api/cron/sync-google-photos` runs daily via Vercel Cron and imports any new photos Google's Place Details API surfaces for the business into the work gallery (deduped by image content hash, so it's safe to run repeatedly). Needs `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` (already used for the live review rating) plus `CRON_SECRET`. Note: Google's Places API returns at most ~10 photos and picks which ones to show. It isn't a full feed of everything uploaded to the Business Profile.
- **Storage cap**: the same cron checks total Vercel Blob usage and, once it hits 80% of the plan's included storage (5GB on Hobby, override with `BLOB_STORAGE_LIMIT_GB` if your plan differs), deletes the oldest images to bring it back down. Every gallery image that existed before this feature shipped is permanently `protected` and never auto-deleted, only images added afterwards (manual uploads or Google-synced) are eligible, oldest first.
- **Monthly review requests**: `/api/cron/monthly-reviews` runs on the 1st of each month and WhatsApps a review link to that month's customers.

## SEO

Metadata is configured in `app/layout.tsx` including title, description, and Open Graph tags targeting Glasgow breakdown recovery keywords.
