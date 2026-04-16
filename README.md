# Breaking Apps Hackathon — DSB Portfolio Test Suite

**One developer. 10 client sites. Zero manual QA.**

AI-powered regression tests for [DreamSiteBuilders.com](https://dreamsitebuilders.com) client portfolio, built with [Passmark](https://passmark.dev) + Playwright.

## What This Tests

| Site | Type | Tests |
|------|------|-------|
| [DreamSiteBuilders.com](https://dreamsitebuilders.com) | Agency homepage | Hero, pricing, contact |
| [Lin Body Spa](https://linbodyspa.com) | Booking system | Homepage, services |
| [Ichiban](https://ichiban-zeta.vercel.app) | Restaurant menu | Branding, menu nav |
| [Sugar Moon](https://sugar-moon-murex.vercel.app) | Bakery storefront | Product display |

## Run

```bash
cp .env.example .env  # add your OPENROUTER_API_KEY
npm install
npx playwright test
```

## Built By

[Ryan @ DreamSiteBuilders](https://dreamsitebuilders.com) — AI-powered web development for small businesses.

## Hackathon

Entry for [Hashnode Breaking Apps Hackathon](https://hashnode.com/hackathons/breaking-things) (Apr 13 – May 10, 2025).
