import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Magneticagv from "../assets/Hybrid.png"; // AGV image

const socket = io("http://localhost:5000");

export default function Home() {
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

  useEffect(() => {
    socket.on("plc_status", (data) => setPlcData(data));
    return () => socket.off("plc_status");
  }, []);

  const Led = ({ status, blink }) => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
      if (!blink) return;
      const interval = setInterval(() => setVisible((v) => !v), 500);
      return () => clearInterval(interval);
    }, [blink]);
    return (
      <span
        style={{
          display: "inline-block",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          backgroundColor: blink
            ? visible
              ? "lime"
              : "#bbb"
            : status
            ? "green"
            : "red",
          boxShadow: status ? "0 0 6px rgba(0,255,0,0.6)" : "none",
        }}
      ></span>
    );
  };

  const handleStartStop = () =>
    socket.emit("toggle_start_stop", { value: !plcData.start_stop });

  const isAuto = plcData.auto_manual === "Auto";
  const isManual = plcData.auto_manual === "Manual";

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Hybrid AMR Dashboard</h2>

      {/* UAGV Image */}
      <div style={styles.card}>
        <img src={Magneticagv} alt="UAGV" style={styles.image} />
      </div>

      {/* Interlocks */}
      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>Interlocks</h3>
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

      {/* Motor Speed */}
      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>Motor Speeds</h3>
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

      {/* Control Buttons */}
      <div style={styles.card}>
        <h3 style={styles.sectionTitle}>Controls and Mode Selection</h3>
        <div style={styles.buttonGroup}>
          <button
            style={{
              ...styles.button,
              background: plcData.start_stop
                ? "linear-gradient(135deg, #ff4e50, #ff0000)"
                : "linear-gradient(135deg, #28a745, #218838)",
            }}
            onClick={handleStartStop}
          >
            {plcData.start_stop ? "Stop" : "Start"}
          </button>
        </div>

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

const styles = {
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "10px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "clamp(20px, 2.5vw, 28px)",
    fontWeight: "600",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "15px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  sectionTitle: {
    fontSize: "clamp(16px, 2vw, 20px)",
    fontWeight: "500",
    marginBottom: "10px",
    textAlign: "left",
    color: "#444",
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
    flexWrap: "wrap",
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
    maxWidth: "200px",
  },
  modeWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    marginTop: "10px",
    fontSize: "clamp(14px, 2vw, 16px)",
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
