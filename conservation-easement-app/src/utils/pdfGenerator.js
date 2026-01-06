import jsPDF from 'jspdf'

export const generatePDF = async (reportData) => {
  const { propertyInfo, backgroundInfo, propertyDescription, ecologicalFeatures, photos } = reportData

  const doc = new jsPDF()
  let yPos = 20
  const lineHeight = 7
  const pageHeight = doc.internal.pageSize.height
  const margin = 20

  // Helper to check if we need a new page
  const checkPageBreak = (additionalSpace = 10) => {
    if (yPos + additionalSpace > pageHeight - margin) {
      doc.addPage()
      yPos = 20
      return true
    }
    return false
  }

  // Helper to add text with wrapping
  const addText = (text, x, maxWidth = 170) => {
    const lines = doc.splitTextToSize(text || 'Not specified', maxWidth)
    const totalHeight = lines.length * lineHeight

    // Check if we need a new page before adding text
    if (yPos + totalHeight > pageHeight - margin) {
      doc.addPage()
      yPos = margin
    }

    lines.forEach((line, index) => {
      doc.text(line, x, yPos)
      yPos += lineHeight
    })

    return totalHeight
  }

  // Title Page
  doc.setFontSize(20)
  doc.setFont(undefined, 'bold')
  doc.text('Baseline Resource Report', 105, yPos, { align: 'center' })
  yPos += 15

  doc.setFontSize(16)
  doc.text(propertyInfo.propertyName || '[Property Name]', 105, yPos, { align: 'center' })
  yPos += 10

  doc.setFontSize(12)
  doc.setFont(undefined, 'normal')
  doc.text(`${propertyInfo.county || '[County]'}, ${propertyInfo.state || '[State]'}`, 105, yPos, { align: 'center' })
  yPos += 10

  if (propertyInfo.closingDate) {
    doc.text(`Closing Date: ${propertyInfo.closingDate}`, 105, yPos, { align: 'center' })
    yPos += 15
  }

  doc.setFontSize(10)
  doc.text('Inland NW Land Conservancy', 105, pageHeight - 30, { align: 'center' })
  doc.text('www.inlandnwland.org', 105, pageHeight - 25, { align: 'center' })
  doc.text('35 West Main Avenue, Suite 210', 105, pageHeight - 20, { align: 'center' })
  doc.text('Spokane, WA 99201', 105, pageHeight - 15, { align: 'center' })

  // New page for content
  doc.addPage()
  yPos = 20

  // I. Background Information
  doc.setFontSize(16)
  doc.setFont(undefined, 'bold')
  doc.text('I. Background Information', margin, yPos)
  yPos += 10

  doc.setFontSize(12)
  doc.text('Conservation Values and Reason for Acquisition', margin, yPos)
  yPos += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  addText(backgroundInfo.conservationValues, margin)
  yPos += 10

  checkPageBreak()
  doc.setFontSize(12)
  doc.setFont(undefined, 'bold')
  doc.text('Summary of Easement Prohibited Uses', margin, yPos)
  yPos += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  addText(backgroundInfo.prohibitedUses, margin)
  yPos += 10

  checkPageBreak()
  doc.setFontSize(12)
  doc.setFont(undefined, 'bold')
  doc.text('Summary of Easement Permitted Uses', margin, yPos)
  yPos += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  addText(backgroundInfo.permittedUses, margin)
  yPos += 15

  // II. Property Description
  checkPageBreak(20)
  doc.setFontSize(16)
  doc.setFont(undefined, 'bold')
  doc.text('II. Property Description', margin, yPos)
  yPos += 10

  doc.setFontSize(12)
  doc.text('General Description', margin, yPos)
  yPos += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  addText(propertyDescription.generalDescription, margin)
  yPos += 10

  checkPageBreak()
  doc.setFontSize(11)
  doc.setFont(undefined, 'bold')
  doc.text('General Attributes', margin, yPos)
  yPos += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  doc.text(`Total Acreage: ${propertyInfo.totalAcreage || 'Not specified'} acres`, margin, yPos)
  yPos += 7
  doc.text(`Easement Acreage: ${propertyInfo.easementAcreage || 'Not specified'} acres`, margin, yPos)
  yPos += 10

  checkPageBreak()
  doc.setFontSize(12)
  doc.setFont(undefined, 'bold')
  doc.text('Legal Description', margin, yPos)
  yPos += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  addText(propertyDescription.legalDescription, margin)
  yPos += 10

  checkPageBreak()
  doc.setFontSize(12)
  doc.setFont(undefined, 'bold')
  doc.text('Property Elevation and Topography', margin, yPos)
  yPos += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  addText(propertyDescription.elevation, margin)
  yPos += 10

  checkPageBreak()
  doc.setFontSize(12)
  doc.setFont(undefined, 'bold')
  doc.text('Current Land Use', margin, yPos)
  yPos += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  addText(propertyDescription.currentLandUse, margin)
  yPos += 15

  // III. Ecological Features
  checkPageBreak(20)
  doc.setFontSize(16)
  doc.setFont(undefined, 'bold')
  doc.text('III. Ecological Features', margin, yPos)
  yPos += 10

  doc.setFontSize(14)
  doc.text('Physical Features', margin, yPos)
  yPos += 10

  doc.setFontSize(12)
  doc.text('Soils', margin, yPos)
  yPos += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  addText(ecologicalFeatures.soils, margin)
  yPos += 10

  checkPageBreak()
  doc.setFontSize(12)
  doc.setFont(undefined, 'bold')
  doc.text('Water Resources', margin, yPos)
  yPos += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  addText(ecologicalFeatures.waterResources, margin)
  yPos += 10

  checkPageBreak()
  doc.setFontSize(12)
  doc.setFont(undefined, 'bold')
  doc.text('Climate Resilience', margin, yPos)
  yPos += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  addText(ecologicalFeatures.climateResilience, margin)
  yPos += 10

  checkPageBreak()
  doc.setFontSize(14)
  doc.setFont(undefined, 'bold')
  doc.text('Biological Features', margin, yPos)
  yPos += 10

  doc.setFontSize(12)
  doc.text('Vegetation', margin, yPos)
  yPos += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  addText(ecologicalFeatures.vegetationDescription, margin)
  yPos += 10

  checkPageBreak()
  doc.setFontSize(12)
  doc.setFont(undefined, 'bold')
  doc.text('Fish, Wildlife, and Species of Concern', margin, yPos)
  yPos += 7
  doc.setFontSize(10)
  doc.setFont(undefined, 'normal')
  addText(ecologicalFeatures.fishWildlifeSpecies, margin)
  yPos += 15

  // Photo Section
  if (photos.length > 0) {
    doc.addPage()
    yPos = 20

    doc.setFontSize(16)
    doc.setFont(undefined, 'bold')
    doc.text('Photo Plate', margin, yPos)
    yPos += 10

    for (let i = 0; i < photos.length; i++) {
      const photo = photos[i]

      // Check if we need a new page (image + caption needs ~100mm)
      if (yPos > pageHeight - 100) {
        doc.addPage()
        yPos = 20
      }

      try {
        // Add photo
        doc.addImage(photo.data, 'JPEG', margin, yPos, 170, 100)
        yPos += 105

        // Add caption
        doc.setFontSize(10)
        doc.setFont(undefined, 'italic')
        doc.text(`Figure ${i + 1}: ${photo.caption} (${photo.category})`, margin, yPos)
        yPos += 5

        if (photo.timestamp) {
          doc.setFontSize(8)
          doc.setFont(undefined, 'normal')
          doc.text(`Captured: ${new Date(photo.timestamp).toLocaleString()}`, margin, yPos)
          yPos += 5
        }

        if (photo.location) {
          doc.text(`Location: ${photo.location.latitude.toFixed(6)}, ${photo.location.longitude.toFixed(6)}`, margin, yPos)
          yPos += 5
        }

        yPos += 10
      } catch (error) {
        console.error('Error adding photo to PDF:', error)
      }
    }
  }

  // Save the PDF
  const filename = `baseline-report-${propertyInfo.propertyName || 'draft'}-${new Date().toISOString().split('T')[0]}.pdf`
  doc.save(filename)
}
