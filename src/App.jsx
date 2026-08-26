import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

// Auth
import { AuthProvider } from "./auth/AuthContext";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Car from "./pages/Car";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DetailCard from "./pages/DetailCard";
import PaymentPage from "./pages/PaymentPage";
import PaymentQR from "./pages/PaymentQR";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";

// Auth
import Login from "./auth/Login";
import Register from "./auth/Register";

// Admin
import Dashboard from "./Admin/Dashboard";
import Overview from "./Admin/Overview";
import Settings from "./Admin/Settings";


// Website Layout
function Layout() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* ================= WEBSITE ================= */}
          <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="cars" element={<Car />} />
          <Route path="cars/:id" element={<DetailCard />} />

          <Route path="payment/:id" element={<PaymentPage />} />
          <Route path="payment/:id/qr" element={<PaymentQR />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favorites" element={<Favorites />} />

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

        </Route>


        {/* ================= ADMIN ================= */}
        <Route path="/admin/dashboard" element={<Dashboard />}>

          <Route index element={<Overview />} />

          <Route path="overview" element={<Overview />} />
          <Route path="settings" element={<Settings />} />

        </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;