import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
export default function Hero() {
  const token = localStorage.getItem("token");
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Discover Your Next Favorite Thing</h1>
        <p>
          Shop the latest trends, unbeatable deals, and exclusive collections
          <br />
          all in one place.
        </p>
        <div className="go-to-button">
          <Link to={"/products"} className="hero-button">
            Explore Products
          </Link>
          
          <Link to={"/signup"} className="hero-button">
            SignUp Now
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src="./assets/hero.svg" alt="Hero-image" />
      </div>
    </div>
  );
}
