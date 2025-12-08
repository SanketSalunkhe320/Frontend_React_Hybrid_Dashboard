import React from "react";

export default function ServoDiagnostic() {
  const leftMotor = {
    status: "Running",
    mode: "Auto",
    actualPosition: "1200",
    positionError: "5",
    actualSpeed: "1500 RPM",
    motorTemp: "65 °C",
    faultCode: "None",
  };

  const rightMotor = {
    status: "Idle",
    mode: "Manual",
    actualPosition: "1180",
    positionError: "2",
    actualSpeed: "0 RPM",
    motorTemp: "55 °C",
    faultCode: "E-102",
  };

  const renderTable = (title, data) => (
    <div style={styles.tableCard}>
      <h3 style={styles.tableTitle}>{title}</h3>
      <table style={styles.table}>
        <tbody>
          <tr>
            <td style={styles.label}>Status</td>
            <td style={styles.value}>{data.status}</td>
          </tr>
          <tr>
            <td style={styles.label}>Mode</td>
            <td style={styles.value}>{data.mode}</td>
          </tr>
          <tr>
            <td style={styles.label}>Actual Position</td>
            <td style={styles.value}>{data.actualPosition}</td>
          </tr>
          <tr>
            <td style={styles.label}>Position Error</td>
            <td style={styles.value}>{data.positionError}</td>
          </tr>
          <tr>
            <td style={styles.label}>Actual Speed</td>
            <td style={styles.value}>{data.actualSpeed}</td>
          </tr>
          <tr>
            <td style={styles.label}>Motor Temp</td>
            <td style={styles.value}>{data.motorTemp}</td>
          </tr>
          <tr>
            <td style={styles.label}>Fault Code</td>
            <td style={styles.value}>{data.faultCode}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div style={styles.container}>
      {renderTable("Left Motor (LH)", leftMotor)}
      {renderTable("Right Motor (RH)", rightMotor)}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    flexWrap: "wrap",
    background: "#f4f8fc",
    minHeight: "80vh",
  },
  tableCard: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0, 91, 170, 0.2)",
    padding: "20px",
    minWidth: "320px",
    flex: "1",
  },
  tableTitle: {
    textAlign: "center",
    color: "#005baa",
    marginBottom: "15px",
    fontSize: "18px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  label: {
    padding: "10px",
    fontWeight: "600",
    background: "#f1f6fb",
    borderBottom: "1px solid #ddd",
    width: "50%",
  },
  value: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    color: "#333",
    width: "50%",
  },
};
