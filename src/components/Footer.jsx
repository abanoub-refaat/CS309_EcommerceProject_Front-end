import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>OurSite</h2>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Information</h3>
            <ul>
              <li><Link to="/account">My Account</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/cart">My Cart</Link></li>
              <li><Link to="/wishlist">My Wishlist</Link></li>
              
            </ul>
          </div>
          <div className="footer-column">
            <h3>Service</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

      <div className="footer-bottom">
        <p>©2023 OurSite All Rights are reserved</p>
        <div className="footer-payment">
          <img src="visa.png" alt="Visa" />
          <img src="mastercard.png" alt="Mastercard" />
          <img src="gpay.png" alt="Google Pay" />
          <img src="amex.png" alt="American Express" />
          <img src="paypal.png" alt="PayPal" />
        </div>
        <div className="footer-social">
        <h1>Follow us on Social Media</h1>
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-twitter" /> 
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
