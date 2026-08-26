import React from "react";
import CarData from "../data/CarData";
import CarCard from "./CarCard";

const featuredCars = CarData.slice(0, 24);
const chunkSize = 4;
const slides = [];

for (let i = 0; i < featuredCars.length; i += chunkSize) {
  slides.push(featuredCars.slice(i, i + chunkSize));
}

function FeatureCar() {
  return (
    <div>
      <section className="featured-cars py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">Featured Cars</h2>

          <div
            id="featuredCarsCarousel"
            className="carousel slide position-relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
                >
                  <div className="row g-4 justify-content-center">
                    {slide.map((car, carIndex) => (
                      <div key={car.id} className="col-md-3 col-sm-6">
                        <div
                          className="featured-cars__item"
                          style={{ animationDelay: `${carIndex * 0.1}s` }}
                        >
                          <CarCard car={car} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#featuredCarsCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-dark rounded-circle p-1"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#featuredCarsCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-dark rounded-circle p-2"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeatureCar;
