import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaQrcode, FaCheckCircle } from "react-icons/fa";
import CarData from "../data/CarData";
import "../assets/css/PaymentPage.css";

function getPriceNumber(price) {
  return Number(price.replace(/[^0-9]/g, ""));
}

function PaymentQR() {
  const { id } = useParams();
  const car = CarData.find((item) => item.id === Number(id));

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
        <div className="checkout-summary" style={{ padding: "2rem" }}>
          <div className="d-flex align-items-center gap-3 mb-4">
            <FaCheckCircle style={{ color: "#4f46e5", fontSize: "1.5rem" }} />
            <div>
              <h2 className="mb-1">Ready to pay</h2>
              <p className="mb-0 text-muted">Scan the QR code below with your payment app.</p>
            </div>
          </div>

          <div className="qr-payment-card">
            <div className="qr-payment-card__label">Pay with QR code</div>
            <div className="qr-code-wrapper">
              <FaQrcode className="qr-code-icon" aria-hidden="true" />
              <div className="qr-code-text">Scan to pay</div>
            </div>
            <div className="qr-payment-details">
              <div>
                <strong>Order</strong>
                <p>{car.brand} {car.name}</p>
              </div>
              <div>
                <strong>Amount</strong>
                <p>${total.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3>How to pay</h3>
            <ol className="qr-payment-instructions">
              <li>Open your banking or wallet app.</li>
              <li>Choose QR payment and scan the code.</li>
              <li>Confirm the payment amount of <strong>${total.toLocaleString()}</strong>.</li>
            </ol>
          </div>

          <div className="mt-4 text-center">
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentQR;
