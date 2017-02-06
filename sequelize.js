var Sequelize = require('sequelize');
var sequelize = new Sequelize(
	process.env.NODE_ENV === 'development' ? 'test' : 'heroku_5a6df12c928c7cf',
	process.env.NODE_ENV === 'development' ? 'admin' : 'b5eeefac6148c3',
	process.env.NODE_ENV === 'development' ? 'password' : '25c4ece5',
	{
		host: process.env.NODE_ENV === 'development' ? 'localhost' : 'eu-cdbr-west-01.cleardb.com',
		dialect: 'mysql',

		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	}
);

module.exports = sequelize;
