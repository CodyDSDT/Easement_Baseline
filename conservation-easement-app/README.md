# Conservation Easement Baseline Report PWA

A Progressive Web App (PWA) for conducting field inspections and creating baseline documentation reports for conservation easements. Built for the Inland Northwest Land Conservancy.

## Features

- **Multi-step Form** - Organized sections for Property Info, Background, Property Description, Ecological Features
- **Camera Integration** - Capture photos directly from mobile devices with geolocation tagging
- **Photo Management** - Organize photos by category, add captions, and create photo plates
- **PDF Generation** - Export professional baseline reports as PDF documents
- **Offline Support** - Works without internet connection; data saved locally
- **Auto-save** - All data automatically saved as you type
- **Mobile-First Design** - Optimized for iPad and mobile field work
- **Cross-Platform** - Works on iOS, Android, and desktop browsers

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Testing on Mobile Devices

### Option 1: Local Network Access
1. Start the dev server: `npm run dev -- --host`
2. Find your computer's local IP address:
   - Mac: System Settings > Network
   - Windows: `ipconfig` in command prompt
3. On your mobile device, visit `http://YOUR_IP:5173/` (e.g., `http://192.168.1.100:5173/`)

### Option 2: Deploy and Test
Deploy to any of these free hosting services:

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --dir=dist
```

**GitHub Pages:**
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Deploy the `dist/` folder

### Installing as PWA

Once deployed or accessed on mobile:

**iOS (Safari):**
1. Open the app in Safari
2. Tap the Share button
3. Tap "Add to Home Screen"
4. Tap "Add"

**Android (Chrome):**
1. Open the app in Chrome
2. Tap the menu (three dots)
3. Tap "Add to Home screen"
4. Tap "Add"

The app will now appear on your home screen like a native app!

## Using the App

### 1. Property Information
Fill in basic details about the conservation easement property:
- Property number and name
- Location (county, state)
- Acreage information
- Closing date
- Prepared by / Reviewed by

### 2. Background Information
Document conservation values and easement details:
- Conservation values and acquisition reasons
- Key conservation values (habitat, connectivity, viewshed, etc.)
- Prohibited and permitted uses
- Pre-existing easements

### 3. Property Description
Detailed property characteristics:
- General description
- Legal description
- Driving directions
- Elevation and topography
- Property history
- Current land use
- Public benefit

### 4. Ecological Features
Document physical and biological features:
- Soils information
- Water resources
- Geologic features
- Climate resilience
- Vegetation zones
- Fish, wildlife, and species of concern
- Observed wildlife

### 5. Photos
Capture and organize field photos:
- Take photos with device camera (with GPS tagging)
- Upload existing photos
- Categorize photos (Development Envelope, Vegetation, Water Resources, etc.)
- Add captions
- Photos automatically organized for photo plate

### 6. Review & Export
Review collected data and generate reports:
- View summary of all collected data
- Generate PDF baseline report
- Export data as JSON backup
- Clear data to start new report

## Offline Capabilities

The app is fully functional offline:
- All form data saved locally using IndexedDB
- Photos stored in device storage
- Service worker caches app for offline use
- Data syncs when connection restored (if backend added)

## Technology Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **PWA Plugin** - Service worker and offline support
- **LocalForage** - Offline data storage (IndexedDB wrapper)
- **jsPDF** - PDF generation
- **HTML5 Camera API** - Photo capture
- **Geolocation API** - GPS tagging for photos

## Browser Compatibility

- **iOS Safari** 14+
- **Android Chrome** 80+
- **Desktop Chrome/Firefox/Safari** - Latest versions

## Project Structure

```
src/
├── components/
│   ├── PropertyInfo.jsx
│   ├── BackgroundInfo.jsx
│   ├── PropertyDescription.jsx
│   ├── EcologicalFeatures.jsx
│   ├── PhotoGallery.jsx
│   └── ReviewAndExport.jsx
├── utils/
│   ├── storage.js          # Offline data storage
│   └── pdfGenerator.js     # PDF generation logic
├── App.jsx                 # Main app component
├── App.css                 # Styles
└── main.jsx                # Entry point
```

## Future Enhancements

Potential additions:
- Map integration for property boundaries
- Cloud sync with backend server
- Multi-user collaboration
- Template customization
- Integration with eBird API for wildlife data
- Soil and climate data API connections
- Digital signatures for acknowledgment
- Export to Word format

## Support

For issues or questions about this app, contact the development team.

## License

Built for Inland Northwest Land Conservancy
