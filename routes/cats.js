var express = require('express');
var router = express.Router();

var Cat = require('../models/cat');

/* GET cats listing. */
router.get('/', function(req, res, next) {
	Cat.findAll({
		order: [
			['score', 'DESC'],
		],
	}).then(function(cats) {
		res.render('cats', { title: 'Catmash', cats: cats });
	});
});

module.exports = router;
