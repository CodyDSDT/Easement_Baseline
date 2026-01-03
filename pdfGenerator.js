// Professional PDF generation for Conservation Easement Baseline Reports
// Adapted from conservation-easement-app for vanilla JavaScript

async function generateBaselinePDF(reportData) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let yPos = 20;
  const lineHeight = 7;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 20;

  // Helper to check if we need a new page
  const checkPageBreak = (additionalSpace = 10) => {
    if (yPos + additionalSpace > pageHeight - margin) {
      doc.addPage();
      yPos = 20;
      return true;
    }
    return false;
  };

  // Helper to add text with wrapping - now properly handles yPos during page breaks
  const addText = (text, x = margin, maxWidth = 170) => {
    if (!text || text.trim() === '') {
      text = 'Not specified';
    }

    const lines = doc.splitTextToSize(text, maxWidth);

    // Check if we have enough space for at least the first 3 lines
    // This prevents starting a paragraph at the bottom of a page
    const estimatedHeight = Math.min(lines.length, 3) * lineHeight;
    if (yPos + estimatedHeight > pageHeight - margin) {
      doc.addPage();
      yPos = 20;
    }

    // Now render each line, properly tracking yPos
    lines.forEach((line) => {
      if (yPos + lineHeight > pageHeight - margin) {
        doc.addPage();
        yPos = 20;
      }
      doc.text(line, x, yPos);
      yPos += lineHeight;
    });
  };

  // ========== TITLE PAGE ==========
  doc.setFontSize(20);
  doc.setFont(undefined, 'bold');
  doc.text('Baseline Resource Report', 105, yPos, { align: 'center' });
  yPos += 15;

  doc.setFontSize(16);
  doc.text(reportData.property.propertyName || '[Property Name]', 105, yPos, { align: 'center' });
  yPos += 10;

  doc.setFontSize(12);
  doc.setFont(undefined, 'normal');
  doc.text(`${reportData.property.county || '[County]'}, ${reportData.property.state || '[State]'}`, 105, yPos, { align: 'center' });
  yPos += 10;

  if (reportData.property.closingDate) {
    doc.text(`Closing Date: ${reportData.property.closingDate}`, 105, yPos, { align: 'center' });
    yPos += 15;
  }

  if (reportData.meta.preparer) {
    doc.setFontSize(11);
    doc.text(`Prepared by: ${reportData.meta.preparer}`, 105, yPos, { align: 'center' });
    yPos += 10;
  }

  if (reportData.property.reviewer) {
    doc.setFontSize(11);
    doc.text(`Reviewed by: ${reportData.property.reviewer}`, 105, yPos, { align: 'center' });
    yPos += 15;
  }

  // Footer on title page
  doc.setFontSize(10);
  doc.text('Inland NW Land Conservancy', 105, pageHeight - 30, { align: 'center' });
  doc.text('www.inlandnwland.org', 105, pageHeight - 25, { align: 'center' });
  doc.text('35 West Main Avenue, Suite 210', 105, pageHeight - 20, { align: 'center' });
  doc.text('Spokane, WA 99201', 105, pageHeight - 15, { align: 'center' });

  // ========== ACKNOWLEDGEMENT LETTER PAGE ==========
  doc.addPage();
  yPos = 20;

  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.text('Baseline Resource Report Acknowledgement Letter', margin, yPos);
  yPos += 15;

  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');

  const acknowledgementText = `This acknowledgement is made by the Property Owner (referred to in this acknowledgement as the "Grantor") and INLAND NORTHWEST LAND CONSERVANCY, whose address is 35 W. Main Avenue, Ste 210, Spokane, WA 99201 (referred to in this acknowledgement as "INLC").

1. The Grantor is the owner of approximately ${reportData.property.totalAcreage || '[___]'} acres of real Property located in ${reportData.property.county || '[___]'} County, ${reportData.property.state || '[___]'} (referred to in this acknowledgement as the "Property") and has granted INLC a conservation easement on the entirety of that Property.

2. Grantor has made the Property available to INLC for the purpose of gathering information and data about the condition of the Conservation Values identified in the Conservation Easement as of the date of the grant. This information and data have been compiled into a Baseline Report, entitled "Baseline Resource Report, ${reportData.property.propertyName || '[Property Name]'} Conservation Easement", dated ${new Date().toLocaleDateString('en-US', {month: 'long', year: 'numeric'})} (the "Baseline Report").

3. In accordance with Treasury Regulation Section 1.170A-14(g)(5)(i), Grantor and INLC hereby acknowledge, declare, and agree that they have reviewed the information contained in the Baseline Report and that the Baseline Report provides an accurate representation of the condition of the Conservation Values to be protected by this Conservation Easement at the time of the transfer.`;

  addText(acknowledgementText);
  yPos += 20;

  // Signature blocks
  doc.setFont(undefined, 'bold');
  doc.text('Grantor: _________________________________', margin, yPos);
  doc.text('Date: ______________', 140, yPos);
  yPos += 15;

  doc.text('Inland Northwest Land Conservancy: _________________________________', margin, yPos);
  doc.text('Date: ______________', 140, yPos);
  yPos += 5;
  doc.setFont(undefined, 'normal');
  doc.setFontSize(9);
  if (reportData.meta.preparer) {
    doc.text(reportData.meta.preparer + ', Representative', margin, yPos);
  }

  // ========== PURPOSE OF BASELINE PAGE ==========
  doc.addPage();
  yPos = 20;

  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.text('Purpose of Baseline Documentation Report', margin, yPos);
  yPos += 12;

  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  doc.text('The purposes of this Baseline Documentation Report are:', margin, yPos);
  yPos += 10;

  const purposes = [
    `To document the significant Conservation Values on the ${reportData.property.propertyName || '[Property]'} Property that are the subject of, and protected by the Conservation Easement;`,
    `To describe existing land uses and development trends, both on the ${reportData.property.propertyName || '[Property]'} Property and in the surrounding area;`,
    'To provide a baseline of biological information, so that future conditions and trends, both natural and human-made, can be evaluated; and',
    `To identify and document the condition of the Conservation Values, including the natural resources, conservation interests, and cultural improvements associated with the ${reportData.property.propertyName || '[Property]'} Property at the time of granting the Conservation Easement, and thereby to provide a baseline of information in the event that the holder of the Easement determines it is necessary under the terms of the Easement to exercise its rights to enjoin activities that are inconsistent with the terms of the Easement and/or enforce the reasonable restoration of such areas or features of the Property as may be damaged by such inconsistent activities.`
  ];

  purposes.forEach((purpose, index) => {
    checkPageBreak();
    doc.text(`${index + 1}. `, margin, yPos);
    const purposeLines = doc.splitTextToSize(purpose, 160);
    purposeLines.forEach((line, lineIndex) => {
      checkPageBreak();
      doc.text(line, margin + 10, yPos + (lineIndex * lineHeight));
    });
    yPos += (purposeLines.length * lineHeight) + 5;
  });

  // ========== CONTENT PAGES ==========
  doc.addPage();
  yPos = 20;

  // I. BACKGROUND INFORMATION
  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.text('I. Background Information', margin, yPos);
  yPos += 10;

  doc.setFontSize(12);
  doc.text('Conservation Values and Reason for Acquisition', margin, yPos);
  yPos += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  addText(reportData.background.conservationValues);
  yPos += 10;

  // Key Conservation Values (if any selected)
  if (reportData.background.selectedValues && reportData.background.selectedValues.length > 0) {
    checkPageBreak();
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Key Conservation Values', margin, yPos);
    yPos += 7;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    reportData.background.selectedValues.forEach(value => {
      checkPageBreak();
      doc.text(`• ${value}`, margin + 5, yPos);
      yPos += 6;
    });
    yPos += 5;
  }

  checkPageBreak();
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text('Summary of Easement Prohibited Uses', margin, yPos);
  yPos += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'italic');
  doc.text('Please refer to the recorded Conservation Easement for a full description of prohibited uses.', margin, yPos);
  yPos += 7;
  doc.setFont(undefined, 'normal');
  const prohibitedIntro = 'Any activity on or use of the Protected Property must be consistent with the Conservation Purposes of this Grant and Easement. Without limiting the generality of the foregoing, the following activities and uses are expressly prohibited:';
  addText(prohibitedIntro);
  yPos += 5;
  addText(reportData.background.prohibitedUses);
  yPos += 10;

  checkPageBreak();
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text('Summary of Easement Permitted Uses (Reserved Rights)', margin, yPos);
  yPos += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'italic');
  doc.text('Please refer to the recorded Conservation Easement for a full description of permitted uses.', margin, yPos);
  yPos += 7;
  doc.setFont(undefined, 'normal');
  const permittedIntro = 'Grantor hereby reserves the right to make the following uses of the Protected Property:';
  addText(permittedIntro);
  yPos += 5;
  addText(reportData.background.permittedUses);
  yPos += 10;

  checkPageBreak();
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text('Pre-Existing Easements and Restrictions', margin, yPos);
  yPos += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  if (reportData.background.existingEasements) {
    addText(reportData.background.existingEasements);
  } else {
    doc.text('There are no known pre-existing easements or restrictions associated with this Property.', margin, yPos);
    yPos += 7;
    doc.text('Refer to title report for a full description of the Property\'s title history.', margin, yPos);
    yPos += 7;
  }
  yPos += 15;

  // II. PROPERTY DESCRIPTION
  checkPageBreak(20);
  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.text('II. Property Description', margin, yPos);
  yPos += 10;

  doc.setFontSize(12);
  doc.text('General Description', margin, yPos);
  yPos += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  addText(reportData.description.generalDescription);
  yPos += 10;

  checkPageBreak();
  doc.setFontSize(11);
  doc.setFont(undefined, 'bold');
  doc.text('General Attributes', margin, yPos);
  yPos += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  doc.text(`Property Number: ${reportData.property.propertyNumber || 'Not specified'}`, margin, yPos);
  yPos += 7;
  doc.text(`Total Acreage: ${reportData.property.totalAcreage || 'Not specified'} acres`, margin, yPos);
  yPos += 7;
  doc.text(`Easement Acreage: ${reportData.property.easementAcreage || 'Not specified'} acres`, margin, yPos);
  yPos += 10;

  checkPageBreak();
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text('Legal Description', margin, yPos);
  yPos += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  addText(reportData.description.legalDescription);
  yPos += 10;

  // Location and Access
  if (reportData.description.directions || reportData.description.nearestAddress) {
    checkPageBreak();
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Location and Access', margin, yPos);
    yPos += 7;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');

    if (reportData.description.nearestAddress) {
      doc.text(`Nearest Address: ${reportData.description.nearestAddress}`, margin, yPos);
      yPos += 7;
    }

    if (reportData.description.travelTime) {
      doc.text(`Travel Time: ${reportData.description.travelTime} minutes`, margin, yPos);
      yPos += 7;
    }

    if (reportData.description.mileage) {
      doc.text(`Mileage: ${reportData.description.mileage} miles`, margin, yPos);
      yPos += 7;
    }

    if (reportData.description.directions) {
      yPos += 3;
      doc.setFont(undefined, 'bold');
      doc.text('Driving Directions:', margin, yPos);
      yPos += 7;
      doc.setFont(undefined, 'normal');
      addText(reportData.description.directions);
    }
    yPos += 10;
  }

  checkPageBreak();
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text('Property Elevation and Topography', margin, yPos);
  yPos += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  addText(reportData.description.elevation);
  yPos += 10;

  if (reportData.description.history) {
    checkPageBreak();
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Property History & Use', margin, yPos);
    yPos += 7;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    addText(reportData.description.history);
    yPos += 10;
  }

  checkPageBreak();
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text('Current Land Use / Development Envelope', margin, yPos);
  yPos += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  addText(reportData.description.landUse);
  yPos += 10;

  if (reportData.description.humanFeatures) {
    checkPageBreak();
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Human-Made Features', margin, yPos);
    yPos += 7;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    addText(reportData.description.humanFeatures);
    yPos += 10;
  }

  if (reportData.description.publicBenefit) {
    checkPageBreak();
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Public Benefit Documentation', margin, yPos);
    yPos += 7;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    addText(reportData.description.publicBenefit);
    yPos += 15;
  }

  // III. ECOLOGICAL FEATURES
  checkPageBreak(20);
  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.text('III. Ecological Features', margin, yPos);
  yPos += 10;

  doc.setFontSize(14);
  doc.text('Physical Features', margin, yPos);
  yPos += 10;

  doc.setFontSize(12);
  doc.text('Soils', margin, yPos);
  yPos += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  addText(reportData.ecology.soils);
  yPos += 10;

  checkPageBreak();
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text('Water Resources', margin, yPos);
  yPos += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  addText(reportData.ecology.water);
  yPos += 10;

  if (reportData.ecology.geology) {
    checkPageBreak();
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Geologic Features', margin, yPos);
    yPos += 7;
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    addText(reportData.ecology.geology);
    yPos += 10;
  }

  checkPageBreak();
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text('Climate Resilience', margin, yPos);
  yPos += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  addText(reportData.ecology.resilience);
  yPos += 10;

  checkPageBreak();
  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.text('Biological Features', margin, yPos);
  yPos += 10;

  doc.setFontSize(12);
  doc.text('Vegetation Zones', margin, yPos);
  yPos += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  addText(reportData.ecology.vegetation);
  yPos += 10;

  checkPageBreak();
  doc.setFontSize(12);
  doc.setFont(undefined, 'bold');
  doc.text('Wildlife Observations', margin, yPos);
  yPos += 7;
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  addText(reportData.ecology.wildlife);
  yPos += 15;

  // SPECIES TABLES
  if (reportData.ecology.selectedSpecies && reportData.ecology.selectedSpecies.length > 0) {
    checkPageBreak(20);
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('Species Inventory', margin, yPos);
    yPos += 10;

    // Group species by category
    const speciesGroups = {};
    reportData.ecology.selectedSpecies.forEach((species) => {
      if (!speciesGroups[species.group]) {
        speciesGroups[species.group] = [];
      }
      speciesGroups[species.group].push(species);
    });

    // Define group order for consistent display
    const groupOrder = ['Tree', 'Shrub', 'Grass', 'Forb', 'Bird', 'Mammal', 'Invasive Plant'];

    groupOrder.forEach((groupName) => {
      if (!speciesGroups[groupName]) return;

      const species = speciesGroups[groupName];
      checkPageBreak(30);

      doc.setFontSize(12);
      doc.setFont(undefined, 'bold');
      doc.text(`${groupName}s`, margin, yPos);
      yPos += 10;

      // Table headers
      doc.setFontSize(9);
      doc.setFont(undefined, 'bold');
      doc.text('Common Name', margin, yPos);
      doc.text('Scientific Name', margin + 60, yPos);
      doc.text('Status', margin + 120, yPos);
      yPos += 5;

      // Draw header line
      doc.setLineWidth(0.5);
      doc.line(margin, yPos, margin + 170, yPos);
      yPos += 5;

      // Table rows
      doc.setFont(undefined, 'normal');
      species.forEach((sp) => {
        // Check if we need more space for this row
        checkPageBreak(15);

        doc.setFontSize(9);
        doc.text(sp.commonName, margin, yPos);
        doc.setFont(undefined, 'italic');
        doc.text(sp.scientificName, margin + 60, yPos);
        doc.setFont(undefined, 'normal');

        if (sp.invasive) {
          doc.setTextColor(140, 47, 57); // Red color for invasive
          doc.text('INVASIVE', margin + 120, yPos);
          doc.setTextColor(0, 0, 0); // Reset to black
        } else {
          doc.text(sp.nativeStatus, margin + 120, yPos);
        }

        yPos += 5;

        // Add habitat notes if available
        if (sp.habitatNotes) {
          doc.setFontSize(8);
          doc.setTextColor(100, 100, 100); // Gray color
          const habitatLines = doc.splitTextToSize(sp.habitatNotes, 165);
          habitatLines.forEach((line) => {
            checkPageBreak(8);
            doc.text(line, margin + 5, yPos);
            yPos += 4;
          });
          doc.setTextColor(0, 0, 0); // Reset to black
          yPos += 2;
        }

        // Add management notes for invasive species
        if (sp.invasive && sp.managementNotes) {
          doc.setFontSize(8);
          doc.setTextColor(140, 47, 57); // Red color
          doc.setFont(undefined, 'bold');
          doc.text('Management: ', margin + 5, yPos);
          doc.setFont(undefined, 'normal');
          yPos += 4;
          const mgmtLines = doc.splitTextToSize(sp.managementNotes, 165);
          mgmtLines.forEach((line) => {
            checkPageBreak(8);
            doc.text(line, margin + 5, yPos);
            yPos += 4;
          });
          doc.setTextColor(0, 0, 0); // Reset to black
          yPos += 2;
        }

        yPos += 3; // Spacing between species
      });

      yPos += 10; // Spacing between groups
    });

    yPos += 5;
  }

  // (Map section is optional and numbered separately if photos exist)
  const mapSectionNum = (reportData.photos && reportData.photos.length > 0) ? 'IV' : 'IV';

  if (reportData.mapping && reportData.mapping.features && reportData.mapping.features.length > 0) {
    checkPageBreak(20);
    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text(`${mapSectionNum}. Map & Boundaries`, margin, yPos);
    yPos += 10;

    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text(`Total features drawn: ${reportData.mapping.features.length}`, margin, yPos);
    yPos += 7;

    // Count feature types from GeoJSON geometry types
    const polygons = reportData.mapping.features.filter(f => f.geometry.type === 'Polygon' || f.geometry.type === 'MultiPolygon').length;
    const polylines = reportData.mapping.features.filter(f => f.geometry.type === 'LineString' || f.geometry.type === 'MultiLineString').length;
    const markers = reportData.mapping.features.filter(f => f.geometry.type === 'Point').length;

    if (polygons > 0) {
      doc.text(`• ${polygons} polygon(s) (boundaries/areas)`, margin + 5, yPos);
      yPos += 6;
    }
    if (polylines > 0) {
      doc.text(`• ${polylines} polyline(s) (trails/paths)`, margin + 5, yPos);
      yPos += 6;
    }
    if (markers > 0) {
      doc.text(`• ${markers} marker(s) (points of interest)`, margin + 5, yPos);
      yPos += 6;
    }
    yPos += 10;

    // Try to add the map canvas image if available
    try {
      const canvas = document.getElementById('mapCanvas');
      if (canvas) {
        checkPageBreak(120);
        doc.setFontSize(11);
        doc.setFont(undefined, 'bold');
        doc.text('Property Map', margin, yPos);
        yPos += 7;

        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 170;
        const imgHeight = (canvas.height / canvas.width) * imgWidth;
        doc.addImage(imgData, 'PNG', margin, yPos, imgWidth, imgHeight);
        yPos += imgHeight + 10;
      }
    } catch (error) {
      console.warn('Could not add map canvas to PDF:', error);
    }
  }

  // CONCLUDING REMARKS
  checkPageBreak(20);
  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.text('IV. Concluding Remarks', margin, yPos);
  yPos += 10;

  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  const currentYear = new Date().getFullYear();
  doc.text(`This baseline data inventory is an accurate representation of the ${reportData.property.propertyName || '[Property]'} Property.`, margin, yPos);
  yPos += 7;
  doc.text(`The predominant aerial photo used in this baseline is ${currentYear} imagery.`, margin, yPos);
  yPos += 10;
  doc.text('This is a business record of Inland Northwest Land Conservancy prepared in its normal course of business.', margin, yPos);
  yPos += 15;

  // V. PHOTO DOCUMENTATION
  if (reportData.photos && reportData.photos.length > 0) {
    doc.addPage();
    yPos = 20;

    doc.setFontSize(16);
    doc.setFont(undefined, 'bold');
    doc.text('V. Photo Documentation', margin, yPos);
    yPos += 10;

    for (let i = 0; i < reportData.photos.length; i++) {
      const photo = reportData.photos[i];

      // Check if we need a new page (image + caption needs ~110mm)
      if (yPos > pageHeight - 110) {
        doc.addPage();
        yPos = 20;
      }

      try {
        // Add photo
        doc.addImage(photo.dataUrl, 'JPEG', margin, yPos, 170, 100);
        yPos += 105;

        // Add caption
        doc.setFontSize(10);
        doc.setFont(undefined, 'italic');
        doc.text(`Figure ${i + 1}: ${photo.caption || 'No caption'} (${photo.category})`, margin, yPos);
        yPos += 5;

        if (photo.takenAt) {
          doc.setFontSize(8);
          doc.setFont(undefined, 'normal');
          doc.text(`Captured: ${new Date(photo.takenAt).toLocaleString()}`, margin, yPos);
          yPos += 5;
        }

        if (photo.coords) {
          doc.text(`Location: ${photo.coords}`, margin, yPos);
          yPos += 5;
        }

        yPos += 10;
      } catch (error) {
        console.error('Error adding photo to PDF:', error);
        doc.setFontSize(10);
        doc.setFont(undefined, 'italic');
        doc.text(`[Photo ${i + 1} could not be embedded]`, margin, yPos);
        yPos += 10;
      }
    }
  }

  // Save the PDF
  const filename = `baseline-report-${reportData.property.propertyName || reportData.meta.reportName || 'draft'}-${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(filename);

  return filename;
}
