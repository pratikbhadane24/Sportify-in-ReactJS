import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="col-md-3 m-5 card p-2">
      <div>
        <Link to={`product/${product.id}`}>
          <img src={product.image} className="img-fluid" alt="product" />
          <h1>{product.name}</h1>
          <h1>Rating: {product.rating}</h1>
          <h1>Price: ₹{product.price}</h1>
        </Link>
      </div>
    </div>
  );
}
