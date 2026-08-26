import React, { useState } from "react";
import { useAuth } from "../auth/AuthContext";

function Settings() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile({ name, email });
  };

  return (
    <div>
      <div className="topbar">
        <h2>Settings</h2>
      </div>
      <div className="sales-section" style={{ maxWidth: 500 }}>
        <h3>Profile Settings</h3>
        <form onSubmit={handleSave} style={{ marginTop: 20 }}>
          <div style={{ marginBottom: 15 }}>
            <label style={{ display: "block", marginBottom: 5 }}>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "10px", borderRadius: 8, border: "1px solid #ddd" }}
            />
          </div>
          <div style={{ marginBottom: 15 }}>
            <label style={{ display: "block", marginBottom: 5 }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "10px", borderRadius: 8, border: "1px solid #ddd" }}
            />
          </div>
          <button
            type="submit"
            style={{
              background: "#d6ef38",
              color: "black",
              border: "none",
              padding: "10px 24px",
              borderRadius: 10,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
