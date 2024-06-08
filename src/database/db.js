const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('kasirdb', 'root', '123', {
  host: 'localhost',
  port: '3305',
  dialect: 'mysql',
//   dialectModule: mysql2
});

module.exports = sequelize