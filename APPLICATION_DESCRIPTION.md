# Conservation Easement Baseline Report Application

## Executive Summary

The Conservation Easement Baseline Report Application is a Progressive Web App (PWA) designed specifically for field inspectors and conservation professionals to create comprehensive baseline documentation reports for conservation easements. Built for the Inland Northwest Land Conservancy, this mobile-first application streamlines the process of documenting property conditions, capturing field evidence, and generating professional PDF reports that comply with IRS Treasury Regulation Section 1.170A-14(g)(5)(i).

## Purpose & Problem Solved

### The Challenge
Conservation easement baseline reports are critical legal documents that establish the condition of protected properties at the time of easement establishment. Traditionally, this process involves:
- Manual field data collection with paper forms
- Separate GPS devices and cameras
- Post-field-visit data entry and compilation
- Manual photo organization and captioning
- Time-consuming report assembly in word processors
- Risk of data loss or inconsistency between field notes and final reports

### The Solution
This application consolidates the entire baseline documentation workflow into a single, offline-capable mobile application that:
- Guides field inspectors through structured data collection
- Captures photos with automatic GPS tagging and categorization
- Enables interactive property boundary mapping on satellite imagery
- Stores all data locally for offline field use
- Auto-saves progress to prevent data loss
- Generates formatted PDF reports with one click
- Works seamlessly on iPads, tablets, and smartphones

## Target Users

### Primary Users
- **Field Conservation Specialists** - Staff conducting on-site property inspections
- **Stewardship Coordinators** - Personnel responsible for baseline documentation
- **Conservation Easement Managers** - Professionals overseeing multiple properties

### Organization Profile
- **Primary Organization**: Inland Northwest Land Conservancy (INLC)
- **Region**: Inland Northwest United States (Washington, Idaho, Montana, Oregon)
- **Use Case**: Conservation easement baseline documentation and monitoring

## Core Features

### 1. Welcome Screen & Report Management
**Entry Point to Application**
- Professional welcome interface with organization branding
- Automatic detection of in-progress reports
- Option to continue existing work or start fresh
- Display of saved report metadata (property name, location, photo count, last modified date)
- Feature overview for first-time users

**Key Benefits:**
- Prevents accidental data overload
- Provides clear workflow entry point
- Shows users what the app can do
- Manages report lifecycle

### 2. Multi-Step Structured Data Collection

#### Step 1: Property Information
**Basic Identifying Details**
- Property number and name
- County and state location
- Purchase or conservation easement closing date
- Total acreage and easement acreage
- Preparer and reviewer information

**Data Validation:**
- Date pickers for accurate date entry
- Dropdown menus for state selection
- Numeric inputs for acreage with decimal precision

#### Step 2: Background Information
**Conservation Values Documentation**
- Narrative description of conservation values and acquisition reasons
- Checkbox selection of key conservation values:
  - Habitat values
  - Connectivity to protected areas
  - Viewshed protection
  - Water resources
  - Historical value
  - Restoration potential
  - Public access
  - Climate resilience

**Easement Details:**
- Summary of prohibited uses
- Summary of permitted uses (reserved rights)
- Pre-existing easements and restrictions

**Compliance:**
- Aligns with Land Trust Alliance standards
- Supports IRS conservation easement requirements

#### Step 3: Property Description
**Comprehensive Site Documentation**
- General property description (boundaries, water, habitat zones, adjacency)
- Legal description (township and range)
- Driving directions from INLC office
- Nearest navigable address
- Travel time and mileage calculations
- Property elevation and topography
- Property history and previous use
- Current land use and development envelope description
- Other human-made features (buildings, fences, roads, trails, utilities)
- Public benefit documentation

**Field Guidance:**
- Inline prompts suggest what to document
- Helpful hints for comprehensive descriptions
- Textarea fields sized for detailed narratives

#### Step 4: Map & Boundaries (Interactive Mapping)
**Professional-Grade Mapping Tools**

**Map Types:**
- Satellite imagery (Esri World Imagery)
- Street map (OpenStreetMap)
- Topographic map (OpenTopoMap)
- Layer switcher for easy toggling

**Drawing Tools:**
- **Polygon Tool** - Draw irregular property boundaries
  - Click to add corner points
  - Double-click to finish
  - Shows area measurements in real-time
- **Rectangle Tool** - Quick boundary marking for regular shapes
- **Polyline Tool** - Draw trails, roads, corridors, fence lines
  - Shows distance measurements
- **Marker Tool** - Place pins for point features
  - Buildings, wells, culverts, gates, etc.
  - Unlimited markers per map
- **Edit Tool** - Modify existing shapes by dragging vertices
- **Delete Tool** - Remove unwanted shapes

**Measurements (Imperial Units):**
- Areas: Acres (for ≥1 acre) or Square Feet (for <1 acre)
- Distances: Miles (for ≥1 mile) or Feet (for <1 mile)
- Real-time measurement display as you draw
- Area calculations for irregular polygons

**Location Features:**
- Address geocoding (enter address, map auto-centers)
- Current GPS location ("Use Current Location" button)
- Coordinate display (latitude/longitude)
- Scale bar showing map scale

**Export Capabilities:**
- Save map as image (PNG/JPEG) directly to Photos section
- Download boundary data as GeoJSON for GIS software
- Boundaries saved with report data
- Multiple map snapshots supported

**Technical Features:**
- Powered by Leaflet.js mapping library
- Offline map tile caching
- Touch-optimized for tablet use
- Zoom/pan controls
- Drawing tooltips and hints

#### Step 5: Ecological Features
**Physical Features Documentation**
- **Soils**: Description from USDA Soil Survey
  - Soil types, slopes, composition
  - Drainage characteristics
  - Erosion potential
  - Native vegetation associations
- **Water Resources**: Wetlands, streams, springs, shoreline
  - Wetland codes and classifications
  - Creek corridor lengths
  - Aquifer recharge areas
  - River/lake shoreline measurements
- **Geologic Features**: USGS quadrangle data
  - Geologic units and formations
  - Rock types and features
- **Climate Resilience**: TNC/FLO Analytics assessment
  - Landscape diversity scoring
  - Local connectedness rating
  - Future resilience projection

**Biological Features Documentation**
- **Vegetation Zone Descriptions**:
  - Upland forest (dry/mesic)
  - Riparian zones
  - Wetland vegetation
  - Shrub-steppe and grassland
  - Disturbed or developed areas
  - Rock outcrop and dry meadow
  - Dominant and indicator species
  - Notable invasive species
  - Ground cover types
  - Disturbance signs (fire, grazing, harvest)

- **Wildlife Documentation**:
  - Species of concern (WA Dept of Fish & Wildlife / ID Fish & Game)
  - Observed mammals (common and scientific names)
  - Bird observations (eBird integration suggested)
  - Amphibians and reptiles
  - Fish and aquatic invertebrates
  - Terrestrial invertebrates

**Data Sources Referenced:**
- USDA Natural Resources Conservation Service Soil Survey
- US Geological Survey quadrangle maps
- The Nature Conservancy climate resilience data
- Washington Department of Fish and Wildlife
- Idaho Fish and Game
- eBird citizen science database

#### Step 6: Photo Documentation
**Professional Photo Management**

**Photo Capture:**
- **Camera Integration**: Direct camera access from mobile device
  - Live camera preview
  - High-resolution photo capture (1920x1080+)
  - Front/rear camera selection
- **File Upload**: Import existing photos from device gallery
- **GPS Geotagging**: Automatic location capture with each photo
  - Latitude and longitude coordinates
  - Embedded in photo metadata

**Photo Organization:**
- **Categories**:
  - General
  - Development Envelope
  - Vegetation Zones
  - Water Resources
  - Wildlife
  - Boundaries
  - Human-Made Features
  - Other
- **Captions**: Text descriptions for each photo
- **Timestamps**: Automatic date/time recording
- **Location Tags**: GPS coordinates displayed with each photo

**Photo Management:**
- Grid view of all photos
- Category filtering
- Delete capability
- Photo count tracking
- Thumbnail previews
- Full metadata display
- Tap to view full-size

**Photo Plate Generation:**
- Automatic compilation for PDF reports
- Professional layout with captions
- Figure numbering
- Timestamp and location data inclusion

**Technical Specifications:**
- HTML5 Camera API integration
- Base64 image encoding for offline storage
- EXIF data preservation
- Responsive image display
- Touch-optimized gallery interface

#### Step 7: Review & Export
**Report Finalization**

**Summary Dashboard:**
- Property Information overview
- Background Information status
- Property Description completion
- Ecological Features summary
- Photo count by category
- Field completion statistics

**Export Options:**

1. **PDF Generation**:
   - Professional formatted baseline report
   - INLC template compliance
   - Includes all sections:
     - Title page with property info
     - Acknowledgment letter template
     - Table of contents
     - Background information
     - Property description
     - Ecological features
     - Photo plate with all images
   - Automatic page breaks
   - Proper typography and spacing
   - Headers and footers
   - Organization branding
   - Download as PDF file

2. **JSON Data Export**:
   - Complete data backup
   - Human-readable format
   - Importable for data migration
   - Version control friendly
   - Timestamped filename

3. **Data Management**:
   - Clear all data (with confirmation)
   - Reset to start new report
   - Warning about data loss

**Offline Notice:**
- Confirmation that data is saved locally
- Available without internet connection
- Auto-save status indicator

### 3. Progressive Web App (PWA) Features

**Installation:**
- Add to home screen on iOS and Android
- Appears as native app icon
- Full-screen mode (no browser chrome)
- Fast loading from cache

**Offline Capability:**
- Complete functionality without internet
- LocalForage (IndexedDB) storage
- Service worker for asset caching
- Map tile offline caching
- Photo storage in device memory
- Automatic background sync when online

**Auto-Save:**
- Real-time data persistence
- Save on every form field change
- No "Save" button needed
- Never lose work due to app closure
- Crash recovery

**Performance:**
- Fast initial load (<3 seconds)
- Instant page transitions
- Smooth scrolling and animations
- Optimized for mobile devices
- Efficient memory usage

### 4. User Interface & Experience

**Mobile-First Design:**
- Optimized for iPad and tablet field use
- Touch-friendly interface elements
- Large tap targets (36px minimum)
- Swipe gestures supported
- Responsive layout for all screen sizes

**Navigation:**
- Progress indicator showing current step
- Step completion status (completed/active/pending)
- Tab-based navigation between sections
- Previous/Next buttons
- Jump to any section from tabs
- Horizontal scroll for many tabs

**Visual Design:**
- Conservation-themed green color palette (#2d5016, #4a7c24)
- Clean, modern interface
- High contrast for outdoor use
- Readable fonts at all sizes
- Consistent spacing and alignment
- Professional appearance

**Accessibility:**
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Touch and mouse input
- Screen reader compatible
- Form validation feedback

**Form UX:**
- Placeholder text with examples
- Helper text explaining requirements
- Inline validation
- Clear error messages
- Consistent field styling
- Logical tab order

## Technical Architecture

### Frontend Stack
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Language**: JavaScript (ES6+)
- **State Management**: React Hooks (useState, useEffect)
- **Routing**: Single-page application (no routing library needed)

### Key Libraries & Dependencies

**Mapping:**
- **Leaflet 1.9.4**: Core mapping library
- **Leaflet-Draw 1.0.4**: Drawing tools for boundaries and features
- Custom overrides for imperial units and bug fixes

**Storage:**
- **LocalForage 1.10.0**: IndexedDB wrapper for offline storage
  - Automatic fallback to localStorage
  - Promise-based API
  - Better performance than localStorage

**PDF Generation:**
- **jsPDF 3.0.4**: Client-side PDF creation
  - Multi-page documents
  - Text wrapping and formatting
  - Image embedding
  - Custom fonts and styling

**Image Processing:**
- **html2canvas 1.4.1**: Map snapshot capture
  - Renders DOM elements to canvas
  - Converts to image for PDF inclusion

**PWA:**
- **Vite-PWA 1.2.0**: Service worker and manifest generation
  - Automatic caching strategies
  - Offline support
  - Update notifications
- **Workbox 7.4.0**: Service worker toolkit
  - Runtime caching
  - Precaching
  - Background sync

### Data Storage Architecture

**Storage Layer:**
- **Primary**: IndexedDB via LocalForage
- **Fallback**: localStorage
- **Capacity**: ~50MB+ (IndexedDB)
- **Data Format**: JSON

**Data Structure:**
```javascript
{
  propertyInfo: { /* basic property data */ },
  backgroundInfo: { /* conservation values */ },
  propertyDescription: { /* site details */ },
  mapBoundaries: { /* GeoJSON data */ },
  ecologicalFeatures: { /* ecological data */ },
  photos: [ /* array of photo objects */ ],
  lastModified: "2024-12-29T20:00:00.000Z"
}
```

**Photo Storage:**
- Base64 encoded images
- Embedded in report data object
- Compressed JPEG format (quality: 0.9)
- Includes metadata (caption, category, timestamp, GPS)

**Auto-Save Strategy:**
- React effect triggered on data change
- Debounced to prevent excessive writes
- Saves entire report object
- Timestamp on every save
- No user action required

### Deployment Architecture

**Build Process:**
```bash
npm run build      # Production build
npm run preview    # Test production build
vercel             # Deploy to Vercel
```

**Hosting Options:**
- **Vercel** (recommended): Automatic deployments, CDN, HTTPS
- **Netlify**: Similar features to Vercel
- **GitHub Pages**: Free static hosting
- **Firebase Hosting**: Google Cloud integration
- Any static file hosting service

**Production Optimizations:**
- Code splitting
- Tree shaking
- Minification
- Gzip compression
- Asset optimization
- Service worker caching
- CDN delivery

### Browser Compatibility

**Fully Supported:**
- iOS Safari 14+ (primary target for iPad users)
- Android Chrome 80+
- Desktop Chrome 90+
- Desktop Firefox 88+
- Desktop Safari 14+
- Edge 90+

**Required Features:**
- Service Workers
- IndexedDB
- Camera API (getUserMedia)
- Geolocation API
- Canvas API
- ES6+ JavaScript

**Not Supported:**
- Internet Explorer (any version)
- Very old mobile browsers

## Use Cases & Workflows

### Use Case 1: New Property Baseline Documentation

**Scenario**: Conservation specialist needs to document a new 480-acre conservation easement property.

**Workflow:**
1. Open app on iPad in field
2. Start new baseline report from welcome screen
3. Fill in property info (name, location, acreage)
4. Document conservation values (habitat, water, connectivity)
5. Take photos of:
   - Property boundaries and corners
   - Development envelope (existing house, barn)
   - Water features (creek, wetlands)
   - Vegetation zones (forest, riparian, meadow)
   - Wildlife sign (tracks, nests)
6. Draw property boundary on satellite map
7. Mark key features (buildings, wells, gates)
8. Save map as image for report
9. Document ecological features:
   - Soil types from USDA survey
   - Stream corridor vegetation
   - Wildlife observations
10. Review all data in final section
11. Generate PDF report
12. Email PDF to supervisor from tablet
13. Export JSON backup to cloud storage

**Time Saved**: 4-6 hours of post-field data entry and report assembly

### Use Case 2: Multi-Day Site Visit

**Scenario**: Large property requires multiple visits over several days.

**Workflow:**
1. Day 1: Enter basic property info, take north boundary photos
2. App auto-saves progress
3. Day 2: Continue existing report, photograph south boundary
4. Day 3: Complete vegetation documentation, add more photos
5. Day 4: Finish ecological features section
6. Office: Review data, generate final PDF

**Benefit**: Pick up exactly where you left off, no data re-entry

### Use Case 3: Remote Property (No Cell Service)

**Scenario**: Property in remote area with no cellular or WiFi coverage.

**Workflow:**
1. Load app at office while on WiFi (caches all assets)
2. Drive to remote property (no service)
3. App works completely offline
4. Collect all data and photos
5. Return to office
6. Connect to WiFi
7. Generate and email PDF report

**Benefit**: Full functionality without internet connection

### Use Case 4: Quick Monitoring Visit

**Scenario**: Annual monitoring visit to check easement compliance.

**Workflow:**
1. Load previous baseline report
2. Reference property description and maps
3. Take updated photos
4. Add notes about any changes
5. Generate monitoring report PDF

**Benefit**: Historical data readily available for comparison

## Benefits & Value Proposition

### For Field Staff
- **Efficiency**: 50-70% reduction in report preparation time
- **Accuracy**: Structured forms ensure completeness
- **Convenience**: All tools in one device (camera, GPS, forms, maps)
- **Reliability**: Never lose data with auto-save
- **Flexibility**: Work anywhere, online or offline

### For Organizations
- **Consistency**: Standardized reports across all staff
- **Quality**: Professional PDF output every time
- **Compliance**: IRS and Land Trust Alliance standards met
- **Cost Savings**: Reduced staff time, no specialized equipment needed
- **Data Integrity**: Digital records, no transcription errors

### For Legal Documentation
- **Defensibility**: Comprehensive baseline with photos, GPS, maps
- **Timestamp**: All data time-stamped automatically
- **Signatures**: Acknowledgment letter template included
- **Preservation**: Digital records don't degrade
- **Accessibility**: Easy retrieval for future reference

## Future Enhancement Possibilities

### Short-Term Enhancements
- Multi-report storage and management
- Report templates for different property types
- Custom field additions
- Photo annotation tools
- Voice-to-text for field notes

### Medium-Term Enhancements
- Cloud backup and sync
- Team collaboration features
- Report comparison tools
- GIS data import/export
- eBird API integration for bird data
- Soil API integration

### Long-Term Enhancements
- Mobile backend with database
- User authentication and permissions
- Report versioning and history
- Advanced analytics and reporting
- Integration with land trust management systems
- Monitoring visit workflows
- Violation documentation tools

## Security & Privacy

### Data Security
- **Local Storage**: All data stored on user's device
- **No Cloud Upload**: Data never sent to external servers (unless user exports)
- **User Control**: Complete control over data export and sharing
- **Encryption**: Browser-level encryption of IndexedDB

### Privacy
- **No Tracking**: No analytics or user tracking
- **No Accounts**: No user registration required
- **Offline First**: Doesn't require internet connection
- **GPS Optional**: Location features only active when used

### Backup Recommendations
- Regular JSON exports to secure cloud storage
- PDF reports saved to organization document management
- Photo backups to secure media storage
- Device backups (iCloud, etc.)

## Support & Maintenance

### Documentation
- In-app instructions and helper text
- Detailed README file
- API documentation for developers
- User guide (this document)

### Updates
- Deployed via Vercel with instant updates
- Service worker handles update notifications
- No app store approval needed
- Rapid bug fix deployment

### Browser Updates
- Tested with each major browser release
- Modern browser features used
- Graceful degradation where possible

## Conclusion

The Conservation Easement Baseline Report Application represents a modern, efficient solution to the challenge of field documentation for conservation professionals. By consolidating multiple tools into a single, offline-capable mobile application, it streamlines workflows, ensures data quality, and produces professional results that meet legal and organizational standards.

Built with modern web technologies, this Progressive Web App delivers native-app performance and reliability while maintaining the accessibility and ease of deployment that web applications provide. For organizations like the Inland Northwest Land Conservancy, it represents a significant step forward in conservation easement stewardship and documentation.

---

**Application Version**: 1.0.0 (Development)
**Last Updated**: December 29, 2024
**Developed For**: Inland Northwest Land Conservancy
**Technology**: React + Vite Progressive Web App
**License**: Proprietary
