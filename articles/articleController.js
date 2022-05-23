const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const Article = require('../models/Article');
const slugify = require('slugify');

router.get('/admin/articles/new', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/articles/new', { categories: categories });
    })

});

router.get('/admin/articles', (req, res) => {
 res.render('/')
});

router.post('/articles/save', (req, res) => {
    const title = req.body.title;
    const body = req.body.body;
    const category = req.body.category;

    Article.create({
        title: title,
        titleRoute: slugify(title),
        body: body,
        categoryId: category
        
    }).then(() => {
        res.send('OK')
    })
});

module.exports = router;