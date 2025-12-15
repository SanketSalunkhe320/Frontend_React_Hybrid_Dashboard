import React, { useEffect } from "react";
import ArchitectureImg from "../assets/Amrdevelopmentarchitecture.jpg";

export default function Architecture({ darkMode = false }) {
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

  const cardBg = darkMode ? "#1f1f1f" : "#fff";
  const containerBg = darkMode ? "#121212" : "#f4f8fc";
  const textColor = darkMode ? "#aad8ff" : "#005baa";
  const boxShadow = darkMode ? "0 6px 16px rgba(0, 0, 0, 0.7)" : "0 6px 16px rgba(0, 91, 170, 0.2)";

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
        boxShadow: boxShadow,
        color: darkMode ? "#eee" : "#333"
      }}>
        <h2 style={{ ...styles.title, color: textColor }}> System Architecture</h2>
        <img 
          src={ArchitectureImg} 
          alt="System Architecture" 
          style={styles.image} 
        />
        <div style={styles.infoBox}>
          <p style={{ color: darkMode ? "#ccc" : "#666", margin: 0 }}>
            <strong>Note:</strong> This diagram shows the complete system architecture including PLC, 
            navigation system, motor controllers, and communication interfaces.
          </p>
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
    padding: "25px",
    width: "100%",
    maxWidth: "1000px",
    textAlign: "center",
    margin: "20px 0"
  },
  title: {
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "bold",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
    display: "block",
    margin: "0 auto"
  },
  infoBox: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "rgba(0, 91, 170, 0.1)",
    borderRadius: "8px",
    textAlign: "left",
    fontSize: "14px"
  }
};