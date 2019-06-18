const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.options("*", cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.end("Hello World");
});

app.get("/dum", (req, res) => {
  res.end("dummy");
});

app.post("/", (req, res) => {
  const data = req.body;
  res.json({
    success: true,
    data: data
  });
});

module.exports = app;
