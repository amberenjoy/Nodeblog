/*
* @Author: amber
* @Date:   2017-03-02 09:47:06
* @Last Modified by:   amber
* @Last Modified time: 2017-03-02 12:41:16
*/

'use strict';
var passport = require('passport'), 
      LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose'),
      User=mongoose.model('User');

module.exports.init=function(){
    passport.use(new LocalStrategy({
        usernameField:'email',
        passwordField:'password',
    }, function(email, password, done) {
            User.findOne({ email: email }, function (err, user) {
                if (err) { 
                    return done(err); 
                }
                if (!user) {
                    return done(null, false, { message: 'Incorrect email.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
            });
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
            });
        });
};