/*
* @Author: amber
* @Date:   2017-02-22 17:01:04
* @Last Modified by:   amber
* @Last Modified time: 2017-02-23 11:02:17
*/

'use strict';
// Category model

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    created: { type: Date }
});

mongoose.model('Category', CategorySchema);

