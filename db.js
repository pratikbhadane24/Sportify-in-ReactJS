const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var dbconnect = mongoose.connection;

dbconnect.on(`error`, () => {
  console.log("MongoDB connection failed.");
});
dbconnect.on(`connected`, () => {
  console.log("MongoDB connection Successfull.");
});

module.exports = mongoose;
