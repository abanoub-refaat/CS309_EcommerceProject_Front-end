import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);
const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  
  useEffect(() => {
    console.log(storedCart)
    setCart(storedCart);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-container">
      <h1>Your cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} className="cart-item-image" />
              <div className="cart-item-info">
                <h3 className="cart-item-title">
                  <Link to={`/product/${product.id}`}>{product.title}</Link>
                </h3>
                <p className="cart-item-price">${product.price}</p>
                <button
                  className="remove-from-cart-button"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;