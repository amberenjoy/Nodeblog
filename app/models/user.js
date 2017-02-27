/*
* @Author: amber
* @Date:   2017-02-22 17:03:05
* @Last Modified by:   amber
* @Last Modified time: 2017-02-22 17:03:17
*/

'use strict';
// User model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created: { type: Date }
});

mongoose.model('User', UserSchema);
