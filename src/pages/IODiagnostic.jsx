import React, { useEffect } from "react";

export default function IoDiagnostic({ darkMode = false }) {
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

  const inputs = [
    { ferrule: "I0.0", desc: "Front Emergency PB", status: false },
    { ferrule: "I0.1", desc: "Rare Emergency PB", status: true },
    { ferrule: "I0.2", desc: "Manual selector SW", status: true },
    { ferrule: "I0.3", desc: "Service selector SW", status: false },
    { ferrule: "I0.4", desc: "Reset Push button", status: false },
    { ferrule: "I0.5", desc: "Start PB", status: true },
    { ferrule: "I0.6", desc: "Power Contactor ON PB", status: true },
    { ferrule: "I0.7", desc: "Work over PB", status: false },
    { ferrule: "I1.0", desc: "Pendant Emergency PB", status: true },
    { ferrule: "I1.1", desc: "Pendant FWD PB", status: false },
    { ferrule: "I1.2", desc: "Pendant REV PB", status: false },
    { ferrule: "I1.3", desc: "Pendant Right PB", status: true },
    { ferrule: "I1.4", desc: "Pendant Left PB", status: false },
    { ferrule: "I1.5", desc: "Tim Sensor-1 IP-1", status: true },
    { ferrule: "I1.6", desc: "Tim Sensor-1 IP-2", status: false },
    { ferrule: "I1.7", desc: "Spare", status: false },
    { ferrule: "I1.8", desc: "Spare", status: false },
    { ferrule: "I1.9", desc: "Spare", status: false },
    { ferrule: "I1.10", desc: "Spare", status: false },
    { ferrule: "I1.11", desc: "Spare", status: false },
    { ferrule: "I1.12", desc: "Spare", status: false },
    { ferrule: "I1.13", desc: "Spare", status: false },
    { ferrule: "I1.14", desc: "Spare", status: false },
  ];

  // Theme colors
  const containerBg = darkMode ? "#1a1a1a" : "#f4f8fc";
  const cardBg = darkMode ? "#2b2b2b" : "#fff";
  const titleColor = darkMode ? "#aad8ff" : "#005baa";
  const headerBg = darkMode ? "#333" : "#005baa";
  const headerText = darkMode ? "#eee" : "white";
  const rowEven = darkMode ? "#2b2b2b" : "#f9f9f9";
  const rowOdd = darkMode ? "#333" : "white";
  const textColor = darkMode ? "#eee" : "#333";
  const borderColor = darkMode ? "#444" : "#ddd";
  const shadow = darkMode ? "0 6px 16px rgba(0, 0, 0, 0.4)" : "0 6px 16px rgba(0, 91, 170, 0.2)";

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
        color: textColor
      }}>
        <h2 style={{ ...styles.title, color: titleColor }}> IO Diagnostic - Inputs</h2>

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={{ ...styles.headerRow, backgroundColor: headerBg }}>
                <th style={{ ...styles.th, color: headerText }}>Ferrule No.</th>
                <th style={{ ...styles.th, color: headerText }}>Description</th>
                <th style={{ ...styles.th, color: headerText }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {inputs.map((io, i) => (
                <tr
                  key={i}
                  style={{
                    ...(i % 2 === 0 ? styles.rowEven : styles.rowOdd),
                    backgroundColor: i % 2 === 0 ? rowEven : rowOdd,
                    color: textColor
                  }}
                >
                  <td style={{ ...styles.td, borderBottomColor: borderColor }}>
                    {io.ferrule}
                  </td>
                  <td style={{ ...styles.td, borderBottomColor: borderColor }}>
                    {io.desc}
                  </td>
                  <td style={{ ...styles.td, borderBottomColor: borderColor }}>
                    <span
                      style={{
                        ...styles.led,
                        backgroundColor: io.status ? "limegreen" : "red",
                        boxShadow: io.status ? "0 0 4px rgba(50, 205, 50, 0.5)" : "0 0 4px rgba(255, 0, 0, 0.3)"
                      }}
                    ></span>
                    <span style={{ color: textColor }}>
                      {io.status ? " ON" : " OFF"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
    overflowY: "auto"
  },
  card: {
    borderRadius: "12px",
    padding: "20px",
    width: "100%",
    maxWidth: "900px",
    marginTop: "20px"
  },
  title: {
    textAlign: "center",
    marginBottom: "15px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  tableWrapper: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "500px",
  },
  headerRow: {
  },
  th: {
    padding: "10px",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "600",
  },
  td: {
    padding: "8px",
    fontSize: "13px",
    borderBottom: "1px solid",
    wordWrap: "break-word",
    textAlign: "center",
  },
  rowEven: {
  },
  rowOdd: {
  },
  led: {
    display: "inline-block",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    marginRight: "5px",
    verticalAlign: "middle",
  },
};