import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserId } from "../actions/orderAction";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Ordersscreen() {
  const orderstate = useSelector((state) => state.getOrdersByUserIdReducer);
  const { orders, error, loading } = orderstate;

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
              {orders &&
                orders.map((order) => {
                  return (
                    <tr
                      onClick={() => {
                        window.location = `/orderinfo/${order._id}`;
                      }}
                    >
                      <td>{order._id}</td>
                      <td>₹{order.orderAmount}</td>
                      <td>{order.createdAt.substring(0, 10)}</td>
                      <td>{order.transactionId}</td>
                      <td>
                        {order.isDelivered ? (
                          <li>Delivered</li>
                        ) : (
                          <li>Order Placed</li>
                        )}
                      </td>
                    </tr>
                  );
                })}
              {error && <Error error="Something went Wrong." />}
            </tbody>
          </table>
          {loading && <Loader />}
        </div>
      </div>
      <br /> <br />
    </div>
  );
}
