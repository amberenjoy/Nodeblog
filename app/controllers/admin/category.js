/*
* @Author: amber
* @Date:   2017-02-24 16:30:11
* @Last Modified by:   amber
* @Last Modified time: 2017-03-01 15:05:24
*/

'use strict';
var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Post = mongoose.model('Post'),
    slug=require('slug'),
    pinyin=require('pinyin'),
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
        action:"/admin/categories/add",
        category:{_id:''}
    });
});

router.post('/add',function(req,res,next){
    req.checkBody('name','文章标题不能为空').notEmpty();

    var errors=req.validationErrors();
    if(errors){
        console.log(errors);
        return res.render('admin/category/add',{
            errors:errors,
            name:req.body.name,
        });
    }

    //res.jsonp(req.body);
    var name=req.body.name.trim();
    var py=pinyin(name,{
        style:pinyin.STYLE_NORMAL,
        heteronym:false
        }).map(function(item){
            return item[0];
        }).join(' ');

    var category=new Category({
            name:name,
            slug:slug(py),
            created:new Date(),
        });

    category.save(function(err,post){
        if(err){
            req.flash('error','分类保存失败');
            res.redirect('/admin/categories/add');
        }else{
            req.flash('info','分类保存成功');
            res.redirect('/admin/categories');
        }
    })
});
router.get('/edit/:id',getCategoryById, function(req,res,next){
    res.render('admin/category/add', {
        action:"/admin/categories/edit/"+req.category._id,
        category: req.category,            
    });
});
router.post('/edit/:id',getCategoryById,function(req,res,next){
    var category=req.category;
    var name=req.body.name.trim();
    var py=pinyin(name,{
        style:pinyin.STYLE_NORMAL,
        heteronym:false
    }).map(function(item){
        return item[0];
    }).join(' ');

    category.name=name;
    category.slug=slug(py);

    category.save(function(err,post){
        if(err){
            req.flash('error','分类编辑失败');
            res.redirect('/admin/categories/edit/'+category._id);
        }else{
            req.flash('info','分类编辑成功');
            res.redirect('/admin/categories');
        }
    });
});
router.get('/delete/:id',function(req,res,next){
     if(!req.params.id){
        return next(new Error('no category id provided'));
    }
    Category.remove({_id:req.params.id}).exec(function(err,rowsRemoved){
        if(err){
            return next(err);
        }

        if(rowsRemoved){
            req.flash('success','分类删除成功');
        }else{
            req.flash('failure','分类删除失败');
        }

        res.redirect('/admin/categories');
    });
});

function getCategoryById(req,res,next){
    if(!req.params.id){
        return next(new Error('no category id provided'));
    }

    Category.findOne({ _id: req.params.id })
        .exec(function(err,category){
            if(err){
                return next(err);
            }
            if(!category){
                return next(new Error('category not found: ', req.params.id));
            }

            req.category=category;
            next();
        })
}