import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaTrash } from "react-icons/fa";
import CarData from "../data/CarData";
import {
  FAVORITES_STORAGE_KEY,
  getStoredCarIds,
  removeStoredCarId,
} from "../utils/shopStorage";
import "../assets/css/ShopList.css";

function Favorites() {
  const [favoriteIds, setFavoriteIds] = useState(() =>
    getStoredCarIds(FAVORITES_STORAGE_KEY)
  );
  const cars = CarData.filter((car) => favoriteIds.includes(car.id));

  const handleRemove = (carId) => {
    removeStoredCarId(FAVORITES_STORAGE_KEY, carId);
    setFavoriteIds(getStoredCarIds(FAVORITES_STORAGE_KEY));
  };

  return (
    <div className="shop-list-page py-5 font-text">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
          <div>
            <h2 className="fw-bold mb-1">Favorites</h2>
            <p className="text-muted mb-0">{cars.length} car saved to your heart list</p>
          </div>
          <Link to="/cars" className="btn btn-outline-dark">
            Browse Cars
          </Link>
        </div>

        {cars.length === 0 ? (
          <div className="shop-list-empty">
            <h4 className="fw-bold">No favorites yet</h4>
            <p className="text-muted mb-4">Tap the heart on a detail page to save a car.</p>
            <Link to="/cars" className="btn btn-primary">
              Find Cars
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            {cars.map((car) => (
              <div className="col-md-6 col-lg-4" key={car.id}>
                <div className="card shop-list-card shadow-sm h-100">
                  <img
                    src={car.image}
                    alt={`${car.brand} ${car.name}`}
                    className="shop-list-card__image"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold mb-1">
                      {car.brand} {car.name}
                    </h5>
                    <p className="text-primary fw-semibold mb-2">{car.price}</p>
                    <p className="text-muted small flex-grow-1">{car.description}</p>
                    <div className="shop-list-actions">
                      <Link to={`/cars/${car.id}`} className="btn btn-primary">
                        <FaHeart aria-hidden="true" /> View
                      </Link>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => handleRemove(car.id)}
                      >
                        <FaTrash aria-hidden="true" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
