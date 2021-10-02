import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

export default function Product({ product }) {
  return (
    <div>
      <Link to={`product/${product._id}`}>
        <img src={product.image} className="img-fluid" alt="product" />
        <div className=" text-start">
          <h1>{product.name}</h1>
          <Rating
            style={{ color: "orange" }}
            initialRating={product.rating}
            emptySymbol="fa fa-star-o"
            fullSymbol="fa fa-star"
            readonly
          />
          <h1>Price: ₹{product.price}</h1>
        </div>
      </Link>
    </div>
  );
}
