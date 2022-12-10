const express = require("express");
const app = express();
const http = require("http");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.listen(3000, () => {
  console.log("Welcome to the Respiratory System.")
})