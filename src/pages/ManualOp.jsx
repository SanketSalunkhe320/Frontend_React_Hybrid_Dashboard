import React, { useState } from 'react'

export default function ManualOp() {
  const [direction, setDirection] = useState('')
  const [roller, setRoller] = useState('')
  const [turnTable, setTurnTable] = useState('')
  const [popup, setPopup] = useState('')

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Joystick */}
        <div style={styles.card}>
          <h3 style={styles.title}>🎮 Manual Operation</h3>
          <div style={styles.joystick}>
            <div style={styles.row}>
              <button style={styles.button} onClick={() => setDirection('Up')}>⬆️</button>
            </div>
            <div style={styles.row}>
              <button style={styles.button} onClick={() => setDirection('Left')}>⬅️</button>
              <button style={styles.button} onClick={() => setDirection('Down')}>⬇️</button>
              <button style={styles.button} onClick={() => setDirection('Right')}>➡️</button>
            </div>
          </div>
          <p style={styles.status}>Current: <strong>{direction || 'None'}</strong></p>
        </div>

        {/* Pop-up */}
        <div style={styles.card}>
          <h3 style={styles.title}>⬆️⬇️ Actuator</h3>
          <div style={styles.row}>
            <button style={styles.button} onClick={() => setPopup('Up')}>⬆️ Up</button>
            <button style={styles.button} onClick={() => setPopup('Down')}>⬇️ Down</button>
          </div>
          <p style={styles.status}>Actuator: <strong>{popup || 'Neutral'}</strong></p>
        </div>

      
      </div>
    </div>
  )
}

const styles = {
  container: {
    background: '#f4f8fc',
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
    background: '#fff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 91, 170, 0.15)',
    textAlign: 'center'
  },
  title: {
    fontSize: '16px',
    color: '#005baa',
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
    background: 'linear-gradient(145deg, #0077cc, #005baa)',
    color: 'white',
    cursor: 'pointer',
    boxShadow: '0 3px 6px rgba(0,0,0,0.25), inset 0 -2px 4px rgba(0,0,0,0.3)',
    transition: 'all 0.2s ease'
  },
  status: {
    fontSize: '13px',
    marginTop: '8px',
    color: '#333'
  }
}

// Hover/Active
styles.button[':hover'] = {
  transform: 'scale(1.05)',
  background: 'linear-gradient(145deg, #005baa, #004080)'
}
styles.button[':active'] = {
  transform: 'scale(0.92)',
  boxShadow: 'inset 0 3px 5px rgba(0,0,0,0.35)'
}
