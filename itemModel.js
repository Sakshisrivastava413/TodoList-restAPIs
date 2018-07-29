const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const List = new Schema({
  item: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('item', List);