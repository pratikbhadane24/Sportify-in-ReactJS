import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserId } from "../actions/orderAction";

export default function Ordersscreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      dispatch(getOrdersByUserId());
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div>
      <div className="row mt-5 justify-content-center">
        <div className="col-md-8 card">
          <h3 className="m-5">My Orders</h3>
          <table className="table table-striped table-bordered table-hover mb-5">
            <thead className="bg-dark text-light">
              <tr>
                <th>Order ID</th>
                <th>Amount</th>
                <th>Date </th>
                <th>Transaction ID</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
      <br /> <br />
    </div>
  );
}
