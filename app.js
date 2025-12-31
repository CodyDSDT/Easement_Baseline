const STORAGE_KEY = "baselineReport";
const CHIP_OPTIONS = [
  "Habitat values",
  "Connectivity to protected areas",
  "Viewshed protection",
  "Water resources",
  "Historical value",
  "Restoration potential",
  "Public access",
  "Climate resilience",
];

const defaultReport = () => ({
  meta: { reportName: "", preparer: "" },
  property: {
    propertyNumber: "",
    propertyName: "",
    county: "",
    state: "",
    closingDate: "",
    totalAcreage: "",
    easementAcreage: "",
    reviewer: "",
  },
  background: {
    conservationValues: "",
    selectedValues: [],
    prohibitedUses: "",
    permittedUses: "",
    existingEasements: "",
  },
  description: {
    generalDescription: "",
    legalDescription: "",
    directions: "",
    nearestAddress: "",
    travelTime: "",
    mileage: "",
    elevation: "",
    history: "",
    landUse: "",
    humanFeatures: "",
    publicBenefit: "",
  },
  mapping: {
    features: [], // GeoJSON Feature array
    center: [47.658, -117.426], // Default to Spokane, WA
    zoom: 10,
  },
  ecology: {
    soils: "",
    water: "",
    geology: "",
    resilience: "",
    vegetation: "",
    wildlife: "",
    selectedSpecies: [],
  },
  photos: [],
  lastModified: new Date().toISOString(),
});

const report = loadReport();
let autosaveTimer;
let map, drawnItems;
let pendingLayer = null; // Temporarily holds a layer while attributes are being added
let editingFeatureId = null; // ID of the feature currently being edited

// DOM Elements
const panels = document.querySelectorAll("[data-panel]");
const stepper = document.getElementById("stepper");
const autosaveStatus = document.getElementById("autosaveStatus");
const lastModified = document.getElementById("lastModified");
const photoCount = document.getElementById("photoCount");
const featureCount = document.getElementById("featureCount");
const attributePanel = document.getElementById("attributePanel");
const featureForm = document.getElementById("featureForm");
const deleteFeatureBtn = document.getElementById("deleteFeature");

function loadReport() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return defaultReport();
  try {
    const parsed = JSON.parse(saved);
    // Migration: Ensure mapping.features exists if loading old data
    if (!parsed.mapping.features) parsed.mapping.features = [];
    return parsed;
  } catch (err) {
    console.warn("Failed to parse saved report, resetting.");
    return defaultReport();
  }
}

function queueSave() {
  autosaveStatus.textContent = "Saving…";
  autosaveStatus.classList.add("pending");
  clearTimeout(autosaveTimer);
  autosaveTimer = setTimeout(() => {
    report.lastModified = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(report));
    autosaveStatus.textContent = "Saved";
    autosaveStatus.classList.remove("pending");
    lastModified.textContent = new Date(report.lastModified).toLocaleString();
    updateCounters();
    updateSummary();
  }, 300);
}

function bindInput(id, path) {
  const el = document.getElementById(id);
  const [section, key] = path;
  el.value = report[section][key] || "";
  el.addEventListener("input", (e) => {
    report[section][key] = e.target.value;
    queueSave();
  });
}

function setupChips() {
  const group = document.getElementById("valueChips");
  CHIP_OPTIONS.forEach((label) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = label;
    if (report.background.selectedValues.includes(label)) {
      chip.classList.add("active");
    }
    chip.addEventListener("click", () => {
      const active = chip.classList.toggle("active");
      if (active) {
        report.background.selectedValues.push(label);
      } else {
        report.background.selectedValues = report.background.selectedValues.filter((v) => v !== label);
      }
      queueSave();
    });
    group.appendChild(chip);
  });
}

function showPanel(step) {
  panels.forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.panel !== step);
  });
  stepper.querySelectorAll("button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.step === step);
  });
  
  // Invalidate map size when showing the map panel to ensure it renders correctly
  if (step === 'mapping' && map) {
    // Immediate call
    map.invalidateSize();
    // Delayed call to handle transition animations
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }
}

function setupStepper() {
  stepper.addEventListener("click", (e) => {
    const target = e.target.closest("button[data-step]");
    if (!target) return;
    showPanel(target.dataset.step);
  });
}

function setupWelcome() {
  document.getElementById("reportName").value = report.meta.reportName;
  document.getElementById("preparer").value = report.meta.preparer;
  document.getElementById("startReport").addEventListener("click", () => {
    report.meta.reportName = document.getElementById("reportName").value;
    report.meta.preparer = document.getElementById("preparer").value;
    queueSave();
    showPanel("property");
  });
}

function setupBindings() {
  bindInput("propertyNumber", ["property", "propertyNumber"]);
  bindInput("propertyName", ["property", "propertyName"]);
  bindInput("county", ["property", "county"]);
  bindInput("state", ["property", "state"]);
  bindInput("closingDate", ["property", "closingDate"]);
  bindInput("totalAcreage", ["property", "totalAcreage"]);
  bindInput("easementAcreage", ["property", "easementAcreage"]);
  bindInput("reviewer", ["property", "reviewer"]);

  bindInput("conservationValues", ["background", "conservationValues"]);
  bindInput("prohibitedUses", ["background", "prohibitedUses"]);
  bindInput("permittedUses", ["background", "permittedUses"]);
  bindInput("existingEasements", ["background", "existingEasements"]);

  bindInput("generalDescription", ["description", "generalDescription"]);
  bindInput("legalDescription", ["description", "legalDescription"]);
  bindInput("directions", ["description", "directions"]);
  bindInput("nearestAddress", ["description", "nearestAddress"]);
  bindInput("travelTime", ["description", "travelTime"]);
  bindInput("mileage", ["description", "mileage"]);
  bindInput("elevation", ["description", "elevation"]);
  bindInput("history", ["description", "history"]);
  bindInput("landUse", ["description", "landUse"]);
  bindInput("humanFeatures", ["description", "humanFeatures"]);
  bindInput("publicBenefit", ["description", "publicBenefit"]);

  bindInput("soils", ["ecology", "soils"]);
  bindInput("water", ["ecology", "water"]);
  bindInput("geology", ["ecology", "geology"]);
  bindInput("resilience", ["ecology", "resilience"]);
  bindInput("vegetation", ["ecology", "vegetation"]);
  bindInput("wildlife", ["ecology", "wildlife"]);
}

function updateCounters() {
  photoCount.textContent = report.photos.length;
  featureCount.textContent = report.mapping.features.length;
  lastModified.textContent = new Date(report.lastModified).toLocaleString();
}

// ----------------------------------------------------------------------------
// MAPPING LOGIC (LEAFLET + LEAFLET-DRAW)
// ----------------------------------------------------------------------------

function setupMap() {
  // 1. Initialize Map
  // Use user's saved center/zoom if available, else default
  const startCenter = report.mapping.center || [47.658, -117.426];
  const startZoom = report.mapping.zoom || 10;
  
  map = L.map('map').setView(startCenter, startZoom);

  // 2. Add Base Layers
  const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
  });

  const sat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri'
  });

  // Default to satellite for field work
  sat.addTo(map);

  const baseMaps = {
      "Satellite": sat,
      "Street Map": osm
  };
  L.control.layers(baseMaps).addTo(map);

  // 3. Setup Feature Group for Drawn Items
  drawnItems = new L.FeatureGroup();
  map.addLayer(drawnItems);

  // 4. Initialize Draw Control
  const drawControl = new L.Control.Draw({
      draw: {
          polygon: { allowIntersection: false },
          polyline: true,
          marker: true,
          circle: false, // Not standard for GeoJSON
          circlemarker: false,
          rectangle: true
      },
      edit: {
          featureGroup: drawnItems,
          remove: false, // We handle removal via custom UI
          edit: false    // We handle edit via custom UI
      }
  });
  map.addControl(drawControl);

  // 5. Handle "Created" Event
  map.on(L.Draw.Event.CREATED, function (e) {
      const type = e.layerType;
      const layer = e.layer;

      // Temporary hold
      pendingLayer = layer;
      
      // Open Attribute Panel to Add Details
      openAttributePanel('new');
  });

  // 6. Add Geocoder (Search) Control
  if (L.Control.Geocoder) {
    L.Control.geocoder({
      defaultMarkGeocode: false
    })
    .on('markgeocode', function(e) {
      const bbox = e.geocode.bbox;
      const poly = L.polygon([
        bbox.getSouthEast(),
        bbox.getNorthEast(),
        bbox.getNorthWest(),
        bbox.getSouthWest()
      ]);
      map.fitBounds(poly.getBounds());
    })
    .addTo(map);
  }

  // 7. Add Custom "Locate Me" Control
  const LocateControl = L.Control.extend({
    options: { position: 'topleft' },
    onAdd: function(map) {
      const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-locate');
      container.title = "Show my location";
      
      const icon = L.DomUtil.create('span', 'leaflet-control-locate-icon', container);
      icon.innerHTML = '📍'; 
      icon.style.cursor = 'pointer';

      container.onclick = function() {
        if (!navigator.geolocation) {
          alert("Geolocation is not supported by this browser.");
          return;
        }
        container.style.backgroundColor = '#ddd'; // Visual feedback
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const { latitude, longitude } = pos.coords;
            const accuracy = pos.coords.accuracy;
            map.flyTo([latitude, longitude], 16);
            
            // Optional: Show accuracy circle
            L.circle([latitude, longitude], { radius: accuracy, color: '#136AEC', weight: 1, fillOpacity: 0.1 }).addTo(map);
            L.circleMarker([latitude, longitude], { radius: 6, color: 'white', fillColor: '#136AEC', fillOpacity: 1 }).addTo(map);
            
            container.style.backgroundColor = 'white';
          },
          (err) => {
            alert(`Location error: ${err.message}`);
            container.style.backgroundColor = 'white';
          },
          { enableHighAccuracy: true }
        );
      };
      return container;
    }
  });
  map.addControl(new LocateControl());

  // 8. Load Existing Features
  loadMapFeatures();

  // 9. Save map position on move
  map.on('moveend', () => {
    report.mapping.center = [map.getCenter().lat, map.getCenter().lng];
    report.mapping.zoom = map.getZoom();
    // Debounce save? Optional. For now just updating state object is enough.
  });

  // 8. Bind Buttons
  document.getElementById("downloadGeojson").addEventListener("click", downloadGeojson);
  document.getElementById("downloadMap").addEventListener("click", downloadMapSnapshot);
  
  // 9. Manual Coordinates Handler
  document.getElementById("goToCoordsBtn").addEventListener("click", () => {
    const input = document.getElementById("manualCoords").value;
    if (!input) return;
    
    // Parse "lat, lng"
    const parts = input.split(',').map(s => parseFloat(s.trim()));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      const [lat, lng] = parts;
      map.flyTo([lat, lng], 16);
      L.marker([lat, lng]).addTo(map).bindPopup(`Coordinates: ${lat}, ${lng}`).openPopup();
    } else {
      alert("Invalid format. Please use 'Lat, Lng' (e.g., 47.65, -117.42)");
    }
  });

  // 10. File Import Handler
  document.getElementById("mapDataImport").addEventListener("change", handleMapImport);
  
  // Attribute Form Handlers
  featureForm.addEventListener("submit", handleFeatureSave);
  document.getElementById("cancelFeature").addEventListener("click", closeAttributePanel);
  deleteFeatureBtn.addEventListener("click", handleDeleteFeature);
}

function handleMapImport(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const content = event.target.result;
    const ext = file.name.split('.').pop().toLowerCase();
    
    let geojson = null;

    try {
      if (ext === 'json' || ext === 'geojson') {
        geojson = JSON.parse(content);
      } else if (ext === 'kml') {
        const parser = new DOMParser();
        const kml = parser.parseFromString(content, 'text/xml');
        // toGeoJSON is global if loaded via script tag
        if (window.toGeoJSON && window.toGeoJSON.kml) {
          geojson = toGeoJSON.kml(kml);
        } else {
          alert("KML parser not ready.");
          return;
        }
      } else if (ext === 'gpx') {
        const parser = new DOMParser();
        const gpx = parser.parseFromString(content, 'text/xml');
        if (window.toGeoJSON && window.toGeoJSON.gpx) {
          geojson = toGeoJSON.gpx(gpx);
        } else {
          alert("GPX parser not ready.");
          return;
        }
      } else {
        alert("Unsupported file format.");
        return;
      }

      if (geojson) {
        processImportedGeoJSON(geojson);
      }
    } catch (err) {
      console.error("Import error:", err);
      alert("Failed to parse file. Please check the format.");
    }
  };

  reader.readAsText(file);
  e.target.value = ""; // Reset input
}

function processImportedGeoJSON(geojson) {
  let features = [];
  if (geojson.type === "FeatureCollection") {
    features = geojson.features;
  } else if (geojson.type === "Feature") {
    features = [geojson];
  } else {
    // Basic geometry support if needed, wrap in Feature
    features = [{ type: "Feature", geometry: geojson, properties: {} }];
  }

  let addedCount = 0;
  features.forEach(f => {
    // Ensure properties exist
    f.properties = f.properties || {};
    
    // Generate internal ID if missing
    if (!f.properties.id) f.properties.id = crypto.randomUUID();
    
    // Set default label if missing
    if (!f.properties.label) {
      f.properties.label = f.properties.name || `Imported-${addedCount + 1}`;
    }
    
    // Set default type
    if (!f.properties.type) f.properties.type = "Imported";

    f.properties.importedAt = new Date().toISOString();

    report.mapping.features.push(f);
    addedCount++;
  });

  loadMapFeatures(); // Re-render map and table
  queueSave();
  
  if (addedCount > 0) {
    alert(`Successfully imported ${addedCount} features.`);
    // Zoom to extent of imported data
    const bounds = L.geoJSON(geojson).getBounds();
    if (bounds.isValid()) {
      map.fitBounds(bounds);
    }
  } else {
    alert("No valid features found in file.");
  }
}

function loadMapFeatures() {
  drawnItems.clearLayers();
  
  if (!report.mapping.features) return;

  // Convert GeoJSON to Leaflet layers
  L.geoJSON(report.mapping.features, {
    onEachFeature: function (feature, layer) {
      // Bind click to edit
      layer.on('click', () => {
        pendingLayer = layer;
        editingFeatureId = feature.properties.id; // Assume ID exists
        openAttributePanel('edit', feature.properties);
      });
      drawnItems.addLayer(layer);
    },
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng);
    }
  });

  renderFeatureTable();
}

function openAttributePanel(mode, properties = {}) {
  attributePanel.classList.remove("hidden");
  
  // Reset Form
  featureForm.reset();
  
  if (mode === 'new') {
    document.getElementById("featLabel").value = generateDefaultLabel();
    deleteFeatureBtn.classList.add("hidden");
    editingFeatureId = null;
  } else {
    // Edit Mode
    document.getElementById("featLabel").value = properties.label || "";
    document.getElementById("featType").value = properties.type || "Other";
    document.getElementById("featDesc").value = properties.description || "";
    deleteFeatureBtn.classList.remove("hidden");
  }
}

function closeAttributePanel() {
  attributePanel.classList.add("hidden");
  pendingLayer = null;
  editingFeatureId = null;
  
  // If we were adding a new layer and canceled, remove it (it wasn't added to drawnItems yet if new, 
  // but if it was a draw event, we just discard the pendingLayer ref. 
  // If it was an edit, we just close.)
}

function handleFeatureSave(e) {
  e.preventDefault();
  
  const label = document.getElementById("featLabel").value;
  const type = document.getElementById("featType").value;
  const desc = document.getElementById("featDesc").value;
  
  if (editingFeatureId) {
    // EDIT EXISTING
    // Update properties in report
    const featureIndex = report.mapping.features.findIndex(f => f.properties.id === editingFeatureId);
    if (featureIndex !== -1) {
      report.mapping.features[featureIndex].properties = {
        ...report.mapping.features[featureIndex].properties,
        label,
        type,
        description: desc,
        updatedAt: new Date().toISOString()
      };
    }
    // Reload map to reflect changes (simple way)
    loadMapFeatures();
  } else {
    // NEW FEATURE
    if (!pendingLayer) return;

    // Convert to GeoJSON
    const geojson = pendingLayer.toGeoJSON();
    
    // Add Properties
    geojson.properties = {
      id: crypto.randomUUID(), // Unique ID
      label,
      type,
      description: desc,
      createdAt: new Date().toISOString()
    };
    
    // Add to Report
    report.mapping.features.push(geojson);
    
    // Add to Map LayerGroup
    // We re-load from state to ensure consistency
    loadMapFeatures();
  }

  queueSave();
  closeAttributePanel();
}

function handleDeleteFeature() {
  if (!editingFeatureId) return;
  if (!confirm("Are you sure you want to delete this feature?")) return;

  report.mapping.features = report.mapping.features.filter(f => f.properties.id !== editingFeatureId);
  
  loadMapFeatures();
  queueSave();
  closeAttributePanel();
}

function generateDefaultLabel() {
  const type = document.getElementById("featType").value || "Feature";
  const count = report.mapping.features.length + 1;
  return `${type}-${count}`;
}

function renderFeatureTable() {
  const tbody = document.querySelector("#featuresTable tbody");
  tbody.innerHTML = "";

  if (report.mapping.features.length === 0) {
    tbody.innerHTML = '<tr><td colspan="4" class="muted">No features mapped yet.</td></tr>';
    return;
  }

  report.mapping.features.forEach(feature => {
    const props = feature.properties;
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${props.label}</td>
      <td>${props.type}</td>
      <td>${props.description || "—"}</td>
      <td>
        <button class="action-btn" onclick="editFeature('${props.id}')">Edit</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Global scope for onclick handler
window.editFeature = function(id) {
  const feature = report.mapping.features.find(f => f.properties.id === id);
  if (feature) {
    pendingLayer = null; // Not relevant for direct edit
    editingFeatureId = id;
    openAttributePanel('edit', feature.properties);
  }
};

function downloadGeojson() {
  const collection = {
    type: "FeatureCollection",
    features: report.mapping.features
  };
  const blob = new Blob([JSON.stringify(collection, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${report.meta.reportName || "baseline"}-features.geojson`;
  link.click();
  URL.revokeObjectURL(url);
}

function downloadMapSnapshot() {
  // Leaflet-image or html2canvas is typically needed for this.
  // For this prototype, we'll try basic html2canvas on the map container
  // Note: This might have issues with cross-origin tiles (CORS).
  alert("Map snapshot functionality requires additional library setup for CORS handling. Please use system screenshot for now.");
}

// ----------------------------------------------------------------------------
// END MAPPING LOGIC
// ----------------------------------------------------------------------------

function setupPhotos() {
  const photoInput = document.getElementById("photoInput");
  const category = document.getElementById("photoCategory");
  const caption = document.getElementById("photoCaption");
  const coords = document.getElementById("photoCoords");
  const grid = document.getElementById("photoGrid");

  photoInput.addEventListener("change", () => {
    const file = photoInput.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const photo = {
        category: category.value,
        caption: caption.value,
        coords: coords.value,
        takenAt: new Date().toISOString(),
        dataUrl: e.target.result,
      };
      report.photos.unshift(photo);
      photoInput.value = "";
      caption.value = "";
      queueSave();
      renderPhotos(grid);
    };
    reader.readAsDataURL(file);
  });

  document.getElementById("captureLocation").addEventListener("click", () => {
    if (!navigator.geolocation) {
      alert("Geolocation not available in this browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        coords.value = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
      },
      () => alert("Unable to fetch location."),
      { enableHighAccuracy: true }
    );
  });

  renderPhotos(grid);
}

function renderPhotos(grid) {
  grid.innerHTML = "";
  report.photos.forEach((photo) => {
    const card = document.createElement("div");
    card.className = "photo-card";
    const img = document.createElement("img");
    img.src = photo.dataUrl;
    img.alt = photo.caption || photo.category;
    const meta = document.createElement("div");
    meta.className = "photo-meta";
    meta.innerHTML = `
      <strong>${photo.category}</strong><br />
      ${photo.caption || "No caption"}<br />
      ${photo.coords || "No coordinates"}<br />
      ${new Date(photo.takenAt).toLocaleString()}
    `;
    card.append(img, meta);
    grid.appendChild(card);
  });
  updateCounters();
}

function updateSummary() {
  const summaryProperty = document.getElementById("summaryProperty");
  const summaryBackground = document.getElementById("summaryBackground");
  const summaryEcology = document.getElementById("summaryEcology");
  const summaryTotals = document.getElementById("summaryTotals");

  summaryProperty.textContent = `${report.property.propertyName || "Unnamed"} • ${report.property.county || ""} ${report.property.state || ""}`.trim();
  summaryBackground.textContent = report.background.conservationValues || "Add conservation value notes.";
  summaryEcology.textContent = report.ecology.vegetation || report.ecology.wildlife || "Add ecological observations.";
  summaryTotals.textContent = `${report.photos.length} photos • ${report.mapping.features.length} features`;
}

function setupReview() {
  document.getElementById("generatePdf").addEventListener("click", async () => {
    try {
      const filename = await generateBaselinePDF(report);
      alert(`PDF generated successfully: ${filename}`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please check the console for details.');
    }
  });

  document.getElementById("downloadJson").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${report.meta.reportName || "baseline-report"}.json`;
    link.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("resetReport").addEventListener("click", () => {
    if (!confirm("This will delete all locally saved data.")) return;
    localStorage.removeItem(STORAGE_KEY);
    Object.assign(report, defaultReport());
    location.reload();
  });
}

function setupSpeciesLibrary() {
  const searchInput = document.getElementById("speciesSearch");
  const groupFilter = document.getElementById("speciesGroupFilter");
  const searchResults = document.getElementById("speciesSearchResults");
  const selectedTable = document.getElementById("selectedSpeciesTable");

  if (!report.ecology.selectedSpecies) {
    report.ecology.selectedSpecies = [];
  }

  function filterSpecies() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedGroup = groupFilter.value;

    if (!searchTerm && !selectedGroup) {
      searchResults.style.display = "none";
      return;
    }

    const filtered = SPECIES_LIBRARY.filter((species) => {
      const matchesSearch =
        !searchTerm ||
        species.commonName.toLowerCase().includes(searchTerm) ||
        species.scientificName.toLowerCase().includes(searchTerm);
      const matchesGroup = !selectedGroup || species.group === selectedGroup;
      return matchesSearch && matchesGroup;
    });

    if (filtered.length === 0) {
      searchResults.innerHTML = '<div style="padding: 10px; color: #999;">No species found</div>';
      searchResults.style.display = "block";
      return;
    }

    searchResults.innerHTML = "";
    searchResults.style.display = "block";

    filtered.forEach((species) => {
      const item = document.createElement("div");
      item.style.cssText = "padding: 10px; cursor: pointer; border-bottom: 1px solid #eee;";
      item.innerHTML = `
        <strong>${species.commonName}</strong> <em style="color: #666;">${species.scientificName}</em>
        <br />
        <span style="font-size: 0.85em; color: #2d5016;">${species.group}</span>
        ${species.invasive ? ' <span style="color: #8c2f39; font-weight: bold;">⚠ INVASIVE</span>' : ""}
      `;

      item.addEventListener("mouseenter", () => {
        item.style.backgroundColor = "#f0f0f0";
      });

      item.addEventListener("mouseleave", () => {
        item.style.backgroundColor = "transparent";
      });

      item.addEventListener("click", () => {
        const alreadySelected = report.ecology.selectedSpecies.some((s) => s.id === species.id);
        if (alreadySelected) {
          alert(`${species.commonName} is already in your selected species list.`);
          return;
        }

        report.ecology.selectedSpecies.push(species);
        queueSave();
        renderSelectedSpecies();
        searchInput.value = "";
        groupFilter.value = "";
        searchResults.style.display = "none";
      });

      searchResults.appendChild(item);
    });
  }

  function renderSelectedSpecies() {
    if (report.ecology.selectedSpecies.length === 0) {
      selectedTable.innerHTML = '<p class="muted">No species selected yet. Use the search above to add species.</p>';
      return;
    }

    const groups = {};
    report.ecology.selectedSpecies.forEach((species) => {
      if (!groups[species.group]) {
        groups[species.group] = [];
      }
      groups[species.group].push(species);
    });

    let html = "";

    Object.keys(groups)
      .sort()
      .forEach((groupName) => {
        html += `<h5 style="margin-top: 1.5rem; margin-bottom: 0.5rem;">${groupName}s</h5>`;
        html += '<table style="width: 100%; border-collapse: collapse; margin-bottom: 1rem;">';
        html += `
          <thead>
            <tr style="background-color: #f0f0f0;">
              <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Common Name</th>
              <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Scientific Name</th>
              <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Status</th>
              <th style="padding: 8px; text-align: center; border: 1px solid #ddd; width: 80px;">Actions</th>
            </tr>
          </thead>
          <tbody>
        `;

        groups[groupName].forEach((species) => {
          const statusBadge = species.invasive
            ? '<span style="color: #8c2f39; font-weight: bold;">Invasive</span>'
            : `<span style="color: #2d5016;">${species.nativeStatus}</span>`;

          html += `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">${species.commonName}</td>
              <td style="padding: 8px; border: 1px solid #ddd;"><em>${species.scientificName}</em></td>
              <td style="padding: 8px; border: 1px solid #ddd;">${statusBadge}</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">
                <button class="remove-species" data-species-id="${species.id}" style="background: #8c2f39; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 0.85em;">Remove</button>
              </td>
            </tr>
          `;
        });

        html += "</tbody></table>";
      });

    selectedTable.innerHTML = html;

    selectedTable.querySelectorAll(".remove-species").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const speciesId = e.target.dataset.speciesId;
        report.ecology.selectedSpecies = report.ecology.selectedSpecies.filter((s) => s.id !== speciesId);
        queueSave();
        renderSelectedSpecies();
      });
    });
  }

  searchInput.addEventListener("input", filterSpecies);
  groupFilter.addEventListener("change", filterSpecies);

  renderSelectedSpecies();
}

function setupServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js").catch(() => {
      console.warn("Service worker registration failed.");
    });
  }
}

function hydrateUI() {
  updateCounters();
  updateSummary();
}

function init() {
  console.log("Conservation Easement Baseline App v1.1.0 Initializing...");
  setupStepper();
  setupWelcome();
  setupBindings();
  setupChips();
  setupMap();
  setupPhotos();
  setupSpeciesLibrary();
  setupReview();
  hydrateUI();
  showPanel("welcome");
  setupServiceWorker();
}

init();