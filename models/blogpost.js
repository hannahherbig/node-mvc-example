var mongoose = require('mongoose')
  , Schema = new Schema
  , ObjectId = Schema.ObjectId;

// anywhere else in this app we should be able to reference this model by doing 
// mongoose.model('BlogPost'), so we don't actually have to set exports here.
mongoose.model('BlogPost', new Schema(
  { author: ObjectId
  , title: String
  , body: String
  , date: Date }));
