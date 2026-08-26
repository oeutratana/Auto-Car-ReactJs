import React, { useState } from "react";
import CarData from "../data/CarData";
import CarCard from "../components/CarCard";

function Car() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortOption, setSortOption] = useState("");

  const brands = [...new Set(CarData.map((car) => car.brand))];

  const filteredCars = CarData.filter((car) => {
    const searchText = searchTerm.toLowerCase();
    const matchesSearch =
      car.name.toLowerCase().includes(searchText) ||
      car.brand.toLowerCase().includes(searchText);
    const matchesBrand = selectedBrand ? car.brand === selectedBrand : true;

    return matchesSearch && matchesBrand;
  });

  if (sortOption === "priceLowHigh") {
    filteredCars.sort(
      (a, b) =>
        parseInt(a.price.replace(/[^0-9]/g, "")) -
        parseInt(b.price.replace(/[^0-9]/g, ""))
    );
  } else if (sortOption === "priceHighLow") {
    filteredCars.sort(
      (a, b) =>
        parseInt(b.price.replace(/[^0-9]/g, "")) -
        parseInt(a.price.replace(/[^0-9]/g, ""))
    );
  } else if (sortOption === "nameAZ") {
    filteredCars.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "nameZA") {
    filteredCars.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortOption === "popular") {
    filteredCars.sort((a, b) => {
      if (a.popular && !b.popular) return -1;
      if (!a.popular && b.popular) return 1;
      return 0;
    });
  }

  return (
    <div className="cars-page font-text">
      <section className="all-cars py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">All Cars</h2>

          <div className="row mb-4 g-2 justify-content-center">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by brand or name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <select
                className="form-select"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="">All Brands</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <select
                className="form-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="">Sort by</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="nameAZ">Model: A-Z</option>
                <option value="nameZA">Model: Z-A</option>
                <option value="popular">Popular</option>
              </select>
            </div>
          </div>

          <div className="row g-4">
            {filteredCars.length > 0 ? (
              <>
                {filteredCars.map((car) => (
                  <div key={car.id} className="col-md-4 col-lg-3">
                    <CarCard car={car} />
                  </div>
                ))}
              </>
            ) : (
              <div className="col-12 text-center">
                <h5>No cars found.</h5>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Car;
