import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetailsPage.css";

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  // Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
    console.log(storedWishlist);
  }, []);

  // Add product to wishlist
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        {/* Product Info */}
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-category">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="product-description">{product.description}</p>
          <p className="product-price">
            <strong>Price:</strong> ${product.price}
          </p>
          <button className="add-to-cart-button" onClick={addToWishlist}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
