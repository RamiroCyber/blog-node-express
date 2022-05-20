const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const slugify = require('slugify');

router.get('/admin/categories/new', (req, res) => {
    res.render('admin/categories/new');
});

router.post('/categories/save', (req, res) => {
    const title = req.body.title;

    Category.create({
        title: title,
        titleRoute: slugify(title)

    }).then(() => {
        res.redirect('/admin/categories');
    });

});

router.get('/admin/categories', (req, res) => {
    Category.findAll({ order: [['id', 'DESC']] }).then(categories => {
        res.render('admin/categories/index', { categories: categories });
    });
});

router.get('/categories/delete/:id', (req, res) => {
    const id = req.params.id;
    if (id != undefined && !isNaN(id)) {

        Category.destroy({
            where: { id: id }

        }).then(() => { res.redirect('/admin/categories') });

    } else {
        res.redirect('/admin/categories')
    }
});

router.get('/admin/categories/edit/:id', (req, res) => {
    const id = req.params.id;
    Category.findByPk(id).then(category => {

        if (category != undefined && !isNaN(id)) {

            res.render('admin/categories/edit', { category: category });
        } else {

            res.redirect('/admin/categories');
        }
    }).catch(error => {
        res.redirect('/admin/categories')
    })
});

router.post('/categories/update', (req, res) => {
    const id = req.body.id;
    const title = req.body.title;

    Category.update({ title: title, titleRoute: slugify(title) }, {
        where: {
            id: id
        }
    }).then(() => {
        res.redirect('/admin/categories');
    });

});

module.exports = router;