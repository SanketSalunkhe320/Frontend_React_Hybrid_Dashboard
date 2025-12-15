import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Settings({ darkMode = false }) {
  const [password, setPassword] = useState('')
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
        <h2 style={{ ...styles.title, color: titleColor }}>🔐 Admin Authorization</h2>
        <p style={{ ...styles.subtitle, color: subtitleColor }}>
          Please enter the password to access admin settings
        </p>
        
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ 
            ...styles.input, 
            backgroundColor: inputBg, 
            color: inputColor, 
            border: inputBorder 
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
        />
        
        <button 
          onClick={handleLogin} 
          style={{ 
            ...styles.button, 
            background: buttonBg,
            opacity: 1,
            transition: 'opacity 0.2s ease'
          }}
          onMouseOver={e => e.currentTarget.style.opacity = 0.85}
          onMouseOut={e => e.currentTarget.style.opacity = 1}
        >
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
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '14px',
    marginBottom: '20px',
    outline: 'none',
    boxSizing: 'border-box'
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