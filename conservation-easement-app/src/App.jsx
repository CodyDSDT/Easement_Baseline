import { useState, useEffect } from 'react'
import './App.css'
import PropertyInfo from './components/PropertyInfo'
import BackgroundInfo from './components/BackgroundInfo'
import PropertyDescription from './components/PropertyDescription'
import EcologicalFeatures from './components/EcologicalFeatures'
import PhotoGallery from './components/PhotoGallery'
import ReviewAndExport from './components/ReviewAndExport'
import { loadReport, saveReport } from './utils/storage'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [reportData, setReportData] = useState({
    propertyInfo: {},
    backgroundInfo: {},
    propertyDescription: {},
    ecologicalFeatures: {},
    photos: []
  })

  // Load saved data on mount
  useEffect(() => {
    const loadData = async () => {
      const saved = await loadReport()
      if (saved) {
        setReportData(saved)
      }
    }
    loadData()
  }, [])

  // Auto-save on data change
  useEffect(() => {
    saveReport(reportData)
  }, [reportData])

  const updateSection = (section, data) => {
    setReportData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }))
  }

  const addPhoto = (photo) => {
    setReportData(prev => ({
      ...prev,
      photos: [...prev.photos, photo]
    }))
  }

  const deletePhoto = (index) => {
    setReportData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }))
  }

  const steps = [
    { name: 'Property Info', component: PropertyInfo },
    { name: 'Background', component: BackgroundInfo },
    { name: 'Property Description', component: PropertyDescription },
    { name: 'Ecological Features', component: EcologicalFeatures },
    { name: 'Photos', component: PhotoGallery },
    { name: 'Review & Export', component: ReviewAndExport }
  ]

  const CurrentComponent = steps[currentStep].component

  return (
    <div className="app">
      <header className="app-header">
        <h1>Conservation Easement Baseline Report</h1>
        <p className="subtitle">Inland Northwest Land Conservancy</p>
      </header>

      <nav className="progress-nav">
        {steps.map((step, index) => (
          <button
            key={index}
            className={`nav-step ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
            onClick={() => setCurrentStep(index)}
          >
            {step.name}
          </button>
        ))}
      </nav>

      <main className="app-main">
        <CurrentComponent
          data={currentStep === 4 ? reportData.photos : reportData[Object.keys(reportData)[currentStep]]}
          onUpdate={(data) => updateSection(Object.keys(reportData)[currentStep], data)}
          onAddPhoto={addPhoto}
          onDeletePhoto={deletePhoto}
          reportData={reportData}
        />
      </main>

      <footer className="app-footer">
        <button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className="btn btn-secondary"
        >
          Previous
        </button>
        <span className="step-indicator">
          Step {currentStep + 1} of {steps.length}
        </span>
        <button
          onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
          disabled={currentStep === steps.length - 1}
          className="btn btn-primary"
        >
          Next
        </button>
      </footer>
    </div>
  )
}

export default App
