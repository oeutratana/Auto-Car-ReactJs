import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaCreditCard, FaDollarSign, FaWallet } from "react-icons/fa";
import CarData from "../data/CarData";
import "../assets/css/PaymentPage.css";

function getPriceNumber(price) {
  return Number(price.replace(/[^0-9]/g, ""));
}

function PaymentPage() {
  const { id } = useParams();
  const car = CarData.find((item) => item.id === Number(id));
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    fullName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const navigate = useNavigate();

  const handlePayment = (event) => {
    event.preventDefault();
    navigate(`/payment/${id}/qr`);
  };

  if (!car) {
    return (
      <div className="container py-5 text-center">
        <h2>Car not found!</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Back Home
        </Link>
      </div>
    );
  }

  const subtotal = getPriceNumber(car.price);
  const shipping = 500;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  return (
    <div className="checkout-page font-text">
      <div className="container checkout-page__inner">
        <form className="checkout-layout" onSubmit={handlePayment}>
          <div className="checkout-main">
            <section className="checkout-panel">
              <h2>Shipping Address</h2>

              <label className="checkout-field checkout-field--full">
                <span>Name</span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="First & Last Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="checkout-field checkout-field--full">
                <span>Address 1</span>
                <input
                  type="text"
                  name="address1"
                  placeholder="421, Dubai Main St"
                  value={formData.address1}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="checkout-field checkout-field--full">
                <span>Address 2</span>
                <input
                  type="text"
                  name="address2"
                  placeholder="Apartment, suite, etc."
                  value={formData.address2}
                  onChange={handleChange}
                />
              </label>

              <div className="checkout-grid checkout-grid--three">
                <label className="checkout-field">
                  <span>City</span>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label className="checkout-field">
                  <span>State</span>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select state</option>
                    <option value="Phnom Penh">Phnom Penh</option>
                    <option value="Kandal">Kandal</option>
                    <option value="Siem Reap">Siem Reap</option>
                  </select>
                </label>

                <label className="checkout-field">
                  <span>Zip</span>
                  <input
                    type="text"
                    name="zip"
                    placeholder="Zip code"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </section>

            <section className="checkout-panel">
              <h2>Payment Method</h2>

              <div className="payment-methods" role="radiogroup" aria-label="Payment method">
                <button
                  type="button"
                  className={`payment-method ${paymentMethod === "card" ? "active" : ""}`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <FaCreditCard aria-hidden="true" />
                  <span>Card</span>
                </button>
                <button
                  type="button"
                  className={`payment-method ${paymentMethod === "wallet" ? "active" : ""}`}
                  onClick={() => setPaymentMethod("wallet")}
                >
                  <FaWallet aria-hidden="true" />
                  <span>Wallet</span>
                </button>
                <button
                  type="button"
                  className={`payment-method ${paymentMethod === "cod" ? "active" : ""}`}
                  onClick={() => setPaymentMethod("cod")}
                >
                  <FaDollarSign aria-hidden="true" />
                  <span>COD</span>
                </button>
              </div>

              <label className="checkout-field checkout-field--full">
                <span>Name on Card</span>
                <input
                  type="text"
                  name="cardName"
                  placeholder="First & Last Name"
                  value={formData.cardName}
                  onChange={handleChange}
                  required={paymentMethod === "card"}
                />
              </label>

              <label className="checkout-field checkout-field--full">
                <span>Card Number</span>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required={paymentMethod === "card"}
                />
              </label>

              <div className="checkout-grid checkout-grid--three">
                <label className="checkout-field">
                  <span>Expiry</span>
                  <select
                    name="expiryMonth"
                    value={formData.expiryMonth}
                    onChange={handleChange}
                    required={paymentMethod === "card"}
                  >
                    <option value="">MM</option>
                    {Array.from({ length: 12 }, (_, index) => {
                      const month = String(index + 1).padStart(2, "0");
                      return (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      );
                    })}
                  </select>
                </label>

                <label className="checkout-field checkout-field--no-title">
                  <span>Year</span>
                  <select
                    name="expiryYear"
                    value={formData.expiryYear}
                    onChange={handleChange}
                    required={paymentMethod === "card"}
                  >
                    <option value="">YYYY</option>
                    {["2026", "2027", "2028", "2029", "2030"].map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="checkout-field">
                  <span>CVV</span>
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                    required={paymentMethod === "card"}
                  />
                </label>
              </div>
            </section>
          </div>

          <aside className="checkout-summary">
            <h2>Order Summary</h2>

            <div className="checkout-summary__product">
              <img src={car.image} alt={`${car.brand} ${car.name}`} />
              <div>
                <h3>
                  {car.brand} {car.name}
                </h3>
                <p>{car.description}</p>
              </div>
            </div>

            <div className="checkout-summary__rows">
              <div>
                <span>Subtotal</span>
                <strong>${subtotal.toLocaleString()}</strong>
              </div>
              <div>
                <span>Shipping</span>
                <strong>${shipping.toLocaleString()}</strong>
              </div>
              <div>
                <span>Tax</span>
                <strong>${tax.toLocaleString()}</strong>
              </div>
            </div>

            <div className="checkout-summary__total">
              <span>Total</span>
              <strong>${total.toLocaleString()}</strong>
            </div>

            <button type="submit" className="checkout-place-order">
              Place Order
            </button>
          </aside>
        </form>
      </div>
    </div>
  );
}

export default PaymentPage;
