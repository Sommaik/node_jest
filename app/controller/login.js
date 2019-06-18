const express = require("express");

const route = express.Router();

route.post("/", (req, res) => {
  res.json({
    token: ""
  });
});

route.get("/test", (req, res) => {
  res.end("test");
});

module.exports = route;
