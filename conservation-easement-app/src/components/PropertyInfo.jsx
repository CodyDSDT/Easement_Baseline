import { useState, useEffect } from 'react'

function PropertyInfo({ data = {}, onUpdate }) {
  const [formData, setFormData] = useState({
    propertyNumber: '',
    propertyName: '',
    county: '',
    state: 'Washington',
    closingDate: '',
    totalAcreage: '',
    easementAcreage: '',
    preparedBy: '',
    reviewedBy: '',
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
      <h2>Property Information</h2>
      <p className="section-description">Basic information about the conservation easement property</p>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="propertyNumber">Property Number</label>
          <input
            type="text"
            id="propertyNumber"
            name="propertyNumber"
            value={formData.propertyNumber}
            onChange={handleChange}
            placeholder="e.g., 2024-001"
          />
        </div>

        <div className="form-group">
          <label htmlFor="propertyName">Property Name</label>
          <input
            type="text"
            id="propertyName"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleChange}
            placeholder="e.g., Smith Ranch"
          />
        </div>

        <div className="form-group">
          <label htmlFor="county">County</label>
          <input
            type="text"
            id="county"
            name="county"
            value={formData.county}
            onChange={handleChange}
            placeholder="e.g., Spokane"
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="Washington">Washington</option>
            <option value="Idaho">Idaho</option>
            <option value="Montana">Montana</option>
            <option value="Oregon">Oregon</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="closingDate">Purchase or CE Closing Date</label>
          <input
            type="date"
            id="closingDate"
            name="closingDate"
            value={formData.closingDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="totalAcreage">Total Acreage</label>
          <input
            type="number"
            id="totalAcreage"
            name="totalAcreage"
            value={formData.totalAcreage}
            onChange={handleChange}
            placeholder="acres"
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="easementAcreage">Easement Acreage</label>
          <input
            type="number"
            id="easementAcreage"
            name="easementAcreage"
            value={formData.easementAcreage}
            onChange={handleChange}
            placeholder="acres"
            step="0.01"
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="preparedBy">Prepared By</label>
          <input
            type="text"
            id="preparedBy"
            name="preparedBy"
            value={formData.preparedBy}
            onChange={handleChange}
            placeholder="Name, Title"
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="reviewedBy">Reviewed By</label>
          <input
            type="text"
            id="reviewedBy"
            name="reviewedBy"
            value={formData.reviewedBy}
            onChange={handleChange}
            placeholder="Name, Title"
          />
        </div>
      </div>
    </div>
  )
}

export default PropertyInfo
