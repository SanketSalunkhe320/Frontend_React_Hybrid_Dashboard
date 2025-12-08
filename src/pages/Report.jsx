import React from 'react'

export default function Report({ darkMode }) {
  const generateReport = () => {
    const blob = new Blob([
      "📊 AGV Report: Sample Data\n\n- LCP1: MLS001, Speed 120 rpm\n- LCP2: MLS002, Speed 130 rpm\n- LCP3: MLS003, Speed 110 rpm"
    ], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'AGV_Report.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  // Theme colors
  const containerBg = darkMode ? "#1a1a1a" : "#f4f8fc"
  const cardBg = darkMode ? "#2b2b2b" : "#fff"
  const titleColor = darkMode ? "#aad8ff" : "#005baa"
  const subtitleColor = darkMode ? "#ccc" : "#666"
  const buttonBg = darkMode ? "linear-gradient(135deg, #005baa, #004080)" : "#005baa"

  return (
    <div style={{ ...styles.container, background: containerBg }}>
      <div style={{ ...styles.card, background: cardBg }}>
        <h2 style={{ ...styles.title, color: titleColor }}>📑 AGV Report</h2>
        <p style={{ ...styles.subtitle, color: subtitleColor }}>Generate and download AGV operation reports</p>
        <button 
          onClick={generateReport} 
          style={{ ...styles.button, background: buttonBg }}
          onMouseOver={e => e.currentTarget.style.opacity = 0.85}
          onMouseOut={e => e.currentTarget.style.opacity = 1}
        >
          Generate Report
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh'
  },
  card: {
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 6px 16px rgba(0, 91, 170, 0.2)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%'
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '14px',
    marginBottom: '20px'
  },
  button: {
    width: '100%',
    padding: '12px',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  }
}
