import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

  const heroStyle = {
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "white",
    padding: "140px 20px",
    textAlign: "center",
    position: "relative"
  };

  const badgeStyle = {
    backgroundColor: "#00c6ff",
    padding: "6px 15px",
    borderRadius: "20px",
    fontSize: "14px",
    display: "inline-block",
    marginBottom: "20px"
  };

  const buttonPrimary = {
    backgroundColor: "#00c6ff",
    padding: "12px 28px",
    border: "none",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    marginRight: "15px",
    fontWeight: "bold"
  };

  const buttonOutline = {
    border: "1px solid white",
    padding: "12px 28px",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold"
  };

  const sectionStyle = {
    padding: "80px 20px",
    textAlign: "center"
  };

  const cardWrapper = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    marginTop: "50px"
  };

  const cardStyle = {
    backgroundColor: "white",
    padding: "35px",
    width: "300px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    transition: "transform 0.3s"
  };

  const statsSection = {
    backgroundColor: "#111",
    color: "white",
    padding: "80px 20px",
    textAlign: "center"
  };

  const statBox = {
    margin: "20px 40px",
    display: "inline-block"
  };

  return (
    <div>

      {/* HERO SECTION */}
      <div style={heroStyle}>

        <div style={badgeStyle}>AI-Powered Financial Security</div>

        <h1 style={{ fontSize: "55px", fontWeight: "bold" }}>
          FraudShield AI
        </h1>

        <p style={{ fontSize: "22px", marginTop: "20px", maxWidth: "800px", marginInline: "auto" }}>
          Real-time credit card fraud detection using advanced machine learning.
          Protecting digital transactions with intelligent risk analysis.
        </p>

        <div style={{ marginTop: "40px" }}>
          <Link to="/register" style={buttonPrimary}>
            Get Started
          </Link>

          <Link to="/login" style={buttonOutline}>
            Login
          </Link>
        </div>

      </div>

      {/* FEATURES SECTION */}
      <div style={sectionStyle}>
        <h2 style={{ fontWeight: "bold" }}>Why Choose FraudShield AI?</h2>

        <div style={cardWrapper}>

          <div style={cardStyle}>
            <h3>⚡ Real-Time Prediction</h3>
            <p>
              Instantly analyze transactions and detect suspicious activities
              with minimal latency.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>🎯 High Precision Model</h3>
            <p>
              Optimized ML algorithm with high recall and reduced false positives.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>🔐 Secure Architecture</h3>
            <p>
              MERN stack integrated with Flask ML API ensuring scalability and security.
            </p>
          </div>

        </div>
      </div>

      {/* STATS SECTION */}
      <div style={statsSection}>
        <h2>System Performance</h2>

        <div style={{ marginTop: "40px" }}>

          <div style={statBox}>
            <h1 style={{ fontSize: "40px", color: "#00c6ff" }}>98%</h1>
            <p>Model Accuracy</p>
          </div>

          <div style={statBox}>
            <h1 style={{ fontSize: "40px", color: "#00c6ff" }}>94%</h1>
            <p>Recall Score</p>
          </div>

          <div style={statBox}>
            <h1 style={{ fontSize: "40px", color: "#00c6ff" }}>24/7</h1>
            <p>Monitoring</p>
          </div>

        </div>
      </div>

      {/* CALL TO ACTION */}
      <div style={{ ...sectionStyle, backgroundColor: "#f4f6f9" }}>
        <h2 style={{ fontWeight: "bold" }}>
          Secure Your Transactions Today
        </h2>

        <p style={{ maxWidth: "700px", margin: "20px auto", fontSize: "18px" }}>
          Join our AI-powered platform and experience real-time fraud detection
          with intelligent risk assessment.
        </p>

        <Link to="/register" style={{
          backgroundColor: "#141e30",
          color: "white",
          padding: "14px 35px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          Create Account
        </Link>
      </div>

      {/* FOOTER */}
      <div style={{
        backgroundColor: "#0f2027",
        color: "white",
        padding: "30px",
        textAlign: "center"
      }}>
        © 2026 FraudShield AI | Final Year B.Tech Project
      </div>

    </div>
  );
}
