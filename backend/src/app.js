// CREATE SERVER
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("server is running on port 3000");
});
module.exports = app;
