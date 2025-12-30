# Conservation Easement Baseline (Offline Prototype)

This repository contains a single-page, offline-capable prototype built directly from `APPLICATION_DESCRIPTION.md`. It delivers a mobile-friendly experience for field staff to capture conservation easement baseline data, draw boundaries, attach photos, and export results without any external dependencies.

## Getting started

Because all assets are static, you can run the app with any simple web server:

```bash
python -m http.server 4173
```

Then open http://localhost:4173/ in your browser.

## Testing on Vercel
Vercel can serve this static bundle without a build step.

1. Install the Vercel CLI if you don’t have it:
   ```bash
   npm install -g vercel
   ```
2. From the repo root, run:
   ```bash
   vercel dev
   ```
   This starts a local Vercel dev server (usually on http://localhost:3000).
3. To test a deployed preview, run:
   ```bash
   vercel --prebuilt
   ```
   or create a production deployment with:
   ```bash
   vercel --prod --prebuilt
   ```
   The `vercel.json` is configured for static hosting, so no additional build command is required.

## Key capabilities
- Multi-step workflow covering property info, background values, descriptions, mapping, ecology, photos, and review/export
- Canvas-based drawing tools (polygon, polyline, rectangle, marker) with GeoJSON and PNG export
- Local, debounced auto-save to `localStorage` with last-modified tracking
- Photo capture/import support with captions, categories, timestamps, and optional coordinates
- JSON export for the full report plus print-to-PDF via the browser
- Service worker for offline availability and a lightweight PWA manifest

## Notes
- Measurements on the canvas use a 1px = 1ft placeholder scale to enable quick area/distance estimates while offline.
- All data remains on-device; use the JSON export for backups or sharing.
