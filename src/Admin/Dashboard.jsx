import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import "../assets/css/Dashboard.css";

const menuItems = [
  { label: "Overview", path: "/admin/dashboard/overview" },
  { label: "Settings", path: "/admin/dashboard/settings" },
];

function Dashboard() {
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <h2>AutoCar Admin</h2>
        </div>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              <Link to={item.path} style={{ textDecoration: "none", color: "inherit" }}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="upgrade-card">
          <p>Welcome, {user?.name || "Admin"}</p>
          <button onClick={logout}>Logout</button>
        </div>
      </aside>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
