import React from "react";
import { getProductById } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Editproduct({ match }) {
  const dispatch = useDispatch();
  const productstate = useSelector((state) => state.getProductByIdReducer);
  const { product, error, loading } = productstate;

  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [countinstock, setcountinstock] = useState();
  const [imageurl, setimageurl] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    dispatch(getProductById(match.params.productid));
  }, []);

  function editproduct() {}

  return (
    <div className="text-start">
      {loading && (
        <div className="text-center">
          <Loader />
        </div>
      )}
      {product && (
        <form onSubmit={editproduct}>
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="mb-3">
              <h4>Edit Product</h4>
              <label className="form-label">Product Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Edit Product Title"
                required
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="productdescription" className="form-label">
                Product Description
              </label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Edit Product Description"
                required
                value={description}
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Product Category</label>
              <input
                type="text"
                className="form-control"
                placeholder="Edit Product Category"
                required
                value={category}
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Product Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Edit Product Price"
                required
                value={price}
                onChange={(e) => {
                  setprice(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Count In Stock</label>
              <input
                type="number"
                className="form-control"
                placeholder="Edit Count In Stock"
                required
                value={countinstock}
                onChange={(e) => {
                  setcountinstock(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="Edit Product Image URL"
                required
                value={imageurl}
                onChange={(e) => {
                  setimageurl(e.target.value);
                }}
              />
            </div>
            <hr />
            {error && <Error error="Something went wrong!" />}
            <div className=" mb-3 d-grid">
              <button className="btn btn-dark" type="submit">
                Edit Product Details
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
