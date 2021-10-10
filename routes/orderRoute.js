const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51JixkcSCvyPsvabEZWRBjRGaWiSHGRwZ7lOko5C8hrziDSBUMduEbkyi4MUU0KwcvGA4B8BPIcUUA4ZCjSB00XHm00QyKspL33"
);

router.post("/placeorder", async (req, res) => {
  const { token, cartItems, currentUser, subtotal } = req.body;

  const customer = await stripe.customers.create({
    email: token.email,
    source: token.id,
  });

  const payment = await stripe.charges.create(
    {
      amount: subtotal * 100,
      currency: "inr",
      customer: customer.id,
      receipt_email: token.email,
    },
    {
      idempotencyKey: uuidv4(),
    }
  );

  if (payment) {
    res.send("Payment Successful!");
  } else {
    return res.status(400).json({ message: "Payment Failed" });
  }
});
module.exports = router;
