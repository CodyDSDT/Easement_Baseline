import localforage from 'localforage'

// Configure localforage for better performance
localforage.config({
  name: 'ConservationEasementApp',
  storeName: 'reports',
  description: 'Offline storage for baseline reports'
})

const REPORT_KEY = 'current_report'

export const saveReport = async (reportData) => {
  try {
    await localforage.setItem(REPORT_KEY, reportData)
    return true
  } catch (error) {
    console.error('Error saving report:', error)
    return false
  }
}

export const loadReport = async () => {
  try {
    const report = await localforage.getItem(REPORT_KEY)
    return report
  } catch (error) {
    console.error('Error loading report:', error)
    return null
  }
}

export const clearReport = async () => {
  try {
    await localforage.removeItem(REPORT_KEY)
    return true
  } catch (error) {
    console.error('Error clearing report:', error)
    return false
  }
}

export const exportReport = async () => {
  try {
    const report = await loadReport()
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `baseline-report-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
    return true
  } catch (error) {
    console.error('Error exporting report:', error)
    return false
  }
}
