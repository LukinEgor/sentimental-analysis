'use strict';

const express = require('express');
var path    = require("path");

const PORT = 8080;

const app = express();
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
