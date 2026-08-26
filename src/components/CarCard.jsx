import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import {
  addStoredCarId,
  CART_STORAGE_KEY,
  FAVORITES_STORAGE_KEY,
  getStoredCarIds,
  toggleStoredCarId,
} from "../utils/shopStorage";
import "../assets/css/CarCard.css";

function CarCard({ car }) {
  const [isFavorite, setIsFavorite] = useState(() =>
    getStoredCarIds(FAVORITES_STORAGE_KEY).includes(car.id)
  );
  const [isInCart, setIsInCart] = useState(() =>
    getStoredCarIds(CART_STORAGE_KEY).includes(car.id)
  );

  const handleFavorite = () => {
    setIsFavorite(toggleStoredCarId(FAVORITES_STORAGE_KEY, car.id));
  };

  const handleAddCart = () => {
    addStoredCarId(CART_STORAGE_KEY, car.id);
    setIsInCart(true);
  };

  return (
    <div className="card car-card auto-car-card h-100 border-0">
      <div className="auto-car-card__media">
        <img
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          className="auto-car-card__image"
        />
        <button
          type="button"
          className={`auto-car-card__heart ${isFavorite ? "active" : ""}`}
          onClick={handleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <FaHeart aria-hidden="true" />
        </button>
      </div>

      <div className="card-body auto-car-card__body">
        <h5 className="auto-car-card__title">
          {car.brand} {car.name}
        </h5>
        <p className="auto-car-card__meta">
          {car.price} - {car.description}
        </p>

        {car.features && car.features.length > 0 && (
          <ul className="auto-car-card__features">
            {car.features.slice(0, 3).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        )}

        <div className="auto-car-card__actions">
          <button
            type="button"
            className={`auto-car-card__action ${
              isInCart ? "auto-car-card__action--added" : ""
            }`}
            onClick={handleAddCart}
          >
            {/* <FaShoppingCart aria-hidden="true" /> */}
            <span>{isInCart ? "Added" : "Add Cart"}</span>
          </button>
          <Link
            to={`/cars/${car.id}`}
            className="auto-car-card__action auto-car-card__action--details"
          >
            {/* <FaEye aria-hidden="true" /> */}
            <span>Show Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
