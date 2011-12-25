var mongoose = require('mongoose')
  , Schema = new Schema
  , ObjectId = Schema.ObjectId;

mongoose.model('BlogPost', new Schema(
  { author: ObjectId
  , title: String
  , body: String
  , date: Date }));
