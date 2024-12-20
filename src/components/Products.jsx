import { useEffect, useState } from "react";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleClick = () => {
    console.log(products);
  };
  return (
    <div className="container">
      <h2 className="products">Our products</h2>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img
            className="imageOfProduct"
            src={product.image}
            alt={product.title}
          />
          <h3 className="productTitle">{product.title}</h3>
          <p className="description">{product.description}</p>
          <p className="price">{product.price}</p>
          <button onClick={handleClick} value={product.id}>
            Details
          </button>
        </div>
      ))}
    </div>
  );
}
export default Products;
