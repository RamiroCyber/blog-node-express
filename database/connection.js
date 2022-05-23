const Sequelize = require('sequelize');

const connection = new Sequelize('blog', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    timezone: '-03:00'
});

module.exports = connection;