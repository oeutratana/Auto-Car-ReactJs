import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaCarSide,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import "../assets/css/Navbar.css";
import { getShopCounts, SHOP_STORAGE_EVENT } from "../utils/shopStorage";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Cars", path: "/cars" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [counts, setCounts] = useState({ cart: 0, favorites: 0 });

  useEffect(() => {
    const updateCounts = () => setCounts(getShopCounts());

    updateCounts();
    window.addEventListener(SHOP_STORAGE_EVENT, updateCounts);
    window.addEventListener("storage", updateCounts);

    return () => {
      window.removeEventListener(SHOP_STORAGE_EVENT, updateCounts);
      window.removeEventListener("storage", updateCounts);
    };
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/cars");
  };

  return (
    <nav
      className="navbar navbar-expand-lg autoc-nav font-text"
      aria-label="Primary navigation"
    >
      <div className="container autoc-nav__inner">
        <Link className="navbar-brand autoc-nav__brand font-logo" to="/">
          <span className="autoc-nav__brand-mark" aria-hidden="true">
            <FaCarSide />
          </span>
          <span>
            <span className="brand-highlight">Auto</span>Car
          </span>
        </Link>

        <button
          className="navbar-toggler autoc-nav__toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="autoc-nav__content">
            <ul className="navbar-nav autoc-nav__links">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.path}>
                  <Link
                    to={link.path}
                    className={`nav-link ${
                      location.pathname === link.path ? "active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <form className="autoc-nav__search" onSubmit={handleSearch}>
              <div className="autoc-nav__search-wrapper">
                
                <FaSearch className="autoc-nav__search-icon" aria-hidden="true" />

                <input
                  className="autoc-nav__search-input"
                  type="search"
                  placeholder="Search cars, brands, models..."
                  aria-label="Search"
                />

                <button className="autoc-nav__search-btn" type="submit">
                  Search
                </button>

              </div>
            </form>

            <div className="autoc-nav__actions">
              <Link
                to="/favorites"
                className={`autoc-nav__icon-action ${
                  location.pathname === "/favorites" ? "active" : ""
                }`}
                aria-label="Favorites"
                title="Favorites"
              >
                <FaHeart aria-hidden="true" />
                {counts.favorites > 0 && (
                  <span className="autoc-nav__badge">{counts.favorites}</span>
                )}
              </Link>
              <Link
                to="/cart"
                className={`autoc-nav__icon-action ${
                  location.pathname === "/cart" ? "active" : ""
                }`}
                aria-label="Cart"
                title="Cart"
              >
                <FaShoppingCart aria-hidden="true" />
                {counts.cart > 0 && (
                  <span className="autoc-nav__badge">{counts.cart}</span>
                )}
              </Link>
              <Link
                to="/login"
                className={`autoc-nav__login ${
                  location.pathname === "/login" ? "active" : ""
                }`}
              >
                <FaSignInAlt aria-hidden="true" />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                className={`autoc-nav__cta ${
                  location.pathname === "/register" ? "active" : ""
                }`}
              >
                <FaUserPlus aria-hidden="true" />
                <span>Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
