// Importing modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Defining route locations
var index = require('./app_server/routes/index');
//var register = require('./app_server/routes/register');
//var daily = require('./app_server/routes/daily');

var app = express();

// View engine config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8000);

// Other utilities
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + 'public'));


// ------------------------- Setting routes -------------------------

// Sets the routes for base page, e.g. localhost:8000
app.use('/', index);

// Sets the routes for register page, e.g. localhost:8000/register
//app.use('/register', register);

// Sets the routes for daily page, e.g. localhost:8000/daily
//app.use('/daily', daily);

// ------------------------- End of routing -------------------------


// Run app
app.listen(app.get('port'), function() {
	console.log("Live on port " + app.get('port') + ".");
});

module.exports = app;



