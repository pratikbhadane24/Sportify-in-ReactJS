import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

export default function Product({ product }) {
  return (
    <div className="col-md-3 m-3 card p-2">
      <div>
        <Link to={`product/${product.id}`}>
          <img src={product.image} className="img-fluid" alt="product" />
          <div className=" text-start">
            <h1>{product.name}</h1>
            <Rating
              style={{ color: "red" }}
              initialRating={product.rating}
              emptySymbol="fas fa-heart-broken fa-1x"
              fullSymbol="fa fa-heart fa-1x"
              readonly
            />
            <h1>Price: ₹{product.price}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
