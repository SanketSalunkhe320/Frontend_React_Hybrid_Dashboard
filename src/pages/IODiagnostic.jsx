import React from "react";

export default function IoDiagnostic() {
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

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}> IO Diagnostic - Inputs</h2>

        {/* ✅ Mobile responsive wrapper */}
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.th}>Ferrule No.</th>
                <th style={styles.th}>Description</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>
            <tbody>
              {inputs.map((io, i) => (
                <tr
                  key={i}
                  style={i % 2 === 0 ? styles.rowEven : styles.rowOdd}
                >
                  <td style={styles.td}>{io.ferrule}</td>
                  <td style={styles.td}>{io.desc}</td>
                  <td style={styles.td}>
                    <span
                      style={{
                        ...styles.led,
                        backgroundColor: io.status ? "limegreen" : "red",
                      }}
                    ></span>
                    {io.status ? " ON" : " OFF"}
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
    padding: "20px",
    background: "#f4f8fc",
    minHeight: "80vh",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 6px 16px rgba(0, 91, 170, 0.2)",
    width: "100%",
    maxWidth: "900px",
  },
  title: {
    textAlign: "center",
    color: "#005baa",
    marginBottom: "15px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  tableWrapper: {
    overflowX: "auto", // ✅ Enables scroll on small screens
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "500px", // ✅ Prevents table from squishing too much
  },
  headerRow: {
    background: "#005baa",
    color: "white",
  },
  th: {
    padding: "10px",
    textAlign: "center",
    fontSize: "14px",
  },
  td: {
    padding: "8px",
    fontSize: "13px",
    borderBottom: "1px solid #ddd",
    wordWrap: "break-word",
  },
  rowEven: {
    background: "#f9f9f9",
  },
  rowOdd: {
    background: "white",
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
