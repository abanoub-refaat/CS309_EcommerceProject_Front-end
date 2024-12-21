import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/home"> <img src="./assets/logo-white.png" alt="logo" /> </Link>
        </div>
        <div className="navbar-links">
          <div className="navbar-link">
            <Link to="/home">Home</Link>
          </div>
          <div className="navbar-link">
            <Link to="/products">Products</Link>
          </div>
          <div className="navbar-link">
            <Link to="/about">About Us</Link>
          </div>
          <div className="icons-container">
            <Link to="/search">
              <i className="fas fa-search"></i>
            </Link>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <Link to="/wishlist">
              <i className="fas fa-heart"></i>
            </Link>
          </div>
        </div>
        <div className="btns-container">
          <Link to="/login" className="btn">
            login
          </Link>
          <Link to="/signup" className="btn">
            signup
          </Link>
        </div>
        <div className="toggle-menu">
        <button className={`toggle-btn ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button><button className={`close-btn ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <i className="fas fa-times"></i>
        </button>
          <div className= {`navbar-menu ${isOpen ? "open" : ""}`}>
            <ul className="toggle-list" >
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/search">Search</Link>
            <Link to="/shopping-cart">Shopping Cart</Link>
            <Link to="/wishlist">Wishlist</Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
