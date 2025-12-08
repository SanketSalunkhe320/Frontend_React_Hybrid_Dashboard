import React from 'react'

export default function Report() {
  const generateReport = () => {
    const blob = new Blob(["📊 AGV Report: Sample Data\n\n- LCP1: MLS001, Speed 120 rpm\n- LCP2: MLS002, Speed 130 rpm\n- LCP3: MLS003, Speed 110 rpm"], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'AGV_Report.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>📑 AGV Report</h2>
        <p style={styles.subtitle}>Generate and download AGV operation reports</p>
        <button onClick={generateReport} style={styles.button}>
          Generate Report
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
