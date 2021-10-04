import React, { useState } from "react";

export default function Filter() {
  const [searchkey, setsearchkey] = useState("");
  const [sort, setsort] = useState("popular");
  const [category, setcategory] = useState("all");

  return (
    <p>
      <div className="text-center p-2">
        <button
          className="btn btn-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Search And Filtering
        </button>
      </div>
      <div className="container  collapse" id="collapseExample">
        <div className="row justify-content-center">
          <div className="col-5 m-2">
            <input
              value={searchkey}
              onChange={(e) => {
                searchkey(e.target.value);
              }}
              type="text"
              placeholder="Search Products"
              className="form-control"
            />
          </div>
          <div className="col-2 m-2">
            <select
              className="drop-down form-control"
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
              className="drop-down form-control"
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

          <button className="col-2 m-2 btn btn-dark">Filter Search</button>
        </div>
        <hr />
      </div>
    </p>
  );
}
