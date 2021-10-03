import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { getProductById } from "../actions/productActions";

export default function ProductDesScreen({ match }) {
  const productid = match.params.id;
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);

  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );
  const { product, loading, error } = getproductbyidstate;

  function addtocart() {
    dispatch(addToCart(product, quantity));
  }

  useEffect(() => {
    dispatch(getProductById(productid));
  }, []);

  return (
    <div>
      {loading ? (
        <img
          src="https://wallpapercave.com/wp/wp2761194.gif"
          alt="loading"
          height="500"
          width="1600"
        />
      ) : error ? (
        <img
          src="https://c.tenor.com/_NQggQCrfrcAAAAM/wrong-number-dog.gif"
          width="300"
          height="600"
          alt="loading failed"
        />
      ) : (
        <div className="row">
          <div className="col-md-6">
            <div className="card p-5 m-2">
              <h1>{product.name}</h1>
              <img
                src={product.image}
                className="img-fluid m-3 bigImg"
                alt="myProduct"
              />
              <p>
                <h1>Product Description:</h1>

                {product.description}
              </p>
            </div>
          </div>
          <div className="col-md-6 text-left">
            <div className="m-5">
              <h1>Price: ₹{product.price}</h1>
              <hr />
              <h1>Select Quantity</h1>

              <div class="input-group">
                <div class="input-group-prepend">
                  <label class="input-group-text">Options</label>
                </div>
                <select
                  className="custom-select"
                  value={quantity}
                  onChange={(e) => {
                    setquantity(e.target.value);
                  }}
                >
                  {[...Array(product.countInStock).keys()].map((x, i) => {
                    return <option value={i + 1}>{i + 1}</option>;
                  })}
                </select>
              </div>
              <hr />
              <button className="btn btn-dark btn-lg" onClick={addtocart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
