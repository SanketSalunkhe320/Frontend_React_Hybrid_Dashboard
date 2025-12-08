import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UAGVBackground from "../assets/UAGVbackground.png"; // ✅ Import your local background

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login check - change as needed
    if (username === "admin" && password === "1234") {
      localStorage.setItem("loggedInUser", username);
      navigate("/"); // ✅ redirect to home/dashboard
    } else {
      alert("Invalid credentials! Please enter your credentials again.");
    }
  };

  return (
    <div
      style={{
        ...styles.container,
        background: `linear-gradient(155deg, rgba(0,91,170,0.85), rgba(0,150,200,0.85)), url(${UAGVBackground}) no-repeat center center/cover`, // ✅ Use imported background
      }}
    >
      <div style={styles.card}>
        <h2 style={styles.title}>🔐Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <p style={styles.note}>
            ⚡ Login using the credentials provided by the admin.
          </p>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    background: "rgba(255,255,255,0.95)",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0, 91, 170, 0.3)",
    textAlign: "center",
    width: "320px",
    backdropFilter: "blur(8px)",
  },
  title: {
    fontSize: "22px",
    color: "#005baa",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
  },
  note: {
    fontSize: "13px",
    color: "#666",
    margin: "5px 0 10px 0",
  },
  button: {
    padding: "10px",
    background: "#005baa",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.2s",
  },
};
