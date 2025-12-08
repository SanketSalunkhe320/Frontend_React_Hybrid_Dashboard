import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Settings({ darkMode }) {
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (password === 'admin') {
      navigate('/admin')
    } else {
      alert('Incorrect password')
    }
  }

  // Theme colors
  const containerBg = darkMode ? "#1a1a1a" : "#f4f8fc"
  const cardBg = darkMode ? "#2b2b2b" : "#fff"
  const titleColor = darkMode ? "#aad8ff" : "#005baa"
  const subtitleColor = darkMode ? "#ccc" : "#666"
  const inputBg = darkMode ? "#3a3a3a" : "#fff"
  const inputColor = darkMode ? "#eee" : "#333"
  const inputBorder = darkMode ? "1px solid #555" : "1px solid #ccc"
  const buttonBg = darkMode ? "linear-gradient(135deg, #005baa, #004080)" : "#005baa"

  return (
    <div style={{ ...styles.container, background: containerBg }}>
      <div style={{ ...styles.card, background: cardBg }}>
        <h2 style={{ ...styles.title, color: titleColor }}>🔐 Admin Authorization</h2>
        <p style={{ ...styles.subtitle, color: subtitleColor }}>Please enter the password to access admin settings</p>
        
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ ...styles.input, background: inputBg, color: inputColor, border: inputBorder }}
        />
        
        <button onClick={handleLogin} style={{ ...styles.button, background: buttonBg }}>
          Login
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
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '14px',
    marginBottom: '20px',
    outline: 'none'
  },
  button: {
    width: '100%',
    padding: '12px',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer'
  }
}
