const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var dbconnection = require("./db");
var productRoute = require("./routes/productRoute");
var userRoute = require("./routes/userRoute");
var orderRoute = require("./routes/orderRoute");

app.use(bodyParser.json());
const path = require("path");
app.use("/api/products/", productRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", orderRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port} 🔥`)
);
