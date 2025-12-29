import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLock, FaWallet, FaCreditCard } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="app dashboard-page">
      {/* Glow Effects */}
      <div className="top">
        <span className="glow"></span>
        <span className="glow-secondary"></span>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to South African Blue-Bank</h1>
        <p>
          Safe, reliable, and convenient banking at your fingertips. Manage your
          money anytime, anywhere.
        </p>

        <div className="hero-buttons">
          <button
            className="dashboard-btn"
            onClick={() => navigate("/register")}
          >
            Create Account
          </button>
          <button
            className="dashboard-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Choose Blue-Bank?</h2>

        <div className="features-cards">
          <div className="feature-card">
            <FaLock size={40} />
            <h3>Secure Banking</h3>
            <p>Your money is protected with state-of-the-art security systems.</p>
          </div>

          <div className="feature-card">
            <FaWallet size={40} />
            <h3>Easy Transactions</h3>
            <p>Deposit, withdraw, and manage funds easily from your dashboard.</p>
          </div>

          <div className="feature-card">
            <FaCreditCard size={40} />
            <h3>Smart Cards</h3>
            <p>Get instant access to digital cards for online and offline payments.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>
          &copy; {new Date().getFullYear()} South African Blue-Bank. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
