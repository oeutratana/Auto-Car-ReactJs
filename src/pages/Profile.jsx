import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaSignOutAlt,
  FaCamera,
} from "react-icons/fa";
import { useAuth } from "../auth/AuthContext";
import "../assets/css/Profile.css";

const DEFAULT_AVATAR =
  "https://i.pinimg.com/736x/32/9b/54/329b54d07444f009b0634f438db9a449.jpg";

function Profile() {
  const { user, logout, updateProfile } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "+1 234 567 890",
  });

  const [avatar, setAvatar] = useState(user?.avatar || DEFAULT_AVATAR);
  const [preview, setPreview] = useState(user?.avatar || "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      avatar: preview || avatar,
    });
    alert("Profile updated successfully!");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="profile-page py-5 font-text bg-light">
      <div className="container">
        <h2 className="text-center mb-5">My Profile</h2>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg p-4 rounded-4">
              {/* Avatar & Name */}
              <div className="text-center mb-4">
                <div
                  className="avatar-wrapper mx-auto mb-3"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <img
                    src={preview || avatar}
                    alt={formData.name}
                    className="rounded-circle profile-avatar border border-3 border-primary"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="avatar-overlay">
                    <FaCamera className="camera-icon" />
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </div>
                <h4 className="fw-bold">
                  <FaUser className="me-2 text-primary" />
                  {formData.name}
                </h4>
                <p className="text-muted">
                  <FaEnvelope className="me-2" />
                  {formData.email}
                </p>
              </div>

              {/* Profile Form */}
              <form onSubmit={handleSave}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaUser className="me-2 text-primary" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaEnvelope className="me-2 text-primary" />
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaPhone className="me-2 text-primary" />
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 fw-bold">
                  Save Changes
                </button>
              </form>

              <hr className="my-4" />

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-outline-danger fw-bold px-4"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="me-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
