import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function Checkout(amount) {
  function tokenHandler(token) {
    console.log(token);
  }

  return (
    <div>
      <StripeCheckout
        token={tokenHandler}
        amount={amount}
        shippingAddress
        stripeKey="pk_test_51JixkcSCvyPsvabEBTo9nDCL49VENL2EC43KAmTZbd9QmqerJpzMmC2E0VMdeWR73pAqZr6ZGPYFZjTWxvTwjUYP00xuLLvtXh"
      >
        <button className="m-3 mb-4 btn btn-lg btn-success btn-pay">
          Proceed To Payment
        </button>
      </StripeCheckout>
    </div>
  );
}
