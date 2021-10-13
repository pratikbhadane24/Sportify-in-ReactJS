const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.get("/getallproducts", (req, res) => {
  Product.find({}, (err, docs) => {
    if (!err) {
      return res.send(docs);
    } else {
      return res.status(400).json({ message: "Something went wrong!" });
    }
  });
});

router.post("/getproductbyid", (req, res) => {
  Product.find({ _id: req.body.productid }, (err, docs) => {
    if (!err) {
      res.send(docs[0]);
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });
});

router.post("/addreview", async (req, res) => {
  const { review, productid, currentUser } = req.body;
  const product = await Product.findById({ _id: productid });

  const reviewmodel = {
    name: currentUser.name,
    userid: currentUser._id,
    rating: review.rating,
    comment: review.comment,
  };
  product.reviews.push(reviewmodel);

  product.save((err) => {
    if (err) {
      return res.status(400).json({ message: "Something went wrong" });
    } else {
      res.send("Review Submitted Successfully.");
    }
  });
});

module.exports = router;
