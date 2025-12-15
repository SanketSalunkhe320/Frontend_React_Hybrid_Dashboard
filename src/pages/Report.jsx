import React, { useEffect } from 'react'

export default function Report({ darkMode = false }) {
  // Set global background color
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    if (darkMode) {
      root.style.backgroundColor = "#1a1a1a";
      body.style.backgroundColor = "#1a1a1a";
      body.style.color = "#eee";
    } else {
      root.style.backgroundColor = "#f4f8fc";
      body.style.backgroundColor = "#f4f8fc";
      body.style.color = "#333";
    }
    
    // Cleanup function to reset styles
    return () => {
      root.style.backgroundColor = "";
      body.style.backgroundColor = "";
      body.style.color = "";
    };
  }, [darkMode]);

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
  const shadow = darkMode ? "0 6px 16px rgba(0, 0, 0, 0.4)" : "0 6px 16px rgba(0, 91, 170, 0.2)"

  return (
    <div style={{ 
      ...styles.container, 
      backgroundColor: containerBg,
      minHeight: "100vh",
      width: "100%",
      position: "relative"
    }}>
      <div style={{ 
        ...styles.card, 
        backgroundColor: cardBg,
        boxShadow: shadow,
        color: darkMode ? "#eee" : "#333"
      }}>
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
    padding: "20px",
    margin: 0,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  card: {
    padding: '40px 30px',
    borderRadius: '12px',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
    margin: "20px"
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