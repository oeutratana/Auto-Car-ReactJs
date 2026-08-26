import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaPhone, FaUserPlus, FaUser } from "react-icons/fa";
import "../assets/css/Auth.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    agree: false,
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
    navigate("/profile");
  };

  return (
    <main className="auth-page font-text">
      <section className="auth-shell auth-shell--register">
        <div className="auth-panel auth-panel--visual">
          <img src="/images/image.png" alt="AutoCar" className="auth-logo" />
          <div>
            <p className="auth-kicker">Start your journey</p>
            <h1>Create your AutoCar account.</h1>
            <p>
              Save favorite vehicles, compare models, and move faster when the
              right car appears.
            </p>
          </div>
          <div className="auth-stats" aria-label="AutoCar account benefits">
            <span>Saved Cars</span>
            <span>Fast Checkout</span>
            <span>Verified Deals</span>
          </div>
        </div>

        <div className="auth-panel auth-panel--form">
          <div className="auth-heading">
            <p className="auth-kicker">Register</p>
            <h2>Build your garage</h2>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label className="auth-field">
              <span>Full name</span>
              <div className="auth-input">
                <FaUser aria-hidden="true" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
            </label>

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

            {/* <label className="auth-field">
              <span>Phone number</span>
              <div className="auth-input">
                <FaPhone aria-hidden="true" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 890"
                  required
                />
              </div>
            </label> */}

            <label className="auth-field">
              <span>Password</span>
              <div className="auth-input">
                <FaLock aria-hidden="true" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create password"
                  minLength="6"
                  required
                />
              </div>
            </label>

            <div className="auth-row">
              <label className="auth-check">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                />
                <span>I agree to AutoCar terms</span>
              </label>
              <Link to="/login">Login</Link>
            </div>

            <button className="auth-submit" type="submit">
              <FaUserPlus aria-hidden="true" />
              Register
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Register;
