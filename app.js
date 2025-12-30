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
    shapes: [],
    snapshots: [],
  },
  ecology: {
    soils: "",
    water: "",
    geology: "",
    resilience: "",
    vegetation: "",
    wildlife: "",
  },
  photos: [],
  lastModified: new Date().toISOString(),
});

const report = loadReport();
let autosaveTimer;
let currentShape = { type: "polygon", points: [] };

const panels = document.querySelectorAll("[data-panel]");
const stepper = document.getElementById("stepper");
const autosaveStatus = document.getElementById("autosaveStatus");
const lastModified = document.getElementById("lastModified");
const photoCount = document.getElementById("photoCount");
const shapeCount = document.getElementById("shapeCount");
const pointCount = document.getElementById("pointCount");
const measurement = document.getElementById("measurement");
const toolLabel = document.getElementById("toolLabel");
const mapCanvas = document.getElementById("mapCanvas");
const ctx = mapCanvas.getContext("2d");

function loadReport() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return defaultReport();
  try {
    return JSON.parse(saved);
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
  shapeCount.textContent = report.mapping.shapes.length;
  lastModified.textContent = new Date(report.lastModified).toLocaleString();
}

function setupMap() {
  toolLabel.textContent = currentShape.type;
  document.getElementById("mapTool").addEventListener("change", (e) => {
    currentShape = { type: e.target.value, points: [] };
    toolLabel.textContent = currentShape.type;
    pointCount.textContent = "0";
    measurement.textContent = "—";
    redraw();
  });

  mapCanvas.addEventListener("click", (e) => {
    const rect = mapCanvas.getBoundingClientRect();
    const point = [e.clientX - rect.left, e.clientY - rect.top];
    if (currentShape.type === "marker") {
      currentShape.points = [point];
      finishShape();
      return;
    }
    currentShape.points.push(point);
    pointCount.textContent = String(currentShape.points.length);
    measurement.textContent = formatMeasurement(currentShape.type, currentShape.points);
    redraw();
  });

  document.getElementById("undoPoint").addEventListener("click", () => {
    currentShape.points.pop();
    pointCount.textContent = String(currentShape.points.length);
    measurement.textContent = formatMeasurement(currentShape.type, currentShape.points);
    redraw();
  });

  document.getElementById("finishShape").addEventListener("click", finishShape);
  document.getElementById("clearShapes").addEventListener("click", () => {
    if (!confirm("Remove all shapes?")) return;
    report.mapping.shapes = [];
    currentShape.points = [];
    redraw();
    queueSave();
  });

  document.getElementById("downloadGeojson").addEventListener("click", downloadGeojson);
  document.getElementById("downloadMap").addEventListener("click", downloadMapImage);

  redraw();
}

function finishShape() {
  if (currentShape.type === "rectangle" && currentShape.points.length >= 2) {
    const [p1, p2] = currentShape.points;
    const rectPoints = [p1, [p2[0], p1[1]], p2, [p1[0], p2[1]]];
    report.mapping.shapes.push({ type: "polygon", points: rectPoints });
  } else if (currentShape.type === "polygon" && currentShape.points.length >= 3) {
    report.mapping.shapes.push({ type: "polygon", points: [...currentShape.points] });
  } else if (currentShape.type === "polyline" && currentShape.points.length >= 2) {
    report.mapping.shapes.push({ type: "polyline", points: [...currentShape.points] });
  } else if (currentShape.type === "marker" && currentShape.points.length) {
    report.mapping.shapes.push({ type: "marker", points: [...currentShape.points] });
  } else {
    return;
  }
  currentShape.points = [];
  pointCount.textContent = "0";
  measurement.textContent = "—";
  redraw();
  queueSave();
}

function redraw() {
  ctx.clearRect(0, 0, mapCanvas.width, mapCanvas.height);
  ctx.fillStyle = "#f8faf5";
  ctx.fillRect(0, 0, mapCanvas.width, mapCanvas.height);

  report.mapping.shapes.forEach((shape) => drawShape(shape, "#2d5016"));
  if (currentShape.points.length) {
    drawShape(currentShape, "#8c2f39", true);
  }
  shapeCount.textContent = report.mapping.shapes.length;
}

function drawShape(shape, color, dashed = false) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.setLineDash(dashed ? [6, 6] : []);
  if (shape.type === "marker") {
    const [x, y] = shape.points[0];
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    return;
  }
  ctx.beginPath();
  shape.points.forEach(([x, y], idx) => {
    if (idx === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  if (shape.type === "polygon") ctx.closePath();
  ctx.stroke();
  ctx.setLineDash([]);
}

function formatMeasurement(type, pts) {
  if (!pts.length) return "—";
  if (type === "marker") return "Single point";
  if (type === "polyline" && pts.length >= 2) {
    const length = lineLength(pts);
    return describeDistance(length);
  }
  if (type === "polygon" && pts.length >= 3) {
    const area = polygonArea(pts);
    return describeArea(area);
  }
  if (type === "rectangle" && pts.length >= 2) {
    const [p1, p2] = pts;
    const width = Math.abs(p2[0] - p1[0]);
    const height = Math.abs(p2[1] - p1[1]);
    const area = width * height;
    return describeArea(area);
  }
  return "—";
}

function lineLength(points) {
  let total = 0;
  for (let i = 1; i < points.length; i += 1) {
    const [x1, y1] = points[i - 1];
    const [x2, y2] = points[i];
    total += Math.hypot(x2 - x1, y2 - y1);
  }
  return total;
}

function polygonArea(points) {
  let area = 0;
  for (let i = 0; i < points.length; i += 1) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[(i + 1) % points.length];
    area += x1 * y2 - x2 * y1;
  }
  return Math.abs(area / 2);
}

function describeDistance(lengthPx) {
  const feet = lengthPx; // 1px = 1ft placeholder for offline canvas
  if (feet >= 5280) return `${(feet / 5280).toFixed(2)} miles`;
  return `${feet.toFixed(1)} ft`;
}

function describeArea(areaPx) {
  const sqFt = areaPx; // 1px² = 1 sq ft placeholder
  if (sqFt >= 43560) return `${(sqFt / 43560).toFixed(2)} acres`;
  return `${sqFt.toFixed(1)} sq ft`;
}

function toGeoJSON() {
  const features = report.mapping.shapes.map((shape) => {
    if (shape.type === "marker") {
      const [[x, y]] = shape.points;
      return {
        type: "Feature",
        geometry: { type: "Point", coordinates: [x, y] },
        properties: { tool: shape.type },
      };
    }
    if (shape.type === "polyline") {
      return {
        type: "Feature",
        geometry: { type: "LineString", coordinates: shape.points },
        properties: { tool: shape.type },
      };
    }
    const coords = [...shape.points];
    coords.push(shape.points[0]);
    return {
      type: "Feature",
      geometry: { type: "Polygon", coordinates: [coords] },
      properties: { tool: shape.type },
    };
  });
  return { type: "FeatureCollection", features };
}

function downloadGeojson() {
  const blob = new Blob([JSON.stringify(toGeoJSON(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${report.meta.reportName || "baseline"}-shapes.geojson`;
  link.click();
  URL.revokeObjectURL(url);
}

function downloadMapImage() {
  const url = mapCanvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = url;
  link.download = `${report.meta.reportName || "baseline"}-map.png`;
  link.click();
}

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
  summaryTotals.textContent = `${report.photos.length} photos • ${report.mapping.shapes.length} shapes`;
}

function setupReview() {
  document.getElementById("downloadJson").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${report.meta.reportName || "baseline-report"}.json`;
    link.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById("printReport").addEventListener("click", () => {
    window.print();
  });

  document.getElementById("resetReport").addEventListener("click", () => {
    if (!confirm("This will delete all locally saved data.")) return;
    localStorage.removeItem(STORAGE_KEY);
    Object.assign(report, defaultReport());
    location.reload();
  });
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
  setupStepper();
  setupWelcome();
  setupBindings();
  setupChips();
  setupMap();
  setupPhotos();
  setupReview();
  hydrateUI();
  showPanel("welcome");
  setupServiceWorker();
}

init();
