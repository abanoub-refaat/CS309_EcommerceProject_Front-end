import React from "react";
// import { Link } from "react-router-dom";
import logo from "./../assets/logo1.webp";
import "./navbar.css";
export default function Navbar() {
    return (
        <>
            <nav className="navbar">

                <div className="nav-logo">
                    <img src={logo} alt="" />
                </div>

                <div className="navbar-links">
                    <div>
                        <a href="/Home">Home</a>
                    </div>
                    <div>
                        <a href="/Shop">Shop</a>
                    </div>
                    <div>
                        <a href="/Our Story">Our story</a>
                    </div>
                    <div>
                        <a href="/Blog">Blog</a>
                    </div>
                    <div>
                        <a href="/Contact Us">Contact Us</a>
                    </div>
                    <div className="icons">
                        <div>
                            <a href="search"><i className="fas fa-search"></i></a>
                            <a href="shopcart"><i className="fas fa-shopping-cart"></i></a>
                            <a href="like"><i className="fas fa-heart"></i></a>
                        </div>

                    </div>
                </div>
                <div className="btns-container">
                    <button type="submit" className="submit-button">
                        login
                    </button>
                </div>

            </nav>
        </>
    )
}
