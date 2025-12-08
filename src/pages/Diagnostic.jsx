import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Diagnostic({ darkMode }) {
  const navigate = useNavigate()

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

  return (
    <div style={{ ...styles.container, background: containerBg }}>
      <div style={{ ...styles.card, background: cardBg }}>
        <h2 style={{ ...styles.title, color: titleColor }}>🛠️ Robot Diagnostics</h2>

        {/* Diagnostics list */}
        <ul style={styles.list}>
          {diagnostics.map((d, i) => (
            <li key={i} style={{ ...styles.item, background: itemBg, color: itemColor }}>{d}</li>
          ))}
        </ul>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <button style={{ ...styles.button, background: buttonBg }} onClick={() => navigate('/architecture')}>
            🌐 Network Architecture
          </button>
          <button style={{ ...styles.button, background: buttonBg }} onClick={() => navigate('/servo-diagnostic')}>
            ⚙️ Servo Diagnostic
          </button>
          <button style={{ ...styles.button, background: buttonBg }} onClick={() => navigate('/io-diagnostic')}>
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
    paddingTop: '40px',
    minHeight: '80vh'
  },
  card: {
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 6px 16px rgba(0, 91, 170, 0.2)',
    width: '100%',
    maxWidth: '500px'
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
    fontSize: '16px',
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
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
    transition: 'all 0.2s ease-in-out',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
  }
}
