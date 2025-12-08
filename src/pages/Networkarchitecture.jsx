import React from "react";
import ArchitectureImg from "../assets/architectureuagv.png"; // ✅ adjust path if needed

export default function Architecture() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}> System Architecture</h2>
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
    background: "#f4f8fc",
    minHeight: "80vh",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 6px 16px rgba(0, 91, 170, 0.2)",
    width: "100%",
    maxWidth: "1000px",
    textAlign: "center",
  },
  title: {
    color: "#005baa",
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
