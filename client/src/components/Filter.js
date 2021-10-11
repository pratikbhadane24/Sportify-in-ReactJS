import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../actions/productActions";

export default function Filter() {
  const [searchkey, setsearchkey] = useState("");
  const [sort, setsort] = useState("popular");
  const [category, setcategory] = useState("all");

  const dispatch = useDispatch();

  return (
    <p>
      <div className="container text-end p-2 accordion accordion-flush">
        <h2 class="accordion-header">
          <button
            className="accordion-button collapsed my_accordion"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Search And Filtering
          </button>{" "}
        </h2>
      </div>
      <div className="container collapse" id="collapseExample">
        <div className="row justify-content-center">
          <div className="col-5 m-2">
            <input
              value={searchkey}
              onChange={(e) => {
                setsearchkey(e.target.value);
              }}
              type="text"
              placeholder="Search Products"
              className="form-control"
            />
          </div>
          <div className="col-2 m-2">
            <select
              className="drop-down drop form-control"
              value={sort}
              onChange={(e) => {
                setsort(e.target.value);
              }}
            >
              <option value="popular">Popular</option>
              <option value="htl">Price High to Low</option>
              <option value="lth">Price Low to High</option>
            </select>
          </div>
          <div className="col-2 m-2">
            <select
              className="drop-down drop form-control"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            >
              <option value="all">All</option>
              <option value="football">Football</option>
              <option value="cricket">Cricket</option>
              <option value="basketball">Basketball</option>
              <option value="tennis">Tennis</option>
            </select>
          </div>

          <button
            className="col-2 m-2 btn btn-dark"
            onClick={() => {
              dispatch(filterProducts(searchkey, sort, category));
            }}
          >
            Filter Search
          </button>
        </div>
        <hr />
      </div>
    </p>
  );
}
