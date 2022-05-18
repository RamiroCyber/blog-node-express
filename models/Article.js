const Sequelize = require('sequelize');
const connection = require('../database/connection');
const Category = require('../models/Category');

const Article = connection.define('articles', {
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
        type: Sequelize.INTEGER,
        allowNull: false

    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})
//Relacionamentos
Category.hasMany(Article);
Article.belongsTo(Category);

module.exports = Article;