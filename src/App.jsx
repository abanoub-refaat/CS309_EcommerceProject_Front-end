import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Forget from "./components/Forget";
import Footer from "./components/Footer";
import Products from "./components/ProductsPage";
import ProductDetailsPage from "./components/ProductDetailsPage";
import AboutUs from "./components/AboutUs";
import UserProfile from "./components/UserProfile";
import Wishlist from "./components/Wishlist";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<Forget />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
