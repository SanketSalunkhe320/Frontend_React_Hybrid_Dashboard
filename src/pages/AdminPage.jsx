import React, { useState } from 'react';

export default function AdminPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [speed, setSpeed] = useState(0);

  const [minSpeed, setMinSpeed] = useState(0.1);
  const [maxSpeed, setMaxSpeed] = useState(2.0);

  const createUser = () => {
    if (username.trim() && password.trim()) {
      setUsers([...users, { username, password }]);
      setUsername('');
      setPassword('');
    } else {
      alert('Please enter both username and password.');
    }
  };

  const setMinAgvSpeed = () => {
    const min = parseFloat(minSpeed);
    if (isNaN(min) || min < 0) {
      alert('Enter a valid minimum speed.');
      return;
    }
    if (min > maxSpeed) {
      alert('Minimum speed cannot be greater than maximum speed.');
      return;
    }
    alert(`Minimum AGV Speed set to ${min} m/s`);
  };

  const setMaxAgvSpeed = () => {
    const max = parseFloat(maxSpeed);
    if (isNaN(max) || max <= 0) {
      alert('Enter a valid maximum speed.');
      return;
    }
    if (max < minSpeed) {
      alert('Maximum speed cannot be less than minimum speed.');
      return;
    }
    alert(`Maximum AGV Speed set to ${max} m/s`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>⚙️ Admin Panel</h2>

        {/* User creation */}
        <div style={styles.section}>
          <h3 style={styles.subtitle}>👤 Create User</h3>
          <div style={styles.inputGroup}>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          <button onClick={createUser} style={styles.button}>Create User</button>

          <ul style={styles.userList}>
            {users.map((u, i) => (
              <li key={i} style={styles.userItem}>
                {u.username}
              </li>
            ))}
          </ul>
        </div>

        {/* Setpoints */}
        <div style={styles.section}>
          <h3 style={styles.subtitle}>🚀 AGV Speed</h3>

          {/* Min Speed */}
          <div style={styles.setpointRow}>
            <label style={styles.label}>Minimum Speed:</label>
            <input
              type="number"
              step="0.1"
              value={minSpeed}
              onChange={e => setMinSpeed(e.target.value)}
              style={styles.input}
            />
            <span style={styles.unit}>m/s</span>
            <button style={styles.button} onClick={setMinAgvSpeed}>Set</button>
          </div>

          {/* Max Speed */}
          <div style={styles.setpointRow}>
            <label style={styles.label}>Maximum Speed:</label>
            <input
              type="number"
              step="0.1"
              value={maxSpeed}
              onChange={e => setMaxSpeed(e.target.value)}
              style={styles.input}
            />
            <span style={styles.unit}>m/s</span>
            <button style={styles.button} onClick={setMaxAgvSpeed}>Set</button>
          </div>
        </div>
      </div>

      {/* Mobile styles */}
      <style>
        {`
          @media (max-width: 600px) {
            .card {
              width: 100% !important;
              padding: 15px !important;
            }
            input {
              font-size: 16px !important;
              padding: 12px !important;
            }
            button {
              font-size: 16px !important;
              padding: 12px !important;
              width: 100%;
            }
            .setpointRow {
              flex-direction: column;
              align-items: flex-start;
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '20px',
    background: '#f4f8fc',
    minHeight: '100vh'
  },
  card: {
    background: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 6px 16px rgba(0, 91, 170, 0.2)',
    width: '100%',
    maxWidth: '600px'
  },
  title: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#005baa',
    marginBottom: '20px',
    textAlign: 'center'
  },
  section: {
    marginBottom: '25px'
  },
  subtitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#333'
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
    alignItems: 'center'
  },
  setpointRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '12px'
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '14px'
  },
  button: {
    padding: '10px 16px',
    background: '#005baa',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer'
  },
  userList: {
    listStyle: 'none',
    padding: 0,
    marginTop: '10px'
  },
  userItem: {
    padding: '8px 12px',
    background: '#f1f6fb',
    borderRadius: '6px',
    marginBottom: '6px',
    fontSize: '14px'
  },
  label: {
    fontWeight: '500',
    marginRight: '8px'
  },
  unit: {
    marginLeft: '6px',
    color: '#555',
    fontSize: '14px'
  }
};

