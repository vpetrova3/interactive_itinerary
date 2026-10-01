# Japan by Sea

A mobile-first interactive travel companion for our October 2026 voyage aboard *Luminara*, sailing from Yokohama around Japan with a stop in Busan before finishing in Tokyo.

**Live site:** [japan-by-sea-2026.vichipetri.chatgpt.site](https://japan-by-sea-2026.vichipetri.chatgpt.site)

## What it includes

- The complete 11-day cruise timeline
- Interactive maps for all eight days ashore
- Researched, timed itineraries for Yokohama, Kobe and Osaka, Hiroshima and Miyajima, Fukuoka, Busan, Nagasaki, Kagoshima, and Tokyo
- Relative distances, transfer estimates, booking notes, and return-to-ship buffers
- Nearby alternatives for weather, energy, or opening-hour changes
- One-tap Google Maps links for every stop and journey leg
- Responsive layouts designed for use on a phone during the trip

Cruise berths marked as provisional should be checked against the final voyage documents before sailing.

## Stack

- React 19 and TypeScript
- Next.js for Vercel-compatible builds
- Vinext and Vite for Cloudflare-compatible deployment
- Tailwind CSS and shadcn component primitives
- Leaflet with OpenStreetMap data
- Local typed itinerary data

## Local development

Use Node.js 22+ and pnpm:

```bash
pnpm install
pnpm dev
```

Production builds:

```bash
pnpm build
pnpm run build:vercel
```
