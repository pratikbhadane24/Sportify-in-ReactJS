const mongoose = require("mongoose");

var mongoDBURL =
  "mongodb+srv://pratik:chelsea%407@cluster0.5yjcb.mongodb.net/Sportify";

mongoose.connect(mongoDBURL, {
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
