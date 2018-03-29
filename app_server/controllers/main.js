// My main.js.

/*
 * This defines the routes and page serving but unimplemented.
 */

// Renders home page.
module.exports.home = function(req, res) {
	res.render('index');
};

// Renders daily inputs page.
module.exports.daily = function(req, res) {
	res.render('daily');
};

// Renders Rayquaza clock.
module.exports.clock = function(req, res) {
	res.render('clock');
};