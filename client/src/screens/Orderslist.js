import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { getAllOrders } from "../actions/orderAction";

export default function Orderslist() {
  const getordersstate = useSelector((state) => state.getAllOrdersReducer);
  const { loading, error, orders } = getordersstate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="shadow-lg p-5 m-5 bg-body rounded table-responsive">
      <h4 className="text-start">Order List</h4>
      {error && <Error error="Something went wrong!" />}
      <table className="table table-striped table-bordered table-hover mb-5 table-responsive-sm">
        <thead className="bg-dark text-light">
          <tr>
            <th>Order ID</th>
            <th>Email</th>
            <th>User ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Transaction ID</th>
          </tr>
        </thead>

        <tbody>
          <div className="text-center">{loading && <Loader />}</div>
          {orders &&
            orders.map((order) => {
              return (
                <tr
                  onClick={() => {
                    window.location.href = `/orderinfo/${order._id}`;
                  }}>
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userid}</td>
                  <td>₹{order.orderAmount}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.transactionId}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
