import React from "react";
import "../assets/css/Home.css";
import CarData from "../data/CarData";
import About from "./About";
import Contact from "./Contact";
import FeatureCar from "../components/FeatureCar";

const featuredCars = CarData.slice(0, 24);

// Divide into chunks of 4 cars per slide
const chunkSize = 4;
const slides = [];
for (let i = 0; i < featuredCars.length; i += chunkSize) {
  slides.push(featuredCars.slice(i, i + chunkSize));
}

function Home() {
  return (
    <div className="home-page font-text">
      {/* Hero Section */}
      <section class="hero ">
        <div class="hero-overlay"></div>
        <div class="hero-background"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-xl-8">
              <div class="hero-content text-center">
                <div class="hero-badge mb-4">
                  <span class="badge-text">Premium Car Marketplace</span>
                </div>
                <h1 class="hero-title mb-4">Find Your Dream Car</h1>
                <p class="hero-subtitle mb-5">
                  Explore the best cars with top features and prices. Your
                  perfect car is just a click away.
                </p>
                <div class="hero-actions">
                  <a href="/cars" class="btn btn-primary btn-lg">
                    Browse Cars
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="ms-2"
                    >
                      <path
                        d="M7.5 15L12.5 10L7.5 5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                  <a href="#features" class="btn btn-outline-light btn-lg ms-3">
                    Learn More
                  </a>
                </div>
                <div class="hero-stats mt-5 pt-4">
                  <div class="row g-4">
                    <div class="col-6 col-md-3">
                      <div class="stat-item">
                        <div class="stat-number">500+</div>
                        <div class="stat-label">Premium Cars</div>
                      </div>
                    </div>
                    <div class="col-6 col-md-3">
                      <div class="stat-item">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">Top Brands</div>
                      </div>
                    </div>
                    <div class="col-6 col-md-3">
                      <div class="stat-item">
                        <div class="stat-number">10K+</div>
                        <div class="stat-label">Happy Customers</div>
                      </div>
                    </div>
                    <div class="col-6 col-md-3">
                      <div class="stat-item">
                        <div class="stat-number">24/7</div>
                        <div class="stat-label">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-scroll">
          <div class="scroll-indicator">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Cars */}

      <FeatureCar/>

      <section className="hero-about bg-black text-white py-5 text-center">
        <div className="container">
          <h1 className="hero-title font-logo">About AutoCar</h1>
          <p className="hero-subtitle mt-3">
            We help you find your dream car with ease and confidence. Explore,
            compare, and buy your favorite cars all in one place.
          </p>
        </div>
      </section>
      <About />
      <section className="mission py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">Our Mission</h2>
          <p className="text-center mb-4">
            At AutoCar, our mission is to provide car enthusiasts and buyers
            with a seamless platform to discover, compare, and purchase the
            perfect car. We combine reliability, transparency, and the latest
            technology to make car shopping simple and enjoyable.
          </p>
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="mission-card p-3 shadow-sm rounded">
                <h5>Wide Selection</h5>
                <p>
                  Choose from a variety of cars, from luxury to electric models.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mission-card p-3 shadow-sm rounded">
                <h5>Trusted Listings</h5>
                <p>Every car is verified to ensure quality and authenticity.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mission-card p-3 shadow-sm rounded">
                <h5>Easy Purchase</h5>
                <p>Our platform allows quick and safe car purchases online.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default Home;
