const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const login = require("./controller/login");
const auth = require("./helper/auth");
const multer = require("multer");
const upload = multer({
  dest: "upload/"
});

const app = express();
app.use(cors());
app.options("*", cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(auth.initialize());

app.use("/login", login);

app.get("/", (req, res) => {
  res.end("Hello World");
});

app.get("/dum", auth.authenticate(), (req, res) => {
  res.end("dummy");
});

app.post("/", (req, res) => {
  const data = req.body;
  res.json({
    success: true,
    data: data
  });
});

app.get("/users/:userId/books/:bookId", (req, res) => {
  const data = req.params;
  res.json({
    success: true,
    data
  });
});

app.post("/profile", upload.single("avatar"), (req, res) => {
  res.json({
    success: true
  });
});

module.exports = app;
