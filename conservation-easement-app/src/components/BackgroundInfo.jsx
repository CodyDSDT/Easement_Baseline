import { useState } from 'react'

function BackgroundInfo({ data = {}, onUpdate }) {
  const [formData, setFormData] = useState({
    conservationValues: '',
    habitatValues: false,
    connectivity: false,
    viewshed: false,
    waterResources: false,
    historicalValue: false,
    restorationPotential: false,
    publicAccess: false,
    climateResilience: false,
    prohibitedUses: '',
    permittedUses: '',
    preExistingEasements: '',
    ...data
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const updated = {
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    }
    setFormData(updated)
    onUpdate(updated)
  }

  return (
    <div className="form-section">
      <h2>Background Information</h2>
      <p className="section-description">Conservation values and reasons for acquisition</p>

      <div className="form-group full-width">
        <label htmlFor="conservationValues">Conservation Values and Reason for Acquisition</label>
        <textarea
          id="conservationValues"
          name="conservationValues"
          value={formData.conservationValues}
          onChange={handleChange}
          rows="6"
          placeholder="Describe the conservation values and reasons for this acquisition..."
        />
      </div>

      <div className="checkbox-group">
        <label className="section-label">Key Conservation Values (Select all that apply):</label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="habitatValues"
            checked={formData.habitatValues}
            onChange={handleChange}
          />
          <span>Habitat values</span>
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="connectivity"
            checked={formData.connectivity}
            onChange={handleChange}
          />
          <span>Connectivity (adjacent to other protected areas)</span>
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="viewshed"
            checked={formData.viewshed}
            onChange={handleChange}
          />
          <span>Viewshed</span>
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="waterResources"
            checked={formData.waterResources}
            onChange={handleChange}
          />
          <span>Water resources</span>
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="historicalValue"
            checked={formData.historicalValue}
            onChange={handleChange}
          />
          <span>Historical value</span>
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="restorationPotential"
            checked={formData.restorationPotential}
            onChange={handleChange}
          />
          <span>Restoration potential</span>
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="publicAccess"
            checked={formData.publicAccess}
            onChange={handleChange}
          />
          <span>Protection or creation of public access</span>
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="climateResilience"
            checked={formData.climateResilience}
            onChange={handleChange}
          />
          <span>Climate resilience</span>
        </label>
      </div>

      <div className="form-group full-width">
        <label htmlFor="prohibitedUses">Summary of Easement Prohibited Uses</label>
        <textarea
          id="prohibitedUses"
          name="prohibitedUses"
          value={formData.prohibitedUses}
          onChange={handleChange}
          rows="4"
          placeholder="Summarize prohibited uses (refer to recorded Conservation Easement for full details)..."
        />
      </div>

      <div className="form-group full-width">
        <label htmlFor="permittedUses">Summary of Easement Permitted Uses (Reserved Rights)</label>
        <textarea
          id="permittedUses"
          name="permittedUses"
          value={formData.permittedUses}
          onChange={handleChange}
          rows="4"
          placeholder="Summarize permitted uses (refer to recorded Conservation Easement for full details)..."
        />
      </div>

      <div className="form-group full-width">
        <label htmlFor="preExistingEasements">Pre-Existing Easements and Restrictions</label>
        <textarea
          id="preExistingEasements"
          name="preExistingEasements"
          value={formData.preExistingEasements}
          onChange={handleChange}
          rows="3"
          placeholder="List any pre-existing easements (refer to Title Report for full details)..."
        />
      </div>
    </div>
  )
}

export default BackgroundInfo
