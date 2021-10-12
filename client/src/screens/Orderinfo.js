import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../actions/orderAction";

export default function Orderinfo({ match }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderById(match.params.orderid));
  }, []);

  return (
    <div>
      <h1>Order Info</h1>
    </div>
  );
}
