import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import CarData from "../data/CarData";
import {
  addStoredCarId,
  CART_STORAGE_KEY,
  FAVORITES_STORAGE_KEY,
  getStoredCarIds,
  toggleStoredCarId,
} from "../utils/shopStorage";
import "../assets/css/DetailCard.css";

function DetailCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = CarData.find((c) => c.id === parseInt(id));
  const carId = Number(id);
  const [isFavorite, setIsFavorite] = useState(() =>
    getStoredCarIds(FAVORITES_STORAGE_KEY).includes(carId)
  );
  const [isInCart, setIsInCart] = useState(() =>
    getStoredCarIds(CART_STORAGE_KEY).includes(carId)
  );

  if (!car) {
    return (
      <div className="container py-5 text-center">
        <h2>Car not found!</h2>
        <Link to="/cars" className="btn btn-primary mt-3">
          Back to Cars
        </Link>
      </div>
    );
  }

  const handleFavorite = () => {
    setIsFavorite(toggleStoredCarId(FAVORITES_STORAGE_KEY, car.id));
  };

  const handleAddCart = () => {
    addStoredCarId(CART_STORAGE_KEY, car.id);
    setIsInCart(true);
  };

  return (
    <div className="container py-5 font-text detail-card-page">
      <div className="row g-4 align-items-center">
        {/* 🖼️ Car Image */}
        <div className="col-md-6">
          <img
            src={car.image}
            alt={`${car.brand} ${car.name}`}
            className="img-fluid rounded shadow-sm"
            style={{ borderRadius: "12px" }}
          />
        </div>

        {/* 📄 Car Details */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-2">
            {car.brand} {car.name}
          </h2>
          <h4 className="text-primary fw-semibold mb-3">{car.price}</h4>
          <p className="text-muted mb-4">{car.description}</p>

          {/* Features */}
          {car.features && car.features.length > 0 && (
            <>
              <h5 className="fw-semibold mb-2">Features:</h5>
              <ul className="list-group mb-4">
                {car.features.map((feature, index) => (
                  <li key={index} className="list-group-item">
                     {feature}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Buttons */}
          <div className="detail-actions">
            {/* <Link to="/cars" className="btn btn-outline-secondary">
              Back
            </Link> */}
            {/* <button
              type="button"
              className={`btn detail-icon-btn ${
                isFavorite ? "detail-icon-btn--favorite active" : ""
              }`}
              onClick={handleFavorite}
            >
              <FaHeart aria-hidden="true" />
              <span>{isFavorite ? "Saved" : "Heart"}</span>
            </button> */}
            <button
              type="button"
              className={`btn detail-icon-btn ${
                isInCart ? "detail-icon-btn--cart active" : ""
              }`}
              onClick={handleAddCart}
            >
              <FaShoppingCart aria-hidden="true" />
              <span>{isInCart ? "In Cart" : "Add Cart"}</span>
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate(`/payment/${car.id}`)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Optional styling */}
      <style jsx>{`
        .list-group-item {
          border: none;
          background-color: #f8f9fa;
          margin-bottom: 6px;
          border-radius: 8px;
        }
        .list-group-item:hover {
          background-color: #e9ecef;
        }
      `}</style>
    </div>
  );
}

export default DetailCard;
