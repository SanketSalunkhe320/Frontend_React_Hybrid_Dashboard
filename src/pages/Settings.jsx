import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Settings() {
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (password === 'admin') {
      navigate('/admin')
    } else {
      alert('Incorrect password')
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🔐 Admin Authorization</h2>
        <p style={styles.subtitle}>Please enter the password to access admin settings</p>
        
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={styles.input}
        />
        
        <button onClick={handleLogin} style={styles.button}>
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
    height: '80vh',
    background: '#f4f8fc'
  },
  card: {
    background: '#fff',
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
    color: '#005baa',
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '14px',
    marginBottom: '20px',
    outline: 'none'
  },
  button: {
    width: '100%',
    padding: '12px',
    background: '#005baa',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer'
  }
}
