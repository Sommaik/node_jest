const express = require("express");
const login = require("../service/login");

const route = express.Router();

route.post("/", async (req, res) => {
  const result = await login.singin(req.body.userId, req.body.password);
  if (result.success) res.json(result);
  else res.json({ success: false, error: "Login fail" });
});

route.get("/test", (req, res) => {
  res.end("test");
});

module.exports = route;
