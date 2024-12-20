import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div
          className="nav-logo"
          onClick={() => {
            <Link to="/home"></Link>;
          }}
        >
          <img src="./assets/logo-white.png" alt="logo" />
        </div>
        <div className="navbar-links">
          <div className="navbar-link">
            <Link to="/home">Home</Link>
          </div>
          <div className="navbar-link">
            <Link to="/products">Products</Link>
          </div>
          <div className="navbar-link">
            <Link to="/about">Contact Us</Link>
          </div>
          <div className="icons-container">
            <Link to="/search">
              <i className="fas fa-search"></i>
            </Link>
            <Link to="/shopping-cart">
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
      </nav>
    </>
  );
}
