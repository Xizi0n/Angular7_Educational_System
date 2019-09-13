const express = require("express");
const http = require("http");
const path = require("path");

const app = express();

const port = 4200;

app.use(express.static(__dirname + "/dist/Educational-System"));

app.get("/*", (req, res) => res.sendFile(path.join(__dirname)));

app.listen(port, () => {
  console.log("runing");
});
