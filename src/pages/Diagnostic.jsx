import React from 'react'
import { useNavigate } from 'react-router-dom' // ✅ for navigation

export default function Diagnostic() {
  const navigate = useNavigate()

  const diagnostics = [
    '🔋 Battery status: OK',
    '⚙️ Motors: Running',
    '📡 Sensors: Active',
  ]

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🛠️ Robot Diagnostics</h2>

        {/* Diagnostics list */}
        <ul style={styles.list}>
          {diagnostics.map((d, i) => (
            <li key={i} style={styles.item}>{d}</li>
          ))}
        </ul>

        {/* Buttons section */}
        <div style={styles.buttonGroup}>
          <button style={styles.button} onClick={() => navigate('/architecture')}>
            🌐 Network Architecture
          </button>
          <button style={styles.button} onClick={() => navigate('/servo-diagnostic')}>
            ⚙️ Servo Diagnostic
          </button>
          <button style={styles.button} onClick={() => navigate('/io-diagnostic')}>
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
    background: '#f4f8fc',
    minHeight: '80vh'
  },
  card: {
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 6px 16px rgba(0, 91, 170, 0.2)',
    width: '100%',
    maxWidth: '500px'
  },
  title: {
    fontSize: '22px',
    color: '#005baa',
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
    background: '#f1f6fb',
    borderRadius: '8px',
    fontSize: '16px',
    color: '#333',
    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  button: {
    padding: '12px',
    background: 'linear-gradient(135deg, #0077cc, #005baa)',
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
