import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../actions/orderAction";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Orderinfo({ match }) {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.getOrderByIdReducer);
  const { order, loading, error } = orderstate;

  useEffect(() => {
    dispatch(getOrderById(match.params.orderid));
  }, [dispatch]);

  return (
    <div className="container">
      {error && <Error error="Something went wrong!" />}
      {loading && <Loader />}
      {order && (
        <div className="container">
          <div className="row justify-content-center m-5">
            <div className="col-md-5 card m-5 mt-0">
              <h3 className="mt-4 text-info">Items in your Order</h3>
              <hr />
              {order.orderItems.map((item) => {
                return (
                  <div className="text-start">
                    <h6>{item.name}</h6>
                    <h6>
                      Quantity: <b>{item.quantity}</b>
                    </h6>
                    <h6>
                      Price: {item.quantity} * {item.price} ={" "}
                      {item.price * item.quantity}
                    </h6>
                    <hr />
                  </div>
                );
              })}
            </div>

            <div className="col-md-5 text-start">
              <div className="card pt-0 p-3">
                <h3 className="mt-4 text-info text-center">Order Details</h3>
                <hr />
                <h6>Order ID: {order._id}</h6>
                <h6>Total Amount: ₹{order.orderAmount}</h6>
                <h6>Date of Order: {order.createdAt.substring(0, 10)}</h6>
                <h6>Transaction ID: {order.transactionId}</h6>

                {order.isDelivered ? (
                  <h6>Order Delivered</h6>
                ) : (
                  <h6>Order Placed</h6>
                )}
              </div>
              <br />
              <div className="card pt-0 p-3">
                <h3 className="mt-4 text-info text-center">Shipping Details</h3>
                <hr />
                <h6>
                  {" "}
                  Address: <b>{order.shippingAddress.address}</b>{" "}
                </h6>
                <h6>
                  {" "}
                  City: <b>{order.shippingAddress.city}</b>{" "}
                </h6>
                <h6>
                  {" "}
                  Country: <b>{order.shippingAddress.country}</b>{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}
      <hr />
      <div className="row container justify-content-center">
        <h3 className="text-start">Replacement Conditions:</h3>
        <p>
          <b>Which items are eligible for a Free Replacement?</b>
          <p>
            Fulfilled by Amazon items, Prime eligible items and few Seller
            Fulfilled items are eligible for free replacements. If an eligible
            item is out of stock from the same seller, it cannot be replaced.
            Only a refund against the returned item will be issued.
          </p>
          <b>What are the conditions for Free Replacement?</b>
          <p>
            Items within return window and in stock (exact same item) with same
            seller are eligible for free replacement. The free replacement order
            will be shipped through standard shipping once the original order is
            returned. Free replacements can be requested if the following
            conditions apply:
          </p>
          <ol>
            <li>Item received is physically damaged;</li>
            <li>Item received has missing parts or accessories;</li>
            <li>
              Item received is different from their description on the product
              detail page on Amazon.in;
            </li>{" "}
            or
            <li>Item received is defective/does not work properly.</li>
          </ol>
        </p>
      </div>
    </div>
  );
}
