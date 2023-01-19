const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

//initialise the express package
const app = express();
app.use(cors());

//use the serve-static package to serve the bundled app files in the dist directory
app.use("/", serveStatic(path.join(__dirname, "/dist")));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

let jsonEncyclopedias;
fs.readFile("data.json", function (err, data) {
  jsonEncyclopedias = JSON.parse(data);
  console.log(
    jsonEncyclopedias.length + " Encyclopedias parsed... eg.",
    jsonEncyclopedias[0]
  );
});

app.get("/encyclopedias", function (req, res) {
  console.log("Fetch encyclopedias");
  res.json(jsonEncyclopedias);
});

//heroku automatically assigns port so leave it to do it's
//work, don't set a port in the heroku dashboard. while the
//5000 or whatever number you set will be for your local
//machine.
const port = process.env.PORT || 8888;
app.listen(port);
console.log(`app is listening on port: ${port}`);
