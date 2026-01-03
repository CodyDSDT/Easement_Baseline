import { useState } from 'react'
import { generatePDF } from '../utils/pdfGenerator'
import { exportReport, clearReport } from '../utils/storage'

function ReviewAndExport({ reportData }) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGeneratePDF = async () => {
    setIsGenerating(true)
    try {
      await generatePDF(reportData)
      alert('PDF generated successfully!')
    } catch (error) {
      alert('Error generating PDF: ' + error.message)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleExportJSON = async () => {
    try {
      await exportReport()
      alert('Data exported successfully!')
    } catch (error) {
      alert('Error exporting data: ' + error.message)
    }
  }

  const handleClearData = async () => {
    if (window.confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      await clearReport()
      window.location.reload()
    }
  }

  const { propertyInfo, backgroundInfo, propertyDescription, ecologicalFeatures, photos } = reportData

  const completionStats = {
    propertyInfo: Object.values(propertyInfo).filter(v => v).length,
    backgroundInfo: Object.values(backgroundInfo).filter(v => v).length,
    propertyDescription: Object.values(propertyDescription).filter(v => v).length,
    ecologicalFeatures: Object.values(ecologicalFeatures).filter(v => v).length,
    photos: photos.length
  }

  return (
    <div className="form-section">
      <h2>Review & Export</h2>
      <p className="section-description">Review your data and generate the final baseline report</p>

      <div className="review-summary">
        <h3>Report Summary</h3>

        <div className="summary-section">
          <h4>Property Information</h4>
          <p><strong>Property Name:</strong> {propertyInfo.propertyName || 'Not specified'}</p>
          <p><strong>Location:</strong> {propertyInfo.county || 'Not specified'}, {propertyInfo.state || 'Not specified'}</p>
          <p><strong>Total Acreage:</strong> {propertyInfo.totalAcreage || 'Not specified'} acres</p>
          <p><strong>Closing Date:</strong> {propertyInfo.closingDate || 'Not specified'}</p>
          <p className="completion-stat">{completionStats.propertyInfo} fields completed</p>
        </div>

        <div className="summary-section">
          <h4>Background Information</h4>
          <p><strong>Conservation Values:</strong> {backgroundInfo.conservationValues ? 'Documented' : 'Not documented'}</p>
          <p className="completion-stat">{completionStats.backgroundInfo} fields completed</p>
        </div>

        <div className="summary-section">
          <h4>Property Description</h4>
          <p><strong>General Description:</strong> {propertyDescription.generalDescription ? 'Documented' : 'Not documented'}</p>
          <p><strong>Legal Description:</strong> {propertyDescription.legalDescription ? 'Documented' : 'Not documented'}</p>
          <p className="completion-stat">{completionStats.propertyDescription} fields completed</p>
        </div>

        <div className="summary-section">
          <h4>Ecological Features</h4>
          <p><strong>Soils:</strong> {ecologicalFeatures.soils ? 'Documented' : 'Not documented'}</p>
          <p><strong>Vegetation:</strong> {ecologicalFeatures.vegetationDescription ? 'Documented' : 'Not documented'}</p>
          <p className="completion-stat">{completionStats.ecologicalFeatures} fields completed</p>
        </div>

        <div className="summary-section">
          <h4>Photo Documentation</h4>
          <p><strong>Total Photos:</strong> {photos.length}</p>
          {photos.length > 0 && (
            <div className="photo-breakdown">
              {Array.from(new Set(photos.map(p => p.category))).map(cat => (
                <p key={cat}>
                  <strong>{cat}:</strong> {photos.filter(p => p.category === cat).length} photos
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="export-actions">
        <h3>Export Options</h3>

        <div className="action-grid">
          <div className="action-card">
            <h4>📄 Generate PDF Report</h4>
            <p>Create a formatted PDF baseline report following INLC template standards.</p>
            <button
              onClick={handleGeneratePDF}
              disabled={isGenerating}
              className="btn btn-primary btn-large"
            >
              {isGenerating ? 'Generating...' : 'Generate PDF'}
            </button>
          </div>

          <div className="action-card">
            <h4>💾 Export Data (JSON)</h4>
            <p>Download your report data as JSON for backup or import into other systems.</p>
            <button
              onClick={handleExportJSON}
              className="btn btn-secondary btn-large"
            >
              Export JSON
            </button>
          </div>

          <div className="action-card warning">
            <h4>🗑️ Clear All Data</h4>
            <p>Delete all report data and start fresh. This action cannot be undone.</p>
            <button
              onClick={handleClearData}
              className="btn btn-danger btn-large"
            >
              Clear Data
            </button>
          </div>
        </div>
      </div>

      <div className="offline-notice">
        <p>
          ℹ️ <strong>Offline Support:</strong> All your data is automatically saved to your device
          and will be available even without an internet connection.
        </p>
      </div>
    </div>
  )
}

export default ReviewAndExport
