const express = require("express");
const path = require("path");
const cors = require("cors");

const fs = require("fs");
let jsonEncyclopedias;
fs.readFile("data.json", function (err, data) {

  jsonEncyclopedias = JSON.parse(data);
  console.log(jsonEncyclopedias.length + " Encyclopedias parsed... eg.", jsonEncyclopedias[0]);
});

const app = express();
app.use(express.static('public'));
app.use(cors());

app.get("/encyclopedias", function (req, res) {
  console.log("Fetch encyclopedias");
  res.json(jsonEncyclopedias);
});

app.listen(8888, "localhost", function () {
  console.log(
    "Server listening on http://%s:%d in %s mode...",
    this.address().address,
    this.address().port,
    app.settings.env
  );
});
