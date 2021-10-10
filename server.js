const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var dbconnection = require("./db");
var productRoute = require("./routes/productRoute");
var userRoute = require("./routes/userRoute");
var orderRoute = require("./routes/orderRoute");
 
app.use(bodyParser.json());
app.use("/api/products/", productRoute); 
app.use("/api/users/", userRoute);
app.use("/api/orders/", orderRoute);

app.get("/", (req, res) => {
  res.send("Go To localhost:3000 for Frontend");
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port} 🔥`)
);
