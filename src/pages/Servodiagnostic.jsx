import React from "react";

export default function ServoDiagnostic({ darkMode = false }) {
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

  const containerBg = darkMode ? "#121212" : "#f4f8fc";
  const cardBg = darkMode ? "#1e1e1e" : "#fff";
  const textColor = darkMode ? "#ffffff" : "#005baa";
  const labelBg = darkMode ? "#2a2a2a" : "#f1f6fb";
  const valueColor = darkMode ? "#ddd" : "#333";
  const boxShadow = darkMode
    ? "0 6px 16px rgba(0, 0, 0, 0.7)"
    : "0 6px 16px rgba(0, 91, 170, 0.2)";

  const renderTable = (title, data) => (
    <div style={{ ...styles.tableCard, background: cardBg, boxShadow }}>
      <h3 style={{ ...styles.tableTitle, color: textColor }}>{title}</h3>
      <table style={styles.table}>
        <tbody>
          {Object.entries(data).map(([key, value], i) => (
            <tr key={i}>
              <td style={{ ...styles.label, background: labelBg, color: textColor }}>
                {key.replace(/([A-Z])/g, " $1")}
              </td>
              <td style={{ ...styles.value, color: valueColor }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div style={{ ...styles.container, background: containerBg }}>
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
    minHeight: "80vh",
  },
  tableCard: {
    borderRadius: "12px",
    padding: "20px",
    minWidth: "320px",
    flex: "1",
  },
  tableTitle: {
    textAlign: "center",
    marginBottom: "15px",
    fontSize: "18px",
    fontWeight: "600",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  label: {
    padding: "10px",
    fontWeight: "600",
    borderBottom: "1px solid #ddd",
    width: "50%",
  },
  value: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    width: "50%",
  },
};
