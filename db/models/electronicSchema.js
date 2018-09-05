const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const electronicSchema = new Schema({
  category: String,
  brand: String,
  name: String,
  price: Number,
  photos: Array
});

const Electonic = model('Electronic', electronicSchema);

module.exports = {
  Electonic: Electonic
};
