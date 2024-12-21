import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetailsPage.css";

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/products/getProduct/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToWishlist = () => {
    if (!product) {
      alert("Product details are not loaded yet.");
      return;
    }

    if (!wishlist.some((item) => item.id === product.id)) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      alert("Product added to wishlist!");
    } else {
      alert("This product is already in your wishlist.");
    }
  };

  const addToCart = () => {
    if (!product) {
      alert("Product details are not loaded yet.");
      return;
    }

    if (!cart.some((item) => item.id === product.id)) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert("Product added to cart!");
    } else {
      alert("This product is already in your cart.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-details-page">
      <div className="products-details-container">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        {/* Product Info */}
        <div className="products-info">
          <h1 className="products-title">{product.title}</h1>
          <p className="products-category">
            <strong className="category-label">Category:</strong>{" "}
            {product.category}
          </p>
          <p className="products-description">{product.description}</p>
          <p className="products-price">
            <strong>Price:</strong> ${product.price}
          </p>

          <button className="add-to-wishlist-button" onClick={addToWishlist}>
            Add to Wishlist
          </button>
          <button className="add-to-cart-button" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
