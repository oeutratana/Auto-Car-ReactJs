import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import { useAuth } from "./AuthContext";
import "../assets/css/Auth.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(formData.email, formData.password);
    navigate("/profile");
  };

  return (
    <main className="auth-page font-text">
      <section className="auth-shell">
        <div className="auth-panel auth-panel--visual">
          <img src="/images/image.png" alt="AutoCar" className="auth-logo" />
          <div>
            <p className="auth-kicker">Welcome back</p>
            <h1>Drive into your AutoCar account.</h1>
            <p>
              Track saved cars, manage your profile, and continue your next
              purchase with a cleaner dashboard.
            </p>
          </div>
          <div className="auth-stats" aria-label="AutoCar marketplace stats">
            <span>500+ Cars</span>
            <span>50+ Brands</span>
            <span>24/7 Support</span>
          </div>
        </div>

        <div className="auth-panel auth-panel--form">
          <div className="auth-heading">
            <p className="auth-kicker">Login</p>
            <h2>Access your garage</h2>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-field">
              <span>Email address</span>
              <div className="auth-input">
                <FaEnvelope aria-hidden="true" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </label>

            <label className="auth-field">
              <span>Password</span>
              <div className="auth-input">
                <FaLock aria-hidden="true" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                />
              </div>
            </label>

            <div className="auth-row">
              <label className="auth-check">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <span>Remember me</span>
              </label>
              <Link to="/register">Create account</Link>
            </div>

            <button className="auth-submit" type="submit">
              <FaSignInAlt aria-hidden="true" />
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
