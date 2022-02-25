import React, { useState } from "react";
import Rating from "react-rating";
import { useDispatch } from "react-redux";
import { addProductReview } from "../actions/productActions";

export default function Review({ product }) {
  const dispatch = useDispatch();
  const [rating, setrating] = useState(5);
  const [comment, setcomment] = useState("");

  function sendreview() {
    if (localStorage.getItem("currentUser")) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      var alreadyreviewed;
      for (let i = 0; i < product.reviews.length; i++) {
        // eslint-disable-next-line
        if (product.reviews[i].userid == currentUser._id) {
          alreadyreviewed = true;
        }
      }

      if (alreadyreviewed) {
        alert(`You have already reviewed this Product.`);
      } else {
        const review = {
          rating: rating,
          comment: comment,
        };

        dispatch(addProductReview(review, product._id));
      }
    } else {
      window.location.href = "/login";
    }
  }

  return (
    <div className="text-start">
      <h4>Give a Review</h4>
      <Rating
        style={{ color: "orange" }}
        initialRating={rating}
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        onChange={(e) => {
          setrating(e);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        className="form-control"
        value={comment}
        onChange={(e) => {
          setcomment(e.target.value);
        }}
      />
      <button className="btn btn-dark btn-lg mt-3 mb-3" onClick={sendreview}>
        Submit Review
      </button>
      <div className="shadow-lg p-5 mt-3 bg-body rounded">
        <h4>Latest Reviews</h4>
        {product.reviews &&
          product.reviews.map((review) => {
            return (
              <div className="text-start">
                <Rating
                  style={{ color: "orange" }}
                  initialRating={review.rating}
                  emptySymbol="fa fa-star-o"
                  fullSymbol="fa fa-star"
                  readonly
                />
                <p>{review.comment}</p>
                <p>By: {review.name}</p>
                <hr />
              </div>
            );
          })}{" "}
      </div>
    </div>
  );
}
