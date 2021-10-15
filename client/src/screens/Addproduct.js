import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Addproduct() {
  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [countinstock, setcountinstock] = useState();
  const [imageurl, setimageurl] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const dispatch = useDispatch();

  const addproduct = (e) => {
    e.preventDefault();
    const product = {
      name: name,
      price: price,
      countInStock: countinstock,
      image: imageurl,
      description: description,
      category,
    };
  };

  return (
    <div className="text-start">
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Add Product</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <a class="btn-group me-2 text-decoration-none" href="/admin">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Go Back
              </button>
            </a>
          </div>
        </div>
      </main>
      <form onSubmit={addproduct}>
        <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="mb-3">
            <label class="form-label">Product Title</label>
            <input
              type="text"
              class="form-control"
              placeholder="Add Product Title"
              required
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label for="productdescription" class="form-label">
              Product Description
            </label>
            <textarea
              class="form-control"
              rows="3"
              placeholder="Add Product Description"
              required
              value={description}
              onChange={(e) => {
                setdescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">Product Category</label>
            <input
              type="text"
              class="form-control"
              placeholder="Add Product Category"
              required
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Product Price</label>
            <input
              type="number"
              class="form-control"
              placeholder="Add Product Price"
              required
              value={price}
              onChange={(e) => {
                setprice(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Count In Stock</label>
            <input
              type="number"
              class="form-control"
              placeholder="Add Count In Stock"
              required
              value={countinstock}
              onChange={(e) => {
                setcountinstock(e.target.value);
              }}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Image URL</label>
            <input
              type="text"
              class="form-control"
              placeholder="Add Product Image URL"
              required
              value={imageurl}
              onChange={(e) => {
                setimageurl(e.target.value);
              }}
            />
          </div>
          <hr />
          <div class=" mb-3 d-grid">
            <button class="btn btn-dark" type="submit">
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
