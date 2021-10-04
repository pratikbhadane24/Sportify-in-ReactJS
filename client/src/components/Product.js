import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

export default function Product({ product }) {
  return (
    <div>
      <Link to={`product/${product._id}`} style={{ textDecoration: 'none' }}>
        <img src={product.image} className="img-fluid" alt="product" />
        <div className="bg-dark text-center">
        <hr/>
          <h2>{product.name}</h2>
          <Rating
            style={{ color: "orange" }}
            initialRating={product.rating}
            emptySymbol="fa fa-star-o"
            fullSymbol="fa fa-star"
            readonly
          />
        <br />
          <h2>Price: ₹{product.price}</h2>
        <br />
        </div>
      </Link>
    </div>
  );
}
