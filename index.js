/* eslint-disable no-undef */
// Import essential libraries
const express = require("express");
const app = express();
const path = require("path");

// const router = express.app();
// eslint-disable-next-line no-undef

app.use(express.static(__dirname + "/"));

// Setup essential routes
app.get("/", function (req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", function (req, res) {
// eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "/105/about-me/index.html"));
});
app.get("/search-result", function (req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "/search/result/index.html"));
});


app.get('/test105', function (req, res) {
  res.status(200).json({
    message: "Hello World!"
  });
});
app.get("/*", function (req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname + "404.html"));
});


const PORT = 1050;
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
