import React, { useEffect } from "react";

export default function ServoDiagnostic({ darkMode = false }) {
  // Set global background color
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    if (darkMode) {
      root.style.backgroundColor = "#121212";
      body.style.backgroundColor = "#121212";
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
  const textColor = darkMode ? "#aad8ff" : "#005baa";
  const labelBg = darkMode ? "#2a2a2a" : "#f1f6fb";
  const labelTextColor = darkMode ? "#ccc" : "#005baa";
  const valueColor = darkMode ? "#fff" : "#333";
  const statusColor = (status) => {
    if (status === "Running") return darkMode ? "#4CAF50" : "#28a745";
    if (status === "Idle") return darkMode ? "#FF9800" : "#ff9800";
    return darkMode ? "#f44336" : "#dc3545";
  };
  const faultColor = (code) => {
    if (code === "None") return darkMode ? "#4CAF50" : "#28a745";
    return darkMode ? "#f44336" : "#dc3545";
  };
  const boxShadow = darkMode
    ? "0 6px 16px rgba(0, 0, 0, 0.7)"
    : "0 6px 16px rgba(0, 91, 170, 0.2)";
  const borderColor = darkMode ? "#444" : "#ddd";

  const renderTable = (title, data) => (
    <div style={{ 
      ...styles.tableCard, 
      backgroundColor: cardBg, 
      boxShadow,
      color: darkMode ? "#eee" : "#333"
    }}>
      <h3 style={{ ...styles.tableTitle, color: textColor }}>{title}</h3>
      <table style={styles.table}>
        <tbody>
          {Object.entries(data).map(([key, value], i) => (
            <tr key={i}>
              <td style={{ 
                ...styles.label, 
                backgroundColor: labelBg, 
                color: labelTextColor,
                borderBottomColor: borderColor
              }}>
                {key.replace(/([A-Z])/g, " $1")}
              </td>
              <td style={{ 
                ...styles.value, 
                color: key === "status" ? statusColor(value) : 
                       key === "faultCode" ? faultColor(value) : valueColor,
                borderBottomColor: borderColor
              }}>
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div style={{ 
      ...styles.container, 
      backgroundColor: containerBg,
      minHeight: "100vh",
      width: "100%",
      position: "relative"
    }}>
      <div style={styles.contentWrapper}>
        {renderTable("Left Motor (LH)", leftMotor)}
        {renderTable("Right Motor (RH)", rightMotor)}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px",
    margin: 0,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "1200px",
  },
  tableCard: {
    borderRadius: "12px",
    padding: "20px",
    minWidth: "320px",
    flex: "1",
    maxWidth: "500px",
    marginBottom: "20px"
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
    padding: "12px",
    fontWeight: "600",
    borderBottom: "1px solid",
    width: "50%",
    fontSize: "14px",
  },
  value: {
    padding: "12px",
    borderBottom: "1px solid",
    width: "50%",
    fontSize: "14px",
    fontWeight: "500",
  },
};