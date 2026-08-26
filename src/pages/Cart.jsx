import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import CarData from "../data/CarData";
import {
  CART_STORAGE_KEY,
  getStoredCarIds,
  removeStoredCarId,
} from "../utils/shopStorage";
import "../assets/css/Cart.css";

function getPriceNumber(price) {
  return Number(price.replace(/[^0-9]/g, ""));
}

function Cart() {
  const navigate = useNavigate();
  const [cartIds, setCartIds] = useState(() => getStoredCarIds(CART_STORAGE_KEY));
  const [quantities, setQuantities] = useState(() =>
    getStoredCarIds(CART_STORAGE_KEY).reduce(
      (items, carId) => ({ ...items, [carId]: 1 }),
      {}
    )
  );
  const cars = CarData.filter((car) => cartIds.includes(car.id));

  const subtotal = cars.reduce(
    (sum, car) => sum + getPriceNumber(car.price) * (quantities[car.id] || 1),
    0
  );

  const updateQty = (carId, change) => {
    setQuantities((items) => ({
      ...items,
      [carId]: Math.max(1, (items[carId] || 1) + change),
    }));
  };

  const handleRemove = (carId) => {
    removeStoredCarId(CART_STORAGE_KEY, carId);
    setCartIds(getStoredCarIds(CART_STORAGE_KEY));
    setQuantities((items) => {
      const nextItems = { ...items };
      delete nextItems[carId];
      return nextItems;
    });
  };

  const handleCheckout = () => {
    if (cars.length > 0) {
      navigate(`/payment/${cars[0].id}`);
    }
  };

  return (
    <div className="cart-page font-text">
      <div className="container cart-page__inner">
        {cars.length === 0 ? (
          <div className="cart-empty">
            <h2>Your cart is empty</h2>
            <p>Add a car from the cars page to see it here.</p>
            <Link to="/cars" className="cart-empty__button">
              Browse Cars
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <section className="cart-table" aria-label="Shopping cart">
              <div className="cart-table__header">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
                <span aria-hidden="true"></span>
              </div>

              {cars.map((car) => {
                const quantity = quantities[car.id] || 1;
                const price = getPriceNumber(car.price);

                return (
                  <div className="cart-row" key={car.id}>
                    <div className="cart-product">
                      <img
                        src={car.image}
                        alt={`${car.brand} ${car.name}`}
                        className="cart-product__image"
                      />
                      <div>
                        <h3>
                          {car.brand} {car.name}
                        </h3>
                        <p>{car.description}</p>
                      </div>
                    </div>

                    <div className="cart-price">${price.toLocaleString()}</div>

                    <div className="cart-qty" aria-label="Quantity controls">
                      <button type="button" onClick={() => updateQty(car.id, -1)}>
                        -
                      </button>
                      <span>{quantity}</span>
                      <button type="button" onClick={() => updateQty(car.id, 1)}>
                        +
                      </button>
                    </div>

                    <div className="cart-total">
                      ${(price * quantity).toLocaleString()}
                    </div>

                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() => handleRemove(car.id)}
                      aria-label={`Remove ${car.brand} ${car.name}`}
                    >
                      <FaTimes aria-hidden="true" />
                    </button>
                  </div>
                );
              })}
            </section>

            <aside className="cart-summary" aria-label="Order summary">
              <h2>Order Summary</h2>
              <div className="cart-summary__body">
                <div className="cart-summary__row">
                  <span>Subtotal</span>
                  <strong>${subtotal.toLocaleString()}</strong>
                </div>
                <div className="cart-summary__row">
                  <span>Shipping</span>
                  <strong>Free</strong>
                </div>
                <button type="button" className="cart-coupon">
                  Add coupon code
                  <span aria-hidden="true">-&gt;</span>
                </button>
              </div>
              <div className="cart-summary__total">
                <span>Total</span>
                <strong>${subtotal.toLocaleString()}</strong>
              </div>
              <button
                type="button"
                className="cart-checkout"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
