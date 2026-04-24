# Breaking Apps Hackathon - Portfolio QA Suite

AI-assisted regression tests for a small-business web portfolio.

This project uses Playwright and Passmark-style checks to test real client-style websites for the issues that matter most in a small agency workflow: broken hero sections, broken contact paths, missing service content, and visible layout regressions.

## What It Tests

| Site | Type | Coverage |
| --- | --- | --- |
| [DreamSiteBuilders.com](https://dreamsitebuilders.com) | agency homepage | hero, pricing, contact |
| [Lin Body Spa](https://linbodyspa.com) | service / booking site | homepage, services |
| [Ichiban](https://ichiban-zeta.vercel.app) | restaurant menu | branding, menu navigation |
| [Sugar Moon](https://sugar-moon-murex.vercel.app) | bakery storefront | product display |

## Why It Exists

Small web shops often ship several client sites at once, then rely on manual spot checks after each design or deployment change.

This repo turns that process into a repeatable QA layer:

- one command runs checks across multiple sites
- visual and content regressions are easier to catch
- client-facing sites can be tested without building a large custom QA system

## Tech Stack

- TypeScript
- Playwright
- Passmark-style AI test prompts

## Run Locally

```bash
cp .env.example .env
npm install
npx playwright test
```

If using Passmark/OpenRouter-backed checks, add the required API key to `.env`.

## Project Structure

```text
tests/              site-specific Playwright specs
passmark.config.ts  AI-assisted test configuration
playwright.config.ts
```

## Status

Hackathon / portfolio proof.

The project is intentionally small: it demonstrates a practical QA workflow for real small-business websites rather than a general-purpose testing platform.

## Built By

[Ryan Brubeck](https://vonbrubeck.com)
