import { useState } from 'react'

function PropertyDescription({ data = {}, onUpdate }) {
  const [formData, setFormData] = useState({
    generalDescription: '',
    legalDescription: '',
    drivingDirections: '',
    nearestAddress: '',
    travelTime: '',
    roundTripMileage: '',
    elevation: '',
    topography: '',
    propertyHistory: '',
    currentLandUse: '',
    developmentEnvelope: '',
    otherFeatures: '',
    publicBenefit: '',
    ...data
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    const updated = { ...formData, [name]: value }
    setFormData(updated)
    onUpdate(updated)
  }

  return (
    <div className="form-section">
      <h2>Property Description</h2>
      <p className="section-description">Location, physical characteristics, and current use</p>

      <div className="form-group full-width">
        <label htmlFor="generalDescription">General Description</label>
        <textarea
          id="generalDescription"
          name="generalDescription"
          value={formData.generalDescription}
          onChange={handleChange}
          rows="5"
          placeholder="Describe boundaries, water resources, habitat zones, trail systems, roads, development envelope, and adjacent properties..."
        />
        <small>Consider: boundary description, water resources, habitat zones, trail systems, RDE, adjacency</small>
      </div>

      <div className="form-group full-width">
        <label htmlFor="legalDescription">Legal Description</label>
        <textarea
          id="legalDescription"
          name="legalDescription"
          value={formData.legalDescription}
          onChange={handleChange}
          rows="3"
          placeholder="Township and Range description from Title Report..."
        />
      </div>

      <div className="form-group full-width">
        <label htmlFor="drivingDirections">Driving Directions</label>
        <textarea
          id="drivingDirections"
          name="drivingDirections"
          value={formData.drivingDirections}
          onChange={handleChange}
          rows="3"
          placeholder="From downtown Spokane..."
        />
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="nearestAddress">Nearest Navigable Address</label>
          <input
            type="text"
            id="nearestAddress"
            name="nearestAddress"
            value={formData.nearestAddress}
            onChange={handleChange}
            placeholder="123 Main St, City, ST"
          />
        </div>

        <div className="form-group">
          <label htmlFor="travelTime">One-Way Travel Time from INLC Office</label>
          <input
            type="text"
            id="travelTime"
            name="travelTime"
            value={formData.travelTime}
            onChange={handleChange}
            placeholder="e.g., 45 minutes"
          />
        </div>

        <div className="form-group">
          <label htmlFor="roundTripMileage">Round-Trip Mileage from INLC Office</label>
          <input
            type="text"
            id="roundTripMileage"
            name="roundTripMileage"
            value={formData.roundTripMileage}
            onChange={handleChange}
            placeholder="e.g., 80 miles"
          />
        </div>
      </div>

      <div className="form-group full-width">
        <label htmlFor="elevation">Property Elevation and Topography</label>
        <textarea
          id="elevation"
          name="elevation"
          value={formData.elevation}
          onChange={handleChange}
          rows="3"
          placeholder="Describe elevation range, highest points, slopes, drainage patterns (reference topo and hillshade maps)..."
        />
      </div>

      <div className="form-group full-width">
        <label htmlFor="propertyHistory">Property History</label>
        <textarea
          id="propertyHistory"
          name="propertyHistory"
          value={formData.propertyHistory}
          onChange={handleChange}
          rows="4"
          placeholder="Previous use, historic air photos review, title report notes, landowner questionnaire info, current issues..."
        />
        <small>Consider: previous ownership/use, historic photos, trespass, dumping, hunting, encroachment</small>
      </div>

      <div className="form-group full-width">
        <label htmlFor="currentLandUse">Current Land Use and Development Envelope</label>
        <textarea
          id="currentLandUse"
          name="currentLandUse"
          value={formData.currentLandUse}
          onChange={handleChange}
          rows="4"
          placeholder="Current use, development envelope description, management plans, county zoning, development prevented..."
        />
        <small>Include: current use, development envelope, forest/farm management plans, zoning</small>
      </div>

      <div className="form-group full-width">
        <label htmlFor="otherFeatures">Other Human-Made Features</label>
        <textarea
          id="otherFeatures"
          name="otherFeatures"
          value={formData.otherFeatures}
          onChange={handleChange}
          rows="4"
          placeholder="Buildings, fences, roads, trails, parking areas, utilities, wells, docks (outside RDE)..."
        />
      </div>

      <div className="form-group full-width">
        <label htmlFor="publicBenefit">Public Benefit</label>
        <textarea
          id="publicBenefit"
          name="publicBenefit"
          value={formData.publicBenefit}
          onChange={handleChange}
          rows="4"
          placeholder="Relation to comprehensive plan, viewshed, public access, historical value, water quality, wildlife corridor, wildfire prevention, rural character preservation..."
        />
      </div>
    </div>
  )
}

export default PropertyDescription
