const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var dbconnection = require("./db");
var productRoute = require("./routes/productRoute");

app.use(bodyParser.json());
app.use("/api/products/", productRoute);

app.get("/", (req, res) => {
  res.send("This is from Backend");
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port} 🔥`)
);
