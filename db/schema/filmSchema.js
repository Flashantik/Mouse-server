const mongoose = require('mongoose');

export const filmSchema = new mongoose.Schema({
  name: {type: String},
  rating:{ type: Number},
  image: {type:String},
  comment: {type: String},
  tags: {type: Array},
  url: {type: String}
});