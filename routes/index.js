var express = require('express');
var router = express.Router();

var Sequelize = require('sequelize');
var Cat = require('../models/cat');

/* GET home/vote page. */
router.get('/', function(req, res, next) {
	Cat.getCandidates(function(candidateOne, candidateTwo) {
		res.render('index', { title: 'Catmash', candidateOne: candidateOne, candidateTwo: candidateTwo });
	});
});

/* POST vote. */
router.post('/rank', function(req, res, next) {
	var params = {
		winner: req.body.winnerId !== undefined ? req.body.winnerId : null,
		loser: req.body.loserId !== undefined ? req.body.loserId : null,
	};
	console.log('params :', params);
	
	Cat.findAll({
		where: {
			id: {
				$in: [params.winner, params.loser],
			},
		},
	}).then(function(cats) {
		if (!cats || cats.length !== 2) {
			res.redirect('/');
			return;
		}
		var winner = cats[0].id == params.winner ? cats[0] : cats[1];
		var loser = cats[0].id == params.loser ? cats[0] : cats[1];

		var winner_expected = expected(loser.score, winner.score);
		winner.score = win(winner.score, winner_expected);
		winner.wins += 1;

		var loser_expected = expected(winner.score, loser.score);
		loser.score = loss(loser.score, loser_expected);
		loser.losses += 1;
		winner.save().then(function() {
			loser.save().then(function() {
				Cat.getCandidates(function(candidateOne, candidateTwo) {
					res.render('vote', { candidateOne: candidateOne, candidateTwo: candidateTwo });
				});
			});
		});
	});
});

module.exports = router;
