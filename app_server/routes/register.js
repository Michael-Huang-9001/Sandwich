var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('register');
});

router.get('/register_res', function(req, res) {
	res.render('register_res');
});

router.post('/register_res', function(req, res) {
	var name = req.body.name;
	var phone = req.body.phone;
	var email = req.body.email_address;
	var age = req.body.age;
	var gender = req.body.gender;
	var height = req.body.height;
	var weight = req.body.weight;
	var bodyFat = req.body.body_fat;
	var goals = req.body.goals;
	var weekly = req.body.weekly;
	var duration = req.body.duration;
	var breakDur = req.body.break_duration;
	var notes = req.body.notes;
	

	var html = "This is a temporary response page from a post request.<br><br>Thank you for choosing Simple.<br>";
	html += "Name: " + name + "<br>";
	html += "Phone number: " + phone + "<br>";
	html += "Email address: " + email + "<br>";
	html += "Age: " + age + "<br>";
	html += "Gender: " + gender + "<br>";
	html += "Current height: " + height + " inches<br>";
	html += "Current weight: " + weight + " pounds<br>";
	html += "Current body fat percentage: " + bodyFat + "%<br>";
	html += "Fitness goal: " + goals + "<br>";
	html += "Frequency of exercise on weekly basis: " + weekly + "<br>";
	html += "Duration of workout: " + duration + " hour(s)<br>";
	html += "Break time between resuming workout: " + breakDur + "<br>";
	html += "Special notes:<br>" + notes + "<br>";
	res.send(html);
});

module.exports = router;