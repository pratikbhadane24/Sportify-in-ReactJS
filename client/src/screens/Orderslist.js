import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { getAllOrders } from "../actions/orderAction";

export default function Orderslist() {

const dispatch = useDispatch()
    useEffect(() => {
dispatch(getAllOrder())

    }, [])

  return (
    <div>
      <h1>This is orders List</h1>
    </div>
  );
}
