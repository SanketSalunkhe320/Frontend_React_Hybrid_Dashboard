import React from "react";
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
const hideHeaderFooter =
    location.pathname === "/login" || location.pathname === "/animation";
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {!hideHeaderFooter && <Header />}

      <main style={{ flex: 1, padding: "20px" }}>
        <Routes>

          {/* Animation routes */}
          <Route path="/animation" element={isLoggedIn ? <Animation /> : <Navigate to="/login" />} />

          {/* Public route */}
          <Route path="/login" element={<LoginForm />} />

          {/* Protected routes */}
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/alarms"
            element={isLoggedIn ? <Alarms /> : <Navigate to="/login" />}
          />
          <Route
            path="/alarmhistory"
            element={isLoggedIn ? <AlarmHistory /> : <Navigate to="/login" />}
          />
          <Route
            path="/settings"
            element={isLoggedIn ? <Settings /> : <Navigate to="/login" />}
          />
          <Route
            path="/admin"
            element={isLoggedIn ? <AdminPage /> : <Navigate to="/login" />}
          />
          <Route
            path="/manual"
            element={isLoggedIn ? <ManualOp /> : <Navigate to="/login" />}
          />
          <Route
            path="/diagnostic"
            element={isLoggedIn ? <Diagnostic /> : <Navigate to="/login" />}
          />
          <Route
            path="/report"
            element={isLoggedIn ? <Report /> : <Navigate to="/login" />}
          />

          {/*Diagnostic routes */}
          <Route path="/architecture" element={isLoggedIn ? <Architecture /> : <Navigate to="/login" />} />
          <Route path="/servo-diagnostic" element={isLoggedIn ? <ServoDiagnostic /> : <Navigate to="/login" />} />
          <Route path="/io-diagnostic" element={isLoggedIn ? <IODiagnostic /> : <Navigate to="/login" />} />
        </Routes>
      </main>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
}
