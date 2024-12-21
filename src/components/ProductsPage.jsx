import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsPage.css";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/products/getAllProducts?limit=100")
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            {/* Product Name */}
            <h2 className="product-title">{product.title}</h2>
            {/* Product Price */}
            <p className="product-price">
              <strong>Price:</strong> ${product.price}
            </p>
            {/* Show More Button */}
            <Link to={`/product/${product.id}`}>
              <button className="show-more-button">Show More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
