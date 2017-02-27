/*
* @Author: amber
* @Date:   2017-02-23 10:25:12
* @Last Modified by:   amber
* @Last Modified time: 2017-02-23 10:30:03
*/

'use strict';
var express = require('express'),
    router = express.Router();

module.exports = function (app) {
    app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.redirect('/posts')
});

router.get('/about', function (req, res, next) {
    res.render('blog/index', {
        title: 'About me',
        pretty: true,
    });
});

router.get('/contact', function (req, res, next) {
    res.render('blog/index', {
        title: 'Contact me',
        pretty: true,
    });
});
