import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../actions/orderAction";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { validate } from "uuid";

export default function Checkout({ amount }) {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.placeOrderReducer);

  const { loading, success, error } = orderstate;

  function tokenHandler(token) {
    dispatch(placeOrder(token, amount));
  }
  function validate() {
    if (!localStorage.getItem("currentUser")) {
      window.location.href = "/login";
    }
  }
  return (
    <div>
      {loading && <Loader />}
      {success && (
        <div class="alert alert-success" role="alert">
          Order Placed Successfully.
        </div>
      )}
      {error && <Error error="Something Went Wrong!" />}
      <StripeCheckout
        token={tokenHandler}
        currency="inr"
        amount={amount * 100}
        shippingAddress
        stripeKey="pk_test_51JixkcSCvyPsvabEBTo9nDCL49VENL2EC43KAmTZbd9QmqerJpzMmC2E0VMdeWR73pAqZr6ZGPYFZjTWxvTwjUYP00xuLLvtXh"
      >
        <button
          className="m-3 mb-4 btn btn-lg btn-success btn-pay"
          onClick={validate}
        >
          Proceed To Payment
        </button>
      </StripeCheckout>
    </div>
  );
}
