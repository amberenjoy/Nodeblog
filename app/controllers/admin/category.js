/*
* @Author: amber
* @Date:   2017-02-24 16:30:11
* @Last Modified by:   amber
* @Last Modified time: 2017-02-24 16:38:33
*/

'use strict';
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Post = mongoose.model('Post'),
    Category=mongoose.model('Category');

module.exports = function (app) {
    app.use('/admin/categories', router);
};

router.get('/', function (req, res, next) {
    res.render('admin/category/index', {
        pretty: true,
    });
});

router.get('/add', function (req, res, next) {
    res.render('admin/category/add', {
        pretty: true,
    });
});

router.post('/add',function(req,res,next){

});

router.get('/edit/:id',function(req,res,next){

});
router.post('/edit/:id',function(req,res,next){

});
router.get('/delete/:id',function(req,res,next){

});