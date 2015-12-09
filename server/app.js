var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());

data = {
	categories: [],
	menuCategories: [],
	waresList: []
};
data.categories = require('./categories.js');
data.menuCategories = require('./menuCategories.js');
data.waresList = require('./waresList.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/wares', function (req, res, next) {
  res.send(data.categories);
});

app.get('/menu', function (req, res, next) {
  res.send(data.menuCategories);
});

app.get('/wares/:categoryName', function (req, res, next) {
  res.send(data.waresList[req.params.categoryName]);
});

app.listen(3000);