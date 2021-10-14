import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { getAllProducts } from "../actions/productActions";

export default function Productslist() {
  const getallproductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { products, loading, error } = getallproductsstate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="pt-2 p-5 mt-0">
      <h4 className="text-start mb-3">Products List</h4>
      {loading && <Loader />}
      <table className="table table-striped table-bordered table-hover mb-5 ">
        <thead className="bg-dark text-light">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>ID</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {error && <Error error="Something Went Wrong" />}
          {products &&
            products.map((product) => {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>₹{product.price}</td>
                  <td>{product.countInStock}</td>
                  <td>{product._id}</td>
                  <td>
                    <i class="fa fa-trash"></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
