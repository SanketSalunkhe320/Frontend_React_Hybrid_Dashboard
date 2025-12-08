import React from "react";
import ArchitectureImg from "../assets/Amrdevelopmentarchitecture.jpg"; // ✅ adjust path if needed

export default function Architecture({ darkMode }) {
  const cardBg = darkMode ? "#1f1f1f" : "#fff";
  const containerBg = darkMode ? "#121212" : "#f4f8fc";
  const textColor = darkMode ? "#aad8ff" : "#005baa";
  const boxShadow = darkMode ? "0 6px 16px rgba(0, 0, 0, 0.7)" : "0 6px 16px rgba(0, 91, 170, 0.2)";

  return (
    <div style={{ ...styles.container, background: containerBg }}>
      <div style={{ ...styles.card, background: cardBg, boxShadow }}>
        <h2 style={{ ...styles.title, color: textColor }}> System Architecture</h2>
        <img 
          src={ArchitectureImg} 
          alt="System Architecture" 
          style={styles.image} 
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "30px",
    minHeight: "80vh",
  },
  card: {
    borderRadius: "12px",
    padding: "25px",
    width: "100%",
    maxWidth: "1000px",
    textAlign: "center",
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
  },
};
