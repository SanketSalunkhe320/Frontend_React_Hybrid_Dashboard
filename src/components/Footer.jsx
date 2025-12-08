import React from "react";

export default function Footer({ darkMode }) {
  const footerStyle = {
    background: darkMode
      ? "#1e1e1e"
      : "linear-gradient(135deg, #005baa, #0077cc)",
    color: darkMode ? "#fff" : "#fff",
    textAlign: "center",
    padding: "20px 0",
    fontSize: "16px",
    fontWeight: "600",
    boxShadow: darkMode
      ? "0 -4px 10px rgba(255, 255, 255, 0.1)"
      : "0 -4px 10px rgba(0, 0, 0, 0.15)",
    marginTop: "auto",
    transition: "all 0.3s ease",
  };

  const textStyle = {
    margin: 0,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    letterSpacing: "0.5px",
  };

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>Designed and Developed by Taikisha India.</p>
      <br />
      <p style={textStyle}>© 2025 Taikisha India | All Rights Reserved.</p>
    </footer>
  );
}
