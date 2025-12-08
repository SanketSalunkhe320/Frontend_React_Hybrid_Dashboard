import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Alarms() {
  const navigate = useNavigate()
  const active = [
    { id: 'A001', time: '2025-09-09 10:00', text: 'Obstacle detected' },
    { id: 'A002', time: '2025-09-10 11:20', text: 'Battery low' },
  ]

  return (
    <div style={{ padding: "20px" }}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h2 style={{ color: '#005baa' }}>Active Alarms</h2>
        
        <button
          onClick={() => navigate('/alarmhistory')}
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
            e.currentTarget.style.background = "linear-gradient(135deg, #005baa, #004080)"
            e.currentTarget.style.transform = "scale(1.05)"
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #0077cc, #005baa)"
            e.currentTarget.style.transform = "scale(1)"
          }}
        >
          📜 View Alarm History
        </button>
      </div>

      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#005baa", color: "white" }}>
            <th style={{ padding: "10px", textAlign: "center" }}>Alarm ID</th>
            <th style={{ padding: "10px", textAlign: "center" }}>Time</th>
            <th style={{ padding: "10px", textAlign: "center" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {active.map((a, i) => (
            <tr 
              key={i} 
              style={{ background: i % 2 === 0 ? "#f9f9f9" : "white" }}
            >
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{a.id}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{a.time}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>{a.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
