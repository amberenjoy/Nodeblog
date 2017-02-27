/*
* @Author: amber
* @Date:   2017-02-24 10:09:13
* @Last Modified by:   amber
* @Last Modified time: 2017-02-24 10:34:46
*/

'use strict';
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Post = mongoose.model('Post');

module.exports = function (app) {
    app.use('/admin', router);
};

router.get('/',function(req,res,next){
    res.redirect('/admin/posts')
});