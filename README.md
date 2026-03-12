# Kopano Learning Intelligence

Production-ready Next.js website and strategy folder for a Johannesburg-based solo analytics consultancy focused on learning operations intelligence.

## Brand

Implemented brand: `Kopano Learning Intelligence`

Supporting line: `Operational Intelligence for Learning Organisations`

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Project Structure

- `app/`: App Router pages and global styling
- `components/`: Shared UI components
- `lib/site-content.ts`: Central content model used across pages
- `strategy/`: Business plan, white paper, service packages, outreach plan, content plan, offer thesis, and brand positioning
- `public/`: Static assets

## Notes

- The contact form is wired as a client-side demo interaction for local use. For production, connect it to a route handler, email provider, or form backend.
- The copy is intentionally niche and business-facing rather than startup-style, portfolio-style, or broad-agency positioning.
- The visual system uses warm neutrals with muted olive accents to keep the site premium and restrained.
