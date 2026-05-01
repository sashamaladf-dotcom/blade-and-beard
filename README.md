# Blade & Beard — Barbershop Landing

Light-minimalist landing page for a demo barbershop. Built with **Next.js 16 + React 19 + Tailwind v4 + TypeScript**. Booking requests are sent to a Telegram bot via a React Server Action.

## Stack

- Next.js 16 (App Router)
- React 19 (`useActionState`)
- Tailwind CSS v4
- TypeScript
- `zod` for form validation
- `lucide-react` for icons
- Images hot-linked from Unsplash (`next/image` remote patterns)

## Setup

```bash
npm install
cp .env.local.example .env.local
# fill in TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID
npm run dev
```

Open <http://localhost:3000>.

## Telegram bot — how to wire it up

1. Open Telegram, start a chat with [@BotFather](https://t.me/BotFather), send `/newbot`, follow the prompts. Copy the token it gives you.
2. Start a chat with your new bot (click the link BotFather returned and send `/start` — this is required, otherwise the bot can't message you).
3. Open `https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates` in a browser. Find `"chat":{"id": <number>}` in the JSON — that number is your `TELEGRAM_CHAT_ID`.
4. Paste both values into `.env.local`.
5. Restart `npm run dev`. Submit the booking form — the message should arrive in Telegram instantly.

## Project structure

```
src/
├── app/
│   ├── actions.ts        # submitBooking server action + zod validation
│   ├── globals.css       # palette, typography
│   ├── layout.tsx        # fonts, metadata
│   └── page.tsx          # composes all sections
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Gallery.tsx
│   ├── Reviews.tsx
│   ├── BookingForm.tsx   # "use client" — useActionState
│   ├── Contacts.tsx      # form + info side-by-side
│   ├── Footer.tsx
│   └── SectionHeading.tsx
└── lib/
    ├── services.ts       # services + hero/about/gallery image URLs
    ├── reviews.ts
    └── telegram.ts       # sendTelegramMessage()
```

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build (also type-checks)
- `npm run start` — run production build
- `npm run lint` — ESLint

## Deploy

Not set up yet. When ready: push to GitHub and import into Vercel, add the two env vars in Vercel project settings.
