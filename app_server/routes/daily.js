var express = require('express');
var router = express.Router();
var main_controller = require("../controllers/main");

// router.get('/', main_controller.daily);

// router.get('/clock', main_controller.clock);

/* GET daily pages */
router.get('/', function(req, res) {
	res.render("daily");
});

router.get('/daily_res', function(req, res) {
	res.render('daily_res');
});

router.get('/clock', function(req, res) {
	res.render("clock");
});

router.post('/daily_res', function(req, res) {
	var currentWeight = req.body.currentWeight;
	var calorieIntake = req.body.calorieIntake;
	var minutesOfExercise = req.body.minutesOfExercise;
	var hoursOfSleep = req.body.hoursOfSleep;

	var html = "This is a temporary response page from a post request.<br><br>Thank you for your respose.<br> Your current weight is: "
			+ currentWeight + " pounds.<br>Your calorie intake was: "
			+ calorieIntake + " calories.<br>You recently exercised for: "
			+ minutesOfExercise + " minutes.<br>You slept for " + hoursOfSleep
			+ " hours.<br>";
	res.send(html);
});

module.exports = router;

// http://localhost:8000/daily/daily_res?currentWeight=1&calorie_intake=1&minutes_of_exercise=1&hours_of_sleep=1
