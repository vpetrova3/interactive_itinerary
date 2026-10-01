# Japan by Sea

A mobile-first interactive companion for Luminara voyage 13261009, sailing from Yokohama to Tokyo from 9–19 October 2026.

## Product direction

The site is designed as a working travel surface rather than a travel blog. A traveler should be able to open it on a phone, choose today’s stop, understand the available time ashore, and jump into navigation in seconds.

### First release

- Interactive route overview and complete 11-day timeline
- Published arrival and departure times
- Port and sea-day states
- Google Maps handoff for every destination
- Clear “not confirmed” messaging for terminal details that have not been published

### Next releases

1. Confirm exact cruise terminals and replace destination searches with verified map pins.
2. Add two or three curated day-plan options per port: highlights, food-focused, and slow day.
3. Add saved places, booking details, tickets, and offline-friendly trip notes.
4. Add a live MapLibre map only when verified coordinates and useful place data are ready. Google Maps remains the handoff for turn-by-turn directions.

## Stack

- React 19 + TypeScript
- Vinext/Vite for the app and Cloudflare-compatible deployment
- Tailwind CSS plus the bundled shadcn component primitives
- Local typed itinerary data for this first release
- Google Maps universal links for navigation; MapLibre is the preferred future map layer because it avoids locking the trip data to a single navigation provider

## Local development

Use the workspace's Node 22+ and pnpm runtimes, then run:

```bash
pnpm dev
```

The cruise line may change port times or terminals. Treat the published itinerary as a starting point and verify final details in the cruise documents before sailing.
