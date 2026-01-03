import { useState, useRef } from 'react'

function PhotoGallery({ data = [], onAddPhoto, onDeletePhoto }) {
  const [cameraActive, setCameraActive] = useState(false)
  const [caption, setCaption] = useState('')
  const [category, setCategory] = useState('general')
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const streamRef = useRef(null)

  const categories = [
    'General',
    'Development Envelope',
    'Vegetation Zones',
    'Water Resources',
    'Wildlife',
    'Boundaries',
    'Human-Made Features',
    'Other'
  ]

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: 1920, height: 1080 },
        audio: false
      })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        streamRef.current = stream
        setCameraActive(true)
      }
    } catch (error) {
      alert('Unable to access camera: ' + error.message)
    }
  }

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
      setCameraActive(false)
    }
  }

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(video, 0, 0)

      canvas.toBlob((blob) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          const photo = {
            id: Date.now(),
            data: reader.result,
            caption: caption,
            category: category,
            timestamp: new Date().toISOString(),
            location: null
          }

          // Try to get geolocation
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                photo.location = {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude
                }
                onAddPhoto(photo)
              },
              () => {
                onAddPhoto(photo)
              }
            )
          } else {
            onAddPhoto(photo)
          }

          setCaption('')
          stopCamera()
        }
        reader.readAsDataURL(blob)
      }, 'image/jpeg', 0.9)
    }
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const photo = {
          id: Date.now(),
          data: reader.result,
          caption: caption || 'Uploaded photo',
          category: category,
          timestamp: new Date().toISOString(),
          location: null
        }
        onAddPhoto(photo)
        setCaption('')
      }
      reader.readAsDataURL(file)
    }
  }

  const filterByCategory = (cat) => {
    if (cat === 'all') return data
    return data.filter(photo => photo.category.toLowerCase() === cat.toLowerCase())
  }

  const [filterCategory, setFilterCategory] = useState('all')
  const filteredPhotos = filterByCategory(filterCategory)

  return (
    <div className="form-section">
      <h2>Photo Documentation</h2>
      <p className="section-description">Capture and organize photos for the baseline report</p>

      {!cameraActive ? (
        <div className="photo-controls">
          <div className="form-group">
            <label htmlFor="category">Photo Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat.toLowerCase()}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="caption">Photo Caption</label>
            <input
              type="text"
              id="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Enter photo caption..."
            />
          </div>

          <div className="button-group">
            <button onClick={startCamera} className="btn btn-primary">
              📷 Open Camera
            </button>
            <label className="btn btn-secondary file-upload-btn">
              📁 Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>
      ) : (
        <div className="camera-view">
          <video ref={videoRef} autoPlay playsInline className="camera-preview" />
          <canvas ref={canvasRef} style={{ display: 'none' }} />
          <div className="camera-controls">
            <button onClick={capturePhoto} className="btn btn-primary btn-large">
              📸 Capture Photo
            </button>
            <button onClick={stopCamera} className="btn btn-secondary">
              ✕ Cancel
            </button>
          </div>
        </div>
      )}

      <div className="photo-gallery">
        <div className="gallery-header">
          <h3>Photos ({data.length})</h3>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="category-filter"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat.toLowerCase()}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="photo-grid">
          {filteredPhotos.length === 0 ? (
            <p className="no-photos">No photos yet. Start by capturing or uploading a photo.</p>
          ) : (
            filteredPhotos.map((photo, index) => (
              <div key={photo.id} className="photo-card">
                <img src={photo.data} alt={photo.caption} />
                <div className="photo-info">
                  <span className="photo-category">{photo.category}</span>
                  <p className="photo-caption">{photo.caption}</p>
                  <small className="photo-timestamp">
                    {new Date(photo.timestamp).toLocaleString()}
                  </small>
                  {photo.location && (
                    <small className="photo-location">
                      📍 {photo.location.latitude.toFixed(6)}, {photo.location.longitude.toFixed(6)}
                    </small>
                  )}
                </div>
                <button
                  onClick={() => onDeletePhoto(data.indexOf(photo))}
                  className="btn-delete"
                  title="Delete photo"
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery
