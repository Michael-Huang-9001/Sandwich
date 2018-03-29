var express = require('express');
var router = express.Router();
var main_controller = require("../controllers/main");
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index');
});

router.post('/response', function(req, res) {
	var bread = req.body.bread;
	var meat = req.body.meats;
	var vegetables = req.body.vegetables;
	res.render('index_res');
});

// router.get('/', main_controller.home);

module.exports = router;