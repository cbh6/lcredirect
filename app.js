var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname)));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/spain.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/spain.html'));
});
app.get('/france.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/france.html'));
});
app.get('/international.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/international.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
