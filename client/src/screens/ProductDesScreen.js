import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { getProductById } from "../actions/productActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Review from "../components/Review";

export default function ProductDesScreen({ match }) {
  const productid = match.params.id;
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);

  const getproductbyidstate = useSelector((state) => state.getProductByIdReducer);
  const { product, loading, error } = getproductbyidstate;

  function addtocart() {
    dispatch(addToCart(product, quantity));
  }

  useEffect(() => {
    dispatch(getProductById(productid));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error="Something went wrong...!" />
      ) : (
        <div className="row">
          <div className="col-md-6">
            <div className="shadow-lg bg-body rounded p-5 m-2">
              <h4>{product.name}</h4>
              <img src={product.image} className="img-fluid m-3 bigImg" alt="myProduct" />
              <p>
                <h1>Product Description:</h1>

                {product.description}
              </p>
            </div>
          </div>
          <div className="col-md-6 text-left">
            <div className="shadow-lg bg-body rounded ">
              <div className="m-2 p-5">
                <h4>Want to Buy?</h4>
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
                    }}>
                    {[...Array(product.countInStock).keys()].map((x, i) => {
                      return <option value={i + 1}>{i + 1}</option>;
                    })}
                  </select>
                </div>
                <hr />
                <div className="text-start">
                  {product.countInStock > 0 ? (
                    <button className="btn btn-dark btn-lg" onClick={addtocart}>
                      Add to Cart
                    </button>
                  ) : (
                    <div>
                      <h4 className="text-danger text-start">Oops... Product is Out of Stock</h4>
                      <button className="btn btn-dark btn-lg" disabled onClick={addtocart}>
                        Add to Cart
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="shadow-lg bg-body rounded p-5">
                <Review product={product} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
