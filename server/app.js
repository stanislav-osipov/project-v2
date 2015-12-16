var _ = require('lodash');
var fs = require('fs');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

data = {
	categories: [],
	menuCategories: [],
	waresList: [],
	wares: []
};
data.categories = require('./categories.js');
data.menuCategories = require('./menuCategories.js');
data.waresList = require('./waresList.js');
data.wares = require('./wares.js');

var text = fs.readFileSync('users.json', 'utf8');
var jsonUsers = JSON.parse(text);

app.get('/wares', function (req, res, next) {
  res.send(data.categories);
});

app.get('/menu', function (req, res, next) {
  res.send(data.menuCategories);
});

app.get('/wares/:categoryName', function (req, res, next) {
  res.send(data.waresList[req.params.categoryName]);
});

app.get('/ware/:wareName', function (req, res, next) {
  res.send(data.wares[req.params.wareName]);
});

app.post('/users', function (req, res, next) {
	var uniq = true;
	for (var key in jsonUsers) {
		if (jsonUsers[key].mail == req.body.mail) {
			uniq = false;
			res.sendStatus(304);
			break;
		}
	}
	if (uniq) {
		var length = Object.keys(jsonUsers).length;
		jsonUsers[length] = {"mail": req.body.mail,"psw": req.body.psw};
		fs.writeFileSync('users.json', JSON.stringify(jsonUsers));
		res.sendStatus(200);
	}
});

app.post('/loginUsers/:mail', function (req, res, next) {
	var requestedUser = _.findWhere(jsonUsers, {"mail": req.params.mail});
	if (!!requestedUser) {
		if (requestedUser.psw == req.body.psw) {
			var id = _.findKey(jsonUsers , requestedUser);
			var token = (+new Date() + Math.floor(Math.random() * 100000 * (id + 1))).toString(36);
			jsonUsers[id].token = token;
			fs.writeFileSync('users.json', JSON.stringify(jsonUsers));
			res.send({"token": token, "id": id});
		} else {
			res.sendStatus(304);
		}
	} else {
		res.sendStatus(304);
	}
});

app.post('/autoLogin', function (req, res, next) {
	var requestedUser = jsonUsers[req.body.id];
	if (!!requestedUser) {
		if (requestedUser.token == req.body.token) {
			res.sendStatus(200);
		} else {
			res.sendStatus(304);
		}
	} else {
		res.sendStatus(304);
	}
});

app.listen(3000);