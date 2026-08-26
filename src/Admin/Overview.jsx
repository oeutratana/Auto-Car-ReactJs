import React from "react";

function Overview() {
  return (
    <div>
      <div className="topbar">
        <h2>Overview</h2>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="top-grid">
        <div className="sales-section">
          <div className="section-header">
            <h3>Sales Overview</h3>
          </div>
          <div className="stats-row">
            <div className="stat-card">
              <p>Total Sales</p>
              <h2>$24,500</h2>
              <span className="growth">+12%</span>
            </div>
            <div className="stat-card">
              <p>Orders</p>
              <h2>350</h2>
              <span className="growth">+8%</span>
            </div>
            <div className="stat-card">
              <p>Customers</p>
              <h2>120</h2>
              <span className="growth">+5%</span>
            </div>
          </div>
        </div>
        <div className="volume-card">
          <h3>Volume</h3>
          <div className="bars-chart">
            <div className="chart-bar" style={{ height: "60%" }}></div>
            <div className="chart-bar" style={{ height: "80%" }}></div>
            <div className="chart-bar" style={{ height: "45%" }}></div>
            <div className="chart-bar" style={{ height: "90%" }}></div>
            <div className="chart-bar" style={{ height: "70%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
