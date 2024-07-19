const express = require("express");
const app = express();
const routes = require('./routes')
const cors = require("cors");
app.use(cors({ "Access-Control-Allow-Origin": "*" }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',routes)

app.listen(8000, () => {
  console.log("server running on 8000");
});
