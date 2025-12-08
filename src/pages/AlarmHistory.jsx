import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AlarmHistory() {
  const navigate = useNavigate();

  // Sample alarm history data
  const history = [
    { id: 'H001', time: '2025-09-05 09:00', text: 'AGV stopped due to low battery' },
    { id: 'H002', time: '2025-09-06 14:30', text: 'Obstacle detected on path' },
    { id: 'H003', time: '2025-09-07 11:15', text: 'Emergency stop pressed' },
    { id: 'H004', time: '2025-09-08 16:45', text: 'AGV resumed operation' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: '#005baa' }}>Alarm History</h2>
        <button
          onClick={() => navigate('/alarms')}
          style={{
            background: "linear-gradient(135deg, #0077cc, #005baa)",
            color: "white",
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
            transition: "all 0.2s ease-in-out"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #005baa, #004080)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #0077cc, #005baa)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          ⬅️ Back to Active Alarms
        </button>
      </div>

      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#005baa', color: 'white' }}>
            <th style={{ padding: '10px', textAlign: 'center' }}>Alarm ID</th>
            <th style={{ padding: '10px', textAlign: 'center' }}>Time</th>
            <th style={{ padding: '10px', textAlign: 'center' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {history.map((h, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : 'white' }}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{h.id}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{h.time}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{h.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
