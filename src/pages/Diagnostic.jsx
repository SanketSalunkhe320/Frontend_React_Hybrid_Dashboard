import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Diagnostic({ darkMode = false }) {
  const navigate = useNavigate()

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

  const MACHINE_ID = "AGV-TK-2025-001"
  const SOFTWARE_VERSION = "Taikisha Hybrid v1.0.3"

  const diagnostics = [
    `🆔 Machine ID: ${MACHINE_ID}`,
    `💽 Software Version: ${SOFTWARE_VERSION}`,
    '🔋 Battery status: OK',
    '⚙️ Motors: Running',
    '📡 Sensors: Active',
  ]

  // Theme colors
  const containerBg = darkMode ? "#1a1a1a" : "#f4f8fc"
  const cardBg = darkMode ? "#2b2b2b" : "#fff"
  const titleColor = darkMode ? "#aad8ff" : "#005baa"
  const itemBg = darkMode ? "#3a3a3a" : "#f1f6fb"
  const itemColor = darkMode ? "#eee" : "#333"
  const buttonBg = darkMode ? "linear-gradient(135deg, #005baa, #004080)" : "linear-gradient(135deg, #0077cc, #005baa)"
  const shadow = darkMode ? "0 6px 16px rgba(0, 0, 0, 0.4)" : "0 6px 16px rgba(0, 91, 170, 0.2)"
  const itemShadow = darkMode ? "inset 0 1px 3px rgba(0,0,0,0.2)" : "inset 0 1px 3px rgba(0,0,0,0.05)"
  const buttonShadow = darkMode ? "0 4px 10px rgba(0,0,0,0.3)" : "0 4px 10px rgba(0,0,0,0.15)"

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
        <h2 style={{ ...styles.title, color: titleColor }}>🛠️ Robot Diagnostics</h2>

        {/* Diagnostics list */}
        <ul style={styles.list}>
          {diagnostics.map((d, i) => (
            <li 
              key={i} 
              style={{ 
                ...styles.item, 
                background: itemBg, 
                color: itemColor,
                boxShadow: itemShadow
              }}
            >
              {d}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <button 
            style={{ 
              ...styles.button, 
              background: buttonBg,
              boxShadow: buttonShadow
            }} 
            onClick={() => navigate('/architecture')}
          >
            🌐 Network Architecture
          </button>
          <button 
            style={{ 
              ...styles.button, 
              background: buttonBg,
              boxShadow: buttonShadow
            }} 
            onClick={() => navigate('/servo-diagnostic')}
          >
            ⚙️ Servo Diagnostic
          </button>
          <button 
            style={{ 
              ...styles.button, 
              background: buttonBg,
              boxShadow: buttonShadow
            }} 
            onClick={() => navigate('/io-diagnostic')}
          >
            📊 IO Diagnostic
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: "20px",
    margin: 0,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  card: {
    padding: '30px',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '500px',
    marginTop: "40px"
  },
  title: {
    fontSize: '22px',
    marginBottom: '20px',
    textAlign: 'center'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 20px 0'
  },
  item: {
    padding: '12px',
    marginBottom: '10px',
    borderRadius: '8px',
    fontSize: '16px'
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  button: {
    padding: '12px',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out'
  }
}