/*
* @Author: amber
* @Date:   2017-02-22 17:03:05
* @Last Modified by:   amber
* @Last Modified time: 2017-03-02 11:09:44
*/

'use strict';
// User model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var md5=require('md5');

var UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created: { type: Date }
});

UserSchema.methods.validPassword=function(password){
    var isMatch=md5(password)===this.password;
    console.log('匹配',password,isMatch);
    return isMatch;
}
mongoose.model('User', UserSchema);
