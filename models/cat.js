var Sequelize = require('sequelize');
var sequelize = require('../sequelize');
var http = require('http');

var Cat = sequelize.define('cat', {
  fileURL: {
	  type: Sequelize.STRING,
	  allowNull: false,
	  notEmpty: true,
	  unique: true,
  },
  score: {
	  type: Sequelize.INTEGER,
	  allowNull: false,
	  defaultValue: 1500,
  },
  wins: {
	  type: Sequelize.INTEGER,
	  allowNull: false,
	  defaultValue: 0,
  },
  losses: {
	  type: Sequelize.INTEGER,
	  allowNull: false,
	  defaultValue: 0,
  },
}, {
	classMethods: {
		getCandidates: function(callback) {
			this.findAll({
				order: [
					Sequelize.fn( 'RAND' ),
				],
				limit: 2
			}).then(function(cats) {
				if (cats && cats.length === 2) {
					http.get(cats[0].fileURL, (result) => {
						const statusCode = result.statusCode;
						const contentType = result.headers['content-type'];

						if (statusCode === 200) {
							http.get(cats[1].fileURL, (result) => {
								const statusCode = result.statusCode;
								const contentType = result.headers['content-type'];

								if (statusCode === 200) {
									callback(cats[0], cats[1]);
								}
							}).on('error', (e) => {
								console.log(`Got error: ${e.message}`);

								cats[1].destroy({ force: true }).then(function() {
									getCandidates(callback);
								});
							});
						}
					}).on('error', (e) => {
						console.log(`Got error: ${e.message}`);
						cats[0].destroy({ force: true }).then(function() {
							getCandidates(callback);
						});
					});
				} else {
					callback(null, null);
				}
			});
		},
	},
	instanceMethods: {
	},
});

module.exports = Cat;
