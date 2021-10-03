import React from "react";
import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import { getAllProductsReducer } from "../reducers/productReducer";

export default function Homescreen() {
  const getallproductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );

  const { loading, products, error } = getallproductsstate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <img src="https://wallpapercave.com/wp/wp2761194.gif" alt="loading" />
        ) : error ? (
          <img src="https://c.tenor.com/_NQggQCrfrcAAAAM/wrong-number-dog.gif" width="300" height="600" alt="loading failed" />
        ) : (
          products.map((product) => {
            return (
              <div className="col-md-3 m-2 p-2">
                <div className="bg-light card">
                  <Product product={product} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
