import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Alarms from "./pages/Alarms";
import AlarmHistory from "./pages/AlarmHistory";
import Settings from "./pages/Settings";
import AdminPage from "./pages/AdminPage";
import ManualOp from "./pages/ManualOp";
import Diagnostic from "./pages/Diagnostic";
import Report from "./pages/Report";
import LoginForm from "./pages/LoginForm";
import ServoDiagnostic from "./pages/Servodiagnostic";
import IODiagnostic from "./pages/IODiagnostic";
import Architecture from "./pages/Networkarchitecture";
import Animation from "./pages/Animation";

export default function App() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("loggedInUser");
  const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/animation";

  // 🌗 Dark mode state lifted to App
  const [darkMode, setDarkMode] = useState(false);

  // Theme styles (optional: you can move to context later)
  const theme = darkMode
    ? { background: "#1e1e1e", text: "#fff" }
    : { background: "#f4f8fc", text: "#000" };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: theme.background, color: theme.text }}>
      {!hideHeaderFooter && <Header darkMode={darkMode} setDarkMode={setDarkMode} />}

      <main style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/login" element={<LoginForm darkMode={darkMode} />} />
          <Route path="/animation" element={isLoggedIn ? <Animation darkMode={darkMode} /> : <Navigate to="/login" />} />
          <Route path="/" element={isLoggedIn ? <Home darkMode={darkMode} /> : <Navigate to="/login" />} />
          <Route path="/alarms" element={isLoggedIn ? <Alarms darkMode={darkMode} /> : <Navigate to="/login" />} />
          <Route path="/alarmhistory" element={isLoggedIn ? <AlarmHistory darkMode={darkMode} /> : <Navigate to="/login" />} />
          <Route path="/settings" element={isLoggedIn ? <Settings darkMode={darkMode} /> : <Navigate to="/login" />} />
          <Route path="/admin" element={isLoggedIn ? <AdminPage darkMode={darkMode} setDarkMode={setDarkMode} /> : <Navigate to="/login" />} />
          <Route path="/manual" element={isLoggedIn ? <ManualOp darkMode={darkMode} /> : <Navigate to="/login" />} />
          <Route path="/diagnostic" element={isLoggedIn ? <Diagnostic darkMode={darkMode} /> : <Navigate to="/login" />} />
          <Route path="/report" element={isLoggedIn ? <Report darkMode={darkMode} /> : <Navigate to="/login" />} />
          <Route path="/architecture" element={isLoggedIn ? <Architecture darkMode={darkMode} /> : <Navigate to="/login" />} />
          <Route path="/servo-diagnostic" element={isLoggedIn ? <ServoDiagnostic darkMode={darkMode} /> : <Navigate to="/login" />} />
          <Route path="/io-diagnostic" element={isLoggedIn ? <IODiagnostic darkMode={darkMode} /> : <Navigate to="/login" />} />
        </Routes>
      </main>

      {!hideHeaderFooter && <Footer darkMode={darkMode} />}
    </div>
  );
}
