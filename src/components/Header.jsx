import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaBell,
  FaGamepad,
  FaFileAlt,
  FaTools,
  FaCogs,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { io } from "socket.io-client";
import TaikishaLogo from "../assets/Taikishaimage.jpg";

export default function Navbar() {
  const [now, setNow] = useState(new Date());
  const [plcOnline, setPlcOnline] = useState(false);
  const [blink, setBlink] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  // Clock
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Load logged-in user
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) setLoggedInUser(savedUser);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // PLC WebSocket
  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.on("plc_status", (data) => setPlcOnline(data.status === "online"));
    socket.on("disconnect", () => setPlcOnline(false));
    return () => socket.disconnect();
  }, []);

  // Blinking LED effect
  useEffect(() => {
    if (plcOnline) {
      const interval = setInterval(() => setBlink((prev) => !prev), 500);
      return () => clearInterval(interval);
    } else {
      setBlink(false);
    }
  }, [plcOnline]);

  const handleLogout = () => {
    navigate("/animation");
  };

  return (
    <header className="header">
      <style>{`
        .header {
          display:flex; justify-content:space-between; align-items:center;
          background:#005baa; color:white; padding:10px 20px;
          flex-wrap:wrap; position:sticky; top:0; z-index:50;
        }
        .left { display:flex; align-items:center; gap:15px; flex:1; }
        .logo { width:230px; height:60px; }
        .infoBox { display:flex; flex-direction:column; gap:4px; }
        .title { font-weight:bold; font-size:clamp(14px, 2vw, 18px); }
        .datetime { font-size:clamp(12px, 1.5vw, 14px); opacity:0.9; }
        .plc-dot { display:inline-block; width:16px; height:16px; border-radius:50%; margin-left:5px; }

        /* Desktop Nav */
        .nav-buttons {
          display:flex; align-items:center; gap:15px;
        }
        .nav-buttons a, .nav-buttons button {
          color:white; text-decoration:none;
          display:flex; align-items:center; gap:6px;
          font-size:clamp(13px, 1.8vw, 15px); font-weight:500;
          background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.3);
          border-radius:30px; padding:8px 14px; cursor:pointer;
          transition:all 0.3s ease; box-shadow:0 2px 5px rgba(0,0,0,0.2);
        }
        .nav-buttons a:hover, .nav-buttons button:hover {
          background:linear-gradient(135deg,#0072ff,#00c6ff);
          border-color:transparent; transform:scale(1.05);
          box-shadow:0 4px 12px rgba(0,0,0,0.3);
        }

        /* Mobile */
        .hamburger { background:none; border:none; font-size:26px; color:white; cursor:pointer; }
        .mobile-menu {
          display:flex; flex-direction:column; width:100%;
          background:#004080; margin-top:8px; padding:10px 0;
          border-radius:8px;
        }
        .mobile-menu a, .mobile-menu button {
          color:white; text-decoration:none;
          display:flex; align-items:center; justify-content:center; gap:8px;
          font-size:clamp(14px, 3.5vw, 18px); font-weight:500;
          background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.3);
          border-radius:25px; margin:8px 10px; padding:12px;
          cursor:pointer; transition:all 0.3s ease; box-shadow:0 2px 6px rgba(0,0,0,0.2);
        }
        .mobile-menu a:hover, .mobile-menu button:hover {
          background:linear-gradient(135deg,#0072ff,#00c6ff);
          border-color:transparent; transform:scale(1.05);
          box-shadow:0 4px 12px rgba(0,0,0,0.35);
        }

        @media (max-width: 480px) {
          .logo { width:150px; }
          .title { font-size:14px; }
          .datetime { font-size:12px; }
          .plc-dot { width:14px; height:14px; }
        }
      `}</style>

      <div className="left">
        <img src={TaikishaLogo} alt="Taikisha Logo" className="logo" />
        <div className="infoBox">
          <div className="title">Hybrid AMR Dashboard</div>
          <div className="datetime">{now.toLocaleDateString()} {now.toLocaleTimeString()}</div>
          <div>
            AMR Comm:{" "}
            <span className="plc-dot" style={{ backgroundColor: plcOnline && blink ? "lime" : "red" }}></span>
          </div>
        </div>
      </div>

      {!isMobile && (
        <nav className="nav-buttons">
          <Link to="/"><FaHome /> Home</Link>
          <Link to="/alarms"><FaBell /> Alarms</Link>
          <Link to="/manual"><FaGamepad /> Manual OP</Link>
          <Link to="/report"><FaFileAlt /> Reports</Link>
          <Link to="/diagnostic"><FaTools /> Diagnostics</Link>
          <Link to="/settings"><FaCogs /> Settings</Link>
          <button onClick={handleLogout}><FaSignOutAlt /> Logout</button>
        </nav>
      )}

      {isMobile && (
        <>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {menuOpen && (
            <div className="mobile-menu">
              <Link to="/" onClick={() => setMenuOpen(false)}><FaHome /> Home</Link>
              <Link to="/alarms" onClick={() => setMenuOpen(false)}><FaBell /> Alarms</Link>
              <Link to="/manual" onClick={() => setMenuOpen(false)}><FaGamepad /> Manual OP</Link>
              <Link to="/report" onClick={() => setMenuOpen(false)}><FaFileAlt /> Reports</Link>
              <Link to="/diagnostic" onClick={() => setMenuOpen(false)}><FaTools /> Diagnostics</Link>
              <Link to="/settings" onClick={() => setMenuOpen(false)}><FaCogs /> Settings</Link>
              <button onClick={() => { setMenuOpen(false); handleLogout(); }}>
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </>
      )}
    </header>
  );
}
