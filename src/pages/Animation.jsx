import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TaikishaLogo from "../assets/Taikishaimage1.png";

export default function Animation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Clear user session
      localStorage.removeItem("loggedInUser");

      // Redirect to login after animation
      navigate("/login");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "url('black.jpeg') no-repeat center center fixed",
        backgroundSize: "cover",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        position: "relative",
        textAlign: "center",
        padding: "10px",
      }}
    >
      {/* Logo with slide-down effect */}
      <img
        src={TaikishaLogo}
        alt="Taikisha Logo"
        style={{
          width: "80%",         // responsive width
          maxWidth: "550px",    // limit on large screens
          height: "auto",
          marginBottom: "20px",
          animation: "slideDown 2s ease-in-out",
        }}
      />

      {/* Tagline */}
      <div
        style={{
          position: "absolute",
          bottom: "10%", // relative to screen height
          left: "5%",
          fontSize: "1.5vw",      // scales with screen width
          maxFontSize: "18px",
          color: "#070707ff",
          animation: "fadeIn 3.5s ease-in-out",
          whiteSpace: "nowrap",
        }}
      >
        Design and Developed by Taikisha India.
      </div>

      {/* Footer style */}
      <div
        style={{
          position: "absolute",
          bottom: "5%", // lower for small screens
          left: "5%",
          fontSize: "1.5vw",
          maxFontSize: "18px",
          color: "#070707ff",
          animation: "fadeIn 3s ease-in-out",
          whiteSpace: "nowrap",
        }}
      >
        &copy; 2025 Taikisha India. All rights reserved.
      </div>

      <style>
        {`
          @keyframes slideDown {
            0% {
              opacity: 0;
              transform: translateY(-50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          /* Extra responsiveness */
          @media (max-width: 768px) {
            div {
              font-size: 14px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
