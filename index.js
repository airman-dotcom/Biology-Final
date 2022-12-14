const express = require("express");
const app = express();
const http = require("http");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.get("/functions", (req, res) => {
  res.sendFile(__dirname + "/public/functions.html");
})

app.get("/anatomy", (req, res) => {
  res.sendFile(__dirname + "/public/anatomy.html");
})

app.get("/homeostasis", (req, res) => {
  res.sendFile(__dirname + "/public/homeostasis.html");
})

app.get("/disease-disorders", (req, res) => {
  res.sendFile(__dirname + "/public/disease-disorders.html")
})

app.get("/bibliography", (req, res) => {
  res.sendFile(__dirname + "/public/bibliography.html");
})

app.listen(3000, () => {
  console.log("Welcome to the Respiratory System.")
})