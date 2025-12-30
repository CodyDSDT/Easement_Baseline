# Conservation Easement Baseline (Offline Prototype)

This repository contains a single-page, offline-capable prototype built directly from `APPLICATION_DESCRIPTION.md`. It delivers a mobile-friendly experience for field staff to capture conservation easement baseline data, draw boundaries, attach photos, and export results without any external dependencies.

## Getting started

Because all assets are static, you can run the app with any simple web server:

```bash
python -m http.server 4173
```

Then open http://localhost:4173/ in your browser.

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
