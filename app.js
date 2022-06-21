require("dotenv").config();
const express = require("express");
const passport = require("passport");
const app = express();

require("./passport-setup");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/google", (req, res) => {});

app.listen(5000, () => {
  console.log("App is running on Port 5000");
});
