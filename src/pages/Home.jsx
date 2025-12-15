import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Magneticagv from "../assets/AMR2.png";

const socket = io("http://localhost:5000");

export default function Home({ darkMode = false }) {
  const [plcData, setPlcData] = useState({
    comm_status: "offline",
    plc_comm_led: false,
    lcp1: 0,
    lcp2: 0,
    lcp3: 0,
    mls: 0,
    lh_speed: 0,
    rh_speed: 0,
    auto_manual: "Unknown",
    start_stop: false,
    bypass: false,
    interlocks: {
      pendant_estop: false,
      front_estop: false,
      rear_estop: false,
      tim_sensor: false,
      rh_healthy: false,
      lh_healthy: false,
    },
  });

  // Set global background color on mount and when darkMode changes
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    if (darkMode) {
      root.style.backgroundColor = "#1a1a1a";
      body.style.backgroundColor = "#1a1a1a";
      body.style.color = "#eee";
    } else {
      root.style.backgroundColor = "#fdf9f9";
      body.style.backgroundColor = "#fdf9f9";
      body.style.color = "#333";
    }
    
    // Cleanup function to reset styles
    return () => {
      root.style.backgroundColor = "";
      body.style.backgroundColor = "";
      body.style.color = "";
    };
  }, [darkMode]);

  useEffect(() => {
    socket.on("plc_status", (data) => setPlcData(data));
    return () => socket.off("plc_status");
  }, []);

  // LED Component
  const Led = ({ status, blink }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      if (!blink) return;
      const interval = setInterval(() => setVisible((v) => !v), 500);
      return () => clearInterval(interval);
    }, [blink]);

    const bgColor = blink
      ? visible
        ? "lime"
        : "#555"
      : status
      ? "green"
      : "red";

    return (
      <span
        style={{
          display: "inline-block",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          backgroundColor: bgColor,
          boxShadow: status ? "0 0 6px rgba(0,255,0,0.6)" : "none",
        }}
      ></span>
    );
  };

  // Control handlers
  const toggleStartStop = () =>
    socket.emit("toggle_start_stop", { value: !plcData.start_stop });
  const setMode = (mode) => socket.emit("set_mode", { mode });

  const isAuto = plcData.auto_manual === "Auto";
  const isManual = plcData.auto_manual === "Manual";

  // Colors based on dark mode
  const colors = {
    bg: darkMode ? "#1a1a1a" : "#fdf9f9",
    card: darkMode ? "#2b2b2b" : "#fff",
    text: darkMode ? "#eee" : "#333",
    heading: darkMode ? "#fff" : "#333",
    shadow: darkMode ? "0 4px 12px rgba(0,0,0,0.4)" : "0 4px 12px rgba(0,0,0,0.1)",
  };

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: colors.bg,
        color: colors.text,
      }}
    >
      <h2 style={{ ...styles.heading, color: colors.heading }}>
        Hybrid AMR Dashboard
      </h2>

      {/* AGV Image */}
      <div style={{ ...styles.card, backgroundColor: colors.card, boxShadow: colors.shadow }}>
        <img src={Magneticagv} alt="UAGV" style={styles.image} />
      </div>

      {/* Interlocks */}
      <div style={{ ...styles.card, backgroundColor: colors.card, boxShadow: colors.shadow }}>
        <h3 style={{ ...styles.sectionTitle, color: colors.text }}>Interlocks</h3>
        <div style={styles.responsiveTable}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Front Estop</th>
                <th>Rear Estop</th>
                <th>Lidar Sensor</th>
                <th>RH Drive Healthy</th>
                <th>LH Drive Healthy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Led status={plcData.interlocks.front_estop} /></td>
                <td><Led status={plcData.interlocks.rear_estop} /></td>
                <td><Led status={plcData.interlocks.tim_sensor} /></td>
                <td><Led status={plcData.interlocks.rh_healthy} /></td>
                <td><Led status={plcData.interlocks.lh_healthy} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Motor Speeds */}
      <div style={{ ...styles.card, backgroundColor: colors.card, boxShadow: colors.shadow }}>
        <h3 style={{ ...styles.sectionTitle, color: colors.text }}>Motor Speeds</h3>
        <div style={styles.responsiveTable}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>LH Motor</th>
                <th>RH Motor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{plcData.lh_speed} rpm</td>
                <td>{plcData.rh_speed} rpm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Controls */}
      <div style={{ ...styles.card, backgroundColor: colors.card, boxShadow: colors.shadow }}>
        <h3 style={{ ...styles.sectionTitle, color: colors.text }}>
          Controls and Mode Selection
        </h3>

        {/* Start / Stop */}
        <div style={styles.buttonGroup}>
          <button
            style={{
              ...styles.button,
              background: plcData.start_stop
                ? darkMode
                  ? "linear-gradient(135deg, #ff6666, #ff0000)"
                  : "linear-gradient(135deg, #ff4e50, #ff0000)"
                : darkMode
                ? "linear-gradient(135deg, #28a745, #1e7e34)"
                : "linear-gradient(135deg, #28a745, #218838)",
            }}
            onClick={toggleStartStop}
          >
            {plcData.start_stop ? "Stop" : "Start"}
          </button>
        </div>

        {/* Auto / Manual */}
        <div style={styles.modeButtons}>
          <button
            style={{
              ...styles.button,
              background: darkMode
                ? "linear-gradient(135deg, #3399ff, #0056b3)"
                : "linear-gradient(135deg, #007bff, #0056b3)",
            }}
            onClick={() => setMode("auto")}
          >
            Auto Mode
          </button>

          <button
            style={{
              ...styles.button,
              background: darkMode
                ? "linear-gradient(135deg, #ffad33, #cc7700)"
                : "linear-gradient(135deg, #ff9500, #cc7700)",
            }}
            onClick={() => setMode("manual")}
          >
            Manual Mode
          </button>
        </div>

        {/* LED Indicators */}
        <div style={styles.modeWrapper}>
          <span>Auto Mode:</span>
          <Led status={isAuto} />
          <span>Manual Mode:</span>
          <Led status={isManual} />
        </div>
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "10px",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "clamp(20px, 2.5vw, 28px)",
    fontWeight: "600",
    marginBottom: "20px",
    textAlign: "center",
  },
  card: {
    borderRadius: "12px",
    padding: "15px",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "clamp(16px, 2vw, 20px)",
    fontWeight: "500",
    marginBottom: "10px",
    textAlign: "left",
  },
  responsiveTable: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "clamp(12px, 1.8vw, 16px)",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "8px",
    color: "white",
    border: "none",
    fontSize: "clamp(14px, 2vw, 16px)",
    cursor: "pointer",
    flex: "1 1 auto",
    minWidth: "120px",
  },
  modeButtons: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    marginBottom: "15px",
  },
  modeWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    marginTop: "10px",
    flexWrap: "wrap",
  },
  image: {
    width: "100%",
    height: "auto",
    maxWidth: "400px",
    display: "block",
    margin: "0 auto",
  },
};