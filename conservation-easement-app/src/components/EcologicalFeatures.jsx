import { useState } from 'react'

function EcologicalFeatures({ data = {}, onUpdate }) {
  const [formData, setFormData] = useState({
    soils: '',
    waterResources: '',
    geologicFeatures: '',
    climateResilience: '',
    vegetationDescription: '',
    fishWildlifeSpecies: '',
    observedMammals: '',
    observedBirds: '',
    observedReptiles: '',
    observedFish: '',
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
      <h2>Ecological Features</h2>
      <p className="section-description">Physical and biological features of the property</p>

      <h3 className="subsection-title">Physical Features</h3>

      <div className="form-group full-width">
        <label htmlFor="soils">Soils</label>
        <textarea
          id="soils"
          name="soils"
          value={formData.soils}
          onChange={handleChange}
          rows="5"
          placeholder="Describe soil types from USDA Soil Survey. Include: soil unit name/number, slope, formation, composition, drainage, water supply, flooding, depth to water table, erosion potential, native vegetation..."
        />
        <small>Reference USDA NRCS Soil Survey for county</small>
      </div>

      <div className="form-group full-width">
        <label htmlFor="waterResources">Water Resources</label>
        <textarea
          id="waterResources"
          name="waterResources"
          value={formData.waterResources}
          onChange={handleChange}
          rows="4"
          placeholder="Describe wetlands (with codes), creeks/corridors, springs/seeps, aquifer recharge areas, river/lake shoreline..."
        />
        <small>Consider: wetland codes, creek corridors, springs, aquifer recharge, shoreline length/buffer</small>
      </div>

      <div className="form-group full-width">
        <label htmlFor="geologicFeatures">Geologic Features and Units</label>
        <textarea
          id="geologicFeatures"
          name="geologicFeatures"
          value={formData.geologicFeatures}
          onChange={handleChange}
          rows="4"
          placeholder="Describe geologic units from USGS Quadrangle. Include unit codes and descriptions..."
        />
      </div>

      <div className="form-group full-width">
        <label htmlFor="climateResilience">Climate Resilience</label>
        <textarea
          id="climateResilience"
          name="climateResilience"
          value={formData.climateResilience}
          onChange={handleChange}
          rows="4"
          placeholder="Describe property resilience rating (far above average, above average, average, below average, far below average) based on landscape diversity and local connectedness..."
        />
        <small>Reference TNC/FLO Analytics climate resilience dataset</small>
      </div>

      <h3 className="subsection-title">Biological Features</h3>

      <div className="form-group full-width">
        <label htmlFor="vegetationDescription">Vegetation Zone Descriptions</label>
        <textarea
          id="vegetationDescription"
          name="vegetationDescription"
          value={formData.vegetationDescription}
          onChange={handleChange}
          rows="6"
          placeholder="Describe vegetation zones observed during baseline site visit. Include dominant/indicator species, notable invasives, ground cover, signs of disturbance (fire, grazing, weeds, timber harvest)..."
        />
        <small>Zones may include: upland forest (dry/mesic), riparian, wetland, shrub-steppe, grassland, disturbed/developed edges, rock outcrop, dry meadow, talus</small>
      </div>

      <div className="form-group full-width">
        <label htmlFor="fishWildlifeSpecies">Fish, Wildlife, and Species of Concern</label>
        <textarea
          id="fishWildlifeSpecies"
          name="fishWildlifeSpecies"
          value={formData.fishWildlifeSpecies}
          onChange={handleChange}
          rows="4"
          placeholder="List species of concern according to WA Dept of Fish & Wildlife or ID Fish & Game..."
        />
      </div>

      <h3 className="subsection-title">Observed Wildlife</h3>
      <p className="field-note">Document wildlife observed by landowner or during site visits</p>

      <div className="form-group full-width">
        <label htmlFor="observedMammals">Mammals Observed</label>
        <textarea
          id="observedMammals"
          name="observedMammals"
          value={formData.observedMammals}
          onChange={handleChange}
          rows="3"
          placeholder="List common and scientific names of observed mammals..."
        />
      </div>

      <div className="form-group full-width">
        <label htmlFor="observedBirds">Birds Observed</label>
        <textarea
          id="observedBirds"
          name="observedBirds"
          value={formData.observedBirds}
          onChange={handleChange}
          rows="3"
          placeholder="List bird species observed (can reference eBird data)..."
        />
        <small>Consider using eBird citizen science data for this property location</small>
      </div>

      <div className="form-group full-width">
        <label htmlFor="observedReptiles">Amphibians and Reptiles Observed</label>
        <textarea
          id="observedReptiles"
          name="observedReptiles"
          value={formData.observedReptiles}
          onChange={handleChange}
          rows="2"
          placeholder="List observed amphibians and reptiles..."
        />
      </div>

      <div className="form-group full-width">
        <label htmlFor="observedFish">Fish and Aquatic Invertebrates Observed</label>
        <textarea
          id="observedFish"
          name="observedFish"
          value={formData.observedFish}
          onChange={handleChange}
          rows="2"
          placeholder="List observed fish and aquatic invertebrates..."
        />
      </div>
    </div>
  )
}

export default EcologicalFeatures
