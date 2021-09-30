const express = require("express");

const app = express();

var dbconnection = require('./db')

app.get("/", (req, res) => {
  res.send("This is from Backend");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port http://localhost:${port} 🔥`));
