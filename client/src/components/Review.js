import React from "react";
import Rating from "react-rating";
import { useState } from "react";

export default function Review() {
  const [rating, setrating] = useState(5);
  const [comment, setcomment] = useState("");

function sendreview(){
    alert(rating+comment)
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
      <button className="btn btn-dark btn-lg mt-5" onClick={sendreview}>
        Submit Review
      </button>
    </div>
  );
}
