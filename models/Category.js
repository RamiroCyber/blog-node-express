const Sequelize = require('sequelize');
const connection = require('../database/connection');


const Category = connection.define('categories', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,

    },
    titleRoute: {
        type: Sequelize.TEXT,
        allowNull: false

    }
});

module.exports = Category;