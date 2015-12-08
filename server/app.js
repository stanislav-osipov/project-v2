var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());

data = {
	waresList: []
};
data.waresList = require('./WaresList.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/wares', function (req, res, next) {
  res.send(data.waresList);
});

app.listen(3000);