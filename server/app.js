var _ = require('lodash');
var fs = require('fs');
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

var text = fs.readFileSync('users.json', 'utf8');
var jsonContent = JSON.parse(text);

app.get('/wares', function (req, res, next) {
	//console.log(jsonContent["02"]);
  res.send(data.categories);
});

app.get('/menu', function (req, res, next) {
  res.send(data.menuCategories);
});

app.get('/wares/:categoryName', function (req, res, next) {
  res.send(data.waresList[req.params.categoryName]);
});

app.post('/user/:mail/:psw', function (req, res, next) {
	var uniq = true;
	for (var key in jsonContent) {
		if (jsonContent[key].mail == req.params.mail) {
			uniq = false;
			res.sendStatus(304);
			break;
		}
	}
	if (uniq) {
		var length = Object.keys(jsonContent).length;
		jsonContent[length] = {"mail": req.params.mail,"psw": req.params.psw};
		fs.writeFileSync('users.json', JSON.stringify(jsonContent));
		res.sendStatus(200);
	}
});





app.listen(3000);