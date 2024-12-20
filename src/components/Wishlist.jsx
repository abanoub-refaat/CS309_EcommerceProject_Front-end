import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  
import "./Wishlist.css";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
  useEffect(() => {
    console.log(storedWishlist)
    setWishlist(storedWishlist);
  }, []);


  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((product) => (
            <div key={product.id} className="wishlist-item">
              <img src={product.image} alt={product.title} className="wishlist-item-image" />
              <div className="wishlist-item-info">
                <h3 className="wishlist-item-title">
                  <Link to={`/product/${product.id}`}>{product.title}</Link>
                </h3>
                <p className="wishlist-item-price">${product.price}</p>
                <button
                  className="remove-from-wishlist-button"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
