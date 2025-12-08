import React, { useState } from 'react'

export default function ManualOp({ darkMode }) {
  const [direction, setDirection] = useState('')
  const [roller, setRoller] = useState('')
  const [turnTable, setTurnTable] = useState('')
  const [popup, setPopup] = useState('')

  // Theme colors
  const bgColor = darkMode ? "#1a1a1a" : "#f4f8fc"
  const cardBg = darkMode ? "#2b2b2b" : "#fff"
  const textColor = darkMode ? "#eee" : "#333"
  const buttonBg = darkMode ? "linear-gradient(145deg, #005baa, #004080)" : "linear-gradient(145deg, #0077cc, #005baa)"
  const buttonShadow = darkMode
    ? "0 3px 6px rgba(0,0,0,0.5), inset 0 -2px 4px rgba(0,0,0,0.6)"
    : "0 3px 6px rgba(0,0,0,0.25), inset 0 -2px 4px rgba(0,0,0,0.3)"

  return (
    <div style={{ ...styles.container, background: bgColor, color: textColor }}>
      <div style={styles.wrapper}>
        {/* Joystick */}
        <div style={{ ...styles.card, background: cardBg }}>
          <h3 style={{ ...styles.title, color: textColor }}>🎮 Manual Operation</h3>
          <div style={styles.joystick}>
            <div style={styles.row}>
              <button style={{ ...styles.button, background: buttonBg, boxShadow: buttonShadow }} onClick={() => setDirection('Up')}>⬆️</button>
            </div>
            <div style={styles.row}>
              <button style={{ ...styles.button, background: buttonBg, boxShadow: buttonShadow }} onClick={() => setDirection('Left')}>⬅️</button>
              <button style={{ ...styles.button, background: buttonBg, boxShadow: buttonShadow }} onClick={() => setDirection('Down')}>⬇️</button>
              <button style={{ ...styles.button, background: buttonBg, boxShadow: buttonShadow }} onClick={() => setDirection('Right')}>➡️</button>
            </div>
          </div>
          <p style={{ ...styles.status, color: textColor }}>Current: <strong>{direction || 'None'}</strong></p>
        </div>

        {/* Pop-up */}
        <div style={{ ...styles.card, background: cardBg }}>
          <h3 style={{ ...styles.title, color: textColor }}>⬆️⬇️ Actuator</h3>
          <div style={styles.row}>
            <button style={{ ...styles.button, background: buttonBg, boxShadow: buttonShadow }} onClick={() => setPopup('Up')}>⬆️ Up</button>
            <button style={{ ...styles.button, background: buttonBg, boxShadow: buttonShadow }} onClick={() => setPopup('Down')}>⬇️ Down</button>
          </div>
          <p style={{ ...styles.status, color: textColor }}>Actuator: <strong>{popup || 'Neutral'}</strong></p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '30vh',
    padding: '15px',
    display: 'flex',
    justifyContent: 'center'
  },
  wrapper: {
    display: 'grid',
    gap: '15px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    width: '100%',
    maxWidth: '1000px'
  },
  card: {
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 91, 170, 0.15)',
    textAlign: 'center'
  },
  title: {
    fontSize: '16px',
    marginBottom: '10px'
  },
  joystick: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '10px'
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    flexWrap: 'wrap'
  },
  button: {
    minWidth: '70px',
    height: '50px',
    fontSize: '14px',
    borderRadius: '8px',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  status: {
    fontSize: '13px',
    marginTop: '8px'
  }
}
